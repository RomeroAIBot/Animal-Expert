// Hand-checked chicken trivia. Same rules as dogs.js and snakes.js. Each question also carries an
// `evidence` phrase that must appear on its source page; `npm run check:sources` verifies it.

export const chickenQuestions = [
  // Genetics and egg color
  {
    id: 'chickens-0593',
    replaces: 'imported-chickens-0593',
    topic: 'Genetics',
    question: 'The all-black skin, bones and organs of the Ayam Cemani involve a duplication around which gene?',
    options: ['Endothelin 3 (EDN3)', 'Melanocortin 1 receptor (MC1R)', 'Tyrosinase (TYR)', 'Keratin 75 (KRT75)'],
    answer: 'Endothelin 3 (EDN3)',
    funFact: 'The condition is called fibromelanosis. Silkies have the same mutation, which is why their skin is dark too.',
    source: 'https://en.wikipedia.org/wiki/Ayam_Cemani',
    evidence: 'endothelin 3'
  },
  {
    id: 'chickens-0594',
    replaces: 'imported-chickens-0594',
    topic: 'Genetics',
    question: 'The blue-egg trait of the Araucana is thought to trace back to what?',
    options: [
      'A retrovirus that inserted itself into chicken DNA',
      'A blue dye in the birds\' native diet',
      'Crossbreeding with wild ducks',
      'A vitamin deficiency in the shell gland'
    ],
    answer: 'A retrovirus that inserted itself into chicken DNA',
    funFact: 'The blue pigment is biliverdin, which runs through the whole shell rather than sitting on the surface.',
    source: 'https://en.wikipedia.org/wiki/Araucana',
    evidence: 'action of a retrovirus'
  },
  {
    id: 'chickens-0595',
    replaces: 'imported-chickens-0595',
    topic: 'Eggs',
    question: 'Which pigment gives brown eggshells their color?',
    options: ['Protoporphyrin', 'Biliverdin', 'Melanin', 'Carotene'],
    answer: 'Protoporphyrin',
    funFact: 'Biliverdin is the blue pigment. As a rough rule, breeds with white earlobes lay white eggs and those with red earlobes lay brown.',
    source: 'https://en.wikipedia.org/wiki/Eggs_as_food',
    evidence: 'the brown pigment is protoporphyrin'
  },
  {
    id: 'chickens-0599',
    replaces: 'imported-chickens-0599',
    topic: 'Genetics',
    question: 'Which pairing gives chicks that are all blue?',
    options: ['Black x splash', 'Blue x blue', 'Black x black', 'Splash x splash'],
    answer: 'Black x splash',
    funFact: 'Blue x blue gives about half blue, a quarter black and a quarter splash chicks, which is why blue never breeds true.',
    source: 'https://www.hobbyfarms.com/?p=73622',
    evidence: 'splash (bb): 100 percent blue'
  },
  {
    id: 'chickens-0600',
    replaces: 'imported-chickens-0600',
    topic: 'Genetics',
    question: 'Solid white plumage in chickens comes from two main kinds of mutation. What are they usually called?',
    options: [
      'Dominant white and recessive white',
      'Silver and gold',
      'Lavender and splash',
      'Barred and cuckoo'
    ],
    answer: 'Dominant white and recessive white',
    funFact: 'Two white birds can still produce colored chicks if each carries a different kind of white.',
    source: 'https://en.wikipedia.org/wiki/Solid_white_(chicken_plumage)',
    evidence: '"dominant white" and "recessive white"'
  },
  {
    id: 'chickens-0601',
    replaces: 'imported-chickens-0601',
    topic: 'Genetics',
    question: 'The gene for sex-linked barring in chickens is located on which chromosome?',
    options: ['The Z sex chromosome', 'The W sex chromosome', 'Chromosome 1', 'Mitochondrial DNA'],
    answer: 'The Z sex chromosome',
    funFact: 'In birds, males are ZZ and females are ZW, the reverse of the mammal pattern. That is why barring can be used to sex chicks.',
    source: 'https://en.wikipedia.org/wiki/Sex-linked_barring',
    evidence: 'located on the z chromosome'
  },
  {
    id: 'chickens-0603',
    replaces: 'imported-chickens-0603',
    topic: 'Breeds',
    question: 'The Light Brahma is mostly white. Where is its black?',
    options: [
      'In the neck hackles and tail',
      'In stripes across the whole body',
      'Only on the wing tips',
      'In a border around every feather'
    ],
    answer: 'In the neck hackles and tail',
    funFact: 'This pattern is called Columbian. Brahmas are a large Asiatic breed with feathered feet.',
    source: 'https://en.wikipedia.org/wiki/Brahma_chicken',
    evidence: 'black hackles edged in white and a black tail'
  },

  // Egg laying
  {
    id: 'chickens-0609',
    replaces: 'imported-chickens-0609',
    topic: 'Egg laying',
    question: 'The highest authenticated egg-laying record for a single hen is how many eggs in 364 days?',
    options: ['371', '290', '412', '500'],
    answer: '371',
    funFact: 'Commercial hens lay over 300 eggs a year, but laying falls off after about a year.',
    source: 'https://en.wikipedia.org/wiki/Chicken',
    evidence: '371 eggs in 364 days'
  },
  {
    id: 'chickens-0611',
    replaces: 'imported-chickens-0611',
    topic: 'Egg laying',
    question: 'For good egg production, about how many hours of light a day do hens need?',
    options: ['About 14 hours', 'About 6 hours', 'About 10 hours', 'All 24 hours'],
    answer: 'About 14 hours',
    funFact: 'Extra light is best added in the morning; light added after sunset can leave birds unable to find the roost when it switches off.',
    source: 'https://extension.umn.edu/agriculture/animals-and-livestock/poultry/caring-for-chickens-in-cold-weather',
    evidence: 'about 14 hours of light daily'
  },
  {
    id: 'chickens-0613',
    replaces: 'imported-chickens-0613',
    topic: 'Egg laying',
    question: 'About how long does it take a hen to make one egg?',
    options: ['About 24 to 26 hours', 'About 4 hours', 'About 3 days', 'About a week'],
    answer: 'About 24 to 26 hours',
    funFact: 'Much of the work happens overnight, and most of the time goes into building the shell. That is why a hen lays at most about one egg a day.',
    source: 'https://www.purinamills.com/chicken-feed/education/detail/how-often-do-chickens-lay-eggs-and-how-do-chickens-make-eggs',
    evidence: '24-to-26-hour process'
  },
  {
    id: 'chickens-0614',
    replaces: 'imported-chickens-0614',
    topic: 'Egg laying',
    question: 'What causes a double-yolk egg?',
    options: [
      'Ovulation happening too quickly, so two yolks are shelled together',
      'One yolk splitting in half inside the hen',
      'Two hens laying in the same nest at once',
      'The rooster fertilizing the egg twice'
    ],
    answer: 'Ovulation happening too quickly, so two yolks are shelled together',
    funFact: 'They are most common in young hens whose laying cycle has not settled yet.',
    source: 'https://en.wikipedia.org/wiki/Eggs_as_food',
    evidence: 'occurs when ovulation occurs too rapidly'
  },
  {
    id: 'chickens-0615',
    replaces: 'imported-chickens-0615',
    topic: 'Health',
    question: 'In egg yolk peritonitis, what has gone wrong?',
    options: [
      'An egg or yolk stays in the body and causes infection',
      'The hen has eaten too many egg yolks',
      'The eggshell forms without any calcium',
      'A yolk is laid without any white around it'
    ],
    answer: 'An egg or yolk stays in the body and causes infection',
    funFact: 'It can be fatal and needs a vet. Older hens past their laying peak can still develop it.',
    source: 'https://en.wikipedia.org/wiki/Henopause',
    evidence: 'where the egg does not exit the body'
  },
  {
    id: 'chickens-0617',
    replaces: 'imported-chickens-0617',
    topic: 'Egg laying',
    question: 'What is a group of eggs laid by one hen in a single run called?',
    options: ['A clutch', 'A brood', 'A flock', 'A sitting'],
    answer: 'A clutch',
    funFact: 'A hen lays her clutch on consecutive days, then takes a break before starting the next one.',
    source: 'https://en.wikipedia.org/wiki/Clutch_(eggs)',
    evidence: 'a clutch of eggs is the group of eggs'
  },
  {
    id: 'chickens-0619',
    replaces: 'imported-chickens-0619',
    topic: 'Eggs',
    question: 'In the United States, a dozen "large" eggs must weigh at least how much?',
    options: ['24 ounces', '18 ounces', '30 ounces', '12 ounces'],
    answer: '24 ounces',
    funFact: 'Sizes are set by weight per dozen, so individual eggs in a carton can vary. Jumbo is 30 ounces and medium 21.',
    source: 'https://www.egglandsbest.com/faqs/egglands-best-egg-sizes-determined',
    evidence: 'total minimum weight of 24 ounces'
  },
  {
    id: 'chickens-0620',
    replaces: 'imported-chickens-0620',
    topic: 'Eggs',
    question: 'A chicken eggshell is mostly made of what?',
    options: ['Calcium carbonate', 'Keratin', 'Silica', 'Collagen'],
    answer: 'Calcium carbonate',
    funFact: 'It is about 95 to 97 percent calcium carbonate, which is why laying hens need so much calcium and why low calcium means thin shells.',
    source: 'https://en.wikipedia.org/wiki/Eggshell',
    evidence: '95-97% calcium carbonate'
  },

  // Broodiness and incubation
  {
    id: 'chickens-0624',
    replaces: 'imported-chickens-0624',
    topic: 'Broodiness',
    question: 'Light-weight breeds developed for egg laying, such as the Leghorn, tend to have hens that do what?',
    options: ['Rarely go broody', 'Go broody every month', 'Lay only in spring', 'Refuse to roost'],
    answer: 'Rarely go broody',
    funFact: 'Broodiness stops laying, so it was bred out of egg breeds. Silkies and Cochins, by contrast, are famously broody.',
    source: 'https://en.wikipedia.org/wiki/List_of_chicken_breeds',
    evidence: 'hens do not go broody often'
  },
  {
    id: 'chickens-0625',
    replaces: 'imported-chickens-0625',
    topic: 'Broodiness',
    question: 'Which hormone causes broodiness in hens?',
    options: ['Prolactin', 'Luteinizing hormone', 'Adrenaline', 'Melatonin'],
    answer: 'Prolactin',
    funFact: 'It is released by the pituitary gland, and it stops the hen from laying while she sits.',
    source: 'https://en.wikipedia.org/wiki/Broodiness',
    evidence: 'secretion of the hormone prolactin'
  },
  {
    id: 'chickens-0626',
    replaces: 'imported-chickens-0626',
    topic: 'Broodiness',
    question: 'Which behavior is a classic sign of a broody hen?',
    options: [
      'Fluffing up and pecking when disturbed on the nest',
      'Laying two eggs on most days of the week',
      'Crowing loudly every morning at dawn',
      'Pacing along the fence line all day long'
    ],
    answer: 'Fluffing up and pecking when disturbed on the nest',
    funFact: 'A broody hen rarely leaves the nest, even to eat or drink.',
    source: 'https://en.wikipedia.org/wiki/Chicken',
    evidence: 'fluffing up or pecking defensively if disturbed'
  },
  {
    id: 'chickens-0627',
    replaces: 'imported-chickens-0627',
    topic: 'Incubation',
    question: 'How long does a chicken egg take to hatch?',
    options: ['About 21 days', 'About 14 days', 'About 28 days', 'About 35 days'],
    answer: 'About 21 days',
    funFact: 'The chick uses a small egg tooth on its beak to break out of the shell.',
    source: 'https://en.wikipedia.org/wiki/Chicken',
    evidence: 'about 21 days'
  },
  {
    id: 'chickens-0693',
    replaces: 'imported-chickens-0693',
    topic: 'Incubation',
    question: 'About what temperature should a forced-air (fan) incubator hold?',
    options: ['99.5 to 100°F', '95°F', '104°F', '90°F'],
    answer: '99.5 to 100°F',
    funFact: 'Still-air incubators without a fan run a little warmer, measured at the top of the eggs.',
    source: 'https://creatures.com/species/chicken/hatching-eggs-incubator-guide',
    evidence: '99.5 to 100 degrees fahrenheit in a forced-air incubator'
  },
  {
    id: 'chickens-0698',
    replaces: 'imported-chickens-0698',
    topic: 'Incubation',
    question: 'Why are eggs turned during incubation?',
    options: [
      'To stop the embryo sticking to the shell membrane',
      'To mix the yolk and white together',
      'To check which eggs are fertile',
      'To cool the eggs down'
    ],
    answer: 'To stop the embryo sticking to the shell membrane',
    funFact: 'Turning also helps the embryo develop evenly. Broody hens turn their eggs many times a day.',
    source: 'https://creatures.com/species/chicken/hatching-eggs-incubator-guide',
    evidence: 'stops the developing embryo from sticking to the shell membrane'
  },
  {
    id: 'chickens-0699',
    replaces: 'imported-chickens-0699',
    topic: 'Incubation',
    question: 'When turning eggs by hand, how often do incubation guides suggest?',
    options: [
      '3 to 5 times a day, an odd number',
      'Exactly twice a day',
      'Once a week',
      'Every ten minutes'
    ],
    answer: '3 to 5 times a day, an odd number',
    funFact: 'Turning stops on day 18 for "lockdown", when humidity is raised for hatching.',
    source: 'https://creatures.com/species/chicken/hatching-eggs-incubator-guide',
    evidence: 'turning 3 to 5 times a day (an odd number)'
  },
  {
    id: 'chickens-0636',
    replaces: 'imported-chickens-0636',
    topic: 'Incubation',
    question: 'What is "candling" an egg?',
    options: [
      'Shining a bright light through it to see inside',
      'Warming it with a candle to start incubation',
      'Dipping it in wax to seal the shell',
      'Weighing it against a standard'
    ],
    answer: 'Shining a bright light through it to see inside',
    funFact: 'It shows whether an embryo is developing. The name comes from the candles originally used.',
    source: 'https://en.wikipedia.org/wiki/Candling',
    evidence: 'bright light source behind the egg'
  },

  // Molting
  {
    id: 'chickens-0637',
    replaces: 'imported-chickens-0637',
    topic: 'Molting',
    question: 'In which season do laying hens usually molt?',
    options: ['Early fall', 'Late spring', 'Midsummer', 'Midwinter'],
    answer: 'Early fall',
    funFact: 'Egg production drops during the molt and as daylight shortens.',
    source: 'https://extension.umn.edu/small-scale-poultry/raising-chickens-eggs',
    evidence: 'early fall'
  },
  {
    id: 'chickens-0639',
    replaces: 'imported-chickens-0639',
    topic: 'Molting',
    question: 'Which nutrient matters most while a chicken regrows its feathers during a molt?',
    options: ['Protein', 'Calcium', 'Sugar', 'Salt'],
    answer: 'Protein',
    funFact: 'Feathers are made mostly of protein, so egg production pauses while the bird puts its resources into new plumage.',
    source: 'https://www.kalmbachfeeds.com/blogs/chickens/the-ins-and-outs-of-molting-chickens',
    evidence: 'feathers are composed primarily of protein'
  },
  {
    id: 'chickens-0641',
    replaces: 'imported-chickens-0641',
    topic: 'Molting',
    question: "Why should you avoid breaking a chicken's growing pin feathers?",
    options: [
      'They have a blood supply and will bleed',
      'They are coated with a mild venom',
      'They fall out if touched',
      'They are made of fragile bone'
    ],
    answer: 'They have a blood supply and will bleed',
    funFact: 'That is why they are also called blood feathers. The blood supply dries up once the feather is fully grown.',
    source: 'https://en.wikipedia.org/wiki/Pin_feather',
    evidence: 'blood supply flowing through it'
  },
  {
    id: 'chickens-0642',
    replaces: 'imported-chickens-0642',
    topic: 'Molting',
    question: 'In commercial egg production, how has "forced molting" traditionally been done?',
    options: [
      'By withdrawing feed for a period',
      'By plucking feathers by hand',
      'By giving hormone injections',
      'By raising the coop temperature'
    ],
    answer: 'By withdrawing feed for a period',
    funFact: 'Temporary starvation is widely considered inhumane, and it is the main controversy around the practice.',
    source: 'https://en.wikipedia.org/wiki/Forced_molting',
    evidence: 'feed withdrawal'
  },

  // Behavior
  {
    id: 'chickens-0645',
    replaces: 'imported-chickens-0645',
    topic: 'Behavior',
    question: 'If feather pecking goes unchecked in a flock, what can it lead to?',
    options: [
      'Bleeding, cannibalism and death',
      'Faster feather regrowth',
      'Higher egg production',
      'Stronger social bonds'
    ],
    answer: 'Bleeding, cannibalism and death',
    funFact: 'It is one of the biggest problems in non-cage egg production.',
    source: 'https://en.wikipedia.org/wiki/Feather_pecking',
    evidence: 'can lead to cannibalism and death'
  },
  {
    id: 'chickens-0647',
    replaces: 'imported-chickens-0647',
    topic: 'Behavior',
    question: 'Why is a bleeding chicken at risk of being attacked by its flock mates?',
    options: [
      'Poultry are attracted to the color red',
      'Blood makes the bird smell like a predator',
      'Injured birds always become aggressive',
      'Roosters target hurt hens'
    ],
    answer: 'Poultry are attracted to the color red',
    funFact: 'Injured birds should be separated until they heal.',
    source: 'https://en.wikipedia.org/wiki/Cannibalism_in_poultry',
    evidence: 'poultry are attracted to the colour red'
  },
  {
    id: 'chickens-0650',
    replaces: 'imported-chickens-0650',
    topic: 'Behavior',
    question: 'Chickens give different alarm calls depending on what?',
    options: [
      'Whether the predator is in the air or on the ground',
      'The time of day',
      'How many chicks are nearby',
      'Whether a human is watching'
    ],
    answer: 'Whether the predator is in the air or on the ground',
    funFact: 'Other chickens respond to each call in the appropriate way, for example by looking up for a hawk.',
    source: 'https://en.wikipedia.org/wiki/Bird_vocalization',
    evidence: 'alarm calls for aerial and ground predators'
  },

  // Bantams and breeds
  {
    id: 'chickens-0653',
    replaces: 'imported-chickens-0653',
    topic: 'Bantams',
    question: 'A bantam version of a breed is usually about what size compared with the standard bird?',
    options: ['One-fifth to one-quarter', 'About half', 'About three-quarters', 'One-tenth'],
    answer: 'One-fifth to one-quarter',
    funFact: 'Some breeds, called true bantams, exist only in small form and have no large counterpart.',
    source: 'https://en.wikipedia.org/wiki/List_of_chicken_breeds',
    evidence: 'one-fifth to one-quarter the size'
  },
  {
    id: 'chickens-0654',
    replaces: 'imported-chickens-0654',
    topic: 'Bantams',
    question: 'Sebright roosters are "hen-feathered". What causes this?',
    options: [
      'Their skin converts male hormones into female hormones',
      'They are actually hens that crow',
      'Their feathers are trimmed for showing',
      'They never reach adulthood'
    ],
    answer: 'Their skin converts male hormones into female hormones',
    funFact: 'So the roosters grow rounded, laced feathers like hens instead of pointed hackles and saddles.',
    source: 'https://en.wikipedia.org/wiki/Sebright_chicken',
    evidence: 'into female sex hormones'
  },
  {
    id: 'chickens-0659',
    replaces: 'imported-chickens-0659',
    topic: 'Breeds',
    question: "The Barbu d'Uccle, a bearded bantam, comes from which country?",
    options: ['Belgium', 'France', 'Japan', 'England'],
    answer: 'Belgium',
    funFact: 'It was developed in the town of Uccle near Brussels and is a true bantam with no large version.',
    source: "https://en.wikipedia.org/wiki/Belgian_d'Uccle",
    evidence: 'belgian breed of bearded bantam'
  },
  {
    id: 'chickens-0669',
    replaces: 'imported-chickens-0669',
    topic: 'Breeds',
    question: 'Which game breed is among the tallest chickens, able to stand over 3 feet (90 cm)?',
    options: ['Malay', 'Silkie', 'Cochin', 'Polish'],
    answer: 'Malay',
    funFact: 'Malays have a very upright stance and long legs.',
    source: 'https://en.wikipedia.org/wiki/Malay_chicken',
    evidence: 'among the tallest breeds of chicken'
  },
  {
    id: 'chickens-0670',
    replaces: 'imported-chickens-0670',
    topic: 'Breeds',
    question: 'The Faverolles, with a beard, muffs and five toes, comes from which country?',
    options: ['France', 'Belgium', 'Netherlands', 'Italy'],
    answer: 'France',
    funFact: 'It was developed in the 1860s and named after the village of Faverolles.',
    source: 'https://en.wikipedia.org/wiki/Faverolles_chicken',
    evidence: 'north-central france'
  },
  {
    id: 'chickens-0672',
    replaces: 'imported-chickens-0672',
    topic: 'Breeds',
    question: 'How many toes does a Dorking chicken have on each foot?',
    options: ['Five', 'Three', 'Four', 'Six'],
    answer: 'Five',
    funFact: 'Most chickens have four. The Dorking may descend from five-toed chickens brought to Britain by the Romans.',
    source: 'https://en.wikipedia.org/wiki/Dorking_chicken',
    evidence: 'rather than the usual four-toed'
  },
  {
    id: 'chickens-0673',
    replaces: 'imported-chickens-0673',
    topic: 'Breeds',
    question: 'Which breed is considered the oldest American chicken breed?',
    options: ['Dominique', 'Rhode Island Red', 'Plymouth Rock', 'Wyandotte'],
    answer: 'Dominique',
    funFact: 'It has barred feathers and a rose comb, and in the 1860s it helped create the Plymouth Rock.',
    source: 'https://en.wikipedia.org/wiki/Dominique_chicken',
    evidence: 'oldest american chicken breed'
  },
  {
    id: 'chickens-0674',
    replaces: 'imported-chickens-0674',
    topic: 'Breeds',
    question: 'The Buckeye, created in Ohio in the late 1800s, is known as the only American breed developed by a woman. Who was she?',
    options: ['Nettie Metcalf', 'Gertrude Stein', 'Ellen Swallow Richards', 'Mary Anning'],
    answer: 'Nettie Metcalf',
    funFact: 'Its color was meant to match the seed of the buckeye tree, symbol of Ohio.',
    source: 'https://en.wikipedia.org/wiki/Buckeye_chicken',
    evidence: 'nettie metcalf'
  },
  {
    id: 'chickens-0676',
    replaces: 'imported-chickens-0676',
    topic: 'Breeds',
    question: 'Which French breed is famous for its very dark, chocolate-brown eggs?',
    options: ['Marans', 'Leghorn', 'Ameraucana', 'Sussex'],
    answer: 'Marans',
    funFact: 'Only one other breed, the Penedesenca of Catalonia, lays such a dark egg.',
    source: 'https://en.wikipedia.org/wiki/Marans',
    evidence: 'only one other chicken breed, the penedesenca'
  },
  {
    id: 'chickens-0677',
    replaces: 'imported-chickens-0677',
    topic: 'Breeds',
    question: 'Why do Silkie feathers look fluffy, like fur?',
    options: [
      'They lack working barbicels, the tiny hooks that lock feathers together',
      'They are made of hair instead of keratin',
      'They have twice as many feathers as other breeds',
      'Their feathers never finish growing'
    ],
    answer: 'They lack working barbicels, the tiny hooks that lock feathers together',
    funFact: 'Their feathers are like down, which also leaves Silkies unable to fly.',
    source: 'https://en.wikipedia.org/wiki/Silkie_(chicken_breed)',
    evidence: 'lack functioning barbicels'
  },
  {
    id: 'chickens-0678',
    replaces: 'imported-chickens-0678',
    topic: 'Breeds',
    question: 'Hatcheries often sell birds as "Americanas". What are they really?',
    options: [
      'Easter Eggers, mixed birds that are not a recognized breed',
      'Purebred Ameraucanas under another name',
      'A rare American heritage breed',
      'A cross between Leghorns and Silkies'
    ],
    answer: 'Easter Eggers, mixed birds that are not a recognized breed',
    funFact: 'The Ameraucana is a recognized breed that lays blue eggs. Easter Eggers vary in color and egg shade.',
    source: 'https://en.wikipedia.org/wiki/Easter_Egger',
    evidence: 'quite different from the ameraucana, a recognized breed'
  },
  {
    id: 'chickens-0680',
    replaces: 'imported-chickens-0680',
    topic: 'Breeds',
    question: 'The arrival of which large Chinese breed in the 1840s and 1850s set off "hen fever" in the West?',
    options: ['Cochin', 'Silkie', 'Leghorn', 'Malay'],
    answer: 'Cochin',
    funFact: 'Hen fever was a craze for fancy poultry that helped launch poultry shows and breed standards.',
    source: 'https://en.wikipedia.org/wiki/Cochin_chicken',
    evidence: 'hen fever'
  },
  {
    id: 'chickens-0682',
    replaces: 'imported-chickens-0682',
    topic: 'Breeds',
    question: 'The Houdan, with a crest, beard and five toes, comes from which country?',
    options: ['France', 'Netherlands', 'Belgium', 'Germany'],
    answer: 'France',
    funFact: 'It is named after the town of Houdan, west of Paris, and has an unusual leaf-shaped comb.',
    source: 'https://en.wikipedia.org/wiki/Houdan_chicken',
    evidence: 'traditional french breed'
  },
  {
    id: 'chickens-0734',
    replaces: 'imported-chickens-0734',
    topic: 'Breeds',
    question: "What can be unusual about an Araucana's rear end?",
    options: [
      'It may be rumpless, with no tail or tail-bone',
      'It has an extra-long tail that never molts',
      'Its tail curls forward over its back',
      'It has two separate tails'
    ],
    answer: 'It may be rumpless, with no tail or tail-bone',
    funFact: 'Some Araucanas also have tufts of feathers on the ears, and the breed lays blue eggs.',
    source: 'https://en.wikipedia.org/wiki/Araucana',
    evidence: 'may be rumpless, without a tail and tail-bone'
  },
  {
    id: 'chickens-0736',
    replaces: 'imported-chickens-0736',
    topic: 'Breeds',
    question: 'Despite its Japanese name, the long-tailed Yokohama breed was developed in which country?',
    options: ['Germany', 'Japan', 'China', 'England'],
    answer: 'Germany',
    funFact: 'The founding birds were shipped from the Japanese port of Yokohama, which gave the breed its name.',
    source: 'https://en.wikipedia.org/wiki/Yokohama_chicken',
    evidence: 'german breed of fancy chicken'
  },
  {
    id: 'chickens-0737',
    replaces: 'imported-chickens-0737',
    topic: 'Breeds',
    question: 'The Japanese Onagadori is famous for what?',
    options: [
      'Tail feathers that can grow for years without molting',
      'Laying the smallest eggs of any breed',
      'Being completely featherless',
      'Crowing for over a minute'
    ],
    answer: 'Tail feathers that can grow for years without molting',
    funFact: 'Tails grow about 0.7 to 1.3 meters a year and have been known to reach 12 meters.',
    source: 'https://en.wikipedia.org/wiki/Onagadori',
    evidence: 'never moult'
  },
  {
    id: 'chickens-0740',
    replaces: 'imported-chickens-0740',
    topic: 'Breeds',
    question: 'The Wyandotte, in the APA\'s American class, was developed as what kind of breed?',
    options: [
      'Dual-purpose, for eggs and meat',
      'Exhibition only',
      'Cockfighting',
      'Egg production only'
    ],
    answer: 'Dual-purpose, for eggs and meat',
    funFact: 'It is raised for brown eggs and yellow-skinned meat. The first variety was the Silver Laced.',
    source: 'https://en.wikipedia.org/wiki/Wyandotte_chicken',
    evidence: 'american breed of dual-purpose chicken'
  },
  {
    id: 'chickens-0749',
    replaces: 'imported-chickens-0749',
    topic: 'Breeds',
    question: 'The first commercial meat chicken cross paired a Cornish male with which breed?',
    options: ['White Plymouth Rock', 'White Leghorn', 'Rhode Island Red', 'Silkie'],
    answer: 'White Plymouth Rock',
    funFact: 'The cross was introduced in the 1930s and became dominant in the meat industry.',
    source: 'https://en.wikipedia.org/wiki/Broiler',
    evidence: 'white plymouth rocks'
  },

  // Health and anatomy
  {
    id: 'chickens-0662',
    replaces: 'imported-chickens-0662',
    topic: 'Health',
    question: "Why is the Marek's disease vaccine called a \"leaky\" vaccine?",
    options: [
      'It prevents symptoms but not infection or spread',
      'It wears off after a few days',
      'It has to be given by dripping it into the eye',
      'It only works on hens'
    ],
    answer: 'It prevents symptoms but not infection or spread',
    funFact: 'Vaccinated birds can still carry and shed the virus. Infected birds can shed it for life.',
    source: "https://en.wikipedia.org/wiki/Marek's_disease",
    evidence: 'leaky vaccine'
  },
  {
    id: 'chickens-0663',
    replaces: 'imported-chickens-0663',
    topic: 'Health',
    question: 'Medicated chick starter usually contains amprolium. What disease does it help control?',
    options: ['Coccidiosis', "Marek's disease", 'Avian influenza', 'Fowl pox'],
    answer: 'Coccidiosis',
    funFact: 'Amprolium is not an antibiotic. It mimics thiamine and starves the coccidia parasite of it.',
    source: 'https://en.wikipedia.org/wiki/Amprolium',
    evidence: 'coccidiosis treatment in poultry'
  },
  {
    id: 'chickens-0665',
    replaces: 'imported-chickens-0665',
    topic: 'Health',
    question: 'Which of these is a common cause of egg binding in hens?',
    options: ['Calcium deficiency', 'Too much exercise', 'Cold drinking water', 'Bright lighting'],
    answer: 'Calcium deficiency',
    funFact: 'Obesity, stress and malformed eggs are other causes. An egg-bound hen needs prompt care.',
    source: 'https://en.wikipedia.org/wiki/Egg_binding',
    evidence: 'calcium deficiency'
  },
  {
    id: 'chickens-0667',
    replaces: 'imported-chickens-0667',
    topic: 'Health',
    question: "Raised, crusty scales on a chicken's legs are a classic sign of what?",
    options: ['Scaly leg mites', 'Bumblefoot', 'Frostbite', 'Molting'],
    answer: 'Scaly leg mites',
    funFact: 'The mite, Knemidokoptes mutans, burrows under the scales. Bumblefoot is an infection of the foot pad.',
    source: 'https://en.wikipedia.org/wiki/Knemidocoptes_mutans',
    evidence: 'scaly leg mite'
  },
  {
    id: 'chickens-0668',
    replaces: 'imported-chickens-0668',
    topic: 'Health',
    question: 'A shortage of which vitamin causes rickets?',
    options: ['Vitamin D', 'Vitamin C', 'Vitamin K', 'Vitamin B12'],
    answer: 'Vitamin D',
    funFact: 'Without enough vitamin D, calcium is poorly absorbed and bones grow soft and bent, in chicks as in people.',
    source: 'https://en.wikipedia.org/wiki/Rickets',
    evidence: 'without enough vitamin d'
  },
  {
    id: 'chickens-0692',
    replaces: 'imported-chickens-0692',
    topic: 'Health',
    question: 'Vitamin K was discovered in experiments on chickens. What is it needed for?',
    options: ['Blood clotting', 'Eggshell color', 'Feather growth', 'Eyesight'],
    answer: 'Blood clotting',
    funFact: 'The "K" comes from the Danish word for coagulation. Henrik Dam found it by feeding chickens special diets.',
    source: 'https://en.wikipedia.org/wiki/Vitamin_K',
    evidence: 'blood coagulation'
  },
  {
    id: 'chickens-0751',
    replaces: 'imported-chickens-0751',
    topic: 'Health',
    question: 'Fast-growing commercial meat chickens are especially prone to which problems?',
    options: [
      'Leg disorders and heart failure',
      'Feather pecking and broodiness',
      'Scaly leg mites and lice',
      'Thin eggshells and egg binding'
    ],
    answer: 'Leg disorders and heart failure',
    funFact: 'In one study, 80 percent of broilers had a detectable gait abnormality by seven weeks of age.',
    source: 'https://en.wikipedia.org/wiki/Broiler',
    evidence: 'sudden death syndrome by acute heart failure'
  },
  {
    id: 'chickens-0752',
    replaces: 'imported-chickens-0752',
    topic: 'Health',
    question: 'In meat chickens, what is ascites?',
    options: [
      'A slow form of heart failure with fluid in the belly',
      'A belly full of water from drinking too much',
      'An infection from dirty water',
      'Swelling from being overweight'
    ],
    answer: 'A slow form of heart failure with fluid in the belly',
    funFact: 'It is linked to breeding for very rapid growth and affects around 5 percent of broilers worldwide.',
    source: 'https://en.wikipedia.org/wiki/Broiler',
    evidence: 'ascites, a slower form of heart failure'
  },
  {
    id: 'chickens-0685',
    replaces: 'imported-chickens-0685',
    topic: 'Health',
    question: 'Feeding a high-calcium layer ration to birds that are not laying can cause what?',
    options: ['Kidney damage and gout', 'Soft eggshells', 'Feather loss', 'Blindness'],
    answer: 'Kidney damage and gout',
    funFact: 'Growing pullets and roosters do better on a lower-calcium feed, with oyster shell offered separately for laying hens.',
    source: 'https://www.msdvetmanual.com/multimedia/image/renal-and-visceral-gout-hyperuricemia-as-a-result-of-a-high-calcium-ration-layer',
    evidence: 'gout (hyperuricemia) as a result of a high-calcium ration'
  },
  {
    id: 'chickens-0711',
    replaces: 'imported-chickens-0711',
    topic: 'Anatomy',
    question: "How many chambers does a chicken's heart have?",
    options: ['Four', 'Two', 'Three', 'Five'],
    answer: 'Four',
    funFact: 'Birds share the four-chambered heart with mammals and crocodilians.',
    source: 'https://en.wikipedia.org/wiki/Bird_anatomy',
    evidence: 'birds have a four-chambered heart'
  },
  {
    id: 'chickens-0714',
    replaces: 'imported-chickens-0714',
    topic: 'Anatomy',
    question: "How are a chicken's red blood cells different from a human's?",
    options: ['They have a nucleus', 'They are blue', 'They carry no oxygen', 'They are square'],
    answer: 'They have a nucleus',
    funFact: 'Mammal red blood cells lose their nucleus as they develop; those of other vertebrates, including birds, keep it.',
    source: 'https://en.wikipedia.org/wiki/Red_blood_cell',
    evidence: 'red blood cells of other vertebrates have nuclei'
  },
  {
    id: 'chickens-0715',
    replaces: 'imported-chickens-0715',
    topic: 'Anatomy',
    question: 'Chickens have a pair of blind-ended pouches off the intestine where plant material ferments. What are they?',
    options: ['The ceca', 'The crop', 'The gizzard', 'The air sacs'],
    answer: 'The ceca',
    funFact: 'Several times a day chickens pass darker, smellier cecal droppings, which are normal.',
    source: 'https://en.wikipedia.org/wiki/Cecum',
    evidence: 'the ceca in birds are often paired'
  },
  {
    id: 'chickens-0717',
    replaces: 'imported-chickens-0717',
    topic: 'Anatomy',
    question: 'How do air sacs help a bird breathe?',
    options: [
      'They move air one way through the lungs',
      'They store oxygen for long dives',
      'They let the bird breathe through its skin',
      'They filter dust out of the air'
    ],
    answer: 'They move air one way through the lungs',
    funFact: 'Fresh air passes through the lungs on both breathing in and breathing out, which makes bird lungs very efficient.',
    source: 'https://en.wikipedia.org/wiki/Bird_anatomy',
    evidence: 'air sacs move air unidirectionally'
  },
  {
    id: 'chickens-0718',
    replaces: 'imported-chickens-0718',
    topic: 'Anatomy',
    question: 'What is the white part of a chicken dropping?',
    options: [
      'Uric acid, the bird form of urine',
      'Undigested calcium',
      'Dried mucus',
      'Feather fragments'
    ],
    answer: 'Uric acid, the bird form of urine',
    funFact: 'Excreting nitrogen as uric acid saves water, because it is not very toxic and needs little dilution.',
    source: 'https://en.wikipedia.org/wiki/Bird_anatomy',
    evidence: 'elimination of nitrogenous wastes as uric acid'
  },
  {
    id: 'chickens-0719',
    replaces: 'imported-chickens-0719',
    topic: 'Anatomy',
    question: "Besides display, what job do a chicken's comb and wattles do?",
    options: ['Help release body heat', 'Store fat for winter', 'Detect sounds', 'Produce scent'],
    answer: 'Help release body heat',
    funFact: 'Blood flowing through them helps the bird cool down in hot weather.',
    source: 'https://en.wikipedia.org/wiki/Dubbing_(poultry)',
    evidence: 'helps the bird lose heat'
  },
  {
    id: 'chickens-0727',
    replaces: 'imported-chickens-0727',
    topic: 'Anatomy',
    question: 'The domestic chicken descends mainly from the red junglefowl. Which bird made smaller contributions?',
    options: ['The grey junglefowl', 'The wild turkey', 'The common pheasant', 'The gray partridge'],
    answer: 'The grey junglefowl',
    funFact: 'Sri Lankan and green junglefowl also contributed a little.',
    source: 'https://en.wikipedia.org/wiki/Red_junglefowl',
    evidence: 'lesser contributions came from the grey junglefowl'
  },

  // Feeding
  {
    id: 'chickens-0684',
    replaces: 'imported-chickens-0684',
    topic: 'Feeding',
    question: 'Layer feed for laying hens is commonly about what percent protein?',
    options: ['16%', '8%', '30%', '45%'],
    answer: '16%',
    funFact: 'Chick starter feeds are higher in protein to support fast growth.',
    source: 'https://www.purinamills.com/backyard-poultry/products/organic-layer-pellets-or-crumbles',
    evidence: '16% protein'
  },
  {
    id: 'chickens-0686',
    replaces: 'imported-chickens-0686',
    topic: 'Feeding',
    question: 'Why do chickens swallow small stones, or grit?',
    options: [
      'To grind food in the gizzard, since they have no teeth',
      'To get calcium for eggshells',
      'To kill worms in the gut',
      'To keep their beaks sharp'
    ],
    answer: 'To grind food in the gizzard, since they have no teeth',
    funFact: 'Birds that forage or eat whole grains need grit; birds on commercial crumble alone need little.',
    source: 'https://en.wikipedia.org/wiki/Gizzard',
    evidence: 'particles of stone or grit'
  },
  {
    id: 'chickens-0687',
    replaces: 'imported-chickens-0687',
    topic: 'Feeding',
    question: 'Why is crushed oyster shell offered to laying hens?',
    options: ['For egg production', 'To grind food in the gizzard', 'To add protein for feathers', 'To freshen their breath'],
    answer: 'For egg production',
    funFact: 'It supplies calcium for shells. Grit is offered separately for digestion.',
    source: 'https://extension.umn.edu/small-scale-poultry/raising-chickens-eggs',
    evidence: 'crushed oyster shell for egg production'
  },
  {
    id: 'chickens-0688',
    replaces: 'imported-chickens-0688',
    topic: 'Feeding',
    question: 'Which of these is toxic to chickens and other birds?',
    options: ['Avocado skins and pits', 'Cooked rice', 'Watermelon', 'Pumpkin seeds'],
    answer: 'Avocado skins and pits',
    funFact: 'Avocado contains persin, and birds are particularly sensitive to it.',
    source: 'https://en.wikipedia.org/wiki/Persin',
    evidence: 'birds, which are particularly sensitive'
  },
  {
    id: 'chickens-0691',
    replaces: 'imported-chickens-0691',
    topic: 'Feeding',
    question: "Why shouldn't scratch grains be a chicken's main food?",
    options: [
      'They do not supply all of a chicken\'s nutritional needs',
      'They are too high in protein',
      'Chickens cannot digest corn',
      'They contain toxic oils'
    ],
    answer: "They do not supply all of a chicken's nutritional needs",
    funFact: 'Scratch is a treat. A balanced prepared feed should be the main diet.',
    source: 'https://extension.umn.edu/small-scale-poultry/raising-chickens-eggs',
    evidence: 'does not supply all their nutritional needs'
  },

  // Housing
  {
    id: 'chickens-0700',
    replaces: 'imported-chickens-0700',
    topic: 'Housing',
    question: 'The University of Minnesota Extension recommends a minimum of how much indoor coop space per bird?',
    options: ['3 to 5 square feet', '1 square foot', '10 to 12 square feet', '20 to 25 square feet'],
    answer: '3 to 5 square feet',
    funFact: 'Crowding raises stress and pecking, so more room is better.',
    source: 'https://extension.umn.edu/small-scale-poultry/raising-chickens-eggs',
    evidence: '3 to 5 square feet of indoor space per bird'
  },
  {
    id: 'chickens-0701',
    replaces: 'imported-chickens-0701',
    topic: 'Housing',
    question: 'Why does a chicken coop need ventilation, even in winter?',
    options: [
      'To control moisture',
      'To keep predators out',
      'To let in more light',
      'To stop eggs freezing'
    ],
    answer: 'To control moisture',
    funFact: 'Damp air from breath and droppings leads to frostbite and respiratory disease.',
    source: 'https://extension.umn.edu/agriculture/animals-and-livestock/poultry/caring-for-chickens-in-cold-weather',
    evidence: 'provide ventilation to control moisture'
  },
  {
    id: 'chickens-0709',
    replaces: 'imported-chickens-0709',
    topic: 'Housing',
    question: 'As temperatures climb toward about what point do chickens start eating and laying less to cope with heat?',
    options: ['85°F (29°C)', '65°F (18°C)', '110°F (43°C)', '50°F (10°C)'],
    answer: '85°F (29°C)',
    funFact: 'Panting and drinking more are signs of heat stress. Shade, airflow and cool water help.',
    source: 'https://extension.umn.edu/agriculture/animals-and-livestock/poultry/preventing-heat-stress-in-poultry',
    evidence: 'temperatures increase towards 85 degrees'
  },

  // Showing and industry
  {
    id: 'chickens-0720',
    replaces: 'imported-chickens-0720',
    topic: 'Showing',
    question: 'Which organization publishes the American Standard of Perfection for poultry breeds?',
    options: ['American Poultry Association', 'American Kennel Club', 'USDA', 'National Chicken Council'],
    answer: 'American Poultry Association',
    funFact: 'Founded in 1873, it is the oldest poultry organization in North America.',
    source: 'https://en.wikipedia.org/wiki/American_Poultry_Association',
    evidence: 'american standard of perfection'
  },
  {
    id: 'chickens-0722',
    replaces: 'imported-chickens-0722',
    topic: 'Showing',
    question: 'Which of these is NOT an APA class for large chickens?',
    options: ['Pacific', 'Mediterranean', 'Asiatic', 'Continental'],
    answer: 'Pacific',
    funFact: 'The six classes are American, Asiatic, Continental, English, Mediterranean, and All Other Standard Breeds.',
    source: 'https://en.wikipedia.org/wiki/Chicken_breeds_recognized_by_the_American_Poultry_Association',
    evidence: 'american, asiatic, continental, english, mediterranean'
  },
  {
    id: 'chickens-0725',
    replaces: 'imported-chickens-0725',
    topic: 'Showing',
    question: 'The National Poultry Improvement Plan was started in 1935 to control which disease?',
    options: ['Pullorum disease', "Marek's disease", 'Avian influenza', 'Coccidiosis'],
    answer: 'Pullorum disease',
    funFact: 'Pullorum is caused by a Salmonella bacterium and mainly kills young chicks. Many breeders join the plan before selling or shipping birds.',
    source: 'https://en.wikipedia.org/wiki/Pullorum_disease',
    evidence: 'national poultry improvement plan was implemented in 1935'
  },
  {
    id: 'chickens-0731',
    replaces: 'imported-chickens-0731',
    topic: 'Showing',
    question: 'What does "straight run" mean when buying chicks?',
    options: [
      'An unsexed mix of males and females',
      'All the chicks are female',
      'All the chicks are from one breed line',
      'The chicks have been vaccinated'
    ],
    answer: 'An unsexed mix of males and females',
    funFact: 'Expect roughly half to be roosters, so have a plan for them.',
    source: 'https://www.post-journal.com/news/community/2021/04/extension-program-recommend-steering-away-from-straight-run-chicks',
    evidence: '50/50 mix of males and females'
  },
  {
    id: 'chickens-0754',
    replaces: 'imported-chickens-0754',
    topic: 'Welfare',
    question: 'Why do some commercial farms trim the beaks of hens?',
    options: [
      'To reduce cannibalism, feather pecking and aggression',
      'To help them eat faster',
      'To stop them laying in the wrong place',
      'To make them easier to sex'
    ],
    answer: 'To reduce cannibalism, feather pecking and aggression',
    funFact: 'Welfare groups criticize the practice, and it is banned in several European countries.',
    source: 'https://en.wikipedia.org/wiki/Debeaking',
    evidence: 'cannibalism, feather pecking and aggression'
  },
  // Added from "Trivia Questions to add to the database.txt" (October 2026), checked the same way.
  {
    id: 'chickens-n01',
    topic: 'Breeds',
    question: 'Which American breed, created in the late 1800s to replace the turkey as a meat bird, is among the heaviest of all chicken breeds?',
    options: ['Jersey Giant', 'Brahma', 'Cochin', 'Orpington'],
    answer: 'Jersey Giant',
    funFact: 'It was created by John and Thomas Black in Burlington County, New Jersey.',
    source: 'https://en.wikipedia.org/wiki/Jersey_Giant',
    evidence: 'with the intent of replacing the turkey'
  },
  {
    id: 'chickens-n02',
    topic: 'Breeds',
    question: 'The Leghorn, a prolific layer of white eggs, comes from which region of Italy?',
    options: ['Tuscany', 'Sicily', 'Lombardy', 'Sardinia'],
    answer: 'Tuscany',
    funFact: 'Hens average about 280 white eggs a year. Birds were shipped to North America from the port of Livorno around 1828.',
    source: 'https://en.wikipedia.org/wiki/Leghorn_chicken',
    evidence: 'italian breed of chicken originating in tuscany'
  },
  {
    id: 'chickens-n03',
    topic: 'Anatomy',
    question: 'In birds, what is the single rear opening shared by the digestive, urinary and reproductive tracts?',
    options: ['Cloaca', 'Crop', 'Gizzard', 'Proventriculus'],
    answer: 'Cloaca',
    funFact: 'Amphibians, reptiles and a few mammals, such as monotremes, have one too.',
    source: 'https://en.wikipedia.org/wiki/Cloaca',
    evidence: 'serves as the only opening for the digestive'
  },
  {
    id: 'chickens-n04',
    topic: 'Eggs',
    question: 'What lets gases pass through a chicken\'s eggshell?',
    options: ['Narrow pores through the shell', 'Gaps in the outer cuticle', 'The yolk membrane', 'A valve in the air cell'],
    answer: 'Narrow pores through the shell',
    funFact: 'The pores run between the shell\'s columns; the cuticle is a final coat over the outside.',
    source: 'https://en.wikipedia.org/wiki/Eggshell',
    evidence: 'narrow pores that traverse the eggshell and allow gaseous exchange'
  },
  {
    id: 'chickens-n05',
    topic: 'Biology',
    question: 'Birds, chickens included, are a group of which kind of dinosaurs?',
    options: ['Theropods', 'Sauropods', 'Ornithopods', 'Ceratopsians'],
    answer: 'Theropods',
    funFact: 'More precisely, birds are maniraptoran theropods that arose in the Mesozoic era.',
    source: 'https://en.wikipedia.org/wiki/Origin_of_birds',
    evidence: 'birds are a group of maniraptoran theropod dinosaurs'
  },
  {
    id: 'chickens-n06',
    topic: 'Biology',
    question: 'Chickens can see lights flicker faster than people can. Their flicker threshold is above what?',
    options: ['100 Hz', '25 Hz', '50 Hz', '10 Hz'],
    answer: '100 Hz',
    funFact: 'Budgerigars and pigeons can too, so a light that looks steady to us may flicker for them.',
    source: 'https://en.wikipedia.org/wiki/Bird_vision',
    evidence: 'budgerigars, chickens and pigeons all have light-flicker thresholds exceeding 100 hz'
  },
  {
    id: 'chickens-n07',
    topic: 'Terms',
    question: 'What is a young male chicken called?',
    options: ['Cockerel', 'Pullet', 'Capon', 'Poult'],
    answer: 'Cockerel',
    funFact: 'A fertile adult male is a cock, or in North America a rooster.',
    source: 'https://en.wikipedia.org/wiki/Chicken',
    evidence: 'cockerel: a young male chicken'
  },
  {
    id: 'chickens-n08',
    topic: 'Terms',
    question: 'What is a young female chicken less than a year old called?',
    options: ['Pullet', 'Cockerel', 'Bantam', 'Poult'],
    answer: 'Pullet',
    funFact: 'In the poultry industry, a pullet is a hen that hasn\'t reached laying age.',
    source: 'https://en.wikipedia.org/wiki/Chicken',
    evidence: 'pullet: a young female chicken less than a year old'
  },
  // Added from "chicken_trivia_master_file.md" (October 2026), checked the same way; disease facts
  // also cross-checked against the Merck Veterinary Manual and breeds against The Livestock Conservancy.
  {
    id: 'chickens-k01',
    topic: 'Breeds',
    question: 'The Wyandotte, an American breed from the 1870s, got its rose comb from which breed?',
    options: ['Spangled Hamburg', 'Dark Brahma', 'Rhode Island Red', 'Leghorn'],
    answer: 'Spangled Hamburg',
    funFact: 'The Dark Brahma supplied its color pattern. The breed is named for the Wyandot people.',
    source: 'https://en.wikipedia.org/wiki/Wyandotte_chicken',
    evidence: 'the hamburg for the rose comb and the brahma for the color pattern'
  },
  {
    id: 'chickens-k02',
    topic: 'Breeds',
    question: 'The crested, bearded Sultan chicken\'s original Turkish name, sarai-tavuk, means what?',
    options: ['Fowls of the sultan', 'Palace guards', 'Snow hens', 'Garden birds'],
    answer: 'Fowls of the sultan',
    funFact: 'Legend says they were kept for ornament in the palace gardens of Ottoman sultans. The breed is now endangered.',
    source: 'https://en.wikipedia.org/wiki/Sultan_chicken',
    evidence: 'the original turkish name of sarai-tavuk'
  },
  {
    id: 'chickens-k03',
    topic: 'Breeds',
    question: 'The Brahma was developed in the US from large feather-legged birds imported from which Chinese port?',
    options: ['Shanghai', 'Canton', 'Hong Kong', 'Tianjin'],
    answer: 'Shanghai',
    funFact: 'It was the main American meat breed from the 1850s until about 1930.',
    source: 'https://en.wikipedia.org/wiki/Brahma_chicken',
    evidence: 'imported in the 1840s from the chinese port of shanghai'
  },
  {
    id: 'chickens-k04',
    topic: 'Breeds',
    question: 'The crested Appenzeller Spitzhauben comes from which country?',
    options: ['Switzerland', 'Austria', 'Germany', 'The Netherlands'],
    answer: 'Switzerland',
    funFact: 'Spitzhauben means "pointed bonnet", after a ceremonial headdress.',
    source: 'https://en.wikipedia.org/wiki/Appenzeller_Spitzhauben',
    evidence: 'originating in the historical appenzell region of switzerland'
  },
  {
    id: 'chickens-k05',
    topic: 'Breeds',
    question: 'Which bantam from Malaysia is the smallest chicken breed in the world?',
    options: ['Serama', 'Sebright', 'Japanese Bantam', 'Rosecomb'],
    answer: 'Serama',
    funFact: 'Seramas stand very upright, with a full breast and tail feathers held vertically.',
    source: 'https://en.wikipedia.org/wiki/Serama',
    evidence: 'it is the smallest breed of chicken in the world'
  },
  {
    id: 'chickens-k06',
    topic: 'Genetics',
    question: 'The Naked Neck\'s bare neck comes from what kind of gene?',
    options: ['A single dominant gene', 'A single recessive gene', 'A sex-linked gene', 'Several genes together'],
    answer: 'A single dominant gene',
    funFact: 'It is also called the Turken, from the mistaken idea that it is a chicken-turkey cross. The gene can reduce heat stress.',
    source: 'https://en.wikipedia.org/wiki/Naked_Neck',
    evidence: 'the trait for a naked neck is a dominant one controlled by one gene'
  },
  {
    id: 'chickens-k07',
    topic: 'Breeds',
    question: 'Which is the only chicken breed that originated in Canada?',
    options: ['Chantecler', 'Buckeye', 'Dominique', 'Wyandotte'],
    answer: 'Chantecler',
    funFact: 'A monk, Wilfrid Châtelain, bred it from 1908 in Oka, Quebec. Its tiny comb and wattles resist frostbite.',
    source: 'https://en.wikipedia.org/wiki/Chantecler_chicken',
    evidence: 'it is the only chicken breed originating in canada'
  },
  {
    id: 'chickens-k08',
    topic: 'Breeds',
    question: 'The Sebright is a "true bantam". What does that mean?',
    options: [
      'It has no large-fowl version',
      'It weighs under one pound',
      'It was bred only for shows',
      'It cannot fly at all'
    ],
    answer: 'It has no large-fowl version',
    funFact: 'Sir John Sebright set out to create a tiny bantam with laced plumage like the laced Polish.',
    source: 'https://en.wikipedia.org/wiki/Sebright_chicken',
    evidence: 'a miniature bird with no corresponding large version'
  },
  {
    id: 'chickens-k09',
    topic: 'Anatomy',
    question: 'What is a chicken\'s crop used for?',
    options: ['Storing food before digestion', 'Grinding food with grit', 'Secreting stomach acid', 'Absorbing water'],
    answer: 'Storing food before digestion',
    funFact: 'Chickens, turkeys, ducks and geese all have a crop; buttonquail do not.',
    source: 'https://en.wikipedia.org/wiki/Crop_(anatomy)',
    evidence: 'which is used for the storage of food before digestion'
  },
  {
    id: 'chickens-k10',
    topic: 'Terms',
    question: 'What is a capon?',
    options: ['A castrated male chicken', 'A hen past laying age', 'A rooster kept for breeding', 'A chicken-pheasant hybrid'],
    answer: 'A castrated male chicken',
    funFact: 'Capon meat is more moist, tender and flavorful than a cockerel\'s.',
    source: 'https://en.wikipedia.org/wiki/Capon',
    evidence: 'is a male chicken that has been castrated or neutered'
  },
  {
    id: 'chickens-k11',
    topic: 'Health',
    question: 'Marek\'s disease is caused by what kind of virus?',
    options: ['An alphaherpesvirus', 'A coronavirus', 'A retrovirus', 'A paramyxovirus'],
    answer: 'An alphaherpesvirus',
    funFact: 'It causes tumors, and its classic form brings paralysis of one or more legs.',
    source: "https://en.wikipedia.org/wiki/Marek%27s_disease",
    evidence: "marek's disease is caused by an alphaherpesvirus"
  },
  {
    id: 'chickens-k12',
    topic: 'Anatomy',
    question: 'What is a bird\'s uropygial (preen) gland for?',
    options: ['Spreading oil over its feathers', 'Releasing an alarm scent', 'Storing water', 'Digesting fat'],
    answer: 'Spreading oil over its feathers',
    funFact: 'It is especially large in waterbirds such as ducks, where the oil helps with waterproofing.',
    source: 'https://en.wikipedia.org/wiki/Uropygial_gland',
    evidence: "used to distribute the gland's oil"
  },
  {
    id: 'chickens-k13',
    topic: 'Genetics',
    question: 'In the ZW sex-determination system of birds, which chromosome pair makes a female?',
    options: ['ZW', 'ZZ', 'XX', 'XY'],
    answer: 'ZW',
    funFact: 'Males are ZZ, so in birds it is the mother whose egg settles the chick\'s sex.',
    source: 'https://en.wikipedia.org/wiki/ZW_sex-determination_system',
    evidence: 'in the zw system, females have a pair of dissimilar zw chromosomes'
  },
  {
    id: 'chickens-k14',
    topic: 'Health',
    question: 'Avian infectious bronchitis is caused by which kind of virus?',
    options: ['A coronavirus', 'An alphaherpesvirus', 'A retrovirus', 'A paramyxovirus'],
    answer: 'A coronavirus',
    funFact: 'It affects the respiratory tract, gut, kidneys and reproductive system; chicks infected early can suffer lasting oviduct damage.',
    source: 'https://en.wikipedia.org/wiki/Avian_infectious_bronchitis_virus',
    evidence: 'is a species of virus from the genus gammacoronavirus that infects birds'
  },
  {
    id: 'chickens-k15',
    topic: 'Anatomy',
    question: 'What does a chicken\'s proventriculus, its glandular stomach, secrete?',
    options: [
      'Hydrochloric acid and digestive enzymes',
      'Bile to break down fat',
      'Mucus to coat swallowed grit',
      'Saliva to soften whole seeds'
    ],
    answer: 'Hydrochloric acid and digestive enzymes',
    funFact: 'Food then moves on to the gizzard to be ground up.',
    source: 'https://en.wikipedia.org/wiki/Proventriculus',
    evidence: 'secrete hydrochloric acid (hcl) and digestive enzymes'
  },
  {
    id: 'chickens-k16',
    topic: 'Health',
    question: 'Which bacterium causes chronic respiratory disease (CRD) in chickens?',
    options: ['Mycoplasma gallisepticum', 'Avibacterium paragallinarum', 'Salmonella Pullorum', 'Pasteurella multocida'],
    answer: 'Mycoplasma gallisepticum',
    funFact: 'Infected birds remain carriers for life, which makes quarantine of new birds important.',
    source: 'https://en.wikipedia.org/wiki/Mycoplasma_gallisepticum',
    evidence: 'it causes chronic respiratory disease (crd) in chickens'
  },
  {
    id: 'chickens-k17',
    topic: 'Health',
    question: 'How deadly can the most virulent (velogenic) strains of Newcastle disease be?',
    options: ['Up to 90% mortality', 'About 1% mortality', 'About 10% mortality', 'No deaths, only fewer eggs'],
    answer: 'Up to 90% mortality',
    funFact: 'The disease is caused by avian paramyxovirus type 1 and has no treatment; vaccines reduce signs but not infection.',
    source: 'https://en.wikipedia.org/wiki/Newcastle_disease',
    evidence: 'spread rapidly, and cause up to 90% mortality'
  },
  {
    id: 'chickens-k18',
    topic: 'Health',
    question: 'Avian leukosis virus, the cause of lymphoid leukosis, is what kind of virus?',
    options: ['A retrovirus', 'A coronavirus', 'An alphaherpesvirus', 'A poxvirus'],
    answer: 'A retrovirus',
    funFact: 'Peyton Rous showed chicken tumors could be passed on by a virus, and won a Nobel Prize for it in 1966.',
    source: 'https://en.wikipedia.org/wiki/Avian_leukosis_virus',
    evidence: 'avian leukosis virus (alv) is a retrovirus that infects chickens'
  },
  {
    id: 'chickens-k19',
    topic: 'Anatomy',
    question: 'The bursa of Fabricius, found only in birds, is needed for the development of which immune cells?',
    options: ['B cells', 'T cells', 'Red blood cells', 'Platelets'],
    answer: 'B cells',
    funFact: 'Mammals generally have no equivalent organ.',
    source: 'https://en.wikipedia.org/wiki/Bursa_of_Fabricius',
    evidence: 'is necessary for b cell (part of the immune system) development in birds'
  },
  {
    id: 'chickens-k20',
    topic: 'Health',
    question: 'Infectious laryngotracheitis is named for severe inflammation of which parts?',
    options: ['The larynx and trachea', 'The crop and gizzard', 'The liver and kidneys', 'The comb and wattles'],
    answer: 'The larynx and trachea',
    funFact: 'It is caused by Gallid herpesvirus 1, and a membrane can form in the windpipe and block it.',
    source: 'https://en.wikipedia.org/wiki/Infectious_laryngotracheitis',
    evidence: 'the name comes from the severe inflammation of the larynx and trachea'
  },
  {
    id: 'chickens-k21',
    topic: 'Health',
    question: 'How is the dry form of fowlpox mainly spread?',
    options: [
      'By biting insects such as mosquitoes',
      'By breathing in infected dust',
      'Through contaminated drinking water',
      'Through eggs from an infected hen'
    ],
    answer: 'By biting insects such as mosquitoes',
    funFact: 'The dry form causes scabs on the comb, wattles and beak; the wet form, caught from dust, affects the mouth and throat.',
    source: 'https://en.wikipedia.org/wiki/Fowlpox',
    evidence: 'the first (dry form) is spread by biting insects (especially mosquitoes)'
  },
  {
    id: 'chickens-k22',
    topic: 'Health',
    question: 'Ascaridia galli, an intestinal parasite of chickens, is the largest what in birds?',
    options: ['Nematode (roundworm)', 'Cestode (tapeworm)', 'Trematode (fluke)', 'Arachnid (mite)'],
    answer: 'Nematode (roundworm)',
    funFact: 'Females can be 72 to 112 mm long, and the worms occasionally turn up inside eggs.',
    source: 'https://en.wikipedia.org/wiki/Ascaridia_galli',
    evidence: 'it is the largest nematode in birds'
  },
  {
    id: 'chickens-k23',
    topic: 'Anatomy',
    question: 'How many working ovaries does a hen usually have?',
    options: ['One, on the left', 'One, on the right', 'Two', 'Four'],
    answer: 'One, on the left',
    funFact: 'Female birds have two ovaries as embryos, but usually only the left one develops.',
    source: 'https://en.wikipedia.org/wiki/Bird_anatomy',
    evidence: 'only one functional ovary (the left one)'
  },
  {
    id: 'chickens-k24',
    topic: 'Anatomy',
    question: 'Many bird bones are hollow. What keeps them strong?',
    options: ['Criss-crossing internal struts', 'Extra layers of calcium', 'Fluid-filled centers', 'Cartilage cores'],
    answer: 'Criss-crossing internal struts',
    funFact: 'These air-filled bones are called pneumatized bones.',
    source: 'https://en.wikipedia.org/wiki/Bird_anatomy',
    evidence: 'hollow (pneumatized) with criss-crossing struts or trusses'
  },
  {
    id: 'chickens-k25',
    topic: 'Eggs',
    question: 'Which part of the oviduct contains the glands that secrete the eggshell?',
    options: ['The uterus (shell gland)', 'The infundibulum', 'The magnum', 'The isthmus'],
    answer: 'The uterus (shell gland)',
    funFact: 'Its thick smooth muscle also pushes the finished egg along.',
    source: 'https://en.wikipedia.org/wiki/Oviduct',
    evidence: 'contains the glands that secrete the egg shell'
  }
];

