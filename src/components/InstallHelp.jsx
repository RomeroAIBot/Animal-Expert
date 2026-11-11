import { isInstalled, isIos } from '../utils/pwa';

// How to put Animal Expert on the home screen. Written for VoiceOver users too: Safari's Share
// button is read as "Share", and the menu item as "Add to Home Screen".
function InstallHelp({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const installed = isInstalled();

  return (
    <article className="card" id="install">
      <Heading>Add Animal Expert to your home screen</Heading>
      {installed ? (
        <p>You're using the home-screen app now. It opens full screen, like any other app.</p>
      ) : (
        <>
          <p>
            Put Animal Expert on your iPhone's home screen so it opens like an app. It's also the only way an iPhone can
            get streak reminders.
          </p>
          <h3>On iPhone or iPad (Safari)</h3>
          <ol>
            <li>Open this site in Safari.</li>
            <li>
              Tap the Share button. It's in the toolbar at the bottom of the screen (at the top on iPad), a square with an
              arrow pointing up. VoiceOver reads it as "Share".
            </li>
            <li>Scroll down the list of actions and tap "Add to Home Screen". If you don't see it, tap "Edit Actions" to add it.</li>
            <li>Leave the name as Animal Expert and tap "Add". The paw-print icon appears on your home screen.</li>
            <li>
              Open Animal Expert from the home screen and sign in once more on its Account page. iPhone keeps the
              home-screen app separate from Safari, so it can't see Safari's sign-in. Ask for a sign-in email and type
              the code from it into the app. After that, the app stays signed in every time you open it.
            </li>
          </ol>
          <h3>On Android (Chrome)</h3>
          <p>Open the menu (three dots) and choose "Add to Home screen" or "Install app".</p>
          {isIos() && (
            <p className="muted">Reminders need iOS 16.4 or later, and only work from the home-screen app.</p>
          )}
        </>
      )}
    </article>
  );
}

export default InstallHelp;
