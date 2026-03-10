# Animal Expert

Full-stack interactive daily animal game app using React + Vite, Node.js + Express, and Netlify Functions.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env example:
   ```bash
   copy .env.example .env
   ```
3. Add keys to `.env`:
   - `UNSPLASH_ACCESS_KEY`
   - `DOG_API_KEY`
4. Start frontend:
   ```bash
   npm run dev
   ```
5. Optional local API server:
   ```bash
   npm run server
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

## Sound files

Drop your sound files into `public/sounds/` with these exact names:
- `flip.mp3`
- `match.mp3`
- `correct.mp3`
- `wrong.mp3`

## Data

- Trivia question bank: `src/data/triviaQuestions.js` (150+ expert MC questions)
- Breed/morph list: `src/data/breeds.js`