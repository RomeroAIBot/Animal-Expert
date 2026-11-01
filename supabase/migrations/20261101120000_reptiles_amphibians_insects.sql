-- Reptiles, Amphibians and Insects are now separate groups, with lizards, turtles & tortoises,
-- crocodiles & alligators, frogs & toads, salamanders & newts, bees/wasps/ants, butterflies & moths
-- and other insects joining the trivia, plus turkeys, ducks & geese in Livestock. Daily results can be
-- saved for each new animal and group.
-- Only widens the allowed list; existing rows are unaffected.
alter table public.game_results drop constraint game_results_category_check;
alter table public.game_results add constraint game_results_category_check check (
  category in (
    'dogs', 'cat', 'cattle', 'pigs', 'sheep', 'goats', 'horse', 'chickens', 'poultry', 'snakes',
    'lizards', 'turtles', 'crocodilians', 'frogs', 'salamanders', 'bees', 'butterflies', 'bugs',
    'pets', 'livestock', 'reptiles', 'amphibians', 'insects', 'mixed'
  )
);
