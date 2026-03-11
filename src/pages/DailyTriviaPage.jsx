import { useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import TriviaQuestionCard from '../components/TriviaQuestionCard';
import { generateDailyTrivia } from '../utils/gameGenerators';
import { getDateSeed } from '../utils/seed';
import { playSound } from '../utils/audio';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { storage, updateStreak, upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

function DailyTriviaPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const session = useMemo(() => generateDailyTrivia(category, new Date()), [category]);
  const question = session.questions[index];
  const percentage = toPercent(correctCount, session.questions.length);

  const reset = () => {
    setIndex(0);
    setCorrectCount(0);
    setStreak(0);
    setAnswers({});
    setFinished(false);
  };

  const onCategoryChange = (value) => {
    setCategory(value);
    reset();
  };

  const handleAnswer = (option) => {
    if (!question || answers[question.id]) return;

    const correct = option === question.answer;
    const nextStreak = correct ? streak + 1 : 0;
    const nextCorrect = correct ? correctCount + 1 : correctCount;
    const nextPercentage = toPercent(nextCorrect, session.questions.length);

    setAnswers((prev) => ({ ...prev, [question.id]: option }));
    setCorrectCount(nextCorrect);
    setStreak(nextStreak);
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);

    const done = index === session.questions.length - 1;
    if (done) {
      const date = getDateSeed(new Date());
      recordUsedIds(
        trackerKeys.questions,
        category,
        session.questions.map((item) => item.id),
        new Date().toISOString()
      );
      const entry = {
        id: `${date}:daily:trivia:${category}`,
        date,
        mode: 'daily-trivia',
        category,
        score: nextPercentage,
        correct: nextCorrect,
        total: session.questions.length
      };
      upsertHistory(entry);
      updateStreak(date);
      appContext.setStreak(storage.getStreak());
      setFinished(true);
      return;
    }

    setTimeout(() => setIndex((i) => i + 1), 350);
  };

  return (
    <section>
      <h2>Daily Trivia</h2>
      <div className="controls">
        <CategoryPicker value={category} onChange={onCategoryChange} />
      </div>

      {!finished && question && (
        <>
          <p>
            Question {index + 1}/{session.questions.length} | Correct: {correctCount} | Current score:{' '}
            {percentage}% | Streak: {streak}
          </p>
          <TriviaQuestionCard
            question={question}
            selected={answers[question.id]}
            onAnswer={handleAnswer}
          />
        </>
      )}

      {finished && (
        <article className="card result">
          <h3>Trivia complete</h3>
          <p>
            Correct answers: {correctCount}/{session.questions.length}
          </p>
          <p>Percentage: {percentage}%</p>
          <button type="button" className="button" onClick={reset}>
            Replay Today's Category Set
          </button>
        </article>
      )}
    </section>
  );
}

export default DailyTriviaPage;
