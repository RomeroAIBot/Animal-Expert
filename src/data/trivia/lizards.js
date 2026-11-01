// Hand-checked lizard trivia (Reptiles group), November 2026. Topics come from the user's quiz pages
// (FunTrivia, QuizLlama, Quizzy Kid, TriviaChamp and others); each question is reworded and checked
// against a source page, and its `evidence` phrase must appear there
// (`npm run check:sources -- --category=lizards --rewritten`). The tuatara is included because quizzes
// treat it as a lizard look-alike; the question makes clear it is not one.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const lizardQuestions = [
  // Record holders
  {
    id: 'lizards-001',
    topic: 'Species',
    question: 'Which lizard is the largest alive today, with males up to about 3 m long and 150 kg?',
    options: ['Komodo dragon', 'Crocodile monitor', 'Green iguana', 'Gila monster'],
    answer: 'Komodo dragon',
    funFact: 'It lives only on a handful of Indonesian islands, including Komodo, Rinca and Flores.',
    source: wiki('Komodo_dragon'),
    evidence: 'it is the largest extant species of lizard'
  },
  {
    id: 'lizards-002',
    topic: 'Species',
    question: 'The crocodile monitor, one of the longest lizards in the world, is native to which island?',
    options: ['New Guinea', 'Madagascar', 'Borneo', 'Sri Lanka'],
    answer: 'New Guinea',
    funFact: 'Its exceptionally long tail can make up most of its length; verified animals reach about 2.55 m.',
    source: wiki('Crocodile_monitor'),
    evidence: 'is a species of monitor lizard endemic to new guinea'
  },
  {
    id: 'lizards-003',
    topic: 'Species',
    question: 'Roughly how many species of lizard are there?',
    options: ['Over 7,000', 'About 700', 'About 2,000', 'Over 30,000'],
    answer: 'Over 7,000',
    funFact: 'They range from a nano-chameleon about 13.5 mm long to the 3 m Komodo dragon, and live on every continent except Antarctica.',
    source: wiki('Lizard'),
    evidence: 'encompassing over 7,000 species'
  },

  // Defences
  {
    id: 'lizards-004',
    topic: 'Defences',
    question: 'What is it called when a lizard sheds part of its tail to escape a predator?',
    options: ['Autotomy', 'Ecdysis', 'Brumation', 'Thermoregulation'],
    answer: 'Autotomy',
    funFact: 'The dropped tail often keeps wriggling, holding the predator\'s attention while the lizard gets away.',
    source: wiki('Autotomy'),
    evidence: 'in many species the detached tail will continue to wriggle'
  },
  {
    id: 'lizards-005',
    topic: 'Defences',
    question: 'Some horned lizards defend themselves by squirting what from the corners of their eyes?',
    options: ['Blood', 'Venom', 'Tears of salt water', 'A sticky foam'],
    answer: 'Blood',
    funFact: 'The aimed stream can reach about 1.5 m, and it tastes foul to dogs and coyotes.',
    source: wiki('Horned_lizard'),
    evidence: 'squirt an aimed stream of blood from the corners of the eyes'
  },
  {
    id: 'lizards-006',
    topic: 'Defences',
    question: 'Australia\'s thorny devil shows predators a spiny lump on its neck. What is this lump?',
    options: ['A false head', 'A store of venom', 'A fat reserve for drought', 'An extra eye'],
    answer: 'A false head',
    funFact: 'The thorny devil dips its real head so the predator goes for the soft "false head" instead.',
    source: wiki('Thorny_devil'),
    evidence: 'the thorny devil also features a spiny "false head" on the back of its neck'
  },
  {
    id: 'lizards-007',
    topic: 'Biology',
    question: 'How does the thorny devil drink?',
    options: ['Grooves in its skin carry water to its mouth', 'It laps dew with a long tongue', 'It absorbs water through its belly', 'It never drinks, getting water only from ants'],
    answer: 'Grooves in its skin carry water to its mouth',
    funFact: 'Touching damp sand or dew with any part of its body is enough for the water to travel along its scales.',
    source: wiki('Thorny_devil'),
    evidence: 'capillary action transports the water to the mouth'
  },

  // Bodies and senses
  {
    id: 'lizards-008',
    topic: 'Biology',
    question: 'What is unusual about a chameleon\'s eyes?',
    options: ['Each eye can move on its own', 'They have no pupils', 'They see only in black and white', 'They are covered by scales'],
    answer: 'Each eye can move on its own',
    funFact: 'Its brain handles two separate images at once until it locks both eyes on its prey.',
    source: wiki('Chameleon'),
    evidence: 'chameleons\' eyes are independently mobile'
  },
  {
    id: 'lizards-009',
    topic: 'Biology',
    question: 'Most geckos have no eyelids. What covers and protects their eyes instead?',
    options: ['A clear membrane called the brille', 'A layer of tiny scales', 'A thick coat of tears', 'A bony ridge above the eye'],
    answer: 'A clear membrane called the brille',
    funFact: 'Geckos lick the brille clean with their tongues. Leopard geckos and their relatives are the exception, with real eyelids.',
    source: wiki('Gecko'),
    evidence: 'the outer surface of the eyeball has a transparent membrane, the brille'
  },
  {
    id: 'lizards-010',
    topic: 'Biology',
    question: 'Geckos are unusual among lizards because they can do what?',
    options: ['Make chirping and clicking calls', 'Breathe underwater', 'Glide between trees', 'Change sex'],
    answer: 'Make chirping and clicking calls',
    funFact: 'The tokay gecko is known for its loud mating call, which sounds like its name.',
    source: wiki('Gecko'),
    evidence: 'geckos are unique among lizards for their vocalisations'
  },
  {
    id: 'lizards-011',
    topic: 'Biology',
    question: 'Green iguanas have a pale light-sensing spot on the top of the head. What is it called?',
    options: ['The parietal eye', 'The dewlap', 'The tympanum', 'The casque'],
    answer: 'The parietal eye',
    funFact: 'It is also called the third eye; most other lizards have lost this ancient feature.',
    source: wiki('Green_iguana'),
    evidence: 'called the parietal eye (also called the third eye'
  },
  {
    id: 'lizards-012',
    topic: 'Biology',
    question: 'A male Carolina anole flashes a colourful flap of skin under his throat. What is it called?',
    options: ['A dewlap', 'A frill', 'A wattle', 'A crest'],
    answer: 'A dewlap',
    funFact: 'The male\'s dewlap is about three times the size of the female\'s and usually pink.',
    source: wiki('Carolina_anole'),
    evidence: 'the male dewlap (throat fan) is three times the size of the female\'s'
  },
  {
    id: 'lizards-013',
    topic: 'Biology',
    question: 'How do flying dragons (Draco lizards) travel between trees?',
    options: ['They glide on skin wings held out by long ribs', 'They flap feathered forelimbs', 'They swing on their tails', 'They leap using spring-loaded back legs'],
    answer: 'They glide on skin wings held out by long ribs',
    funFact: 'Glides of up to 60 m have been recorded, losing only about 10 m of height.',
    source: wiki('Draco_(lizard)'),
    evidence: 'formed by a support structure from an enlarged set of ribs'
  },

  // Named species
  {
    id: 'lizards-014',
    topic: 'Species',
    question: 'The common basilisk of Central and South America is famous for which skill?',
    options: ['Running across the surface of water', 'Spitting venom at predators', 'Gliding from tree to tree', 'Changing colour to match the sand'],
    answer: 'Running across the surface of water',
    funFact: 'It is also a good climber and swimmer and can stay underwater for up to half an hour.',
    source: wiki('Common_basilisk'),
    evidence: 'most known for its ability to run on water'
  },
  {
    id: 'lizards-015',
    topic: 'Species',
    question: 'Which lizard is the only venomous lizard native to the United States?',
    options: ['Gila monster', 'Chuckwalla', 'Desert iguana', 'Texas horned lizard'],
    answer: 'Gila monster',
    funFact: 'A protein from its venom, exendin-4, led to the GLP-1 medicines now used for type 2 diabetes and weight loss.',
    source: wiki('Gila_monster'),
    evidence: 'it is the only venomous lizard native to the united states'
  },
  {
    id: 'lizards-016',
    topic: 'Species',
    question: 'The marine iguana, found only on the Galápagos Islands, is the only modern lizard that does what?',
    options: ['Feeds in the sea', 'Lives in caves', 'Hunts at night', 'Builds nests'],
    answer: 'Feeds in the sea',
    funFact: 'Algae make up almost all of its diet.',
    source: wiki('Marine_iguana'),
    evidence: 'it is a marine reptile that has the ability to forage in the sea for algae'
  },
  {
    id: 'lizards-017',
    topic: 'Species',
    question: 'In the wild, the leopard gecko, a popular pet, is native to which region?',
    options: ['Dry grasslands and deserts of South Asia', 'Rainforests of Central America', 'Islands of the South Pacific', 'Deserts of Australia'],
    answer: 'Dry grasslands and deserts of South Asia',
    funFact: 'Its range covers Afghanistan, Iran, Pakistan, India and Nepal.',
    source: wiki('Common_leopard_gecko'),
    evidence: 'native primarily to the rocky dry grassland and desert regions of afghanistan, iran, pakistan, india, and nepal'
  },
  {
    id: 'lizards-018',
    topic: 'Species',
    question: 'Where do bearded dragons come from?',
    options: ['Australia', 'Indonesia', 'South Africa', 'Mexico'],
    answer: 'Australia',
    funFact: 'The "beard" is the skin under the throat, which can turn black and puff up.',
    source: wiki('Pogona'),
    evidence: 'they are found throughout much of australia'
  },
  {
    id: 'lizards-019',
    topic: 'Species',
    question: 'The slow worm looks like a snake. Which feature shows it is really a lizard?',
    options: ['It has eyelids it can close', 'It has a forked tongue', 'It has no legs', 'It sheds its skin'],
    answer: 'It has eyelids it can close',
    funFact: 'Snakes cannot blink because their eyelids are fused into a clear scale.',
    source: wiki('Slow_worm'),
    evidence: 'the relatively small eyes have movable, closable eyelids'
  },
  {
    id: 'lizards-020',
    topic: 'Species',
    question: 'Glass lizards, also called glass snakes, got the name because of what?',
    options: ['Their tails break off very easily', 'They are see-through', 'Their scales shine like glass', 'They live in sand that turns to glass'],
    answer: 'Their tails break off very easily',
    funFact: 'They are legless lizards found in North America, Europe, Asia and North Africa.',
    source: wiki('Glass_lizard'),
    evidence: 'their tails easily break or snap off'
  },
  {
    id: 'lizards-021',
    topic: 'Species',
    question: 'The New Mexico whiptail is unusual because the species is made up of what?',
    options: ['Only females', 'Only males', 'Animals that change sex yearly', 'Pairs that mate for life'],
    answer: 'Only females',
    funFact: 'It reproduces by parthenogenesis, without males, and is the state reptile of New Mexico.',
    source: wiki('New_Mexico_whiptail'),
    evidence: 'is a female-only species of lizard'
  },
  {
    id: 'lizards-022',
    topic: 'Species',
    question: 'The tuatara of New Zealand looks like a lizard. What is it really?',
    options: ['The last living member of its own reptile order', 'A legless amphibian that lives on land', 'A young crocodilian before it grows', 'A kind of iguana found only on islands'],
    answer: 'The last living member of its own reptile order',
    funFact: 'Its order, Rhynchocephalia, was once highly diverse. The Māori name means "peaks on the back".',
    source: wiki('Tuatara'),
    evidence: 'it is the only extant member of a distinct lineage'
  }
];
