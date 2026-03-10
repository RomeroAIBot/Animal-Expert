// Frontend API helper for breed images.
// Calls serverless proxy endpoints so API keys never ship to the browser.
export const fetchBreedImage = async ({ entity, category, cache, setCache }) => {
  const cacheKey = `${category}:${entity.id}`;
  if (cache[cacheKey]) return cache[cacheKey];

  const endpoint = category === 'dogs' ? '/api/dog-image' : '/api/image-search';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: entity.imageQueries[0],
      keywords: entity.displayName,
      breedId: entity.dogApiBreedId
    })
  });

  if (!response.ok) {
    throw new Error('Image fetch failed');
  }

  const data = await response.json();
  const next = { ...cache, [cacheKey]: data.url };
  setCache(next);
  return data.url;
};