import { Route, Routes } from 'react-router-dom';
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
import { getCurrentStreak, storage, syncProgress } from './utils/storage';
import { completeSignInFromUrl, getSignedInUser, signOut as cloudSignOut } from './utils/cloud';

// Photo review writes to repo files through the local API server, so it only exists in dev builds.
const PhotoReviewPage = import.meta.env.DEV ? lazy(() => import('./pages/PhotoReviewPage')) : null;

function App() {
  const [settings, setSettings] = useState(storage.getSettings());
  const [streak, setStreak] = useState(getCurrentStreak());
  const [user, setUser] = useState(getSignedInUser());
  const [sync, setSync] = useState({ status: 'idle', message: '', version: 0 });
  const [signInError, setSignInError] = useState('');
  const syncingRef = useRef(false);

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

  // Pick up games played on another device when the player comes back to this tab.
  useEffect(() => {
    const onFocus = () => syncNow();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, [syncNow]);

  const signOut = useCallback(async () => {
    await cloudSignOut();
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
      sync,
      syncNow,
      signOut,
      signInError
    }),
    [soundEnabled, streak, settings, user, sync, syncNow, signOut, signInError]
  );

  return (
    <div className="app-shell">
      <Header
        streak={streak.count}
        signedIn={Boolean(user)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSettings((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
      />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage appContext={context} />} />
          <Route path="/daily-puzzle" element={<DailyPuzzlePage appContext={context} />} />
          <Route path="/daily-trivia" element={<DailyTriviaPage appContext={context} />} />
          <Route path="/identify-cross" element={<IdentifyCrossPage appContext={context} />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/new-game" element={<NewGamePage appContext={context} />} />
          <Route path="/leaderboard" element={<LeaderboardPage appContext={context} />} />
          <Route path="/rankings" element={<RankingsPage appContext={context} />} />
          <Route path="/account" element={<AccountPage appContext={context} />} />
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
        </Routes>
      </main>
    </div>
  );
}

export default App;

