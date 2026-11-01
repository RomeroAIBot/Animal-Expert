// Hand-checked trivia on insects in general and on insects outside bees.js and butterflies.js
// (beetles, flies, dragonflies, crickets and more), November 2026. Same rules as bees.js: topics from
// the user's insect quiz pages, reworded, and each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=bugs --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const insectQuestions = [
  // Insects in general
  {
    id: 'insects-001',
    topic: 'Biology',
    question: 'What are the three main parts of an insect\'s body?',
    options: ['Head, thorax and abdomen', 'Head, neck and tail', 'Cephalothorax, abdomen and legs', 'Head, body and wings'],
    answer: 'Head, thorax and abdomen',
    funFact: 'Insects also have an exoskeleton, compound eyes and one pair of antennae.',
    source: wiki('Insect'),
    evidence: 'a three-part body (head, thorax and abdomen)'
  },
  {
    id: 'insects-002',
    topic: 'Biology',
    question: 'How many legs does an adult insect have?',
    options: ['Six', 'Four', 'Eight', 'Ten'],
    answer: 'Six',
    funFact: 'That is three pairs of jointed legs, all attached to the thorax. Spiders, with eight, are not insects.',
    source: wiki('Insect'),
    evidence: 'three pairs of jointed legs'
  },
  {
    id: 'insects-003',
    topic: 'Biology',
    question: 'What is the scientific study of insects called?',
    options: ['Entomology', 'Etymology', 'Herpetology', 'Ornithology'],
    answer: 'Entomology',
    funFact: 'It comes from the Greek "éntomon", meaning insect. Etymology is the study of word origins.',
    source: wiki('Entomology'),
    evidence: 'is the branch of zoology that focuses on insects'
  },
  {
    id: 'insects-004',
    topic: 'Biology',
    question: 'About how many insect species have been described by scientists?',
    options: ['More than a million', 'About 50,000', 'About 200,000', 'About 10,000'],
    answer: 'More than a million',
    funFact: 'Insects are the most diverse group of animals on Earth.',
    source: wiki('Insect'),
    evidence: 'insects are the most diverse group of animals, with more than a million described species'
  },

  // Beetles
  {
    id: 'insects-005',
    topic: 'Beetles',
    question: 'Which is the largest order of insects, with about 400,000 described species?',
    options: ['Beetles', 'Butterflies and moths', 'Flies', 'Ants, bees and wasps'],
    answer: 'Beetles',
    funFact: 'Beetles make up about a quarter of all known animal species.',
    source: wiki('Beetle'),
    evidence: 'with about 400,000 described species, is the largest of all orders'
  },
  {
    id: 'insects-006',
    topic: 'Beetles',
    question: 'What are a beetle\'s hardened front wings called?',
    options: ['Elytra', 'Halteres', 'Hamuli', 'Tegmina'],
    answer: 'Elytra',
    funFact: 'They act as wing cases that protect the delicate flying wings folded underneath.',
    source: wiki('Beetle'),
    evidence: 'their front pair of wings are hardened into wing-cases, elytra'
  },
  {
    id: 'insects-007',
    topic: 'Beetles',
    question: 'One African dung beetle is among the few invertebrates known to steer by what?',
    options: ['The Milky Way', 'The Earth\'s magnetic field', 'The smell of the dung', 'The sound of the wind'],
    answer: 'The Milky Way',
    funFact: 'Another African species navigates by patterns of polarised moonlight.',
    source: wiki('Dung_beetle'),
    evidence: 'navigate and orient themselves using the milky way'
  },
  {
    id: 'insects-008',
    topic: 'Beetles',
    question: 'Fireflies are not flies. What kind of insect are they?',
    options: ['Beetles', 'Moths', 'Flies', 'True bugs'],
    answer: 'Beetles',
    funFact: 'They glow mainly at twilight to attract mates, and all firefly larvae glow too.',
    source: wiki('Firefly'),
    evidence: 'they are soft-bodied beetles commonly called fireflies'
  },
  {
    id: 'insects-009',
    topic: 'Beetles',
    question: 'How does the bombardier beetle defend itself?',
    options: ['It sprays a hot chemical with a popping sound', 'It rolls into an armoured ball', 'It plays dead and smells rotten', 'It bites with venomous jaws'],
    answer: 'It sprays a hot chemical with a popping sound',
    funFact: 'The spray comes from a chemical reaction inside its abdomen.',
    source: wiki('Bombardier_beetle'),
    evidence: 'they eject a hot, noxious chemical spray from their pygidial glands with a popping sound'
  },
  {
    id: 'insects-010',
    topic: 'Beetles',
    question: 'The titan beetle of South America is one of the largest known insects. How long can it grow?',
    options: ['Over 17 cm', 'About 5 cm', 'About 9 cm', 'Over 40 cm'],
    answer: 'Over 17 cm',
    funFact: 'Adult titan beetles live for only a few weeks.',
    source: wiki('Titan_beetle'),
    evidence: 'at over 170 mm (6.7 in) in length'
  },

  // Flies and mosquitoes
  {
    id: 'insects-011',
    topic: 'Flies',
    question: 'Which mosquitoes drink blood?',
    options: ['Only the females of many species', 'Only the males', 'Both males and females', 'Only the larvae'],
    answer: 'Only the females of many species',
    funFact: 'All mosquitoes drink nectar from flowers; females need blood to make eggs.',
    source: wiki('Mosquito'),
    evidence: 'all mosquitoes drink nectar from flowers; females of many species have adapted to also drink blood'
  },
  {
    id: 'insects-012',
    topic: 'Flies',
    question: 'Mosquitoes spread which of these diseases?',
    options: ['Malaria', 'Tuberculosis', 'Cholera', 'Rabies'],
    answer: 'Malaria',
    funFact: 'They also carry yellow fever and dengue fever.',
    source: wiki('Mosquito'),
    evidence: 'vectors of parasitic diseases such as malaria'
  },
  {
    id: 'insects-013',
    topic: 'Flies',
    question: 'How many pairs of wings does a housefly have?',
    options: ['One', 'Two', 'Three', 'None'],
    answer: 'One',
    funFact: 'Most other flying insects have two pairs.',
    source: wiki('Housefly'),
    evidence: 'a single pair of membranous wings'
  },
  {
    id: 'insects-014',
    topic: 'Flies',
    question: 'Mayflies are the only insects that do what?',
    options: ['Moult again after they have working wings', 'Lay eggs in mid-air', 'Live only in salt water', 'Hatch fully grown'],
    answer: 'Moult again after they have working wings',
    funFact: 'The winged "subimago" sheds its skin once more, usually after a day or two, to become the adult.',
    source: wiki('Mayfly'),
    evidence: 'making mayflies the only insects where a winged form undergoes a further moult'
  },

  // Dragonflies and other hunters
  {
    id: 'insects-015',
    topic: 'Dragonflies',
    question: 'About how many tiny units (ommatidia) are in each of an adult dragonfly\'s compound eyes?',
    options: ['Nearly 24,000', 'About 100', 'About 2,000', 'Over a million'],
    answer: 'Nearly 24,000',
    funFact: 'Their huge eyes give them excellent vision for catching insects in flight.',
    source: wiki('Dragonfly'),
    evidence: 'an adult dragonfly\'s compound eyes have nearly 24,000 ommatidia each'
  },
  {
    id: 'insects-016',
    topic: 'Dragonflies',
    question: 'How do young dragonflies living underwater breathe?',
    options: ['Through gills in their rectum', 'Through a snorkel-like tail', 'By gulping air at the surface', 'Through holes in their wings'],
    answer: 'Through gills in their rectum',
    funFact: 'They can also push water out of the rectum to jet forward quickly.',
    source: wiki('Dragonfly'),
    evidence: 'they breathe through gills in their rectum'
  },
  {
    id: 'insects-017',
    topic: 'Dragonflies',
    question: 'Meganeura, a giant dragonfly-like insect known from fossils, had a wingspan of about how much?',
    options: ['65 to 75 cm', '10 to 15 cm', '25 to 30 cm', '2 to 3 m'],
    answer: '65 to 75 cm',
    funFact: 'It lived about 300 million years ago, long before the dinosaurs.',
    source: wiki('Meganeura'),
    evidence: 'a wingspan around 65-75 cm'
  },
  {
    id: 'insects-018',
    topic: 'Mantises',
    question: 'Female praying mantises are known to sometimes do what after mating?',
    options: ['Eat the male', 'Carry the male on their back', 'Build a nest with the male', 'Change colour to match the male'],
    answer: 'Eat the male',
    funFact: 'This is called sexual cannibalism. In cooler places, adults lay eggs in autumn and then die.',
    source: wiki('Praying_mantis'),
    evidence: 'females sometimes practice sexual cannibalism, eating their mates after copulation'
  },

  // Crickets, cicadas, bugs
  {
    id: 'insects-019',
    topic: 'Crickets and cicadas',
    question: 'How do crickets chirp?',
    options: ['By rubbing their front wings together', 'By rubbing their back legs on their wings', 'By clicking their jaws', 'By forcing air through holes in their body'],
    answer: 'By rubbing their front wings together',
    funFact: 'The tough, leathery front wings have a file and scraper that rasp against each other.',
    source: wiki('Cricket_(insect)'),
    evidence: 'some crickets chirp by rubbing parts of these together'
  },
  {
    id: 'insects-020',
    topic: 'Crickets and cicadas',
    question: 'North American periodical cicadas emerge in huge numbers every 13 years or every how many years?',
    options: ['17', '7', '11', '21'],
    answer: '17',
    funFact: 'Nearly all other cicadas are annual cicadas, with some adults appearing every year.',
    source: wiki('Cicada'),
    evidence: 'emerge en masse every 13 or 17 years'
  },
  {
    id: 'insects-021',
    topic: 'Crickets and cicadas',
    question: 'Locusts are a kind of which insect?',
    options: ['Grasshopper', 'Cricket', 'Beetle', 'Cicada'],
    answer: 'Grasshopper',
    funFact: 'They are usually solitary, but when conditions change they can switch to a swarming phase.',
    source: wiki('Locust'),
    evidence: 'are various species of short-horned grasshoppers in the family acrididae that have a swarming phase'
  },
  {
    id: 'insects-022',
    topic: 'True bugs',
    question: 'Scientists use the name "true bugs" for which insect order, which has piercing-sucking mouthparts?',
    options: ['Hemiptera', 'Coleoptera', 'Diptera', 'Orthoptera'],
    answer: 'Hemiptera',
    funFact: 'The order includes cicadas, aphids, bed bugs and shield bugs; its name means "half-winged".',
    source: wiki('Hemiptera'),
    evidence: 'is an order of insects, commonly called true bugs'
  },
  {
    id: 'insects-023',
    topic: 'True bugs',
    question: 'The red dye carmine comes from which insect?',
    options: ['Cochineal', 'Ladybird', 'Aphid', 'Fire ant'],
    answer: 'Cochineal',
    funFact: 'The cochineal is a scale insect that feeds on cactus.',
    source: wiki('Cochineal'),
    evidence: 'from which the natural dye carmine is derived'
  },
  {
    id: 'insects-024',
    topic: 'True bugs',
    question: 'Water striders are famous for which ability?',
    options: ['Walking on the surface of water', 'Breathing underwater', 'Swimming upside down', 'Jumping out of the water like fish'],
    answer: 'Walking on the surface of water',
    funFact: 'Their light bodies and water-repellent legs let them skate on the surface without breaking it.',
    source: wiki('Water_strider'),
    evidence: 'their ability to walk on water'
  },
  {
    id: 'insects-025',
    topic: 'True bugs',
    question: 'Many aphids can reproduce without mating. What is this called?',
    options: ['Parthenogenesis', 'Metamorphosis', 'Photosynthesis', 'Hibernation'],
    answer: 'Parthenogenesis',
    funFact: 'In some aphids, all the young are produced this way and no eggs are ever laid.',
    source: wiki('Aphid'),
    evidence: 'all young may be produced by parthenogenesis'
  },

  // Others
  {
    id: 'insects-026',
    topic: 'Other insects',
    question: 'Fleas have no wings, but how far can some species jump?',
    options: ['About 50 times their body length', 'About twice their body length', 'About 1,000 times their body length', 'They cannot jump'],
    answer: 'About 50 times their body length',
    funFact: 'Only froghoppers are known to jump better.',
    source: wiki('Flea'),
    evidence: 'some species can leap 50 times their body length'
  },
  {
    id: 'insects-027',
    topic: 'Other insects',
    question: 'Termites look a little like ants, but which insects did they actually evolve from?',
    options: ['Cockroaches', 'Ants', 'Bees', 'Beetles'],
    answer: 'Cockroaches',
    funFact: 'Their closest relatives are wood-eating cockroaches.',
    source: wiki('Termite'),
    evidence: 'they evolved from cockroaches'
  },
  {
    id: 'insects-028',
    topic: 'Other insects',
    question: 'Phobaeticus chani, once the record holder as the world\'s longest insect, is what kind of insect?',
    options: ['A stick insect', 'A beetle', 'A dragonfly', 'A centipede'],
    answer: 'A stick insect',
    funFact: 'It lives on the island of Borneo.',
    source: wiki('Phobaeticus_chani'),
    evidence: 'is a species of stick insect'
  }
];
