// Hand-checked goat trivia (Livestock group), from the user's livestock question list (October 2026).
// Same rules as the other category files: each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=goats --rewritten`). Drafted questions were corrected where
// the source disagreed, and dropped where no checkable source supports them or they repeat a sheep question.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const merck = (page) => `https://www.merckvetmanual.com/special-subjects/reference-guides/${page}`;

export const goatQuestions = [
  // Breeds
  {
    id: 'goats-114',
    topic: 'Breeds',
    question: 'Which large dairy goat, derived from goats of the French Alps, is the only erect-eared breed accepted in all colours?',
    options: ['Alpine', 'Saanen', 'Toggenburg', 'Oberhasli'],
    answer: 'Alpine',
    funFact: 'It is known for being hardy and adaptable to many climates.',
    source: wiki('French_Alpine'),
    evidence: 'it is the only breed with erect ears that comes in all colors and combinations of colors'
  },
  {
    id: 'goats-116',
    topic: 'Breeds',
    question: 'Which white Swiss dairy breed is the largest Swiss goat and the most productive milk goat of Switzerland?',
    options: ['Saanen', 'Nubian', 'LaMancha', 'Oberhasli'],
    answer: 'Saanen',
    funFact: 'It is not well suited to extensive management and is usually raised intensively.',
    source: wiki('Saanen_goat'),
    evidence: 'the saanen is the largest breed of swiss goat'
  },
  {
    id: 'goats-118',
    topic: 'Breeds',
    question: 'Which British dairy breed has long, pendulous lop ears and a markedly convex face?',
    options: ['Anglo-Nubian', 'Toggenburg', 'Saanen', 'Nigerian Dwarf'],
    answer: 'Anglo-Nubian',
    funFact: 'It was bred from British goats and lop-eared goats from India, the Middle East and North Africa.',
    source: wiki('Nubian_goat'),
    evidence: 'a markedly convex facial profile, and long pendulous lop ears'
  },
  {
    id: 'goats-120',
    topic: 'Breeds',
    question: 'Which American dairy breed, developed by Eula Fay Frey in California and Oregon, is known for tiny "gopher" or "elf" ears?',
    options: ['LaMancha', 'Nubian', 'Pygmy', 'Oberhasli'],
    answer: 'LaMancha',
    funFact: 'Short gopher ears sit closest to the head.',
    source: wiki('Lamancha_goat'),
    evidence: 'short gopher ears were closest to the head'
  },
  {
    id: 'goats-122',
    topic: 'Breeds',
    question: 'Which miniature American dairy breed descends from the West African Dwarf group and gives milk averaging 6.5% butterfat?',
    options: ['Nigerian Dwarf', 'Pygmy', 'Kinder', 'Mini Nubian'],
    answer: 'Nigerian Dwarf',
    funFact: 'Its ancestors were brought to the United States for zoos between about 1930 and 1960.',
    source: wiki('Nigerian_Dwarf_goat'),
    evidence: 'averaging 6.5% and 3.9% respectively'
  },
  {
    id: 'goats-124',
    topic: 'Breeds',
    question: 'Which dairy goat is bay with black markings, including two black facial stripes and a black dorsal stripe?',
    options: ['Oberhasli', 'Toggenburg', 'Alpine', 'Saanen'],
    answer: 'Oberhasli',
    funFact: 'All purebred Oberhasli in the US descend from five goats imported from Switzerland in 1936.',
    source: wiki('Oberhasli_goat'),
    evidence: 'the coat is bay or mid-brown, with black markings'
  },
  {
    id: 'goats-126',
    topic: 'Breeds',
    question: 'Which South African meat goat is bred for a white body with a red-brown head?',
    options: ['Boer', 'Kiko', 'Savanna', 'Kalahari Red'],
    answer: 'Boer',
    funFact: 'Selective breeding began around 1930, first for foraging ability and meat.',
    source: wiki('Boer_goat'),
    evidence: 'the white body with red-brown head that now characterises the breed'
  },
  {
    id: 'goats-128',
    topic: 'Breeds',
    question: 'Which New Zealand meat goat, whose name is the Māori word for meat, came from feral goats crossed with dairy bucks?',
    options: ['Kiko', 'Boer', 'Spanish', 'Savanna'],
    answer: 'Kiko',
    funFact: 'It was bred in the 1980s for fast growth and survival in hill-country pasture.',
    source: wiki('Kiko_goat'),
    evidence: 'cross-bred local feral goats with imported dairy goat bucks'
  },
  {
    id: 'goats-131',
    topic: 'Breeds',
    question: 'Which Swiss dairy goat ranges from light brown to mouse grey, with white markings on the face, lower legs and tail?',
    options: ['Toggenburg', 'Oberhasli', 'Saanen', 'Alpine'],
    answer: 'Toggenburg',
    funFact: 'Its herd-book was started in 1890.',
    source: wiki('Toggenburg_goat'),
    evidence: 'coat colour ranges from light brown to mouse grey'
  },
  {
    id: 'goats-133',
    topic: 'Breeds',
    question: 'Which Turkish breed produces the lustrous fibre called mohair?',
    options: ['Angora', 'Cashmere', 'Pygora', 'Kilis'],
    answer: 'Angora',
    funFact: 'It is also called the Ankara, after the Turkish city.',
    source: wiki('Angora_goat'),
    evidence: 'it produces the lustrous fibre known as mohair'
  },
  {
    id: 'goats-136',
    topic: 'Breeds',
    question: 'Which American breed, used for meat and brush clearing, descends from goats brought by the conquistadores?',
    options: ['Spanish', 'Boer', 'Kiko', 'Myotonic'],
    answer: 'Spanish',
    funFact: 'It and its crosses are also called brush, scrub or woods goats.',
    source: wiki('Spanish_goat'),
    evidence: 'brought to the americas in the sixteenth century by the conquistadores'
  },
  {
    id: 'goats-138',
    topic: 'Breeds',
    question: 'Which South African meat goat is mostly white, with black skin and hooves?',
    options: ['Savanna', 'Boer', 'Kalahari Red', 'Saanen'],
    answer: 'Savanna',
    funFact: 'White is a dominant trait in the breed, so other colours can still crop up.',
    source: wiki('Savanna_goat'),
    evidence: 'most animals are white (with black skin and hooves)'
  },
  {
    id: 'goats-142',
    topic: 'Breeds',
    question: 'Which South African meat goat\'s red coat helps protect it against sunlight?',
    options: ['Kalahari Red', 'Boer', 'Savanna', 'Kiko'],
    answer: 'Kalahari Red',
    funFact: 'Its name comes from its coat and the Kalahari Desert.',
    source: wiki('Kalahari_Red'),
    evidence: 'having their red coats as a means of protection against sunlight'
  },
  {
    id: 'goats-129',
    topic: 'Breeds',
    question: 'The "fainting" of the Myotonic goat is caused by an inherited disorder of which kind of channel in its muscles?',
    options: ['A chloride channel', 'A sodium channel', 'A calcium channel', 'A potassium channel'],
    answer: 'A chloride channel',
    funFact: 'The goats may stiffen or fall over when excited or startled.',
    source: wiki('Myotonic_goat'),
    evidence: 'caused by an inherited disorder of a chloride channel in the muscles'
  },

  // Health
  {
    id: 'goats-117',
    topic: 'Health',
    question: 'How is caprine arthritis encephalitis usually passed to goat kids?',
    options: ['Through colostrum or milk from infected goats', 'Through tick bites', 'Through contaminated hay', 'Through shearing equipment'],
    answer: 'Through colostrum or milk from infected goats',
    funFact: 'Adult goats develop arthritis, while kids develop a nervous-system disease.',
    source: wiki('Caprine_arthritis_encephalitis'),
    evidence: 'spread to goat kids when they drink colostrum or milk from infected goats'
  },
  {
    id: 'goats-125',
    topic: 'Health',
    question: 'Contagious caprine pleuropneumonia, with very high death rates in goats, is caused by which bacterium?',
    options: ['Mycoplasma capricolum subsp. capripneumoniae', 'Mycoplasma hyopneumoniae', 'Corynebacterium pseudotuberculosis', 'Dichelobacter nodosus'],
    answer: 'Mycoplasma capricolum subsp. capripneumoniae',
    funFact: 'Its lung damage is confined to the lungs and the lining around them.',
    source: wiki('Contagious_caprine_pleuropneumonia'),
    evidence: 'isolation of m. capricolum subsp. capripneumoniae from clinical samples is the only way to definitively diagnose'
  },
  {
    id: 'goats-134',
    topic: 'Health',
    question: 'Polioencephalomalacia, a brain disease of goats and other ruminants, is linked to a shortage of which vitamin?',
    options: ['Thiamine (vitamin B1)', 'Retinol (vitamin A)', 'Calciferol (vitamin D)', 'Tocopherol (vitamin E)'],
    answer: 'Thiamine (vitamin B1)',
    funFact: 'High sulfur intake has also been linked to it.',
    source: wiki('Polioencephalomalacia'),
    evidence: 'one of which is thiamine depletion in the body'
  },

  // Fibre and husbandry
  {
    id: 'goats-140',
    topic: 'Husbandry',
    question: 'Cashmere comes from which part of a goat\'s coat?',
    options: ['The fine, downy winter undercoat', 'The coarse outer guard hair', 'The beard', 'The summer coat'],
    answer: 'The fine, downy winter undercoat',
    funFact: 'Most goat breeds grow this two-coated fleece; cashmere breeds are selected for more and better down.',
    source: wiki('Cashmere_goat'),
    evidence: "the goat's fine, soft, downy, winter undercoat"
  },
  {
    id: 'goats-149',
    topic: 'Husbandry',
    question: 'In modern English, what is a male goat called?',
    options: ['Buck', 'Ram', 'Boar', 'Bull'],
    answer: 'Buck',
    funFact: 'Females are does, castrated males are wethers, and "billy" and "nanny" date from the 1700s and 1800s.',
    source: wiki('Goat'),
    evidence: 'modern english buck'
  },

  // Biology
  {
    id: 'goats-115',
    topic: 'Biology',
    question: 'About how long is a goat\'s pregnancy?',
    options: ['150 days', '114 days', '210 days', '283 days'],
    answer: '150 days',
    funFact: 'Twins are the usual result, with single and triplet births also common.',
    source: wiki('Goat'),
    evidence: 'gestation length is approximately 150 days'
  },
  {
    id: 'goats-146',
    topic: 'Biology',
    question: 'How do goats carry their short tails, unlike sheep?',
    options: ['Held upwards', 'Hanging down', 'Curled to one side', 'Tucked between the legs'],
    answer: 'Held upwards',
    funFact: 'Sheep tails hang down even when short or docked.',
    source: wiki('Goat'),
    evidence: 'while the short tails of goats are held upwards'
  },
  {
    id: 'goats-130',
    topic: 'Biology',
    question: 'What is a goat\'s normal rectal temperature range?',
    options: ['101.3 to 103.5 °F', '98.0 to 99.5 °F', '99.0 to 100.6 °F', '105.0 to 109.4 °F'],
    answer: '101.3 to 103.5 °F',
    funFact: 'That is 38.5 to 39.7 °C.',
    source: merck('normal-rectal-temperature-ranges'),
    evidence: 'goat 38.5-39.7 101.3-103.5'
  },

  // Added November 2026 from the user's livestock quiz pages (FunTrivia, 4-H), checked the same way.
  {
    id: 'goats-n01',
    topic: 'Biology',
    question: 'Which goats can grow beards?',
    options: ['Both males and females', 'Only males', 'Only females', 'Only goats over five years old'],
    answer: 'Both males and females',
    funFact: 'Many goats, especially dairy and pygmy goats, also have wattles: one dangling from each side of the neck.',
    source: wiki('Goat'),
    evidence: 'both male and female goats may have beards'
  },
  {
    id: 'goats-n02',
    topic: 'Breeds',
    question: 'The Zalawadi goat, kept for milk, meat and fibre, comes from which Indian state?',
    options: ['Gujarat', 'Kerala', 'Punjab', 'Assam'],
    answer: 'Gujarat',
    funFact: 'It comes from the Surendranagar and Rajkot regions and is also known locally as the Tara bakari.',
    source: wiki('Zalawadi'),
    evidence: 'from the surendranagar and rajkot regions of gujarat in india'
  },

  // Added November 2026 from the user's beginner livestock and chicken list, checked the same way.
  {
    id: 'goats-n03',
    topic: 'Husbandry',
    question: 'What is a baby goat called?',
    options: ['Kid', 'Calf', 'Fawn', 'Pup'],
    answer: 'Kid',
    funFact: 'The word comes from a Scandinavian language, such as Old Norse.',
    source: wiki('Goat'),
    evidence: 'juvenile goats are called kids'
  },
  {
    id: 'goats-n04',
    topic: 'Husbandry',
    question: 'What is the word for a goat giving birth?',
    options: ['Kidding', 'Lambing', 'Farrowing', 'Calving'],
    answer: 'Kidding',
    funFact: 'Twins are the usual result, with single and triplet births also common.',
    source: wiki('Goat'),
    evidence: 'birthing, known as kidding'
  },
  {
    id: 'goats-n05',
    topic: 'Husbandry',
    question: 'What is an adult female goat called?',
    options: ['Doe or nanny', 'Buck or billy', 'Sow or gilt', 'Ewe or lamb'],
    answer: 'Doe or nanny',
    funFact: 'Adult males are called bucks or billies.',
    source: wiki('Goat'),
    evidence: 'nanny goat (adult female)'
  },
  {
    id: 'goats-n06',
    topic: 'Biology',
    question: 'Goats are the only ruminant to regularly do what?',
    options: ['Climb trees', 'Swim across rivers', 'Dig burrows', 'Hunt small animals'],
    answer: 'Climb trees',
    funFact: 'They are so agile and good at balancing that they are notorious for escaping their pens.',
    source: wiki('Goat'),
    evidence: 'the only ruminant to regularly climb trees'
  }
];
