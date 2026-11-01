// Hand-checked bee, wasp and ant trivia (Insects group), November 2026. Topics come from the user's insect
// quiz pages (Rescue, TriviaBliss, ProProfs, the Oxford museum quiz and others); each question is reworded
// and checked against a source page, and its `evidence` phrase must appear there
// (`npm run check:sources -- --category=bees --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const beeQuestions = [
  // Honey bees
  {
    id: 'bees-001',
    topic: 'Honey bees',
    question: 'What is a male honey bee called?',
    options: ['A drone', 'A worker', 'A queen', 'A forager'],
    answer: 'A drone',
    funFact: 'Drones have no stinger, gather no food, and their only job is to mate with a young queen.',
    source: wiki('Drone_(bee)'),
    evidence: 'a drone is a male honey bee'
  },
  {
    id: 'bees-002',
    topic: 'Honey bees',
    question: 'Which honey bees have no stinger at all?',
    options: ['Drones', 'Workers', 'Queens', 'Nurse bees'],
    answer: 'Drones',
    funFact: 'Only females (workers and queens) can sting; the stinger is a modified egg-laying tube.',
    source: wiki('Drone_(bee)'),
    evidence: 'unlike the female worker bee, a drone has no stinger'
  },
  {
    id: 'bees-003',
    topic: 'Honey bees',
    question: 'A drone honey bee hatches from what kind of egg?',
    options: ['An unfertilised egg', 'A fertilised egg', 'An egg laid by a worker in a queen cell', 'An egg fed only on royal jelly'],
    answer: 'An unfertilised egg',
    funFact: 'Fertilised eggs become females, so a drone has a mother but no father.',
    source: wiki('Drone_(bee)'),
    evidence: 'each drone grows from the queen\'s unfertilized haploid egg'
  },
  {
    id: 'bees-004',
    topic: 'Honey bees',
    question: 'What does a honey bee\'s "waggle dance" tell the other bees?',
    options: ['The direction and distance to food', 'That the queen has died', 'That the hive is too hot', 'Which bees should guard the entrance'],
    answer: 'The direction and distance to food',
    funFact: 'Foragers use the same figure-eight dance to point the way to water and to new nest sites.',
    source: wiki('Waggle_dance'),
    evidence: 'share information about the direction and distance to patches of flowers'
  },
  {
    id: 'bees-005',
    topic: 'Honey bees',
    question: 'Larvae raised in special queen cells are fed large amounts of which substance?',
    options: ['Royal jelly', 'Bee bread', 'Propolis', 'Beeswax'],
    answer: 'Royal jelly',
    funFact: 'All young larvae get some royal jelly, but future queens get it in large amounts throughout.',
    source: wiki('Royal_jelly'),
    evidence: 'the larvae in these cells are fed with copious amounts of royal jelly'
  },
  {
    id: 'bees-006',
    topic: 'Honey bees',
    question: 'Where on a worker honey bee\'s body is beeswax made?',
    options: ['In glands on the underside of the abdomen', 'In the mouth, from chewed pollen', 'In glands on the legs', 'In the honey stomach'],
    answer: 'In glands on the underside of the abdomen',
    funFact: 'Eight wax glands make small flakes of wax, which the workers shape into honeycomb cells.',
    source: wiki('Beeswax'),
    evidence: 'formed into scales by eight wax-producing glands in the abdominal segments of worker bees'
  },
  {
    id: 'bees-007',
    topic: 'Honey bees',
    question: 'Why does a worker honey bee usually die after stinging a person?',
    options: ['Its barbed stinger lodges in the skin and tears away', 'Its venom poisons the bee too', 'It uses up all its energy', 'Its wings are damaged by the sting'],
    answer: 'Its barbed stinger lodges in the skin and tears away',
    funFact: 'In thin-skinned insects the sting can pull free, so a bee can sting another insect and survive.',
    source: wiki('Bee_sting'),
    evidence: 'the stinger is in fact barbed so that it lodges in the victim\'s skin'
  },
  {
    id: 'bees-008',
    topic: 'Honey bees',
    question: 'Bees make honey mainly from which plant secretion?',
    options: ['Flower nectar', 'Tree sap', 'Pollen', 'Leaf juice'],
    answer: 'Flower nectar',
    funFact: 'Bees also use honeydew from aphids, and they thicken the honey by fanning water out of it.',
    source: wiki('Honey'),
    evidence: 'the sugary secretions of plants (primarily floral nectar)'
  },
  {
    id: 'bees-009',
    topic: 'Honey bees',
    question: 'What is "colony collapse disorder" in honey bees?',
    options: ['Most worker bees vanish, leaving the queen behind', 'The queen leaves and the hive dies of cold', 'The honeycomb melts in hot weather', 'Wasps take over the hive'],
    answer: 'Most worker bees vanish, leaving the queen behind',
    funFact: 'The hive is left with plenty of food and a few nurse bees but no workforce.',
    source: wiki('Colony_collapse_disorder'),
    evidence: 'occurs when the majority of worker bees in a honey bee colony disappear'
  },
  {
    id: 'bees-010',
    topic: 'Honey bees',
    question: 'The "killer bee" is a hybrid honey bee that first spread after African bees escaped in which country in 1957?',
    options: ['Brazil', 'Mexico', 'South Africa', 'Australia'],
    answer: 'Brazil',
    funFact: 'The African bees had been brought in a year earlier to try to increase honey production.',
    source: wiki('Africanized_bee'),
    evidence: 'african honey bees were first introduced to brazil in 1956'
  },

  // Other bees
  {
    id: 'bees-011',
    topic: 'Bees',
    question: 'Roughly how many known species of bee are there?',
    options: ['Over 20,000', 'About 500', 'About 2,000', 'Over 200,000'],
    answer: 'Over 20,000',
    funFact: 'Honey bees are just a handful of them.',
    source: wiki('Bee'),
    evidence: 'with over 20,000 known species'
  },
  {
    id: 'bees-012',
    topic: 'Bees',
    question: 'Most bee species live in what way?',
    options: ['Alone, as solitary bees', 'In hives of thousands', 'In pairs', 'Inside ant nests'],
    answer: 'Alone, as solitary bees',
    funFact: 'Over 90% of bees, including mason, carpenter and leafcutter bees, are solitary.',
    source: wiki('Bee'),
    evidence: 'whereas over 90% of bee species'
  },
  {
    id: 'bees-013',
    topic: 'Bees',
    question: 'What is the soft hair covering a bumblebee\'s body called?',
    options: ['Pile', 'Fleece', 'Down', 'Fuzz'],
    answer: 'Pile',
    funFact: 'The hairs are long and branched, which makes bumblebees look and feel fuzzy.',
    source: wiki('Bumblebee'),
    evidence: 'bumblebees have round bodies covered in soft hair (long branched setae) called \'pile\''
  },
  {
    id: 'bees-014',
    topic: 'Bees',
    question: 'Unlike worker honey bees, female bumblebees can do what?',
    options: ['Sting more than once', 'Make large amounts of honey', 'Fly at night', 'Live through several winters'],
    answer: 'Sting more than once',
    funFact: 'They generally ignore people and other animals unless disturbed.',
    source: wiki('Bumblebee'),
    evidence: 'female bumblebees can sting repeatedly'
  },
  {
    id: 'bees-015',
    topic: 'Bees',
    question: 'Bees, wasps and ants hook their front and hind wings together in flight using tiny hooks called what?',
    options: ['Hamuli', 'Elytra', 'Halteres', 'Setae'],
    answer: 'Hamuli',
    funFact: 'Most members of this order, Hymenoptera, have two pairs of wings.',
    source: wiki('Hymenoptera'),
    evidence: 'the forward margin of the hind wing bears a number of hooked bristles, or "hamuli"'
  },

  // Wasps
  {
    id: 'bees-016',
    topic: 'Wasps',
    question: 'Which insect is the world\'s largest hornet?',
    options: ['Asian giant hornet', 'European hornet', 'Bald-faced hornet', 'Tarantula hawk'],
    answer: 'Asian giant hornet',
    funFact: 'News reports nicknamed it the "murder hornet"; entomologists now call it the northern giant hornet.',
    source: wiki('Asian_giant_hornet'),
    evidence: 'is the world\'s largest hornet'
  },
  {
    id: 'bees-017',
    topic: 'Wasps',
    question: 'Hornets are what kind of insect?',
    options: ['Large social wasps', 'A kind of bee', 'Large flies', 'Winged ants'],
    answer: 'Large social wasps',
    funFact: 'They belong to the genus Vespa and are the largest of the social wasps.',
    source: wiki('Hornet'),
    evidence: 'they are the largest of the eusocial wasps'
  },
  {
    id: 'bees-018',
    topic: 'Wasps',
    question: 'Hornets and yellowjackets build their nests from what material?',
    options: ['Paper', 'Mud', 'Wax', 'Silk'],
    answer: 'Paper',
    funFact: 'They make it by chewing wood fibres. Paper wasps, their relatives, build open combs with the cells pointing down.',
    source: wiki('Paper_wasp'),
    evidence: 'which also make nests out of paper'
  },

  // Ants
  {
    id: 'bees-019',
    topic: 'Ants',
    question: 'Ants evolved from which group of insects?',
    options: ['Wasps', 'Termites', 'Beetles', 'Cockroaches'],
    answer: 'Wasps',
    funFact: 'This happened in the Cretaceous period. Termites, which look similar, evolved from cockroaches instead.',
    source: wiki('Ant'),
    evidence: 'ants evolved from vespoid wasp ancestors in the cretaceous period'
  },
  {
    id: 'bees-020',
    topic: 'Ants',
    question: 'Which feature makes ants easy to identify?',
    options: ['Elbowed antennae and a narrow, knotted waist', 'Two pairs of large, clear wings', 'A hard shell over the back', 'Feathery antennae'],
    answer: 'Elbowed antennae and a narrow, knotted waist',
    funFact: 'More than 13,800 ant species have been described out of an estimated 22,000.',
    source: wiki('Ant'),
    evidence: 'they are easily identified by their geniculate (elbowed) antennae'
  },
  {
    id: 'bees-021',
    topic: 'Ants',
    question: 'What do leafcutter ants do with the leaves they carry home?',
    options: ['Use them to farm a fungus they eat', 'Eat them right away', 'Build roofs over the nest', 'Feed them to aphids'],
    answer: 'Use them to farm a fungus they eat',
    funFact: 'Apart from humans, leafcutter ants form some of the largest and most complex animal societies.',
    source: wiki('Leafcutter_ant'),
    evidence: 'cutting leaves which they carry back to their nests to farm fungus'
  },
  {
    id: 'bees-022',
    topic: 'Ants',
    question: 'Unlike most ants, army ants do not do what?',
    options: ['Build a permanent nest', 'Have a queen', 'Hunt other insects', 'Live in colonies'],
    answer: 'Build a permanent nest',
    funFact: 'The colony moves almost constantly and rests in a temporary living camp called a bivouac.',
    source: wiki('Army_ant'),
    evidence: 'army ants do not construct permanent nests'
  },
  {
    id: 'bees-023',
    topic: 'Ants',
    question: 'The bullet ant of Central and South America is famous for what?',
    options: ['An extremely painful sting', 'Running faster than any insect', 'Flying in huge swarms', 'Glowing in the dark'],
    answer: 'An extremely painful sting',
    funFact: 'In Venezuela it is nicknamed the "24-hour ant" for the day of pain that follows a sting.',
    source: wiki('Bullet_ant'),
    evidence: 'is a species of ant known for its extremely painful sting'
  },
  {
    id: 'bees-024',
    topic: 'Ants',
    question: 'How do honeypot ants store food for the colony?',
    options: ['In the swollen bodies of special workers', 'In wax cells like bees', 'Buried in underground granaries', 'In hollow plant stems'],
    answer: 'In the swollen bodies of special workers',
    funFact: 'These "repletes" hang from the nest ceiling and feed their nestmates when food is scarce.',
    source: wiki('Honeypot_ant'),
    evidence: 'honey ants are unique in using their own bodies as living storage'
  }
];
