import { useEffect, useMemo, useRef, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import TriviaRun from '../components/TriviaRun';
import { categoryLabel } from '../data/groups';
import { levelLabels } from '../data/triviaLevels';
import { countTriviaByLevel, DAILY_LEVELS, generateDailyTrivia } from '../utils/gameGenerators';
import { listSavedGames, markDailyAttempted, wasDailyAttempted } from '../utils/savedGames';
import { getDateKey } from '../utils/seed';
import { getCurrentStreak, getOfficialDailyResult, updateStreak, upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

const levelHelp = {
  easy: 'Beginner questions anyone can try.',
  intermediate: 'For players who know the animal well.',
  difficult: 'Expert questions on breeds, health, genetics and science.',
  multi: 'A random mix of every level.'
};

const entryIdFor = (dateKey, category) => `${dateKey}:daily:trivia:${category}`;

// Multi keeps the key games used before levels existed, so a game in progress then still resumes.
const gameKeyFor = (entryId, level) => (level === 'multi' ? `daily-trivia:${entryId}` : `daily-trivia:${entryId}:${level}`);

// Today's unfinished daily trivia games, read back from their saved keys.
const savedToday = (dateKey) =>
  listSavedGames(`daily-trivia:${dateKey}:daily:trivia:`).map(({ key, state }) => {
    const [, , , , category, level = 'multi'] = key.split(':');
    return { category, level, index: state.index, total: state.questions.length };
  });

const officialNote = (official) =>
  `Your official score today for ${categoryLabel(official.category)} is ${official.correct}/${official.total} (${official.score}%)${
    official.level ? `, played at ${levelLabels[official.level]}` : ''
  }. Playing it again is practice.`;

function DailyTriviaSetup({ dateKey, category, setCategory, level, setLevel, onStart, defaultLevel }) {
  const [message, setMessage] = useState('');
  const headingRef = useRef(null);
  const counts = useMemo(() => (category ? countTriviaByLevel(category) : null), [category]);
  const resumable = savedToday(dateKey);
  const official = category ? getOfficialDailyResult(entryIdFor(dateKey, category)) : null;

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  // A "choose a level first" warning is out of date once the player chooses.
  useEffect(() => {
    setMessage('');
  }, [category, level]);

  const start = () => {
    if (!category && !level) return setMessage('Choose a category and a level first.');
    if (!category) return setMessage('Choose a category first.');
    if (!level) return setMessage('Choose a level first.');
    setMessage('');
    onStart(category, level);
  };

  const ready = category && level ? `Ready: ${categoryLabel(category)}, ${levelLabels[level]}.` : 'Choose a category and a level to start.';

  return (
    <article className="card trivia-setup">
      <h2 ref={headingRef} tabIndex={-1}>Set up today's game</h2>

      {resumable.length > 0 && (
        <div className="resume-list">
          <p>You have a game in progress:</p>
          {resumable.map((game) => (
            <button
              key={`${game.category}:${game.level}`}
              type="button"
              className="button"
              onClick={() => onStart(game.category, game.level)}
            >
              Resume {categoryLabel(game.category)}, {levelLabels[game.level]} (question {game.index + 1} of {game.total})
            </button>
          ))}
        </div>
      )}

      <p className="setup-step">Step 1: pick an animal category.</p>
      <div className="controls">
        <CategoryPicker id="daily-trivia-category" value={category} onChange={setCategory} placeholder="Choose a category" />
      </div>

      <p className="setup-step" id="daily-level-label">Step 2: pick a level.</p>
      <div className="level-buttons" role="group" aria-labelledby="daily-level-label">
        {DAILY_LEVELS.map((key) => (
          <button
            key={key}
            type="button"
            className={`level-button${level === key ? ' selected' : ''}`}
            aria-pressed={level === key}
            aria-labelledby={`level-name-${key}`}
            aria-describedby={`level-help-${key}`}
            onClick={() => setLevel(key)}
          >
            <span id={`level-name-${key}`} className="level-name">{levelLabels[key]}</span>
            <span id={`level-help-${key}`} className="level-help">
              {levelHelp[key]}
              {counts && key !== 'multi' && ` ${counts[key]} question${counts[key] === 1 ? '' : 's'}.`}
            </span>
          </button>
        ))}
      </div>
      {defaultLevel && (
        <p className="muted">Your default level, {levelLabels[defaultLevel]}, is picked for you. You can change it in Settings.</p>
      )}
      {counts && level && level !== 'multi' && counts[level] < 10 && (
        <p className="muted">
          {categoryLabel(category)} has only {counts[level]} {levelLabels[level].toLowerCase()} question
          {counts[level] === 1 ? '' : 's'} so far, so the rest of today's ten come from the nearest level.
        </p>
      )}

      {official && <p className="result">{officialNote(official)}</p>}

      <p className="setup-step">{ready}</p>
      <button type="button" className="button start-button" onClick={start}>
        Start daily trivia
      </button>
      <p role="alert" className="status-error">{message}</p>
    </article>
  );
}

function DailyTriviaPage({ appContext }) {
  const defaultLevel = DAILY_LEVELS.includes(appContext.settings.defaultLevel) ? appContext.settings.defaultLevel : '';
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState(defaultLevel);
  const [game, setGame] = useState(null);
  const dateKey = getDateKey();
  const [, refresh] = useState(0);
  const gameHeadingRef = useRef(null);

  // A default chosen in Settings while this page is open applies if no level is picked yet.
  useEffect(() => {
    if (!level && defaultLevel) setLevel(defaultLevel);
  }, [defaultLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (game) gameHeadingRef.current?.focus();
  }, [game]);

  const entryId = game ? entryIdFor(dateKey, game.category) : null;
  const borrowed = useMemo(() => (game ? generateDailyTrivia(game.category, game.level).borrowed : 0), [game]);

  const startGame = (nextCategory, nextLevel) => {
    setCategory(nextCategory);
    setLevel(nextLevel);
    setGame({ category: nextCategory, level: nextLevel });
  };

  // Only the first complete run of a category each day counts, at whichever level it was played,
  // and not if an earlier run was abandoned after answering.
  const isPracticeRun = () => Boolean(getOfficialDailyResult(entryId)) || wasDailyAttempted(entryId);

  const onFinish = ({ correct, total }) => {
    if (isPracticeRun()) {
      const current = getOfficialDailyResult(entryId);
      return current
        ? `Practice run. Your official score today is ${current.correct}/${current.total}.`
        : 'Practice run: an earlier run today was ended or restarted after answering, so this one is not official.';
    }
    const entry = {
      id: entryId,
      date: dateKey,
      mode: 'daily-trivia',
      category: game.category,
      level: game.level,
      score: toPercent(correct, total),
      correct,
      total
    };
    upsertHistory(entry);
    updateStreak(dateKey);
    appContext.setStreak(getCurrentStreak());
    refresh((n) => n + 1);
    return 'This is your official score for today.';
  };

  if (!game) {
    return (
      <section>
        <h1>Daily Trivia</h1>
        <p className="muted">
          Ten questions, the same for everyone today in each category and level, in a new order each time. Your first
          complete run of a category is your official score; ending or restarting after you answer makes later runs
          practice.
        </p>
        <DailyTriviaSetup
          dateKey={dateKey}
          category={category}
          setCategory={setCategory}
          level={level}
          setLevel={setLevel}
          onStart={startGame}
          defaultLevel={defaultLevel}
        />
      </section>
    );
  }

  const official = getOfficialDailyResult(entryId);
  const practiceNote = official
    ? officialNote(official)
    : wasDailyAttempted(entryId)
      ? 'You ended or restarted a run of this category today after answering, so runs today are practice.'
      : 'This is your first run of this category today, so it will be your official score if you finish it.';

  return (
    <section>
      <h1>Daily Trivia</h1>
      <h2 ref={gameHeadingRef} tabIndex={-1}>
        {categoryLabel(game.category)}, {levelLabels[game.level]}
      </h2>
      {borrowed > 0 && (
        <p className="muted">
          There aren't ten {levelLabels[game.level].toLowerCase()} questions for this category yet, so {borrowed} come from
          the nearest level.
        </p>
      )}
      <p className="result">{practiceNote}</p>
      <button type="button" className="button ghost" onClick={() => setGame(null)}>
        Change category or level
      </button>
      <TriviaRun
        key={`${entryId}:${game.level}`}
        gameKey={gameKeyFor(entryId, game.level)}
        createQuestions={() => generateDailyTrivia(game.category, game.level).questions}
        onFinish={onFinish}
        onAbandon={() => {
          if (!getOfficialDailyResult(entryId)) markDailyAttempted(entryId);
          refresh((n) => n + 1);
        }}
        soundEnabled={appContext.soundEnabled}
        showStreak
        game="daily-trivia"
      />
    </section>
  );
}

export default DailyTriviaPage;
