import { useId, useState } from 'react';
import { sendReport } from '../utils/cloud';

/**
 * "Report a problem" for one question or fact. Opens a short form showing what was asked and
 * the answer given, where the player writes the correct information. Reports go to the site owner.
 */
function ReportProblem({ game, questionId, category, question, answer, signedInEmail }) {
  const [open, setOpen] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const id = useId();

  const submit = async (event) => {
    event.preventDefault();
    if (suggestion.trim().length < 5) {
      setStatus({ kind: 'error', text: 'Please describe what is inaccurate and what the correct information is.' });
      return;
    }
    setSending(true);
    setStatus({ kind: 'info', text: 'Sending...' });
    try {
      await sendReport({ game, questionId, category, question, answer, suggestion: suggestion.trim(), email: email.trim() });
      setStatus({ kind: 'success', text: 'Thank you! Your report was sent, and the question will be reviewed.' });
      setSuggestion('');
    } catch (error) {
      setStatus({ kind: 'error', text: error.status === 429 ? error.message : `Could not send the report: ${error.message}` });
    } finally {
      setSending(false);
    }
  };

  if (!open) {
    return (
      <button type="button" className="button ghost report-toggle" onClick={() => setOpen(true)}>
        Report inaccurate information
      </button>
    );
  }

  return (
    <form className="report-form" onSubmit={submit} aria-labelledby={`${id}-title`}>
      <h4 id={`${id}-title`}>Report inaccurate information</h4>
      <p>
        <strong>Question:</strong> {question}
      </p>
      <p>
        <strong>Answer shown:</strong> {answer}
      </p>
      <label htmlFor={`${id}-fix`}>What is the correct information?</label>
      <textarea
        id={`${id}-fix`}
        rows={4}
        maxLength={2000}
        value={suggestion}
        onChange={(event) => setSuggestion(event.target.value)}
        autoFocus
      />
      {!signedInEmail && (
        <>
          <label htmlFor={`${id}-email`}>Your email (optional, if you'd like a reply)</label>
          <input
            id={`${id}-email`}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </>
      )}
      <div className="game-controls">
        <button type="submit" className="button" disabled={sending}>
          Send report
        </button>
        <button type="button" className="button ghost" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
      <p role="status" className={status?.kind === 'error' ? 'status-error' : 'muted'}>
        {status?.text}
      </p>
    </form>
  );
}

export default ReportProblem;
