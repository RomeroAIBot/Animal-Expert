import { Link } from 'react-router-dom';
import { modeLabels, modeRoutes, storage } from '../utils/storage';
import { toDateKey } from '../utils/seed';

const categoryLabels = { dogs: 'Dogs', snakes: 'Snakes', chickens: 'Chickens', cat: 'Cats', horse: 'Horses', mixed: 'Mixed' };

export const describeResult = (item) => {
  if (item.mode === 'daily-trivia' || item.mode === 'new-trivia') {
    return `${item.correct}/${item.total} correct (${item.score}%)`;
  }
  if (item.mode === 'identify-cross') {
    const identified = item.identified ?? item.score;
    return `${item.score} pts${item.identified !== undefined ? ` · ${identified}/${item.total} photos` : ''}${
      item.crosswordSolved ? ' · crossword solved' : ''
    }`;
  }
  return `${item.score} pts · ${item.flips} flips · ${item.seconds}s${item.size ? ` · ${item.size}x${item.size}` : ''}`;
};

function ArchivePage() {
  const history = storage.getHistory();

  return (
    <section>
      <h2>Game History</h2>
      <p className="muted">Your last 365 results on this device.</p>
      {history.length === 0 && <p>No games played yet.</p>}
      <div className="archive-list">
        {history.map((item) => (
          <article className="card" key={item.id}>
            <h3>{modeLabels[item.mode] || item.mode}</h3>
            <p>Date: {toDateKey(item.date) || item.date}</p>
            <p>Category: {categoryLabels[item.category] || item.category}</p>
            <p>Result: {describeResult(item)}</p>
            <Link className="button small" to={modeRoutes[item.mode] || '/'}>
              Play {modeLabels[item.mode] || 'again'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArchivePage;
