export const hashString = (input) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const seededShuffle = (arr, seedValue) => {
  const list = [...arr];
  let seed = hashString(String(seedValue));

  for (let i = list.length - 1; i > 0; i -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
};

// A fresh seed for anything that should differ on every load, such as answer order.
export const randomSeed = () => `${Date.now()}:${Math.random()}`;

const pad = (value) => String(value).padStart(2, '0');

// Local calendar day as YYYY-MM-DD. Used for daily seeds, history and streaks.
export const getDateKey = (date = new Date()) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

// Accepts a YYYY-MM-DD key or a legacy toDateString() value.
export const toDateKey = (value) => {
  if (!value) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : getDateKey(parsed);
};

// Whole calendar days since epoch, immune to daylight-saving shifts.
export const getDayNumber = (dateKey) => {
  const [y, m, d] = dateKey.split('-').map(Number);
  return Math.round(Date.UTC(y, m - 1, d) / 86400000);
};

export const getDateSeed = (date = new Date()) => getDateKey(date);

const REPEAT_GAP_DAYS = 7;
const cycleCache = new Map();

// The order for one cycle. Items used in the last week of the previous cycle move to the end,
// so a question never comes back within a week of its last daily appearance (when the pool
// is large enough; a pool under about eight days of items will still repeat sooner).
const getCycleOrder = (items, count, salt, cycle, perCycle) => {
  const cacheKey = `${salt}:${items.length}:${count}`;
  let cache = cycleCache.get(cacheKey);
  if (!cache) {
    cache = new Map();
    cycleCache.set(cacheKey, cache);
  }
  let start = cycle;
  while (start > 0 && !cache.has(start - 1)) start -= 1;
  for (let c = start; c <= cycle; c += 1) {
    if (cache.has(c)) continue;
    const order = seededShuffle(items, `${salt}:cycle:${c}`);
    const previous = cache.get(c - 1);
    if (!previous) {
      cache.set(c, order);
      continue;
    }
    const tailDays = Math.min(REPEAT_GAP_DAYS, perCycle);
    const recent = new Set(previous.slice((perCycle - tailDays) * count, perCycle * count));
    cache.set(c, [...order.filter((item) => !recent.has(item)), ...order.filter((item) => recent.has(item))]);
  }
  return cache.get(cycle);
};

// Picks `count` items for a given day so that every item is used once before any repeats,
// and every player gets the same set on the same day.
export const selectDailyItems = (items, count, dateKey, salt) => {
  if (items.length <= count) return seededShuffle(items, `${salt}:${dateKey}`);
  const day = getDayNumber(dateKey);
  const perCycle = Math.floor(items.length / count);
  const cycle = Math.floor(day / perCycle);
  const position = day % perCycle;
  return getCycleOrder(items, count, salt, cycle, perCycle).slice(position * count, position * count + count);
};
