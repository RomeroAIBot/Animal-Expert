function TriviaQuestionCard({ question, selected, onAnswer, onNext, nextLabel = 'Next question' }) {
  const answeredCorrectly = selected === question.answer;
  const hasLinkSource = /^https?:\/\//.test(question.source || '');

  return (
    <article className="card trivia-card">
      <p className="trivia-meta">Multiple choice</p>
      <h3>{question.question}</h3>
      <div className="options-grid">
        {question.options.map((option) => {
          const isChosen = selected === option;
          const isCorrect = selected && option === question.answer;
          const isWrong = isChosen && option !== question.answer;
          return (
            <button
              key={option}
              type="button"
              className={`option ${isChosen ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`.trim()}
              onClick={() => onAnswer(option)}
              disabled={Boolean(selected)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="trivia-feedback" role="status">
          <p>
            <strong>{answeredCorrectly ? 'Correct!' : 'Not quite.'}</strong> The answer is {question.answer}.
          </p>
          {question.funFact && question.funFact !== question.answer && <p>{question.funFact}</p>}
          {hasLinkSource && (
            <p className="trivia-source">
              Source:{' '}
              <a href={question.source} target="_blank" rel="noreferrer">
                {new URL(question.source).hostname.replace(/^www\./, '')}
              </a>
            </p>
          )}
          {onNext && (
            <button type="button" className="button" onClick={onNext} autoFocus>
              {nextLabel}
            </button>
          )}
        </div>
      )}
    </article>
  );
}

export default TriviaQuestionCard;
