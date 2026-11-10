// Home-screen install and push-notification helpers.
import { VAPID_PUBLIC_KEY_FROM_FILE } from './vapidPublicKey';

// Public by design: browsers need it to subscribe. The private half lives only in Supabase secrets.
// Written by scripts/generate-vapid-keys.mjs; a Netlify VITE_VAPID_PUBLIC_KEY overrides it.
export const VAPID_PUBLIC_KEY = import.meta.env.VITE_VAPID_PUBLIC_KEY || VAPID_PUBLIC_KEY_FROM_FILE;

export const registerServiceWorker = () => {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Without it the site still works; only install and reminders are unavailable.
    });
  });
};

// True when opened from the home screen rather than in a browser tab.
export const isInstalled = () =>
  window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true;

export const isIos = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

export const pushSupported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;

// Where reminders stand on this device, so Settings can say what to do next.
export const getPushState = async () => {
  if (isIos() && !isInstalled()) return 'needs-install';
  if (!pushSupported()) return 'unsupported';
  if (!VAPID_PUBLIC_KEY) return 'not-configured';
  if (Notification.permission === 'denied') return 'blocked';
  const registration = await navigator.serviceWorker.getRegistration();
  const subscription = await registration?.pushManager.getSubscription();
  return subscription ? 'on' : 'off';
};

const keyToBytes = (base64url) => {
  const base64 = (base64url + '='.repeat((4 - (base64url.length % 4)) % 4)).replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
};

// Must be called from a button press: iPhones only show the permission prompt after a tap.
export const subscribeToPush = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') throw new Error(permission === 'denied' ? 'blocked' : 'dismissed');
  const registration = await navigator.serviceWorker.ready;
  const existing = await registration.pushManager.getSubscription();
  return (
    existing ||
    registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyToBytes(VAPID_PUBLIC_KEY) })
  );
};

export const unsubscribeFromPush = async () => {
  const registration = await navigator.serviceWorker.getRegistration();
  const subscription = await registration?.pushManager.getSubscription();
  if (!subscription) return null;
  const { endpoint } = subscription;
  await subscription.unsubscribe();
  return endpoint;
};

export const localTimeZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    return null;
  }
};
