import { useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import TriviaRun from '../components/TriviaRun';
import { generateDailyTrivia } from '../utils/gameGenerators';
import { markDailyAttempted, wasDailyAttempted } from '../utils/savedGames';
import { getDateKey } from '../utils/seed';
import { getCurrentStreak, getOfficialDailyResult, updateStreak, upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

function DailyTriviaPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const dateKey = getDateKey();
  const entryId = `${dateKey}:daily:trivia:${category}`;
  const [official, setOfficial] = useState(() => getOfficialDailyResult(entryId));
  const [, refresh] = useState(0);

  const onCategoryChange = (value) => {
    setCategory(value);
    setOfficial(getOfficialDailyResult(`${dateKey}:daily:trivia:${value}`));
  };

  // Only the first complete run counts, and not if an earlier run was abandoned after answering.
  const isPracticeRun = () => Boolean(getOfficialDailyResult(entryId)) || wasDailyAttempted(entryId);

  const onFinish = ({ correct, total }) => {
    if (isPracticeRun()) {
      const current = getOfficialDailyResult(entryId);
      return current
        ? `Practice run. Your official score today is ${current.correct}/${current.total}.`
        : 'Practice run: an earlier run today was ended or restarted after answering, so this one is not official.';
    }
    const entry = { id: entryId, date: dateKey, mode: 'daily-trivia', category, score: toPercent(correct, total), correct, total };
    upsertHistory(entry);
    updateStreak(dateKey);
    appContext.setStreak(getCurrentStreak());
    setOfficial(entry);
    return 'This is your official score for today.';
  };

  const practiceNote = official
    ? `Today's official score: ${official.correct}/${official.total} (${official.score}%). Playing again is practice.`
    : wasDailyAttempted(entryId)
      ? 'You ended or restarted a run today after answering, so runs today are practice.'
      : 'Your first complete run is your official score. Ending or restarting after you answer makes later runs practice.';

  return (
    <section>
      <h2>Daily Trivia</h2>
      <p className="muted">Ten questions, the same for everyone today, in a new order each time.</p>
      <div className="controls">
        <CategoryPicker value={category} onChange={onCategoryChange} />
      </div>
      <p className="result">{practiceNote}</p>
      <TriviaRun
        key={entryId}
        gameKey={`daily-trivia:${entryId}`}
        createQuestions={() => generateDailyTrivia(category).questions}
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
