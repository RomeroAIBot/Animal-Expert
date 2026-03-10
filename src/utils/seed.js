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

export const getDateSeed = (date = new Date()) => date.toDateString();