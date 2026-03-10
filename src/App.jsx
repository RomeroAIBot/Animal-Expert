import { Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import DailyPuzzlePage from './pages/DailyPuzzlePage';
import DailyTriviaPage from './pages/DailyTriviaPage';
import ArchivePage from './pages/ArchivePage';
import NewGamePage from './pages/NewGamePage';
import LeaderboardPage from './pages/LeaderboardPage';
import { storage } from './utils/storage';

function App() {
  const [settings, setSettings] = useState(storage.getSettings());
  const [streak, setStreak] = useState(storage.getStreak());

  useEffect(() => {
    storage.setSettings(settings);
  }, [settings]);

  const soundEnabled = settings.soundEnabled;

  const context = useMemo(
    () => ({
      soundEnabled,
      setStreak,
      streak,
      settings,
      setSettings
    }),
    [soundEnabled, streak, settings]
  );

  return (
    <div className="app-shell">
      <Header
        streak={streak.count}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSettings((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
      />
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage appContext={context} />} />
          <Route path="/daily-puzzle" element={<DailyPuzzlePage appContext={context} />} />
          <Route path="/daily-trivia" element={<DailyTriviaPage appContext={context} />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/new-game" element={<NewGamePage appContext={context} />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;