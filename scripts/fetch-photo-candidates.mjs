// Gathers candidate photos for every animal so a human can approve one per animal on /review-photos.
// Results are merged into data/photo-candidates.json; existing candidates are kept.
//
// Usage: npm run photos:candidates                          (all providers, animals missing them)
//        npm run photos:candidates -- --providers=unsplash  (only Unsplash)
//        npm run photos:candidates -- --only=marsh-tacky,dong-tao --refresh
//
// Providers: wikipedia (images in the breed's article), commons (Wikimedia Commons search),
// unsplash (needs UNSPLASH_ACCESS_KEY), catapi (cats, needs CAT_API_KEY). dogceo (dogs, no key) is
// opt-in only: its photos come from a research dataset with no clear reuse license.
// Unsplash demo keys allow 50 requests/hour; the script stops cleanly when the limit is hit,
// so re-run it later to continue where it left off.
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { breeds } from '../src/data/breeds.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outFile = path.join(root, 'data', 'photo-candidates.json');
const USER_AGENT = 'AnimalExpertPhotoCurator/1.0 (https://github.com/RomeroAIBot/Animal-Expert)';
const PER_PROVIDER = 8;

const args = process.argv.slice(2);
const argValue = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.split('=')[1];
const only = argValue('only')?.split(',');
const providers = (argValue('providers') || 'wikipedia,commons,unsplash,catapi').split(',');
const refresh = args.includes('--refresh');

// Wikipedia article for each animal. Ball python morphs have no article of their own (the
// "Ball python" article shows a normal-colored snake), so they rely on Commons and Unsplash.
const wikiTitles = {
  'norwegian-lundehund': 'Norwegian Lundehund',
  'belgian-malinois': 'Malinois dog',
  'border-collie': 'Border Collie',
  'german-shepherd': 'German Shepherd',
  'australian-cattle-dog': 'Australian Cattle Dog',
  'doberman-pinscher': 'Dobermann',
  newfoundland: 'Newfoundland dog',
  vizsla: 'Vizsla',
  'australian-shepherd': 'Australian Shepherd',
  rottweiler: 'Rottweiler',
  'siberian-husky': 'Siberian Husky',
  'dutch-shepherd': 'Dutch Shepherd',
  'cane-corso': 'Cane Corso',
  'alaskan-malamute': 'Alaskan Malamute',
  beagle: 'Beagle',
  'corn-snake': 'Corn snake',
  'western-hognose': 'Heterodon nasicus',
  'california-kingsnake': 'California kingsnake',
  'boa-constrictor': 'Boa constrictor',
  'gaboon-viper': 'Gaboon viper',
  'carpet-python': 'Morelia spilota',
  'green-tree-python': 'Green tree python',
  'rosy-boa': 'Rosy boa',
  'milk-snake': 'Milk snake',
  'dumerils-boa': "Dumeril's boa",
  silkie: 'Silkie',
  'ayam-cemani': 'Ayam Cemani',
  'dong-tao': 'Dong Tao chicken',
  'la-fleche': 'La Flèche chicken',
  australorp: 'Australorp',
  welsummer: 'Welsummer',
  'cream-legbar': 'Cream Legbar',
  ameraucana: 'Ameraucana',
  orpington: 'Orpington chicken',
  'plymouth-rock': 'Plymouth Rock chicken',
  'rhode-island-red': 'Rhode Island Red',
  marans: 'Marans',
  polish: 'Polish chicken',
  sussex: 'Sussex chicken',
  cochin: 'Cochin chicken',
  'maine-coon': 'Maine Coon',
  chartreux: 'Chartreux',
  sphynx: 'Sphynx cat',
  savannah: 'Savannah cat',
  bengal: 'Bengal cat',
  'norwegian-forest-cat': 'Norwegian Forest cat',
  abyssinian: 'Abyssinian cat',
  ragdoll: 'Ragdoll',
  'scottish-fold': 'Scottish Fold',
  siamese: 'Siamese cat',
  burmese: 'Burmese cat',
  'russian-blue': 'Russian Blue',
  'turkish-van': 'Turkish Van',
  birman: 'Birman',
  'american-quarter-horse': 'American Quarter Horse',
  arabian: 'Arabian horse',
  friesian: 'Friesian horse',
  'cleveland-bay': 'Cleveland Bay',
  morgan: 'Morgan horse',
  andalusian: 'Andalusian horse',
  'american-cream-draft': 'American Cream Draft',
  'marsh-tacky': 'Marsh Tacky',
  thoroughbred: 'Thoroughbred',
  appaloosa: 'Appaloosa',
  'tennessee-walking-horse': 'Tennessee Walking Horse',
  clydesdale: 'Clydesdale horse',
  hanoverian: 'Hanoverian horse',
  mustang: 'Mustang'
};

