// The once-a-day welcome-back message for signed-in players: a fun fact, an animal "this day in
// history" item, or something about the player's own progress.
import { animalHistory } from '../data/animalHistory';
import { animalLabels, categoryLabel } from '../data/groups';
import { triviaQuestions } from '../data/triviaQuestions';
import { getUpcomingDailyIds } from './gameGenerators';
import { getDateKey, getDayNumber, hashString, seededShuffle } from './seed';
import { getCurrentStreak, readJson, storage, writeJson } from './storage';

const SHOWN_KEY = 'animalExpert:v1:welcome-shown';

export const wasShownToday = (userId, today = getDateKey()) => readJson(SHOWN_KEY, {})[userId] === today;

export const markShownToday = (userId, today = getDateKey()) => {
  const shown = readJson(SHOWN_KEY, {});
  shown[userId] = today;
  writeJson(SHOWN_KEY, shown);
};

// Longest run of consecutive days with a daily game.
const longestStreak = (days) => {
  let best = 0;
  let run = 0;
  let previous = null;
  days.forEach((day) => {
    const number = getDayNumber(day);
    run = previous !== null && number - previous === 1 ? run + 1 : 1;
    best = Math.max(best, run);
    previous = number;
  });
  return best;
};

const MILESTONES = [500, 365, 250, 100, 50, 25, 10];

// Short sentences about the player's own record, best first.
export const personalNotes = (history = storage.getHistory(), streak = getCurrentStreak().count) => {
  const notes = [];
  const daily = history.filter((item) => item.mode?.startsWith('daily'));
  const days = [...new Set(daily.map((item) => item.date).filter(Boolean))].sort();

  const playedToday = days.includes(getDateKey());
  if (streak >= 2) {
    notes.push(
      playedToday
        ? `You're on a ${streak}-day streak, and today's daily game is already done.`
        : `You're on a ${streak}-day streak. Play a daily game today to make it ${streak + 1}.`
    );
  }
  const longest = longestStreak(days);
  if (longest >= 3 && longest > streak) notes.push(`Your longest streak so far is ${longest} days. Can you beat it?`);

  const milestone = MILESTONES.find((count) => history.length >= count);
  if (milestone) notes.push(`You've finished ${history.length} games. That's past the ${milestone}-game mark!`);

  // Best category: highest average official trivia score, from at least three games.
  const byCategory = {};
  daily
    .filter((item) => item.mode === 'daily-trivia')
    .forEach((item) => {
      byCategory[item.category] ||= [];
      byCategory[item.category].push(item.score);
    });
  const best = Object.entries(byCategory)
    .filter(([, scores]) => scores.length >= 3)
    .map(([category, scores]) => ({ category, average: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) }))
    .sort((a, b) => b.average - a.average)[0];
  if (best) notes.push(`Your best Daily Trivia category is ${categoryLabel(best.category)}, averaging ${best.average}%.`);

  const perfect = daily.filter((item) => item.mode === 'daily-trivia' && item.score === 100).length;
  if (perfect >= 1) notes.push(`You've had ${perfect} perfect Daily Trivia score${perfect === 1 ? '' : 's'}.`);

  if (notes.length === 0 && days.length === 0) notes.push('Play a daily game today to start your first streak.');
  return notes;
};

const historyFor = (today) => {
  const monthDay = today.slice(5);
  return animalHistory.filter((item) => item.date === monthDay);
};

// A question that isn't one of today's daily questions, so the fact never spoils today's game.
const funFact = (today, seed) => {
  const upcoming = getUpcomingDailyIds('mixed', new Date(), 1);
  const pool = triviaQuestions.filter((q) => q.funFact && animalLabels[q.category] && !upcoming.has(q.id));
  const question = seededShuffle(pool, `welcome:${seed}:${today}`)[0];
  return question && {
    type: 'fact',
    heading: `Fun fact: ${animalLabels[question.category]}`,
    question: question.question,
    answer: question.answer,
    text: question.funFact,
    source: question.source
  };
};

// Picks today's item. The three kinds take turns from day to day; a kind with nothing to say
// today hands over to the next.
export const pickWelcomeItem = ({ userId, today = getDateKey(), history, streak } = {}) => {
  const seed = hashString(`${userId}:${today}`);
  const makers = {
    history: () => {
      const items = historyFor(today);
      if (!items.length) return null;
      const item = items[seed % items.length];
      return { type: 'history', heading: `This day in animal history, ${item.year}`, text: item.text, source: item.source };
    },
    personal: () => {
      const notes = personalNotes(history, streak);
      return notes.length ? { type: 'personal', heading: 'Your progress', text: notes[seed % Math.min(notes.length, 3)] } : null;
    },
    fact: () => funFact(today, seed)
  };
  const order = ['history', 'fact', 'personal'];
  const start = getDayNumber(today) % order.length;
  const rotated = [...order.slice(start), ...order.slice(0, start)];
  // A real history item for today is rare, so it always gets its turn when there is one.
  const ordered = historyFor(today).length ? ['history', ...rotated.filter((kind) => kind !== 'history')] : rotated;
  for (const kind of ordered) {
    const item = makers[kind]();
    if (item) return item;
  }
  return null;
};
