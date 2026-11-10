// Makes the VAPID key pair for streak-reminder notifications. Run it yourself, once:
//   node scripts/generate-vapid-keys.mjs
// - The PUBLIC key is safe to share. It is written to src/utils/vapidPublicKey.js, which the site
//   uses, and is included in the clipboard text for Supabase.
// - The PRIVATE key is a secret. It is never printed or saved: it only goes on your clipboard, as
//   two lines ready to paste into Supabase > Edge Functions > Secrets. Paste it there and nowhere
//   else, then copy something else so it leaves the clipboard.
// It refuses to run again once a public key exists, because new keys would cut off everyone who
// already turned reminders on. Use --force only if you really mean to replace them.
import { spawnSync } from 'node:child_process';
import { createECDH } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const keyFile = fileURLToPath(new URL('../src/utils/vapidPublicKey.js', import.meta.url));
const existing = existsSync(keyFile) && /'[A-Za-z0-9_-]{40,}'/.test(readFileSync(keyFile, 'utf8'));
if (existing && !process.argv.includes('--force')) {
  console.log('Keys already exist (src/utils/vapidPublicKey.js has a public key). Nothing was changed.');
  console.log('Making new ones would stop reminders for everyone who turned them on.');
  console.log('If you really want new keys, run: node scripts/generate-vapid-keys.mjs --force');
  process.exit(1);
}

const ecdh = createECDH('prime256v1');
ecdh.generateKeys();
const base64url = (buffer) => buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const publicKey = base64url(ecdh.getPublicKey());
const privateKey = base64url(ecdh.getPrivateKey());

const clipboardCommand =
  process.platform === 'win32' ? ['clip'] : process.platform === 'darwin' ? ['pbcopy'] : ['xclip', '-selection', 'clipboard'];
const secrets = `VAPID_PUBLIC_KEY=${publicKey}\nVAPID_PRIVATE_KEY=${privateKey}\n`;
const copied = spawnSync(clipboardCommand[0], clipboardCommand.slice(1), { input: secrets, shell: process.platform === 'win32' });
if (copied.status !== 0) {
  console.log('Could not copy to the clipboard, so no keys were saved. Nothing was changed.');
  process.exit(1);
}

writeFileSync(
  keyFile,
  `// Public half of the VAPID key pair for streak reminders, written by scripts/generate-vapid-keys.mjs.\n` +
    `// Safe to publish. The private half lives only in Supabase function secrets.\n` +
    `export const VAPID_PUBLIC_KEY_FROM_FILE = '${publicKey}';\n`
);

console.log('Done. Two secret lines are on your clipboard: VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY.');
console.log('Paste them into Supabase > Edge Functions > Secrets now, before you copy anything else.');
console.log('The public key was also saved to src/utils/vapidPublicKey.js for the website.');
