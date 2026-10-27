import crosswordLayoutGenerator from 'crossword-layout-generator';
import { breedClueDetails, entityClues, getEntitiesForCategory } from '../data/breeds';
import { triviaQuestions } from '../data/triviaQuestions';
import { hasApprovedPhoto, hasUsablePhoto } from './imageApi';
import { getDateKey, randomSeed, seededShuffle, selectDailyItems } from './seed';
import { selectNoRepeatCombination, selectNoRepeatItems, trackerKeys } from './questionTracker';

const TRIVIA_COUNT = 10;
const CROSSWORD_ATTEMPTS = 25;

const { generateLayout } = crosswordLayoutGenerator;

// Converts clues into react-crossword data. Returns null if any word could not be placed,
// because the layout generator silently drops words that share no letters with the rest.
const buildCrosswordData = (clues) => {
  const layout = generateLayout(clues.map((item) => ({ clue: item.clue, answer: item.answer })));
  const placed = (layout.result || []).filter((entry) => entry.orientation && entry.orientation !== 'none');
  if (placed.length !== clues.length) return null;

  const data = { across: {}, down: {} };
  placed.forEach((entry) => {
    data[entry.orientation][String(entry.position)] = {
      clue: entry.clue,
      answer: entry.answer,
      row: entry.starty - 1,
      col: entry.startx - 1,
      // Lets the page link each grid entry back to its photo round.
      entityId: clues.find((item) => item.answer === entry.answer)?.entityId
    };
  });
  return data;
};

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

// Distractors always come from the photographed animal's own category, so a dog photo
// is never paired with snake or horse options in Mixed mode. Expert rounds use the
// hand-picked look-alikes from the animal's clue instead (e.g. Dutch Shepherd for a Malinois).
const buildRoundOptions = (entity, seed, difficulty = 'standard') => {
  const lookalikes = breedClueDetails[entity.id]?.distractors;
  const distractors =
    difficulty === 'expert' && lookalikes?.length === 3
      ? lookalikes
      : seededShuffle(
          getEntitiesForCategory(entity.category).filter((item) => item.id !== entity.id),
          seed
        )
          .slice(0, 3)
          .map((item) => item.displayName);
  return seededShuffle([entity.displayName, ...distractors], `${seed}:options`);
};

