-- Runs the streak-reminders function at the top of every hour. Not a migration: it needs a secret,
-- so run it once by hand in the Supabase SQL editor after deploying the function.
-- Replace CRON_SECRET_VALUE with the same string you saved as the function's CRON_SECRET secret.
-- The secret is kept in Supabase Vault, not in the cron job's text.

create extension if not exists pg_cron;
create extension if not exists pg_net;

select vault.create_secret('CRON_SECRET_VALUE', 'streak_reminders_cron_secret');

select cron.schedule(
  'streak-reminders-hourly',
  '0 * * * *',
  $$
  select net.http_post(
    url := 'https://kyyhplnqebmvvsbxqazd.supabase.co/functions/v1/streak-reminders',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-cron-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'streak_reminders_cron_secret')
    ),
    body := '{}'::jsonb
  );
  $$
);

-- To stop the reminders later:  select cron.unschedule('streak-reminders-hourly');
