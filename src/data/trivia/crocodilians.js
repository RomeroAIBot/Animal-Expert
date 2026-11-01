// Hand-checked crocodile, alligator, caiman and gharial trivia (Reptiles group), November 2026. Same
// rules as lizards.js: topics from the user's quiz pages, reworded, and each `evidence` phrase must
// appear on the source page (`npm run check:sources -- --category=crocodilians --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const crocodilianQuestions = [
  {
    id: 'crocodilians-001',
    topic: 'Species',
    question: 'Which animal is the largest living reptile?',
    options: ['Saltwater crocodile', 'Nile crocodile', 'American alligator', 'Leatherback sea turtle'],
    answer: 'Saltwater crocodile',
    funFact: 'Males can reach 6 m and 1,000 to 1,500 kg; females are much smaller, rarely over 3 m.',
    source: wiki('Saltwater_crocodile'),
    evidence: 'the saltwater crocodile is the largest living reptile'
  },
  {
    id: 'crocodilians-002',
    topic: 'Species',
    question: 'Which animal has the strongest bite of any living animal ever measured?',
    options: ['Saltwater crocodile', 'Great white shark', 'Hippopotamus', 'Spotted hyena'],
    answer: 'Saltwater crocodile',
    funFact: 'A 4.59 m saltwater crocodile bit with a force of 16,414 newtons, beating the American alligator\'s earlier record.',
    source: wiki('Saltwater_crocodile'),
    evidence: 'saltwater crocodiles have the strongest bite of any living animal'
  },
  {
    id: 'crocodilians-003',
    topic: 'Species',
    question: 'Besides the American alligator, the only other living alligator species comes from which country?',
    options: ['China', 'Brazil', 'India', 'Australia'],
    answer: 'China',
    funFact: 'The Chinese alligator is much smaller than its American cousin.',
    source: wiki('Alligator'),
    evidence: 'the two extant species are the american alligator (a. mississippiensis) and the chinese alligator'
  },
  {
    id: 'crocodilians-004',
    topic: 'Identification',
    question: 'Which snout shape usually tells a crocodile apart from an alligator?',
    options: ['A narrower, V-shaped snout', 'A wider, U-shaped snout', 'A snout with a bony knob at the tip', 'A snout that curves upward'],
    answer: 'A narrower, V-shaped snout',
    funFact: 'Alligators and caimans have broader, U-shaped snouts.',
    source: wiki('Crocodile'),
    evidence: 'with a more v-shaped than a u-shaped snout compared to alligators and caimans'
  },
  {
    id: 'crocodilians-005',
    topic: 'Identification',
    question: 'When a crocodile closes its mouth, which tooth stays visible, unlike in an alligator?',
    options: ['The large fourth tooth of the lower jaw', 'The front tooth of the upper jaw', 'The last molar of the lower jaw', 'None; all its teeth are hidden'],
    answer: 'The large fourth tooth of the lower jaw',
    funFact: 'In alligators the lower teeth fit into pits in the upper jaw, so they are hidden when the mouth is shut.',
    source: wiki('Crocodile'),
    evidence: 'the large fourth tooth in the lower jaw fits into a constriction in the upper jaw'
  },
  {
    id: 'crocodilians-006',
    topic: 'Biology',
    question: 'Crocodiles cope better with salt water than alligators do. Why?',
    options: ['They have working salt glands', 'They drink only rainwater', 'Their thick scales block salt', 'They shed salt with their skin'],
    answer: 'They have working salt glands',
    funFact: 'Alligators have the same glands, but theirs do not work.',
    source: wiki('Crocodile'),
    evidence: 'specialized salt glands for filtering out salt, which are present, but non-functioning, in alligators'
  },
  {
    id: 'crocodilians-007',
    topic: 'Biology',
    question: 'Crocodilians\' closest living relatives are which animals?',
    options: ['Birds', 'Lizards', 'Turtles', 'Snakes'],
    answer: 'Birds',
    funFact: 'Birds and crocodilians are the only surviving archosaurs, the group that also included the dinosaurs.',
    source: wiki('Crocodilia'),
    evidence: 'are the closest living relatives of birds'
  },
  {
    id: 'crocodilians-008',
    topic: 'Species',
    question: 'The gharial of South Asia is named after what?',
    options: ['A pot-shaped knob on the male\'s snout', 'The river where it was first found', 'Its loud hissing call', 'A Hindi word for "fish thief"'],
    answer: 'A pot-shaped knob on the male\'s snout',
    funFact: 'The knob resembles an earthenware pot called a ghara.',
    source: wiki('Gharial'),
    evidence: 'which resembles an earthenware pot known as a ghara'
  },
  {
    id: 'crocodilians-009',
    topic: 'Species',
    question: 'The gharial\'s long, very narrow snout makes it a specialist at catching what?',
    options: ['Fish', 'Large mammals', 'Birds', 'Turtles'],
    answer: 'Fish',
    funFact: 'It is also known as the fish-eating crocodile and is among the longest of all living crocodilians.',
    source: wiki('Gharial'),
    evidence: 'the gharial is well adapted to catching fish'
  },
  {
    id: 'crocodilians-010',
    topic: 'Species',
    question: 'Caimans, small relatives of alligators, are native to which part of the world?',
    options: ['Central and South America', 'Africa', 'South-East Asia', 'Australia'],
    answer: 'Central and South America',
    funFact: 'They live in marshes, swamps, lakes and mangrove rivers and are mostly active at night.',
    source: wiki('Caiman'),
    evidence: 'caimans are native to central and south america'
  },
  {
    id: 'crocodilians-011',
    topic: 'Species',
    question: 'Which caiman is the largest member of the alligator family?',
    options: ['Black caiman', 'Spectacled caiman', 'Yacare caiman', 'Broad-snouted caiman'],
    answer: 'Black caiman',
    funFact: 'It can grow to about 5 m or more and weigh over 450 kg.',
    source: wiki('Black_caiman'),
    evidence: 'it is the largest living species of the family alligatoridae'
  },
  {
    id: 'crocodilians-012',
    topic: 'Species',
    question: 'Which African species is the smallest living crocodile, typically under 2 m long?',
    options: ['Dwarf crocodile', 'Nile crocodile', 'Slender-snouted crocodile', 'Mugger crocodile'],
    answer: 'Dwarf crocodile',
    funFact: 'Cuvier\'s dwarf caiman of South America is smaller still, but it belongs to the alligator family.',
    source: wiki('Dwarf_crocodile'),
    evidence: 'this makes it the smallest living crocodile species'
  },
  {
    id: 'crocodilians-013',
    topic: 'Species',
    question: 'The American alligator is the official state reptile of Florida, Mississippi and which other state?',
    options: ['Louisiana', 'Texas', 'Georgia', 'Alabama'],
    answer: 'Louisiana',
    funFact: 'Conservation helped the alligator recover, and it was removed from the endangered list in 1987.',
    source: wiki('American_alligator'),
    evidence: 'the species is the official state reptile of three states: florida, louisiana, and mississippi'
  },
  {
    id: 'crocodilians-014',
    topic: 'Biology',
    question: 'The saying "crocodile tears", meaning false sorrow, comes from an old story that crocodiles do what?',
    options: ['Weep while eating their victims', 'Cry to lure prey close', 'Cry when their eggs hatch', 'Weep when they leave the water'],
    answer: 'Weep while eating their victims',
    funFact: 'The phrase was already well known in ancient Greece and Rome.',
    source: wiki('Crocodile_tears'),
    evidence: 'the expression comes from an ancient anecdote that crocodiles weep for the victims they are eating'
  }
];
