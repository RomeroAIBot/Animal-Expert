import { getEntitiesForCategory } from '../data/breeds';
import { triviaQuestions } from '../data/triviaQuestions';
import { getDateSeed, seededShuffle } from './seed';

const filterTrivia = (category) => {
  if (category === 'mixed') return triviaQuestions;
  return triviaQuestions.filter((item) => item.category === category);
};

export const generateDailyTrivia = (category, date = new Date()) => {
  const seed = `${getDateSeed(date)}:trivia:${category}`;
  const selected = seededShuffle(filterTrivia(category), seed).slice(0, 10);
  return { seed, questions: selected };
};

export const generateRandomTrivia = (category) => {
  const seed = `${Date.now()}:trivia:${category}`;
  const selected = seededShuffle(filterTrivia(category), seed).slice(0, 10);
  return { seed, questions: selected };
};

export const generatePuzzleDeck = (category, size = 4, seedPrefix = 'daily', date = new Date()) => {
  const pairs = size === 6 ? 18 : 8;
  const seed = `${seedPrefix}:${getDateSeed(date)}:puzzle:${category}:${size}`;
  const entities = seededShuffle(getEntitiesForCategory(category), seed).slice(0, pairs);

  const cards = seededShuffle(
    entities.flatMap((entity) => [
      { id: `${entity.id}-photo`, pairId: entity.id, type: 'photo', entity },
      { id: `${entity.id}-name`, pairId: entity.id, type: 'name', entity }
    ]),
    `${seed}:deck`
  );

  return { seed, entities, cards, size };
};