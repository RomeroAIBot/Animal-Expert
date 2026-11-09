import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InstallHelp from '../components/InstallHelp';
import { levelLabels } from '../data/triviaLevels';
import { deletePushSubscription, savePushSubscription, updateAccountSettings, updateDisplayName } from '../utils/cloud';
import { getPushState, localTimeZone, subscribeToPush, unsubscribeFromPush } from '../utils/pwa';
import { storage } from '../utils/storage';

const NAME_PATTERN = /^[A-Za-z0-9 _.-]{2,24}$/;
const levelChoices = ['', 'easy', 'intermediate', 'difficult', 'multi'];
const hourChoices = [1, 2, 3, 4, 5, 6, 7, 8];

const clockLabel = (hoursBefore) => {
  const hour = 24 - hoursBefore;
  return `${hour > 12 ? hour - 12 : hour} PM`;
};

function Status({ status }) {
  return (
    <p role="status" className={status?.kind === 'error' ? 'status-error' : 'muted'}>
      {status?.text}
    </p>
  );
}

function NameSettings({ user, profile, setProfile }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setName(user ? profile?.display_name || '' : storage.getProfile().name || '');
  }, [user, profile]);

  const save = async (event) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!user) {
      storage.setProfile({ ...storage.getProfile(), name: trimmed });
      setStatus({ kind: 'success', text: trimmed ? `Saved. Welcome, ${trimmed}.` : 'Name removed.' });
      return;
    }
    if (trimmed && !NAME_PATTERN.test(trimmed)) {
      setStatus({ kind: 'error', text: 'Display names are 2 to 24 letters, numbers, spaces, dots, dashes or underscores.' });
      return;
    }
    setStatus({ kind: 'info', text: 'Saving...' });
    try {
      await updateDisplayName(trimmed);
      setProfile((prev) => ({ ...(prev || {}), display_name: trimmed || null }));
      storage.setProfile({ ...storage.getProfile(), name: trimmed });
      setStatus({ kind: 'success', text: trimmed ? `Saved. Your display name is now ${trimmed}.` : 'Display name removed.' });
    } catch (error) {
      setStatus({ kind: 'error', text: error.message });
    }
  };

  return (
    <article className="card">
      <h3>Your name</h3>
      <p>
        {user
          ? 'Your display name appears in the rankings (if you join them) and in your welcome-back message. Your email is never shown.'
          : 'Used to greet you on this device. Sign in to choose a display name for the rankings.'}
      </p>
      <form onSubmit={save} className="account-form">
        <label htmlFor="settings-name">{user ? 'Display name' : 'Your name'}</label>
        <input
          id="settings-name"
          type="text"
          maxLength={24}
          autoComplete="nickname"
          aria-describedby={user ? 'settings-name-hint' : undefined}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {user && (
          <p id="settings-name-hint" className="muted">2 to 24 letters, numbers, spaces, dots, dashes or underscores.</p>
        )}
        <button type="submit" className="button">Save name</button>
      </form>
      <Status status={status} />
    </article>
  );
}

function LevelSettings({ user, settings, setSettings }) {
  const [status, setStatus] = useState(null);
  const current = settings.defaultLevel || '';

  const choose = async (value) => {
    setSettings((prev) => ({ ...prev, defaultLevel: value || null }));
    const label = value ? `${levelLabels[value]} is now picked for you` : 'You will choose a level each day';
    if (!user) return setStatus({ kind: 'success', text: `Saved on this device. ${label}.` });
    try {
      const synced = await updateAccountSettings({ defaultLevel: value || null });
      setStatus({ kind: 'success', text: synced ? `Saved to your account. ${label}.` : `Saved on this device. ${label}.` });
    } catch {
      setStatus({ kind: 'error', text: `Saved on this device only; your account could not be reached. ${label}.` });
    }
  };

  return (
    <article className="card">
      <fieldset className="settings-fieldset">
        <legend>
          <h3>Daily trivia level</h3>
        </legend>
        <p>Pick a level to have it chosen for you on the Daily Trivia setup screen, or choose each day.</p>
        {levelChoices.map((value) => (
          <label key={value || 'none'} className="checkbox-label">
            <input
              type="radio"
              name="default-level"
              value={value}
              checked={current === value}
              onChange={() => choose(value)}
            />
            {value ? levelLabels[value] : 'No default: I choose each day'}
          </label>
        ))}
      </fieldset>
      <Status status={status} />
    </article>
  );
}

const pushMessages = {
  'needs-install':
    'On iPhone and iPad, reminders only work from the home-screen app. Add Animal Expert to your home screen (see below), open it from there, and come back to this page.',
  unsupported: "This browser can't show notifications from websites.",
  'not-configured': "Reminders aren't switched on for the site yet. They will appear here once they are.",
  blocked:
    'Notifications are blocked for Animal Expert. To allow them on iPhone, open the Settings app, tap Notifications, then Animal Expert, and turn on Allow Notifications.'
};

