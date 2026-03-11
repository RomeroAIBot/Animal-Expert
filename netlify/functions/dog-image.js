const { json } = require('./_helpers');

const DOG_CEO_PATHS = {
  'belgian-malinois': 'malinois',
  'border-collie': 'collie/border',
  'german-shepherd': 'germanshepherd',
  'doberman-pinscher': 'doberman',
  'newfoundland': 'newfoundland',
  vizsla: 'vizsla'
};

const normalize = (value) => String(value || '').toLowerCase().trim();

const toBreedSlug = (query) =>
  normalize(query)
    .replace(/dog|breed|standard|working|sporting|herding/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const buildDogApiDiagnostics = (reason, extra = {}) => ({
  reason,
  ...extra
});

const fetchDogApiImages = async (breedId, key) => {
  if (!key || !breedId) {
    return { images: [], diagnostics: buildDogApiDiagnostics(!key ? 'missing-dog-api-key' : 'missing-breed-id') };
  }

  const endpoint = `https://api.thedogapi.com/v1/images/search?breed_ids=${encodeURIComponent(
    breedId
  )}&limit=6&include_breeds=true&size=med`;

  const response = await fetch(endpoint, {
    headers: {
      'x-api-key': key
    }
  });

  if (!response.ok) {
    return {
      images: [],
      diagnostics: buildDogApiDiagnostics('bad-dog-api-response', { status: response.status })
    };
  }

  const payload = await response.json();
  const images = (payload || []).filter((item) => {
    if (!item?.url) return false;
    if (!Array.isArray(item.breeds) || item.breeds.length === 0) return true;
    return item.breeds.some((breed) => String(breed.id) === String(breedId));
  });

  return {
    images,
    diagnostics: buildDogApiDiagnostics(images.length ? 'dog-api-hit' : 'dog-api-empty', {
      returned: Array.isArray(payload) ? payload.length : 0
    })
  };
};

const fetchDogApiReferenceImage = async (breedId, breedName, key) => {
  if (!key || !breedId) return null;

  const byIdEndpoint = `https://api.thedogapi.com/v1/breeds/${encodeURIComponent(breedId)}`;
  const byIdResponse = await fetch(byIdEndpoint, {
    headers: {
      'x-api-key': key
    }
  });

  if (byIdResponse.ok) {
    const payload = await byIdResponse.json();
    if (payload?.reference_image_id) {
      return {
        url: `https://cdn2.thedogapi.com/images/${payload.reference_image_id}.jpg`,
        source: 'the-dog-api-reference',
        diagnostics: buildDogApiDiagnostics('reference-image-hit', {
          referenceImageId: payload.reference_image_id
        })
      };
    }
  }

  if (!breedName) return null;

  const searchEndpoint = `https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;
  const searchResponse = await fetch(searchEndpoint, {
    headers: {
      'x-api-key': key
    }
  });

  if (!searchResponse.ok) return null;
  const matches = await searchResponse.json();
  const match = (matches || []).find((item) => item?.reference_image_id);
  if (!match?.reference_image_id) return null;

  return {
    url: `https://cdn2.thedogapi.com/images/${match.reference_image_id}.jpg`,
    source: 'the-dog-api-reference-search',
    diagnostics: buildDogApiDiagnostics('reference-search-hit', {
      matchedBreedId: match.id,
      referenceImageId: match.reference_image_id
    })
  };
};

const fallbackDogCeo = async (entityId, dogCeoPath, query) => {
  const path = dogCeoPath || DOG_CEO_PATHS[entityId] || toBreedSlug(query).split(' ').join('/');
  if (!path) return null;

  const endpoint = `https://dog.ceo/api/breed/${path}/images/random`;
  const response = await fetch(endpoint);
  if (!response.ok) return null;
  const payload = await response.json();
  return payload?.message
    ? {
        url: payload.message,
        source: 'dog-ceo',
        diagnostics: buildDogApiDiagnostics('dog-ceo-hit', { path })
      }
    : null;
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(204, {});
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });

  const key = process.env.DOG_API_KEY;

  try {
    const { breedId, breedName, entityId, dogCeoPath, query, fallbackUrl } = JSON.parse(event.body || '{}');
    const failures = [];

    const dogApi = await fetchDogApiImages(breedId, key);
    failures.push(dogApi.diagnostics);
    if (dogApi.images[0]?.url) {
      return json(200, {
        url: dogApi.images[0].url,
        source: 'the-dog-api',
        diagnostics: failures
      });
    }

    const referenceImage = await fetchDogApiReferenceImage(breedId, breedName || query, key);
    if (referenceImage?.url) {
      return json(200, {
        url: referenceImage.url,
        source: referenceImage.source,
        diagnostics: [...failures, referenceImage.diagnostics]
      });
    }
    failures.push(buildDogApiDiagnostics('reference-image-miss'));

    const dogCeo = await fallbackDogCeo(entityId, dogCeoPath, query || breedName);
    if (dogCeo?.url) {
      return json(200, {
        url: dogCeo.url,
        source: dogCeo.source,
        diagnostics: [...failures, dogCeo.diagnostics]
      });
    }
    failures.push(buildDogApiDiagnostics('dog-ceo-miss'));

    if (fallbackUrl) {
      return json(200, {
        url: fallbackUrl,
        source: 'breed-fallback',
        diagnostics: [...failures, buildDogApiDiagnostics('breed-fallback-triggered')]
      });
    }

    return json(404, {
      error: 'No dog image available',
      diagnostics: failures
    });
  } catch (error) {
    return json(500, {
      error: 'Unexpected dog-image failure',
      diagnostics: [buildDogApiDiagnostics('unexpected-exception', { message: error.message })]
    });
  }
};

