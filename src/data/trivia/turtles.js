// Hand-checked turtle and tortoise trivia (Reptiles group), November 2026. Same rules as lizards.js:
// topics from the user's quiz pages, reworded, and each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=turtles --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const turtleQuestions = [
  // Shells and bodies
  {
    id: 'turtles-001',
    topic: 'Biology',
    question: 'Turtles, tortoises and terrapins all belong to which order of reptiles?',
    options: ['Testudines', 'Squamata', 'Crocodilia', 'Rhynchocephalia'],
    answer: 'Testudines',
    funFact: 'The name comes from the Latin "testudo", meaning tortoise.',
    source: wiki('Turtle'),
    evidence: 'turtles (order testudines) are reptiles characterized by a special shell developed mainly from their ribs'
  },
  {
    id: 'turtles-002',
    topic: 'Biology',
    question: 'What is the lower part of a turtle\'s shell called?',
    options: ['The plastron', 'The carapace', 'The scute', 'The bridge'],
    answer: 'The plastron',
    funFact: 'The upper part is the carapace, and the two are joined at the sides by a bony bridge.',
    source: wiki('Turtle_shell'),
    evidence: 'it comprises an upper part, the carapace, and lower part, the plastron'
  },
  {
    id: 'turtles-003',
    topic: 'Biology',
    question: 'In most turtles, what decides whether an egg hatches as a male or a female?',
    options: ['The temperature of the nest', 'Which parent is larger', 'The size of the egg', 'How deep the egg is buried'],
    answer: 'The temperature of the nest',
    funFact: 'Cooler eggs hatch mostly males and warmer eggs mostly females, and a change of just 1 to 2 °C can tip the balance.',
    source: wiki('Temperature-dependent_sex_determination'),
    evidence: 'pattern ia occurs in most turtles'
  },
  {
    id: 'turtles-004',
    topic: 'Biology',
    question: 'North American box turtles can shut themselves completely inside their shells. What makes this possible?',
    options: ['A hinge in the lower shell', 'Extra-flexible ribs', 'A shell that shrinks when cold', 'A flap of skin over the head'],
    answer: 'A hinge in the lower shell',
    funFact: 'With the shell closed tight, many predators cannot get at the turtle at all.',
    source: wiki('Box_turtle'),
    evidence: 'which is hinged at the bottom, allowing the animal to close its shell tightly'
  },
  {
    id: 'turtles-005',
    topic: 'Biology',
    question: 'Australia\'s Fitzroy River turtle can stay underwater for up to three weeks by taking in oxygen through what?',
    options: ['Its cloaca (rear opening)', 'Gills behind its head', 'The skin of its neck', 'Holes in its shell'],
    answer: 'Its cloaca (rear opening)',
    funFact: 'This "cloacal respiration" can supply up to 70% of the oxygen it needs.',
    source: wiki('Fitzroy_River_turtle'),
    evidence: 'in a process called cloacal respiration'
  },

  // Sea turtles
  {
    id: 'turtles-006',
    topic: 'Sea turtles',
    question: 'Which is the largest of all living turtles?',
    options: ['Leatherback sea turtle', 'Galápagos tortoise', 'Loggerhead sea turtle', 'Alligator snapping turtle'],
    answer: 'Leatherback sea turtle',
    funFact: 'It can reach 2.7 m and 500 kg, and unlike other sea turtles it has no bony shell.',
    source: wiki('Leatherback_sea_turtle'),
    evidence: 'the largest of all living turtles'
  },
  {
    id: 'turtles-007',
    topic: 'Sea turtles',
    question: 'The leatherback sea turtle is named for what?',
    options: ['Flexible, leathery skin instead of a bony shell', 'Its brown, leather-coloured flippers', 'Fishermen who made belts from it', 'Its tough, chewy meat'],
    answer: 'Flexible, leathery skin instead of a bony shell',
    funFact: 'Its carapace is covered by oily flesh and leather-like skin.',
    source: wiki('Leatherback_sea_turtle'),
    evidence: 'flexible, leather-like skin, for which it is named'
  },
  {
    id: 'turtles-008',
    topic: 'Sea turtles',
    question: 'The green sea turtle is named for the colour of what?',
    options: ['The fat under its shell', 'The plates of its shell', 'The eggs it lays', 'Its skin and flippers'],
    answer: 'The fat under its shell',
    funFact: 'Its shell is actually olive to black. The green fat comes from its diet of seagrass.',
    source: wiki('Green_sea_turtle'),
    evidence: 'the common name refers to the usually green fat found beneath its carapace'
  },
  {
    id: 'turtles-009',
    topic: 'Sea turtles',
    question: 'Shells from which critically endangered sea turtle were the main source of "tortoiseshell" for combs and jewellery?',
    options: ['Hawksbill', 'Leatherback', 'Loggerhead', 'Olive ridley'],
    answer: 'Hawksbill',
    funFact: 'International trade in hawksbill products is now restricted under CITES.',
    source: wiki('Hawksbill_sea_turtle'),
    evidence: 'hawksbill shells were the primary source of tortoiseshell material'
  },
  {
    id: 'turtles-010',
    topic: 'Sea turtles',
    question: 'Kemp\'s ridley sea turtles come ashore to nest in huge groups. What are these mass nestings called?',
    options: ['Arribadas', 'Flotillas', 'Regattas', 'Fiestas'],
    answer: 'Arribadas',
    funFact: '"Arribada" is Spanish for "arrival". Most nest on one beach, Rancho Nuevo in the Mexican state of Tamaulipas.',
    source: wiki('Kemp\'s_ridley_sea_turtle'),
    evidence: 'nesting aggregations called arribadas'
  },
  {
    id: 'turtles-011',
    topic: 'Sea turtles',
    question: 'Where do many female sea turtles return to lay their eggs?',
    options: ['The same beach where they hatched', 'The nearest beach to their feeding area', 'Any beach with soft sand', 'Small islands with no predators'],
    answer: 'The same beach where they hatched',
    funFact: 'Sea turtles seem to use the Earth\'s magnetic field to find their way home.',
    source: wiki('Sea_turtle'),
    evidence: 'females return to the same beach where they hatched'
  },

  // Tortoises
  {
    id: 'turtles-012',
    topic: 'Tortoises',
    question: 'Which is the largest living species of tortoise?',
    options: ['Galápagos tortoise', 'Aldabra giant tortoise', 'African spurred tortoise', 'Leopard tortoise'],
    answer: 'Galápagos tortoise',
    funFact: 'It can weigh up to 417 kg and lives over 100 years in the wild.',
    source: wiki('Galápagos_tortoise'),
    evidence: 'it is the largest living species of tortoise'
  },
  {
    id: 'turtles-013',
    topic: 'Tortoises',
    question: 'Jonathan, thought to be the oldest known living land animal, is what kind of animal?',
    options: ['A giant tortoise', 'A tuatara', 'A crocodile', 'A box turtle'],
    answer: 'A giant tortoise',
    funFact: 'He lives on the island of Saint Helena, and his age was estimated at 193 in 2026.',
    source: wiki('Jonathan_(tortoise)'),
    evidence: 'making him the oldest known living land animal'
  },

  // Named turtles
  {
    id: 'turtles-014',
    topic: 'Species',
    question: 'Which small North American turtle is nicknamed the "stinkpot"?',
    options: ['Common musk turtle', 'Painted turtle', 'Map turtle', 'Wood turtle'],
    answer: 'Common musk turtle',
    funFact: 'It can release a foul, musky smell from glands at the edge of its shell, probably to put off predators.',
    source: wiki('Common_musk_turtle'),
    evidence: 'stinkpot turtle due to its ability to release a foul musky odor'
  },
  {
    id: 'turtles-015',
    topic: 'Species',
    question: 'How does the alligator snapping turtle lure fish into its mouth?',
    options: ['With a worm-shaped tip on its tongue', 'With a glowing patch on its shell', 'By imitating the call of a frog', 'By stirring up mud to hide in'],
    answer: 'With a worm-shaped tip on its tongue',
    funFact: 'It lies still with its mouth open and wiggles the pink "worm" until a fish comes close.',
    source: wiki('Alligator_snapping_turtle'),
    evidence: 'a vermiform (worm-shaped) appendage on the tip of its tongue used to lure fish'
  },
  {
    id: 'turtles-016',
    topic: 'Species',
    question: 'The diamondback terrapin lives in which kind of water?',
    options: ['Brackish coastal marshes', 'Open ocean', 'Mountain streams', 'Desert springs'],
    answer: 'Brackish coastal marshes',
    funFact: 'Brackish water is a mix of fresh and salt water; "terrapin" first meant turtles living there.',
    source: wiki('Diamondback_terrapin'),
    evidence: 'native to the brackish coastal tidal marshes'
  },
  {
    id: 'turtles-017',
    topic: 'Species',
    question: 'Which turtle, a popular pet, is the most commonly traded turtle in the world and the most invasive?',
    options: ['Red-eared slider', 'Box turtle', 'Musk turtle', 'Softshell turtle'],
    answer: 'Red-eared slider',
    funFact: 'It is native to the central and southern United States but now lives wild in many other countries.',
    source: wiki('Red-eared_slider'),
    evidence: 'is the most invasive chelonian'
  }
];
