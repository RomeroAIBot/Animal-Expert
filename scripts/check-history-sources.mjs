// Checks the "this day in animal history" items (src/data/animalHistory.js) the same way trivia is
// checked: every evidence phrase must appear on the item's source page, and every date must be real.
// Usage: npm run check:history
import { animalHistory } from '../src/data/animalHistory.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pageText = async (url) => {
  const wiki = url.match(/^https:\/\/en\.wikipedia\.org\/wiki\/(.+)$/);
  const target = wiki
    ? `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&redirects=1&format=json&titles=${encodeURIComponent(decodeURIComponent(wiki[1]))}`
    : url;
  for (let attempt = 0; ; attempt += 1) {
    await sleep(300);
    const response = await fetch(target, {
      headers: { 'User-Agent': 'AnimalExpertSourceCheck/1.0 (https://github.com/RomeroAIBot/Animal-Expert)' },
      signal: AbortSignal.timeout(15000)
    });
    if (response.status === 429 && attempt < 3) {
      await sleep(5000 * (attempt + 1));
      continue;
    }
    if (wiki) {
      const data = await response.json();
      return Object.values(data.query.pages)[0].extract || '';
    }
    return (await response.text()).replace(/<[^>]+>/g, ' ');
  }
};

const normalizeText = (value) =>
  value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ');

const problems = [];
const cache = new Map();
for (const item of animalHistory) {
  const label = `${item.date} ${item.year}`;
  const [month, day] = item.date.split('-').map(Number);
  const real = new Date(Date.UTC(2024, month - 1, day));
  if (real.getUTCMonth() !== month - 1 || real.getUTCDate() !== day) problems.push(`${label}: not a real date`);
  if (!item.text || !item.source || !item.evidence?.length) problems.push(`${label}: needs text, source and evidence`);
  if (!cache.has(item.source)) cache.set(item.source, normalizeText(await pageText(item.source).catch(() => '')));
  const text = cache.get(item.source);
  if (!text) problems.push(`${label}: could not read ${item.source}`);
  item.evidence.forEach((phrase) => {
    if (text && !text.includes(normalizeText(phrase))) problems.push(`${label}: "${phrase}" not found in ${item.source}`);
  });
  // The year should appear on the page too, so a right phrase can't hide a wrong year.
  if (text && !text.includes(String(item.year))) problems.push(`${label}: year ${item.year} not found in ${item.source}`);
}

problems.forEach((problem) => console.log(`NO EVIDENCE ${problem}`));
console.log(`\n${animalHistory.length} history items checked, ${problems.length} problems.`);
process.exit(problems.length ? 1 : 0);
