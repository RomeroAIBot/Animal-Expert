import { useCurrentBackground } from '../utils/pageBackground';

// Credit for the background photo on screen, which the CC BY and CC BY-SA licenses require.
function PhotoCredit() {
  const photo = useCurrentBackground();
  return (
    <footer className="site-footer">
      <p>
        Background photo: {photo.description}, by {photo.artist},{' '}
        <a href={photo.source} target="_blank" rel="noreferrer">
          {photo.license} on Wikimedia Commons
        </a>
        .
      </p>
    </footer>
  );
}

export default PhotoCredit;
