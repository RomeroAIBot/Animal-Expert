// Hand-checked frog and toad trivia (Amphibians group), November 2026. Topics come from the quiz pages
// the user collected (FunTrivia, QuizLlama, AmphibiaWeb, National Geographic Kids and others); each
// question is reworded and checked against a source page, and its `evidence` phrase must appear there
// (`npm run check:sources -- --category=frogs --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const AMPHIBIAWEB_FACTS = 'https://amphibiaweb.org/amphibian/facts.html';

export const frogQuestions = [
  // Record holders and odd species
  {
    id: 'frogs-001',
    topic: 'Species',
    question: 'Which frog is the largest in the world, reaching about 32 cm long and over 3 kg?',
    options: ['Goliath frog', 'American bullfrog', 'Cane toad', 'African bullfrog'],
    answer: 'Goliath frog',
    funFact: 'It lives in West Africa, in and along fast-flowing rivers in Cameroon and Equatorial Guinea.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the largest frog is the goliath frog'
  },
  {
    id: 'frogs-002',
    topic: 'Species',
    question: 'Which tiny frog, measured at just 7.1 mm long, is the smallest known frog and probably the smallest animal with a backbone?',
    options: ['Brazilian flea toad', 'Gardiner\'s Seychelles frog', 'Mount Iberia frog', 'Spring peeper'],
    answer: 'Brazilian flea toad',
    funFact: 'It took the title from Paedophryne amauensis of Papua New Guinea, which averages 7.7 mm.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the smallest frog species is the brazilian flea toad'
  },
  {
    id: 'frogs-003',
    topic: 'Species',
    question: 'Which frog is the only species known to have no lungs at all, breathing entirely through its skin?',
    options: ['Bornean flat-headed frog', 'Titicaca water frog', 'African clawed frog', 'Hairy frog'],
    answer: 'Bornean flat-headed frog',
    funFact: 'Lungless species exist in all three amphibian orders; among salamanders a whole family of over 400 species is lungless.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the only lungless frog species known is barbourula kalimantanensis'
  },
  {
    id: 'frogs-004',
    topic: 'Species',
    question: 'Glass frogs are named for which feature?',
    options: ['See-through skin that shows their organs', 'Shiny skin that reflects light', 'Brittle legs that snap easily', 'Clear eggs laid on glass-smooth leaves'],
    answer: 'See-through skin that shows their organs',
    funFact: 'The skin is clearest on the underside, and many glass frogs even have green bones.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'many frogs in this family have transparent skin'
  },
  {
    id: 'frogs-005',
    topic: 'Species',
    question: 'The South American paradoxical frog gets its name from what odd fact?',
    options: ['Its tadpoles grow far bigger than the adults', 'It is born on land but lives in water', 'Males lay the eggs instead of females', 'It sings only during droughts'],
    answer: 'Its tadpoles grow far bigger than the adults',
    funFact: 'The tadpoles can reach 22 cm, three to four times the length of the adult frog.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'can grow to three to four times the length of the adult'
  },
  {
    id: 'frogs-006',
    topic: 'Species',
    question: 'The African common reed frog can do what when a population runs short of males?',
    options: ['Change sex from female to male', 'Clone itself without mating', 'Lay eggs that hatch only as males', 'Mate with other frog species'],
    answer: 'Change sex from female to male',
    funFact: 'It lives in forests and savannahs across much of Africa.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'able to change its sex (from female to male)'
  },

  // Parental care
  {
    id: 'frogs-007',
    topic: 'Parental care',
    question: 'Where does a male Darwin\'s frog keep his developing young?',
    options: ['In his vocal sac', 'In a pouch on his back', 'In his stomach', 'Under his front legs'],
    answer: 'In his vocal sac',
    funFact: 'The young stay there until they have turned into small froglets.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'brood their developing young in their vocal sacs'
  },
  {
    id: 'frogs-008',
    topic: 'Parental care',
    question: 'Female gastric-brooding frogs of Australia raised their young in which unusual place?',
    options: ['Their stomachs', 'Their mouths', 'Holes in tree bark', 'Their vocal sacs'],
    answer: 'Their stomachs',
    funFact: 'The mother did not eat at all while the young developed, and could raise over 20 at once.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'brood the developing young in their stomachs'
  },
  {
    id: 'frogs-009',
    topic: 'Parental care',
    question: 'How does the female Surinam toad carry her eggs?',
    options: ['Sunk into the skin of her back', 'In a foam nest on her belly', 'Wrapped around her hind legs', 'Inside her mouth'],
    answer: 'Sunk into the skin of her back',
    funFact: 'Skin grows over the eggs, and months later fully formed froglets climb out.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'where skin grows over them'
  },
  {
    id: 'frogs-010',
    topic: 'Parental care',
    question: 'After carrying her tadpoles to tiny pools in bromeliad plants, what does a female strawberry poison dart frog feed them?',
    options: ['Unfertilised eggs', 'Chewed-up ants', 'Algae she scrapes from leaves', 'Milk from skin glands'],
    answer: 'Unfertilised eggs',
    funFact: 'The rain-filled bromeliad cups make small, predator-free nurseries high in the trees.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the mother feeds them with unfertilized eggs'
  },
  {
    id: 'frogs-011',
    topic: 'Life cycle',
    question: 'Frogs of Pristimantis, the largest frog genus with over 500 species, skip which stage of life?',
    options: ['The tadpole stage', 'The egg stage', 'The juvenile stage', 'The breeding stage'],
    answer: 'The tadpole stage',
    funFact: 'Their eggs are laid on land and hatch straight into tiny froglets.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'bypassing the tadpole stage'
  },

  // Bodies and senses
  {
    id: 'frogs-012',
    topic: 'Biology',
    question: 'Where do most frogs have teeth?',
    options: ['Only on the upper jaw', 'Only on the lower jaw', 'On both jaws', 'Nowhere; no frogs have teeth'],
    answer: 'Only on the upper jaw',
    funFact: 'True toads (family Bufonidae) have no teeth at all; just one South American frog has lower-jaw teeth.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'most frogs have teeth on the upper jaw but none on the lower jaw'
  },
  {
    id: 'frogs-013',
    topic: 'Biology',
    question: 'What is a group of toads called?',
    options: ['A knot', 'A gaggle', 'A pod', 'A parliament'],
    answer: 'A knot',
    funFact: 'A group of toads can also be a nest; a group of frogs can be an army, a chorus or a colony.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'a group of toads can be called a knot or a nest'
  },
  {
    id: 'frogs-014',
    topic: 'Biology',
    question: 'How does the wood frog survive being frozen through the northern winter?',
    options: ['It packs its blood with glucose and urea', 'It shivers to stay above freezing', 'It migrates south each autumn', 'It sheds water until it is fully dry'],
    answer: 'It packs its blood with glucose and urea',
    funFact: 'These natural antifreezes limit ice forming inside its body, so it can thaw out in spring and hop away.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'cryoprotectants (such as glucose and urea in the blood)'
  },
  {
    id: 'frogs-015',
    topic: 'Biology',
    question: 'The frog order, Anura, gets its name from Greek words meaning what?',
    options: ['Without a tail', 'Long jumper', 'Wet skin', 'Two lives'],
    answer: 'Without a tail',
    funFact: 'Adult frogs have no tail, though their tadpoles do.',
    source: wiki('Frog'),
    evidence: "literally 'without tail'"
  },
  {
    id: 'frogs-016',
    topic: 'Biology',
    question: 'Many frogs can take in which two things directly through their skin?',
    options: ['Water and oxygen', 'Food and salt', 'Sunlight and heat', 'Sugar and fat'],
    answer: 'Water and oxygen',
    funFact: 'The skin around the pelvis is especially good at this, but thin skin also loses water easily, so most frogs stay near damp places.',
    source: wiki('Frog'),
    evidence: 'many frogs are able to absorb water and oxygen directly through the skin'
  },
  {
    id: 'frogs-017',
    topic: 'Biology',
    question: 'How do a frog\'s eyes help it eat?',
    options: ['They sink into the head to push food down the throat', 'They spin to track flies in two directions', 'They squirt a fluid that stuns prey', 'They glow to attract insects at night'],
    answer: 'They sink into the head to push food down the throat',
    funFact: 'You can see a frog blink hard as it swallows a large meal.',
    source: wiki('Frog'),
    evidence: 'the eyes assist in the swallowing of food'
  },
  {
    id: 'frogs-018',
    topic: 'Life cycle',
    question: 'What is the mating embrace called, in which a male frog clasps a female while she lays eggs?',
    options: ['Amplexus', 'Ecdysis', 'Estivation', 'Brumation'],
    answer: 'Amplexus',
    funFact: 'Many male frogs grow rough "nuptial pads" on their thumbs to grip the female.',
    source: wiki('Amplexus'),
    evidence: 'a male grasps a female'
  },
  {
    id: 'frogs-019',
    topic: 'Life cycle',
    question: 'What is the gilled, water-dwelling young of a frog or toad called?',
    options: ['A tadpole', 'A nymph', 'An eft', 'A fry'],
    answer: 'A tadpole',
    funFact: 'Tadpoles are also called polliwogs; an eft is the land stage of a newt.',
    source: wiki('Tadpole'),
    evidence: 'is the larval stage in the biological life cycle of an amphibian'
  },

  // Named species
  {
    id: 'frogs-020',
    topic: 'Species',
    question: 'Colombia\'s golden poison frog takes its common name from which colour form?',
    options: ['Yellow', 'Bright red', 'Neon blue', 'Jet black'],
    answer: 'Yellow',
    funFact: 'Despite the name, it also comes in other colour forms, including mint green. Its bright colours warn predators that it is toxic.',
    source: wiki('Golden_poison_frog'),
    evidence: 'the yellow morph is the reason phyllobates terribilis has the common name golden poison frog'
  },
  {
    id: 'frogs-021',
    topic: 'Species',
    question: 'Where do poison dart frogs in the wild get their toxins?',
    options: ['From the ants and mites they eat', 'From poisonous plants they sit on', 'They make them from sunlight', 'From bacteria in pond water'],
    answer: 'From the ants and mites they eat',
    funFact: 'Frogs bred in captivity on other food carry little or no toxin.',
    source: wiki('Poison_dart_frog'),
    evidence: 'sequester the chemicals from arthropod prey items, such as ants, centipedes and mites'
  },
  {
    id: 'frogs-022',
    topic: 'Species',
    question: 'Cane toads were brought to Australia in 1935 to control which pest?',
    options: ['Cane beetles', 'Rabbits', 'Locusts', 'Mice'],
    answer: 'Cane beetles',
    funFact: 'The toads did little against the beetles and spread across northern Australia instead.',
    source: wiki('Cane_toad'),
    evidence: 'the common name of the species is derived from its use against the cane beetle'
  },
  {
    id: 'frogs-023',
    topic: 'Species',
    question: 'What are the large glands behind each of a cane toad\'s eyes called?',
    options: ['Parotoid glands', 'Salivary glands', 'Thyroid glands', 'Adrenal glands'],
    answer: 'Parotoid glands',
    funFact: 'They ooze a milky toxin, so dogs that mouth a cane toad can be seriously poisoned.',
    source: wiki('Cane_toad'),
    evidence: 'a large parotoid gland lies behind each eye'
  },
  {
    id: 'frogs-024',
    topic: 'Species',
    question: 'Which frog is the largest true frog in North America?',
    options: ['American bullfrog', 'Green frog', 'Leopard frog', 'Wood frog'],
    answer: 'American bullfrog',
    funFact: 'Bullfrogs will eat almost anything they can swallow, including other frogs, snakes and small birds.',
    source: wiki('American_bullfrog'),
    evidence: 'the american bullfrog is the largest species of true frog in north america'
  },
  {
    id: 'frogs-025',
    topic: 'Species',
    question: 'Puerto Rico\'s beloved little coquí frog is named after what?',
    options: ['The two-note sound of its call', 'A Taíno word for "tree"', 'The scientist who found it', 'Its reddish-brown colour'],
    answer: 'The two-note sound of its call',
    funFact: 'The males call "co-quí" loudly from dusk until dawn.',
    source: wiki('Common_coquí'),
    evidence: 'the species is named for the loud call the males make at night'
  },
  {
    id: 'frogs-026',
    topic: 'Species',
    question: 'The red-eyed tree frog suddenly flashes its bright red eyes for what reason?',
    options: ['To startle predators', 'To attract insects', 'To cool itself down', 'To signal rain is coming'],
    answer: 'To startle predators',
    funFact: 'The sudden flash can make a predator pause long enough for the frog to leap away.',
    source: wiki('Agalychnis_callidryas'),
    evidence: 'which all serve the purpose of startling predators and allowing the frog time to escape'
  },
  {
    id: 'frogs-027',
    topic: 'Species',
    question: 'In the mid-1900s, which frog was widely used in hospitals for pregnancy tests?',
    options: ['African clawed frog', 'American bullfrog', 'Cane toad', 'Common frog'],
    answer: 'African clawed frog',
    funFact: 'Injected with a woman\'s urine, a female frog would lay eggs within hours if the woman was pregnant.',
    source: wiki('African_clawed_frog'),
    evidence: 'notable for its use in the first widely used method of pregnancy testing'
  },
  {
    id: 'frogs-028',
    topic: 'Species',
    question: 'Spadefoot toads are named for what?',
    options: ['A hard spade on each hind foot for digging', 'Their flat, shovel-shaped heads', 'The spade-shaped mark on their backs', 'Webbing used to paddle through mud'],
    answer: 'A hard spade on each hind foot for digging',
    funFact: 'They dig backwards into soil and can stay buried through long dry spells.',
    source: wiki('Scaphiopodidae'),
    evidence: 'as suggested by their name, these frogs have hard, keratinous'
  },

  // Health and conservation
  {
    id: 'frogs-029',
    topic: 'Health',
    question: 'Chytridiomycosis, a disease behind the decline of frogs worldwide, is caused by what kind of germ?',
    options: ['A fungus', 'A virus', 'A tapeworm', 'A protozoan'],
    answer: 'A fungus',
    funFact: 'The chytrid fungus attacks the skin, which frogs rely on to take in water and salts.',
    source: wiki('Chytridiomycosis'),
    evidence: 'an infectious disease in amphibians, caused by the chytrid fungi'
  }
];
