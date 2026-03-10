import { useEffect, useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { fetchBreedImage } from '../utils/imageApi';
import { playSound } from '../utils/audio';

function PuzzleBoard({ deck, category, imageCache, setImageCache, soundEnabled, onComplete }) {
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [flips, setFlips] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [urls, setUrls] = useState({});

  const cards = deck.cards;
  const gridClass = deck.size === 6 ? 'grid-6' : 'grid-4';

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const next = {};
      for (const entity of deck.entities) {
        try {
          const url = await fetchBreedImage({ entity, category, cache: imageCache, setCache: setImageCache });
          if (!cancelled) next[entity.id] = url;
        } catch {
          if (!cancelled) next[entity.id] = entity.fallbackUrl;
        }
      }
      if (!cancelled) setUrls(next);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [deck.entities, category, imageCache, setImageCache]);

  useEffect(() => {
    if (matched.length === deck.entities.length) {
      confetti({ particleCount: 120, spread: 65, origin: { y: 0.6 } });
      const score = Math.max(0, 1000 - flips * 8 - seconds * 2 + deck.entities.length * 50);
      onComplete({ flips, seconds, score, comboId: deck.comboId });
    }
  }, [matched.length, deck.entities.length, flips, seconds, onComplete, deck.comboId]);

  const handleCardClick = (card) => {
    if (flipped.length === 2 || flipped.includes(card.id) || matched.includes(card.pairId)) {
      return;
    }

    playSound('flip', soundEnabled);
    setFlipped((prev) => [...prev, card.id]);
    setFlips((n) => n + 1);
  };

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [firstId, secondId] = flipped;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);

    if (firstCard.pairId === secondCard.pairId) {
      playSound('match', soundEnabled);
      setMatched((prev) => [...prev, firstCard.pairId]);
      setTimeout(() => setFlipped([]), 380);
      return;
    }

    setTimeout(() => setFlipped([]), 900);
  }, [flipped, cards, soundEnabled]);

  const matchedEntities = useMemo(
    () => matched.map((id) => deck.entities.find((entity) => entity.id === id)).filter(Boolean),
    [matched, deck.entities]
  );

  return (
    <section>
      <div className="stats-row">
        <span>Time: {seconds}s</span>
        <span>Flips: {flips}</span>
      </div>
      <div className={`puzzle-grid ${gridClass}`}>
        {cards.map((card) => {
          const isOpen = flipped.includes(card.id) || matched.includes(card.pairId);
          return (
            <button
              key={card.id}
              type="button"
              className={`flip-card ${isOpen ? 'open' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <span className="flip-card-inner">
                <span className="flip-card-front">?</span>
                <span className="flip-card-back">
                  {card.type === 'name' ? (
                    <strong>{card.entity.displayName}</strong>
                  ) : (
                    <img src={urls[card.entity.id]} alt={card.entity.displayName} loading="lazy" />
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
            <p key={entity.id}>
              <strong>{entity.displayName}:</strong> {entity.funFact}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default PuzzleBoard;
