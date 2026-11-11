import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import DailyPuzzlePage from './pages/DailyPuzzlePage';
import DailyTriviaPage from './pages/DailyTriviaPage';
import ArchivePage from './pages/ArchivePage';
import NewGamePage from './pages/NewGamePage';
import LeaderboardPage from './pages/LeaderboardPage';
import IdentifyCrossPage from './pages/IdentifyCrossPage';
import AccountPage from './pages/AccountPage';
import RankingsPage from './pages/RankingsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import WelcomeBack from './components/WelcomeBack';
import { getCurrentStreak, storage, syncProgress } from './utils/storage';
import { completeSignInFromUrl, getProfile, getSignedInUser, readPending, signOut as cloudSignOut } from './utils/cloud';
import { markShownToday, pickWelcomeItem, wasShownToday } from './utils/welcomeBack';

// Photo review writes to repo files through the local API server, so it only exists in dev builds.
const PhotoReviewPage = import.meta.env.DEV ? lazy(() => import('./pages/PhotoReviewPage')) : null;

// Each page gets its own browser-tab title, which screen readers read when the page changes.
const pageTitles = {
  '/': 'Animal Expert: daily animal trivia and puzzles',
  '/daily-trivia': 'Daily Trivia',
  '/daily-puzzle': 'Daily Puzzle',
  '/identify-cross': 'Identify & Cross',
  '/new-game': 'Practice',
  '/rankings': 'Rankings',
  '/leaderboard': 'My Stats',
  '/archive': 'Game History',
  '/account': 'Account',
  '/settings': 'Settings',
  '/review-photos': 'Photo review',
  '/identify': 'Identify & Cross',
  '/practice': 'Practice',
  '/stats': 'My Stats',
  '/history': 'Game History'
};
const titleFor = (pathname) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (path === '/') return pageTitles['/'];
  return `${pageTitles[path] || 'Page not found'} - Animal Expert`;
};

