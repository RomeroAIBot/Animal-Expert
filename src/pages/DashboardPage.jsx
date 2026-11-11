import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDateKey } from '../utils/seed';
import { storage } from '../utils/storage';

function DashboardPage({ appContext }) {
  const [profile, setProfile] = useState(storage.getProfile());
  const [inputName, setInputName] = useState(profile.name || '');
  const [saved, setSaved] = useState('');
  const today = getDateKey();
  const playedToday = storage.getHistory().filter((item) => item.date === today && item.mode.startsWith('daily'));
  const signedIn = Boolean(appContext.user);
  const accountName = appContext.profile?.display_name || '';
  // Signed in, the account's display name is the player's name; otherwise the one saved on this device.
  const name = signedIn ? accountName || profile.name : profile.name;

  useEffect(() => {
    storage.setProfile(profile);
  }, [profile]);

  const saveName = (event) => {
    event.preventDefault();
    const trimmed = inputName.trim();
    setProfile({ ...profile, name: trimmed });
    setSaved(trimmed ? `Saved. Welcome, ${trimmed}.` : 'Name removed.');
  };

  return (
    <section className="dashboard">
      <article className="card">
        <h1>{name ? `Welcome back, ${name}` : 'Welcome to Animal Expert'}</h1>
        {signedIn ? (
          <p>
            You're signed in{accountName ? ` as ${accountName}` : ''}. Change your display name in{' '}
            <Link to="/settings">Settings</Link>.
          </p>
        ) : (
          <form className="field inline" onSubmit={saveName}>
            <label htmlFor="home-name">Your name</label>
            <input
              id="home-name"
              value={inputName}
              autoComplete="nickname"
              onChange={(event) => setInputName(event.target.value)}
            />
            <button type="submit" className="button">
              Save name
            </button>
          </form>
        )}
        <p role="status" className="muted">{saved}</p>
        <p>Daily streak: {appContext.streak.count} day{appContext.streak.count === 1 ? '' : 's'}</p>
        <p>
          {playedToday.length > 0
            ? `Today's daily games completed: ${playedToday.length}.`
            : 'Play any daily game today to keep your streak going.'}
        </p>
      </article>

      <h2>How the games work</h2>
      <div className="panel-grid">
        <Link className="card link-card" to="/daily-trivia">
          <h3>Daily Trivia</h3>
          <p>
            Ten multiple-choice questions. Pick a category and a level (Easy, Intermediate, Difficult or Multi), then
            start. Everyone gets the same questions each day, in a shuffled order. Your first complete run is your official score; after each answer you get a fun fact
            and its source.
          </p>
        </Link>
        <Link className="card link-card" to="/daily-puzzle">
          <h3>Daily Puzzle</h3>
          <p>
            A memory matching game: flip cards to pair each animal photo with its breed name. Fewer flips and a
            faster time score higher. Every photo has a spoken description.
          </p>
        </Link>
        <Link className="card link-card" to="/identify-cross">
          <h3>Identify &amp; Cross</h3>
          <p>
            Name five animals from their photos, then solve a crossword made from clues about those same animals.
          </p>
        </Link>
        <Link className="card link-card" to="/new-game">
          <h3>Practice</h3>
          <p>Fresh trivia or puzzles any time, with no effect on your streak or official scores.</p>
        </Link>
        <Link className="card link-card" to="/rankings">
          <h3>Rankings</h3>
          <p>Today's and yesterday's top official daily scores from players who chose to appear.</p>
        </Link>
        <Link className="card link-card" to="/leaderboard">
          <h3>My Stats and Game History</h3>
          <p>Your streak, best and average scores for each game, and every result you've recorded.</p>
        </Link>
        <Link className="card link-card" to="/settings">
          <h3>Settings and Home Screen</h3>
          <p>
            Change your name, pick a default trivia level, set streak reminders, and learn how to add Animal Expert to
            your iPhone's home screen from Safari's Share menu.
          </p>
        </Link>
        <Link className="card link-card" to="/account">
          <h3>Account</h3>
          <p>
            {signedIn
              ? 'Sync your progress, choose whether to appear in the Rankings, sign out or delete your account.'
              : 'Optional. Sign in with a code from your email to keep your progress on every device and join the Rankings.'}
          </p>
        </Link>
      </div>
    </section>
  );
}

export default DashboardPage;
