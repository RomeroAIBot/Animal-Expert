const STORAGE_VERSION = 'v1';

const keys = {
  profile: `animalExpert:${STORAGE_VERSION}:profile`,
  settings: `animalExpert:${STORAGE_VERSION}:settings`,
  streak: `animalExpert:${STORAGE_VERSION}:streak`,
  history: `animalExpert:${STORAGE_VERSION}:history`,
  dailyCache: `animalExpert:${STORAGE_VERSION}:daily-cache`,
  imageCache: `animalExpert:${STORAGE_VERSION}:image-cache`
};

export const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const storage = {
  keys,
  getProfile: () => readJson(keys.profile, { name: '' }),
  setProfile: (profile) => writeJson(keys.profile, profile),
  getSettings: () => readJson(keys.settings, { soundEnabled: true }),
  setSettings: (settings) => writeJson(keys.settings, settings),
  getStreak: () => readJson(keys.streak, { count: 0, lastPlayed: null }),
  setStreak: (streak) => writeJson(keys.streak, streak),
  getHistory: () => readJson(keys.history, []),
  setHistory: (history) => writeJson(keys.history, history),
  getDailyCache: () => readJson(keys.dailyCache, {}),
  setDailyCache: (cache) => writeJson(keys.dailyCache, cache),
  getImageCache: () => readJson(keys.imageCache, {}),
  setImageCache: (cache) => writeJson(keys.imageCache, cache)
};

export const upsertHistory = (entry) => {
  const history = storage.getHistory();
  const idx = history.findIndex((item) => item.id === entry.id);
  if (idx >= 0) {
    history[idx] = entry;
  } else {
    history.unshift(entry);
  }
  storage.setHistory(history.slice(0, 365));
};

export const updateStreak = (playedDateString) => {
  const streak = storage.getStreak();
  const today = new Date(playedDateString);
  const lastPlayed = streak.lastPlayed ? new Date(streak.lastPlayed) : null;

  if (!lastPlayed) {
    storage.setStreak({ count: 1, lastPlayed: playedDateString });
    return;
  }

  const daysDiff = Math.floor((today - lastPlayed) / (1000 * 60 * 60 * 24));
  if (daysDiff === 0) return;

  if (daysDiff === 1) {
    storage.setStreak({ count: streak.count + 1, lastPlayed: playedDateString });
    return;
  }

  storage.setStreak({ count: 1, lastPlayed: playedDateString });
};