import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8787;

app.use(cors());
app.use(express.json());

const normalize = (value) => String(value || '').toLowerCase();
const buildKeywordList = (keywords) => {
  const values = Array.isArray(keywords) ? keywords : [keywords];
  return values
    .flatMap((value) => normalize(value).split(/[\s(),|/-]+/))
    .map((word) => word.trim())
    .filter((word) => word.length > 3);
};

const keywordPass = (photo, keywords) => {
  const haystack = `${photo.alt_description || ''} ${photo.description || ''}`.toLowerCase();
  const words = buildKeywordList(keywords);

  if (!words.length) return true;
  return words.some((word) => haystack.includes(word));
};

const searchUnsplash = async (query, keywords, key) => {
  const attempts = [query, `${query} breed`, `${query} close up`, `${query} profile`];

  for (const candidate of attempts) {
    const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      candidate
    )}&orientation=squarish&per_page=10&client_id=${key}`;
    const response = await fetch(endpoint);
    if (!response.ok) continue;
    const data = await response.json();
    const photo = (data.results || []).find((item) => keywordPass(item, keywords || query));
    if (photo?.urls?.regular) {
      return { url: photo.urls.regular, source: 'unsplash', query: candidate };
    }
  }

  return null;
};

const searchPexels = async (query, apiKey) => {
  if (!apiKey) return null;
  const endpoint = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=8&orientation=square`;
  const response = await fetch(endpoint, { headers: { Authorization: apiKey } });
  if (!response.ok) return null;
  const data = await response.json();
  const first = (data.photos || []).find((item) => item?.src?.large);
  return first ? { url: first.src.large, source: 'pexels' } : null;
};

const searchPixabay = async (query, apiKey) => {
  if (!apiKey) return null;
  const endpoint = `https://pixabay.com/api/?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(
    query
  )}&image_type=photo&per_page=8&safesearch=true`;
  const response = await fetch(endpoint);
  if (!response.ok) return null;
  const data = await response.json();
  const first = (data.hits || []).find((item) => item?.webformatURL);
  return first ? { url: first.webformatURL, source: 'pixabay' } : null;
};

const DOG_CEO_PATHS = {
  'belgian-malinois': 'malinois',
  'border-collie': 'collie/border',
  'german-shepherd': 'germanshepherd',
  'doberman-pinscher': 'doberman',
  'newfoundland': 'newfoundland',
  vizsla: 'vizsla'
};

const toBreedSlug = (query) =>
  normalize(query)
    .replace(/dog|breed|standard|working|sporting|herding/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const fetchDogApiImages = async (breedId, key) => {
  if (!key || !breedId) return [];
  const endpoint = `https://api.thedogapi.com/v1/images/search?breed_ids=${encodeURIComponent(
    breedId
  )}&limit=6&include_breeds=true&size=med`;
  const response = await fetch(endpoint, { headers: { 'x-api-key': key } });
  if (!response.ok) return [];
  const payload = await response.json();
  return (payload || []).filter((item) => {
    if (!item?.url) return false;
    if (!Array.isArray(item.breeds) || item.breeds.length === 0) return true;
    return item.breeds.some((breed) => String(breed.id) === String(breedId));
  });
};

const fetchDogApiReferenceImage = async (breedId, breedName, key) => {
  if (!key || !breedId) return null;
  const byIdResponse = await fetch(`https://api.thedogapi.com/v1/breeds/${encodeURIComponent(breedId)}`, {
    headers: { 'x-api-key': key }
  });
  if (byIdResponse.ok) {
    const payload = await byIdResponse.json();
    if (payload?.reference_image_id) {
      return `https://cdn2.thedogapi.com/images/${payload.reference_image_id}.jpg`;
    }
  }

  const searchResponse = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(breedName || '')}`,
    { headers: { 'x-api-key': key } }
  );
  if (!searchResponse.ok) return null;
  const matches = await searchResponse.json();
  const match = (matches || []).find((item) => item?.reference_image_id);
  return match?.reference_image_id ? `https://cdn2.thedogapi.com/images/${match.reference_image_id}.jpg` : null;
};

const fallbackDogCeo = async (entityId, dogCeoPath, query) => {
  const path = dogCeoPath || DOG_CEO_PATHS[entityId] || toBreedSlug(query).split(' ').join('/');
  if (!path) return null;
  const response = await fetch(`https://dog.ceo/api/breed/${path}/images/random`);
  if (!response.ok) return null;
  const payload = await response.json();
  return payload?.message || null;
};

app.post('/api/image-search', async (req, res) => {
  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  const catKey = process.env.CAT_API_KEY || process.env.VITE_CAT_API_KEY;
  const pexelsKey = process.env.PEXELS_API_KEY;
  const pixabayKey = process.env.PIXABAY_API_KEY;
  const { category, query, keywords, catBreedId, fallbackUrl } = req.body;

  if (category === 'cat' && catBreedId && catKey) {
    const endpoint = `https://api.thecatapi.com/v1/images/search?breed_ids=${encodeURIComponent(
      catBreedId
    )}&limit=5`;
    const response = await fetch(endpoint, { headers: { 'x-api-key': catKey } });
    if (response.ok) {
      const results = await response.json();
      const first = results.find((item) => item?.url);
      if (first?.url) return res.json({ url: first.url, source: 'the-cat-api' });
    }
  }

  if (unsplashKey) {
    const result = await searchUnsplash(query, keywords, unsplashKey);
    if (result) return res.json(result);
  }

  const pexels = await searchPexels(query, pexelsKey);
  if (pexels) return res.json(pexels);

  const pixabay = await searchPixabay(query, pixabayKey);
  if (pixabay) return res.json(pixabay);

  if (fallbackUrl) return res.json({ url: fallbackUrl, source: 'fallback' });
  return res.status(404).json({ error: 'No suitable image found' });
});

app.post('/api/dog-image', async (req, res) => {
  const key = process.env.DOG_API_KEY;
  const { breedId, breedName, entityId, dogCeoPath, query, fallbackUrl } = req.body;

  const dogApiImages = await fetchDogApiImages(breedId, key);
  if (dogApiImages[0]?.url) {
    return res.json({ url: dogApiImages[0].url, source: 'the-dog-api' });
  }

  const referenceImage = await fetchDogApiReferenceImage(breedId, breedName || query, key);
  if (referenceImage) {
    return res.json({ url: referenceImage, source: 'the-dog-api-reference' });
  }

  const dogCeoImage = await fallbackDogCeo(entityId, dogCeoPath, query || breedName);
  if (dogCeoImage) {
    return res.json({ url: dogCeoImage, source: 'dog-ceo' });
  }

  if (fallbackUrl) return res.json({ url: fallbackUrl, source: 'fallback' });
  return res.status(404).json({ error: 'No image found' });
});

app.listen(port, () => {
  console.log(`Animal Expert API running at http://localhost:${port}`);
});
