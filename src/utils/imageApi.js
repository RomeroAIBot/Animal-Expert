// Frontend API helper for breed images.
// Calls Netlify proxy endpoints so API keys never ship to the browser.
import photoManifest from '../data/photoManifest.json';
import { storage } from './storage';

// Animals a reviewer marked as having no accurate photo are left out of photo-based games.
export const hasUsablePhoto = (entity) => photoManifest[entity.id]?.status !== 'none';

const apiBase = import.meta.env.VITE_API_BASE_URL || '';
const IMAGE_REQUEST_TIMEOUT_MS = 8000;

const toKeywordSet = (entity) => {
  const raw = [entity.displayName, entity.photoQuery, ...(entity.imageQueries || [])].join(' ');
  return raw
    .split(/[|,]/)
    .map((value) => value.trim())
    .filter(Boolean)
    .join(' ');
};

// Resolves to { url, source, credit? } or null when no photo of this exact animal is available.
// Human-approved photos from the manifest are used first. Live search is only an interim
// fallback for animals nobody has reviewed yet.
export const fetchBreedImage = async (entity) => {
  const reviewed = photoManifest[entity.id];
  if (reviewed?.status === 'approved') {
    return {
      url: reviewed.url,
      source: reviewed.provider,
      credit: reviewed.credit,
      creditUrl: reviewed.creditUrl,
      // Written without the breed name, so screen-reader players get the same clues as sighted players.
      description: reviewed.description || null
    };
  }
  if (reviewed?.status === 'none') return null;

  const cacheKey = `${entity.category}:${entity.id}`;
  const cached = storage.getImageUrl(cacheKey);
  if (cached) return cached;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), IMAGE_REQUEST_TIMEOUT_MS);

  try {
    const endpoint = entity.category === 'dogs' ? '/api/dog-image' : '/api/image-search';
    const response = await fetch(`${apiBase}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        category: entity.category,
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

    if (!response.ok) return null;
    const data = await response.json();
    if (!data?.url) return null;

    const image = { url: data.url, source: data.source, credit: data.credit || null, creditUrl: data.creditUrl || null };
    storage.setImageUrl(cacheKey, image);
    return image;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
};

// Loads photos for a list of entities. Returns a map of entityId -> image (or null).
export const fetchImagesForEntities = async (entities) => {
  const results = await Promise.all(entities.map((entity) => fetchBreedImage(entity)));
  return Object.fromEntries(entities.map((entity, index) => [entity.id, results[index]]));
};
