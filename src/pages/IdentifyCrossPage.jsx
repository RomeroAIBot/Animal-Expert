import { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Crossword from '@jaredreisinger/react-crossword';
import CategoryPicker from '../components/CategoryPicker';
import { playSound } from '../utils/audio';
import { generateIdentifyCrossSession, getIdentifyCrossPool, identifyCrossRoundCounts } from '../utils/gameGenerators';
import { fetchImagesForEntities } from '../utils/imageApi';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { getDateKey } from '../utils/seed';
import { storage, upsertHistory } from '../utils/storage';
import '../styles/identifyCross.css';

const keyboardLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const categoryLabels = { dogs: 'dogs', snakes: 'snakes', chickens: 'chickens', cat: 'cats', horse: 'horses', mixed: 'animals' };

// Photo round: 100 per animal, halved if you read the clue first, plus a streak bonus.
const PHOTO_POINTS = 100;
const HINT_POINTS = 50;
const STREAK_STEP = 25;
const STREAK_MAX = 75;
// Crossword: points per word, a cost per revealed letter, and a bonus (plus speed bonus) for finishing.
const WORD_POINTS = 50;
const REVEAL_COST = 10;
const FINISH_BONUS = 150;
const SPEED_BONUS_MAX = 150;

const difficulties = {
  standard: { label: 'Standard', help: 'Wrong answers are other animals from the same category.' },
  expert: { label: 'Expert', help: 'Wrong answers are look-alike breeds, like Dutch Shepherd for a Malinois.' }
};

const cellKey = (row, col) => `${row},${col}`;

// Every grid entry with its cells, so typed answers, revealed letters and the grid stay in step.
const listEntries = (crossword, rounds) => {
  if (!crossword) return [];
  return ['across', 'down'].flatMap((direction) =>
    Object.entries(crossword[direction])
      .map(([number, entry]) => {
        const round = rounds.find((item) => item.entity.id === entry.entityId);
        const cells = entry.answer
          .split('')
          .map((letter, index) =>
            direction === 'across'
              ? { row: entry.row, col: entry.col + index, letter }
              : { row: entry.row + index, col: entry.col, letter }
          );
        // Word lengths, e.g. "5, 3" for a two-word name, as printed crosswords show them.
        const wordLengths = round
          ? round.entity.displayName
              .split(/[\s-]+/)
              .map((word) => word.replace(/[^A-Za-z]/g, '').length)
              .filter(Boolean)
          : [entry.answer.length];
        return { key: `${number}-${direction}`, number, direction, clue: entry.clue, answer: entry.answer, cells, round, wordLengths };
      })
      .sort((a, b) => Number(a.number) - Number(b.number))
  );
};

// Short enough to listen to on a 19-letter answer: "letter 1 A, letter 9 N; 17 still blank".
const describePattern = (pattern) => {
  const known = pattern
    .map((letter, index) => (letter === '_' ? null : `letter ${index + 1} ${letter}`))
    .filter(Boolean);
  const blank = pattern.length - known.length;
  if (known.length === 0) return 'none yet';
  return `${known.join(', ')}${blank ? `; ${blank} still blank` : ''}`;
};

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

function AnimalPhoto({ image, loading, className, alt }) {
  if (image) {
    return <img className={className} src={image.url} alt={alt || image.description || 'Mystery animal photo'} />;
  }
  return (
    <div className={`${className} photo-placeholder`}>{loading ? 'Loading photo...' : 'Photo unavailable'}</div>
  );
}

function PhotoCredit({ image }) {
  if (!image?.credit) return null;
  return (
    <p className="trivia-source">
      Photo:{' '}
      {image.creditUrl ? (
        <a href={image.creditUrl} target="_blank" rel="noreferrer">
          {image.credit}
        </a>
      ) : (
        image.credit
      )}
    </p>
  );
}

function IdentifyCrossPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [roundCount, setRoundCount] = useState(6);
  const [difficulty, setDifficulty] = useState('standard');
  const [session, setSession] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [phase, setPhase] = useState('setup');
  const [roundIndex, setRoundIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [hintShown, setHintShown] = useState(false);
  const [images, setImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);
  const [crosswordStart, setCrosswordStart] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [guesses, setGuesses] = useState({});
  const [typed, setTyped] = useState({});
  const [entryFeedback, setEntryFeedback] = useState({});
  const [revealedLetters, setRevealedLetters] = useState(0);
  const [announcement, setAnnouncement] = useState('');
  const [outcome, setOutcome] = useState(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const crosswordRef = useRef(null);
  const touchRef = useRef(null);
  const headingRef = useRef(null);
  const guessLockRef = useRef(false);
  const finishedRef = useRef(false);
  const [selectedClue, setSelectedClue] = useState({ direction: 'across', number: '1' });

  const poolSize = useMemo(() => getIdentifyCrossPool(category).length, [category]);
  const crosswordData = session?.crossword || null;
  const rounds = session?.rounds || [];
  const currentRound = rounds[roundIndex];
  const currentAnswer = answers.find((item) => item.roundId === currentRound?.id);
  const identifiedCount = answers.filter((item) => item.correct).length;
  const photoScore = answers.reduce((sum, item) => sum + item.points, 0);
  const streak = useMemo(() => {
    let count = 0;
    for (let i = answers.length - 1; i >= 0 && answers[i].correct; i -= 1) count += 1;
    return count;
  }, [answers]);

  const entries = useMemo(() => listEntries(crosswordData, rounds), [crosswordData, rounds]);
  const solvedKeys = useMemo(
    () =>
      new Set(
        entries
          .filter((entry) => entry.cells.every((cell) => guesses[cellKey(cell.row, cell.col)] === cell.letter))
          .map((entry) => entry.key)
      ),
    [entries, guesses]
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Loads (and preloads) every photo for the session up front, so later rounds appear instantly.
  useEffect(() => {
    if (!session) return undefined;
    let cancelled = false;
    setLoadingImages(true);
    fetchImagesForEntities(session.rounds.map((round) => round.entity)).then((next) => {
      if (cancelled) return;
      Object.values(next).forEach((image) => {
        if (image?.url) new Image().src = image.url;
      });
      setImages(next);
      setLoadingImages(false);
    });
    return () => {
      cancelled = true;
    };
  }, [session]);

  useEffect(() => {
    if (!crosswordStart || outcome) return undefined;
    const timer = setInterval(() => setSeconds(Math.floor((Date.now() - crosswordStart) / 1000)), 1000);
    return () => clearInterval(timer);
  }, [crosswordStart, outcome]);

  // Each new screen moves keyboard and screen-reader focus to its heading.
  useEffect(() => {
    if (phase !== 'setup') headingRef.current?.focus();
  }, [phase, roundIndex]);

  const startGame = (settings = {}) => {
    const next = {
      category: settings.category ?? category,
      roundCount: settings.roundCount ?? roundCount,
      difficulty: settings.difficulty ?? difficulty
    };
    const id = Date.now();
    setSession(
      generateIdentifyCrossSession(next.category, `identify:${id}`, new Date(), {
        roundCount: next.roundCount,
        difficulty: next.difficulty
      })
    );
    setGameId(id);
    setPhase('identify');
    setRoundIndex(0);
    setAnswers([]);
    setHintShown(false);
    setImages({});
    setCrosswordStart(null);
    setSeconds(0);
    setGuesses({});
    setTyped({});
    setEntryFeedback({});
    setRevealedLetters(0);
    setAnnouncement('');
    setOutcome(null);
    setSelectedClue({ direction: 'across', number: '1' });
    guessLockRef.current = false;
    finishedRef.current = false;
  };

  const backToSetup = () => {
    setPhase('setup');
    setSession(null);
    setOutcome(null);
  };

  const handleGuess = (option) => {
    // Ignore extra clicks while the answer is showing, so one round can't be scored twice.
    if (!currentRound || guessLockRef.current) return;
    guessLockRef.current = true;
    const correct = option === currentRound.entity.displayName;
    const base = hintShown ? HINT_POINTS : PHOTO_POINTS;
    const bonus = correct ? Math.min(streak * STREAK_STEP, STREAK_MAX) : 0;
    setAnswers((prev) => [
      ...prev,
      {
        roundId: currentRound.id,
        entity: currentRound.entity,
        selected: option,
        correct,
        usedHint: hintShown,
        base: correct ? base : 0,
        bonus,
        points: correct ? base + bonus : 0
      }
    ]);
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);
  };

  const nextRound = () => {
    guessLockRef.current = false;
    setHintShown(false);
    if (roundIndex === rounds.length - 1) {
      setPhase('bridge');
      return;
    }
    setRoundIndex((value) => value + 1);
  };

  // Writes letters into both the visible grid and our own copy used by the answer list.
  const fillCells = (cells) => {
    setGuesses((prev) => {
      const next = { ...prev };
      cells.forEach((cell) => {
        next[cellKey(cell.row, cell.col)] = cell.letter;
      });
      return next;
    });
    cells.forEach((cell) => crosswordRef.current?.setGuess(cell.row, cell.col, cell.letter));
  };

  // Every animal named correctly in the photo round starts with its first letter filled in.
  const headStartCells = useMemo(() => {
    const identified = new Set(answers.filter((item) => item.correct).map((item) => item.entity.id));
    return entries.filter((entry) => entry.round && identified.has(entry.round.entity.id)).map((entry) => entry.cells[0]);
  }, [answers, entries]);

  const startCrossword = () => {
    setPhase('crossword');
    setCrosswordStart(Date.now());
    setSeconds(0);
  };

  useEffect(() => {
    if (phase !== 'crossword' || !crosswordData) return undefined;
    // Give the grid a moment to build its cells before writing the head-start letters.
    const timer = setTimeout(() => fillCells(headStartCells), 150);
    return () => clearTimeout(timer);
    // Only once, when the crossword opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, crosswordData]);

  const crosswordPoints = (solvedCount, solved, elapsed) =>
    Math.max(
      0,
      solvedCount * WORD_POINTS -
        revealedLetters * REVEAL_COST +
        (solved ? FINISH_BONUS + Math.max(0, SPEED_BONUS_MAX - elapsed) : 0)
    );

  const finishSession = (solved) => {
    // Revealing fills the grid, which can fire the "correct" callback; only the first finish counts.
    if (finishedRef.current) return;
    finishedRef.current = true;
    const elapsed = Math.floor((Date.now() - crosswordStart) / 1000);
    const wordsSolved = solved ? entries.length : solvedKeys.size;
    const gridPoints = crosswordPoints(wordsSolved, solved, elapsed);
    const score = photoScore + gridPoints;
    const previousBest = storage
      .getHistory()
      .filter((item) => item.mode === 'identify-cross' && item.category === session.category)
      .reduce((best, item) => Math.max(best, item.score || 0), 0);
    recordUsedIds(trackerKeys.hybrids, session.category, [session.comboId]);
    upsertHistory({
      id: `identify-cross:${session.category}:${gameId}`,
      date: getDateKey(),
      mode: 'identify-cross',
      category: session.category,
      score,
      identified: identifiedCount,
      total: rounds.length,
      crosswordSolved: solved,
      seconds: elapsed
    });
    if (solved) confetti({ particleCount: 140, spread: 70, origin: { y: 0.65 } });
    setSeconds(elapsed);
    setOutcome({ solved, score, gridPoints, wordsSolved, previousBest, isBest: score > previousBest });
    setPhase('done');
  };

  useEffect(() => {
    if (phase === 'crossword' && entries.length > 0 && solvedKeys.size === entries.length) finishSession(true);
    // finishSession reads the latest state; it only needs to run when the solved set changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [solvedKeys, phase, entries.length]);

  const submitEntry = (event, entry) => {
    event.preventDefault();
    const value = (typed[entry.key] || '').toUpperCase().replace(/[^A-Z]/g, '');
    let message;
    if (!value) {
      message = 'Type an answer first.';
    } else if (value === entry.answer) {
      fillCells(entry.cells);
      message = `Correct! ${entry.number} ${entry.direction} is ${entry.round?.entity.displayName || entry.answer}.`;
      playSound('correct', appContext.soundEnabled);
      // This answer's box disappears once solved, so move on to the next unsolved one.
      const next = entries.find((item) => item.key !== entry.key && !solvedKeys.has(item.key));
      if (next) setTimeout(() => document.getElementById(`ic-entry-${next.key}`)?.focus(), 0);
    } else if (value.length !== entry.answer.length) {
      message = `That has ${value.length} letters; this answer needs ${entry.answer.length}.`;
    } else {
      message = 'Not right yet. Try again, or reveal a letter.';
      playSound('wrong', appContext.soundEnabled);
    }
    setEntryFeedback((prev) => ({ ...prev, [entry.key]: message }));
    setAnnouncement(message);
  };

  const revealLetter = (entry) => {
    const missing = entry.cells.find((cell) => guesses[cellKey(cell.row, cell.col)] !== cell.letter);
    if (!missing) return;
    fillCells([missing]);
    setRevealedLetters((value) => value + 1);
    const position = entry.cells.indexOf(missing) + 1;
    const message = `Letter ${position} of ${entry.number} ${entry.direction} is ${missing.letter}. Cost ${REVEAL_COST} points.`;
    setEntryFeedback((prev) => ({ ...prev, [entry.key]: message }));
    setAnnouncement(message);
  };

  const revealAnswers = () => {
    finishSession(false);
    crosswordRef.current?.fillAllAnswers();
    setGuesses(Object.fromEntries(entries.flatMap((entry) => entry.cells.map((cell) => [cellKey(cell.row, cell.col), cell.letter]))));
  };

  const sendVirtualKey = (key) => {
    crosswordRef.current?.focus();
    const input = document.querySelector('.identify-crossword input[aria-label="crossword-input"]');
    if (!input) return;
    input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  };

  const swipeToClue = (delta) => {
    const order = entries.map(({ direction, number }) => ({ direction, number }));
    const currentIndex = order.findIndex(
      (item) => item.direction === selectedClue.direction && item.number === selectedClue.number
    );
    if (currentIndex < 0 || order.length === 0) return;
    const next = order[(currentIndex + delta + order.length) % order.length];
    document.querySelector(`[aria-label="clue-${next.number}-${next.direction}"]`)?.click();
  };

  const settingsSummary = session
    ? `${rounds.length} photos · ${difficulties[session.difficulty].label}`
    : '';

  return (
    <section className="identify-cross">
      <h2>Identify &amp; Cross</h2>
      <p className="muted">
        Name the animal in each photo, then solve a crossword of the same animals from expert clues. Every animal you
        name correctly gives you its first letter in the grid.
      </p>

      {phase === 'setup' && (
        <article className="card ic-setup">
          <h3>Set up your game</h3>
          <div className="ic-setup-grid">
            <CategoryPicker value={category} onChange={setCategory} />
            <fieldset className="ic-choice">
              <legend>Photos</legend>
              {identifyCrossRoundCounts.map((count) => (
                <label key={count}>
                  <input
                    type="radio"
                    name="ic-rounds"
                    value={count}
                    checked={roundCount === count}
                    onChange={() => setRoundCount(count)}
                  />{' '}
                  {count}
                </label>
              ))}
            </fieldset>
            <fieldset className="ic-choice">
              <legend>Difficulty</legend>
              {Object.entries(difficulties).map(([key, item]) => (
                <div key={key}>
                  <label>
                    <input
                      type="radio"
                      name="ic-difficulty"
                      value={key}
                      checked={difficulty === key}
                      onChange={() => setDifficulty(key)}
                      aria-describedby={`ic-difficulty-${key}`}
                    />{' '}
                    {item.label}
                  </label>
                  <span id={`ic-difficulty-${key}`} className="ic-help">
                    {item.help}
                  </span>
                </div>
              ))}
            </fieldset>
          </div>
          <p className="ic-pool">
            {poolSize} {categoryLabels[category]} have a checked photo and clue in this game.
          </p>
          <ul className="ic-rules">
            <li>
              Photo round: {PHOTO_POINTS} points per animal, {HINT_POINTS} if you read the clue first, plus a streak
              bonus of {STREAK_STEP} for each correct answer in a row (up to {STREAK_MAX}).
            </li>
            <li>
              Crossword: {WORD_POINTS} points per word, {FINISH_BONUS} for finishing, and a speed bonus of up to{' '}
              {SPEED_BONUS_MAX}. Each revealed letter costs {REVEAL_COST}.
            </li>
            <li>You can answer by typing into the answer list (works with screen readers) or in the grid.</li>
          </ul>
          <button type="button" className="button" onClick={() => startGame()} disabled={poolSize < 2}>
            Start game
          </button>
        </article>
      )}

      {phase === 'identify' && currentRound && (
        <article className="card identify-card">
          <div className="ic-scorebar">
            <h3 ref={headingRef} tabIndex={-1}>
              Photo {roundIndex + 1} of {rounds.length}
            </h3>
            <p>
              Score {photoScore}
              {streak > 1 ? ` · Streak ${streak}` : ''}
            </p>
          </div>
          <div
            className="ic-progress"
            role="progressbar"
            aria-label="Photo round progress"
            aria-valuemin={0}
            aria-valuemax={rounds.length}
            aria-valuenow={answers.length}
          >
            <span style={{ width: `${(answers.length / rounds.length) * 100}%` }} />
          </div>
          <AnimalPhoto
            className="identify-image"
            image={images[currentRound.entity.id]}
            loading={loadingImages}
          />
          <p className="ic-prompt" id="ic-prompt">
            Which animal is this?
          </p>
          {!currentAnswer &&
            (hintShown ? (
              <p className="ic-clue" id="ic-clue" tabIndex={-1}>
                <strong>Clue:</strong> {currentRound.clue}
              </p>
            ) : (
              <button
                type="button"
                className="button ghost small ic-hint"
                onClick={() => {
                  setHintShown(true);
                  // The button is replaced by the clue, so keep focus there and let it be read out.
                  setTimeout(() => document.getElementById('ic-clue')?.focus(), 0);
                }}
              >
                Show a clue (this photo then scores {HINT_POINTS})
              </button>
            ))}
          <div className="options-grid" role="group" aria-labelledby="ic-prompt">
            {currentRound.options.map((option) => {
              const isAnswer = currentAnswer && option === currentRound.entity.displayName;
              const isWrongPick = currentAnswer && option === currentAnswer.selected && !currentAnswer.correct;
              return (
                <button
                  key={option}
                  type="button"
                  className={`option ${isAnswer ? 'correct' : ''} ${isWrongPick ? 'wrong' : ''}`.trim()}
                  onClick={() => handleGuess(option)}
                  disabled={Boolean(currentAnswer)}
                >
                  {option}
                  {isAnswer && <span className="ic-mark"> ✓ correct answer</span>}
                  {isWrongPick && <span className="ic-mark"> ✗ your pick</span>}
                </button>
              );
            })}
          </div>
          {currentAnswer && (
            <div className="trivia-feedback" role="status">
              <p>
                <strong>
                  {currentAnswer.correct
                    ? `Correct! +${currentAnswer.points} points${currentAnswer.bonus ? ` (including a ${currentAnswer.bonus}-point streak bonus)` : ''}.`
                    : `Not quite. This is a ${currentRound.entity.displayName}.`}
                </strong>
              </p>
              {currentRound.funFact && (
                <p>
                  Did you know? {currentRound.funFact}{' '}
                  <a href={currentRound.source} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </p>
              )}
              <PhotoCredit image={images[currentRound.entity.id]} />
              <button type="button" className="button" onClick={nextRound} autoFocus>
                {roundIndex === rounds.length - 1 ? 'See photo results' : 'Next photo'}
              </button>
            </div>
          )}
        </article>
      )}

      {phase === 'bridge' && (
        <article className="card identify-results">
          <h3 ref={headingRef} tabIndex={-1}>
            Photo round complete: {identifiedCount} of {rounds.length} named, {photoScore} points
          </h3>
          <ul className="ic-result-list">
            {answers.map((item) => (
              <li key={item.roundId} className="identify-result-row">
                <AnimalPhoto
                  image={images[item.entity.id]}
                  loading={false}
                  className=""
                  alt={`${item.entity.displayName}. ${images[item.entity.id]?.description || ''}`}
                />
                <div>
                  <strong>{item.entity.displayName}</strong>
                  <p>
                    {item.correct
                      ? `Correct, ${item.points} points${item.usedHint ? ' (clue used)' : ''}`
                      : `You chose ${item.selected}`}
                  </p>
                </div>
                <span className={item.correct ? 'result-icon success' : 'result-icon fail'} aria-hidden="true">
                  {item.correct ? '✓' : '✗'}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Next, a crossword of these {rounds.length} animals.{' '}
            {identifiedCount === 0
              ? 'Every answer starts blank, but the clues will help.'
              : identifiedCount === 1
                ? 'You named one, so its answer starts with the first letter filled in.'
                : `You named ${identifiedCount}, so their answers start with the first letter filled in.`}
          </p>
          <button type="button" className="button" onClick={startCrossword}>
            Start the crossword
          </button>
        </article>
      )}

      {phase === 'crossword' && (
        <article className="card">
          <div className="ic-scorebar">
            <h3 ref={headingRef} tabIndex={-1}>
              Crossword: {solvedKeys.size} of {entries.length} solved
            </h3>
            <p>
              Photo score {photoScore} · Time {seconds}s
              {revealedLetters ? ` · ${plural(revealedLetters, 'letter')} revealed` : ''}
            </p>
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            {announcement}
          </p>
          {crosswordData ? (
            <>
              <h4>Answer list</h4>
              <p className="muted ic-list-help">
                Type each answer and press Enter. Correct answers fill the grid too. Letters already known are shown as
                a pattern.
              </p>
              <ol className="ic-entries">
                {entries.map((entry) => {
                  const pattern = entry.cells.map((cell) => guesses[cellKey(cell.row, cell.col)] === cell.letter ? cell.letter : '_');
                  const solved = solvedKeys.has(entry.key);
                  const inputId = `ic-entry-${entry.key}`;
                  return (
                    <li key={entry.key} className={`ic-entry ${solved ? 'solved' : ''}`.trim()}>
                      <p className="ic-entry-clue" id={`${inputId}-clue`}>
                        <strong>
                          {entry.number} {entry.direction}
                        </strong>{' '}
                        ({entry.answer.length} letters{entry.wordLengths.length > 1 ? `: ${entry.wordLengths.join(', ')}` : ''}):{' '}
                        {entry.clue}
                      </p>
                      <p className="ic-pattern">
                        <span className="sr-only">Known letters: {describePattern(pattern)}</span>
                        {pattern.map((letter, index) => (
                          <span key={index} className="ic-tile" aria-hidden="true">
                            {letter === '_' ? '' : letter}
                          </span>
                        ))}
                      </p>
                      {solved ? (
                        <p className="ic-solved">
                          <span aria-hidden="true">✓ </span>Solved: {entry.round?.entity.displayName || entry.answer}
                        </p>
                      ) : (
                        <form className="ic-entry-form" onSubmit={(event) => submitEntry(event, entry)}>
                          <label htmlFor={inputId} className="sr-only">
                            Answer for {entry.number} {entry.direction}
                          </label>
                          <input
                            id={inputId}
                            type="text"
                            autoComplete="off"
                            autoCapitalize="characters"
                            spellCheck={false}
                            aria-describedby={`${inputId}-clue ${inputId}-feedback`}
                            value={typed[entry.key] || ''}
                            onChange={(event) => setTyped((prev) => ({ ...prev, [entry.key]: event.target.value }))}
                          />
                          <button
                            type="submit"
                            className="button small"
                            aria-label={`Check ${entry.number} ${entry.direction}`}
                          >
                            Check
                          </button>
                          <button
                            type="button"
                            className="button ghost small"
                            onClick={() => revealLetter(entry)}
                            aria-label={`Reveal a letter in ${entry.number} ${entry.direction}`}
                          >
                            Reveal a letter
                          </button>
                        </form>
                      )}
                      <p className="ic-entry-feedback" id={`${inputId}-feedback`}>
                        {!solved && entryFeedback[entry.key]}
                      </p>
                    </li>
                  );
                })}
              </ol>

              <h4>Grid</h4>
              <div
                className="identify-crossword"
                style={{ touchAction: 'manipulation' }}
                onTouchStart={(event) => {
                  touchRef.current = event.changedTouches[0].clientX;
                }}
                onTouchEnd={(event) => {
                  const delta = event.changedTouches[0].clientX - touchRef.current;
                  if (Math.abs(delta) < 40) return;
                  swipeToClue(delta < 0 ? 1 : -1);
                }}
              >
                <Crossword
                  ref={crosswordRef}
                  data={crosswordData}
                  useStorage={false}
                  onCellChange={(row, col, char) => setGuesses((prev) => ({ ...prev, [cellKey(row, col)]: char }))}
                  onClueSelected={(direction, number) => setSelectedClue({ direction, number })}
                  onCrosswordCorrect={(isCorrect) => isCorrect && finishSession(true)}
                  theme={{
                    columnBreakpoint: '768px',
                    gridBackground: '#2d5016',
                    cellBackground: '#fffdf7',
                    cellBorder: '#8b3a3a',
                    textColor: '#1f241b',
                    numberColor: '#8b3a3a',
                    focusBackground: '#d4a017',
                    highlightBackground: '#f5f0e8'
                  }}
                />
              </div>
              {isMobile && (
                <div className="virtual-keyboard">
                  {keyboardLetters.map((letter) => (
                    <button key={letter} type="button" className="vk-key" onClick={() => sendVirtualKey(letter)}>
                      {letter}
                    </button>
                  ))}
                  <button type="button" className="vk-key wide" onClick={() => sendVirtualKey('Backspace')}>
                    Del
                  </button>
                </div>
              )}
              <button type="button" className="button ghost ic-giveup" onClick={revealAnswers}>
                Give up and reveal answers
              </button>
            </>
          ) : (
            <p>
              These names couldn't be fitted into a crossword grid.{' '}
              <button type="button" className="button small" onClick={() => startGame()}>
                Try a new game
              </button>
            </p>
          )}
        </article>
      )}

      {phase === 'done' && outcome && (
        <article className="card ic-done">
          <h3 ref={headingRef} tabIndex={-1}>
            {outcome.solved ? 'Crossword solved!' : 'Answers revealed.'} Final score: {outcome.score}
          </h3>
          <p className="ic-best">
            {outcome.isBest
              ? `New personal best for ${categoryLabels[session.category]}!`
              : `Your best for ${categoryLabels[session.category]}: ${outcome.previousBest}.`}
          </p>
          <dl className="ic-breakdown">
            <div>
              <dt>Photos</dt>
              <dd>
                {identifiedCount} of {rounds.length} named: {photoScore} points
              </dd>
            </div>
            <div>
              <dt>Crossword</dt>
              <dd>
                {outcome.wordsSolved} of {entries.length} words
                {revealedLetters ? `, ${plural(revealedLetters, 'letter')} revealed` : ''}
                {outcome.solved ? `, finished in ${seconds}s` : ''}: {outcome.gridPoints} points
              </dd>
            </div>
            <div>
              <dt>Settings</dt>
              <dd>{settingsSummary}</dd>
            </div>
          </dl>
          <div className="ic-actions">
            <button type="button" className="button" onClick={() => startGame()} autoFocus>
              Play again
            </button>
            <button type="button" className="button ghost" onClick={backToSetup}>
              Change settings
            </button>
          </div>

          <h4>Your field guide</h4>
          <ul className="ic-guide">
            {rounds.map((round) => {
              const image = images[round.entity.id];
              return (
                <li key={round.id} className="ic-guide-card">
                  <AnimalPhoto
                    image={image}
                    loading={false}
                    className="ic-guide-photo"
                    alt={`${round.entity.displayName}. ${image?.description || ''}`}
                  />
                  <div>
                    <h5>{round.entity.displayName}</h5>
                    <p>{round.funFact}</p>
                    <p className="trivia-source">
                      <a href={round.source} target="_blank" rel="noreferrer">
                        Read more on Wikipedia
                      </a>
                    </p>
                    <PhotoCredit image={image} />
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      )}
    </section>
  );
}

export default IdentifyCrossPage;
