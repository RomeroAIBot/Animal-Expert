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

module.exports = { json, keywordPass };