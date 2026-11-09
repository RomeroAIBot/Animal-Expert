// Decides which notification, if any, a subscribed player should get this hour. Kept free of
// Deno and Supabase imports so `node scripts/test-reminder-logic.mjs` can test it.

export type Prefs = {
  reminder_hours_before: number | null;
  missed_streak_alerts: boolean | null;
  time_zone: string | null;
};

export type SubState = {
  last_reminder_on: string | null;
  last_missed_notice_on: string | null;
};

export type Notice = { kind: 'reminder' | 'missed'; dateKey: string; title: string; body: string; url: string };

// Missed-streak notices go out at 9 in the morning, not at midnight when people are asleep.
export const MISSED_NOTICE_HOUR = 9;

const isValidZone = (zone: string | null): zone is string => {
  if (!zone) return false;
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: zone });
    return true;
  } catch {
    return false;
  }
};

// The player's local calendar day (YYYY-MM-DD) and hour (0-23).
export const localParts = (now: Date, zone: string | null) => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: isValidZone(zone) ? zone : 'UTC',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hourCycle: 'h23'
    })
      .formatToParts(now)
      .map((part) => [part.type, part.value])
  );
  return { dateKey: `${parts.year}-${parts.month}-${parts.day}`, hour: Number(parts.hour) % 24 };
};

export const addDays = (dateKey: string, days: number) => {
  const [y, m, d] = dateKey.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + days));
  return date.toISOString().slice(0, 10);
};

// Consecutive days with a daily game, counting back from (and including) `dateKey`.
export const streakEndingOn = (playedDays: Set<string>, dateKey: string) => {
  let count = 0;
  let day = dateKey;
  while (playedDays.has(day)) {
    count += 1;
    day = addDays(day, -1);
  }
  return count;
};

export const reminderHour = (prefs: Prefs) => {
  const hours = Math.min(8, Math.max(1, Number(prefs.reminder_hours_before) || 2));
  return 24 - hours;
};

// Cheap first pass: only players at their reminder hour or the missed-notice hour need their history read.
export const mightNotify = (now: Date, prefs: Prefs, sub: SubState) => {
  const { dateKey, hour } = localParts(now, prefs.time_zone);
  if (hour === reminderHour(prefs) && sub.last_reminder_on !== dateKey) return true;
  return prefs.missed_streak_alerts !== false && hour === MISSED_NOTICE_HOUR && sub.last_missed_notice_on !== dateKey;
};

export const decide = (now: Date, prefs: Prefs, sub: SubState, playedDays: Set<string>): Notice | null => {
  const { dateKey: today, hour } = localParts(now, prefs.time_zone);
  const yesterday = addDays(today, -1);

  if (hour === reminderHour(prefs) && sub.last_reminder_on !== today && !playedDays.has(today)) {
    const streak = streakEndingOn(playedDays, yesterday);
    return {
      kind: 'reminder',
      dateKey: today,
      title: streak > 0 ? `Keep your ${streak}-day streak going` : 'Animal Expert',
      body:
        streak > 0
          ? "Don't forget to show you're an animal expert. Complete your daily streak before the day is over."
          : "Don't forget to show you're an animal expert. Play a daily game before the day is over to start a streak.",
      url: '/daily-trivia'
    };
  }

  if (
    prefs.missed_streak_alerts !== false &&
    hour === MISSED_NOTICE_HOUR &&
    sub.last_missed_notice_on !== today &&
    !playedDays.has(today) &&
    !playedDays.has(yesterday) &&
    playedDays.has(addDays(today, -2))
  ) {
    const lost = streakEndingOn(playedDays, addDays(today, -2));
    return {
      kind: 'missed',
      dateKey: today,
      title: 'Your streak was reset',
      body: `You missed yesterday's daily game, so your ${lost}-day streak ended. Play today to start a new one.`,
      url: '/daily-trivia'
    };
  }

  return null;
};
