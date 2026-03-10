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

## Image and fact sources

### Images
- Dogs: The Dog API, dog.ceo fallback, Unsplash fallback
- Cats: The Cat API, Unsplash fallback
- Snakes, chickens, horses: Unsplash with breed-specific queries and keyword validation

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
