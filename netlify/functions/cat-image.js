const { json, keywordPass } = require('./_helpers');

const unsplashFallback = async (query, keywords) => {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return null;

  const attempts = [query, `${query} breed`, `${query} portrait`];
  for (const candidate of attempts) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      candidate
    )}&orientation=squarish&per_page=10&client_id=${key}`;

    const response = await fetch(url);
    if (!response.ok) continue;
    const data = await response.json();
    const photo = (data.results || []).find((item) => keywordPass(item, keywords || query));
    if (photo?.urls?.regular) return photo.urls.regular;
  }

  return null;
};

// Cat image proxy: The Cat API first, Unsplash fallback.
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const catKey = process.env.CAT_API_KEY;

  try {
    const { catBreedId, query, keywords } = JSON.parse(event.body || '{}');

    if (catKey && catBreedId) {
      const endpoint = `https://api.thecatapi.com/v1/images/search?breed_ids=${encodeURIComponent(
        catBreedId
      )}&limit=1`;
      const response = await fetch(endpoint, {
        headers: {
          'x-api-key': catKey
        }
      });

      if (response.ok) {
        const [first] = await response.json();
        if (first?.url) return json(200, { url: first.url, source: 'the-cat-api' });
      }
    }

    const fallback = await unsplashFallback(query, keywords);
    if (fallback) return json(200, { url: fallback, source: 'unsplash' });

    return json(404, { error: 'No cat image available' });
  } catch {
    return json(500, { error: 'Unexpected cat-image failure' });
  }
};