// Files whose names suggest they are not a photo of the animal itself.
const nonPhotoName = /(map|range|distribution|logo|icon|flag|skull|skeleton|diagram|chart|stamp|coat.of.arms|drawing|illustration|painting|egg|eggs|chick\b|svg)/i;
const freeLicense = /(cc0|public domain|^pd|cc by|cc-by|attribution)/i;
const restrictedLicense = /(\b(nc|nd)\b|noncommercial|noderivs|fair use)/i;

class RateLimited extends Error {}

const stripHtml = (value) =>
  String(value || '')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Wikimedia asks unauthenticated clients to keep requests slow and serial.
const WIKIMEDIA_GAP_MS = 2000;
let lastWikimediaCall = 0;

const getJson = async (url, headers = {}, retries = 3) => {
  const isWikimedia = /wiki(pedia|media)\.org/.test(url);
  if (isWikimedia) {
    await sleep(Math.max(0, lastWikimediaCall + WIKIMEDIA_GAP_MS - Date.now()));
    lastWikimediaCall = Date.now();
  }

  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT, ...headers } });
  if (response.status === 429 && isWikimedia && retries > 0) {
    const wait = Number(response.headers.get('retry-after')) || 30;
    console.log(`  Wikimedia asked us to slow down; waiting ${wait}s`);
    await sleep(wait * 1000);
    return getJson(url, headers, retries - 1);
  }
  if (response.status === 403 || response.status === 429) throw new RateLimited(url);
  if (!response.ok) throw new Error(`${response.status} for ${url}`);
  return response.json();
};

const wikimediaCandidates = (pages, provider) =>
  Object.values(pages || {})
    .map((page) => ({ title: page.title, info: page.imageinfo?.[0] }))
    .filter(({ title, info }) => info && /image\/(jpeg|png|webp)/.test(info.mime) && !nonPhotoName.test(title))
    .filter(({ info }) => info.width >= 500 && info.height >= 400)
    .map(({ title, info }) => {
      const meta = info.extmetadata || {};
      const license = stripHtml(meta.LicenseShortName?.value);
      const thumbUrl = info.thumburl.split('?')[0];
      return {
        id: `${provider}:${title}`,
        provider,
        title: title.replace(/^File:/, ''),
        thumbUrl,
        url: thumbUrl,
        width: info.width,
        height: info.height,
        license,
        licenseUrl: meta.LicenseUrl?.value || null,
        credit: `${stripHtml(meta.Artist?.value) || 'Unknown'} · ${license} · Wikimedia Commons`,
        creditUrl: info.descriptionurl,
        sourcePage: info.descriptionurl,
        description: stripHtml(meta.ImageDescription?.value).slice(0, 200)
      };
    })
    .filter((item) => freeLicense.test(item.license) && !restrictedLicense.test(item.license));

const imageInfoParams = 'prop=imageinfo&iiprop=url|mime|size|extmetadata&iiurlwidth=1000&format=json&origin=*';

const fromWikipedia = async (entity) => {
  const title = wikiTitles[entity.id];
  if (!title) return [];
  const url = `https://en.wikipedia.org/w/api.php?action=query&redirects=1&titles=${encodeURIComponent(
    title
  )}&generator=images&gimlimit=50&${imageInfoParams}`;
  const data = await getJson(url);
  return wikimediaCandidates(data.query?.pages, 'wikipedia').slice(0, PER_PROVIDER);
};

const fromCommons = async (entity) => {
  const query = entity.photoQuery.replace(/\b(breed|species|morph|standard)\b/gi, '').trim();
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=20&gsrsearch=${encodeURIComponent(
    query
  )}&${imageInfoParams}`;
  const data = await getJson(url);
  return wikimediaCandidates(data.query?.pages, 'commons').slice(0, PER_PROVIDER);
};

const fromUnsplash = async (entity) => {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key || key.startsWith('your_')) return null;
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    entity.photoQuery
  )}&per_page=${PER_PROVIDER}&content_filter=high`;
  const data = await getJson(url, { Authorization: `Client-ID ${key}`, 'Accept-Version': 'v1' });
  const utm = 'utm_source=animal_expert&utm_medium=referral';
  return (data.results || []).map((photo) => ({
    id: `unsplash:${photo.id}`,
    provider: 'unsplash',
    title: photo.alt_description || photo.description || photo.id,
    thumbUrl: photo.urls.small,
    url: photo.urls.regular,
    width: photo.width,
    height: photo.height,
    license: 'Unsplash License',
    licenseUrl: 'https://unsplash.com/license',
    credit: `${photo.user.name} on Unsplash`,
    creditUrl: `${photo.user.links.html}?${utm}`,
    sourcePage: `${photo.links.html}?${utm}`,
    // Unsplash requires calling this once when a photo is chosen for use; the review server does it on approval.
    downloadLocation: photo.links.download_location,
    description: stripHtml(photo.description || photo.alt_description).slice(0, 200)
  }));
};