// Imported questions removed rather than rewritten, with the reason.
export const retiredImportIds = {
  'imported-chickens-0596': 'Merged into chickens-0594 (blue egg genetics).',
  'imported-chickens-0597': 'No reliable source found for the olive-egg cross.',
  'imported-chickens-0598': 'Merged into chickens-0599 (blue and splash genetics).',
  'imported-chickens-0602': 'No source found explaining hen vs rooster barring shade.',
  'imported-chickens-0604': 'Mille Fleur genetics given were inaccurate.',
  'imported-chickens-0605': 'No reliable source found for the pattern definitions.',
  'imported-chickens-0606': 'Chromosome details could not be confirmed.',
  'imported-chickens-0607': "The original described the Id gene's effect backwards.",
  'imported-chickens-0608': 'No reliable source found for comb inheritance.',
  'imported-chickens-0610': 'No reliable source found for the age range.',
  'imported-chickens-0612': 'No reliable source found.',
  'imported-chickens-0616': '"Top" commercial layer is not a stable fact.',
  'imported-chickens-0618': 'List question with several correct answers.',
  'imported-chickens-0621': 'No reliable source found for the cause.',
  'imported-chickens-0622': 'Unclear question with several correct vitamins.',
  'imported-chickens-0623': 'List question with several correct answers.',
  'imported-chickens-0628': 'Sources disagree on the figure.',
  'imported-chickens-0629': 'No reliable source found for the method.',
  'imported-chickens-0630': 'Too vague for a single correct option.',
  'imported-chickens-0631': 'Sources disagree on the timing.',
  'imported-chickens-0632': 'Yes/no question.',
  'imported-chickens-0633': 'Practice varies; no reliable single answer.',
  'imported-chickens-0634': 'Depends on hen and egg size.',
  'imported-chickens-0635': 'List question with several correct answers.',
  'imported-chickens-0638': 'Sources disagree on the age.',
  'imported-chickens-0640': 'Merged into chickens-0639 (protein during molt).',
  'imported-chickens-0643': 'Claim about molt order could not be confirmed.',
  'imported-chickens-0644': 'About wild birds, not chickens.',
  'imported-chickens-0646': 'Merged into chickens-0645 (feather pecking).',
  'imported-chickens-0648': 'Merged into chickens-0645 (feather pecking).',
  'imported-chickens-0649': 'Allopreening is uncommon in chickens.',
  'imported-chickens-0651': 'Could not be confirmed.',
  'imported-chickens-0652': 'No reliable source found.',
  'imported-chickens-0655': 'Merged into chickens-0653 (bantam size).',
  'imported-chickens-0656': 'Original answer was circular.',
  'imported-chickens-0657': 'Claim could not be confirmed.',
  'imported-chickens-0658': 'Too vague for a single correct option.',
  'imported-chickens-0660': 'Lifespan claim could not be confirmed.',
  'imported-chickens-0661': "Merged into chickens-0662 (Marek's vaccine).",
  'imported-chickens-0664': 'No reliable source found.',
  'imported-chickens-0666': 'Merged into chickens-0665 (egg binding).',
  'imported-chickens-0671': 'No reliable source found for the comb claim.',
  'imported-chickens-0675': 'The breed name gives away the answer, and the tail claim could not be confirmed.',
  'imported-chickens-0679': 'The original answer contradicted its own explanation.',
  'imported-chickens-0681': 'Duplicate of the La Fleche comb term question.',
  'imported-chickens-0683': 'Sources give different percentages.',
  'imported-chickens-0689': 'Benefits claimed could not be confirmed.',
  'imported-chickens-0690': 'The 4:1 ratio given is wrong for laying hens.',
  'imported-chickens-0694': 'Merged into chickens-0693 (incubator temperature).',
  'imported-chickens-0695': 'Sources give different humidity ranges.',
  'imported-chickens-0696': 'Sources give different humidity ranges.',
  'imported-chickens-0697': 'Hatch timing varies too much for one answer.',
  'imported-chickens-0702': 'Sources give different measurements.',
  'imported-chickens-0703': 'No reliable source found.',
  'imported-chickens-0704': 'Evidence on cedar bedding is contested.',
  'imported-chickens-0705': 'Merged into chickens-0701 (ventilation).',
  'imported-chickens-0706': 'Merged into chickens-0611 (lighting).',
  'imported-chickens-0707': '"Greatest number of losses" could not be confirmed.',
  'imported-chickens-0708': 'No reliable source found.',
  'imported-chickens-0710': 'List question with several correct answers.',
  'imported-chickens-0712': 'Sources give different heart rates.',
  'imported-chickens-0713': 'No reliable source found.',
  'imported-chickens-0716': 'Sources disagree on the number of air sacs.',
  'imported-chickens-0721': 'Merged into chickens-0720 (APA).',
  'imported-chickens-0723': 'List question with several correct answers.',
  'imported-chickens-0724': 'List question with several correct answers.',
  'imported-chickens-0726': 'Too vague for a single correct option.',
  'imported-chickens-0728': 'Merged into chickens-0727 (chicken ancestry).',
  'imported-chickens-0729': 'No reliable source found.',
  'imported-chickens-0730': 'Population estimates vary widely between sources.',
  'imported-chickens-0732': 'Not a real question; no such rule exists.',
  'imported-chickens-0733': 'Original definition was wrong.',
  'imported-chickens-0735': 'No reliable source found.',
  'imported-chickens-0738': 'Merged with the frizzle question, which was retired.',
  'imported-chickens-0739': 'No reliable source found.',
  'imported-chickens-0741': 'Claim about the speckle "bloom" could not be confirmed.',
  'imported-chickens-0742': 'Merged into chickens-0615 (egg yolk peritonitis).',
  'imported-chickens-0743': 'Low learning value.',
  'imported-chickens-0744': 'Production figures vary between sources.',
  'imported-chickens-0745': 'Too vague for a single correct option.',
  'imported-chickens-0746': 'Merged into chickens-0673 (Dominique).',
  'imported-chickens-0747': 'Low learning value.',
  'imported-chickens-0748': 'Low learning value.',
  'imported-chickens-0750': 'Sources give different weights and ages.',
  'imported-chickens-0753': 'Lifespan figure given was too high.',
  'imported-chickens-0755': 'No reliable source found for the USDA definition.',
  'imported-chickens-0756': 'Statistic changes year to year.',
  'imported-chickens-0757': 'Sources disagree on taste bud counts.',
  'imported-chickens-0758': 'Function claimed is not established.',
  'imported-chickens-0759': 'No reliable source found.',
  'imported-chickens-0760': 'List question with several correct answers.',
  'imported-chickens-0761': 'No reliable source found.'
};
