import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8787;

app.use(cors());
app.use(express.json());

const keywordPass = (photo, keywords) => {
  const haystack = `${photo.alt_description || ''} ${photo.description || ''}`.toLowerCase();
  const words = String(keywords || '')
    .toLowerCase()
    .split(/[\s(),-]+/)
    .filter((word) => word.length > 3);

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
  const { breedId, query, fallbackUrl } = req.body;

  if (key && breedId) {
    const endpoint = `https://api.thedogapi.com/v1/images/search?breed_ids=${encodeURIComponent(
      breedId
    )}&limit=1`;
    const response = await fetch(endpoint, { headers: { 'x-api-key': key } });
    if (response.ok) {
      const [first] = await response.json();
      if (first?.url) return res.json({ url: first.url, source: 'the-dog-api' });
    }
  }

  const breed = String(query || '')
    .toLowerCase()
    .replace(/dog|breed/g, '')
    .trim()
    .split(' ')
    .join('/');
  const fallbackEndpoint = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random`
    : 'https://dog.ceo/api/breeds/image/random';

  const fallbackRes = await fetch(fallbackEndpoint);
  if (fallbackRes.ok) {
    const fallbackJson = await fallbackRes.json();
    return res.json({ url: fallbackJson.message, source: 'dog-ceo' });
  }

  if (fallbackUrl) return res.json({ url: fallbackUrl, source: 'fallback' });
  return res.status(404).json({ error: 'No image found' });
});

app.listen(port, () => {
  console.log(`Animal Expert API running at http://localhost:${port}`);
});
