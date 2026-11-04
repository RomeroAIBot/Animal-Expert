// Hand-checked butterfly and moth trivia (Insects group), November 2026. Same rules as bees.js: topics
// from the user's insect quiz pages, reworded, and each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=butterflies --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const butterflyQuestions = [
  // Order and bodies
  {
    id: 'butterflies-001',
    topic: 'Biology',
    question: 'The name of the butterfly and moth order, Lepidoptera, comes from Greek words meaning what?',
    options: ['Scale wing', 'Beautiful wing', 'Two wings', 'Soft body'],
    answer: 'Scale wing',
    funFact: 'Their wings and bodies are covered in tiny coloured scales.',
    source: wiki('Lepidoptera'),
    evidence: 'the word is derived from greek λεπίς lepís, gen. λεπίδος lepídos ("scale") and πτερόν ("wing")'
  },
  {
    id: 'butterflies-002',
    topic: 'Biology',
    question: 'Butterflies and moths make up the second-largest insect order. Which order is larger?',
    options: ['Beetles', 'Flies', 'Ants, bees and wasps', 'True bugs'],
    answer: 'Beetles',
    funFact: 'About 180,000 species of butterflies and moths have been described.',
    source: wiki('Lepidoptera'),
    evidence: 'making it the second largest insect order (behind coleoptera)'
  },
  {
    id: 'butterflies-003',
    topic: 'Biology',
    question: 'One common way to tell a butterfly from a moth is by the antennae. What do butterfly antennae usually look like?',
    options: ['Thin with clubbed tips', 'Feathery', 'Short and hooked', 'Bent like an elbow'],
    answer: 'Thin with clubbed tips',
    funFact: 'Moth antennae are usually tapering or feathery.',
    source: wiki('Butterfly'),
    evidence: 'have clubbed tips (unlike moths that have tapering or feathery antennae)'
  },
  {
    id: 'butterflies-004',
    topic: 'Biology',
    question: 'Besides the mouthparts, where else does a butterfly have taste receptors?',
    options: ['On its feet', 'On its wings', 'On its eyes', 'On its abdomen'],
    answer: 'On its feet',
    funFact: 'Tasting with their feet helps females find the right plant to lay eggs on.',
    source: wiki('Butterfly'),
    evidence: 'taste receptors are located on the palps and on the feet'
  },
  {
    id: 'butterflies-005',
    topic: 'Life cycle',
    question: 'What is the pupa of a butterfly called?',
    options: ['A chrysalis', 'A cocoon', 'A nymph', 'A larva'],
    answer: 'A chrysalis',
    funFact: 'Many moth pupae are wrapped in a silk cocoon; butterfly pupae usually are not.',
    source: wiki('Pupa'),
    evidence: 'such as chrysalis for the pupae of butterflies'
  },
  {
    id: 'butterflies-006',
    topic: 'Biology',
    question: 'Which came first in evolution, butterflies or moths?',
    options: ['Moths; butterflies evolved from them', 'Butterflies; moths evolved from them', 'They evolved at exactly the same time', 'Neither; both evolved from beetles'],
    answer: 'Moths; butterflies evolved from them',
    funFact: 'The earliest Lepidoptera fossils are about 200 million years old.',
    source: wiki('Butterfly'),
    evidence: 'butterflies evolved from moths'
  },
  {
    id: 'butterflies-007',
    topic: 'Biology',
    question: 'How far away can some male moths detect a female\'s scent?',
    options: ['Up to a kilometre', 'Up to a metre', 'Up to 10 metres', 'Up to 100 kilometres'],
    answer: 'Up to a kilometre',
    funFact: 'Their large, sensitive antennae pick up tiny amounts of the female\'s pheromones.',
    source: wiki('Moth'),
    evidence: 'pheromones up to a kilometre away'
  },

  // Named species
  {
    id: 'butterflies-008',
    topic: 'Species',
    question: 'Each autumn, monarch butterflies from the eastern United States and Canada fly thousands of miles to spend the winter where?',
    options: ['Mexico', 'Brazil', 'Cuba', 'Bermuda'],
    answer: 'Mexico',
    funFact: 'No single butterfly makes the whole round trip; it takes several generations to return north in spring.',
    source: wiki('Monarch_butterfly'),
    evidence: 'southern canada to florida and mexico'
  },
  {
    id: 'butterflies-009',
    topic: 'Species',
    question: 'Monarchs belong to a group of butterflies named after the plant their caterpillars eat. Which plant?',
    options: ['Milkweed', 'Nettle', 'Clover', 'Oak'],
    answer: 'Milkweed',
    funFact: 'Chemicals from the milkweed make monarchs taste bad to many predators.',
    source: wiki('Monarch_butterfly'),
    evidence: 'is a milkweed butterfly'
  },
  {
    id: 'butterflies-010',
    topic: 'Species',
    question: 'Silk is spun by the caterpillar of which insect?',
    options: ['The domestic silk moth', 'The monarch butterfly', 'The atlas moth', 'The luna moth'],
    answer: 'The domestic silk moth',
    funFact: 'The caterpillars are called silkworms. Silk was probably first made in China in the Neolithic period.',
    source: wiki('Bombyx_mori'),
    evidence: 'silkworms are the larvae of silk moths'
  },
  {
    id: 'butterflies-011',
    topic: 'Species',
    question: 'Which is the largest butterfly in the world, with wingspans of up to about 28 cm?',
    options: ['Queen Alexandra\'s birdwing', 'Monarch butterfly', 'Blue morpho butterfly', 'Goliath birdwing'],
    answer: 'Queen Alexandra\'s birdwing',
    funFact: 'It lives only in the forests of Oro Province in Papua New Guinea.',
    source: wiki('Queen_Alexandra\'s_birdwing'),
    evidence: 'is the largest species of butterfly in the world'
  },
  {
    id: 'butterflies-012',
    topic: 'Species',
    question: 'Why do adult atlas moths live for only a week or two?',
    options: ['They cannot eat', 'They are eaten by bats', 'They overheat in daylight', 'They only hatch in winter'],
    answer: 'They cannot eat',
    funFact: 'With no working mouthparts, they live on fat stored up as caterpillars. Luna moths are the same.',
    source: wiki('Atlas_moth'),
    evidence: 'as they lack fully formed mouthparts, the adults cannot eat'
  },
  {
    id: 'butterflies-013',
    topic: 'Species',
    question: 'The glasswing butterfly of Central and South America hides from predators how?',
    options: ['Its wings are see-through', 'It looks like a dead leaf', 'It glows to blind birds', 'It flies only at night'],
    answer: 'Its wings are see-through',
    funFact: 'Clear wings let it blend into the background without needing camouflage colours.',
    source: wiki('Glasswing_butterfly'),
    evidence: 'for its transparent wings, which allow it to camouflage'
  },
  {
    id: 'butterflies-014',
    topic: 'Species',
    question: 'Dark forms of the peppered moth became common in England during the Industrial Revolution. Why?',
    options: ['Soot darkened the tree bark where they rested', 'Coal smoke dyed their wings', 'They fed on darker plants', 'Factories kept them warm at night'],
    answer: 'Soot darkened the tree bark where they rested',
    funFact: 'Pale moths stood out on the dark bark and were eaten more often, a famous example of natural selection.',
    source: wiki('Peppered_moth'),
    evidence: 'became blackened by soot'
  },
  {
    id: 'butterflies-015',
    topic: 'Species',
    question: 'The long tails on a luna moth\'s hind wings are thought to help it escape which predators?',
    options: ['Bats', 'Birds', 'Spiders', 'Frogs'],
    answer: 'Bats',
    funFact: 'The twisting tails seem to confuse the echolocation bats use to find prey.',
    source: wiki('Luna_moth'),
    evidence: 'are thought to confuse the echolocation detection used by predatory bats'
  },
  {
    id: 'butterflies-016',
    topic: 'Species',
    question: 'Hawk moths fly so well, hovering at flowers to feed, that they are often mistaken for which animal?',
    options: ['Hummingbirds', 'Bats', 'Dragonflies', 'Bumblebees'],
    answer: 'Hummingbirds',
    funFact: 'One species is even called the hummingbird hawk-moth.',
    source: wiki('Hawk_moth'),
    evidence: 'similar enough to that of hummingbirds as to be reliably mistaken for them'
  },

  // Added November 2026 from the user's intermediate insect list, corrected where sources disagreed; duplicates and unsupported claims dropped.
  {
    id: 'butterflies-b01',
    topic: 'Basics',
    question: 'What mouthpart do adult butterflies and moths use to drink nectar?',
    options: ['Proboscis', 'Mandibles', 'Labium', 'Chelicerae'],
    answer: 'Proboscis',
    funFact: 'It is also known as the haustellum.',
    source: wiki('Proboscis'),
    evidence: 'this part is known as the proboscis'
  },
  {
    id: 'butterflies-b02',
    topic: 'Basics',
    question: 'Which moth\'s larvae are a serious pest of clothing, especially wool?',
    options: ['Webbing clothes moth', 'Peppered moth', 'Luna moth', 'Atlas moth'],
    answer: 'Webbing clothes moth',
    funFact: 'The larvae can also feed on stored foods.',
    source: wiki('Tineola_bisselliella'),
    evidence: 'they can derive nourishment from clothing'
  }
];
