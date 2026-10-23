const { json, describesBreed, searchUnsplash } = require('./_helpers.cjs');

const searchPexels = async (query, breedName, apiKey) => {
  if (!apiKey) return null;

  const endpoint = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=20&orientation=square`;
  const response = await fetch(endpoint, {
    headers: {
      Authorization: apiKey
    }
  });

  if (!response.ok) return null;
  const data = await response.json();
  const match = (data.photos || []).find((item) => item?.src?.large && describesBreed(item.alt, breedName));
  return match
    ? { url: match.src.large, source: 'pexels', credit: `${match.photographer} on Pexels`, creditUrl: match.url }
    : null;
};

const searchPixabay = async (query, breedName, apiKey) => {
  if (!apiKey) return null;

  const endpoint = `https://pixabay.com/api/?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(
    query
  )}&image_type=photo&per_page=20&safesearch=true`;
  const response = await fetch(endpoint);
  if (!response.ok) return null;

  const data = await response.json();
  const match = (data.hits || []).find((item) => item?.webformatURL && describesBreed(item.tags, breedName));
  return match
    ? { url: match.webformatURL, source: 'pixabay', credit: `${match.user} on Pixabay`, creditUrl: match.pageURL }
    : null;
};

// Shared image proxy for non-dog categories.
// Cats use The Cat API first; every provider must return a photo labeled with the exact breed name.
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  const catKey = process.env.CAT_API_KEY || process.env.VITE_CAT_API_KEY;
  const pexelsKey = process.env.PEXELS_API_KEY;
  const pixabayKey = process.env.PIXABAY_API_KEY;

  try {
    const { category, query, breedName, catBreedId, fallbackUrl } = JSON.parse(event.body || '{}');
    if (!query || !breedName) return json(400, { error: 'Query and breedName required' });

    if (category === 'cat' && catBreedId && catKey) {
      const endpoint = `https://api.thecatapi.com/v1/images/search?breed_ids=${encodeURIComponent(
        catBreedId
      )}&limit=5`;
      const response = await fetch(endpoint, {
        headers: {
          'x-api-key': catKey
        }
      });

      if (response.ok) {
        const results = await response.json();
        const first = results.find((item) => item?.url);
        if (first?.url) {
          return json(200, { url: first.url, source: 'the-cat-api', credit: 'The Cat API' });
        }
      }
    }

    if (unsplashKey) {
      const unsplash = await searchUnsplash(query, breedName, unsplashKey);
      if (unsplash) return json(200, unsplash);
    }

    const pexels = await searchPexels(query, breedName, pexelsKey);
    if (pexels) return json(200, pexels);

    const pixabay = await searchPixabay(query, breedName, pixabayKey);
    if (pixabay) return json(200, pixabay);

    if (fallbackUrl) return json(200, { url: fallbackUrl, source: 'fallback' });
    return json(404, { error: 'No photo of this breed found' });
  } catch {
    return json(500, { error: 'Unexpected image-search failure' });
  }
};
