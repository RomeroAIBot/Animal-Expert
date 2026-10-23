import { breeds } from './breeds.js';
import { breedClues } from './trivia/breedClues.js';
import { termQuestions } from './trivia/terms.js';
import { dogQuestions } from './trivia/dogs.js';
import { snakeQuestions } from './trivia/snakes.js';
import { chickenQuestions } from './trivia/chickens.js';
import { catQuestions } from './trivia/cats.js';
import { horseQuestions } from './trivia/horses.js';
import { seededShuffle } from '../utils/seed.js';

// Every question is hand-checked against a source (`npm run check:sources -- --rewritten`).
// The original imported bank (importedTriviaQuestions.js) is fully replaced: each category file
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
  { category: 'horse', questions: horseQuestions }
];

const handWritten = [
  ...categorySets.flatMap(({ category, questions }) => questions.map((item) => ({ ...item, category }))),
  ...termQuestions,
  ...allBreedEntries.map(buildBreedQuestion).filter(Boolean)
];

export const triviaQuestions = handWritten.map((item) => ({
  ...item,
  difficulty: 'expert',
  type: 'multiple-choice',
  // Written answer-first for readability; shuffled so the answer's position gives nothing away.
  options: seededShuffle(item.options, `opts:${item.id}`)
}));

export default triviaQuestions;
