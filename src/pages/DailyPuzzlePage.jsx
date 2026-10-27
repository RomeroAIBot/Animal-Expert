import { useCallback, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import PuzzleRun from '../components/PuzzleRun';
import { generateDailyPuzzleDeck } from '../utils/gameGenerators';
import { markDailyAttempted, wasDailyAttempted } from '../utils/savedGames';
import { getDateKey } from '../utils/seed';
import { getCurrentStreak, getOfficialDailyResult, updateStreak, upsertHistory } from '../utils/storage';

function DailyPuzzlePage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [size, setSize] = useState(4);
  const [, refresh] = useState(0);

  const dateKey = getDateKey();
  const entryId = `${dateKey}:daily:puzzle:${category}:${size}`;
  const official = getOfficialDailyResult(entryId);

  const onFinish = useCallback(
    (payload) => {
      // Only the first completion counts, and not if an earlier run was abandoned after flipping.
      const current = getOfficialDailyResult(entryId);
      if (current) return `Practice round. Your official score today is ${current.score}.`;
      if (wasDailyAttempted(entryId)) {
        return 'Practice round: an earlier run today was ended or restarted after flipping cards, so this one is not official.';
      }
      upsertHistory({
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
      });
      updateStreak(dateKey);
      appContext.setStreak(getCurrentStreak());
      refresh((n) => n + 1);
      return 'This is your official score for today.';
    },
    [entryId, dateKey, category, size, appContext]
  );

  const note = official
    ? `Today's official score: ${official.score} (${official.flips} flips, ${official.seconds}s). Playing again is practice.`
    : wasDailyAttempted(entryId)
      ? 'You ended or restarted a run today after flipping cards, so runs today are practice.'
      : 'Your first complete run is your official score. Ending or restarting after you flip a card makes later runs practice.';

  return (
    <section>
      <h2>Daily Matching Puzzle</h2>
      <p className="muted">
        Match each photo to its breed name. Everyone gets the same animals today, with the cards shuffled each time
        you play.
      </p>
      <div className="controls">
        <CategoryPicker value={category} onChange={setCategory} />
        <label className="field">
          <span>Grid</span>
          <select value={size} onChange={(event) => setSize(Number(event.target.value))}>
            <option value={4}>4x4</option>
            <option value={6}>6x6</option>
          </select>
        </label>
      </div>
      <p className="result">{note}</p>
      <PuzzleRun
        key={entryId}
        gameKey={`daily-puzzle:${entryId}`}
        createDeck={() => generateDailyPuzzleDeck(category, size)}
        onFinish={onFinish}
        onAbandon={() => {
          if (!getOfficialDailyResult(entryId)) markDailyAttempted(entryId);
          refresh((n) => n + 1);
        }}
        soundEnabled={appContext.soundEnabled}
      />
    </section>
  );
}

export default DailyPuzzlePage;
