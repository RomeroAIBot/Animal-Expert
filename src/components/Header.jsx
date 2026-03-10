import { NavLink } from 'react-router-dom';

const appName = import.meta.env.VITE_APP_NAME || 'Animal Expert';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/daily-puzzle', label: 'Daily Puzzle' },
  { to: '/daily-trivia', label: 'Daily Trivia' },
  { to: '/identify-cross', label: 'Identify & Cross' },
  { to: '/archive', label: 'Archive' },
  { to: '/new-game', label: 'Spawn New Game' },
  { to: '/leaderboard', label: 'Leaderboard' }
];

function Header({ streak, soundEnabled, onToggleSound }) {
  return (
    <header className="site-header">
      <div>
        <h1>{appName}</h1>
        <p className="subtitle">Daily expert trivia and breed matching puzzle</p>
      </div>
      <div className="header-meta">
        <span className="streak">Daily streak: {streak}</span>
        <button type="button" className="button ghost" onClick={onToggleSound}>
          Sound: {soundEnabled ? 'On' : 'Off'}
        </button>
      </div>
      <nav>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
