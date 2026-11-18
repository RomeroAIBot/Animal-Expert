import { useCurrentBackground } from '../utils/pageBackground';

export const CONTACT_EMAIL = 'play@blindradioguy.com';

// Site footer: how to reach us, and credit for the background photo on screen, which the CC BY and
// CC BY-SA licenses require. Photos the site owner supplied have no outside credit to show.
function PhotoCredit() {
  const photo = useCurrentBackground();
  return (
    <footer className="site-footer">
      <p>
        Questions, ideas or a problem to report? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        Background photo: {photo.description}
        {photo.artist ? (
          <>
            , by {photo.artist},{' '}
            <a href={photo.source} target="_blank" rel="noreferrer">
              {photo.license} on Wikimedia Commons
            </a>
            .
          </>
        ) : (
          '.'
        )}
      </p>
    </footer>
  );
}

export default PhotoCredit;
