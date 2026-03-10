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

app.post('/api/image-search', async (req, res) => {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return res.status(500).json({ error: 'Missing UNSPLASH_ACCESS_KEY' });

  const { query, keywords } = req.body;
  const attempts = [query, `${query} breed`, `${query} close up`];

  for (const candidate of attempts) {
    const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      candidate
    )}&orientation=squarish&per_page=10&client_id=${key}`;

    const response = await fetch(endpoint);
    if (!response.ok) continue;
    const data = await response.json();
    const photo = (data.results || []).find((item) => keywordPass(item, keywords || query));
    if (photo?.urls?.regular) {
      return res.json({ url: photo.urls.regular, source: 'unsplash', query: candidate });
    }
  }

  return res.status(404).json({ error: 'No suitable image found' });
});

app.post('/api/dog-image', async (req, res) => {
  const key = process.env.DOG_API_KEY;
  const { breedId, query } = req.body;

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
  const fallbackUrl = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random`
    : 'https://dog.ceo/api/breeds/image/random';

  const fallbackRes = await fetch(fallbackUrl);
  if (!fallbackRes.ok) return res.status(404).json({ error: 'No image found' });
  const fallbackJson = await fallbackRes.json();
  return res.json({ url: fallbackJson.message, source: 'dog-ceo' });
});

app.listen(port, () => {
  console.log(`Animal Expert API running at http://localhost:${port}`);
});