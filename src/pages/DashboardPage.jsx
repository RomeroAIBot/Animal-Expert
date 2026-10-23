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

      <div className="panel-grid">
        <Link className="card link-card" to="/daily-puzzle">
          <h3>Today's Daily Puzzle</h3>
          <p>Match photos to breed names. Same board for everyone today.</p>
        </Link>
        <Link className="card link-card" to="/daily-trivia">
          <h3>Today's Daily Trivia</h3>
          <p>10 multiple-choice questions for the selected category.</p>
        </Link>
        <Link className="card link-card" to="/identify-cross">
          <h3>Identify &amp; Cross</h3>
          <p>Identify five animals from photos, then solve a crossword of their names.</p>
        </Link>
        <Link className="card link-card" to="/archive">
          <h3>Game History</h3>
          <p>Every result you've recorded, newest first.</p>
        </Link>
        <Link className="card link-card" to="/new-game">
          <h3>Practice</h3>
          <p>Fresh random puzzles or trivia any time. Doesn't affect your streak.</p>
        </Link>
      </div>
    </section>
  );
}

export default DashboardPage;