const fromDogCeo = async (entity) => {
  if (entity.category !== 'dogs' || !entity.dogCeoPath) return [];
  const data = await getJson(`https://dog.ceo/api/breed/${entity.dogCeoPath}/images/random/4`);
  return [...new Set(data.message || [])].map((url) => ({
    id: `dogceo:${url}`,
    provider: 'dogceo',
    title: url.split('/').pop(),
    thumbUrl: url,
    url,
    license: 'Stanford Dogs Dataset (via dog.ceo)',
    licenseUrl: 'http://vision.stanford.edu/aditya86/ImageNetDogs/',
    credit: 'Stanford Dogs Dataset via Dog CEO',
    creditUrl: 'https://dog.ceo/dog-api/',
    sourcePage: url
  }));
};

const fromCatApi = async (entity) => {
  const key = process.env.CAT_API_KEY;
  if (entity.category !== 'cat' || !entity.catApiBreedId || !key || key.startsWith('your_')) return [];
  const data = await getJson(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${entity.catApiBreedId}&limit=6`,
    { 'x-api-key': key }
  );
  return (data || []).map((item) => ({
    id: `catapi:${item.id}`,
    provider: 'catapi',
    title: item.id,
    thumbUrl: item.url,
    url: item.url,
    width: item.width,
    height: item.height,
    license: 'The Cat API',
    licenseUrl: 'https://thecatapi.com/',
    credit: 'The Cat API',
    creditUrl: 'https://thecatapi.com/',
    sourcePage: item.url
  }));
};

const fetchers = { wikipedia: fromWikipedia, commons: fromCommons, unsplash: fromUnsplash, dogceo: fromDogCeo, catapi: fromCatApi };

const existing = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : {};

// Tidy earlier results: drop tracking query strings from Wikimedia URLs and remove repeats.
Object.values(existing).forEach((record) => {
  record.candidates = record.candidates
    .map((item) =>
      ['wikipedia', 'commons'].includes(item.provider)
        ? { ...item, url: item.url.split('?')[0], thumbUrl: item.thumbUrl.split('?')[0] }
        : item
    )
    .filter((item, index, list) => list.findIndex((other) => other.url === item.url) === index);
});
const save = () => {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, `${JSON.stringify(existing, null, 2)}\n`);
};

const entities = Object.entries(breeds)
  .flatMap(([, list]) => list)
  .filter((entity) => !only || only.includes(entity.id));

const stopped = new Set();
for (const entity of entities) {
  const record = existing[entity.id] || { entityId: entity.id, displayName: entity.displayName, category: entity.category, candidates: [], fetched: {} };
  record.fetched ||= {};

  for (const provider of providers) {
    if (stopped.has(provider) || !fetchers[provider]) continue;
    if (record.fetched[provider] && !refresh) continue;
    try {
      const found = await fetchers[provider](entity);
      if (found === null) {
        stopped.add(provider);
        console.log(`Skipping ${provider}: no API key in .env`);
        continue;
      }
      // The same Commons file often turns up in both the article and the search; keep one.
      const sameFile = (a, b) => a.url.split('?')[0] === b.url.split('?')[0];
      record.candidates = [
        ...record.candidates.filter((item) => item.provider !== provider),
        ...found
      ].filter((item, index, list) => list.findIndex((other) => sameFile(other, item)) === index);
      record.fetched[provider] = new Date().toISOString();
      console.log(`${entity.displayName}: ${found.length} from ${provider}`);
    } catch (error) {
      if (error instanceof RateLimited) {
        stopped.add(provider);
        console.log(`${provider} rate limit reached; re-run later to continue.`);
      } else {
        console.log(`${entity.displayName}: ${provider} failed (${error.message})`);
      }
    }
  }

  existing[entity.id] = record;
  save();
}

const missing = entities.filter((entity) => !existing[entity.id]?.candidates.length).map((entity) => entity.displayName);
console.log(`\nSaved ${outFile}`);
console.log(missing.length ? `No candidates yet for: ${missing.join(', ')}` : 'Every animal has at least one candidate.');