function ReminderSettings({ user, settings, setSettings }) {
  const [state, setState] = useState('checking');
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);
  // App copies the account's saved values into settings when the player signs in.
  const hoursBefore = settings.reminderHoursBefore ?? 2;
  const missedAlerts = settings.missedStreakAlerts ?? true;

  useEffect(() => {
    getPushState().then(setState).catch(() => setState('unsupported'));
  }, []);

  const savePrefs = async (changes) => {
    setSettings((prev) => ({ ...prev, ...changes }));
    if (!user) return;
    try {
      const synced = await updateAccountSettings({ ...changes, timeZone: localTimeZone() });
      setStatus(
        synced
          ? { kind: 'success', text: 'Saved.' }
          : { kind: 'error', text: 'Saved on this device, but the server is not ready for reminder settings yet.' }
      );
    } catch {
      setStatus({ kind: 'error', text: 'Could not reach the server. Try again later.' });
    }
  };

  const turnOn = async () => {
    setBusy(true);
    setStatus({ kind: 'info', text: 'Asking for permission...' });
    try {
      const subscription = await subscribeToPush();
      await savePushSubscription(subscription, localTimeZone());
      await updateAccountSettings({ reminderHoursBefore: hoursBefore, missedStreakAlerts: missedAlerts, timeZone: localTimeZone() });
      setState('on');
      setStatus({ kind: 'success', text: `Reminders are on. You'll get one at about ${clockLabel(hoursBefore)} on days you haven't played.` });
    } catch (error) {
      if (error.message === 'blocked') setState('blocked');
      setStatus({
        kind: 'error',
        text:
          error.message === 'dismissed'
            ? 'Notifications were not allowed. Tap "Turn on reminders" to be asked again.'
            : error.message === 'blocked'
              ? pushMessages.blocked
              : `Could not turn on reminders: ${error.message}`
      });
    } finally {
      setBusy(false);
    }
  };

  const turnOff = async () => {
    setBusy(true);
    try {
      const endpoint = await unsubscribeFromPush();
      await deletePushSubscription(endpoint).catch(() => {});
      setState('off');
      setStatus({ kind: 'success', text: 'Reminders are off on this device.' });
    } catch (error) {
      setStatus({ kind: 'error', text: `Could not turn off reminders: ${error.message}` });
    } finally {
      setBusy(false);
    }
  };

  return (
    <article className="card">
      <h3>Streak reminders</h3>
      <p>
        A notification on days you haven't played a daily game yet, so your streak doesn't end at midnight. Times
        follow this device's time zone{localTimeZone() ? ` (${localTimeZone().replace(/_/g, ' ')})` : ''}.
      </p>
      {!user ? (
        <p>
          <Link to="/account">Sign in</Link> to get streak reminders.
        </p>
      ) : (
        <>
          {pushMessages[state] && <p>{pushMessages[state]}</p>}
          <div className="account-form">
            <label htmlFor="reminder-hours">When to remind me</label>
            <select
              id="reminder-hours"
              value={hoursBefore}
              onChange={(event) => savePrefs({ reminderHoursBefore: Number(event.target.value) })}
            >
              {hourChoices.map((hours) => (
                <option key={hours} value={hours}>
                  {hours} hour{hours === 1 ? '' : 's'} before midnight ({clockLabel(hours)})
                </option>
              ))}
            </select>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={missedAlerts}
                onChange={(event) => savePrefs({ missedStreakAlerts: event.target.checked })}
              />
              Also tell me the next morning if I miss a day and my streak resets
            </label>
          </div>
          <div className="card-actions">
            {state === 'on' && (
              <button type="button" className="button ghost" onClick={turnOff} disabled={busy}>
                Turn off reminders
              </button>
            )}
            {(state === 'off' || state === 'checking') && (
              <button type="button" className="button" onClick={turnOn} disabled={busy || state === 'checking'}>
                Turn on reminders
              </button>
            )}
          </div>
          {state === 'on' && !status && <p className="muted">Reminders are on for this device.</p>}
        </>
      )}
      <Status status={status} />
    </article>
  );
}

function SettingsPage({ appContext }) {
  const { user, profile, setProfile, settings, setSettings } = appContext;
  return (
    <section>
      <h2>Settings</h2>
      <NameSettings user={user} profile={profile} setProfile={setProfile} />
      <LevelSettings user={user} settings={settings} setSettings={setSettings} />
      <ReminderSettings user={user} settings={settings} setSettings={setSettings} />
      <InstallHelp />
    </section>
  );
}

export default SettingsPage;
