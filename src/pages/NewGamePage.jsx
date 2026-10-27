import { useCallback, useState } from 'react';
import CategoryPicker from '../components/CategoryPicker';
import PuzzleRun from '../components/PuzzleRun';
import TriviaRun from '../components/TriviaRun';
import { generatePuzzleDeck, generateRandomTrivia } from '../utils/gameGenerators';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { getDateKey, randomSeed } from '../utils/seed';
import { upsertHistory } from '../utils/storage';

const toPercent = (correct, total) => Math.round((correct / Math.max(total, 1)) * 100);

function NewGamePage({ appContext }) {
  const [category, setCategory] = useState('mixed');
  const [mode, setMode] = useState('puzzle');
  const [size, setSize] = useState(4);

  // A board counts as seen as soon as it is dealt, so it isn't dealt again for a week.
  const createDeck = () => {
    const deck = generatePuzzleDeck(category, size, `random:${randomSeed()}`);
    recordUsedIds(trackerKeys.puzzles, deck.category, [deck.comboId]);
    return deck;
  };

  const onTriviaFinish = ({ correct, total }) => {
    upsertHistory({
      id: `random:trivia:${category}:${Date.now()}`,
      date: getDateKey(),
      mode: 'new-trivia',
      category,
      score: toPercent(correct, total),
      correct,
      total
    });
    return 'Practice games count toward your stats, not your streak or the Rankings.';
  };

  const onPuzzleFinish = useCallback(
    (payload) => {
      upsertHistory({
        id: `random:puzzle:${category}:${Date.now()}`,
        date: getDateKey(),
        mode: 'new-puzzle',
        category,
        size,
        pairs: payload.pairs,
        score: payload.score,
        flips: payload.flips,
        seconds: payload.seconds
      });
      return '';
    },
    [category, size]
  );

  const gameKey = mode === 'trivia' ? `practice-trivia:${category}` : `practice-puzzle:${category}:${size}`;

  return (
    <section>
      <h2>Practice</h2>
      <p className="muted">
        Fresh games any time. Anything you've been shown is held back for a week, and practice never uses this
        week's daily questions.
      </p>
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
      </div>

      {mode === 'puzzle' ? (
        <PuzzleRun
          key={gameKey}
          gameKey={gameKey}
          createDeck={createDeck}
          onFinish={onPuzzleFinish}
          soundEnabled={appContext.soundEnabled}
        />
      ) : (
        <TriviaRun
          key={gameKey}
          gameKey={gameKey}
          createQuestions={() => generateRandomTrivia(category).questions}
          onFinish={onTriviaFinish}
          soundEnabled={appContext.soundEnabled}
          game="practice-trivia"
        />
      )}
    </section>
  );
}

export default NewGamePage;
