import { storage } from '../utils/storage';

function LeaderboardPage() {
  const history = storage.getHistory();
  const streak = storage.getStreak();
  const totalGames = history.length;
  const bestScore = history.reduce((max, item) => Math.max(max, item.score || 0), 0);

  const byMode = history.reduce((acc, item) => {
    acc[item.mode] = (acc[item.mode] || 0) + 1;
    return acc;
  }, {});

  return (
    <section>
      <h2>Personal Stats</h2>
      <div className="panel-grid">
        <article className="card"><h3>Total Games Played</h3><p>{totalGames}</p></article>
        <article className="card"><h3>Best Score</h3><p>{bestScore}</p></article>
        <article className="card"><h3>Current Streak</h3><p>{streak.count}</p></article>
      </div>

      <article className="card">
        <h3>Game Mode Breakdown</h3>
        {Object.keys(byMode).length === 0 && <p>No data yet.</p>}
        {Object.entries(byMode).map(([mode, count]) => (
          <p key={mode}>{mode}: {count}</p>
        ))}
      </article>
    </section>
  );
}

export default LeaderboardPage;