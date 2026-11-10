import { breeds } from './breeds.js';
import { breedClues } from './trivia/breedClues.js';
import { termQuestions } from './trivia/terms.js';
import { dogQuestions } from './trivia/dogs.js';
import { snakeQuestions } from './trivia/snakes.js';
import { chickenQuestions } from './trivia/chickens.js';
import { catQuestions } from './trivia/cats.js';
import { horseQuestions } from './trivia/horses.js';
import { cattleQuestions } from './trivia/cattle.js';
import { pigQuestions } from './trivia/pigs.js';
import { sheepQuestions } from './trivia/sheep.js';
import { goatQuestions } from './trivia/goats.js';
import { lizardQuestions } from './trivia/lizards.js';
import { turtleQuestions } from './trivia/turtles.js';
import { crocodilianQuestions } from './trivia/crocodilians.js';
import { frogQuestions } from './trivia/frogs.js';
import { salamanderQuestions } from './trivia/salamanders.js';
import { beeQuestions } from './trivia/bees.js';
import { butterflyQuestions } from './trivia/butterflies.js';
import { insectQuestions } from './trivia/insects.js';
import { poultryQuestions } from './trivia/poultry.js';
import { seededShuffle } from '../utils/seed.js';
import { levelForQuestion } from './triviaLevels.js';

// Every question is hand-checked against a source (`npm run check:sources -- --rewritten`).
// The original imported bank was fully replaced and removed (it is in git history): each category file
// lists which imported question each rewrite `replaces`, and why the rest were retired.

const allBreedEntries = Object.entries(breeds).flatMap(([category, entries]) =>
  entries.map((entity) => ({ ...entity, category }))
);

// One question per breed, built from its hand-checked clue and look-alike wrong options.
const buildBreedQuestion = (entity) => {
  const entry = breedClues[entity.id];
  if (!entry) return null;
  const qId = `${entity.id}-breed-1`;
  return {
    id: qId,
    entityId: entity.id,
    category: entity.category,
    question: `Which animal matches this description? ${entry.clue}`,
    options: [entity.displayName, ...entry.distractors],
    answer: entity.displayName,
    funFact: entry.funFact,
    source: entry.source,
    evidence: entry.evidence
  };
};

const categorySets = [
  { category: 'dogs', questions: dogQuestions },
  { category: 'snakes', questions: snakeQuestions },
  { category: 'chickens', questions: chickenQuestions },
  { category: 'cat', questions: catQuestions },
  { category: 'horse', questions: horseQuestions },
  { category: 'cattle', questions: cattleQuestions },
  { category: 'pigs', questions: pigQuestions },
  { category: 'sheep', questions: sheepQuestions },
  { category: 'goats', questions: goatQuestions },
  { category: 'lizards', questions: lizardQuestions },
  { category: 'turtles', questions: turtleQuestions },
  { category: 'crocodilians', questions: crocodilianQuestions },
  { category: 'frogs', questions: frogQuestions },
  { category: 'salamanders', questions: salamanderQuestions },
  { category: 'bees', questions: beeQuestions },
  { category: 'butterflies', questions: butterflyQuestions },
  { category: 'bugs', questions: insectQuestions },
  { category: 'poultry', questions: poultryQuestions }
];

const handWritten = [
  ...categorySets.flatMap(({ category, questions }) => questions.map((item) => ({ ...item, category }))),
  ...termQuestions,
  ...allBreedEntries.map(buildBreedQuestion).filter(Boolean)
];

export const triviaQuestions = handWritten.map((item) => ({
  ...item,
  // easy, intermediate or difficult (see triviaLevels.js).
  level: levelForQuestion(item),
  type: 'multiple-choice',
  // Written answer-first for readability; shuffled so the answer's position gives nothing away.
  options: seededShuffle(item.options, `opts:${item.id}`)
}));

export default triviaQuestions;
