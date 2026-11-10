// Sends streak reminders and missed-streak notices as web push notifications. Run once an hour
// by pg_cron (see migration 20261110120000_streak_reminders_schedule.sql); each player is checked in their
// own time zone, so a reminder arrives at the hour they chose before their local midnight.
//
// Secrets (Supabase dashboard > Edge Functions > Secrets), made by scripts/generate-vapid-keys.mjs:
//   VAPID_PUBLIC_KEY   same value as src/utils/vapidPublicKey.js
//   VAPID_PRIVATE_KEY  the private half; never put it in the site or the repository
//   VAPID_SUBJECT      optional contact for push services; defaults to mailto:romeroaibot@gmail.com
//
// The scheduler proves itself with a random password that the database made and keeps in Vault
// (migration 20261110120000); this function reads it back with the service role, so nobody has
// to copy it. Deploy with verify_jwt off, since the scheduler sends no sign-in token.
// POST ?dryRun=1 lists who would be notified this hour without sending anything.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';
import webpush from 'npm:web-push@3.6.7';
import { addDays, decide, localParts, mightNotify, type Prefs } from './logic.ts';

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body, null, 2), { status, headers: { 'Content-Type': 'application/json' } });

const timingSafeEqual = (a: string, b: string) => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

Deno.serve(async (req) => {
  const given = req.headers.get('x-cron-secret') || '';
  if (!given) return json(401, { error: 'Not allowed.' });
  const { data: secret, error: secretError } = await supabase.rpc('streak_reminders_cron_secret');
  if (secretError) return json(500, { error: 'Could not check the scheduler password.' });
  if (!secret || !timingSafeEqual(given, secret)) return json(401, { error: 'Not allowed.' });

  const dryRun = new URL(req.url).searchParams.get('dryRun') === '1';
  const publicKey = Deno.env.get('VAPID_PUBLIC_KEY');
  const privateKey = Deno.env.get('VAPID_PRIVATE_KEY');
  if (!dryRun && (!publicKey || !privateKey)) return json(500, { error: 'VAPID keys are not set.' });
  if (!dryRun) {
    webpush.setVapidDetails(Deno.env.get('VAPID_SUBJECT') || 'mailto:romeroaibot@gmail.com', publicKey!, privateKey!);
  }

  const now = new Date();

  const { data: subs, error: subsError } = await supabase.from('push_subscriptions').select('*');
  if (subsError) return json(500, { error: subsError.message });
  if (!subs?.length) return json(200, { checked: 0, sent: [] });

  const userIds = [...new Set(subs.map((sub) => sub.user_id))];
  const { data: profiles, error: profileError } = await supabase
    .from('profiles')
    .select('id, reminder_hours_before, missed_streak_alerts, time_zone')
    .in('id', userIds);
  if (profileError) return json(500, { error: profileError.message });
  const prefsById = new Map<string, Prefs>((profiles || []).map((p) => [p.id, p]));
  const defaults: Prefs = { reminder_hours_before: 2, missed_streak_alerts: true, time_zone: null };

  // Only read game history for players at a notification hour right now.
  const due = subs.filter((sub) => mightNotify(now, prefsById.get(sub.user_id) || defaults, sub));
  const dueUsers = [...new Set(due.map((sub) => sub.user_id))];
  const playedByUser = new Map<string, Set<string>>();
  if (dueUsers.length) {
    const since = addDays(localParts(now, 'UTC').dateKey, -400);
    const { data: results, error: resultsError } = await supabase
      .from('game_results')
      .select('user_id, date_key')
      .in('user_id', dueUsers)
      .in('mode', ['daily-trivia', 'daily-puzzle'])
      .gte('date_key', since)
      .limit(50000);
    if (resultsError) return json(500, { error: resultsError.message });
    (results || []).forEach((row) => {
      if (!playedByUser.has(row.user_id)) playedByUser.set(row.user_id, new Set());
      playedByUser.get(row.user_id)!.add(row.date_key);
    });
  }

  const sent: unknown[] = [];
  for (const sub of due) {
    const prefs = prefsById.get(sub.user_id) || defaults;
    const notice = decide(now, prefs, sub, playedByUser.get(sub.user_id) || new Set());
    if (!notice) continue;
    const column = notice.kind === 'reminder' ? 'last_reminder_on' : 'last_missed_notice_on';
    if (dryRun) {
      sent.push({ subscription: sub.id, user: sub.user_id, ...notice, dryRun: true });
      continue;
    }
    let outcome = 'sent';
    try {
      await webpush.sendNotification(
        { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
        JSON.stringify({ title: notice.title, body: notice.body, url: notice.url, tag: `streak-${notice.kind}` }),
        { TTL: 4 * 60 * 60, urgency: 'normal' }
      );
    } catch (error) {
      const status = (error as { statusCode?: number }).statusCode;
      // 404 and 410 mean the player turned notifications off or removed the app.
      if (status === 404 || status === 410) {
        await supabase.from('push_subscriptions').delete().eq('id', sub.id);
        outcome = 'removed expired subscription';
      } else {
        outcome = `failed (${status ?? 'network'})`;
      }
    }
    // Recorded either way, so a failing device is tried again tomorrow rather than every hour.
    await supabase.from('push_subscriptions').update({ [column]: notice.dateKey }).eq('id', sub.id);
    sent.push({ subscription: sub.id, kind: notice.kind, outcome });
  }

  return json(200, { checked: subs.length, due: due.length, sent });
});
