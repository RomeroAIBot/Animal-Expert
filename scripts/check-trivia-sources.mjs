// Confirms every trivia source link loads. Usage: npm run check:sources -- --category=dogs
// Questions with an `evidence` phrase are also checked: the phrase must appear in the source page text,
// so a claim is backed by what the page actually says, not just by a page that exists.
import { triviaQuestions } from '../src/data/triviaQuestions.js';

const categoryArg = process.argv.find((arg) => arg.startsWith('--category='))?.split('=')[1];
const onlyRewritten = process.argv.includes('--rewritten');

const urls = [
  ...new Set(
    triviaQuestions
      .filter((q) => !categoryArg || q.category === categoryArg)
      .filter((q) => !onlyRewritten || q.evidence)
      .map((q) => q.source)
      .filter((source) => /^https?:\/\//.test(source || ''))
  )
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Wikipedia rate-limits bursts (HTTP 429), so space out its requests and retry when limited.
const politeFetch = async (url, options) => {
  const isWiki = /wikipedia.org/.test(url);
  for (let attempt = 0; ; attempt += 1) {
    if (isWiki) await sleep(300);
    const response = await fetch(url, options);
    if (response.status !== 429 || attempt === 3) return response;
    await sleep(Number(response.headers.get('retry-after')) * 1000 || 5000 * (attempt + 1));
  }
};

const check = async (url) => {
  try {
    const response = await politeFetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (AnimalExpert source checker)', Accept: 'text/html' },
      signal: AbortSignal.timeout(15000)
    });
    return { url, status: response.status, finalUrl: response.url };
  } catch (error) {
    return { url, status: 'ERROR', finalUrl: error.message };
  }
};

const results = [];
for (const url of urls) results.push(await check(url));

// Some sites refuse scripted requests with 403 even though the page exists; open those in a browser.
const label = (r) => (r.status === 200 ? 'OK     ' : r.status === 403 ? 'BLOCKED' : 'BAD    ');
const blocked = results.filter((r) => r.status === 403);
const broken = results.filter((r) => r.status !== 200 && r.status !== 403);
results.forEach((r) =>
  console.log(`${label(r)} ${r.status} ${r.url}${r.finalUrl !== r.url ? ` -> ${r.finalUrl}` : ''}`)
);
console.log(
  `\n${urls.length} links checked, ${broken.length} broken, ${blocked.length} blocked scripted checks (verify in a browser).`
);

// Wikipedia pages are read through the API (plain text); other pages have their HTML tags stripped.
const pageText = async (url) => {
  const wiki = url.match(/^https:\/\/en\.wikipedia\.org\/wiki\/(.+)$/);
  const target = wiki
    ? `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&redirects=1&format=json&titles=${wiki[1]}`
    : url;
  const response = await politeFetch(target, {
    headers: { 'User-Agent': 'AnimalExpertSourceCheck/1.0 (https://github.com/RomeroAIBot/Animal-Expert)' },
    signal: AbortSignal.timeout(15000)
  });
  if (wiki) {
    const data = await response.json();
    return Object.values(data.query.pages)[0].extract || '';
  }
  return (await response.text()).replace(/<[^>]+>/g, ' ');
};

const normalizeText = (value) =>
  value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ');

const withEvidence = triviaQuestions
  .filter((q) => !categoryArg || q.category === categoryArg)
  .filter((q) => q.evidence);
const textCache = new Map();
const unsupported = [];
for (const q of withEvidence) {
  if (!textCache.has(q.source)) textCache.set(q.source, normalizeText(await pageText(q.source).catch(() => '')));
  if (!textCache.get(q.source).includes(normalizeText(q.evidence))) unsupported.push(q);
}
unsupported.forEach((q) => console.log(`NO EVIDENCE [${q.id}] "${q.evidence}" not found in ${q.source}`));
if (withEvidence.length) {
  console.log(`${withEvidence.length} claims checked against their sources, ${unsupported.length} not found.`);
}
process.exit(broken.length || unsupported.length ? 1 : 0);
