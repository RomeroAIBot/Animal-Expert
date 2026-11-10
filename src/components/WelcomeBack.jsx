// Once-a-day welcome-back panel. App decides when to show it (signed-in players with an email,
// never on the home screen); this only displays the item and its Close button.
function WelcomeBack({ item, name, onClose }) {
  if (!item) return null;
  return (
    <section className="card welcome-back" aria-labelledby="welcome-back-heading">
      <h2 id="welcome-back-heading">{name ? `Welcome back, ${name}` : 'Welcome back'}</h2>
      <h3>{item.heading}</h3>
      {item.type === 'fact' ? (
        <>
          <p>
            <strong>Question:</strong> {item.question}
          </p>
          <p>
            <strong>Answer:</strong> {item.answer}. {item.text}
          </p>
        </>
      ) : (
        <p>{item.text}</p>
      )}
      {item.source && (
        <p className="trivia-source">
          Source:{' '}
          <a href={item.source} target="_blank" rel="noreferrer">
            {item.source.replace(/^https?:\/\/(www\.)?/, '').replace(/_/g, ' ')}
          </a>
        </p>
      )}
      <button type="button" className="button ghost" onClick={onClose}>
        Close welcome message
      </button>
    </section>
  );
}

export default WelcomeBack;