function App() {
  const [settings, setSettings] = useState(storage.getSettings());
  const [streak, setStreak] = useState(getCurrentStreak());
  const [user, setUser] = useState(getSignedInUser());
  const [sync, setSync] = useState({ status: 'idle', message: '', version: 0 });
  const [signInError, setSignInError] = useState('');
  const [profile, setProfile] = useState(null);
  const [welcome, setWelcome] = useState(null);
  const syncingRef = useRef(false);
  const mainRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // After moving to another page, start screen readers and keyboards at the game, not the header.
  const firstRender = useRef(true);
  useEffect(() => {
    document.title = titleFor(location.pathname);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    mainRef.current?.focus();
  }, [location.pathname]);

  useEffect(() => {
    storage.setSettings(settings);
  }, [settings]);

  const syncNow = useCallback(async () => {
    if (!getSignedInUser() || syncingRef.current) return;
    syncingRef.current = true;
    setSync((prev) => ({ ...prev, status: 'syncing', message: 'Syncing your progress...' }));
    try {
      const result = await syncProgress();
      if (!result) {
        // The sign-in ended (for example, the account was deleted elsewhere).
        setUser(getSignedInUser());
        setSync((prev) => ({ ...prev, status: 'idle', message: '' }));
        return;
      }
      setStreak(getCurrentStreak());
      const skipped = result.rejected
        ? ` ${result.rejected} older result${result.rejected === 1 ? '' : 's'} could not be saved and stay on this device only.`
        : '';
      setSync((prev) => ({
        status: 'synced',
        message: `Progress synced: ${result.total} game${result.total === 1 ? '' : 's'} saved to your account.${skipped}`,
        version: prev.version + 1
      }));
    } catch {
      setSync((prev) => ({ ...prev, status: 'error', message: 'Could not reach the server. Your progress is safe on this device and will sync later.' }));
    } finally {
      syncingRef.current = false;
    }
  }, []);

  // Finish a sign-in when the emailed link brings the player back, then sync.
  useEffect(() => {
    completeSignInFromUrl()
      .then((outcome) => {
        if (outcome?.error) setSignInError(outcome.error);
        setUser(getSignedInUser());
      })
      .catch(() => setSignInError('Sign-in failed. Send yourself a new link and try again.'))
      .finally(syncNow);
  }, [syncNow]);

  // A player who asked for a sign-in code and then switched to Mail may come back to a restarted
  // app on the home page (iPhone does this to home-screen apps); take them back to the code box.
  useEffect(() => {
    if (!getSignedInUser() && readPending() && location.pathname === '/') navigate('/account', { replace: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Pick up games played on another device when the player comes back to this tab.
  useEffect(() => {
    const onFocus = () => syncNow();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, [syncNow]);

  // Load the account profile, and let settings saved with the account win over this device's copy.
  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }
    let cancelled = false;
    getProfile()
      .then((data) => {
        if (cancelled || !data) return;
        setProfile(data);
        if ('default_level' in data) {
          setSettings((prev) => ({
            ...prev,
            defaultLevel: data.default_level,
            reminderHoursBefore: data.reminder_hours_before ?? prev.reminderHoursBefore,
            missedStreakAlerts: data.missed_streak_alerts ?? prev.missedStreakAlerts
          }));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [user]);

  // Once a day, signed-in players with an email get a welcome-back message on the first page they
  // open that isn't the home screen. It stays until closed or until they leave for the home screen.
  useEffect(() => {
    if (!user?.email || location.pathname === '/' || welcome || wasShownToday(user.id)) return;
    const item = pickWelcomeItem({ userId: user.id });
    if (!item) return;
    markShownToday(user.id);
    setWelcome(item);
  }, [user, location.pathname, welcome]);

  const signOut = useCallback(async () => {
    await cloudSignOut();
    setWelcome(null);
    setUser(null);
    setSync((prev) => ({ ...prev, status: 'idle', message: '' }));
  }, []);

  const soundEnabled = settings.soundEnabled;

  const context = useMemo(
    () => ({
      soundEnabled,
      setStreak,
      streak,
      settings,
      setSettings,
      user,
      setUser,
      profile,
      setProfile,
      sync,
      syncNow,
      signOut,
      signInError
    }),
    [soundEnabled, streak, settings, user, profile, sync, syncNow, signOut, signInError]
  );

  return (
    <div className="app-shell">
      <Header
        streak={streak.count}
        signedIn={Boolean(user)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSettings((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
      />
      <main id="main" tabIndex={-1} ref={mainRef}>
        {welcome && user && location.pathname !== '/' && (
          <WelcomeBack
            item={welcome}
            name={profile?.display_name}
            onClose={() => {
              setWelcome(false);
              mainRef.current?.focus();
            }}
          />
        )}
        <Routes>
          <Route path="/" element={<DashboardPage appContext={context} />} />
          <Route path="/daily-puzzle" element={<DailyPuzzlePage appContext={context} />} />
          <Route path="/daily-trivia" element={<DailyTriviaPage appContext={context} />} />
          <Route path="/identify-cross" element={<IdentifyCrossPage appContext={context} />} />
          <Route path="/archive" element={<ArchivePage appContext={context} />} />
          <Route path="/new-game" element={<NewGamePage appContext={context} />} />
          <Route path="/leaderboard" element={<LeaderboardPage appContext={context} />} />
          <Route path="/rankings" element={<RankingsPage appContext={context} />} />
          <Route path="/account" element={<AccountPage appContext={context} />} />
          <Route path="/settings" element={<SettingsPage appContext={context} />} />
          {/* Short addresses people may type or remember. */}
          <Route path="/identify" element={<Navigate to="/identify-cross" replace />} />
          <Route path="/practice" element={<Navigate to="/new-game" replace />} />
          <Route path="/stats" element={<Navigate to="/leaderboard" replace />} />
          <Route path="/history" element={<Navigate to="/archive" replace />} />
          {PhotoReviewPage && (
            <Route
              path="/review-photos"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <PhotoReviewPage />
                </Suspense>
              }
            />
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

