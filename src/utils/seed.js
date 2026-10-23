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

// Picks `count` items for a given day so that every item is used once before any repeats,
// and every player gets the same set on the same day.
export const selectDailyItems = (items, count, dateKey, salt) => {
  if (items.length <= count) return seededShuffle(items, `${salt}:${dateKey}`);
  const day = getDayNumber(dateKey);
  const perCycle = Math.floor(items.length / count);
  const cycle = Math.floor(day / perCycle);
  const position = day % perCycle;
  const shuffled = seededShuffle(items, `${salt}:cycle:${cycle}`);
  return shuffled.slice(position * count, position * count + count);
};
