import { useMemo, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import PuzzleBoard from '../components/PuzzleBoard';
import { generatePuzzleDeck } from '../utils/gameGenerators';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { getDateSeed } from '../utils/seed';
import { storage, updateStreak, upsertHistory } from '../utils/storage';

function DailyPuzzlePage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [size, setSize] = useState(4);
  const [imageCache, setImageCache] = useState(storage.getImageCache());
  const [result, setResult] = useState(null);

  const deck = useMemo(() => generatePuzzleDeck(category, size, 'daily', new Date()), [category, size]);

  const handleComplete = (payload) => {
    if (result) return;
    const date = getDateSeed(new Date());
    recordUsedIds(trackerKeys.puzzles, category, [payload.comboId || deck.comboId], new Date().toISOString());
    const entry = {
      id: `${date}:daily:puzzle:${category}:${size}`,
      date,
      mode: 'daily-puzzle',
      category,
      score: payload.score,
      flips: payload.flips,
      seconds: payload.seconds
    };
    upsertHistory(entry);
    updateStreak(date);
    appContext.setStreak(storage.getStreak());
    setResult(payload);
  };

  const persistImageCache = (next) => {
    setImageCache(next);
    storage.setImageCache(next);
  };

  return (
    <section>
      <h2>Daily Matching Puzzle</h2>
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
      <PuzzleBoard
        deck={deck}
        category={category}
        imageCache={imageCache}
        setImageCache={persistImageCache}
        soundEnabled={appContext.soundEnabled}
        onComplete={handleComplete}
      />
      {result && (
        <p className="result">Complete. Score {result.score}, {result.flips} flips, {result.seconds}s.</p>
      )}
    </section>
  );
}

export default DailyPuzzlePage;
