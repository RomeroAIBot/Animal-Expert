import { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Crossword from '@jaredreisinger/react-crossword';
import crosswordLayoutGenerator from 'crossword-layout-generator';
import CategoryPicker from '../components/CategoryPicker';
import { playSound } from '../utils/audio';
import { generateIdentifyCrossSession } from '../utils/gameGenerators';
import { fetchBreedImage } from '../utils/imageApi';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { storage, upsertHistory } from '../utils/storage';

const { generateLayout } = crosswordLayoutGenerator;

const keyboardLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const toCrosswordData = (clues) => {
  const layout = generateLayout(
    clues.map((item) => ({ clue: item.clue, answer: item.answer }))
  );

  const data = { across: {}, down: {} };
  (layout.result || []).forEach((entry) => {
    if (!entry.orientation || entry.orientation === 'none') return;
    data[entry.orientation][String(entry.position)] = {
      clue: entry.clue,
      answer: entry.answer,
      row: entry.starty - 1,
      col: entry.startx - 1
    };
  });

  return data;
};

function IdentifyCrossPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [nonce, setNonce] = useState(Date.now());
  const [phase, setPhase] = useState('identify');
  const [roundIndex, setRoundIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [imageCache, setImageCache] = useState(storage.getImageCache());
  const [imageUrls, setImageUrls] = useState({});
  const [phaseTwoStart, setPhaseTwoStart] = useState(null);
  const [phaseTwoSeconds, setPhaseTwoSeconds] = useState(0);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [selectedClue, setSelectedClue] = useState({ direction: 'across', number: '1' });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const crosswordRef = useRef(null);
  const touchRef = useRef(null);

  const session = useMemo(
    () => generateIdentifyCrossSession(category, `identify:${nonce}`, new Date()),
    [category, nonce]
  );

  const crosswordData = useMemo(() => toCrosswordData(session.clueQuestions), [session.clueQuestions]);
  const currentRound = session.rounds[roundIndex];
  const phaseOneScore = answers.filter((item) => item.correct).length;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const next = {};
      for (const round of session.rounds) {
        try {
          const url = await fetchBreedImage({
            entity: round.entity,
            category,
            cache: imageCache,
            setCache: (value) => {
              setImageCache(value);
              storage.setImageCache(value);
            }
          });
          if (!cancelled) next[round.entity.id] = url;
        } catch {
          if (!cancelled) next[round.entity.id] = round.entity.fallbackUrl;
        }
      }
      if (!cancelled) setImageUrls(next);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [session.rounds, category, imageCache]);

  useEffect(() => {
    if (!phaseTwoStart) return;
    const timer = setInterval(() => {
      setPhaseTwoSeconds(Math.floor((Date.now() - phaseTwoStart) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phaseTwoStart]);

  const reroll = () => {
    setNonce(Date.now());
    setPhase('identify');
    setRoundIndex(0);
    setAnswers([]);
    setPhaseTwoStart(null);
    setPhaseTwoSeconds(0);
    setSummaryOpen(false);
    setSelectedClue({ direction: 'across', number: '1' });
  };

  const handleGuess = (option) => {
    if (!currentRound) return;
    const correct = option === currentRound.entity.displayName;
    setAnswers((prev) => [
      ...prev,
      {
        roundId: currentRound.id,
        entity: currentRound.entity,
        selected: option,
        correct
      }
    ]);
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);

    if (roundIndex === session.rounds.length - 1) {
      setPhase('results');
      setTimeout(() => {
        setPhase('crossword');
        setPhaseTwoStart(Date.now());
        setTimeout(() => crosswordRef.current?.focus(), 50);
      }, 1800);
      return;
    }

    setTimeout(() => setRoundIndex((value) => value + 1), 800);
  };

  const sendVirtualKey = (key) => {
    crosswordRef.current?.focus();
    const input = document.querySelector('.identify-crossword input[aria-label="crossword-input"]');
    if (!input) return;
    input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  };

  const clueOrder = useMemo(() => {
    const across = Object.keys(crosswordData.across).map((number) => ({ direction: 'across', number }));
    const down = Object.keys(crosswordData.down).map((number) => ({ direction: 'down', number }));
    return [...across, ...down];
  }, [crosswordData]);

  const swipeToClue = (delta) => {
    const currentIndex = clueOrder.findIndex(
      (item) => item.direction === selectedClue.direction && item.number === selectedClue.number
    );
    if (currentIndex < 0 || clueOrder.length === 0) return;
    const next = clueOrder[(currentIndex + delta + clueOrder.length) % clueOrder.length];
    const target = document.querySelector(`[aria-label="clue-${next.number}-${next.direction}"]`);
    target?.click();
  };

  const handleCrosswordComplete = (isCorrect) => {
    if (!isCorrect) return;
    recordUsedIds(trackerKeys.hybrids, category, [session.comboId], new Date().toISOString());
    recordUsedIds(
      trackerKeys.crosswordClues,
      category,
      session.clueQuestions.map((item) => item.clueId),
      new Date().toISOString()
    );
    confetti({ particleCount: 140, spread: 70, origin: { y: 0.65 } });
    upsertHistory({
      id: `identify-cross:${category}:${nonce}`,
      date: new Date().toDateString(),
      mode: 'identify-cross',
      category,
      score: phaseOneScore,
      seconds: phaseTwoSeconds
    });
    setSummaryOpen(true);
  };

  return (
    <section>
      <h2>Identify &amp; Cross</h2>
      <div className="controls">
        <CategoryPicker value={category} onChange={(value) => { setCategory(value); reroll(); }} />
        <button type="button" className="button" onClick={reroll}>Reroll Session</button>
      </div>

      {phase === 'identify' && currentRound && (
        <article className="card identify-card">
          <p>Round {roundIndex + 1} / {session.rounds.length}</p>
          <img
            className="identify-image"
            src={imageUrls[currentRound.entity.id] || currentRound.entity.fallbackUrl}
            alt={currentRound.entity.displayName}
          />
          <div className="options-grid">
            {currentRound.options.map((option) => (
              <button key={option} type="button" className="option" onClick={() => handleGuess(option)}>
                {option}
              </button>
            ))}
          </div>
        </article>
      )}

      {phase === 'results' && (
        <article className="card identify-results">
          <h3>Phase 1 Results</h3>
          {answers.map((item) => (
            <div key={item.roundId} className="identify-result-row">
              <img src={imageUrls[item.entity.id] || item.entity.fallbackUrl} alt={item.entity.displayName} />
              <div>
                <strong>{item.entity.displayName}</strong>
                <p>{item.correct ? 'Correct' : `Incorrect, you chose ${item.selected}`}</p>
              </div>
              <span className={item.correct ? 'result-icon success' : 'result-icon fail'}>
                {item.correct ? '?' : 'X'}
              </span>
            </div>
          ))}
          <p>Loading crossword...</p>
        </article>
      )}

      {phase === 'crossword' && (
        <article className="card">
          <h3>Phase 2 Crossword</h3>
          <p>Phase 1 score: {phaseOneScore} / {session.rounds.length} | Time: {phaseTwoSeconds}s</p>
          <div
            className="identify-crossword"
            style={{ touchAction: 'manipulation' }}
            onTouchStart={(event) => {
              touchRef.current = event.changedTouches[0].clientX;
            }}
            onTouchEnd={(event) => {
              const startX = touchRef.current;
              const endX = event.changedTouches[0].clientX;
              const delta = endX - startX;
              if (Math.abs(delta) < 40) return;
              swipeToClue(delta < 0 ? 1 : -1);
            }}
          >
            <Crossword
              ref={crosswordRef}
              data={crosswordData}
              onClueSelected={(direction, number) => setSelectedClue({ direction, number })}
              onCrosswordCorrect={handleCrosswordComplete}
              theme={{
                columnBreakpoint: '768px',
                gridBackground: '#2d5016',
                cellBackground: '#fffdf7',
                cellBorder: '#8b3a3a',
                textColor: '#1f241b',
                numberColor: '#8b3a3a',
                focusBackground: '#d4a017',
                highlightBackground: '#f5f0e8'
              }}
            />
          </div>
          {isMobile && (
            <div className="virtual-keyboard">
              {keyboardLetters.map((letter) => (
                <button key={letter} type="button" className="vk-key" onClick={() => sendVirtualKey(letter)}>
                  {letter}
                </button>
              ))}
              <button type="button" className="vk-key wide" onClick={() => sendVirtualKey('Backspace')}>
                Del
              </button>
            </div>
          )}
        </article>
      )}

      {summaryOpen && (
        <div className="overlay-modal" onClick={() => setSummaryOpen(false)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <h3>Identify &amp; Cross Complete</h3>
            <p>Phase 1 score: {phaseOneScore} / {session.rounds.length}</p>
            <p>Phase 2 time: {phaseTwoSeconds}s</p>
            <button type="button" className="button" onClick={() => setSummaryOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default IdentifyCrossPage;
