import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDailyLeaderboard } from '../utils/cloud';
import { getDateKey } from '../utils/seed';

const games = [
  { id: 'trivia', label: 'Daily Trivia', mode: 'daily-trivia' },
  { id: 'puzzle-4', label: 'Daily Puzzle, 4x4', mode: 'daily-puzzle', size: 4 },
  { id: 'puzzle-6', label: 'Daily Puzzle, 6x6', mode: 'daily-puzzle', size: 6 }
];

const categories = [
  { value: 'dogs', label: 'Dogs' },
  { value: 'snakes', label: 'Snakes' },
  { value: 'chickens', label: 'Chickens' },
  { value: 'cat', label: 'Cats' },
  { value: 'horse', label: 'Horses' },
  { value: 'mixed', label: 'Mixed' }
];

const daysAgo = (n) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  return getDateKey(date);
};

const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

function RankingsPage({ appContext }) {
  const [gameId, setGameId] = useState('trivia');
  const [category, setCategory] = useState('dogs');
  const [day, setDay] = useState(0);
  const [state, setState] = useState({ status: 'loading', rows: [] });

  const game = games.find((item) => item.id === gameId);
  const date = daysAgo(day);

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading', rows: [] });
    getDailyLeaderboard({ date, mode: game.mode, category, size: game.size })
      .then((rows) => !cancelled && setState({ status: 'ready', rows }))
      .catch(() => !cancelled && setState({ status: 'error', rows: [] }));
    return () => {
      cancelled = true;
    };
  }, [date, game.mode, game.size, category]);

  const isPuzzle = game.mode === 'daily-puzzle';
  const caption = `${game.label}, ${categories.find((item) => item.value === category).label}, ${
    day === 0 ? 'today' : 'yesterday'
  } (${date})`;

  return (
    <section>
      <h2>Daily Rankings</h2>
      <p className="muted">
        Official scores only: each player's first complete run of the daily game. Players appear here only if
        they opt in from their account.
      </p>
      <div className="controls">
        <label className="field">
          Game
          <select value={gameId} onChange={(event) => setGameId(event.target.value)}>
            {games.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Day
          <select value={day} onChange={(event) => setDay(Number(event.target.value))}>
            <option value={0}>Today</option>
            <option value={1}>Yesterday</option>
          </select>
        </label>
      </div>

      <article className="card">
        <p role="status" className={state.status === 'error' ? 'status-error' : 'muted'}>
          {state.status === 'loading' && 'Loading rankings...'}
          {state.status === 'error' && 'Could not load rankings. Try again later.'}
          {state.status === 'ready' &&
            (state.rows.length === 0
              ? `No ranked players yet for ${caption}.`
              : `${state.rows.length} ranked player${state.rows.length === 1 ? '' : 's'} for ${caption}.`)}
        </p>
        {state.rows.length > 0 && (
          <table className="stats-table">
            <caption>{caption}</caption>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
                {isPuzzle && <th scope="col">Time</th>}
              </tr>
            </thead>
            <tbody>
              {state.rows.map((row) => (
                <tr key={row.display_name}>
                  <td>{row.rank}</td>
                  <th scope="row">{row.display_name}</th>
                  <td>{isPuzzle ? `${row.score} pts` : `${row.score}%`}</td>
                  {isPuzzle && <td>{row.seconds !== null ? formatTime(row.seconds) : ''}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </article>

      <p>
        {appContext.user ? (
          <Link to="/account">Choose your display name and join the rankings</Link>
        ) : (
          <Link to="/account">Sign in to join the rankings</Link>
        )}
      </p>
    </section>
  );
}

export default RankingsPage;
