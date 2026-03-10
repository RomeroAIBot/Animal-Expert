function TriviaQuestionCard({ question, selected, onAnswer }) {
  return (
    <article className="card trivia-card">
      <h3>{question.question}</h3>
      <div className="options-grid">
        {question.options.map((option) => {
          const isChosen = selected === option;
          return (
            <button
              key={option}
              type="button"
              className={`option ${isChosen ? 'selected' : ''}`}
              onClick={() => onAnswer(option)}
              disabled={Boolean(selected)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default TriviaQuestionCard;