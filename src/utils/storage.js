import { getDateKey, getDayNumber, toDateKey } from './seed';
import { fetchResults, saveResults } from './cloud';
import { trackerStorageKeys } from './questionTracker';

const STORAGE_VERSION = 'v1';

const keys = {
  profile: `animalExpert:${STORAGE_VERSION}:profile`,
  settings: `animalExpert:${STORAGE_VERSION}:settings`,
  streak: `animalExpert:${STORAGE_VERSION}:streak`,
  history: `animalExpert:${STORAGE_VERSION}:history`,
  dailyCache: `animalExpert:${STORAGE_VERSION}:daily-cache`,
  imageCache: `animalExpert:${STORAGE_VERSION}:image-cache`
};

const trackerLogKeys = [...trackerStorageKeys, 'animalExpert:v1:saved-games'];

export const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const writeJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked; progress for this session stays in memory only.
  }
};

export const modeLabels = {
  'daily-puzzle': 'Daily Puzzle',
  'daily-trivia': 'Daily Trivia',
  'identify-cross': 'Identify & Cross',
  'new-puzzle': 'Practice Puzzle',
  'new-trivia': 'Practice Trivia'
};

export const modeRoutes = {
  'daily-puzzle': '/daily-puzzle',
  'daily-trivia': '/daily-trivia',
  'identify-cross': '/identify-cross',
  'new-puzzle': '/new-game',
  'new-trivia': '/new-game'
};

// Only image URLs from the last 30 days are kept so stale or replaced photos age out.
const IMAGE_CACHE_TTL_MS = 30 * 24 * 60 * 60 * 1000;

export const storage = {
  keys,
  getProfile: () => readJson(keys.profile, { name: '' }),
  setProfile: (profile) => writeJson(keys.profile, profile),
  getSettings: () => readJson(keys.settings, { soundEnabled: true }),
  setSettings: (settings) => writeJson(keys.settings, settings),
  getStreak: () => {
    const streak = readJson(keys.streak, { count: 0, lastPlayed: null });
    return { ...streak, lastPlayed: toDateKey(streak.lastPlayed) };
  },
  setStreak: (streak) => writeJson(keys.streak, streak),
  getHistory: () => readJson(keys.history, []),
  setHistory: (history) => writeJson(keys.history, history),
  getImageUrl: (cacheKey) => {
    const entry = readJson(keys.imageCache, {})[cacheKey];
    if (!entry || typeof entry === 'string') return null;
    return Date.now() - entry.savedAt < IMAGE_CACHE_TTL_MS ? entry : null;
  },
  setImageUrl: (cacheKey, value) => {
    // Re-read on every write so parallel image loads don't overwrite each other.
    const cache = readJson(keys.imageCache, {});
    cache[cacheKey] = { ...value, savedAt: Date.now() };
    writeJson(keys.imageCache, cache);
  },
  clearGameProgress: () => {
    localStorage.removeItem(keys.history);
    localStorage.removeItem(keys.streak);
    localStorage.removeItem(keys.dailyCache);
    localStorage.removeItem(keys.imageCache);
    trackerLogKeys.forEach((key) => localStorage.removeItem(key));
  }
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
  // Signed-in players also save to their account; if this fails, the next sync retries it.
  saveResults([entry]).catch(() => {});
};

// Streak rebuilt from the days with a daily game, so history merged from another device counts.
export const streakFromHistory = (history) => {
  const days = [
    ...new Set(history.filter((item) => item.mode?.startsWith('daily')).map((item) => toDateKey(item.date)).filter(Boolean))
  ].sort();
  if (days.length === 0) return { count: 0, lastPlayed: null };
  let count = 1;
  for (let i = days.length - 1; i > 0 && getDayNumber(days[i]) - getDayNumber(days[i - 1]) === 1; i -= 1) count += 1;
  return { count, lastPlayed: days[days.length - 1] };
};

// Two-way sync: upload results this device has that the account lacks, then merge the account's
// results in. For the same game the account's copy wins, since the first saved daily result is official.
export const syncProgress = async () => {
  const remote = await fetchResults();
  if (!remote) return null;
  const remoteIds = new Set(remote.map((item) => item.id));
  const local = storage.getHistory();
  const { rejected } = await saveResults(local.filter((item) => !remoteIds.has(item.id)));

  const merged = new Map(local.map((item) => [item.id, item]));
  remote.forEach((item) => merged.set(item.id, item));
  const history = [...merged.values()].sort((a, b) => (toDateKey(b.date) || '').localeCompare(toDateKey(a.date) || ''));
  storage.setHistory(history.slice(0, 365));
  storage.setStreak(streakFromHistory(history));
  return { total: history.length, rejected };
};

// The first completed attempt at a daily game is the official result for that day.
export const getOfficialDailyResult = (id) => storage.getHistory().find((item) => item.id === id) || null;

export const updateStreak = (dateKey = getDateKey()) => {
  const streak = storage.getStreak();

  if (!streak.lastPlayed) {
    storage.setStreak({ count: 1, lastPlayed: dateKey });
    return;
  }

  const daysDiff = getDayNumber(dateKey) - getDayNumber(streak.lastPlayed);
  if (daysDiff <= 0) return;

  storage.setStreak({ count: daysDiff === 1 ? streak.count + 1 : 1, lastPlayed: dateKey });
};

// Streak as it stands today: a missed day shows 0 rather than the stale count.
export const getCurrentStreak = (today = getDateKey()) => {
  const streak = storage.getStreak();
  if (!streak.lastPlayed) return { ...streak, count: 0 };
  const daysDiff = getDayNumber(today) - getDayNumber(streak.lastPlayed);
  return daysDiff > 1 ? { ...streak, count: 0 } : streak;
};
