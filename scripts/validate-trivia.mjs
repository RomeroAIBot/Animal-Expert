// Checks every trivia question for problems that make a multiple-choice item unfair or nonsensical.
// Usage: npm run validate:trivia            (summary)
//        npm run validate:trivia -- --list  (every flagged question)
//        npm run validate:trivia -- --list --category=dogs
import { breeds } from '../src/data/breeds.js';
import { triviaQuestions } from '../src/data/triviaQuestions.js';

const args = process.argv.slice(2);
const listAll = args.includes('--list');
const categoryArg = args.find((arg) => arg.startsWith('--category='))?.split('=')[1];

const breedNames = new Set(Object.values(breeds).flatMap((list) => list.map((item) => item.displayName)));
const trailingFragment = /\b(the|a|an|of|and|or|to|is|are|with|for|in|on|by|from|that|which|horse's|dog's|cat's)$/i;

const checks = [
  {
    id: 'option-count',
    severity: 'error',
    test: (q) => q.options.length !== 4 || new Set(q.options).size !== 4,
    message: 'needs exactly 4 distinct options'
  },
  {
    id: 'answer-missing',
    severity: 'error',
    test: (q) => !q.options.includes(q.answer),
    message: 'answer is not one of the options'
  },
  {
    id: 'answer-in-question',
    severity: 'error',
    test: (q) => q.answer.length > 3 && q.question.toLowerCase().includes(q.answer.toLowerCase()),
    message: 'question text contains the answer'
  },
  {
    id: 'truncated-answer',
    severity: 'error',
    test: (q) =>
      trailingFragment.test(q.answer.trim()) ||
      (q.funFact &&
        q.funFact.toLowerCase().startsWith(q.answer.toLowerCase()) &&
        q.funFact.length > q.answer.length * 2 &&
        q.answer.split(' ').length <= 2 &&
        /^(what|how|why)\b/i.test(q.question) &&
        /\b(vs|versus|differ|distinguish|and what|and why|and how)\b/i.test(q.question)),
    message: 'answer looks cut off from a longer explanation'
  },
  {
    id: 'off-topic-distractor',
    severity: 'error',
    // Questions that ask for a breed may use breeds outside the app's photo list.
    test: (q) =>
      !/\bbreeds?\b/i.test(q.question) &&
      !breedNames.has(q.answer) &&
      q.options.some((option) => option !== q.answer && breedNames.has(option)),
    message: 'a wrong option is a breed name but the answer is not a breed'
  },
  {
    id: 'length-giveaway',
    severity: 'warning',
    test: (q) => {
      const others = q.options.filter((option) => option !== q.answer).map((option) => option.length);
      return q.answer.length >= 20 && q.answer.length > Math.max(...others) * 2;
    },
    message: 'answer is much longer than every wrong option'
  },
  {
    id: 'non-url-source',
    severity: 'warning',
    test: (q) => !/^https?:\/\//.test(q.source || ''),
    message: 'source is not a link'
  }
];

const seenQuestions = new Map();
const flagged = [];

triviaQuestions
  .filter((q) => !categoryArg || q.category === categoryArg)
  .forEach((q) => {
    // A hand-checked question can waive a specific check it trips by design (see allowChecks).
    const problems = checks.filter((check) => !(q.allowChecks || []).includes(check.id) && check.test(q));
    const key = q.question.trim().toLowerCase();
    if (seenQuestions.has(key)) {
      problems.push({ id: 'duplicate', severity: 'error', message: `duplicates ${seenQuestions.get(key)}` });
    }
    seenQuestions.set(key, q.id);
    if (problems.length) flagged.push({ q, problems });
  });

const counts = {};
flagged.forEach(({ problems }) =>
  problems.forEach((problem) => {
    counts[problem.id] = (counts[problem.id] || 0) + 1;
  })
);

const total = triviaQuestions.filter((q) => !categoryArg || q.category === categoryArg).length;
const withErrors = flagged.filter(({ problems }) => problems.some((p) => p.severity === 'error')).length;

if (listAll) {
  flagged.forEach(({ q, problems }) => {
    console.log(`\n[${q.id}] ${q.question}`);
    console.log(`  options: ${q.options.join(' | ')}`);
    console.log(`  answer:  ${q.answer}`);
    problems.forEach((p) => console.log(`  ${p.severity.toUpperCase()}: ${p.message}`));
  });
}

console.log(`\nChecked ${total} questions${categoryArg ? ` in ${categoryArg}` : ''}.`);
console.log(`${withErrors} with errors, ${flagged.length - withErrors} with warnings only.`);
Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([id, count]) => console.log(`  ${id}: ${count}`));

process.exit(withErrors > 0 ? 1 : 0);
