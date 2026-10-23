import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toDateKey } from '../utils/seed';
import { getCurrentStreak, modeLabels, storage } from '../utils/storage';

const scoreUnits = {
  'daily-puzzle': 'pts',
  'new-puzzle': 'pts',
  'daily-trivia': '%',
  'new-trivia': '%',
  'identify-cross': 'pts'
};

// Scores are only comparable within one mode, so stats are grouped by mode.
const summarizeByMode = (history) =>
  Object.entries(
    history.reduce((acc, item) => {
      (acc[item.mode] ||= []).push(item.score || 0);
      return acc;
    }, {})
  ).map(([mode, scores]) => ({
    mode,
    played: scores.length,
    best: Math.max(...scores),
    average: Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length)
  }));

function LeaderboardPage({ appContext }) {
  const [history, setHistory] = useState(storage.getHistory());
  const [streak, setStreakState] = useState(getCurrentStreak());
  const [confirming, setConfirming] = useState(false);
  const signedIn = Boolean(appContext?.user);
  const syncVersion = appContext?.sync?.version;

  // Re-read after each sync, which can bring in games played on another device.
  useEffect(() => {
    setHistory(storage.getHistory());
    setStreakState(getCurrentStreak());
  }, [syncVersion]);

  const modes = summarizeByMode(history);
  const dailyDays = new Set(
    history.filter((item) => item.mode.startsWith('daily')).map((item) => toDateKey(item.date))
  ).size;

  const handleClearProgress = () => {
    storage.clearGameProgress();
    const clearedStreak = getCurrentStreak();
    setHistory([]);
    setStreakState(clearedStreak);
    appContext?.setStreak?.(clearedStreak);
    setConfirming(false);
  };

  return (
    <section>
      <h2>My Stats</h2>
      {signedIn ? (
        <p className="muted">Synced to your account ({appContext.user.email}).</p>
      ) : (
        <p className="muted">
          Stats are stored in this browser only. <Link to="/account">Sign in</Link> to keep them across devices.
        </p>
      )}
      <div className="panel-grid">
        <article className="card"><h3>Games Played</h3><p>{history.length}</p></article>
        <article className="card"><h3>Days with a Daily Game</h3><p>{dailyDays}</p></article>
        <article className="card"><h3>Current Streak</h3><p>{streak.count}</p></article>
      </div>

      <article className="card">
        <div className="card-actions">
          <h3>By Game Mode</h3>
          {/* Signed-in history lives in the account too, so it's removed by deleting the account. */}
          {!signedIn && history.length > 0 && !confirming && (
            <button type="button" className="button button-reset" onClick={() => setConfirming(true)}>
              Clear game history
            </button>
          )}
          {confirming && (
            <span>
              Delete all history and your streak?{' '}
              <button type="button" className="button button-reset" onClick={handleClearProgress}>Yes, clear</button>{' '}
              <button type="button" className="button ghost" onClick={() => setConfirming(false)}>Cancel</button>
            </span>
          )}
        </div>
        {modes.length === 0 && <p>No games played yet.</p>}
        {modes.length > 0 && (
          <table className="stats-table">
            <thead>
              <tr><th>Mode</th><th>Played</th><th>Best</th><th>Average</th></tr>
            </thead>
            <tbody>
              {modes.map((row) => (
                <tr key={row.mode}>
                  <td>{modeLabels[row.mode] || row.mode}</td>
                  <td>{row.played}</td>
                  <td>{row.best}{scoreUnits[row.mode] === '%' ? '%' : ' pts'}</td>
                  <td>{row.average}{scoreUnits[row.mode] === '%' ? '%' : ' pts'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </article>
    </section>
  );
}

export default LeaderboardPage;
