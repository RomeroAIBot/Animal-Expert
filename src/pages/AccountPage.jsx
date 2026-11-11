import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteAccount, getProfile, getSignedInUser, sendSignInLink, updateProfile, verifySignInCode } from '../utils/cloud';
import { isInstalled } from '../utils/pwa';

const NAME_PATTERN = /^[A-Za-z0-9 _.-]{2,24}$/;

function CodeForm({ email, onSignedIn }) {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null);
  const [checking, setChecking] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const digits = code.replace(/\D/g, '');
    if (digits.length < 6) {
      setStatus({ kind: 'error', text: 'Enter the code from the email. It is 6 or more digits.' });
      return;
    }
    setChecking(true);
    setStatus({ kind: 'info', text: 'Checking the code...' });
    try {
      await verifySignInCode(email, digits);
      onSignedIn();
    } catch (error) {
      setStatus({
        kind: 'error',
        text:
          error.status === 429
            ? 'Too many tries. Wait a few minutes and try again.'
            : 'That code did not work. It may be mistyped, already used, or more than an hour old. Check it, or send a new email.'
      });
      setChecking(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="account-form code-form">
      <label htmlFor="account-code">Sign-in code from the email</label>
      <input
        ref={inputRef}
        id="account-code"
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={10}
        aria-describedby="account-code-hint"
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <p id="account-code-hint" className="muted">
        {isInstalled()
          ? "You're in the home-screen app, so type the code here. The link in the email would open Safari instead, and Safari's sign-in isn't shared with this app."
          : 'Typing the code signs you in right here. You can also open the link in the email instead.'}
      </p>
      <button type="submit" className="button" disabled={checking}>
        Sign in with code
      </button>
      <p role="status" className={status?.kind === 'error' ? 'status-error' : 'muted'}>
        {status?.text}
      </p>
    </form>
  );
}

function SignInForm({ signInError, onSignedIn }) {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const [sentTo, setSentTo] = useState('');

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
      setSentTo(email.trim());
      setStatus({
        kind: 'success',
        text: `Sent. Check your email at ${email.trim()}. It has a sign-in code to type below, and a link. Both work once and expire after an hour.`
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
      <h2>Sign in or create an account</h2>
      <p>
        Enter your email and we'll send you a sign-in code and link. There's no password. Signing in keeps
        your streak and game history across devices, and lets you join the public daily rankings. Once
        you're signed in, you stay signed in on this device until you sign out.
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
          {sentTo ? 'Send a new email' : 'Email me a sign-in code'}
        </button>
      </form>
      <p role="status" className={status?.kind === 'error' ? 'status-error' : 'muted'}>
        {status?.text}
      </p>
      {sentTo && <CodeForm key={sentTo} email={sentTo} onSignedIn={onSignedIn} />}
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
      <h2>Public rankings</h2>
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
      <h2>Delete account</h2>
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
        <h1>Account</h1>
        <SignInForm
          signInError={signInError}
          onSignedIn={() => {
            setUser(getSignedInUser());
            syncNow();
          }}
        />
      </section>
    );
  }

  return (
    <section>
      <h1>Account</h1>
      <article className="card">
        <h2>Signed in</h2>
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
