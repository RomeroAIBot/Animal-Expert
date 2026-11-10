// Difficulty levels for daily trivia: easy, intermediate or difficult.
//
// How a question gets its level:
// 1. A `level` field on the question itself (in src/data/trivia/*.js) always wins. Give new
//    questions a `level` when you add them.
// 2. Otherwise an override below, listed by id.
// 3. Otherwise the default for its id series (the letters before the number), below.
//
// The defaults follow where each series came from (November 2026 tagging of the 1,203 checked
// questions): the original expert bank, terms, chicken diseases and snake morphs are difficult;
// quiz-page batches, the user's intermediate insect list and breed clues are intermediate; the
// user's beginner lists (-b in dogs and snakes, -n in the livestock files, chickens-x) are easy.
// Every question was then read once and moved up or down where its own wording called for it.

export const LEVELS = ['easy', 'intermediate', 'difficult'];

export const levelLabels = {
  easy: 'Easy',
  intermediate: 'Intermediate',
  difficult: 'Difficult',
  multi: 'Multi'
};

// [pattern, default level], first match wins.
const seriesDefaults = [
  [/^term-/, 'difficult'],
  [/^ball-python-.*-breed-/, 'difficult'],
  [/-breed-\d+$/, 'intermediate'],
  [/^(dogs|snakes|chickens|cat|horse|cattle|pigs|sheep|goats)-\d+$/, 'difficult'],
  [/^chickens-k\d+$/, 'difficult'],
  [/^(dogs|snakes)-b\d+$/, 'easy'],
  [/^chickens-x\d+$/, 'easy'],
  [/^(dogs|horse)-x\d+$/, 'easy'],
  [/^(cattle|pigs|sheep|goats|horse)-n\d+$/, 'easy'],
  [/./, 'intermediate']
];

// Ids that differ from their series default: { prefix: 'suffix suffix ...' }.
const overrides = {
  easy: {
    'dogs-n': '07 30',
    'dogs-d': '05',
    'dogs-x': '02 05 06 07 08 09 10 17',
    'snakes-d': '02 07 08',
    'chickens-': '0627',
    'chickens-n': '07',
    'chickens-d': '01',
    'cat-n': '08',
    'cat-d': '01 05 12',
    'cat-c': '12 14',
    'horse-': '0493',
    'cattle-': '012',
    'lizards-': '001 008 015 018',
    'turtles-': '006 011 012 013',
    'crocodilians-': '001 010',
    'frogs-': '001 004 019 024',
    'salamanders-': '001 010 012',
    'bees-': '001 005 008 018',
    'bees-b': '01',
    'butterflies-': '005 008 009 010',
    'insects-': '001 002 008 012 013 019 021',
    'insects-b': '07',
    'poultry-': '005 007 014'
  },
  intermediate: {
    'dogs-': '0001 0005 0013 0015 0037 0040 0051 0063 0069 0072 0075 0082 0084 0091 0095 0096 0097 0099 0109 0111 0131 0137 0138 0143 0145 0150',
    'dogs-b': '01 03 08 09 11 12 13 14 17 20 21 28',
    'dogs-x': '01 03 04 11 12 13 15 16 18 19 20 21',
    'snakes-': '0180 0186 0189 0190 0191 0195 0198 0200 0206 0207 0212 0224 0227 0228 0230 0232 0233 0234 0235 0236 0239 0241 0242 0251 0252 0256 0258 0259 0260 0272 0296',
    'snakes-b': '20 22 27 28 29',
    'chickens-': '0611 0613 0614 0617 0620 0624 0626 0636 0637 0639 0645 0667 0668 0670 0672 0676 0686 0687 0688 0692 0698 0701 0711 0718 0719 0720 0731',
    'chickens-x': '01',
    'chickens-k': '03 04 05 07 08 09 10 12 23',
    'cat-': '0328 0333 0343 0356 0357 0370 0380 0381 0382 0385 0386 0392 0398 0399 0410 0418 0420 0422 0425 0445 0461 0462 0472 0474',
    'horse-': '0477 0481 0483 0485 0486 0488 0491 0495 0496 0502 0503 0505 0506 0509 0510 0511 0517 0518 0540 0549 0550 0553 0556 0557 0559 0563 0564 0565 0568 0570 0571 0578 0581 0584 0585 0588',
    'horse-n': '02',
    'cattle-': '001 003 004 008 009 010 013 017 021 023 026 027 033 035',
    'cattle-n': '01',
    'pigs-': '039 041 042 043 045 047 050 051 062 064 066 074 076',
    'pigs-n': '01',
    'sheep-': '077 079 080 085 086 089 091 093 094 100 105 113',
    'sheep-n': '01 02 04 10',
    'goats-': '114 115 116 118 120 122 126 133 140 146 149',
    'goats-n': '01 06',
    'term-': 'snakes-homozygous snakes-fossorial snakes-arboreal chickens-dust-bathing chickens-pea-comb cat-tuxedo horse-cow-sense horse-cow-hocked'
  },
  difficult: {
    'dogs-n': '01 02 06 08 10 11 12 15 16 17 20 26 28',
    'dogs-b': '10 16 18 27',
    'dogs-d': '07 08 09 13 17',
    'dogs-x': '14',
    'snakes-d': '03 04 10 12 14 17 18 19 20 21 22 24 25 30 33',
    'snakes-n': '03',
    'chickens-n': '06',
    'chickens-d': '02 03 07 09 10 11 12 14 15 16 17 19 22 23 24',
    'cat-n': '02 03 04 07 10 11 14 15',
    'cat-d': '07 08',
    'cat-c': '02 03 04 06 07 11 15 19 20 21 22 25 27',
    'cattle-n': '02 03',
    'sheep-n': '03 05',
    'goats-n': '02',
    'lizards-': '002 009 011 021',
    'turtles-': '001 005 010 014 016',
    'crocodilians-': '005 006 008 011 012',
    'frogs-': '002 003 005 006 010 011 012 015 018 020 023 027',
    'salamanders-': '003 004 005 006 007 011 013 018',
    'bees-': '003 006 013 015 019',
    'bees-b': '03',
    'butterflies-': '001 006 007 012',
    'insects-': '007 010 014 015 016 017 022 023 025 027 028',
    'insects-b': '17 21 22 23 25 27 28 31 34 35 38 39',
    'poultry-': '006 011 012 013'
  }
};

const overrideById = new Map();
Object.entries(overrides).forEach(([level, series]) =>
  Object.entries(series).forEach(([prefix, suffixes]) =>
    suffixes.split(' ').forEach((suffix) => {
      const id = `${prefix}${suffix}`;
      if (overrideById.has(id)) throw new Error(`triviaLevels: ${id} is listed twice`);
      overrideById.set(id, level);
    })
  )
);

// Ids listed above, so the validator can flag an override that no longer matches a question.
export const overrideIds = [...overrideById.keys()];

export const levelForQuestion = (question) => {
  if (LEVELS.includes(question.level)) return question.level;
  if (overrideById.has(question.id)) return overrideById.get(question.id);
  return seriesDefaults.find(([pattern]) => pattern.test(question.id))[1];
};
