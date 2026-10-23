-- Player profiles: a display name and an opt-in for the public leaderboard.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text check (display_name is null or display_name ~ '^[A-Za-z0-9 _.-]{2,24}$'),
  show_on_leaderboard boolean not null default false,
  created_at timestamptz not null default now(),
  constraint leaderboard_needs_name check (not show_on_leaderboard or display_name is not null)
);
create unique index profiles_display_name_unique on public.profiles (lower(display_name));

-- One row per finished game. The primary key makes the first daily result the official one:
-- a second insert with the same entry id is ignored, so replays can't overwrite it.
create table public.game_results (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  entry_id text not null,
  mode text not null check (mode in ('daily-puzzle', 'daily-trivia', 'identify-cross', 'new-puzzle', 'new-trivia')),
  category text not null check (category in ('dogs', 'snakes', 'chickens', 'cat', 'horse', 'mixed')),
  date_key date not null,
  score integer not null check (score >= 0),
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (user_id, entry_id)
);
create index game_results_leaderboard_idx on public.game_results (mode, date_key, category, score desc);

-- Scores are computed in the browser, so reject results that don't add up.
create function public.validate_game_result()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  d jsonb := new.details;
  pairs integer;
  extra integer;
  expected integer;
  bonus integer;
begin
  new.created_at := now();
  if new.date_key > (now() at time zone 'utc')::date + 1 then
    raise exception 'date_key is in the future';
  end if;

  if new.mode in ('daily-trivia', 'new-trivia') then
    if (d->>'total')::int is null or (d->>'correct')::int is null
       or (d->>'correct')::int < 0 or (d->>'correct')::int > (d->>'total')::int or (d->>'total')::int < 1
       or new.score <> round((d->>'correct')::numeric * 100 / (d->>'total')::int) then
      raise exception 'trivia score does not match correct/total';
    end if;
    if new.mode = 'daily-trivia' and new.entry_id <> to_char(new.date_key, 'YYYY-MM-DD') || ':daily:trivia:' || new.category then
      raise exception 'bad daily trivia entry id';
    end if;

  elsif new.mode in ('daily-puzzle', 'new-puzzle') then
    if (d->>'size')::int not in (4, 6) or (d->>'flips')::int is null or (d->>'seconds')::int is null then
      raise exception 'puzzle details missing';
    end if;
    pairs := (d->>'size')::int * (d->>'size')::int / 2;
    if (d->>'flips')::int < pairs * 2 or (d->>'seconds')::int < pairs then
      raise exception 'puzzle finished faster than possible';
    end if;
    extra := greatest(0, (d->>'flips')::int - pairs * 2);
    expected := greatest(0, 600 - extra * 15) + greatest(0, 400 - greatest(0, (d->>'seconds')::int - pairs * 4) * 2);
    if new.score <> expected then
      raise exception 'puzzle score does not match flips/seconds';
    end if;
    if new.mode = 'daily-puzzle' and new.entry_id <> to_char(new.date_key, 'YYYY-MM-DD') || ':daily:puzzle:' || new.category || ':' || (d->>'size') then
      raise exception 'bad daily puzzle entry id';
    end if;

  elsif new.mode = 'identify-cross' then
    bonus := case when coalesce((d->>'crosswordSolved')::boolean, false) then 300 else 0 end;
    if (d->>'identified')::int is null or (d->>'total')::int is null
       or (d->>'identified')::int < 0 or (d->>'identified')::int > (d->>'total')::int or (d->>'total')::int > 10
       or new.score <> (d->>'identified')::int * 100 + bonus then
      raise exception 'identify-cross score does not match';
    end if;
  end if;
  return new;
end;
$$;

create trigger game_results_validate
before insert on public.game_results
for each row execute function public.validate_game_result();

-- Every new account gets an empty profile.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.validate_game_result() from public, anon, authenticated;

-- Row-level security: players read and write only their own rows. Results can't be edited or deleted.
alter table public.profiles enable row level security;
alter table public.game_results enable row level security;

create policy "Read own profile" on public.profiles for select to authenticated using (id = (select auth.uid()));
create policy "Update own profile" on public.profiles for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "Read own results" on public.game_results for select to authenticated using (user_id = (select auth.uid()));
create policy "Add own results" on public.game_results for insert to authenticated with check (user_id = (select auth.uid()));

-- Public daily leaderboard: only players who opted in, and only results saved within a day of the
-- game's date (old history imported at sign-in counts for personal stats but not for rankings).
create function public.get_daily_leaderboard(
  p_date date,
  p_mode text,
  p_category text,
  p_size integer default null,
  p_limit integer default 25
)
returns table (rank bigint, display_name text, score integer, seconds integer)
language sql
stable
security definer
set search_path = ''
as $$
  select
    rank() over (order by r.score desc, (r.details->>'seconds')::int asc nulls last) as rank,
    p.display_name,
    r.score,
    (r.details->>'seconds')::int as seconds
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
