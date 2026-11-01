// Hand-checked salamander and newt trivia (Amphibians group), November 2026. Same rules as frogs.js:
// topics from the user's quiz pages, reworded, and each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=salamanders --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const AMPHIBIAWEB_FACTS = 'https://amphibiaweb.org/amphibian/facts.html';

export const salamanderQuestions = [
  // Record holders
  {
    id: 'salamanders-001',
    topic: 'Species',
    question: 'Which animal is the largest amphibian in the world, reaching up to 1.8 m long?',
    options: ['Chinese giant salamander', 'Hellbender', 'Goliath frog', 'Axolotl'],
    answer: 'Chinese giant salamander',
    funFact: 'One animal 1.15 m long weighed about 25 pounds.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the largest amphibian (and salamander) in the world is the chinese giant salamander'
  },
  {
    id: 'salamanders-002',
    topic: 'Species',
    question: 'Which amphibian is probably the longest-lived, with captive animals living over 70 years?',
    options: ['The olm', 'The axolotl', 'The cane toad', 'The fire salamander'],
    answer: 'The olm',
    funFact: 'Its predicted maximum lifespan is over a century.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the longest living amphibian is probably the olm'
  },
  {
    id: 'salamanders-003',
    topic: 'Species',
    question: 'The blind, cave-dwelling olm lives only in the underground waters of which mountain range?',
    options: ['The Dinaric Alps', 'The Pyrenees', 'The Carpathians', 'The Caucasus'],
    answer: 'The Dinaric Alps',
    funFact: 'It eats, sleeps and breeds entirely underwater in limestone caves of south-eastern Europe.',
    source: wiki('Olm'),
    evidence: 'living in caves found in the dinaric alps'
  },
  {
    id: 'salamanders-004',
    topic: 'Species',
    question: 'Thorius arboreus, probably the smallest salamander, comes from which country?',
    options: ['Mexico', 'Brazil', 'Japan', 'Madagascar'],
    answer: 'Mexico',
    funFact: 'The largest adult ever found was a female just 20 mm from snout to vent.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'oaxaca is the smallest species'
  },
  {
    id: 'salamanders-005',
    topic: 'Species',
    question: 'The salamander living at the highest elevation is found above 5,000 m on which volcano?',
    options: ['Pico de Orizaba', 'Mount Kilimanjaro', 'Mount Fuji', 'Mount Etna'],
    answer: 'Pico de Orizaba',
    funFact: 'Most amphibians stop at around 4,000 m; very few frogs or salamanders live higher.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'above 5,000 meters on the volcano pico de orizaba'
  },
  {
    id: 'salamanders-006',
    topic: 'Behaviour',
    question: 'When its rock is lifted, the Mount Lyell salamander escapes in what unusual way?',
    options: ['It curls into a ball and rolls downhill', 'It squirts a cloud of foul mucus', 'It drops its tail and freezes', 'It leaps into the nearest stream'],
    answer: 'It curls into a ball and rolls downhill',
    funFact: 'It lives under rocks on steep slopes of loose stone in California\'s Sierra Nevada.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the salamanders curl into a ball and roll away'
  },

  // Biology
  {
    id: 'salamanders-007',
    topic: 'Biology',
    question: 'The largest salamander family, Plethodontidae, with over 400 species, has which surprising trait?',
    options: ['They have no lungs', 'They have no legs', 'They lay eggs only in trees', 'They are all venomous'],
    answer: 'They have no lungs',
    funFact: 'These salamanders breathe entirely through their moist skin and the lining of the mouth.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the largest family of salamanders, with over 400 species, is entirely lungless'
  },
  {
    id: 'salamanders-008',
    topic: 'Biology',
    question: 'What is the land-dwelling juvenile stage of a newt called?',
    options: ['An eft', 'A tadpole', 'A nymph', 'A fingerling'],
    answer: 'An eft',
    funFact: 'All newts are salamanders, but not all salamanders are newts.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'the word "eft" is used to describe the terrestrial juvenile stage'
  },
  {
    id: 'salamanders-009',
    topic: 'Biology',
    question: 'What is a group of salamanders called?',
    options: ['A band', 'A knot', 'A herd', 'A swarm'],
    answer: 'A band',
    funFact: 'A group of toads is a knot, and a group of frogs can be an army.',
    source: AMPHIBIAWEB_FACTS,
    evidence: 'a group of salamanders can be called a band'
  },
  {
    id: 'salamanders-010',
    topic: 'Biology',
    question: 'Salamanders are famous for being able to do what after an injury?',
    options: ['Regrow lost limbs', 'Change their sex', 'Grow a second head', 'Harden their skin into scales'],
    answer: 'Regrow lost limbs',
    funFact: 'They can also regrow tails and parts of other organs.',
    source: wiki('Salamander'),
    evidence: 'capable of regenerating lost limbs as well as other damaged parts'
  },

  // Named species
  {
    id: 'salamanders-011',
    topic: 'Species',
    question: 'The axolotl keeps its feathery gills and stays in the water as an adult. What is this kind of development called?',
    options: ['Neoteny', 'Metamorphosis', 'Hibernation', 'Parthenogenesis'],
    answer: 'Neoteny',
    funFact: 'It reaches adulthood without going through the metamorphosis most salamanders do.',
    source: wiki('Axolotl'),
    evidence: 'this is a type of neoteny'
  },
  {
    id: 'salamanders-012',
    topic: 'Species',
    question: 'In the wild, the axolotl comes from the lakes of Xochimilco and Chalco in which country?',
    options: ['Mexico', 'Peru', 'Cuba', 'Colombia'],
    answer: 'Mexico',
    funFact: 'Draining of those lakes, begun by the Aztecs, has left very few axolotls in the wild.',
    source: wiki('Axolotl'),
    evidence: 'the axolotl is native to the freshwater lakes of xochimilco and chalco in the valley of mexico'
  },
  {
    id: 'salamanders-013',
    topic: 'Species',
    question: 'The rough-skinned newt of western North America defends itself with which powerful toxin?',
    options: ['Tetrodotoxin', 'Batrachotoxin', 'Bufotoxin', 'Cyanide'],
    answer: 'Tetrodotoxin',
    funFact: 'It is the same nerve toxin found in pufferfish. Some garter snakes have evolved resistance and can eat the newts.',
    source: wiki('Rough-skinned_newt'),
    evidence: 'the newt produces a neurotoxin called tetrodotoxin'
  },
  {
    id: 'salamanders-014',
    topic: 'Species',
    question: 'Which large aquatic salamander of the eastern United States is also nicknamed the "snot otter"?',
    options: ['Hellbender', 'Mudpuppy', 'Tiger salamander', 'Greater siren'],
    answer: 'Hellbender',
    funFact: 'It breathes mainly through the loose, wrinkled folds of skin along its sides.',
    source: wiki('Hellbender'),
    evidence: 'other vernacular names include snot otter'
  },
  {
    id: 'salamanders-015',
    topic: 'Species',
    question: 'Which brightly coloured stage does the eastern newt pass through on land?',
    options: ['The red eft', 'The blue morph', 'The golden juvenile', 'The black larva'],
    answer: 'The red eft',
    funFact: 'Eastern newts have three stages: a gilled larva in the pond, the red eft on land, and an adult back in the water.',
    source: wiki('Eastern_newt'),
    evidence: 'the striking bright orange juvenile stage, which is land-dwelling, is known as a red eft'
  },
  {
    id: 'salamanders-016',
    topic: 'Species',
    question: 'The fire salamander warns predators with which colours?',
    options: ['Black with yellow spots or stripes', 'Bright red with white bands', 'Blue with orange spots', 'Plain green with a red belly'],
    answer: 'Black with yellow spots or stripes',
    funFact: 'Its skin glands produce toxins that can make predators sick.',
    source: wiki('Fire_salamander'),
    evidence: 'it is black with yellow spots or stripes to a varying degree'
  },
  {
    id: 'salamanders-017',
    topic: 'Species',
    question: 'The mudpuppy, an aquatic salamander of North America, keeps which feature its whole life?',
    options: ['Bushy external gills', 'A tadpole tail fin only', 'Webbed, duck-like feet', 'A hard, scaly skin'],
    answer: 'Bushy external gills',
    funFact: 'Its gills are larger and bushier in murky, low-oxygen water.',
    source: wiki('Common_mudpuppy'),
    evidence: 'it goes through paedomorphosis and retains its external gills'
  },
  {
    id: 'salamanders-018',
    topic: 'Species',
    question: 'Which European newt is so strictly protected that catching or disturbing it is banned in most European countries?',
    options: ['Great crested newt', 'Smooth newt', 'Alpine newt', 'Palmate newt'],
    answer: 'Great crested newt',
    funFact: 'It is a large newt, also called the northern crested newt or warty newt; its numbers are falling as ponds are lost.',
    source: wiki('Great_crested_newt'),
    evidence: 'its capture, disturbance, killing or trade, as well as the destruction of its habitats, are prohibited in most european countries'
  }
];
