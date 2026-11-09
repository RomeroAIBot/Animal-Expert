// Counts questions per animal and level, and shows where the gaps are.
// Usage: npm run report:levels
// A daily game needs 10 questions; a level with fewer borrows from the next level, so aim for
// at least 70 per level per animal (a week of dailies without repeats).
import { triviaQuestions } from '../src/data/triviaQuestions.js';
import { allAnimals, animalLabels } from '../src/data/groups.js';
import { LEVELS } from '../src/data/triviaLevels.js';

const WEEK = 70;
const rows = allAnimals.map((animal) => {
  const counts = Object.fromEntries(LEVELS.map((level) => [level, 0]));
  triviaQuestions.filter((q) => q.category === animal).forEach((q) => (counts[q.level] += 1));
  return { animal, ...counts, total: LEVELS.reduce((sum, level) => sum + counts[level], 0) };
});

const pad = (value, width) => String(value).padEnd(width);
console.log(`${pad('Animal', 26)}${LEVELS.map((l) => pad(l, 14)).join('')}total`);
rows.forEach((row) =>
  console.log(`${pad(animalLabels[row.animal], 26)}${LEVELS.map((l) => pad(row[l], 14)).join('')}${row.total}`)
);
const totals = Object.fromEntries(LEVELS.map((l) => [l, rows.reduce((sum, row) => sum + row[l], 0)]));
console.log(`${pad('All animals', 26)}${LEVELS.map((l) => pad(totals[l], 14)).join('')}${triviaQuestions.length}`);

console.log('\nGaps (fewer than 10 means a daily game borrows questions from another level):');
rows.forEach((row) => {
  const short = LEVELS.filter((l) => row[l] < 10).map((l) => `${l} ${row[l]}`);
  const thin = LEVELS.filter((l) => row[l] >= 10 && row[l] < WEEK).map((l) => `${l} ${row[l]}`);
  if (short.length || thin.length) {
    console.log(
      `  ${animalLabels[row.animal]}: ${[short.length && `under 10: ${short.join(', ')}`, thin.length && `under ${WEEK}: ${thin.join(', ')}`].filter(Boolean).join('; ')}`
    );
  }
});
