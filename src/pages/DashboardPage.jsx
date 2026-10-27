import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDateKey } from '../utils/seed';
import { storage } from '../utils/storage';

function DashboardPage({ appContext }) {
  const [profile, setProfile] = useState(storage.getProfile());
  const [inputName, setInputName] = useState(profile.name || '');
  const today = getDateKey();
  const playedToday = storage.getHistory().filter((item) => item.date === today && item.mode.startsWith('daily'));

  useEffect(() => {
    storage.setProfile(profile);
  }, [profile]);

  return (
    <section className="dashboard">
      <article className="card">
        <h2>{profile.name ? `Welcome back, ${profile.name}.` : 'Welcome to Animal Expert.'}</h2>
        <label className="field inline">
          <span>Your name</span>
          <input
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            placeholder="Enter name"
          />
          <button
            type="button"
            className="button"
            onClick={() => setProfile({ name: inputName.trim() })}
          >
            Save
          </button>
        </label>
        <p>Daily streak: {appContext.streak.count}</p>
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
            Ten multiple-choice questions in the category you pick. Everyone gets the same questions each day, in a
            shuffled order. Your first complete run is your official score; after each answer you get a fun fact
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
        <Link className="card link-card" to="/account">
          <h3>Account</h3>
          <p>Optional. Sign in with an emailed link to keep your progress on every device and join the Rankings.</p>
        </Link>
      </div>
    </section>
  );
}

export default DashboardPage;
