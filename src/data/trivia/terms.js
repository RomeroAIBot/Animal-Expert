// Hand-checked vocabulary questions. These replace the old built-in term bank, whose wrong
// options were drawn at random from other terms. Same rules as the category files: the
// `evidence` phrase must appear on the source page (`npm run check:sources -- --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const termQuestions = [
  // Snakes
  {
    id: 'term-snakes-incomplete-dominance',
    category: 'snakes',
    topic: 'Genetics',
    question: 'Reptile breeders often call morphs like the Mojave "co-dominant." What is the correct genetics term for that kind of inheritance?',
    options: ['Incomplete dominance', 'Codominance', 'Recessive inheritance', 'Sex-linked inheritance'],
    answer: 'Incomplete dominance',
    funFact: 'With incomplete dominance, one copy of a gene variant has a partial effect and two copies a stronger one.',
    source: wiki('Dominance_(genetics)'),
    evidence: 'or occasionally incorrectly co-dominance in reptile genetics'
  },
  {
    id: 'term-snakes-homozygous',
    category: 'snakes',
    topic: 'Genetics',
    question: 'What is a genotype with two identical alleles at a given locus called?',
    options: ['Homozygous', 'Heterozygous', 'Hemizygous', 'Polygenic'],
    answer: 'Homozygous',
    funFact: 'A recessive morph such as Piebald only shows when the snake is homozygous for it.',
    source: wiki('Zygosity'),
    evidence: 'homozygous describes a genotype consisting of two identical alleles at a given locus'
  },
  {
    id: 'term-snakes-fossorial',
    category: 'snakes',
    topic: 'Behavior',
    question: 'What is an animal adapted to digging and living mainly underground called?',
    options: ['Fossorial', 'Arboreal', 'Terrestrial', 'Semi-aquatic'],
    answer: 'Fossorial',
    funFact: 'The word comes from the Latin fossor, "digger."',
    source: wiki('Fossorial'),
    evidence: 'is one that is adapted to digging and which lives primarily'
  },
  {
    id: 'term-snakes-arboreal',
    category: 'snakes',
    topic: 'Behavior',
    question: 'Green tree pythons spend most of their lives off the ground. What is movement through trees called?',
    options: ['Arboreal locomotion', 'Fossorial locomotion', 'Lateral undulation', 'Sidewinding'],
    answer: 'Arboreal locomotion',
    funFact: 'Arboreal snakes need tall enclosures with branches rather than floor space.',
    source: wiki('Arboreal_locomotion'),
    evidence: 'arboreal locomotion is the locomotion of animals in trees'
  },

  // Chickens
  {
    id: 'term-chickens-pecking-order',
    category: 'chickens',
    topic: 'Behavior',
    question: 'Who first described the "pecking order" in birds, in 1921?',
    options: ['Thorleif Schjelderup-Ebbe', 'Konrad Lorenz', 'Niko Tinbergen', 'Karl von Frisch'],
    answer: 'Thorleif Schjelderup-Ebbe',
    funFact: 'Scientists now call it a dominance hierarchy.',
    source: wiki('Dominance_hierarchy'),
    evidence: 'was described in birds by thorleif schjelderup-ebbe in 1921'
  },
  {
    id: 'term-chickens-autosexing',
    category: 'chickens',
    topic: 'Genetics',
    question: 'In an auto-sexing chicken breed, how can you tell males from females?',
    options: ['By the chicks\' down color and markings at hatch', 'By comb size at hatch', 'Only with a DNA test', 'By leg color at eight weeks'],
    answer: 'By the chicks\' down color and markings at hatch',
    funFact: 'Some breeds of goose and domestic pigeon are auto-sexing too.',
    source: wiki('Auto-sexing'),
    evidence: 'the sex of newly-hatched chicks can be determined from the colour'
  },
  {
    id: 'term-chickens-cambar',
    category: 'chickens',
    topic: 'Genetics',
    question: 'Who created the first auto-sexing chicken breed, the Cambar?',
    options: ['Reginald Punnett', 'Gregor Mendel', 'William Bateson', 'Charles Darwin'],
    answer: 'Reginald Punnett',
    funFact: 'Punnett, of Punnett square fame, did the work at the Genetical Institute in Cambridge.',
    source: wiki('Auto-sexing'),
    evidence: 'who created the first auto-sexing chicken breed, the cambar'
  },
  {
    id: 'term-chickens-dust-bathing',
    category: 'chickens',
    topic: 'Behavior',
    question: 'What is the likely purpose of dust bathing?',
    options: ['Removing parasites from feathers and skin', 'Marking territory', 'Attracting a mate', 'Wearing down the claws'],
    answer: 'Removing parasites from feathers and skin',
    funFact: 'Many birds and mammals dust-bathe, not just chickens.',
    source: wiki('Dust_bathing'),
    evidence: 'with the likely purpose of removing parasites from fur, feathers or skin'
  },
  {
    id: 'term-chickens-v-comb',
    category: 'chickens',
    topic: 'Anatomy',
    question: 'The horn comb or V-comb, with two spikes in a V shape, is seen in which breeds?',
    options: ['Crèvecœur, La Flèche and Sultan', 'Hamburg and Wyandotte', 'Araucana and Brahma', 'Malay and Silkie'],
    answer: 'Crèvecœur, La Flèche and Sultan',
    funFact: 'Hamburgs and Wyandottes have rose combs; Araucanas have pea combs.',
    source: wiki('Comb_(anatomy)'),
    evidence: 'as seen in breeds such as the crèvecœur, la flèche and sultan'
  },
  {
    id: 'term-chickens-pea-comb',
    category: 'chickens',
    topic: 'Anatomy',
    question: 'Which comb type looks like three small single combs in a row?',
    options: ['Pea comb', 'Rose comb', 'V-comb', 'Buttercup comb'],
    answer: 'Pea comb',
    funFact: 'It is also called a triple comb.',
    source: wiki('Comb_(anatomy)'),
    evidence: 'somewhat like three small single combs in a row'
  },

  // Cats
  {
    id: 'term-cat-tuxedo',
    category: 'cat',
    topic: 'Coat',
    question: 'A "tuxedo" cat has white on the face, paws, throat and chest. Which pattern group does it belong to?',
    options: ['Bicolor', 'Colorpoint', 'Tortoiseshell', 'Ticked tabby'],
    answer: 'Bicolor',
    funFact: 'At the other extreme, van-patterned cats have so much white that color is left only on the head and tail.',
    source: wiki('Bicolor_cat'),
    evidence: 'tuxedo cats have a low-to-medium grade white spotting'
  },
  {
    id: 'term-cat-smoke',
    category: 'cat',
    topic: 'Coat',
    question: 'On a solid-colored (non-agouti) cat, the silver inhibitor gene produces which color?',
    options: ['Smoke', 'Chinchilla', 'Blue', 'Cream'],
    answer: 'Smoke',
    funFact: 'Smoke hairs are pale at the base and colored at the tips.',
    source: wiki('Cat_coat_genetics'),
    evidence: 'to produce the colour known as smoke'
  },

  // Horses
  {
    id: 'term-horse-impulsion',
    category: 'horse',
    topic: 'Riding',
    question: 'In riding, what is impulsion?',
    options: ['Going forward with controlled power', 'Raw speed', 'The height of a jump', 'Bending around the rider\'s leg'],
    answer: 'Going forward with controlled power',
    funFact: 'Impulsion comes from muscular control, not speed.',
    source: wiki('Impulsion'),
    evidence: 'is the movement of a horse when it is going forward with controlled power'
  },
  {
    id: 'term-horse-collection',
    category: 'horse',
    topic: 'Riding',
    question: 'In dressage, what does a higher degree of collection do?',
    options: ['Shifts impulsion to the hindquarters', 'Lengthens the stride', 'Speeds up the tempo', 'Lowers the head toward the ground'],
    answer: 'Shifts impulsion to the hindquarters',
    funFact: 'Collected gaits shorten the stride while the horse carries more weight behind.',
    source: wiki('Dressage'),
    evidence: 'a higher degree of collection causes a definite shift of impulsion to the hindquarters'
  },
  {
    id: 'term-horse-bascule',
    category: 'horse',
    topic: 'Riding',
    question: 'In show jumping, what is the bascule?',
    options: ['The round arc of the horse\'s body over a jump', 'A type of jumping bit', 'A fence with two rails', 'A change of lead in the air'],
    answer: 'The round arc of the horse\'s body over a jump',
    funFact: 'A good bascule means the horse rises up through its back and stretches its neck.',
    source: wiki('Bascule_(horse)'),
    evidence: 'bascule is the natural round arc a horse\'s body takes as it goes over a jump'
  },
  {
    id: 'term-horse-cow-sense',
    category: 'horse',
    topic: 'Riding',
    question: 'In cutting, a horse that anticipates a cow\'s moves is said to have what?',
    options: ['Cow sense', 'Impulsion', 'Collection', 'Self-carriage'],
    answer: 'Cow sense',
    funFact: 'It is also called "cow smarts."',
    source: wiki('Cutting_(sport)'),
    evidence: 'an ability commonly referred to as having cow sense'
  },
  {
    id: 'term-horse-over-at-knee',
    category: 'horse',
    topic: 'Conformation',
    question: 'In horse conformation, what does "over at the knee" mean?',
    options: [
      'The knee tilts forward when seen from the side',
      'The knee tilts backward when seen from the side',
      'The hocks turn inward',
      'The pasterns are too upright'
    ],
    answer: 'The knee tilts forward when seen from the side',
    funFact: 'It is also called bucked, sprung or goat knees.',
    source: wiki('Equine_conformation'),
    evidence: 'knee inclines forward, in front of a plumb line'
  },
  {
    id: 'term-horse-calf-kneed',
    category: 'horse',
    topic: 'Conformation',
    question: 'What is the conformation fault "back at the knee" also called?',
    options: ['Calf-kneed', 'Buck-kneed', 'Cow-hocked', 'Sickle-hocked'],
    answer: 'Calf-kneed',
    funFact: 'The knee tilts backward behind a straight plumb line from the forearm.',
    source: wiki('Equine_conformation'),
    evidence: 'calf-kneed/back at the knee'
  },
  {
    id: 'term-horse-cow-hocked',
    category: 'horse',
    topic: 'Conformation',
    question: 'Which fault describes hocks that turn inward, straining the inside of the hock joint?',
    options: ['Cow-hocked', 'Sickle-hocked', 'Calf-kneed', 'Over at the knee'],
    answer: 'Cow-hocked',
    funFact: 'In the Clydesdale, cow hocks are a breed characteristic rather than a fault.',
    source: wiki('Equine_conformation'),
    evidence: 'medial deviation in true cow hocks causes strain on the inside of the hock joint'
  },
  {
    id: 'term-horse-mutton-withers',
    category: 'horse',
    topic: 'Conformation',
    question: 'What are low withers called?',
    options: ['Mutton withers', 'Ewe neck', 'Roach back', 'Goose rump'],
    answer: 'Mutton withers',
    funFact: 'High withers make saddle fitting hard too; moderate withers are preferred.',
    source: wiki('Withers'),
    evidence: 'known as "mutton withers"'
  }
];

// The old built-in term bank (ids d1–d20, s1–s20, c1–c20, ct1–ct20, h1–h20) was retired:
// most terms duplicated hand-checked questions already in the category files (reinforcement,
// desensitization, ecdysis, heat pits, brumation, broodiness, molt, bloom, ticking, colorpoint),
// and the rest were trainer or show jargon with no checkable source (threshold distance,
// trigger stacking, BAT 2.0, drive capping, cryptic basking, whisker break, coupling).
