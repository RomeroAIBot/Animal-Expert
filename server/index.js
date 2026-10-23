// Local API server for `npm run dev`. It runs the exact Netlify function handlers,
// so local behavior always matches production. It also serves the photo review
// endpoints, which only exist locally because they write files in the repo.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const require = createRequire(import.meta.url);
const handlers = {
  'dog-image': require('../netlify/functions/dog-image.cjs').handler,
  'image-search': require('../netlify/functions/image-search.cjs').handler
};

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidatesFile = path.join(root, 'data', 'photo-candidates.json');
const manifestFile = path.join(root, 'src', 'data', 'photoManifest.json');

const readJsonFile = (file) => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {});
const writeManifest = (manifest) => {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(manifestFile, `${JSON.stringify(sorted, null, 2)}\n`);
};

const app = express();
const port = process.env.PORT || 8787;

app.use(cors());
app.use(express.json());

app.get('/api/review/data', (req, res) => {
  res.json({ candidates: readJsonFile(candidatesFile), manifest: readJsonFile(manifestFile) });
});

// Body: { entityId, candidateId } to approve a photo, { entityId, none: true } when no candidate
// shows the right animal, or { entityId, clear: true } to undo.
app.post('/api/review/decide', async (req, res) => {
  // description: what the chosen photo shows, written without naming the breed, so it is
  // safe to use as alt text later. note: why this photo was chosen or why none fit.
  const { entityId, candidateId, none, clear, description, note, reviewer } = req.body || {};
  const reviewFields = {
    ...(description && { description }),
    ...(note && { note }),
    reviewer: reviewer || 'manual'
  };
  const candidates = readJsonFile(candidatesFile);
  const manifest = readJsonFile(manifestFile);
  if (!candidates[entityId]) {
    res.status(404).json({ error: 'Unknown animal' });
    return;
  }

  if (clear) {
    delete manifest[entityId];
  } else if (none) {
    manifest[entityId] = { status: 'none', ...reviewFields, reviewedAt: new Date().toISOString() };
  } else {
    const candidate = candidates[entityId].candidates.find((item) => item.id === candidateId);
    if (!candidate) {
      res.status(404).json({ error: 'Unknown candidate' });
      return;
    }

    // Unsplash's API terms require registering a "download" when a photo is chosen for use.
    if (candidate.downloadLocation && process.env.UNSPLASH_ACCESS_KEY) {
      await fetch(candidate.downloadLocation, {
        headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` }
      }).catch(() => {});
    }

    manifest[entityId] = {
      status: 'approved',
      url: candidate.url,
      provider: candidate.provider,
      credit: candidate.credit,
      creditUrl: candidate.creditUrl,
      license: candidate.license,
      licenseUrl: candidate.licenseUrl,
      sourcePage: candidate.sourcePage,
      ...reviewFields,
      reviewedAt: new Date().toISOString()
    };
  }

  writeManifest(manifest);
  res.json({ manifest });
});

app.all('/api/:fn', async (req, res) => {
  const handler = handlers[req.params.fn];
  if (!handler) {
    res.status(404).json({ error: 'Unknown function' });
    return;
  }

  const result = await handler({ httpMethod: req.method, body: JSON.stringify(req.body || {}) });
  res.status(result.statusCode).set(result.headers || {}).send(result.body);
});

app.listen(port, () => {
  console.log(`Animal Expert API running on http://localhost:${port}`);
});
