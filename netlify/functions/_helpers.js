const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  },
  body: JSON.stringify(body)
});

const normalize = (value) => String(value || '').toLowerCase();

const keywordPass = (photo, keywords) => {
  const haystack = normalize(`${photo.alt_description || ''} ${photo.description || ''}`);
  const words = normalize(keywords)
    .split(/[\s(),-]+/)
    .filter((word) => word.length > 3);

  if (!words.length) return true;
  return words.some((word) => haystack.includes(word));
};

const searchUnsplash = async (query, keywords, key) => {
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
      return { url: photo.urls.regular, source: 'unsplash', query: candidate };
    }
  }

  return null;
};

module.exports = { json, keywordPass, searchUnsplash };
