import { Link, useLocation } from 'react-router-dom';

// Shown for any address the app doesn't know, so the page is never blank.
function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <section>
      <h1>Page not found</h1>
      <p>There is no page at {pathname}. It may have moved, or the address may be mistyped.</p>
      <ul className="link-list">
        <li><Link to="/">Go to the home page</Link></li>
        <li><Link to="/daily-trivia">Play Daily Trivia</Link></li>
        <li><Link to="/daily-puzzle">Play the Daily Puzzle</Link></li>
        <li><Link to="/identify-cross">Play Identify &amp; Cross</Link></li>
      </ul>
    </section>
  );
}

export default NotFoundPage;
