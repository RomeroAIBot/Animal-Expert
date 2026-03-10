import { Link } from 'react-router-dom';
import { storage } from '../utils/storage';

function ArchivePage() {
  const history = storage.getHistory();

  return (
    <section>
      <h2>Past Games Archive</h2>
      {history.length === 0 && <p>No games played yet.</p>}
      <div className="archive-list">
        {history.map((item) => (
          <article className="card" key={item.id}>
            <h3>{item.mode}</h3>
            <p>Date: {item.date}</p>
            <p>Category: {item.category}</p>
            <p>Score: {item.score}</p>
            <Link
              className="button small"
              to={item.mode === 'daily-puzzle' ? '/daily-puzzle' : '/daily-trivia'}
            >
              Replay
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArchivePage;