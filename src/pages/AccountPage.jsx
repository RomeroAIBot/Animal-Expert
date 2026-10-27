import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteAccount, getProfile, sendSignInLink, updateProfile } from '../utils/cloud';

const NAME_PATTERN = /^[A-Za-z0-9 _.-]{2,24}$/;

function SignInForm({ signInError }) {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  // A failed or expired link is reported after the page loads.
  useEffect(() => {
    if (signInError) setStatus({ kind: 'error', text: signInError });
  }, [signInError]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = displayName.trim();
    if (name && !NAME_PATTERN.test(name)) {
      setStatus({ kind: 'error', text: 'Display names are 2 to 24 letters, numbers, spaces, dots, dashes or underscores.' });
      return;
    }
    setSending(true);
    setStatus({ kind: 'info', text: 'Sending...' });
    try {
      await sendSignInLink(email.trim(), name);
      setStatus({
        kind: 'success',
        text: `Check your email at ${email.trim()} for a sign-in link. Opening it signs you in on that device. The link works once and expires after an hour.`
      });
    } catch (error) {
      const text =
        error.status === 429
          ? 'Too many sign-in emails were sent recently. Wait a few minutes and try again.'
          : `Could not send the link: ${error.message}`;
      setStatus({ kind: 'error', text });
    } finally {
      setSending(false);
    }
  };

  return (
    <article className="card">
      <h3>Sign in or create an account</h3>
      <p>
        Enter your email and we'll send you a sign-in link. There's no password. Signing in keeps your
        streak and game history across devices, and lets you join the public daily rankings.
      </p>
      <form onSubmit={handleSubmit} className="account-form">
        <label htmlFor="account-email">Email address</label>
        <input
          id="account-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="account-display-name">Display name (optional, for new accounts)</label>
        <input
          id="account-display-name"
          type="text"
          maxLength={24}
          autoComplete="nickname"
          aria-describedby="account-display-name-hint"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
        <p id="account-display-name-hint" className="muted">
          Shown with your email on your account. You can change it later. 2 to 24 letters, numbers, spaces, dots,
          dashes or underscores.
        </p>
        <button type="submit" className="button" disabled={sending}>
          Email me a sign-in link
        </button>
      </form>
      <p role="status" className={status?.kind === 'error' ? 'status-error' : 'muted'}>
        {status?.text}
      </p>
      <p className="muted">Without an account, your progress is saved in this browser only.</p>
    </article>
  );
}

function ProfileForm({ onSaved }) {
  const [profile, setProfile] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [showOnLeaderboard, setShowOnLeaderboard] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getProfile()
      .then((data) => {
        setProfile(data);
        setDisplayName(data?.display_name || '');
        setShowOnLeaderboard(Boolean(data?.show_on_leaderboard));
      })
      .catch(() => setStatus({ kind: 'error', text: 'Could not load your profile. Try again later.' }));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = displayName.trim();
    if (name && !NAME_PATTERN.test(name)) {
      setStatus({ kind: 'error', text: 'Display names are 2 to 24 letters, numbers, spaces, dots, dashes or underscores.' });
      return;
    }
    if (showOnLeaderboard && !name) {
      setStatus({ kind: 'error', text: 'Choose a display name to appear in the rankings.' });
      return;
    }
    setStatus({ kind: 'info', text: 'Saving...' });
    try {
      await updateProfile({ displayName: name, showOnLeaderboard });
      onSaved?.(name);
      setStatus({
        kind: 'success',
        text: showOnLeaderboard
          ? `Saved. Your daily scores appear in the rankings as ${name}.`
          : 'Saved. Your scores are private.'
      });
    } catch (error) {
      setStatus({ kind: 'error', text: error.message });
    }
  };

  if (!profile && !status) return <p role="status">Loading your profile...</p>;

  return (
    <article className="card">
      <h3>Public rankings</h3>
      <p>
        Only your official daily scores (your first run of each daily game) are ranked, under the name you
        choose. Your email is never shown.
      </p>
      <form onSubmit={handleSubmit} className="account-form">
        <label htmlFor="display-name">Display name</label>
        <input
          id="display-name"
          type="text"
          maxLength={24}
          autoComplete="nickname"
          aria-describedby="display-name-hint"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
        <p id="display-name-hint" className="muted">2 to 24 letters, numbers, spaces, dots, dashes or underscores.</p>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showOnLeaderboard}
            onChange={(event) => setShowOnLeaderboard(event.target.checked)}
          />
          Show my daily scores in the public rankings
        </label>
        <button type="submit" className="button">Save</button>
      </form>
      <p role="status" className={status?.kind === 'error' ? 'status-error' : 'muted'}>
        {status?.text}
      </p>
    </article>
  );
}

function DeleteAccount({ onDeleted }) {
  const [confirming, setConfirming] = useState(false);
  const [status, setStatus] = useState('');

  const handleDelete = async () => {
    setStatus('Deleting...');
    try {
      await deleteAccount();
      onDeleted();
    } catch (error) {
      setStatus(`Could not delete your account: ${error.message}`);
    }
  };

  return (
    <article className="card">
      <h3>Delete account</h3>
      <p>Deletes your account, profile and every result saved to it. Progress on this device stays.</p>
      {!confirming && (
        <button type="button" className="button button-reset" onClick={() => setConfirming(true)}>
          Delete my account
        </button>
      )}
      {confirming && (
        <p>
          This can't be undone. Delete your account?{' '}
          <button type="button" className="button button-reset" onClick={handleDelete}>Yes, delete it</button>{' '}
          <button type="button" className="button ghost" onClick={() => setConfirming(false)}>Cancel</button>
        </p>
      )}
      <p role="status" className="muted">{status}</p>
    </article>
  );
}

function AccountPage({ appContext }) {
  const { user, setUser, sync, syncNow, signOut, signInError } = appContext;
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user) getProfile().then((data) => setDisplayName(data?.display_name || '')).catch(() => {});
  }, [user]);

  if (!user) {
    return (
      <section>
        <h2>Account</h2>
        <SignInForm signInError={signInError} />
      </section>
    );
  }

  return (
    <section>
      <h2>Account</h2>
      <article className="card">
        <h3>Signed in</h3>
        <p>
          You're signed in as {displayName ? `${displayName} (${user.email})` : user.email}.
        </p>
        <p role="status" className={sync.status === 'error' ? 'status-error' : 'muted'}>
          {sync.message}
        </p>
        <div className="card-actions">
          <button type="button" className="button" onClick={syncNow} disabled={sync.status === 'syncing'}>
            Sync now
          </button>
          <button type="button" className="button ghost" onClick={signOut}>
            Sign out
          </button>
        </div>
        <p>
          <Link to="/rankings">See today's rankings</Link>
        </p>
      </article>
      <ProfileForm onSaved={setDisplayName} />
      <DeleteAccount onDeleted={() => setUser(null)} />
    </section>
  );
}

export default AccountPage;
