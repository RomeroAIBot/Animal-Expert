function TriviaQuestionCard({ question, selected, onAnswer }) {
  return (
    <article className="card trivia-card">
      <p className="trivia-meta">Expert multiple choice</p>
      <h3>{question.question}</h3>
      <div className="options-grid">
        {question.options.map((option) => {
          const isChosen = selected === option;
          const isCorrect = selected && option === question.answer;
          return (
            <button
              key={option}
              type="button"
              className={`option ${isChosen ? 'selected' : ''} ${isCorrect ? 'correct' : ''}`.trim()}
              onClick={() => onAnswer(option)}
              disabled={Boolean(selected)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="trivia-feedback">
          <p>
            <strong>Answer:</strong> {question.answer}
          </p>
          <p>{question.funFact}</p>
          <p className="trivia-source">Source: {question.source}</p>
        </div>
      )}
    </article>
  );
}

export default TriviaQuestionCard;
