import { seededShuffle } from './seed';

const DAY_MS = 24 * 60 * 60 * 1000;

// Anything a player has been shown is held back for a week before it can come up again.
export const HOLD_BACK_DAYS = 7;

const MAX_LOG_ENTRIES = 750;
const SEEN_KEY = 'animalExpert:v1:seen-items';

// Puzzle boards and Identify & Cross sessions are tracked as whole combinations of animals.
const LOG_KEYS = {
  puzzles: 'used_puzzle_log',
  hybrids: 'used_hybrid_log'
};

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked: repeats are simply not avoided for this visit.
  }
};

const cutoffTime = (now) => now.getTime() - HOLD_BACK_DAYS * DAY_MS;

// --- Individual items (trivia questions) ---

// Returns { id: lastShownTimestamp } for items shown within the hold-back window.
export const getRecentlySeen = (now = new Date()) => {
  const seen = readJson(SEEN_KEY, {});
  const cutoff = cutoffTime(now);
  return Object.fromEntries(Object.entries(seen).filter(([, at]) => at >= cutoff));
};

// Called as soon as an item is shown, whether or not the game is finished.
export const markSeen = (ids, now = new Date()) => {
  const seen = getRecentlySeen(now);
  ids.filter(Boolean).forEach((id) => {
    seen[id] = now.getTime();
  });
  writeJson(SEEN_KEY, seen);
};

// Picks `count` items, preferring ones not shown in the last week and not in `exclude`
// (upcoming daily questions). If there aren't enough, the ones shown longest ago fill in.
export const selectNoRepeatItems = ({ items, count, seed, exclude = new Set(), getId = (item) => item.id, now = new Date() }) => {
  const seen = getRecentlySeen(now);
  const shuffled = seededShuffle(items, seed);
  const isFresh = (item) => !seen[getId(item)] && !exclude.has(getId(item));
  const fresh = shuffled.filter(isFresh);
  if (fresh.length >= count) return fresh.slice(0, count);
  const fallback = shuffled
    .filter((item) => !isFresh(item))
    .sort((a, b) => (seen[getId(a)] || 0) - (seen[getId(b)] || 0));
  return seededShuffle([...fresh, ...fallback.slice(0, count - fresh.length)], `${seed}:mix`);
};

// --- Combinations (puzzle boards, Identify & Cross sessions) ---

const getRecentCombos = (logKey, category, now) => {
  const cutoff = cutoffTime(now);
  return (readJson(logKey, {})[category] || []).filter((entry) => new Date(entry.usedAt).getTime() >= cutoff);
};

export const recordUsedIds = (logKey, category, ids, usedAt = new Date().toISOString()) => {
  const log = readJson(logKey, {});
  const kept = getRecentCombos(logKey, category, new Date(usedAt));
  const fresh = [...new Set(ids.filter(Boolean))].map((id) => ({ id, usedAt }));
  log[category] = [...kept, ...fresh].slice(-MAX_LOG_ENTRIES);
  writeJson(logKey, log);
};

const buildComboId = (ids) => [...ids].sort().join('|');

export const selectNoRepeatCombination = ({ logKey, category, items, count, seed, getId = (item) => item.id, now = new Date() }) => {
  const recent = new Set(getRecentCombos(logKey, category, now).map((entry) => entry.id));
  const attempts = Math.max(32, items.length * 4);

  for (let i = 0; i < attempts; i += 1) {
    const selection = seededShuffle(items, `${seed}:${i}`).slice(0, count);
    const comboId = buildComboId(selection.map(getId));
    if (!recent.has(comboId)) return { items: selection, comboId };
  }

  // Every combination was used this week (small categories): allow a repeat.
  const selection = seededShuffle(items, `${seed}:reset`).slice(0, count);
  return { items: selection, comboId: buildComboId(selection.map(getId)) };
};

export const trackerKeys = LOG_KEYS;
export const trackerStorageKeys = [SEEN_KEY, ...Object.values(LOG_KEYS), 'used_questions_log', 'used_crossword_clues_log'];
