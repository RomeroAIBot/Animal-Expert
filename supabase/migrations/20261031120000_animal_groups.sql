-- Animals are now organised into groups (Pets, Livestock, Reptiles & Amphibians), and cattle, pigs,
-- sheep and goats joined the trivia. Daily results can be saved for each new animal and each whole
-- group. Only widens the allowed list; existing rows are unaffected.
alter table public.game_results drop constraint game_results_category_check;
alter table public.game_results add constraint game_results_category_check check (
  category in (
    'dogs', 'cat', 'cattle', 'pigs', 'sheep', 'goats', 'horse', 'chickens', 'snakes',
    'pets', 'livestock', 'reptiles', 'mixed'
  )
);
