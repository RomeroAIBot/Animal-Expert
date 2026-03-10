const { json, keywordPass } = require('./_helpers');

// Unsplash proxy with keyword validation and retries.
// Keeps UNSPLASH_ACCESS_KEY server-side inside Netlify Functions.
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return json(500, { error: 'Missing UNSPLASH_ACCESS_KEY' });

  try {
    const { query, keywords } = JSON.parse(event.body || '{}');
    if (!query) return json(400, { error: 'Query required' });

    const attempts = [query, `${query} breed`, `${query} close up`, `${query} profile`];

    for (const candidate of attempts) {
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        candidate
      )}&orientation=squarish&per_page=10&client_id=${key}`;

      const response = await fetch(url);
      if (!response.ok) continue;
      const data = await response.json();

      const photo = (data.results || []).find((item) => keywordPass(item, keywords || query));
      if (photo?.urls?.regular) {
        return json(200, { url: photo.urls.regular, source: 'unsplash', query: candidate });
      }
    }

    return json(404, { error: 'No suitable image found' });
  } catch {
    return json(500, { error: 'Unexpected image-search failure' });
  }
};