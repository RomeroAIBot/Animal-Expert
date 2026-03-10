const { json } = require('./_helpers');

// Dog image proxy: The Dog API first, dog.ceo fallback.
// Keeps DOG_API_KEY out of frontend code.
const fallbackDogCeo = async (query) => {
  const breed = String(query || '')
    .toLowerCase()
    .replace(/dog|breed/g, '')
    .trim()
    .split(' ')
    .join('/');

  const endpoint = breed
    ? `https://dog.ceo/api/breed/${breed}/images/random`
    : 'https://dog.ceo/api/breeds/image/random';

  const response = await fetch(endpoint);
  if (!response.ok) return null;
  const payload = await response.json();
  return payload?.message || null;
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const key = process.env.DOG_API_KEY;

  try {
    const { breedId, query } = JSON.parse(event.body || '{}');

    if (key && breedId) {
      const endpoint = `https://api.thedogapi.com/v1/images/search?breed_ids=${encodeURIComponent(
        breedId
      )}&limit=1`;

      const response = await fetch(endpoint, {
        headers: {
          'x-api-key': key
        }
      });

      if (response.ok) {
        const [first] = await response.json();
        if (first?.url) return json(200, { url: first.url, source: 'the-dog-api' });
      }
    }

    const fallback = await fallbackDogCeo(query);
    if (fallback) return json(200, { url: fallback, source: 'dog-ceo' });

    return json(404, { error: 'No dog image available' });
  } catch {
    return json(500, { error: 'Unexpected dog-image failure' });
  }
};