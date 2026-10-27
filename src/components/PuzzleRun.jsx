import { useCallback, useRef, useState } from 'react';
import PuzzleBoard from './PuzzleBoard';
import { getEntitiesForCategory } from '../data/breeds';
import { clearGame, loadGame, saveGame } from '../utils/savedGames';

const entitiesById = new Map(getEntitiesForCategory('mixed').map((entity) => [entity.id, entity]));

const serializeDeck = (deck) => ({
  seed: deck.seed,
  size: deck.size,
  comboId: deck.comboId,
  category: deck.category,
  entityIds: deck.entities.map((entity) => entity.id),
  cardIds: deck.cards.map((card) => card.id)
});

// Rebuilds a saved board, or returns null if an animal is no longer in the game.
const restoreDeck = (saved) => {
  if (!saved?.entityIds) return null;
  const entities = saved.entityIds.map((id) => entitiesById.get(id));
  if (!entities.every(Boolean)) return null;
  const cards = saved.cardIds.map((cardId) => {
    const type = cardId.endsWith('-photo') ? 'photo' : 'name';
    const entityId = cardId.slice(0, cardId.lastIndexOf('-'));
    return { id: cardId, pairId: entityId, type, entity: entitiesById.get(entityId) };
  });
  return cards.every((card) => card.entity) ? { ...saved, entities, cards } : null;
};

/**
 * One matching-puzzle game with Pause, Start over and End game; progress is saved after every
 * move so the player can leave and resume. onFinish(payload) may return a note to show.
 */
function PuzzleRun({ gameKey, createDeck, onFinish, onAbandon, soundEnabled }) {
  const [game, setGame] = useState(() => {
    const saved = loadGame(gameKey);
    const deck = restoreDeck(saved?.deck);
    return deck ? { deck, progress: saved.progress, resumed: true } : { deck: createDeck(), progress: null, resumed: false };
  });
  const [boardKey, setBoardKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ended, setEnded] = useState(false);
  const [result, setResult] = useState(null);
  const [confirmingEnd, setConfirmingEnd] = useState(false);
  const [status, setStatus] = useState(game.resumed ? 'Welcome back. Your puzzle was resumed.' : '');
  const progressRef = useRef(game.progress);
  const doneRef = useRef(false);

  const onProgress = useCallback(
    (progress) => {
      progressRef.current = progress;
      if (!doneRef.current) saveGame(gameKey, { deck: serializeDeck(game.deck), progress });
    },
    [gameKey, game.deck]
  );

  const handleComplete = useCallback(
    (payload) => {
      doneRef.current = true;
      clearGame(gameKey);
      setResult({ ...payload, note: onFinish(payload) });
      setStatus('');
    },
    [gameKey, onFinish]
  );

  const flipsSoFar = () => progressRef.current?.flips || 0;

  const startOver = (message) => {
    if (flipsSoFar() > 0 && !result && !ended) onAbandon?.(flipsSoFar());
    clearGame(gameKey);
    doneRef.current = false;
    progressRef.current = null;
    setGame({ deck: createDeck(), progress: null, resumed: false });
    setBoardKey((n) => n + 1);
    setPaused(false);
    setEnded(false);
    setResult(null);
    setConfirmingEnd(false);
    setStatus(message);
  };

  const endGame = () => {
    if (flipsSoFar() > 0) onAbandon?.(flipsSoFar());
    clearGame(gameKey);
    doneRef.current = true;
    setEnded(true);
    setConfirmingEnd(false);
    setStatus('Game ended. No score was saved.');
  };

  const togglePause = () => {
    if (!paused) {
      // Remount from the latest snapshot on resume, so the clock stops while paused.
      setGame((prev) => ({ ...prev, progress: progressRef.current }));
      setStatus('Puzzle paused and the clock is stopped. Your progress is saved, so you can leave and come back.');
    } else {
      setBoardKey((n) => n + 1);
      setStatus('Puzzle resumed.');
    }
    setPaused(!paused);
  };

  const inProgress = !result && !ended;

  return (
    <div>
      <p role="status" className="muted">{status}</p>
      {inProgress && (
        <div className="game-controls">
          <button type="button" className="button ghost" onClick={togglePause}>
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button type="button" className="button ghost" onClick={() => startOver('New board dealt.')}>
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
      )}

      {inProgress && paused && (
        <article className="card">
          <h3>Paused</h3>
          <p>
            {progressRef.current?.matched?.length || 0} of {game.deck.entities.length} pairs found,{' '}
            {progressRef.current?.flips || 0} flips, {progressRef.current?.seconds || 0} seconds.
          </p>
          <button type="button" className="button" onClick={togglePause} autoFocus>
            Resume
          </button>
        </article>
      )}

      {!paused && !ended && (
        <PuzzleBoard
          key={`${gameKey}:${boardKey}`}
          deck={game.deck}
          soundEnabled={soundEnabled}
          initialState={game.progress}
          onProgress={onProgress}
          onComplete={handleComplete}
        />
      )}

      {result && (
        <div className="result">
          <p>
            Complete! Score {result.score}, {result.flips} flips, {result.seconds}s.
          </p>
          {result.note && <p>{result.note}</p>}
          <button type="button" className="button" onClick={() => startOver('New board dealt.')}>
            Play again
          </button>
        </div>
      )}

      {ended && (
        <article className="card result">
          <h3>Game ended</h3>
          <p>No score was saved.</p>
          <button type="button" className="button" onClick={() => startOver('New board dealt.')} autoFocus>
            Start a new game
          </button>
        </article>
      )}
    </div>
  );
}

export default PuzzleRun;
