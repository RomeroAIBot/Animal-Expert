-- Player settings, push-notification subscriptions for streak reminders, and trivia levels in
-- the daily rankings. Only adds columns, a table and functions; existing rows are unaffected.

-- Settings kept with the account so they follow the player to every device.
alter table public.profiles
  add column default_level text check (default_level in ('easy', 'intermediate', 'difficult', 'multi')),
  add column reminder_hours_before smallint not null default 2 check (reminder_hours_before between 1 and 8),
  add column missed_streak_alerts boolean not null default true,
  add column time_zone text check (char_length(time_zone) <= 64);

-- One row per browser or installed app that agreed to notifications. The streak-reminders
-- function (service role) reads these and records what it sent, so nothing is sent twice a day.
create table public.push_subscriptions (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  endpoint text not null unique check (char_length(endpoint) <= 1000 and endpoint like 'https://%'),
  p256dh text not null check (char_length(p256dh) <= 200),
  auth text not null check (char_length(auth) <= 100),
  user_agent text check (char_length(user_agent) <= 300),
  created_at timestamptz not null default now(),
  last_reminder_on date,
  last_missed_notice_on date
);
create index push_subscriptions_user_idx on public.push_subscriptions (user_id);

alter table public.push_subscriptions enable row level security;
create policy "Read own push subscriptions" on public.push_subscriptions
  for select to authenticated using (user_id = (select auth.uid()));
create policy "Delete own push subscriptions" on public.push_subscriptions
  for delete to authenticated using (user_id = (select auth.uid()));

-- Saving goes through this function: a device that was signed in to another account moves to
-- this one instead of failing on the unique endpoint.
create function public.save_push_subscription(
  p_endpoint text,
  p_p256dh text,
  p_auth text,
  p_user_agent text default null,
  p_time_zone text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  delete from public.push_subscriptions where endpoint = p_endpoint;
  insert into public.push_subscriptions (user_id, endpoint, p256dh, auth, user_agent)
  values (auth.uid(), p_endpoint, p_p256dh, p_auth, left(p_user_agent, 300));
  if p_time_zone is not null then
    update public.profiles set time_zone = left(p_time_zone, 64) where id = auth.uid();
  end if;
end;
$$;

revoke execute on function public.save_push_subscription(text, text, text, text, text) from public, anon;
grant execute on function public.save_push_subscription(text, text, text, text, text) to authenticated;

-- Rankings now say which level each official trivia score was played at.
drop function public.get_daily_leaderboard(date, text, text, integer, integer);
create function public.get_daily_leaderboard(
  p_date date,
  p_mode text,
  p_category text,
  p_size integer default null,
  p_limit integer default 25
)
returns table (rank bigint, display_name text, score integer, seconds integer, level text)
language sql
stable
security definer
set search_path = ''
as $$
  select
    rank() over (order by r.score desc, (r.details->>'seconds')::int asc nulls last) as rank,
    p.display_name,
    r.score,
    (r.details->>'seconds')::int as seconds,
    r.details->>'level' as level
  from public.game_results r
  join public.profiles p on p.id = r.user_id
  where p.show_on_leaderboard
    and r.mode = p_mode
    and r.mode in ('daily-puzzle', 'daily-trivia')
    and r.date_key = p_date
    and r.category = p_category
    and (p_size is null or (r.details->>'size')::int = p_size)
    and r.created_at >= (r.date_key - 1)::timestamptz
    and r.created_at < (r.date_key + 2)::timestamptz
  order by rank, p.display_name
  limit least(greatest(p_limit, 1), 100);
$$;

revoke execute on function public.get_daily_leaderboard(date, text, text, integer, integer) from public;
grant execute on function public.get_daily_leaderboard(date, text, text, integer, integer) to anon, authenticated;
