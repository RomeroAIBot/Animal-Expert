-- A category with fewer animals than the grid needs gives a smaller board (a "6x6" Dogs puzzle has
-- 15 pairs, not 18), so puzzle results now carry their real pair count. Scores are checked against
-- it; results saved before this change fall back to the full grid.
create or replace function public.validate_game_result()
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
    pairs := coalesce((d->>'pairs')::int, (d->>'size')::int * (d->>'size')::int / 2);
    if pairs < 2 or pairs > (d->>'size')::int * (d->>'size')::int / 2 then
      raise exception 'puzzle pair count does not fit the grid';
    end if;
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

revoke execute on function public.validate_game_result() from public, anon, authenticated;
