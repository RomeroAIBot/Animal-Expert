import { useCallback, useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import PuzzleBoard from '../components/PuzzleBoard';
import TriviaQuestionCard from '../components/TriviaQuestionCard';
import { generatePuzzleDeck, generateRandomTrivia } from '../utils/gameGenerators';
import { playSound } from '../utils/audio';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { getDateKey } from '../utils/seed';
import { upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

function NewGamePage({ appContext }) {
  const [category, setCategory] = useState('mixed');
  const [mode, setMode] = useState('puzzle');
  const [size, setSize] = useState(4);
  const [nonce, setNonce] = useState(Date.now());
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState({});
  const [puzzleResult, setPuzzleResult] = useState(null);

  const puzzle = useMemo(
    () => generatePuzzleDeck(category, size, `random:${nonce}`),
    [category, size, nonce]
  );
  const trivia = useMemo(() => generateRandomTrivia(category), [category, nonce]);

  const question = trivia.questions[index];
  const total = trivia.questions.length;
  const finishedTrivia = index >= total;

  const newSession = () => {
    setNonce(Date.now());
    setIndex(0);
    setCorrectCount(0);
    setAnswers({});
    setPuzzleResult(null);
  };

  const onAnswer = (option) => {
    if (!question || answers[question.id]) return;
    const correct = option === question.answer;
    setCorrectCount((n) => (correct ? n + 1 : n));
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);
    setAnswers((prev) => ({ ...prev, [question.id]: option }));
  };

  const onNext = () => {
    if (index === total - 1) {
      recordUsedIds(trackerKeys.questions, category, trivia.questions.map((item) => item.id));
      upsertHistory({
        id: `random:trivia:${category}:${nonce}`,
        date: getDateKey(),
        mode: 'new-trivia',
        category,
        score: toPercent(correctCount, total),
        correct: correctCount,
        total
      });
    }
    setIndex((i) => i + 1);
  };

  const onPuzzleComplete = useCallback(
    (payload) => {
      recordUsedIds(trackerKeys.puzzles, category, [payload.comboId]);
      upsertHistory({
        id: `random:puzzle:${category}:${nonce}`,
        date: getDateKey(),
        mode: 'new-puzzle',
        category,
        size,
        pairs: payload.pairs,
        score: payload.score,
        flips: payload.flips,
        seconds: payload.seconds
      });
      setPuzzleResult(payload);
    },
    [category, nonce, size]
  );

  return (
    <section>
      <h2>Practice</h2>
      <p className="muted">Fresh random games any time. Questions you've seen recently are held back.</p>
      <div className="controls">
        <CategoryPicker value={category} onChange={(value) => { setCategory(value); newSession(); }} />
        <label className="field">
          <span>Mode</span>
          <select value={mode} onChange={(event) => { setMode(event.target.value); newSession(); }}>
            <option value="puzzle">Puzzle</option>
            <option value="trivia">Trivia</option>
          </select>
        </label>
        {mode === 'puzzle' && (
          <label className="field">
            <span>Grid</span>
            <select value={size} onChange={(event) => { setSize(Number(event.target.value)); newSession(); }}>
              <option value={4}>4x4</option>
              <option value={6}>6x6</option>
            </select>
          </label>
        )}
        <button type="button" className="button" onClick={newSession}>
          New game
        </button>
      </div>

      {mode === 'puzzle' ? (
        <>
          <PuzzleBoard
            key={puzzle.seed}
            deck={puzzle}
            soundEnabled={appContext.soundEnabled}
            onComplete={onPuzzleComplete}
          />
          {puzzleResult && (
            <p className="result">
              Complete! Score {puzzleResult.score}, {puzzleResult.flips} flips, {puzzleResult.seconds}s.
            </p>
          )}
        </>
      ) : !finishedTrivia && question ? (
        <>
          <p>
            Question {index + 1}/{total} | Correct: {correctCount}/{Object.keys(answers).length}
          </p>
          <TriviaQuestionCard
            question={question}
            selected={answers[question.id]}
            onAnswer={onAnswer}
            onNext={onNext}
            nextLabel={index === total - 1 ? 'See results' : 'Next question'}
          />
        </>
      ) : (
        <article className="card result">
          <h3>Trivia complete</h3>
          <p>
            Correct answers: {correctCount}/{total} ({toPercent(correctCount, total)}%)
          </p>
          <button type="button" className="button" onClick={newSession}>
            New game
          </button>
        </article>
      )}
    </section>
  );
}

export default NewGamePage;
