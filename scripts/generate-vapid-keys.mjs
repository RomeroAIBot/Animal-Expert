// Makes a VAPID key pair for web push notifications. Run it yourself, once:
//   node scripts/generate-vapid-keys.mjs
// It only prints to your screen; nothing is saved or sent anywhere.
// - The PUBLIC key is safe to share: put it in Netlify as VITE_VAPID_PUBLIC_KEY and in Supabase
//   function secrets as VAPID_PUBLIC_KEY.
// - The PRIVATE key is a secret: put it only in Supabase function secrets as VAPID_PRIVATE_KEY.
//   Never commit it, paste it in chat, or put it in the website's settings.
import { createECDH } from 'node:crypto';

const ecdh = createECDH('prime256v1');
ecdh.generateKeys();
const base64url = (buffer) => buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

console.log('VAPID public key  (VITE_VAPID_PUBLIC_KEY and VAPID_PUBLIC_KEY):');
console.log(base64url(ecdh.getPublicKey()));
console.log('\nVAPID private key (VAPID_PRIVATE_KEY, Supabase secrets only):');
console.log(base64url(ecdh.getPrivateKey()));
