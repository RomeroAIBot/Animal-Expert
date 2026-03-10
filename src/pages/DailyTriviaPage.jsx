import { useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import TriviaQuestionCard from '../components/TriviaQuestionCard';
import { generateDailyTrivia } from '../utils/gameGenerators';
import { getDateSeed } from '../utils/seed';
import { playSound } from '../utils/audio';
import { storage, updateStreak, upsertHistory } from '../utils/storage';

function DailyTriviaPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const session = useMemo(() => generateDailyTrivia(category, new Date()), [category]);
  const question = session.questions[index];

  const reset = () => {
    setIndex(0);
    setScore(0);
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
    const nextScore = correct ? score + 10 + nextStreak * 2 : score;

    setAnswers((prev) => ({ ...prev, [question.id]: option }));
    setScore(nextScore);
    setStreak(nextStreak);
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);

    const done = index === session.questions.length - 1;
    if (done) {
      const date = getDateSeed(new Date());
      const entry = {
        id: `${date}:daily:trivia:${category}`,
        date,
        mode: 'daily-trivia',
        category,
        score: nextScore,
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
            Question {index + 1}/{session.questions.length} | Score: {score} | Streak: {streak}
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
          <p>Final score: {score}</p>
          <button type="button" className="button" onClick={reset}>
            Replay Today's Category Set
          </button>
        </article>
      )}
    </section>
  );
}

export default DailyTriviaPage;