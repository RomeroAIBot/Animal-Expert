import { useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import Crossword from '@jaredreisinger/react-crossword';
import CategoryPicker from '../components/CategoryPicker';
import { playSound } from '../utils/audio';
import { generateIdentifyCrossSession } from '../utils/gameGenerators';
import { fetchImagesForEntities } from '../utils/imageApi';
import { recordUsedIds, trackerKeys } from '../utils/questionTracker';
import { getDateKey } from '../utils/seed';
import { upsertHistory } from '../utils/storage';

const keyboardLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const PHOTO_POINTS = 100;
const CROSSWORD_POINTS = 300;

function AnimalPhoto({ image, loading, className }) {
  if (image) {
    return <img className={className} src={image.url} alt={image.description || 'Mystery animal photo'} />;
  }
  return (
    <div className={`${className} photo-placeholder`}>{loading ? 'Loading photo...' : 'Photo unavailable'}</div>
  );
}

function IdentifyCrossPage({ appContext }) {
  const [category, setCategory] = useState('dogs');
  const [nonce, setNonce] = useState(Date.now());
  const [phase, setPhase] = useState('identify');
  const [roundIndex, setRoundIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [images, setImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);
  const [phaseTwoStart, setPhaseTwoStart] = useState(null);
  const [phaseTwoSeconds, setPhaseTwoSeconds] = useState(0);
  const [outcome, setOutcome] = useState(null);
  const [selectedClue, setSelectedClue] = useState({ direction: 'across', number: '1' });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const crosswordRef = useRef(null);
  const touchRef = useRef(null);
  const guessLockRef = useRef(false);
  const finishedRef = useRef(false);

  const session = useMemo(
    () => generateIdentifyCrossSession(category, `identify:${nonce}`),
    [category, nonce]
  );

  const crosswordData = session.crossword;
  const currentRound = session.rounds[roundIndex];
  const currentAnswer = answers.find((item) => item.roundId === currentRound?.id);
  const phaseOneScore = answers.filter((item) => item.correct).length;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoadingImages(true);
    fetchImagesForEntities(session.rounds.map((round) => round.entity)).then((next) => {
      if (cancelled) return;
      setImages(next);
      setLoadingImages(false);
    });
    return () => {
      cancelled = true;
    };
  }, [session.rounds]);

  useEffect(() => {
    if (!phaseTwoStart || outcome) return undefined;
    const timer = setInterval(() => {
      setPhaseTwoSeconds(Math.floor((Date.now() - phaseTwoStart) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phaseTwoStart, outcome]);

  const reroll = () => {
    setNonce(Date.now());
    setPhase('identify');
    setRoundIndex(0);
    setAnswers([]);
    setPhaseTwoStart(null);
    setPhaseTwoSeconds(0);
    setOutcome(null);
    setSelectedClue({ direction: 'across', number: '1' });
    guessLockRef.current = false;
    finishedRef.current = false;
  };

  const handleGuess = (option) => {
    // Ignore extra clicks while the answer is showing, so one round can't be scored twice.
    if (!currentRound || guessLockRef.current) return;
    guessLockRef.current = true;
    const correct = option === currentRound.entity.displayName;
    setAnswers((prev) => [
      ...prev,
      { roundId: currentRound.id, entity: currentRound.entity, selected: option, correct }
    ]);
    playSound(correct ? 'correct' : 'wrong', appContext.soundEnabled);
  };

  const nextRound = () => {
    guessLockRef.current = false;
    if (roundIndex === session.rounds.length - 1) {
      setPhase('results');
      return;
    }
    setRoundIndex((value) => value + 1);
  };

  const startCrossword = () => {
    setPhase('crossword');
    setPhaseTwoStart(Date.now());
    setTimeout(() => crosswordRef.current?.focus(), 50);
  };

  const sendVirtualKey = (key) => {
    crosswordRef.current?.focus();
    const input = document.querySelector('.identify-crossword input[aria-label="crossword-input"]');
    if (!input) return;
    input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  };

  const clueOrder = useMemo(() => {
    if (!crosswordData) return [];
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

  const finishSession = (solved) => {
    // Revealing fills the grid, which fires the "correct" callback; only the first finish counts.
    if (finishedRef.current) return;
    finishedRef.current = true;
    const seconds = Math.floor((Date.now() - phaseTwoStart) / 1000);
    const score = phaseOneScore * PHOTO_POINTS + (solved ? CROSSWORD_POINTS : 0);
    recordUsedIds(trackerKeys.hybrids, category, [session.comboId]);
    upsertHistory({
      id: `identify-cross:${category}:${nonce}`,
      date: getDateKey(),
      mode: 'identify-cross',
      category,
      score,
      identified: phaseOneScore,
      total: session.rounds.length,
      crosswordSolved: solved,
      seconds
    });
    if (solved) confetti({ particleCount: 140, spread: 70, origin: { y: 0.65 } });
    setPhaseTwoSeconds(seconds);
    setOutcome({ solved, score });
  };

  const revealAnswers = () => {
    finishSession(false);
    crosswordRef.current?.fillAllAnswers();
  };

  return (
    <section>
      <h2>Identify &amp; Cross</h2>
      <p className="muted">
        Phase 1: name the animal in each photo ({PHOTO_POINTS} pts each). Phase 2: solve a crossword of the same
        animals from description clues ({CROSSWORD_POINTS} pts).
      </p>
      <div className="controls">
        <CategoryPicker value={category} onChange={(value) => { setCategory(value); reroll(); }} />
        <button type="button" className="button" onClick={reroll}>New session</button>
      </div>

      {phase === 'identify' && currentRound && (
        <article className="card identify-card">
          <p>Round {roundIndex + 1} / {session.rounds.length}</p>
          <AnimalPhoto
            className="identify-image"
            image={images[currentRound.entity.id]}
            loading={loadingImages}
          />
          <div className="options-grid">
            {currentRound.options.map((option) => {
              const isAnswer = currentAnswer && option === currentRound.entity.displayName;
              const isWrongPick = currentAnswer && option === currentAnswer.selected && !currentAnswer.correct;
              return (
                <button
                  key={option}
                  type="button"
                  className={`option ${isAnswer ? 'correct' : ''} ${isWrongPick ? 'wrong' : ''}`.trim()}
                  onClick={() => handleGuess(option)}
                  disabled={Boolean(currentAnswer)}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {currentAnswer && (
            <div className="trivia-feedback" role="status">
              <p>
                <strong>{currentAnswer.correct ? 'Correct!' : 'Not quite.'}</strong> Answer:{' '}
                {currentRound.entity.displayName}.
              </p>
              {images[currentRound.entity.id]?.credit && (
                <p className="trivia-source">
                  Photo:{' '}
                  {images[currentRound.entity.id].creditUrl ? (
                    <a href={images[currentRound.entity.id].creditUrl} target="_blank" rel="noreferrer">
                      {images[currentRound.entity.id].credit}
                    </a>
                  ) : (
                    images[currentRound.entity.id].credit
                  )}
                </p>
              )}
              <button type="button" className="button" onClick={nextRound} autoFocus>
                {roundIndex === session.rounds.length - 1 ? 'See results' : 'Next photo'}
              </button>
            </div>
          )}
        </article>
      )}

      {phase === 'results' && (
        <article className="card identify-results">
          <h3>Phase 1 Results: {phaseOneScore} / {session.rounds.length}</h3>
          {answers.map((item) => (
            <div key={item.roundId} className="identify-result-row">
              <AnimalPhoto image={images[item.entity.id]} loading={false} className="" />
              <div>
                <strong>{item.entity.displayName}</strong>
                <p>{item.correct ? 'Correct' : `You chose ${item.selected}`}</p>
              </div>
              <span className={item.correct ? 'result-icon success' : 'result-icon fail'}>
                {item.correct ? '✓' : '✗'}
              </span>
            </div>
          ))}
          <button type="button" className="button" onClick={startCrossword}>
            Start the crossword
          </button>
        </article>
      )}

      {phase === 'crossword' && (
        <article className="card">
          <h3>Phase 2 Crossword</h3>
          <p>Phase 1 score: {phaseOneScore} / {session.rounds.length} | Time: {phaseTwoSeconds}s</p>
          {crosswordData ? (
            <>
              <div
                className="identify-crossword"
                style={{ touchAction: 'manipulation' }}
                onTouchStart={(event) => {
                  touchRef.current = event.changedTouches[0].clientX;
                }}
                onTouchEnd={(event) => {
                  const delta = event.changedTouches[0].clientX - touchRef.current;
                  if (Math.abs(delta) < 40) return;
                  swipeToClue(delta < 0 ? 1 : -1);
                }}
              >
                <Crossword
                  ref={crosswordRef}
                  data={crosswordData}
                  useStorage={false}
                  onClueSelected={(direction, number) => setSelectedClue({ direction, number })}
                  onCrosswordCorrect={(isCorrect) => isCorrect && finishSession(true)}
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
              {isMobile && !outcome && (
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
              {!outcome && (
                <button type="button" className="button ghost" onClick={revealAnswers}>
                  Give up and reveal answers
                </button>
              )}
            </>
          ) : (
            <p>
              These names couldn't be fitted into a crossword grid.{' '}
              <button type="button" className="button small" onClick={reroll}>Try a new session</button>
            </p>
          )}
          {outcome && (
            <div className="result">
              <p>
                {outcome.solved ? 'Crossword solved!' : 'Answers revealed.'} Final score: {outcome.score} (
                {phaseOneScore}/{session.rounds.length} photos{outcome.solved ? ', crossword solved' : ''}) in{' '}
                {phaseTwoSeconds}s.
              </p>
              <button type="button" className="button" onClick={reroll}>Play again</button>
            </div>
          )}
        </article>
      )}
    </section>
  );
}

export default IdentifyCrossPage;
