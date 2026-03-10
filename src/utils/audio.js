const sounds = {
  flip: '/sounds/Flip.mp3',
  match: '/sounds/Match.mp3',
  correct: '/sounds/Correct.mp3',
  wrong: '/sounds/Wrong.mp3'
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
