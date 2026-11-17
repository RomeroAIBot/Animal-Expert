import { useEffect, useSyncExternalStore } from 'react';
import { backgroundKeyFor, backgrounds, defaultBackground } from '../data/backgrounds';

// The page background is a close-up photo of the animal being played. Pages ask for one with
// usePageBackground(category); the most recent request still on screen wins, so a trivia game can
// switch the photo per question (Mixed games) and the page's own choice comes back when the game ends.

let claims = [];
let nextId = 0;
const listeners = new Set();

const currentKey = () => (claims.length ? claims[claims.length - 1].key : defaultBackground);

const apply = () => {
  const key = currentKey();
  const root = document.documentElement;
  root.style.setProperty('--page-photo', `url("${backgrounds[key].file}")`);
  root.dataset.background = key;
  listeners.forEach((listener) => listener());
};

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

// Show the background for a category value (an animal id, a group id, 'mixed' or empty).
// null or undefined asks for nothing, leaving whatever the page chose.
export function usePageBackground(category) {
  const key = category == null ? null : backgroundKeyFor(category);
  useEffect(() => {
    if (!key) return undefined;
    const id = nextId++;
    claims.push({ id, key });
    apply();
    return () => {
      claims = claims.filter((claim) => claim.id !== id);
      apply();
    };
  }, [key]);
}

// The background on screen now, for the photo credit.
export function useCurrentBackground() {
  const key = useSyncExternalStore(subscribe, currentKey, () => defaultBackground);
  return { key, ...backgrounds[key] };
}

// Set the default photo before React draws anything, so the first paint is not blank.
if (typeof document !== 'undefined') apply();
