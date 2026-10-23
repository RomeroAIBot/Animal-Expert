import { useCallback, useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import PuzzleBoard from '../components/PuzzleBoard';
import { generateDailyPuzzleDeck } from '../utils/gameGenerators';
import { getDateKey } from '../utils/seed';
import { getCurrentStreak, getOfficialDailyResult, updateStreak, upsertHistory } from '../utils/storage';

function DailyPuzzlePage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [size, setSize] = useState(4);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  const dateKey = getDateKey();
  const entryId = `${dateKey}:daily:puzzle:${category}:${size}`;
  const deck = useMemo(() => generateDailyPuzzleDeck(category, size), [category, size]);
  const [official, setOfficial] = useState(() => getOfficialDailyResult(entryId));

  const startOver = (nextCategory, nextSize) => {
    setCategory(nextCategory);
    setSize(nextSize);
    setResult(null);
    setOfficial(getOfficialDailyResult(`${dateKey}:daily:puzzle:${nextCategory}:${nextSize}`));
    setAttempt((n) => n + 1);
  };

  const handleComplete = useCallback(
    (payload) => {
      // Only the first completion of today's board counts; later plays are practice.
      const practice = Boolean(getOfficialDailyResult(entryId));
      setResult({ ...payload, practice });
      if (practice) return;
      const entry = {
        id: entryId,
        date: dateKey,
        mode: 'daily-puzzle',
        category,
        size,
        // A category with fewer animals than the grid needs gives a smaller board.
        pairs: payload.pairs,
        score: payload.score,
        flips: payload.flips,
        seconds: payload.seconds
      };
      upsertHistory(entry);
      updateStreak(dateKey);
      appContext.setStreak(getCurrentStreak());
      setOfficial(entry);
    },
    [entryId, dateKey, category, size, appContext]
  );

  return (
    <section>
      <h2>Daily Matching Puzzle</h2>
      <p className="muted">
        Match each photo to its breed name. Everyone gets the same board today. Your first finish is your official
        score; replays are practice.
      </p>
      <div className="controls">
        <CategoryPicker value={category} onChange={(value) => startOver(value, size)} />
        <label className="field">
          <span>Grid</span>
          <select value={size} onChange={(event) => startOver(category, Number(event.target.value))}>
            <option value={4}>4x4</option>
            <option value={6}>6x6</option>
          </select>
        </label>
      </div>
      {official && !result && (
        <p className="result">
          Today's official score: {official.score} ({official.flips} flips, {official.seconds}s). Playing again is
          practice.
        </p>
      )}
      <PuzzleBoard
        key={`${entryId}:${attempt}`}
        deck={deck}
        soundEnabled={appContext.soundEnabled}
        onComplete={handleComplete}
      />
      {result && (
        <div className="result">
          <p>
            {result.practice ? 'Practice round: ' : 'Complete! '}
            Score {result.score}, {result.flips} flips, {result.seconds}s.
            {result.practice && ` Official score today: ${official.score}.`}
          </p>
          <button type="button" className="button" onClick={() => startOver(category, size)}>
            Play again (practice)
          </button>
        </div>
      )}
    </section>
  );
}

export default DailyPuzzlePage;
