-- Player reports of inaccurate questions. Only the report-question function (service role)
-- reads or writes this table; there are no public policies.
create table public.question_reports (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  game text not null check (char_length(game) <= 40),
  question_id text not null check (char_length(question_id) <= 120),
  category text check (char_length(category) <= 20),
  question_text text not null check (char_length(question_text) <= 1000),
  answer_text text not null check (char_length(answer_text) <= 500),
  suggestion text not null check (char_length(suggestion) between 5 and 2000),
  reporter_email text check (char_length(reporter_email) <= 254),
  user_id uuid references auth.users (id) on delete set null,
  ip_hash text not null,
  emailed boolean not null default false
);
create index question_reports_ip_recent_idx on public.question_reports (ip_hash, created_at desc);
alter table public.question_reports enable row level security;

-- New accounts may choose a display name at sign-up (sent as user metadata). A name that is
-- invalid or already taken is skipped rather than blocking the sign-up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  wanted text := nullif(trim(new.raw_user_meta_data->>'display_name'), '');
begin
  begin
    insert into public.profiles (id, display_name) values (new.id, wanted) on conflict do nothing;
  exception when others then
    insert into public.profiles (id) values (new.id) on conflict do nothing;
  end;
  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

-- Keep the display name in the account's user metadata too, so the Supabase dashboard's user
-- list shows it next to the email.
create function public.sync_display_name_to_auth()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  update auth.users
  set raw_user_meta_data = coalesce(raw_user_meta_data, '{}'::jsonb) || jsonb_build_object('display_name', new.display_name)
  where id = new.id;
  return new;
end;
$$;

revoke execute on function public.sync_display_name_to_auth() from public, anon, authenticated;

create trigger profiles_sync_display_name
after insert or update of display_name on public.profiles
for each row when (new.display_name is not null)
execute function public.sync_display_name_to_auth();

update auth.users u
set raw_user_meta_data = coalesce(u.raw_user_meta_data, '{}'::jsonb) || jsonb_build_object('display_name', p.display_name)
from public.profiles p
where p.id = u.id and p.display_name is not null;
