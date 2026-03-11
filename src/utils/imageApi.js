// Frontend API helper for breed images.
// Calls Netlify proxy endpoints so API keys never ship to the browser.
const apiBase = import.meta.env.VITE_API_BASE_URL || '';

if (import.meta.env.PROD && !import.meta.env.VITE_API_BASE_URL) {
  console.error('VITE_API_BASE_URL is not set; falling back to same-origin API routes.');
}

const toKeywordSet = (entity) => {
  const raw = [entity.displayName, entity.photoQuery, ...(entity.imageQueries || [])].join(' ');
  return raw
    .split(/[|,]/)
    .map((value) => value.trim())
    .filter(Boolean)
    .join(' ');
};

export const fetchBreedImage = async ({ entity, category, cache, setCache }) => {
  const cacheKey = `${category}:${entity.id}`;
  if (cache[cacheKey]) return cache[cacheKey];

  const endpoint = category === 'dogs' ? '/api/dog-image' : '/api/image-search';
  const response = await fetch(`${apiBase}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      category,
      entityId: entity.id,
      breedName: entity.displayName,
      query: entity.photoQuery,
      keywords: toKeywordSet(entity),
      breedId: entity.dogApiBreedId,
      dogCeoPath: entity.dogCeoPath,
      catBreedId: entity.catApiBreedId,
      fallbackUrl: entity.fallbackUrl
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
