import { useEffect, useState } from 'react';
import TriviaQuestionCard from './TriviaQuestionCard';
import { triviaQuestions } from '../data/triviaQuestions';
import { playSound } from '../utils/audio';
import { markSeen } from '../utils/questionTracker';
import { clearGame, loadGame, saveGame } from '../utils/savedGames';

const questionsById = new Map(triviaQuestions.map((question) => [question.id, question]));

// Saved games store only ids and answer order; the question text comes from the current bank.
const restore = (saved) => {
  if (!saved?.questions?.length) return null;
  const questions = saved.questions.map(({ id, options }) => {
    const question = questionsById.get(id);
    return question && { ...question, options };
  });
  return questions.every(Boolean) ? { ...saved, questions } : null;
};

const freshRun = (createQuestions) => ({
  questions: createQuestions(),
  index: 0,
  answers: {},
  correct: 0,
  streak: 0,
  paused: false
});

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

/**
 * One trivia game with Pause, Start over and End game. Progress is saved after every move,
 * so leaving the page and coming back resumes the game.
 * - onFinish({ correct, total }) records the result and may return a note to show.
 * - onAbandon(answeredCount) is called when a started game is restarted or ended.
 */
function TriviaRun({ gameKey, createQuestions, onFinish, onAbandon, soundEnabled, showStreak = false, game = 'trivia' }) {
  const [run, setRun] = useState(() => restore(loadGame(gameKey)) || freshRun(createQuestions));
  const [result, setResult] = useState(null);
  const [ended, setEnded] = useState(false);
  const [confirmingEnd, setConfirmingEnd] = useState(false);
  const [status, setStatus] = useState(() => (loadGame(gameKey) ? 'Welcome back. Your game was resumed.' : ''));

  const question = run.questions[run.index];
  const total = run.questions.length;
  const answeredCount = Object.keys(run.answers).length;
  const inProgress = !result && !ended;

  // Save after every move; a finished or ended game is removed.
  useEffect(() => {
    if (inProgress) {
      saveGame(gameKey, { ...run, questions: run.questions.map(({ id, options }) => ({ id, options })) });
    }
  }, [gameKey, run, inProgress]);

  // A question counts as seen as soon as it is on screen.
  useEffect(() => {
    if (question && inProgress && !run.paused) markSeen([question.id]);
  }, [question, inProgress, run.paused]);

  const startOver = (message) => {
    if (answeredCount > 0 && inProgress) onAbandon?.(answeredCount);
    clearGame(gameKey);
    setRun(freshRun(createQuestions));
    setResult(null);
    setEnded(false);
    setConfirmingEnd(false);
    setStatus(message);
  };

  const endGame = () => {
    if (answeredCount > 0) onAbandon?.(answeredCount);
    clearGame(gameKey);
    setEnded(true);
    setConfirmingEnd(false);
    setStatus('Game ended. No score was saved.');
  };

  const handleAnswer = (option) => {
    if (!question || run.answers[question.id]) return;
    const correct = option === question.answer;
    playSound(correct ? 'correct' : 'wrong', soundEnabled);
    setRun((prev) => ({
      ...prev,
      answers: { ...prev.answers, [question.id]: option },
      correct: prev.correct + (correct ? 1 : 0),
      streak: correct ? prev.streak + 1 : 0
    }));
  };

  const handleNext = () => {
    if (run.index < total - 1) {
      setRun((prev) => ({ ...prev, index: prev.index + 1 }));
      return;
    }
    clearGame(gameKey);
    const note = onFinish({ correct: run.correct, total });
    setResult({ correct: run.correct, total, note });
    setStatus('');
  };

  const setPaused = (paused) => {
    setRun((prev) => ({ ...prev, paused }));
    setStatus(paused ? 'Game paused. Your progress is saved, so you can leave and come back any time.' : 'Game resumed.');
  };

  const controls = (
      <div className="game-controls">
        <button type="button" className="button ghost" onClick={() => setPaused(!run.paused)}>
          {run.paused ? 'Resume' : 'Pause'}
        </button>
        <button type="button" className="button ghost" onClick={() => startOver('New shuffle dealt. Good luck!')}>
          Start over
        </button>
        {!confirmingEnd ? (
          <button type="button" className="button ghost" onClick={() => setConfirmingEnd(true)}>
            End game
          </button>
        ) : (
          <span>
            End without saving a score?{' '}
            <button type="button" className="button button-reset" onClick={endGame}>Yes, end it</button>{' '}
            <button type="button" className="button ghost" onClick={() => setConfirmingEnd(false)}>Keep playing</button>
          </span>
        )}
      </div>
  );

  return (
    <div>
      <p role="status" className="muted">{status}</p>

      {inProgress && question && (
        <>
          {controls}
          {run.paused ? (
            <article className="card">
              <h3>Paused</h3>
              <p>Question {run.index + 1} of {total}. Your answers so far are saved.</p>
              <button type="button" className="button" onClick={() => setPaused(false)} autoFocus>
                Resume
              </button>
            </article>
          ) : (
            <>
              <p>
                Question {run.index + 1}/{total} | Correct: {run.correct}/{answeredCount}
                {showStreak && ` | Streak: ${run.streak}`}
              </p>
              <TriviaQuestionCard
                question={question}
                selected={run.answers[question.id]}
                onAnswer={handleAnswer}
                onNext={handleNext}
                nextLabel={run.index === total - 1 ? 'See results' : 'Next question'}
                game={game}
              />
            </>
          )}
        </>
      )}

      {result && (
        <article className="card result">
          <h3>Game complete</h3>
          <p>
            Correct answers: {result.correct}/{result.total} ({toPercent(result.correct, result.total)}%)
          </p>
          {result.note && <p>{result.note}</p>}
          <button type="button" className="button" onClick={() => startOver('New shuffle dealt.')} autoFocus>
            Play again
          </button>
        </article>
      )}

      {ended && (
        <article className="card result">
          <h3>Game ended</h3>
          <p>No score was saved.</p>
          <button type="button" className="button" onClick={() => startOver('New game started.')} autoFocus>
            Start a new game
          </button>
        </article>
      )}
    </div>
  );
}

export default TriviaRun;
