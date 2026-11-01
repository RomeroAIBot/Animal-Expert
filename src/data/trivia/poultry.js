// Hand-checked turkey, duck, goose and guinea fowl trivia (Livestock group), November 2026. Topics come
// from the user's poultry quiz pages (FunTrivia, the 4-H poultry quiz bowl and others); each question is
// reworded and checked against a source page, and its `evidence` phrase must appear there
// (`npm run check:sources -- --category=poultry --rewritten`). Chickens have their own file.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const poultryQuestions = [
  // Turkeys
  {
    id: 'poultry-001',
    topic: 'Turkeys',
    question: 'Where was the turkey first domesticated, at least 2,000 years ago?',
    options: ['Mesoamerica', 'Turkey', 'China', 'North Africa'],
    answer: 'Mesoamerica',
    funFact: 'Spanish explorers took turkeys from central Mexico to Europe in the 16th century.',
    source: wiki('Domestic_turkey'),
    evidence: 'turkey domestication was thought to have occurred in central mesoamerica at least 2,000 years ago'
  },
  {
    id: 'poultry-002',
    topic: 'Turkeys',
    question: 'Why is the turkey named after the country of Turkey?',
    options: ['It was confused with guinea fowl imported through Turkey', 'It was first bred there', 'Turkish traders brought it from America', 'Its call sounds like the Turkish word for "bird"'],
    answer: 'It was confused with guinea fowl imported through Turkey',
    funFact: 'Its Latin species name, gallopavo, means "chicken peacock".',
    source: wiki('Domestic_turkey'),
    evidence: 'guineafowl, which was imported to england through the country of turkey'
  },
  {
    id: 'poultry-003',
    topic: 'Turkeys',
    question: 'What is the fleshy flap that hangs over a turkey\'s beak called?',
    options: ['The snood', 'The wattle', 'The comb', 'The caruncle'],
    answer: 'The snood',
    funFact: 'The flap under the beak is the wattle. A relaxed turkey\'s snood is pale and short, but it swells when the bird is excited.',
    source: wiki('Domestic_turkey'),
    evidence: 'the fleshy protuberance atop the beak is the snood'
  },
  {
    id: 'poultry-004',
    topic: 'Turkeys',
    question: 'How long do turkey eggs take to hatch?',
    options: ['28 days', '21 days', '14 days', '35 days'],
    answer: '28 days',
    funFact: 'Chicken eggs take about 21 days.',
    source: wiki('Domestic_turkey'),
    evidence: 'after 28 days of incubation'
  },
  {
    id: 'poultry-005',
    topic: 'Turkeys',
    question: 'What is a young turkey called?',
    options: ['A poult', 'A keet', 'A cygnet', 'A squab'],
    answer: 'A poult',
    funFact: 'In commercial farming, newly hatched poults are sorted by sex and sent to grow-out farms.',
    source: wiki('Domestic_turkey'),
    evidence: 'the hatched poults are sexed'
  },
  {
    id: 'poultry-006',
    topic: 'Turkeys',
    question: 'The popular story that Benjamin Franklin wanted the turkey as the US national bird comes from what?',
    options: ['A letter he wrote to his daughter in 1784', 'A speech to Congress', 'A vote at the Continental Congress', 'His autobiography'],
    answer: 'A letter he wrote to his daughter in 1784',
    funFact: 'The letter mainly criticised the Society of the Cincinnati; he never formally proposed the turkey.',
    source: wiki('Wild_turkey'),
    evidence: 'comes from a letter he wrote to his daughter sarah bache on 26 january 1784'
  },

  // Ducks
  {
    id: 'poultry-007',
    topic: 'Ducks',
    question: 'Most domestic ducks are descended from which wild duck?',
    options: ['Mallard', 'Wood duck', 'Teal', 'Eider'],
    answer: 'Mallard',
    funFact: 'A few are domestic Muscovy ducks, a separate species from the Americas.',
    source: wiki('Domestic_duck'),
    evidence: 'domestic ducks (mainly mallards'
  },
  {
    id: 'poultry-008',
    topic: 'Ducks',
    question: 'Which duck breed stands upright like a penguin and runs instead of waddling?',
    options: ['Indian Runner', 'Pekin', 'Rouen', 'Muscovy'],
    answer: 'Indian Runner',
    funFact: 'Despite the name, it was bred on the Indonesian islands of Lombok, Java and Bali.',
    source: wiki('Indian_Runner_duck'),
    evidence: 'they stand erect like penguins and, rather than waddling or flying, they run'
  },
  {
    id: 'poultry-009',
    topic: 'Ducks',
    question: 'Most duck breeds lay about 200 eggs a year. Which breed can lay over 300?',
    options: ['Indian Runner', 'Pekin', 'Muscovy', 'Call duck'],
    answer: 'Indian Runner',
    funFact: 'Domestic ducks can live 8 to 12 years in captivity.',
    source: wiki('Domestic_duck'),
    evidence: 'the indian runner may produce over 300 eggs annually'
  },
  {
    id: 'poultry-010',
    topic: 'Ducks',
    question: 'The white Pekin, the main American meat duck, comes from birds brought to the US from which country?',
    options: ['China', 'Japan', 'India', 'England'],
    answer: 'China',
    funFact: 'The ducks arrived in the 19th century, and the breed is now raised in many countries.',
    source: wiki('American_Pekin'),
    evidence: 'it derives from birds brought to the united states from china in the nineteenth century'
  },
  {
    id: 'poultry-011',
    topic: 'Ducks',
    question: 'The Campbell duck, famous as an egg layer, was developed in which country?',
    options: ['England', 'France', 'The Netherlands', 'Australia'],
    answer: 'England',
    funFact: 'It was bred at Uley in Gloucestershire around 1900; the khaki variety is the best known.',
    source: wiki('Khaki_Campbell'),
    evidence: 'it was developed at uley, in gloucestershire, england'
  },
  {
    id: 'poultry-012',
    topic: 'Ducks',
    question: 'The word "duck" comes from an Old English word meaning what?',
    options: ['Diver', 'Swimmer', 'Quacker', 'Waddler'],
    answer: 'Diver',
    funFact: 'It refers to the way dabbling ducks tip upside down to feed.',
    source: wiki('Duck'),
    evidence: 'the word duck comes from old english dūce \'diver\''
  },

  // Geese
  {
    id: 'poultry-013',
    topic: 'Geese',
    question: 'Domestic geese were bred from the greylag goose and which other wild goose?',
    options: ['Swan goose', 'Canada goose', 'Snow goose', 'Barnacle goose'],
    answer: 'Swan goose',
    funFact: 'Geese first domesticated in eastern Asia, known as Chinese geese, come from the swan goose; those of Europe, North Africa and western Asia come from the greylag.',
    source: wiki('Domestic_goose'),
    evidence: 'from the wild greylag goose (anser anser domesticus) and swan goose'
  },
  {
    id: 'poultry-014',
    topic: 'Geese',
    question: 'What is a male goose called?',
    options: ['A gander', 'A drake', 'A tom', 'A cob'],
    answer: 'A gander',
    funFact: 'Young geese before they can fly are goslings. A male duck is a drake, and a male swan is a cob.',
    source: wiki('Goose'),
    evidence: '"gander" referring to a male'
  },
  {
    id: 'poultry-015',
    topic: 'Geese',
    question: 'A group of geese on the ground is a gaggle. What is a group of geese in flight called?',
    options: ['A skein', 'A herd', 'A flock of wings', 'A raft'],
    answer: 'A skein',
    funFact: 'Geese in flight can also be called a team or a wedge.',
    source: wiki('Goose'),
    evidence: 'when in flight, they are called a skein, a team, or a wedge'
  },
  {
    id: 'poultry-016',
    topic: 'Geese',
    question: 'Why have geese been used to guard property?',
    options: ['They make a loud noise at intruders', 'Their bite is venomous', 'They can see in the dark', 'They scare off foxes by smell'],
    answer: 'They make a loud noise at intruders',
    funFact: 'In the late 1950s, the South Vietnamese air force used flocks of geese to guard parked aircraft at night.',
    source: wiki('Domestic_goose'),
    evidence: 'used flocks of geese to guard their parked aircraft at night due to the noise they would make at intruders'
  },
  {
    id: 'poultry-017',
    topic: 'Geese',
    question: 'The large white Emden goose is named after a town in which country?',
    options: ['Germany', 'Denmark', 'Poland', 'Belgium'],
    answer: 'Germany',
    funFact: 'It may be the oldest goose breed of its region, with roots possibly going back to the 1200s.',
    source: wiki('Embden_goose'),
    evidence: 'it is named for the town of emden in north-western germany'
  },
  {
    id: 'poultry-018',
    topic: 'Geese',
    question: 'The large grey Toulouse goose comes from which country?',
    options: ['France', 'Italy', 'Spain', 'Switzerland'],
    answer: 'France',
    funFact: 'Like most domestic geese, it descends from the wild greylag goose.',
    source: wiki('Toulouse_goose'),
    evidence: 'originally from the area of toulouse in south-western france'
  },

  // Guinea fowl
  {
    id: 'poultry-019',
    topic: 'Guinea fowl',
    question: 'Guinea fowl are native to which continent?',
    options: ['Africa', 'South America', 'Asia', 'Australia'],
    answer: 'Africa',
    funFact: 'They are among the oldest of the chicken-like birds, and farmers value them for eating ticks and other pests.',
    source: wiki('Guineafowl'),
    evidence: 'they are endemic to africa'
  },
  {
    id: 'poultry-020',
    topic: 'Guinea fowl',
    question: 'Guinea fowl are valued on farms for controlling which pests?',
    options: ['Ticks and flies', 'Rats and mice', 'Slugs and snails', 'Weeds and thistles'],
    answer: 'Ticks and flies',
    funFact: 'They also eat locusts and scorpions.',
    source: wiki('Guineafowl'),
    evidence: 'they play a pivotal role in the control of ticks, flies, locusts, scorpions'
  }
];
