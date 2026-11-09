// Tests the streak-reminder decisions (supabase/functions/streak-reminders/logic.ts) without
// sending anything. Usage: npm run test:reminders   (needs Node 22.18 or later for .ts files)
import assert from 'node:assert/strict';
import { addDays, decide, localParts, mightNotify, streakEndingOn } from '../supabase/functions/streak-reminders/logic.ts';

const prefs = { reminder_hours_before: 2, missed_streak_alerts: true, time_zone: 'America/New_York' };
const fresh = { last_reminder_on: null, last_missed_notice_on: null };
const days = (...keys) => new Set(keys);
let passed = 0;
const test = (name, fn) => {
  fn();
  passed += 1;
  console.log(`ok - ${name}`);
};

// 2026-11-10 03:00 UTC is 22:00 on 2026-11-09 in New York (EST, UTC-5).
const tenPmNewYork = new Date('2026-11-10T03:00:00Z');

test('local time follows the player time zone', () => {
  assert.deepEqual(localParts(tenPmNewYork, 'America/New_York'), { dateKey: '2026-11-09', hour: 22 });
  assert.deepEqual(localParts(tenPmNewYork, 'Not/AZone'), { dateKey: '2026-11-10', hour: 3 });
});

test('streaks count back day by day', () => {
  assert.equal(streakEndingOn(days('2026-11-07', '2026-11-08'), '2026-11-08'), 2);
  assert.equal(streakEndingOn(days('2026-11-06', '2026-11-08'), '2026-11-08'), 1);
  assert.equal(addDays('2026-03-01', -1), '2026-02-28');
});

test('reminder at the chosen hour when today is not played', () => {
  const notice = decide(tenPmNewYork, prefs, fresh, days('2026-11-07', '2026-11-08'));
  assert.equal(notice.kind, 'reminder');
  assert.equal(notice.title, 'Keep your 2-day streak going');
  assert.match(notice.body, /Complete your daily streak before the day is over/);
});

test('no reminder once today is played, or already reminded today', () => {
  assert.equal(decide(tenPmNewYork, prefs, fresh, days('2026-11-08', '2026-11-09')), null);
  assert.equal(decide(tenPmNewYork, prefs, { ...fresh, last_reminder_on: '2026-11-09' }, days()), null);
});

test('no reminder at other hours', () => {
  assert.equal(decide(tenPmNewYork, { ...prefs, reminder_hours_before: 5 }, fresh, days()), null);
  assert.equal(mightNotify(tenPmNewYork, { ...prefs, reminder_hours_before: 5 }, fresh), false);
});

test('8 hours before midnight means 4 PM', () => {
  const fourPm = new Date('2026-11-09T21:00:00Z');
  assert.equal(decide(fourPm, { ...prefs, reminder_hours_before: 8 }, fresh, days()).kind, 'reminder');
});

test('missed-streak notice at 9 AM the day after a miss', () => {
  const nineAm = new Date('2026-11-09T14:00:00Z');
  const notice = decide(nineAm, prefs, fresh, days('2026-11-05', '2026-11-06', '2026-11-07'));
  assert.equal(notice.kind, 'missed');
  assert.match(notice.body, /your 3-day streak ended/);
  assert.equal(decide(nineAm, { ...prefs, missed_streak_alerts: false }, fresh, days('2026-11-07')), null);
  assert.equal(decide(nineAm, prefs, fresh, days('2026-11-08')), null, 'played yesterday: nothing missed');
  assert.equal(decide(nineAm, prefs, fresh, days('2026-11-01')), null, 'streak ended long ago: no notice');
});

console.log(`\n${passed} reminder tests passed.`);
