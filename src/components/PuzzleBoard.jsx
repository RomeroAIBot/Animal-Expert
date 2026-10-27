import { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { fetchImagesForEntities } from '../utils/imageApi';
import { playSound } from '../utils/audio';
import { getSignedInUser } from '../utils/cloud';
import ReportProblem from './ReportProblem';

// Score rewards accuracy first, then speed. A perfect game uses one flip per card.
export const scorePuzzle = ({ flips, seconds, pairs }) => {
  const minimumFlips = pairs * 2;
  const extraFlips = Math.max(0, flips - minimumFlips);
  const accuracy = Math.max(0, 600 - extraFlips * 15);
  const speed = Math.max(0, 400 - Math.max(0, seconds - pairs * 4) * 2);
  return Math.round(accuracy + speed);
};

// Remount this component (via `key`) to start a new game; it does not reset itself when `deck` changes.
// `initialState` resumes a saved game; `onProgress` reports each change so it can be saved.
function PuzzleBoard({ deck, soundEnabled, onComplete, initialState, onProgress }) {
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState(initialState?.matched || []);
  const [flips, setFlips] = useState(initialState?.flips || 0);
  const [seconds, setSeconds] = useState(initialState?.seconds || 0);
  const [started, setStarted] = useState(Boolean(initialState?.started));
  const [images, setImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);
  const completedRef = useRef(false);

  const cards = deck.cards;
  const gridClass = deck.size === 6 ? 'grid-6' : 'grid-4';
  const finished = matched.length === deck.entities.length && deck.entities.length > 0;

  // The clock starts on the first flip and stops when the last pair is matched.
  useEffect(() => {
    if (!started || finished) return undefined;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [started, finished]);

  useEffect(() => {
    let cancelled = false;
    setLoadingImages(true);
    fetchImagesForEntities(deck.entities).then((next) => {
      if (cancelled) return;
      setImages(next);
      setLoadingImages(false);
    });
    return () => {
      cancelled = true;
    };
  }, [deck.entities]);

  useEffect(() => {
    onProgress?.({ matched, flips, seconds, started });
  }, [matched, flips, seconds, started, onProgress]);

  useEffect(() => {
    if (!finished || completedRef.current) return;
    completedRef.current = true;
    confetti({ particleCount: 120, spread: 65, origin: { y: 0.6 } });
    const score = scorePuzzle({ flips, seconds, pairs: deck.entities.length });
    onComplete({ flips, seconds, score, pairs: deck.entities.length, comboId: deck.comboId });
  }, [finished, flips, seconds, deck.entities.length, deck.comboId, onComplete]);

  const handleCardClick = (card) => {
    if (finished || flipped.length === 2 || flipped.includes(card.id) || matched.includes(card.pairId)) {
      return;
    }

    playSound('flip', soundEnabled);
    setStarted(true);
    setFlipped((prev) => [...prev, card.id]);
    setFlips((n) => n + 1);
  };

  useEffect(() => {
    if (flipped.length !== 2) return undefined;
    const [firstId, secondId] = flipped;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (firstCard.pairId === secondCard.pairId) {
      playSound('match', soundEnabled);
      setMatched((prev) => [...prev, firstCard.pairId]);
      const timer = setTimeout(() => setFlipped([]), 380);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setFlipped([]), 900);
    return () => clearTimeout(timer);
  }, [flipped, cards, soundEnabled]);

  const matchedEntities = useMemo(
    () => matched.map((id) => deck.entities.find((entity) => entity.id === id)).filter(Boolean),
    [matched, deck.entities]
  );

  const missingPhotos = loadingImages
    ? []
    : deck.entities.filter((entity) => !images[entity.id]).map((entity) => entity.displayName);

  return (
    <section>
      <div className="stats-row">
        <span>Time: {seconds}s</span>
        <span>Flips: {flips}</span>
        <span>Pairs: {matched.length}/{deck.entities.length}</span>
        <span>{loadingImages ? 'Loading photos...' : 'Photos ready'}</span>
      </div>
      {missingPhotos.length > 0 && (
        <div className="facts facts-warning">
          <strong>Photo unavailable:</strong> {missingPhotos.join(', ')}
        </div>
      )}
      <div className={`puzzle-grid ${gridClass}`}>
        {cards.map((card) => {
          const isOpen = flipped.includes(card.id) || matched.includes(card.pairId);
          const image = images[card.entity.id];
          return (
            <button
              key={card.id}
              type="button"
              className={`flip-card ${isOpen ? 'open' : ''}`}
              onClick={() => handleCardClick(card)}
              aria-label={
                isOpen
                  ? card.type === 'name'
                    ? card.entity.displayName
                    : `Photo: ${image?.description || 'animal photo'}`
                  : 'Hidden card'
              }
            >
              <span className="flip-card-inner">
                <span className="flip-card-front">?</span>
                <span className="flip-card-back">
                  {card.type === 'name' ? (
                    <strong>{card.entity.displayName}</strong>
                  ) : image ? (
                    <img src={image.url} alt="" loading="lazy" />
                  ) : (
                    <span className="image-loading">{loadingImages ? 'Loading photo' : 'Photo unavailable'}</span>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {matchedEntities.length > 0 && (
        <div className="facts">
          <h3>Matched Fun Facts</h3>
          {matchedEntities.slice(-4).map((entity) => (
            <div key={entity.id}>
              <p>
                <strong>{entity.displayName}:</strong> {entity.funFact}
              </p>
              <ReportProblem
                game="puzzle-fact"
                questionId={`breed:${entity.id}`}
                category={entity.category}
                question={`Fun fact about the ${entity.displayName}`}
                answer={entity.funFact}
                signedInEmail={getSignedInUser()?.email}
              />
            </div>
          ))}
        </div>
      )}

      {Object.values(images).some((image) => image?.credit) && (
        <p className="trivia-source">
          Photos:{' '}
          {Object.values(images)
            .filter((image) => image?.credit)
            .map((image, index) => (
              <span key={image.url}>
                {index > 0 && ', '}
                {image.creditUrl ? (
                  <a href={image.creditUrl} target="_blank" rel="noreferrer">{image.credit}</a>
                ) : (
                  image.credit
                )}
              </span>
            ))}
        </p>
      )}
    </section>
  );
}

export default PuzzleBoard;
