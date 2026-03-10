import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { storage } from '../utils/storage';

function DashboardPage({ appContext }) {
  const [profile, setProfile] = useState(storage.getProfile());
  const [inputName, setInputName] = useState(profile.name || '');

  useEffect(() => {
    storage.setProfile(profile);
  }, [profile]);

  return (
    <section className="dashboard">
      <article className="card">
        <h2>
          {profile.name
            ? `Welcome back, ${profile.name}.`
            : 'Welcome. Set her name for a personalized daily gift experience.'}
        </h2>
        <label className="field inline">
          <span>Name</span>
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
      </article>

      <div className="panel-grid">
        <Link className="card link-card" to="/daily-puzzle">
          <h3>Today's Daily Puzzle</h3>
          <p>Match photos to breed or morph names. Deterministic by date.</p>
        </Link>
        <Link className="card link-card" to="/daily-trivia">
          <h3>Today's Daily Trivia</h3>
          <p>10 expert-level multiple-choice questions for the selected category.</p>
        </Link>
        <Link className="card link-card" to="/identify-cross">
          <h3>Identify &amp; Cross</h3>
          <p>Identify five breeds from photos, then solve a crossword built from their clue facts.</p>
        </Link>
        <Link className="card link-card" to="/archive">
          <h3>Past Games Archive</h3>
          <p>Replay prior daily sessions by date.</p>
        </Link>
        <Link className="card link-card" to="/new-game">
          <h3>Spawn New Game</h3>
          <p>Create a fresh random puzzle or trivia session any time.</p>
        </Link>
      </div>
    </section>
  );
}

export default DashboardPage;
