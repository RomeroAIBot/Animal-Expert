// In-progress games, saved after every move so a player can leave and resume later.
const KEY = 'animalExpert:v1:saved-games';
const ATTEMPTS_KEY = 'animalExpert:v1:daily-attempts';
const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
};

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked: the game still works, it just can't be resumed later.
  }
};

export const loadGame = (gameKey) => {
  const all = read(KEY);
  const entry = all[gameKey];
  if (!entry || Date.now() - entry.savedAt > MAX_AGE_MS) return null;
  return entry.state;
};

export const saveGame = (gameKey, state) => {
  const all = read(KEY);
  const now = Date.now();
  const kept = Object.fromEntries(Object.entries(all).filter(([, entry]) => now - entry.savedAt <= MAX_AGE_MS));
  kept[gameKey] = { savedAt: now, state };
  write(KEY, kept);
};

export const clearGame = (gameKey) => {
  const all = read(KEY);
  delete all[gameKey];
  write(KEY, all);
};

// A daily run the player abandoned after answering at least one question. Later runs of that
// daily game are practice, so nobody can peek at the answers and then post an official score.
export const markDailyAttempted = (entryId) => {
  const attempts = read(ATTEMPTS_KEY);
  attempts[entryId] = Date.now();
  write(ATTEMPTS_KEY, attempts);
};

export const wasDailyAttempted = (entryId) => Boolean(read(ATTEMPTS_KEY)[entryId]);
