import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const appName = import.meta.env.VITE_APP_NAME || 'Animal Expert';

const links = [
  { to: '/', label: 'Home' },
  { to: '/daily-trivia', label: 'Daily Trivia' },
  { to: '/daily-puzzle', label: 'Daily Puzzle' },
  { to: '/identify-cross', label: 'Identify & Cross' },
  { to: '/new-game', label: 'Practice' },
  { to: '/rankings', label: 'Rankings' },
  { to: '/leaderboard', label: 'My Stats' },
  { to: '/archive', label: 'Game History' }
];

// The links live behind one Menu button, so every page starts with the game rather than a list of links.
function Header({ streak, signedIn, soundEnabled, onToggleSound }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const buttonRef = useRef(null);

  // Close the menu after choosing a page.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const onKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <header className="site-header" onKeyDown={onKeyDown}>
      <a className="skip-link" href="#main">
        Skip to game
      </a>
      <div className="header-bar">
        <Link to="/" className="site-title">
          {appName}
        </Link>
        <span className="streak">Streak: {streak}</span>
        <button
          ref={buttonRef}
          type="button"
          className="button ghost menu-button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>
      <nav id="site-menu" aria-label="Main" hidden={!open}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end className={({ isActive }) => (isActive ? 'active' : '')}>
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/account" className={({ isActive }) => (isActive ? 'active' : '')}>
          {signedIn ? 'Account' : 'Sign in'}
        </NavLink>
        <button type="button" className="button ghost" onClick={onToggleSound}>
          Sound: {soundEnabled ? 'On' : 'Off'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
