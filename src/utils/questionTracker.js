import { seededShuffle } from './seed';

const DAY_MS = 24 * 60 * 60 * 1000;
const LOOKBACK_DAYS = 45;

const LOG_KEYS = {
  questions: 'used_questions_log',
  puzzles: 'used_puzzle_log',
  hybrids: 'used_hybrid_log',
  crosswordClues: 'used_crossword_clues_log'
};

const readLog = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeLog = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const pruneEntries = (entries = [], now = new Date()) => {
  const cutoff = now.getTime() - LOOKBACK_DAYS * DAY_MS;
  return entries.filter((entry) => new Date(entry.usedAt).getTime() >= cutoff);
};

const getPrunedCategoryLog = (logKey, category, now = new Date()) => {
  const log = readLog(logKey);
  const nextEntries = pruneEntries(log[category] || [], now);
  if ((log[category] || []).length !== nextEntries.length) {
    log[category] = nextEntries;
    writeLog(logKey, log);
  }
  return nextEntries;
};

export const getRecentIds = (logKey, category, now = new Date()) =>
  new Set(getPrunedCategoryLog(logKey, category, now).map((entry) => entry.id));

export const recordUsedIds = (logKey, category, ids, usedAt = new Date().toISOString()) => {
  const log = readLog(logKey);
  const entries = pruneEntries(log[category] || [], new Date(usedAt));
  const nextEntries = [...entries, ...ids.map((id) => ({ id, usedAt }))];
  log[category] = nextEntries.slice(-500);
  writeLog(logKey, log);
};

export const selectNoRepeatItems = ({
  logKey,
  category,
  items,
  count,
  seed,
  minimumRemaining = 10,
  getId = (item) => item.id,
  now = new Date()
}) => {
  const recentIds = getRecentIds(logKey, category, now);
  let available = items.filter((item) => !recentIds.has(getId(item)));

  if (available.length < minimumRemaining || available.length < count) {
    const log = readLog(logKey);
    log[category] = [];
    writeLog(logKey, log);
    available = [...items];
  }

  return seededShuffle(available, seed).slice(0, count);
};

const buildComboId = (ids) => [...ids].sort().join('|');

export const selectNoRepeatCombination = ({
  logKey,
  category,
  items,
  count,
  seed,
  minimumRemaining = 10,
  getId = (item) => item.id,
  now = new Date()
}) => {
  const recentIds = getRecentIds(logKey, category, now);
  const attempts = 18;

  for (let i = 0; i < attempts; i += 1) {
    const selection = seededShuffle(items, `${seed}:${i}`).slice(0, count);
    const comboId = buildComboId(selection.map(getId));
    if (!recentIds.has(comboId)) {
      return { items: selection, comboId };
    }
  }

  const log = readLog(logKey);
  log[category] = [];
  writeLog(logKey, log);
  const selection = seededShuffle(items, `${seed}:reset`).slice(0, count);
  return { items: selection, comboId: buildComboId(selection.map(getId)) };
};

export const trackerKeys = LOG_KEYS;
