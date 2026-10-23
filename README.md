# Animal Expert

Full-stack interactive daily animal game app using React + Vite, Node.js + Express, and Netlify Functions.

## Quick start

1. Install dependencies:
   ```bash
   npm.cmd install
   ```
2. Copy env example:
   ```bash
   copy .env.example .env
   ```
3. Add keys to `.env`:
   - `UNSPLASH_ACCESS_KEY`
   - `DOG_API_KEY`
   - `CAT_API_KEY`
4. Start frontend:
   ```bash
   npm.cmd run dev
   ```
5. Optional local API server:
   ```bash
   npm.cmd run server
   ```

## Photos

Every animal's photo is chosen by a person once and pinned in `src/data/photoManifest.json`.
The games serve that photo directly, with no API call at play time. Animals marked "none suitable"
are left out of photo games. Animals nobody has reviewed yet fall back to a live search that
requires the full breed name in the photo's description.

To review photos:
1. Put `UNSPLASH_ACCESS_KEY` (and optionally `CAT_API_KEY`) in `.env`.
2. Gather candidates: `npm run photos:candidates`. It pulls from the breed's Wikipedia article,
   Wikimedia Commons, Unsplash and The Cat API into `data/photo-candidates.json`. (Dog CEO is
   opt-in with `--providers=dogceo`; its photos have no clear reuse license, so don't approve them.)
   Unsplash demo keys allow 50 requests/hour, so the script stops at the limit; run it again later
   and it continues where it left off.
3. Run `npm run server` and `npm run dev`, then open http://localhost:5173/review-photos.
4. For each animal, approve the photo that clearly shows that exact breed or morph, or choose
   "None are right". Each decision is saved to the manifest immediately, with a short description
   of the photo that never names the breed. Games use it as the photo's screen-reader text.
   `/review-photos?sheet=<animal-id>` shows one animal's candidates as a numbered grid.
5. Restart `npm run dev` to see new approvals in the games, then commit the manifest.

Credit is shown under every photo (photographer, license, link), as Wikimedia's licenses and
Unsplash's API terms require. Approving an Unsplash photo also registers the download with
Unsplash, which their terms require.

## Fact sources

### Facts and question sources
- Dogs: AKC breed profiles and standards
- Cats: CFA and TICA breed profiles
- Snakes: Merck Veterinary Manual, U.S. Fish & Wildlife Service, San Diego Zoo Wildlife Alliance
- Chickens: The Livestock Conservancy heritage breed profiles
- Horses: US Equestrian, AQHA, The Livestock Conservancy

## Growing the trivia bank

The trivia bank now supports two source-backed paths:
- `termBank` in `src/data/triviaQuestions.js` for expert terminology questions by category
- `breedQuestionBank` in `src/data/triviaQuestions.js` for specific breed- and species-level multiple-choice questions with source URLs

When adding more questions, keep each item shaped like:

```js
{
  id: 'unique-id',
  category: 'dogs',
  difficulty: 'expert',
  type: 'multiple-choice',
  question: 'Prompt text',
  options: ['A', 'B', 'C', 'D'],
  answer: 'A',
  funFact: 'Short supporting fact',
  source: 'https://official-source.example/'
}
```

## Unsplash key setup

1. Open [Unsplash Developers](https://unsplash.com/developers).
2. Open your application dashboard.
3. Copy the **Access Key**.
4. Put it in `UNSPLASH_ACCESS_KEY` in `.env` and Netlify environment variables.

## Netlify deploy

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Add environment variables in Netlify site settings:
  - `UNSPLASH_ACCESS_KEY`
  - `DOG_API_KEY`
  - `CAT_API_KEY`

## Accounts, sync and rankings (Supabase)

Players can play without an account; progress then stays in that browser. Signing in (Account page,
emailed link, no password) uploads that history and syncs it across devices. Players who choose a
display name and opt in appear on the Rankings page, which ranks official daily scores only.

- Project: `Animal Expert` (`kyyhplnqebmvvsbxqazd`), free plan. Database setup lives in `supabase/migrations/`.
- The app talks to Supabase with plain `fetch` (`src/utils/cloud.js`); sync logic is in `src/utils/storage.js`.
- The project URL and publishable key are built in as defaults. They are safe in browser code;
  row-level security limits each player to their own rows.
- The database enforces the game rules: a daily game's first saved result is official and can't be
  overwritten, and scores that don't match their flips, time or correct answers are rejected.
- Players can delete their account (and all saved results) from the Account page.

Supabase dashboard settings that the app needs (Authentication section):
- **URL Configuration**: Site URL `https://animalexpert.netlify.app`; Redirect URLs
  `https://animalexpert.netlify.app/**` and `http://localhost:5173/**`.
- **Emails (SMTP)**: Supabase's built-in sender only emails members of the Supabase team, a few per
  hour. Public sign-ups need a custom SMTP sender.

## Sound files

Place sound files in `public/sounds/`.
The current app expects these filenames exactly:
- `Flip.mp3`
- `Match.mp3`
- `Correct.mp3`
- `Wrong.mp3`

## Data

- Trivia question bank: `src/data/triviaQuestions.js`
- Breed and entity list: `src/data/breeds.js`
- Source registry: `src/data/sourceCatalog.js`
