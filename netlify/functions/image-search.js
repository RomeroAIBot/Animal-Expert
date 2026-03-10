const { json, searchUnsplash } = require('./_helpers');

// Shared image proxy for non-dog categories.
// Cats can use The Cat API first; all other categories fall back to Unsplash.
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  const catKey = process.env.CAT_API_KEY || process.env.VITE_CAT_API_KEY;

  try {
    const { category, query, keywords, catBreedId, fallbackUrl } = JSON.parse(event.body || '{}');
    if (!query) return json(400, { error: 'Query required' });

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
          return json(200, { url: first.url, source: 'the-cat-api' });
        }
      }
    }

    if (unsplashKey) {
      const unsplash = await searchUnsplash(query, keywords, unsplashKey);
      if (unsplash) return json(200, unsplash);
    }

    if (fallbackUrl) return json(200, { url: fallbackUrl, source: 'fallback' });
    return json(404, { error: 'No suitable image found' });
  } catch {
    return json(500, { error: 'Unexpected image-search failure' });
  }
};
