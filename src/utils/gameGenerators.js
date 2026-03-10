import { getEntitiesForCategory } from '../data/breeds';
import { triviaQuestions } from '../data/triviaQuestions';
import { getDateSeed, seededShuffle } from './seed';
import { selectNoRepeatCombination, selectNoRepeatItems, trackerKeys } from './questionTracker';

const normalizeCategory = (category) => {
  if (category === 'cats') return 'cat';
  if (category === 'horses') return 'horse';
  return category;
};

const filterTrivia = (category) => {
  const normalized = normalizeCategory(category);
  if (normalized === 'mixed') return triviaQuestions;
  return triviaQuestions.filter((item) => item.category === normalized);
};

const buildRoundOptions = (entity, category, seed) => {
  const entities = getEntitiesForCategory(category).filter((item) => item.id !== entity.id);
  const distractors = seededShuffle(entities, seed).slice(0, 3).map((item) => item.displayName);
  return seededShuffle([entity.displayName, ...distractors], `${seed}:options`);
};

const sanitizeAnswer = (value) => value.toUpperCase().replace(/[^A-Z]/g, '');

export const generateDailyTrivia = (category, date = new Date()) => {
  const normalized = normalizeCategory(category);
  const seed = `${getDateSeed(date)}:trivia:${normalized}`;
  const selected = selectNoRepeatItems({
    logKey: trackerKeys.questions,
    category: normalized,
    items: filterTrivia(normalized),
    count: 10,
    seed,
    now: date
  });
  return { seed, questions: selected };
};

export const generateRandomTrivia = (category, date = new Date()) => {
  const normalized = normalizeCategory(category);
  const seed = `${Date.now()}:trivia:${normalized}`;
  const selected = selectNoRepeatItems({
    logKey: trackerKeys.questions,
    category: normalized,
    items: filterTrivia(normalized),
    count: 10,
    seed,
    now: date
  });
  return { seed, questions: selected };
};

export const generatePuzzleDeck = (category, size = 4, seedPrefix = 'daily', date = new Date()) => {
  const normalized = normalizeCategory(category);
  const pairs = size === 6 ? 18 : 8;
  const pool = getEntitiesForCategory(normalized);
  const count = Math.min(pairs, pool.length);
  const seed = `${seedPrefix}:${getDateSeed(date)}:puzzle:${normalized}:${size}`;
  const selection = selectNoRepeatCombination({
    logKey: trackerKeys.puzzles,
    category: normalized,
    items: pool,
    count,
    seed,
    now: date
  });
  const entities = selection.items;

  const cards = seededShuffle(
    entities.flatMap((entity) => [
      { id: `${entity.id}-photo`, pairId: entity.id, type: 'photo', entity },
      { id: `${entity.id}-name`, pairId: entity.id, type: 'name', entity }
    ]),
    `${seed}:deck`
  );

  return { seed, entities, cards, size, comboId: selection.comboId, category: normalized };
};

export const generateIdentifyCrossSession = (category, seedPrefix = 'daily', date = new Date()) => {
  const normalized = normalizeCategory(category);
  const seed = `${seedPrefix}:${getDateSeed(date)}:identify-cross:${normalized}`;
  const pool = getEntitiesForCategory(normalized);
  const selection = selectNoRepeatCombination({
    logKey: trackerKeys.hybrids,
    category: normalized,
    items: pool,
    count: Math.min(5, pool.length),
    seed,
    now: date
  });

  const rounds = selection.items.map((entity, index) => ({
    id: `${entity.id}:round`,
    entity,
    options: buildRoundOptions(entity, normalized, `${seed}:round:${index}`)
  }));

  const clueQuestions = rounds.map((round, index) => {
    const available = triviaQuestions.filter((item) => item.entityId === round.entity.id);
    const chosen = selectNoRepeatItems({
      logKey: trackerKeys.crosswordClues,
      category: normalized,
      items: available,
      count: 1,
      seed: `${seed}:clue:${index}`,
      minimumRemaining: 1,
      now: date
    })[0];

    return {
      clueId: chosen?.id || `${round.entity.id}:fallback-clue`,
      clue: chosen?.funFact || round.entity.funFact,
      answer: sanitizeAnswer(round.entity.displayName),
      displayName: round.entity.displayName,
      entityId: round.entity.id
    };
  });

  return {
    seed,
    category: normalized,
    rounds,
    clueQuestions,
    comboId: selection.comboId
  };
};
