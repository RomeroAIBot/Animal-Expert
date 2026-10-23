import { useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import TriviaQuestionCard from '../components/TriviaQuestionCard';
import { generateDailyTrivia } from '../utils/gameGenerators';
import { playSound } from '../utils/audio';
import { getCurrentStreak, getOfficialDailyResult, updateStreak, upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

function DailyTriviaPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [practice, setPractice] = useState(false);

  const session = useMemo(() => generateDailyTrivia(category), [category]);
  const entryId = `${session.dateKey}:daily:trivia:${category}`;
  const [official, setOfficial] = useState(() => getOfficialDailyResult(entryId));
  const question = session.questions[index];
  const total = session.questions.length;
  const answeredCount = Object.keys(answers).length;

  const reset = (nextCategory = category) => {
    setIndex(0);
    setCorrectCount(0);
    setStreak(0);
    setAnswers({});
    setFinished(false);
    setOfficial(getOfficialDailyResult(`${session.dateKey}:daily:trivia:${nextCategory}`));
  };

  const onCategoryChange = (value) => {
    setCategory(value);
    reset(value);
  };

  const handleAnswer = (option) => {
    if (!question || answers[question.id]) return;
    const correct = option === question.answer;
    setAnswers((prev) => ({ ...prev, [question.id]: option }));
    setCorrectCount((n) => (correct ? n + 1 : n));
    setStreak((n) => (correct ? n + 1 : 0));
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);
  };

  const finish = () => {
    // Only the first completed run of today's set counts; later runs are practice.
    const isPractice = Boolean(getOfficialDailyResult(entryId));
    setPractice(isPractice);
    setFinished(true);
    if (isPractice) return;
    const entry = {
      id: entryId,
      date: session.dateKey,
      mode: 'daily-trivia',
      category,
      score: toPercent(correctCount, total),
      correct: correctCount,
      total
    };
    upsertHistory(entry);
    updateStreak(session.dateKey);
    appContext.setStreak(getCurrentStreak());
    setOfficial(entry);
  };

  const handleNext = () => {
    if (index === total - 1) {
      finish();
      return;
    }
    setIndex((i) => i + 1);
  };

  return (
    <section>
      <h2>Daily Trivia</h2>
      <p className="muted">
        {total} questions, the same for everyone today. Your first complete run is your official score.
      </p>
      <div className="controls">
        <CategoryPicker value={category} onChange={onCategoryChange} />
      </div>

      {official && !finished && (
        <p className="result">
          Today's official score: {official.correct}/{official.total} ({official.score}%). Playing again is practice.
        </p>
      )}

      {!finished && question && (
        <>
          <p>
            Question {index + 1}/{total} | Correct: {correctCount}/{answeredCount} | Streak: {streak}
          </p>
          <TriviaQuestionCard
            question={question}
            selected={answers[question.id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            nextLabel={index === total - 1 ? 'See results' : 'Next question'}
          />
        </>
      )}

      {finished && (
        <article className="card result">
          <h3>{practice ? 'Practice run complete' : 'Trivia complete'}</h3>
          <p>
            Correct answers: {correctCount}/{total} ({toPercent(correctCount, total)}%)
          </p>
          {practice && official && <p>Official score today: {official.correct}/{official.total}</p>}
          <button type="button" className="button" onClick={() => reset()}>
            Replay today's set (practice)
          </button>
        </article>
      )}
    </section>
  );
}

export default DailyTriviaPage;
