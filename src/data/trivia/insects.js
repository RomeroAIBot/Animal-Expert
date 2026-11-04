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
  },

  // Added November 2026 from the user's intermediate insect list, corrected where sources disagreed; duplicates and unsupported claims dropped.
  {
    id: 'insects-b01',
    topic: 'Basics',
    question: 'Which insect order includes beetles, with their hardened forewings called elytra?',
    options: ['Coleoptera', 'Hymenoptera', 'Lepidoptera', 'Hemiptera'],
    answer: 'Coleoptera',
    funFact: 'With about 400,000 described species, it is the largest of all insect orders.',
    source: wiki('Beetle'),
    evidence: 'beetles are insects that form the order coleoptera'
  },
  {
    id: 'insects-b02',
    topic: 'Basics',
    question: 'What do insects use to carry oxygen directly to their tissues, since they have no lungs?',
    options: ['Tracheae and spiracles', 'Book lungs', 'Gills', 'Skin chambers'],
    answer: 'Tracheae and spiracles',
    funFact: 'Air enters through paired openings called spiracles on the sides of the thorax and abdomen.',
    source: wiki('Insect'),
    evidence: 'delivering oxygen directly to tissues that need it via their tracheae'
  },
  {
    id: 'insects-b03',
    topic: 'Basics',
    question: 'What is the term for shedding an insect\'s exoskeleton as it grows?',
    options: ['Ecdysis', 'Metamorphosis', 'Diapause', 'Sclerotization'],
    answer: 'Ecdysis',
    funFact: 'The empty exoskeleton left behind is called the exuviae.',
    source: wiki('Ecdysis'),
    evidence: 'it is shed during growth and a new, larger covering is formed'
  },
  {
    id: 'insects-b04',
    topic: 'Basics',
    question: 'Which chemicals do bombardier beetles combine to make their hot defensive spray?',
    options: ['Hydroquinone and hydrogen peroxide', 'Formic acid and water', 'Cyanide and acetic acid', 'Pheromones and terpenes'],
    answer: 'Hydroquinone and hydrogen peroxide',
    funFact: 'They are stored in glands in the abdomen, and catalysts set off the reaction.',
    source: wiki('Bombardier_beetle'),
    evidence: 'catalyzed reaction between hydroquinone and hydrogen peroxide'
  },
  {
    id: 'insects-b05',
    topic: 'Basics',
    question: 'What is the main job of the tympanal organs of insects such as grasshoppers and moths?',
    options: ['Hearing', 'Detecting pheromones', 'Regulating body temperature', 'Making defensive wax'],
    answer: 'Hearing',
    funFact: 'Sound vibrates a thin membrane stretched over an air sac, and sensory neurons pick that up.',
    source: wiki('Tympanal_organ'),
    evidence: 'is a hearing organ in insects'
  },
  {
    id: 'insects-b06',
    topic: 'Basics',
    question: 'Which mosquito genus carries the Plasmodium parasite that causes malaria in humans?',
    options: ['Anopheles', 'Aedes', 'Culex', 'Glossina'],
    answer: 'Anopheles',
    funFact: 'No other mosquito genus is a vector of human malaria.',
    source: wiki('Anopheles'),
    evidence: 'no other mosquito genus is a vector of human malaria'
  },
  {
    id: 'insects-b07',
    topic: 'Basics',
    question: 'In insects with complete metamorphosis, what is the stage between larva and adult called?',
    options: ['Pupa', 'Nymph', 'Instar', 'Imago'],
    answer: 'Pupa',
    funFact: 'The pupa usually stays anchored in one place until the change is complete.',
    source: wiki('Pupa'),
    evidence: 'undergoing metamorphosis between immature and mature stages'
  },
  {
    id: 'insects-b08',
    topic: 'Basics',
    question: 'Which insect order includes dragonflies and damselflies?',
    options: ['Odonata', 'Ephemeroptera', 'Neuroptera', 'Mecoptera'],
    answer: 'Odonata',
    funFact: 'They are predatory flying insects.',
    source: wiki('Odonata'),
    evidence: 'odonata is an order of predatory flying insects that includes dragonflies'
  },
  {
    id: 'insects-b09',
    topic: 'Basics',
    question: 'What is the thin, waxy, water-resistant outer layer of an insect\'s cuticle called?',
    options: ['Epicuticle', 'Procuticle', 'Endocuticle', 'Elytra'],
    answer: 'Epicuticle',
    funFact: 'Unlike the thick layer beneath it, it contains no chitin.',
    source: wiki('Insect'),
    evidence: 'the epicuticle, a thin and waxy water-resistant outer layer without chitin'
  },
  {
    id: 'insects-b10',
    topic: 'Basics',
    question: 'Which insect order contains flies and mosquitoes, whose hind wings are reduced to balancing organs called halteres?',
    options: ['Diptera', 'Hymenoptera', 'Neuroptera', 'Plecoptera'],
    answer: 'Diptera',
    funFact: 'Halteres sense rotation, which gives flies precise control in flight.',
    source: wiki('Fly'),
    evidence: 'the hindwings have evolved into halteres'
  },
  {
    id: 'insects-b11',
    topic: 'Basics',
    question: 'What are the small simple eyes on many insects\' heads, separate from the large compound eyes, called?',
    options: ['Ocelli', 'Stemmata', 'Ommatidia', 'Spiracles'],
    answer: 'Ocelli',
    funFact: 'An insect can have anywhere from zero to three of them.',
    source: wiki('Insect'),
    evidence: 'zero to three simple eyes (or ocelli)'
  },
  {
    id: 'insects-b12',
    topic: 'Basics',
    question: 'What term describes insects that pass through egg, nymph and adult stages, with no pupa?',
    options: ['Hemimetabolous', 'Holometabolous', 'Ametabolous', 'Heterometabolous'],
    answer: 'Hemimetabolous',
    funFact: 'These insects change gradually as they grow.',
    source: wiki('Hemimetabolism'),
    evidence: 'there is no pupal stage'
  },
  {
    id: 'insects-b13',
    topic: 'Basics',
    question: 'Which insect transmits African sleeping sickness (human trypanosomiasis)?',
    options: ['Tsetse fly', 'Anopheles mosquito', 'Triatomine bug', 'Flea'],
    answer: 'Tsetse fly',
    funFact: 'It picks up single-celled trypanosomes while feeding on an infected animal, then passes them on.',
    source: wiki('Tsetse_fly'),
    evidence: 'tsetse are biological vectors of trypanosomes'
  },
  {
    id: 'insects-b14',
    topic: 'Basics',
    question: 'What are the individual units that make up an insect\'s compound eye called?',
    options: ['Ommatidia', 'Ocelli', 'Stemmata', 'Spiracles'],
    answer: 'Ommatidia',
    funFact: 'Each has its own cornea, lens and photoreceptor cells.',
    source: wiki('Ommatidium'),
    evidence: 'are composed of units called ommatidia'
  },
  {
    id: 'insects-b15',
    topic: 'Basics',
    question: 'Which insect order includes grasshoppers, crickets and locusts, with long hind legs for jumping and forewings called tegmina?',
    options: ['Orthoptera', 'Blattodea', 'Phasmatodea', 'Dermaptera'],
    answer: 'Orthoptera',
    funFact: 'The tegmina are narrower than the hind wings and hardened at the base.',
    source: wiki('Orthoptera'),
    evidence: 'elongated hindlegs and musculature adapted for jumping'
  },
  {
    id: 'insects-b16',
    topic: 'Basics',
    question: 'Which two substances do fireflies use to produce their light?',
    options: ['Luciferin and luciferase', 'Chlorophyll and keratin', 'Melanin and chitin', 'Carotenoids and wax'],
    answer: 'Luciferin and luciferase',
    funFact: 'Luciferase is an enzyme that acts on the compound luciferin.',
    source: wiki('Firefly'),
    evidence: 'these fireflies produce the enzyme firefly luciferase'
  },
  {
    id: 'insects-b17',
    topic: 'Basics',
    question: 'Which insect order contains fleas?',
    options: ['Siphonaptera', 'Phthiraptera', 'Psocodea', 'Hemiptera'],
    answer: 'Siphonaptera',
    funFact: 'Their bodies are flattened sideways, which helps them move through fur and feathers.',
    source: wiki('Flea'),
    evidence: 'flea, the common name for the order siphonaptera'
  },
  {
    id: 'insects-b18',
    topic: 'Basics',
    question: 'What is the job of the Malpighian tubules inside an insect?',
    options: ['Removing nitrogen waste and balancing fluids', 'Digesting proteins', 'Pumping hemolymph', 'Making digestive enzymes'],
    answer: 'Removing nitrogen waste and balancing fluids',
    funFact: 'An insect may have anywhere from one to hundreds of them.',
    source: wiki('Insect'),
    evidence: 'these remove nitrogenous wastes from the hemolymph of the insect and regulate osmotic balance'
  },
  {
    id: 'insects-b19',
    topic: 'Basics',
    question: 'Which long-snouted beetles include some of the worst pests of stored grain?',
    options: ['Weevils', 'Flour beetles', 'Ladybugs', 'Carpet beetles'],
    answer: 'Weevils',
    funFact: 'The wheat weevil can cause serious damage to harvested grain.',
    source: wiki('Weevil'),
    evidence: 'known for their very long snouts'
  },
  {
    id: 'insects-b20',
    topic: 'Basics',
    question: 'What is the fluid that circulates through an insect\'s open circulatory system called?',
    options: ['Hemolymph', 'Blood', 'Lymph', 'Serum'],
    answer: 'Hemolymph',
    funFact: 'It carries nutrients around the body, much as blood does in vertebrates.',
    source: wiki('Hemolymph'),
    evidence: 'it is the key component of the open circulatory system'
  },
  {
    id: 'insects-b21',
    topic: 'Basics',
    question: 'Which insect order includes stick insects, masters of camouflage?',
    options: ['Phasmatodea', 'Mantodea', 'Blattodea', 'Dermaptera'],
    answer: 'Phasmatodea',
    funFact: 'Some also defend themselves with startle displays, spines or toxic secretions.',
    source: wiki('Phasmatodea'),
    evidence: 'are an order of insects whose members are variously known as stick insects'
  },
  {
    id: 'insects-b22',
    topic: 'Basics',
    question: 'When grasshoppers change in body and behavior on crowding and become swarming locusts, what is this called?',
    options: ['Phase polyphenism', 'Estivation', 'Diapause', 'Thanatosis'],
    answer: 'Phase polyphenism',
    funFact: 'Boris Uvarov first described it, after the two phases had been mistaken for separate species.',
    source: wiki('Locust'),
    evidence: 'these changes are examples of phase polyphenism'
  },
  {
    id: 'insects-b23',
    topic: 'Basics',
    question: 'What is the scientific name for the group containing all lice?',
    options: ['Phthiraptera', 'Siphonaptera', 'Thysanoptera', 'Hemiptera'],
    answer: 'Phthiraptera',
    funFact: 'It was once a full order, but a 2021 genetic study placed it inside the order Psocodea.',
    source: wiki('Louse'),
    evidence: 'any member of the infraorder phthiraptera'
  },
  {
    id: 'insects-b24',
    topic: 'Basics',
    question: 'What is diapause in insects?',
    options: ['A delay in development during harsh conditions', 'A rapid flight escape reflex', 'A mating dance', 'The shedding of old wings'],
    answer: 'A delay in development during harsh conditions',
    funFact: 'Changes in day length or temperature can trigger it.',
    source: wiki('Diapause'),
    evidence: 'diapause is the delay in development in response to regular and recurring periods of adverse environmental conditions'
  },
  {
    id: 'insects-b25',
    topic: 'Basics',
    question: 'Which insect order includes mayflies?',
    options: ['Ephemeroptera', 'Odonata', 'Plecoptera', 'Trichoptera'],
    answer: 'Ephemeroptera',
    funFact: 'They have a fully winged stage called the subimago, which moults into the adult.',
    source: wiki('Mayfly'),
    evidence: 'aquatic insects belonging to the order ephemeroptera'
  },
  {
    id: 'insects-b26',
    topic: 'Basics',
    question: 'An insect\'s hard outer covering is made mostly of what?',
    options: ['Chitin', 'Cellulose', 'Keratin', 'Collagen'],
    answer: 'Chitin',
    funFact: 'Chitin is also found in the cell walls of fungi.',
    source: wiki('Insect'),
    evidence: 'the hard outer covering made mostly of chitin'
  },
  {
    id: 'insects-b27',
    topic: 'Basics',
    question: 'Silverfish and bristletails, wingless insects with little or no metamorphosis, are traditionally grouped as what?',
    options: ['Apterygota', 'Pterygota', 'Exopterygota', 'Endopterygota'],
    answer: 'Apterygota',
    funFact: 'Their young look much like small adults.',
    source: wiki('Apterygota'),
    evidence: 'two separate clades of wingless insects'
  },
  {
    id: 'insects-b28',
    topic: 'Basics',
    question: 'Which insect order includes caddisflies, whose aquatic larvae often build protective cases?',
    options: ['Trichoptera', 'Megaloptera', 'Neuroptera', 'Lepidoptera'],
    answer: 'Trichoptera',
    funFact: 'The adults look like small moths with two pairs of hairy wings.',
    source: wiki('Caddisfly'),
    evidence: 'the caddisflies (order trichoptera)'
  },
  {
    id: 'insects-b29',
    topic: 'Basics',
    question: 'Which insect order includes praying mantises?',
    options: ['Mantodea', 'Orthoptera', 'Blattodea', 'Phasmatodea'],
    answer: 'Mantodea',
    funFact: 'Their greatly enlarged forelegs are made for catching and gripping prey.',
    source: wiki('Mantis'),
    evidence: 'mantises are an order (mantodea) of insects'
  },
  {
    id: 'insects-b30',
    topic: 'Basics',
    question: 'How do kissing bugs usually pass the Chagas disease parasite to people?',
    options: ['Through infected feces at the bite wound', 'Through venom in their fangs', 'Through airborne egg dust', 'By laying eggs in the bloodstream'],
    answer: 'Through infected feces at the bite wound',
    funFact: 'The parasite is called Trypanosoma cruzi.',
    source: wiki('Chagas_disease'),
    evidence: 'by the kissing bug\'s bite wound and infected feces'
  },
  {
    id: 'insects-b31',
    topic: 'Basics',
    question: 'Which insect order includes stoneflies, whose nymphs are a sign of clean water?',
    options: ['Plecoptera', 'Ephemeroptera', 'Trichoptera', 'Megaloptera'],
    answer: 'Plecoptera',
    funFact: 'The nymphs live in well-oxygenated lakes and streams.',
    source: wiki('Plecoptera'),
    evidence: 'all species of plecoptera are intolerant of water pollution'
  },
  {
    id: 'insects-b32',
    topic: 'Basics',
    question: 'What is the main job of the crop in an insect\'s digestive system?',
    options: ['Storing food', 'Grinding food', 'Absorbing water', 'Making bile'],
    answer: 'Storing food',
    funFact: 'Once food leaves the crop, it passes to the midgut, where most digestion happens.',
    source: wiki('Insect'),
    evidence: 'and crop which stores food'
  },
  {
    id: 'insects-b33',
    topic: 'Basics',
    question: 'What is Batesian mimicry?',
    options: ['A harmless species imitating a harmful one', 'Two toxic species sharing warning colors', 'An insect imitating leaves to hide', 'A predator imitating its prey'],
    answer: 'A harmless species imitating a harmful one',
    funFact: 'The copycat benefits because predators avoid the harmful species\' warning signals.',
    source: wiki('Batesian_mimicry'),
    evidence: 'a harmless species has evolved to imitate the warning signals of a harmful species'
  },
  {
    id: 'insects-b34',
    topic: 'Basics',
    question: 'Which insect order includes earwigs, known for the pincers at the rear of the abdomen?',
    options: ['Dermaptera', 'Orthoptera', 'Blattodea', 'Embioptera'],
    answer: 'Dermaptera',
    funFact: 'The name means "skin wings".',
    source: wiki('Earwig'),
    evidence: 'earwigs make up the insect order dermaptera'
  },
  {
    id: 'insects-b35',
    topic: 'Basics',
    question: 'Which insect order includes lacewings and antlions, also known as net-winged insects?',
    options: ['Neuroptera', 'Megaloptera', 'Mecoptera', 'Raphidioptera'],
    answer: 'Neuroptera',
    funFact: 'The name comes from the Ancient Greek words for "nerve" and "wing".',
    source: wiki('Neuroptera'),
    evidence: 'includes the lacewings, mantidflies, antlions'
  },
  {
    id: 'insects-b36',
    topic: 'Basics',
    question: 'What is Müllerian mimicry?',
    options: ['Well-defended species evolving to look alike', 'Harmless species imitating each other', 'Insects imitating dead bark', 'Parasites imitating host scents'],
    answer: 'Well-defended species evolving to look alike',
    funFact: 'Sharing one warning signal teaches predators to avoid all of them.',
    source: wiki('Müllerian_mimicry'),
    evidence: 'two or more well-defended species'
  },
  {
    id: 'insects-b37',
    topic: 'Basics',
    question: 'Which sap-sucking insects release honeydew and are farmed by some ants?',
    options: ['Aphids', 'Stink bugs', 'Assassin bugs', 'Cicadas'],
    answer: 'Aphids',
    funFact: 'In return, the ants protect them from predators.',
    source: wiki('Aphid'),
    evidence: 'some species of ants farm aphids'
  },
  {
    id: 'insects-b38',
    topic: 'Basics',
    question: 'What does the dorsal vessel do in an insect\'s circulatory system?',
    options: ['Moves hemolymph forward through the body', 'Supplies oxygen to the wings', 'Filters bacteria out of the blood', 'Cools the body by evaporation'],
    answer: 'Moves hemolymph forward through the body',
    funFact: 'It is divided into two sections, the heart and the aorta.',
    source: wiki('Insect'),
    evidence: 'from the rear of the body cavity forward'
  },
  {
    id: 'insects-b39',
    topic: 'Basics',
    question: 'Which insect group includes booklice and barklice?',
    options: ['Psocodea', 'Thysanoptera', 'Siphonaptera', 'Hemiptera'],
    answer: 'Psocodea',
    funFact: 'The group also includes parasitic lice, which are thought to have evolved from among them.',
    source: wiki('Psocodea'),
    evidence: 'comprising the barklice, booklice and parasitic lice'
  }
];
