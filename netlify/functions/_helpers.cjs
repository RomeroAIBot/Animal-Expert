const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  },
  body: JSON.stringify(body)
});

const normalize = (value) =>
  String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');

// Every meaningful word of the breed name must appear in the photo's own description or tags.
// Matching on any single word let "Ball Python Clown" accept any ball python photo.
// Generic animal nouns are skipped: a photo of a "German Shepherd" needn't also say "dog".
const genericWords = new Set(['dog', 'cat', 'horse', 'chicken', 'snake', 'breed']);

const nameWords = (breedName) =>
  normalize(breedName)
    .split(/\s+/)
    .filter((word) => word.length > 2 && !genericWords.has(word));

const describesBreed = (text, breedName) => {
  const words = nameWords(breedName);
  if (!words.length) return false;
  const haystack = ` ${normalize(text)} `;
  return words.every((word) => haystack.includes(` ${word} `) || haystack.includes(` ${word}s `));
};

const unsplashText = (photo) =>
  [
    photo.alt_description,
    photo.description,
    ...(photo.tags || []).map((tag) => tag.title)
  ].join(' ');

const searchUnsplash = async (query, breedName, key) => {
  const attempts = [query, breedName];

  for (const candidate of [...new Set(attempts.filter(Boolean))]) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      candidate
    )}&orientation=squarish&per_page=20&content_filter=high`;

    const response = await fetch(url, { headers: { Authorization: `Client-ID ${key}` } });
    if (!response.ok) continue;
    const data = await response.json();

    const photo = (data.results || []).find((item) => describesBreed(unsplashText(item), breedName));
    if (photo?.urls?.regular) {
      return {
        url: photo.urls.regular,
        source: 'unsplash',
        // Unsplash API terms require crediting the photographer with links back to Unsplash.
        credit: `${photo.user?.name || 'Unknown'} on Unsplash`,
        creditUrl: `${photo.user?.links?.html || 'https://unsplash.com'}?utm_source=animal_expert&utm_medium=referral`
      };
    }
  }

  return null;
};

module.exports = { json, normalize, describesBreed, searchUnsplash };
