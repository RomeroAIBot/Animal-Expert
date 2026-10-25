# Animal Expert — Audit (2026-10-21)

Status legend: ⬜ open · 🔧 fixed in working tree (not committed) · ❓ needs a decision

## 1. Trivia quality (the biggest credibility problem)

| # | Finding | Evidence | Status |
|---|---|---|---|
| T1 | **Imported bank (761 Qs) has truncated answers.** The real answer was cut to its first few words, so the "correct" option is often meaningless. | "What is separation anxiety as distinguished from isolation distress?" → answer `Separation`. Horse: answer `Hunter under saddle judges the horse's`. | ⬜ needs rewrite |
| T2 | **Imported distractors are random, unrelated terms.** Wrong answers are pulled from a generic pool, so they don't match the question type and the right answer is obvious. | Separation-anxiety Q offers `Border Collie`, `Norwegian Lundehund`. Coop-ventilation Q offers `La Fleche`, `Welsummer`. OFA Q offers `Drive capping`. | ⬜ needs rewrite |
| T3 | **Answer is the only sentence-shaped option** in ~200 questions (length giveaway). | `Males rapidly vibrate their tail (flagging)` vs `Piebald odds` / `Thermal gradient`. | ⬜ |
| T4 | **Answer text appears in the question** in 82 imported questions. | "What is the Caramel Albino…?" → answer `Caramel Albino`. | ⬜ |
| T5 | **"Fun fact" just restates the answer** in ~680 imported questions, and source shows "Imported from trivia_dogs.txt" — not a credible citation. | | ⬜ |
| T6 | **1,320 of 2,081 questions are the same ~170 facts reworded 6–10×** by templates. A 10-question set can ask the same fact twice; wording is awkward ("Which concept should come to mind first for an experienced professional reading adding a valued stimulus…"). | `termTemplates` ×6, `breedTemplates` ×10 in `triviaQuestions.js`. | 🔧 one canonical Q per fact |
| T7 | No automated check for question quality. | | 🔧 `npm run validate:trivia` |
| T10 | **Rewrite progress (T1–T5).** Dogs ✅: 156 imported questions became 117 hand-checked rewrites plus 39 retired or merged (reasons in `src/data/trivia/dogs.js`). Every source link was checked (`npm run check:sources`). Fact corrections included the reindeer-herding breed, a misattributed pointing study, AAHA's 2024 move of leptospirosis to core, and the mixed evidence on raised bowls. Snakes ✅: 162 imported became 93 hand-checked rewrites plus 69 retired or merged (`src/data/trivia/snakes.js`). Fact corrections included Bumblebee vs Killer Bee morphs, "Snow" corn genetics, python and boa XY sex chromosomes, how snakes hear, the black mamba's name, and the sexual size difference in ball pythons. Breeding claims that rest only on breeder opinion were retired. Chickens ✅: 169 imported became 77 rewrites plus 92 retired or merged (`src/data/trivia/chickens.js`). Each chicken question carries an `evidence` phrase that `npm run check:sources` confirms appears on its source page; all 77 pass. Corrections included the light requirement (about 14 hours, not 14 to 16), coop space (3 to 5 square feet), the Dominique's history, the Id gene, and the calcium-to-phosphorus ratio. Cats ✅: 158 imported became 60 rewrites plus 98 retired or merged (`src/data/trivia/cats.js`); corrections include Devon vs Cornish Rex genes, Abyssinian PRA genetics and cat gestation length. Dogs and snakes now carry evidence phrases too: dogs 97 (20 more retired; JLPP, Greyhound speed and OFA registry answers corrected), snakes 82 (11 more retired; clutch size, vertebra count and WHO figures corrected). Horses ✅: 116 imported became 80 rewrites plus 36 retired or merged (`src/data/trivia/horses.js`); corrections include Muybridge's photographs (1878, not 1872), Valegro's breed (Dutch Warmblood, not Hanoverian), the Bashkir Curly's "hypoallergenic" status (a claim, not proven) and Comanche's "sole survivor" legend. Disputed "oldest" and "heaviest" breed questions were retired. Every rewritten question in all five categories is confirmed against its source by `npm run check:sources`. | | 🔧 all five categories |
| T11 | **The built-in term questions** (`termBank` in `triviaQuestions.js`, 20 per category) still draw wrong options at random from other terms ("Ecdysis" next to "Arboreal" and "Neurotoxic venom"), and some duplicate the rewritten questions (ecdysis, heat pits). The 72 breed-description questions also use random same-category breeds as wrong options. These need the same review. **Done:** the 100 built-in terms became 20 hand-checked vocabulary questions (`src/data/trivia/terms.js`); the rest duplicated existing questions or were trainer/show jargon with no checkable source. Each of the 71 breed descriptions now has a sourced clue, look-alike wrong options (Chartreux vs Russian Blue vs Korat) and its own fun fact (`src/data/trivia/breedClues.js`). The same clues feed the Identify & Cross crossword and no longer contain words from the answer. Ball Python Banana has no clue because no checkable source states its genetics. The loader no longer loads the original imported bank at all. All 487 questions pass `npm run validate:trivia`, and all 381 source links and 487 evidence phrases pass `npm run check:sources -- --rewritten` (the checker now spaces out Wikipedia requests to avoid rate limits). | | 🔧 |
| T12 | **New question file (October 2026).** "Trivia Questions to add to the database.txt" held 110 questions (dogs 50, cats 30, chickens 30). 54 were added after the same checks (ids `dogs-n01`–`n30`, `cat-n01`–`n16`, `chickens-n01`–`n08`), each with a source and a supporting phrase confirmed on the page. The other 56 were dropped: about 30 repeated facts already in the bank (for example Ayam Cemani, 21-day hatching, molting, Bengal and Sphynx origins, the Doberman's tax collector, variable-ratio reinforcement), and the rest had no checkable source, were advice with obviously wrong options, were disputed (chicken domestication date), or were wrong or made up (the "Munchkin" with long hind legs, the American Curl "from Maine", the "Environmental Hiding and Acclimation Phase"). | | 🔧 |
| T13 | **Randomizing.** Answer choices used to appear in the same order every time for a given question, and the Daily Puzzle dealt the same card layout on every replay. Now every game, daily or practice, shuffles question order, answer order and card layout on each load and each replay. Daily games keep the same questions and animals for everyone that day so the Rankings stay fair. | | 🔧 |
| T8 | Wrong pick isn't shown as wrong in the trivia card (only the correct one turns green). | `TriviaQuestionCard.jsx` | 🔧 |
| T9 | Answer feedback and fun fact vanished after 0.35s — too fast to read. | Daily Trivia, Practice | 🔧 "Next question" button |

## 2. Images

| # | Finding | Status |
|---|---|---|
| I1 | **All dog fallback images are dead.** They use `source.unsplash.com`, which Unsplash shut down in 2024. | 🔧 removed |
| I2 | **Non-dog fallbacks show the wrong animal.** When search fails, every snake gets the same generic snake photo, every horse the same horse — so the "correct" photo is not that breed. | 🔧 show "photo unavailable" instead of a wrong photo |
| I3 | **Unsplash search isn't breed-accurate.** The keyword check passes if *any* word >3 letters matches, so "Ball python clown" accepts any ball python photo and "Marsh Tacky" may return any horse. Niche breeds/morphs often have no correct Unsplash photo at all. | 🔧 curated manifest (decision A); review in progress |
| I4 | **Unsplash demo keys are limited to 50 requests/hour**, and each puzzle requests 8–18 images per visitor. Production (5,000/hr) requires Unsplash approval, which requires attribution. | 🔧 approved photos need no API call at play time |
| I5 | **No photographer attribution** — required by Unsplash's API terms. | 🔧 credit + link shown under photos |
| I10 | **Photos reviewed:** 70 of 72 animals have a visually checked, license-clean photo from Wikimedia, chosen for breed accuracy (file name, description and appearance all agree). The review caught wrong-breed candidates that search would have accepted: Groenendael/Laekenois as Malinois, Lesser Platinum as Mojave, Oriental/Snowshoe as Siamese, straight-eared "Scottish Folds", National Show Horse as Arabian, Standardbred as Tennessee Walker, Corolla Mustangs as Marsh Tacky. Ball Python Clown and Banana have no candidates yet; waiting on Unsplash. | 🔧 |
| I11 | Photo games were unplayable with a screen reader (generic "Animal photo" alt text). Each photo now has a breed-neutral description used as its alt text. | 🔧 |
| I9 | Photo matching now requires every word of the breed name in the photo's description/tags (was: any one word). More honest "photo unavailable", fewer wrong photos. | 🔧 |
| I6 | **Image `alt` text is the answer.** In Identify & Cross, a slow/broken image shows the breed name, and screen readers read it aloud. | 🔧 |
| I7 | Image-cache race: parallel fetches each write a stale copy of the cache, and the cache is an effect dependency, so PuzzleBoard re-runs its load loop repeatedly. | 🔧 |
| I8 | "Mixed" category sends dogs/cats to the generic search instead of the Dog/Cat APIs. | 🔧 |

## 3. Progress, scoring, streaks

| # | Finding | Status |
|---|---|---|
| P1 | **The "daily" puzzle/trivia changes after you play it.** Finishing records the items as "used," and the generator excludes used items, so reloading gives a *different* daily set. | 🔧 daily sets are fixed per date |
| P2 | **Daily can be replayed for a better score** — the history entry is overwritten each time. | 🔧 first completed attempt is the official score; replays are practice |
| P3 | **Puzzle timer never stops**, and the completion effect depends on `seconds`, so `onComplete` fires every second after finishing. In Spawn New Game this rewrites history every second. | 🔧 |
| P4 | **Switching category/grid doesn't reset the board** (matched pairs, flips, time carry over). | 🔧 |
| P5 | **Streak breaks across daylight-saving changes** (23-hour day → `floor(0.96) = 0` days). Missed days aren't reflected until you play again. | 🔧 calendar-day keys |
| P6 | **"Best Score" mixes units** — trivia %, puzzle points (~1,000), Identify (0–5). | 🔧 per-mode stats |
| P7 | "Leaderboard" is personal stats only; progress lives in one browser's localStorage (lost on clear/other device). | 🔧 Supabase accounts (emailed sign-in link), two-way sync, public opt-in daily Rankings page, account deletion. Database rules make the first daily result official and reject scores that don't add up. Waiting on two dashboard settings: auth URLs and an email sender. |
| P8 | Archive "Replay" just opens today's game regardless of the entry; Identify & Cross entries link to trivia. Mode names shown raw (`daily-puzzle`). | 🔧 labels + correct links |
| P10 | "6x6" puzzles in a single category have 14–15 pairs, not 18 (each category has 14–15 animals). Found in the pre-commit review: the database would have rejected every such score. Results now record their real pair count and the database checks against it. | 🔧 |
| P9 | Identify & Cross only saves if the crossword is solved perfectly; no give-up; crossword result isn't scored. | 🔧 reveal/give-up + saved on finish |

## 4. Sections doing what they say

| Section | Issue | Status |
|---|---|---|
| Dashboard | Leftover text: "Set **her** name for a personalized daily **gift** experience." | 🔧 |
| Daily Puzzle | P1–P4. | 🔧 |
| Daily Trivia | P1, P2, T1–T6. | partly 🔧 |
| Identify & Cross | **Crossword clues often contain the answer** ("Lundehunds are known for six toes" → answer NORWEGIANLUNDEHUND). Words the layout can't fit are silently dropped. "Mixed" makes identification trivial (dog photo vs snake/chicken options). | 🔧 |
| Archive | P8. | 🔧 |
| Spawn New Game | P3; trivia reroll doesn't reset properly when switching mode. | 🔧 |
| Leaderboard | P6, P7. | 🔧 / ❓ |

## 5. Deployment / dev setup

| # | Finding | Status |
|---|---|---|
| D1 | `package.json` has `"type": "module"` but Netlify functions use CommonJS (`require`/`exports`). Can break functions at runtime depending on bundling. | 🔧 renamed to `.cjs` |
| D2 | `server/index.js` duplicates function logic for local dev and has drifted. | 🔧 now runs the Netlify handlers directly |
| D3 | `console.error` on every production load when `VITE_API_BASE_URL` is unset (same-origin is the correct setup on Netlify). | 🔧 |
| D4 | Node.js isn't on PATH on this machine, so `npm` can't run. | ❓ install Node LTS |

Netlify is fine for this app; no need to move.

## Decisions needed

**A. Images — decided: curated manifest.** See "Photos" in README for the review workflow. Was recommended: a **curated, pinned photo manifest** — a script pulls candidates for every breed from Wikimedia Commons (breed-labeled, free license), Unsplash and the Dog/Cat APIs; we review them once; the app serves the approved photo with attribution. Accurate, fast, no rate limits. Alternative: keep live Unsplash search per request (cheaper to build, less accurate, needs Unsplash production approval).

**B. Progress tracking — decided: Supabase, emailed sign-in link, public opt-in rankings** (see README). Was recommended: **accounts + cloud sync with Supabase** (free tier, works with Netlify) so progress survives devices and a real leaderboard is possible. Alternative: stay local-only (fixed and reliable now, but one browser only).
