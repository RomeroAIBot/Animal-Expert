-- Runs the streak-reminders edge function at the top of every hour.
-- The scheduler proves itself with a random password that the database makes here and keeps in
-- Vault; nobody types or copies it. The function reads it back through
-- streak_reminders_cron_secret(), which only the service role (the function itself) may call.
-- Until the function is deployed, the hourly call just gets "not found" and does nothing.

create extension if not exists pg_cron;
create extension if not exists pg_net;

select vault.create_secret(
  encode(extensions.gen_random_bytes(32), 'hex'),
  'streak_reminders_cron_secret',
  'Password the hourly scheduler sends to the streak-reminders function'
);

create function public.streak_reminders_cron_secret()
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select decrypted_secret from vault.decrypted_secrets where name = 'streak_reminders_cron_secret';
$$;

revoke execute on function public.streak_reminders_cron_secret() from public, anon, authenticated;
grant execute on function public.streak_reminders_cron_secret() to service_role;

select cron.schedule(
  'streak-reminders-hourly',
  '0 * * * *',
  $job$
  select net.http_post(
    url := 'https://kyyhplnqebmvvsbxqazd.supabase.co/functions/v1/streak-reminders',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-cron-secret', (select decrypted_secret from vault.decrypted_secrets where name = 'streak_reminders_cron_secret')
    ),
    body := '{}'::jsonb
  );
  $job$
);

-- To stop the reminders later:  select cron.unschedule('streak-reminders-hourly');