const sanitizeAnswer = (value) => value.toUpperCase().replace(/[^A-Z]/g, '');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Blanks out any word of the answer (and simple plurals) so a clue never gives itself away.
export const maskAnswerInText = (text, displayName) => {
  const words = displayName
    .split(/[\s()/-]+/)
    .map((word) => word.replace(/[^A-Za-z']/g, ''))
    .filter((word) => word.length > 2);
  return words.reduce(
    (result, word) => result.replace(new RegExp(`\\b${escapeRegExp(word)}(s|es)?\\b`, 'gi'), '____'),
    text
  );
};

// Each game gets its own question order and answer order, so a replay never repeats a layout.
const shuffleForSession = (questions, sessionSeed) =>
  seededShuffle(questions, `${sessionSeed}:order`).map((question) => ({
    ...question,
    options: seededShuffle(question.options, `${sessionSeed}:${question.id}`)
  }));

// Everyone gets the same ten questions on a given day (needed for fair rankings); only the
// order of questions and answers changes from load to load.
export const generateDailyTrivia = (category, date = new Date()) => {
  const normalized = normalizeCategory(category);
  const dateKey = getDateKey(date);
  const seed = `${dateKey}:trivia:${normalized}`;
  const questions = selectDailyItems(filterTrivia(normalized), TRIVIA_COUNT, dateKey, `trivia:${normalized}`);
  return { seed, dateKey, questions: shuffleForSession(questions, randomSeed()) };
};

const DAILY_CATEGORIES = ['dogs', 'snakes', 'chickens', 'cat', 'horse', 'mixed'];
const DAY_MS = 24 * 60 * 60 * 1000;

// Question ids that are (or will be) a daily question in the coming week, so practice never spoils them.
const getUpcomingDailyIds = (category, date) => {
  const relevant = category === 'mixed' ? DAILY_CATEGORIES : [category, 'mixed'];
  const ids = new Set();
  for (let offset = 0; offset < 7; offset += 1) {
    const day = new Date(date.getTime() + offset * DAY_MS);
    relevant.forEach((cat) => generateDailyTrivia(cat, day).questions.forEach((question) => ids.add(question.id)));
  }
  return ids;
};

// Practice avoids anything shown in the last week and this week's daily questions.
export const generateRandomTrivia = (category, date = new Date()) => {
  const normalized = normalizeCategory(category);
  const seed = `${randomSeed()}:trivia:${normalized}`;
  const selected = selectNoRepeatItems({
    items: filterTrivia(normalized),
    count: TRIVIA_COUNT,
    seed,
    exclude: getUpcomingDailyIds(normalized, date),
    now: date
  });
  return { seed, questions: shuffleForSession(selected, seed) };
};

const buildDeck = (entities, seed, size, comboId, category, layoutSeed = seed) => {
  const cards = seededShuffle(
    entities.flatMap((entity) => [
      { id: `${entity.id}-photo`, pairId: entity.id, type: 'photo', entity },
      { id: `${entity.id}-name`, pairId: entity.id, type: 'name', entity }
    ]),
    `${layoutSeed}:deck`
  );
  return { seed, entities, cards, size, comboId, category };
};

const pairsForSize = (size) => (size === 6 ? 18 : 8);

export const generateDailyPuzzleDeck = (category, size = 4, date = new Date()) => {
  const normalized = normalizeCategory(category);
  const dateKey = getDateKey(date);
  const pool = getEntitiesForCategory(normalized).filter(hasUsablePhoto);
  const count = Math.min(pairsForSize(size), pool.length);
  const seed = `daily:${dateKey}:puzzle:${normalized}:${size}`;
  const entities = selectDailyItems(pool, count, dateKey, `puzzle:${normalized}:${size}`);
  const comboId = [...entities.map((item) => item.id)].sort().join('|');
  // Same animals for everyone today; the cards land in new places on every load and replay.
  return buildDeck(entities, seed, size, comboId, normalized, `${seed}:${randomSeed()}`);
};

export const generatePuzzleDeck = (category, size = 4, seedPrefix = 'random', date = new Date()) => {
  const normalized = normalizeCategory(category);
  const pool = getEntitiesForCategory(normalized).filter(hasUsablePhoto);
  const count = Math.min(pairsForSize(size), pool.length);
  const seed = `${seedPrefix}:${getDateKey(date)}:puzzle:${normalized}:${size}`;
  const selection = selectNoRepeatCombination({
    logKey: trackerKeys.puzzles,
    category: normalized,
    items: pool,
    count,
    seed,
    now: date
  });
  return buildDeck(selection.items, seed, size, selection.comboId, normalized);
};

export const identifyCrossRoundCounts = [4, 6, 8];

// Animals that can appear in Identify & Cross: a hand-checked clue for the crossword and a
// human-approved photo, so no round ever shows a placeholder or a live-search guess.
export const getIdentifyCrossPool = (category) =>
  getEntitiesForCategory(normalizeCategory(category)).filter(
    (entity) => entityClues[entity.id] && hasApprovedPhoto(entity) && hasUsablePhoto(entity)
  );

export const generateIdentifyCrossSession = (
  category,
  seedPrefix = 'random',
  date = new Date(),
  { roundCount = 6, difficulty = 'standard' } = {}
) => {
  const normalized = normalizeCategory(category);
  const seed = `${seedPrefix}:${getDateKey(date)}:identify-cross:${normalized}`;
  const pool = getIdentifyCrossPool(normalized);

  let session = null;
  for (let attempt = 0; attempt < CROSSWORD_ATTEMPTS && !session?.crossword; attempt += 1) {
    const selection = selectNoRepeatCombination({
      logKey: trackerKeys.hybrids,
      category: normalized,
      items: pool,
      count: Math.min(roundCount, pool.length),
      seed: `${seed}:${attempt}`,
      now: date
    });

    const rounds = selection.items.map((entity, index) => {
      const details = breedClueDetails[entity.id];
      return {
        id: `${entity.id}:round`,
        entity,
        options: buildRoundOptions(entity, `${seed}:round:${index}`, difficulty),
        // Shown as an optional hint during the photo round, so it never names the animal.
        clue: maskAnswerInText(details.clue, entity.displayName),
        funFact: details.funFact,
        source: details.source
      };
    });

    const clueQuestions = rounds.map((round) => ({
      clueId: `${round.entity.id}:clue`,
      clue: round.clue,
      answer: sanitizeAnswer(round.entity.displayName),
      displayName: round.entity.displayName,
      entityId: round.entity.id
    }));

    session = {
      seed,
      category: normalized,
      difficulty,
      rounds,
      clueQuestions,
      crossword: buildCrosswordData(clueQuestions),
      comboId: selection.comboId
    };
  }

  return session;
};
