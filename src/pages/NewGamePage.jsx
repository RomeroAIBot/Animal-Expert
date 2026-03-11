import { useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import PuzzleBoard from '../components/PuzzleBoard';
import TriviaQuestionCard from '../components/TriviaQuestionCard';
import { generatePuzzleDeck, generateRandomTrivia } from '../utils/gameGenerators';
import { playSound } from '../utils/audio';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { storage, upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

function NewGamePage({ appContext }) {
  const [category, setCategory] = useState('mixed');
  const [mode, setMode] = useState('puzzle');
  const [size, setSize] = useState(4);
  const [nonce, setNonce] = useState(Date.now());
  const [imageCache, setImageCache] = useState(storage.getImageCache());
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState({});

  const puzzle = useMemo(
    () => generatePuzzleDeck(category, size, `random:${nonce}`, new Date()),
    [category, size, nonce]
  );
  const trivia = useMemo(() => generateRandomTrivia(category, new Date()), [category, nonce]);

  const question = trivia.questions[index];
  const percentage = toPercent(correctCount, trivia.questions.length);

  const saveTrivia = (finalCorrect, finalPercentage) => {
    recordUsedIds(
      trackerKeys.questions,
      category,
      trivia.questions.map((item) => item.id),
      new Date().toISOString()
    );
    upsertHistory({
      id: `random:trivia:${category}:${nonce}`,
      date: new Date().toDateString(),
      mode: 'new-trivia',
      category,
      score: finalPercentage,
      correct: finalCorrect,
      total: trivia.questions.length
    });
  };

  const onAnswer = (option) => {
    if (!question || answers[question.id]) return;
    const correct = option === question.answer;
    const nextCorrect = correct ? correctCount + 1 : correctCount;
    const nextPercentage = toPercent(nextCorrect, trivia.questions.length);
    setCorrectCount(nextCorrect);
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);
    setAnswers((prev) => ({ ...prev, [question.id]: option }));

    if (index === trivia.questions.length - 1) {
      saveTrivia(nextCorrect, nextPercentage);
      setIndex((i) => i + 1);
      return;
    }

    setTimeout(() => setIndex((i) => i + 1), 300);
  };

  const resetSession = () => {
    setNonce(Date.now());
    setIndex(0);
    setCorrectCount(0);
    setAnswers({});
  };

  return (
    <section>
      <h2>Spawn New Game</h2>
      <div className="controls">
        <CategoryPicker value={category} onChange={setCategory} />
        <label className="field">
          <span>Mode</span>
          <select value={mode} onChange={(event) => setMode(event.target.value)}>
            <option value="puzzle">Puzzle</option>
            <option value="trivia">Trivia</option>
          </select>
        </label>
        {mode === 'puzzle' && (
          <label className="field">
            <span>Grid</span>
            <select value={size} onChange={(event) => setSize(Number(event.target.value))}>
              <option value={4}>4x4</option>
              <option value={6}>6x6</option>
            </select>
          </label>
        )}
        <button type="button" className="button" onClick={resetSession}>
          Reroll Session
        </button>
      </div>

      {mode === 'puzzle' ? (
        <PuzzleBoard
          deck={puzzle}
          category={category}
          imageCache={imageCache}
          setImageCache={(next) => {
            setImageCache(next);
            storage.setImageCache(next);
          }}
          soundEnabled={appContext.soundEnabled}
          onComplete={(payload) => {
            recordUsedIds(trackerKeys.puzzles, category, [payload.comboId || puzzle.comboId], new Date().toISOString());
            upsertHistory({
              id: `random:puzzle:${category}:${nonce}`,
              date: new Date().toDateString(),
              mode: 'new-puzzle',
              category,
              score: payload.score,
              flips: payload.flips,
              seconds: payload.seconds
            });
          }}
        />
      ) : (
        <>
          {question ? (
            <>
              <p>
                Question {Math.min(index + 1, trivia.questions.length)}/{trivia.questions.length} | Correct:{' '}
                {correctCount} | Score: {percentage}%
              </p>
              <TriviaQuestionCard
                question={question}
                selected={answers[question.id]}
                onAnswer={onAnswer}
              />
            </>
          ) : (
            <article className="card result">
              <h3>Trivia complete</h3>
              <p>
                Correct answers: {correctCount}/{trivia.questions.length}
              </p>
              <p>Percentage: {percentage}%</p>
            </article>
          )}
        </>
      )}
    </section>
  );
}

export default NewGamePage;
