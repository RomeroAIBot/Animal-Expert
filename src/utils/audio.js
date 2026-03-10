const sounds = {
  flip: '/sounds/flip.mp3',
  match: '/sounds/match.mp3',
  correct: '/sounds/correct.mp3',
  wrong: '/sounds/wrong.mp3'
};

const pool = Object.fromEntries(
  Object.entries(sounds).map(([key, src]) => [key, typeof Audio !== 'undefined' ? new Audio(src) : null])
);

export const playSound = (soundName, enabled = true) => {
  if (!enabled) return;
  const clip = pool[soundName];
  if (!clip) return;
  clip.currentTime = 0;
  clip.play().catch(() => {});
};