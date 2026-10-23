// Local-only tool for choosing one accurate photo per animal. Decisions are written to
// src/data/photoManifest.json by the local API server (npm run server).
import { useEffect, useMemo, useState } from 'react';
import { categories } from '../data/breeds';

const categoryLabels = { dogs: 'Dogs', snakes: 'Snakes', chickens: 'Chickens', cat: 'Cats', horse: 'Horses' };
const providerLabels = {
  wikipedia: 'Wikipedia article',
  commons: 'Wikimedia Commons',
  unsplash: 'Unsplash',
  dogceo: 'Dog CEO',
  catapi: 'The Cat API'
};

function PhotoReviewPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('dogs');
  const [showReviewed, setShowReviewed] = useState(false);
  const [saving, setSaving] = useState('');

  useEffect(() => {
    fetch('/api/review/data')
      .then((response) => response.json())
      .then(setData)
      .catch(() => setError('Could not reach the local API server. Start it with: npm run server'));
  }, []);

  const animals = useMemo(() => {
    if (!data) return [];
    return Object.values(data.candidates)
      .filter((item) => item.category === category)
      .filter((item) => showReviewed || !data.manifest[item.entityId]);
  }, [data, category, showReviewed]);

  const counts = useMemo(() => {
    if (!data) return null;
    const all = Object.values(data.candidates);
    const decisions = all.map((item) => data.manifest[item.entityId]?.status);
    return {
      total: all.length,
      approved: decisions.filter((status) => status === 'approved').length,
      none: decisions.filter((status) => status === 'none').length,
      byCategory: Object.fromEntries(
        categories.map((cat) => [
          cat,
          all.filter((item) => item.category === cat && !data.manifest[item.entityId]).length
        ])
      )
    };
  }, [data]);

  const decide = async (body) => {
    setSaving(body.entityId);
    try {
      const response = await fetch('/api/review/decide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setData((prev) => ({ ...prev, manifest: result.manifest }));
    } catch (err) {
      setError(`Save failed: ${err.message}`);
    } finally {
      setSaving('');
    }
  };

  if (error) return <section><h2>Photo Review</h2><p className="facts facts-warning">{error}</p></section>;
  if (!data) return <section><h2>Photo Review</h2><p>Loading candidates...</p></section>;

  // ?sheet=<entityId> shows one animal's candidates as a numbered full-screen grid, sized so a
  // single screenshot covers every candidate during visual review.
  const sheetId = new URLSearchParams(window.location.search).get('sheet');
  if (sheetId && data.candidates[sheetId]) {
    const animal = data.candidates[sheetId];
    return (
      <div className="contact-sheet">
        <p className="contact-sheet-title">{animal.displayName} ({animal.candidates.length})</p>
        <div className="contact-sheet-grid">
          {animal.candidates.map((candidate, index) => (
            <figure key={candidate.id}>
              <img src={candidate.thumbUrl} alt={candidate.title} />
              <span>{index + 1}</span>
            </figure>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="photo-review">
      <h2>Photo Review</h2>
      <p className="muted">
        Pick the photo that clearly shows this exact breed or morph: an adult, the whole animal or a clear head shot,
        no people or other animals in focus. If none are right, choose "None are right" and the animal is left out of
        photo games until a better candidate is found.
      </p>
      <p>
        Approved {counts.approved} · None suitable {counts.none} · Left to review{' '}
        {counts.total - counts.approved - counts.none} of {counts.total}
      </p>
      <div className="controls">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`button ${cat === category ? '' : 'ghost'}`}
            onClick={() => setCategory(cat)}
          >
            {categoryLabels[cat]} ({counts.byCategory[cat]} left)
          </button>
        ))}
        <label className="field inline">
          <input type="checkbox" checked={showReviewed} onChange={(event) => setShowReviewed(event.target.checked)} />
          <span>Show reviewed</span>
        </label>
      </div>

      {animals.length === 0 && <p>Nothing left to review in {categoryLabels[category]}.</p>}

      {animals.map((animal) => {
        const decision = data.manifest[animal.entityId];
        return (
          <article className="card review-animal" key={animal.entityId}>
            <div className="card-actions">
              <h3>
                {animal.displayName}{' '}
                {decision && <span className="review-badge">{decision.status === 'approved' ? 'Approved' : 'None suitable'}</span>}
              </h3>
              <span>
                {decision ? (
                  <button type="button" className="button ghost" onClick={() => decide({ entityId: animal.entityId, clear: true })}>
                    Undo
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button button-reset"
                    disabled={saving === animal.entityId}
                    onClick={() => decide({ entityId: animal.entityId, none: true })}
                  >
                    None are right
                  </button>
                )}
              </span>
            </div>
            {decision?.description && (
              <p>
                <strong>Chosen photo:</strong> {decision.description}
                {decision.note && ` Reviewer note: ${decision.note}`}
              </p>
            )}
            {decision?.status === 'none' && decision.note && <p><strong>Reviewer note:</strong> {decision.note}</p>}
            {animal.candidates.length === 0 && <p>No candidates found yet. Re-run npm run photos:candidates.</p>}
            <div className="review-grid">
              {animal.candidates.map((candidate) => {
                const chosen = decision?.status === 'approved' && decision.url === candidate.url;
                return (
                  <figure key={candidate.id} className={`review-candidate ${chosen ? 'chosen' : ''}`}>
                    <a href={candidate.sourcePage} target="_blank" rel="noreferrer">
                      <img src={candidate.thumbUrl} alt={candidate.title} loading="lazy" />
                    </a>
                    <figcaption>
                      <strong>{providerLabels[candidate.provider] || candidate.provider}</strong>
                      <span title={candidate.description || candidate.title}>{candidate.title}</span>
                      <span>{candidate.license}</span>
                      <button
                        type="button"
                        className="button small"
                        disabled={chosen || saving === animal.entityId}
                        onClick={() => decide({ entityId: animal.entityId, candidateId: candidate.id })}
                      >
                        {chosen ? 'Approved' : 'Approve'}
                      </button>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default PhotoReviewPage;
