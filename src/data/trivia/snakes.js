// Hand-checked snake trivia. Same rules as dogs.js: each question replaces one imported question,
// every option is a believable answer of the same kind, facts are checked against the source,
// and questions that could not be made accurate are retired with a reason.

export const snakeQuestions = [
  // Ball python genetics
  {
    id: 'snakes-0160',
    replaces: 'imported-snakes-0160',
    topic: 'Morph genetics',
    question: 'Which of these ball python morphs is recessive?',
    options: ['Clown', 'Pastel', 'Spider', 'Mojave'],
    answer: 'Clown',
    funFact:
      'A recessive morph only shows when the snake has two copies. Pastel and Mojave show with one copy and have super forms; Spider shows with one copy.',
    source: 'https://www.worldofballpythons.com/morphs/clown/',
    evidence: 'clown genetics recessive'
  },
  {
    id: 'snakes-0161',
    replaces: 'imported-snakes-0161',
    topic: 'Morph genetics',
    question: 'A ball python sold as "het Clown" is what?',
    options: [
      'A snake carrying one hidden copy of the Clown gene',
      'A snake showing a faded version of the Clown look',
      'A Clown crossed with another recessive morph',
      'A Clown that was hatched from a mixed clutch'
    ],
    answer: 'A snake carrying one hidden copy of the Clown gene',
    funFact:
      '"Het" is short for heterozygous. The snake looks normal, but bred to a Clown, about half its babies would be visual Clowns.',
    source: 'https://en.wikipedia.org/wiki/Zygosity',
    evidence: 'heterozygous describes a genotype consisting of two different alleles'
  },
  {
    id: 'snakes-0165',
    replaces: 'imported-snakes-0165',
    topic: 'Morph genetics',
    question: 'Pairing a Lesser ball python with a Mojave can produce which striking morph?',
    options: ['Blue-eyed leucistic', 'Albino', 'Piebald', 'Axanthic'],
    answer: 'Blue-eyed leucistic',
    funFact:
      'Lesser, Butter, Mojave, Russo and related morphs are alleles of the same gene, nicknamed the BEL complex. Any two together, including two copies of one, give a solid white snake with blue eyes.',
    source: 'https://www.worldofballpythons.com/morphs/lesser-mojave/',
    evidence: 'leuzist. blue eye'
  },
  {
    id: 'snakes-0166',
    replaces: 'imported-snakes-0166',
    topic: 'Morph genetics',
    question: 'A "Bumblebee" ball python combines which two morphs?',
    options: ['Pastel and Spider', 'Clown and Pastel', 'Mojave and Lesser', 'Piebald and Albino'],
    answer: 'Pastel and Spider',
    funFact:
      'Add a second Pastel gene, Super Pastel plus Spider, and you get the brighter "Killer Bee".',
    source: 'https://www.worldofballpythons.com/morphs/pastel-spider/',
    evidence: 'bumble bee'
  },
  {
    id: 'snakes-0168',
    replaces: 'imported-snakes-0168',
    topic: 'Morph genetics',
    question: 'Which ball python morph is best known for "wobble", a neurological head tremor and loss of balance?',
    options: ['Spider', 'Clown', 'Piebald', 'Pastel'],
    answer: 'Spider',
    funFact:
      'Every Spider is thought to carry the trait, though severity varies from barely visible to corkscrewing and trouble striking. Some breeders have stopped producing Spiders for this reason.',
    source: 'https://www.worldofballpythons.com/morphs/spider/',
    evidence: 'spiders have severe wobbles'
  },
  {
    id: 'snakes-0171',
    replaces: 'imported-snakes-0171',
    topic: 'Morph genetics',
    question: 'How do Caramel Albino ball pythons differ genetically from standard albinos?',
    options: [
      'They are tyrosinase-positive (T+) albinos',
      'They are tyrosinase-negative (T-) albinos',
      'They are a dominant morph',
      'They are a type of leucistic'
    ],
    answer: 'They are tyrosinase-positive (T+) albinos',
    funFact: 'T+ albinos can still make some melanin, which is why Caramels show yellow and brown tones. Several separate Caramel lines are known.',
    source: 'https://www.worldofballpythons.com/morphs/caramel-albino/',
    evidence: 'tyrosinase-positive (t+) albino'
  },
  {
    id: 'snakes-0290',
    replaces: 'imported-snakes-0290',
    topic: 'Morph genetics',
    question: 'In morph genetics, what does it mean when two morphs are "allelic"?',
    options: [
      'They are different versions of the same gene',
      'They always appear together in one snake',
      'They come from the same country of origin',
      'They are both recessive and unlinked'
    ],
    answer: 'They are different versions of the same gene',
    funFact:
      'Allelic morphs combine in a special way. Pairing two different BEL-complex morphs gives a blue-eyed leucistic instead of a simple double-gene snake.',
    source: 'https://en.wikipedia.org/wiki/Allele',
    evidence: 'variant forms of a gene'
  },

  // Husbandry
  {
    id: 'snakes-0174',
    replaces: 'imported-snakes-0174',
    topic: 'Husbandry',
    question: 'What minimum enclosure size do current care guides recommend for an adult ball python?',
    options: ['4 x 2 x 2 feet', '20-gallon tank', '2 x 1 x 1 feet', '10-gallon tank'],
    answer: '4 x 2 x 2 feet',
    funFact: 'That is about 120 x 60 x 60 cm. The old 20-gallon advice is now considered too small for adults.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-terrarium-size',
    evidence: '120 x 60 x 60cm'
  },
  {
    id: 'snakes-0175',
    replaces: 'imported-snakes-0175',
    topic: 'Husbandry',
    question: 'Why do many ball python keepers choose PVC enclosures?',
    options: [
      'They hold humidity well',
      'They let in more sunlight',
      'They are the cheapest option',
      'They need no heat source'
    ],
    answer: 'They hold humidity well',
    funFact: 'They are also lightweight and durable. Glass works too, but it makes steady humidity harder to keep.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-terrarium-size',
    evidence: 'hold humidity well'
  },
  {
    id: 'snakes-0180',
    replaces: 'imported-snakes-0180',
    topic: 'Husbandry',
    question: 'Why should a ball python have a hide at both the warm and cool ends of its enclosure?',
    options: [
      'So it never has to choose between warmth and cover',
      'So it has somewhere to store uneaten food',
      'So it can shed in one and sleep in the other',
      'So the enclosure looks more natural'
    ],
    answer: 'So it never has to choose between warmth and cover',
    funFact:
      'Wild ball pythons spend their days in burrows. With only one hide, a snake may stay too hot or too cold just to feel secure.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-terrarium-decorations',
    evidence: 'need at least 2 hides'
  },
  {
    id: 'snakes-0264',
    replaces: 'imported-snakes-0264',
    topic: 'Husbandry',
    question: 'ReptiFiles suggests placing a mesh barrier between a heat bulb and the snake. Why?',
    options: [
      'To prevent burns',
      'To keep humidity in',
      'To dim the light at night',
      'To stop the snake escaping'
    ],
    answer: 'To prevent burns',
    funFact: 'Snakes may not move off a dangerously hot surface in time. Heat sources should also be run through a thermostat.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-humidity-temperatures',
    evidence: 'preventing burns'
  },
  {
    id: 'snakes-0296',
    replaces: 'imported-snakes-0296',
    topic: 'Husbandry',
    question: 'Which tool reads the surface temperature of a basking spot?',
    options: ['Infrared temperature gun', 'Hygrometer', 'Analog dial thermometer', 'Barometer'],
    answer: 'Infrared temperature gun',
    funFact:
      'A hygrometer measures humidity. Surface temperature matters most because snakes absorb heat through belly contact.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-humidity-temperatures',
    evidence: 'infrared thermometer'
  },
  {
    id: 'snakes-0183',
    replaces: 'imported-snakes-0183',
    topic: 'Feeding',
    question: 'About what temperature should thawed prey be warmed to before offering it to a ball python?',
    options: [
      '98 to 100°F',
      '60 to 65°F',
      '75 to 80°F',
      '120 to 125°F'
    ],
    answer: '98 to 100°F',
    funFact: 'That matches a mouse\'s body temperature. Pythons sense warm prey with heat pits along their lips, so a cold rodent is easy to ignore.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-feeding',
    evidence: 'prey to be about 98-100'
  },
  {
    id: 'snakes-0186',
    replaces: 'imported-snakes-0186',
    topic: 'Feeding',
    question: 'Why should you wait a couple of days after feeding before handling a ball python?',
    options: [
      'Handling too soon can make it regurgitate',
      'It will not recognize you while digesting',
      'Its bite is more venomous after eating',
      'Its scales are softer after a meal'
    ],
    answer: 'Handling too soon can make it regurgitate',
    funFact: 'Ball pythons are not venomous. Regurgitation is stressful and wastes the meal.',
    source: 'https://reptifiles.com/ball-python/care-guide/ball-python-handling-tips',
    evidence: 'lead to regurgitation'
  },
  {
    id: 'snakes-0188',
    replaces: 'imported-snakes-0188',
    topic: 'Feeding',
    question: 'What is "braining" a thawed rodent?',
    options: [
      'Opening the skull to release more scent',
      'Removing the head before feeding',
      'Injecting the rodent with vitamins',
      'Rubbing the rodent with a lizard'
    ],
    answer: 'Opening the skull to release more scent',
    funFact:
      'It is a trick for picky eaters, especially snakes switching from live to frozen-thawed prey. Rubbing prey with another scent is called scenting.',
    source: 'https://www.furrycritter.com/pages/articles/snakes/braining_prey.htm',
    evidence: 'expose brain matter'
  },
  {
    id: 'snakes-0205',
    replaces: 'imported-snakes-0205',
    topic: 'Feeding',
    question: 'Rubbing a mouse with the scent of a lizard or gerbil to tempt a picky snake is called what?',
    options: ['Scenting', 'Braining', 'Assist feeding', 'Imprinting'],
    answer: 'Scenting',
    funFact: 'It helps snakes that fixed on one prey type as hatchlings switch to a more available food.',
    source: 'https://www.furrycritter.com/pages/articles/snakes/scent_importance.htm',
    evidence: 'rub the prey item with something the snake finds appealing'
  },
  {
    id: 'snakes-0285',
    replaces: 'imported-snakes-0285',
    topic: 'Feeding',
    question: 'What is the main health risk of feeding adult ball pythons too often?',
    options: ['Obesity and fatty liver disease', 'Vitamin D deficiency', 'Scale rot', 'Mouth rot'],
    answer: 'Obesity and fatty liver disease',
    funFact: 'Adults grow slowly and need far less food than hatchlings. Many keepers feed adults every few weeks.',
    source: 'https://www.furrycritter.com/pages/articles/snakes/liver_disease.htm',
    evidence: 'caloric surplus that leads to fatty liver disease'
  },

  // Shedding
  {
    id: 'snakes-0189',
    replaces: 'imported-snakes-0189',
    topic: 'Shedding',
    question: 'What is the scientific term for a snake shedding its skin?',
    options: ['Ecdysis', 'Dysecdysis', 'Brumation', 'Autotomy'],
    answer: 'Ecdysis',
    funFact:
      'Dysecdysis is a bad or incomplete shed, brumation is reptile winter dormancy, and autotomy is dropping a tail, as some lizards do.',
    source: 'https://en.wikipedia.org/wiki/Snake',
    evidence: 'the shedding of scales is called ecdysis'
  },
  {
    id: 'snakes-0190',
    replaces: 'imported-snakes-0190',
    topic: 'Shedding',
    question: "Why do a snake's eyes turn cloudy blue before it sheds?",
    options: [
      'Fluid builds up between the old and new skin',
      'The snake has an eye infection',
      'The eyes are getting a new lens',
      'Blood vessels swell to warm the eyes'
    ],
    answer: 'Fluid builds up between the old and new skin',
    funFact: 'Snakes have a clear scale, the spectacle, over each eye, and it is shed along with the rest of the skin.',
    source: 'https://a-z-animals.com/articles/the-blue-eyed-warning-sign-that-means-a-snake-is-about-to-shed/',
    evidence: 'releases fluid between the old and new skin'
  },
  {
    id: 'snakes-0191',
    replaces: 'imported-snakes-0191',
    topic: 'Shedding',
    question: "A snake's cloudy eyes suddenly clear up again. What does that usually mean?",
    options: [
      'It will shed within a few days',
      'The shed has been cancelled',
      'It has finished shedding',
      'It needs a vet visit right away'
    ],
    answer: 'It will shed within a few days',
    funFact: 'New keepers often think the shed is over at this stage, but the snake is about to shed.',
    source: 'https://a-z-animals.com/articles/the-blue-eyed-warning-sign-that-means-a-snake-is-about-to-shed/',
    evidence: 'means shedding is imminent'
  },
  {
    id: 'snakes-0192',
    replaces: 'imported-snakes-0192',
    topic: 'Shedding',
    question: 'Why should you never pull off an eye cap that stayed stuck after a shed?',
    options: [
      'Pulling it off can damage the cornea underneath',
      'It means the snake is losing its sight with age',
      'It is a sign the snake is about to lay eggs',
      'It shows the snake is getting too much food'
    ],
    answer: 'Pulling it off can damage the cornea underneath',
    funFact:
      'Raising humidity often loosens it, and it may come off with the next shed. A stubborn eye cap is a job for a reptile vet, since the clear scale protects a delicate eye.',
    source: 'https://veterinaryvisioncenter.com/spectacular-diseases-in-snakes/',
    evidence: 'may remove the entire spectacle'
  },
  {
    id: 'snakes-0195',
    replaces: 'imported-snakes-0195',
    topic: 'Shedding',
    question: 'What does a healthy snake shed usually look like?',
    options: [
      'One inside-out piece, nose to tail',
      'Small flakes all over the enclosure',
      'Only the head and tail skin',
      'A thick, dark, leathery layer'
    ],
    answer: 'One inside-out piece, nose to tail',
    funFact: 'Patchy or shredded sheds usually mean humidity is too low or the snake has a health problem.',
    source: 'https://reptifiles.com/articles/ball-python-shedding',
    evidence: 'shed its skin in one piece'
  },

  // Senses, anatomy and behavior
  {
    id: 'snakes-0198',
    replaces: 'imported-snakes-0198',
    topic: 'Senses',
    question: "What do the pits along a ball python's lips detect?",
    options: ['Infrared heat', 'Vibrations in the ground', 'Scent particles', 'Ultraviolet light'],
    answer: 'Infrared heat',
    funFact: 'They let the snake sense warm-blooded prey even in total darkness.',
    source: 'https://en.wikipedia.org/wiki/Infrared_sensing_in_snakes',
    evidence: 'radiant heat at wavelengths between 5 and 30'
  },
  {
    id: 'snakes-0229',
    replaces: 'imported-snakes-0229',
    topic: 'Senses',
    question: "How do a pit viper's heat-sensing pits differ from a python's?",
    options: [
      'One pit on each side, between the eye and nostril',
      'Many pits along both jaws',
      'A single pit on top of the head',
      'Pits along the belly scales'
    ],
    answer: 'One pit on each side, between the eye and nostril',
    funFact: 'Pythons and boas have rows of smaller pits along their lips. The two groups evolved heat sensing separately.',
    source: 'https://en.wikipedia.org/wiki/Infrared_sensing_in_snakes',
    evidence: 'one large pit organ on either side of the head, between the eye and the nostril'
  },
  {
    id: 'snakes-0230',
    replaces: 'imported-snakes-0230',
    topic: 'Senses',
    question: "Where does a snake's flicking tongue deliver the scent particles it collects?",
    options: ["Jacobson's organ", 'The nostrils', 'The heat pits', 'The inner ear'],
    answer: "Jacobson's organ",
    funFact: 'Also called the vomeronasal organ, it sits in the roof of the mouth.',
    source: 'https://en.wikipedia.org/wiki/Snake',
    evidence: 'transferred to the vomeronasal organ (also known as jacobson\'s organ)'
  },
  {
    id: 'snakes-0242',
    replaces: 'imported-snakes-0242',
    topic: 'Senses',
    question: "Why is a snake's tongue forked?",
    options: [
      'To detect the direction of a scent trail',
      'To grip prey while swallowing it',
      'To taste food before biting it',
      'To release heat and cool down'
    ],
    answer: 'To detect the direction of a scent trail',
    funFact: 'Each tip samples a slightly different spot, letting the snake follow a scent trail like smelling in stereo.',
    source: 'https://en.wikipedia.org/wiki/Snake',
    evidence: 'the forked structure of the tongue provides directional information of smell'
  },
  {
    id: 'snakes-0260',
    replaces: 'imported-snakes-0260',
    topic: 'Senses',
    question: 'Snakes have no external ears. How do they mainly sense sound?',
    options: [
      'Vibrations picked up through the body',
      'Hairs inside the nostrils',
      'Heat pits along the lips',
      'Their forked tongue'
    ],
    answer: 'Vibrations picked up through the body',
    funFact:
      'Vibrations travel through skin receptors to the spine and through the lungs to the inner ear. Snakes hear low-frequency sounds and ground vibrations best.',
    source: 'https://en.wikipedia.org/wiki/Snake',
    evidence: 'transmission of vibrations through ventral skin receptors'
  },
  {
    id: 'snakes-0200',
    replaces: 'imported-snakes-0200',
    topic: 'Behavior',
    question: 'Research shows constricting snakes usually kill their prey mainly by doing what?',
    options: ['Stopping blood circulation', 'Suffocating it slowly', 'Breaking its bones', 'Injecting mild venom'],
    answer: 'Stopping blood circulation',
    funFact:
      'A 2015 study of boa constrictors found the squeeze stops blood flow and the heart within minutes, much faster than suffocation.',
    source: 'https://en.wikipedia.org/wiki/Constriction',
    evidence: 'blood flow stops'
  },
  {
    id: 'snakes-0254',
    replaces: 'imported-snakes-0254',
    topic: 'Behavior',
    question: 'How do most vipers handle large prey?',
    options: [
      'Strike, release, then track it by scent',
      'Bite and hold while constricting',
      'Swallow it alive without biting',
      'Drown it in water first'
    ],
    answer: 'Strike, release, then track it by scent',
    funFact: 'Letting go keeps the snake safe from struggling prey. Pythons and boas bite and hold instead.',
    source: 'https://en.wikipedia.org/wiki/Viperidae',
    evidence: 'need to track down prey animals after they have been bitten'
  },
  {
    id: 'snakes-0238',
    replaces: 'imported-snakes-0238',
    topic: 'Behavior',
    question: 'Young green tree pythons and death adders wiggle a brightly colored tail tip to attract prey. What is this called?',
    options: ['Caudal luring', 'Tail autotomy', 'Flagging', 'Tail rattling'],
    answer: 'Caudal luring',
    funFact: 'The tail tip mimics a worm or insect, drawing lizards and frogs within striking range.',
    source: 'https://en.wikipedia.org/wiki/Caudal_luring',
    evidence: 'wriggling of the predator\'s tail to attract prey'
  },
  {
    id: 'snakes-0241',
    replaces: 'imported-snakes-0241',
    topic: 'Behavior',
    question: 'What is the accordion-like movement snakes use in tunnels and when climbing?',
    options: ['Concertina', 'Sidewinding', 'Rectilinear', 'Lateral undulation'],
    answer: 'Concertina',
    funFact:
      'Lateral undulation is the everyday S-shaped slither, sidewinding is used on loose sand, and rectilinear is a slow straight crawl used by heavy snakes.',
    source: 'https://en.wikipedia.org/wiki/Snake_locomotion',
    evidence: 'in tunnels, snakes rely on concertina locomotion'
  },
  {
    id: 'snakes-0261',
    replaces: 'imported-snakes-0261',
    topic: 'Anatomy',
    question: 'About how many vertebrae can a snake have?',
    options: [
      'From 175 to more than 400',
      'From 20 to 40',
      'From 60 to 80',
      'From 1,000 to 2,000'
    ],
    answer: 'From 175 to more than 400',
    funFact: 'Most of them carry a pair of ribs. Humans have 33 vertebrae.',
    source: 'https://en.wikipedia.org/wiki/Snake_skeleton',
    evidence: 'from 175 to more than 400 vertebrae'
  },
  {
    id: 'snakes-0258',
    replaces: 'imported-snakes-0258',
    topic: 'Anatomy',
    question: 'The small claw-like spurs beside the vent of pythons and boas are remnants of what?',
    options: ['Hind legs', 'Gills', 'A second tail', 'Fins'],
    answer: 'Hind legs',
    funFact: 'Inside, there are traces of a pelvis, evidence that snakes evolved from legged ancestors.',
    source: 'https://en.wikipedia.org/wiki/Pelvic_spur',
    evidence: 'derives from ancestral hind limbs'
  },
  {
    id: 'snakes-0216',
    replaces: 'imported-snakes-0216',
    topic: 'Anatomy',
    question: 'In ball pythons, which sex usually has larger cloacal spurs?',
    options: ['Males', 'Females', 'Both are the same', 'Only juveniles have spurs'],
    answer: 'Males',
    funFact: 'Males use the spurs to stroke the female during courtship. Spur size is a hint, not proof, of sex.',
    source: 'https://en.wikipedia.org/wiki/Pelvic_spur',
    evidence: 'spurs were found to be significantly larger in males'
  },
  {
    id: 'snakes-0256',
    replaces: 'imported-snakes-0256',
    topic: 'Anatomy',
    question: 'In ball pythons, which sex usually grows larger?',
    options: ['Females', 'Males', 'Neither; they are the same size', 'It depends on the morph'],
    answer: 'Females',
    funFact: 'The difference is modest: ReptiFiles cites females at about 3.8 to 4.5 feet and males at about 3.6 to 4.3 feet.',
    source: 'https://reptifiles.com/ball-python/care-guide',
    evidence: 'males typically grow 3.6-4.3'
  },
  {
    id: 'snakes-0237',
    replaces: 'imported-snakes-0237',
    topic: 'Anatomy',
    question: 'In herpetology, what does "SVL" measure?',
    options: [
      'From the tip of the snout to the vent',
      'From the snout to the tip of the tail',
      'The widest point of the body',
      'From the vent to the tip of the tail'
    ],
    answer: 'From the tip of the snout to the vent',
    funFact: 'SVL stands for snout-vent length. It leaves out the tail, which is easily injured and varies a lot.',
    source: 'https://en.wikipedia.org/wiki/Snout%E2%80%93vent_length',
    evidence: 'from the tip of the snout to the most posterior opening'
  },
  {
    id: 'snakes-0318',
    replaces: 'imported-snakes-0318',
    topic: 'Anatomy',
    question: "What is counting a snake's belly scales mainly used for?",
    options: ['Identifying the species', 'Estimating its age', 'Telling whether it is venomous', 'Predicting its next shed'],
    answer: 'Identifying the species',
    funFact: 'Ventral and subcaudal scale counts, plus scale rows at mid-body, are standard tools in identification keys.',
    source: 'https://en.wikipedia.org/wiki/Snake_scale',
    evidence: 'the arrangement of scales is used to identify snake species'
  },
  {
    id: 'snakes-0232',
    replaces: 'imported-snakes-0232',
    topic: 'Anatomy',
    question: "What is a rattlesnake's rattle made of?",
    options: ['Keratin', 'Bone', 'Cartilage', 'Chitin'],
    answer: 'Keratin',
    funFact: 'Keratin is the same protein as your fingernails. A new segment is added each time the snake sheds.',
    source: 'https://en.wikipedia.org/wiki/Rattlesnake',
    evidence: 'interlocked segments made of keratin'
  },
  {
    id: 'snakes-0233',
    replaces: 'imported-snakes-0233',
    topic: 'Anatomy',
    question: "Why can't you tell a rattlesnake's age by counting its rattle segments?",
    options: [
      'It adds segments several times a year and they break off',
      'Segments are only added every other year',
      'Only males grow new segments',
      'The rattle stops growing after the first year'
    ],
    answer: 'It adds segments several times a year and they break off',
    funFact: 'A new segment comes with every shed, which can happen several times a year in young, fast-growing snakes.',
    source: 'https://en.wikipedia.org/wiki/Rattlesnake',
    evidence: 'not related to the age of a rattlesnake'
  },
  {
    id: 'snakes-0244',
    replaces: 'imported-snakes-0244',
    topic: 'Species',
    question: 'Emerald tree boas are green as adults. What color are they when they hatch?',
    options: ['Red or orange', 'Bright green', 'Black', 'Blue'],
    answer: 'Red or orange',
    funFact: 'They change to green during their first year. Green tree pythons do something similar, starting yellow or red.',
    source: 'https://en.wikipedia.org/wiki/Corallus_caninus',
    evidence: 'orange or brick-red before ontogenetic coloration'
  },
  {
    id: 'snakes-0316',
    replaces: 'imported-snakes-0316',
    topic: 'Species',
    question: 'The South American emerald tree boa looks strikingly like which unrelated snake from the other side of the world?',
    options: ['Green tree python', 'Green mamba', 'Rough green snake', 'Boomslang'],
    answer: 'Green tree python',
    funFact:
      'Both are green, tree-dwelling constrictors that rest in coils over a branch, a classic case of convergent evolution.',
    source: 'https://en.wikipedia.org/wiki/Corallus_caninus',
    evidence: 'an example of convergent evolution'
  },

  // Health
  {
    id: 'snakes-0217',
    replaces: 'imported-snakes-0217',
    topic: 'Health',
    question: 'A python or boa repeatedly holds its head pointed straight up ("stargazing"). What is this a classic sign of?',
    options: [
      'A neurological disease',
      'Excitement before a meal',
      'Normal behavior before shedding',
      'Alertness to a new smell'
    ],
    answer: 'A neurological disease',
    funFact:
      'A classic cause is inclusion body disease, a fatal viral illness of boas and pythons, so stargazing always warrants a vet visit.',
    source: 'https://en.wikipedia.org/wiki/Inclusion_body_disease',
    evidence: 'or stargazing'
  },
  {
    id: 'snakes-0218',
    replaces: 'imported-snakes-0218',
    topic: 'Health',
    question: 'Wheezing, bubbles at the nostrils and open-mouth breathing in a snake suggest what?',
    options: ['A respiratory infection', 'An upcoming shed', 'Normal digestion', 'Mite infestation'],
    answer: 'A respiratory infection',
    funFact: 'Low temperatures or poor humidity often contribute. It needs veterinary treatment.',
    source: 'https://www.merckvetmanual.com/all-other-pets/reptiles/disorders-and-diseases-of-reptiles',
    evidence: 'open-mouth breathing, discharge from the nose'
  },
  {
    id: 'snakes-0220',
    replaces: 'imported-snakes-0220',
    topic: 'Health',
    question: "Red gums and cheese-like material in a snake's mouth are signs of what?",
    options: ['Stomatitis (mouth rot)', 'Scale rot', 'Retained shed', 'Normal shedding of teeth'],
    answer: 'Stomatitis (mouth rot)',
    funFact: 'It is usually a bacterial infection that follows injury, stress or poor husbandry, and it can spread into the jaw bone.',
    source: 'https://www.merckvetmanual.com/all-other-pets/reptiles/disorders-and-diseases-of-reptiles',
    evidence: 'infection and inflammation of the tissue lining the mouth'
  },
  {
    id: 'snakes-0257',
    replaces: 'imported-snakes-0257',
    topic: 'Health',
    question: "Scale rot, a bacterial infection of a snake's belly scales, is usually linked to what?",
    options: [
      'Constantly wet or dirty substrate',
      'Too much handling',
      'Feeding frozen prey',
      'Bright lighting'
    ],
    answer: 'Constantly wet or dirty substrate',
    funFact: 'High humidity is fine; soggy bedding is not. Infected scales look discolored, blistered or pitted.',
    source: 'https://reptifiles.com/articles/boa-constrictor-scale-rot',
    evidence: 'substrate too wet'
  },
  {
    id: 'snakes-0222',
    replaces: 'imported-snakes-0222',
    topic: 'Health',
    question: 'What is the scientific name of the common snake mite?',
    options: ['Ophionyssus natricis', 'Sarcoptes scabiei', 'Ixodes scapularis', 'Demodex canis'],
    answer: 'Ophionyssus natricis',
    funFact:
      'The mites are tiny and black and often found around the eyes and chin. Treatment covers the snake and the whole enclosure, repeated to break the life cycle.',
    source: 'https://en.wikipedia.org/wiki/Ophionyssus_natricis',
    evidence: 'the reptile mite'
  },
  {
    id: 'snakes-0223',
    replaces: 'imported-snakes-0223',
    topic: 'Health',
    question: 'Cryptosporidium serpentis infection in snakes typically causes what?',
    options: [
      'Repeated regurgitation and weight loss',
      'Bright patches of new color',
      'Faster growth and shedding',
      'Temporary blindness during shed'
    ],
    answer: 'Repeated regurgitation and weight loss',
    funFact:
      'There is no reliable cure, so new snakes are often tested by fecal PCR during quarantine, and positive snakes are kept isolated.',
    source: 'https://en.wikipedia.org/wiki/Cryptosporidium_serpentis',
    evidence: 'repetitive regurgitation'
  },

  // Species, taxonomy and law
  {
    id: 'snakes-0206',
    replaces: 'imported-snakes-0206',
    topic: 'Species',
    question: 'What is the ball python\'s scientific name?',
    options: ['Python regius', 'Python bivittatus', 'Python sebae', 'Python reticulatus'],
    answer: 'Python regius',
    funFact: '"Regius" means royal, which is why it is called the royal python in the UK.',
    source: 'https://en.wikipedia.org/wiki/Ball_python',
    evidence: 'python regius'
  },
  {
    id: 'snakes-0207',
    replaces: 'imported-snakes-0207',
    topic: 'Species',
    question: 'Where are ball pythons native?',
    options: ['West and Central Africa', 'Southeast Asia', 'Northern Australia', 'South America'],
    answer: 'West and Central Africa',
    funFact: 'They live in grasslands and open forest and spend the day in burrows.',
    source: 'https://en.wikipedia.org/wiki/Ball_python',
    evidence: 'native to west and central africa'
  },
  {
    id: 'snakes-0208',
    replaces: 'imported-snakes-0208',
    topic: 'Species',
    question: 'The ball python is listed in which CITES appendix?',
    options: ['Appendix II', 'Appendix I', 'Appendix III', 'It is not listed'],
    answer: 'Appendix II',
    funFact: 'Appendix II means international trade is allowed but regulated with permits. Appendix I bans most commercial trade.',
    source: 'https://news.mongabay.com/2020/05/prized-as-pets-are-ball-pythons-being-traded-out-of-wild-existence/',
    evidence: 'listed under cites appendix ii'
  },
  {
    id: 'snakes-0309',
    replaces: 'imported-snakes-0309',
    topic: 'Species',
    question: 'What is one of the biggest threats to wild ball python populations?',
    options: [
      'Collection for the international pet trade',
      'Competition from invasive cane toads',
      'Overfishing of their main prey',
      'Disease spread by domestic cats'
    ],
    answer: 'Collection for the international pet trade',
    funFact: 'Habitat loss and local hunting also play a part. Buying captive-bred snakes reduces pressure on wild populations.',
    source: 'https://en.wikipedia.org/wiki/Ball_python',
    evidence: 'capture of wild specimens for sale continues to cause significant damage'
  },
  {
    id: 'snakes-0211',
    replaces: 'imported-snakes-0211',
    topic: 'Species',
    question: 'What is the corn snake\'s current scientific name?',
    options: ['Pantherophis guttatus', 'Lampropeltis getula', 'Elaphe obsoleta', 'Thamnophis sirtalis'],
    answer: 'Pantherophis guttatus',
    funFact: 'It used to be Elaphe guttata. The name "corn snake" may come from the checkered belly that resembles Indian corn.',
    source: 'https://en.wikipedia.org/wiki/Corn_snake',
    evidence: 'the corn snake (pantherophis guttatus)'
  },
  {
    id: 'snakes-0212',
    replaces: 'imported-snakes-0212',
    topic: 'Species',
    question: 'Which features tell a corn snake apart from a venomous copperhead?',
    options: [
      'Round pupils and no heat pits',
      'Vertical pupils and heat pits',
      'A rattle and a triangular head',
      'Keeled scales and a pointed tail'
    ],
    answer: 'Round pupils and no heat pits',
    funFact: 'Copperheads, like other pit vipers, have cat-like pupils and a heat pit between each eye and nostril.',
    source: 'https://en.wikipedia.org/wiki/Corn_snake',
    evidence: 'round pupils, and lack of heat-sensing pits'
  },
  {
    id: 'snakes-0275',
    replaces: 'imported-snakes-0275',
    topic: 'Morph genetics',
    question: 'An anerythristic corn snake lacks which pigment?',
    options: ['Red', 'Black', 'Yellow', 'All pigment'],
    answer: 'Red',
    funFact:
      'Without red pigment it looks gray, black and white. Combine it with amelanistic (no black) and you get the pale "Snow" corn.',
    source: 'https://en.wikipedia.org/wiki/Corn_snake',
    evidence: 'lacking erythrin (red'
  },
  {
    id: 'snakes-0274',
    replaces: 'imported-snakes-0274',
    topic: 'Morph genetics',
    question: 'How can you tell a leucistic white snake from an albino one?',
    options: [
      'Leucistic snakes have dark or blue eyes',
      'Leucistic snakes have pink or red eyes',
      'Albino snakes have no scales',
      'Albino snakes are always yellow'
    ],
    answer: 'Leucistic snakes have dark or blue eyes',
    funFact: 'Albinism removes melanin, so blood vessels show through and the eyes look pink or red.',
    source: 'https://en.wikipedia.org/wiki/Leucism',
    evidence: 'but not the eyes'
  },
  {
    id: 'snakes-0227',
    replaces: 'imported-snakes-0227',
    topic: 'Species',
    question: "Which species is the world's longest snake?",
    options: ['Reticulated python', 'Green anaconda', 'Burmese python', 'King cobra'],
    answer: 'Reticulated python',
    funFact: 'The green anaconda is the heaviest, but reticulated pythons have been reliably measured at over 6 meters (20 feet).',
    source: 'https://en.wikipedia.org/wiki/Reticulated_python',
    evidence: 'it is the world\'s longest snake'
  },
  {
    id: 'snakes-0228',
    replaces: 'imported-snakes-0228',
    topic: 'Species',
    question: 'Where in the United States has the Burmese python become a damaging invasive species?',
    options: ['The Florida Everglades', 'The Texas Gulf Coast', 'The Mojave Desert', 'The Mississippi Delta'],
    answer: 'The Florida Everglades',
    funFact: 'Released and escaped pets established a breeding population, and native mammal numbers there have crashed.',
    source: 'https://en.wikipedia.org/wiki/Burmese_pythons_in_Florida',
    evidence: 'everglades'
  },
  {
    id: 'snakes-0294',
    replaces: 'imported-snakes-0294',
    topic: 'Species',
    question: 'In 2012, which U.S. law was used to list the Burmese python as injurious wildlife, restricting its import and interstate transport?',
    options: ['The Lacey Act', 'The Endangered Species Act', 'The Animal Welfare Act', 'The Clean Water Act'],
    answer: 'The Lacey Act',
    funFact: 'The yellow anaconda and the northern and southern African rock pythons were listed at the same time.',
    source: 'https://www.fws.gov/law/lacey-act',
    evidence: 'any importation of injurious wildlife'
  },
  {
    id: 'snakes-0239',
    replaces: 'imported-snakes-0239',
    topic: 'Species',
    question: 'Most pythons lay eggs. What do most boas do?',
    options: ['Give birth to live young', 'Lay eggs in water', 'Carry eggs on their backs', 'Lay eggs in termite mounds'],
    answer: 'Give birth to live young',
    funFact: 'Pythons are mostly Old World egg-layers. Boas are mostly New World and give live birth.',
    source: 'https://en.wikipedia.org/wiki/Boidae',
    evidence: 'they give birth to live young'
  },
  {
    id: 'snakes-0266',
    replaces: 'imported-snakes-0266',
    topic: 'Species',
    question: 'Corn snakes, kingsnakes and rat snakes belong to which family?',
    options: ['Colubridae', 'Boidae', 'Elapidae', 'Viperidae'],
    answer: 'Colubridae',
    funFact: 'Colubrids are a huge family. Most are harmless to people, though a few rear-fanged species are dangerous.',
    source: 'https://en.wikipedia.org/wiki/Colubridae',
    evidence: 'it is the largest snake family'
  },
  {
    id: 'snakes-0259',
    replaces: 'imported-snakes-0259',
    topic: 'Species',
    question: 'Snakes belong to which reptile order, which they share with lizards?',
    options: ['Squamata', 'Testudines', 'Crocodilia', 'Rhynchocephalia'],
    answer: 'Squamata',
    funFact: 'Testudines are turtles, Crocodilia are crocodiles, and Rhynchocephalia has a single living species, the tuatara.',
    source: 'https://en.wikipedia.org/wiki/Squamata',
    evidence: 'with the group also including snakes'
  },
  {
    id: 'snakes-0248',
    replaces: 'imported-snakes-0248',
    topic: 'Species',
    question: 'The white-lipped python is native to which island?',
    options: ['New Guinea', 'Madagascar', 'Borneo', 'Sri Lanka'],
    answer: 'New Guinea',
    funFact: 'It is known for its iridescent scales and a feisty temperament, especially when young.',
    source: 'https://en.wikipedia.org/wiki/Leiopython_albertisii',
    evidence: 'the species is endemic to new guinea'
  },

  // Venom and snakebite
  {
    id: 'snakes-0234',
    replaces: 'imported-snakes-0234',
    topic: 'Venom',
    question: 'Venom from cobras, mambas and coral snakes mainly attacks which body system?',
    options: ['The nervous system', 'The skin', 'The digestive system', 'The skeleton'],
    answer: 'The nervous system',
    funFact:
      'Neurotoxic venom can cause paralysis and stop breathing. Many viper venoms mainly damage blood and tissue instead, and most venoms are a mix.',
    source: 'https://en.wikipedia.org/wiki/Snake_venom',
    evidence: 'neurotoxic venom acts on the nervous system'
  },
  {
    id: 'snakes-0235',
    replaces: 'imported-snakes-0235',
    topic: 'Venom',
    question: 'The black mamba gets its name from what?',
    options: [
      'The inky black inside of its mouth',
      'Its jet-black scales',
      'Hunting only at night',
      'The black fangs it shows when striking'
    ],
    answer: 'The inky black inside of its mouth',
    funFact: 'Its body is actually olive, gray or brown. It shows the black mouth as a threat display.',
    source: 'https://en.wikipedia.org/wiki/Black_mamba',
    evidence: 'describes rather the inside of its mouth'
  },
  {
    id: 'snakes-0236',
    replaces: 'imported-snakes-0236',
    topic: 'Venom',
    question: 'Which snake has the most toxic venom of any land snake, based on standard mouse tests?',
    options: ['Inland taipan', 'Black mamba', 'King cobra', 'Eastern diamondback rattlesnake'],
    answer: 'Inland taipan',
    funFact: 'It lives in remote central Australia and is shy, so bites to people are very rare.',
    source: 'https://en.wikipedia.org/wiki/Inland_taipan',
    evidence: 'widely regarded as the most venomous snake in the world'
  },
  {
    id: 'snakes-0252',
    replaces: 'imported-snakes-0252',
    topic: 'Venom',
    question: 'Which venomous snake has the longest fangs?',
    options: ['Gaboon viper', 'King cobra', 'Black mamba', 'Eastern diamondback rattlesnake'],
    answer: 'Gaboon viper',
    funFact: 'Its fangs can be about 5 cm (2 inches) long, and it also delivers one of the largest venom yields.',
    source: 'https://en.wikipedia.org/wiki/Gaboon_viper',
    evidence: 'longest fangs of any venomous snake'
  },
  {
    id: 'snakes-0268',
    replaces: 'imported-snakes-0268',
    topic: 'Snakebite',
    question: 'About how many people does the World Health Organization estimate die from snakebite each year?',
    options: [
      'About 81,000 to 138,000',
      'About 1,000',
      'About 10,000',
      'Over 1 million'
    ],
    answer: 'About 81,000 to 138,000',
    funFact: 'Around three times as many people are left with amputations or other permanent disabilities.',
    source: 'https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming',
    evidence: '81 410 to 137 880 people die each year'
  },
  {
    id: 'snakes-0269',
    replaces: 'imported-snakes-0269',
    topic: 'Snakebite',
    question: 'In 2017, the World Health Organization added snakebite envenoming to which list?',
    options: ['Neglected tropical diseases', 'Pandemic threats', 'Vaccine-preventable diseases', 'Notifiable infectious diseases'],
    answer: 'Neglected tropical diseases',
    funFact: 'WHO aims to halve deaths and disabilities from snakebite by 2030.',
    source: 'https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming',
    evidence: 'highest priority neglected tropical disease in june 2017'
  },
  {
    id: 'snakes-0279',
    replaces: 'imported-snakes-0279',
    topic: 'Snakebite',
    question: 'Pressure immobilization bandaging is the recommended snakebite first aid in which country?',
    options: [
      'Australia',
      'India',
      'Brazil',
      'United States'
    ],
    answer: 'Australia',
    funFact: 'The technique was developed in the 1970s by Australian researcher Struan Sutherland and is also used for funnel-web spider bites.',
    source: 'https://en.wikipedia.org/wiki/Pressure_immobilization_technique',
    evidence: 'recommended first-aid procedure in australia'
  },
  {
    id: 'snakes-0270',
    replaces: 'imported-snakes-0270',
    topic: 'Snakebite',
    question: 'Severe swelling after a viper bite can crush muscles and nerves inside a closed space. What is this called?',
    options: ['Compartment syndrome', 'Rhabdomyolysis', 'Anaphylaxis', 'Necrotizing fasciitis'],
    answer: 'Compartment syndrome',
    funFact: 'It is uncommon after snakebite, and antivenom is the first treatment; surgery is a last resort.',
    source: 'https://en.wikipedia.org/wiki/Compartment_syndrome',
    evidence: 'compartment syndrome after snake bite is rare'
  },
  {
    id: 'snakes-0271',
    replaces: 'imported-snakes-0271',
    topic: 'Snakebite',
    question: 'Sea snake venom can break down skeletal muscle. What is this condition called?',
    options: ['Rhabdomyolysis', 'Compartment syndrome', 'Myasthenia gravis', 'Osteoporosis'],
    answer: 'Rhabdomyolysis',
    funFact: 'Muscle proteins released into the blood can damage the kidneys.',
    source: 'https://en.wikipedia.org/wiki/Rhabdomyolysis',
    evidence: 'or snake bites'
  },
  {
    id: 'snakes-0272',
    replaces: 'imported-snakes-0272',
    topic: 'Species',
    question: 'True sea snakes are found mainly in which oceans?',
    options: ['Indian and Pacific', 'Atlantic and Arctic', 'Atlantic only', 'Southern Ocean'],
    answer: 'Indian and Pacific',
    funFact:
      'There are none in the Atlantic. Cold water off southern Africa and the closing of the Isthmus of Panama likely kept them out.',
    source: 'https://archive.news.ufl.edu/articles/2018/03/there-are-dozens-of-sea-snake-species-in-the-indian-and-pacific-oceans-but-none-in-the-caribbean-why.html',
    evidence: 'dozens of sea snake species in the indian and pacific oceans'
  },

  // Reproduction
  {
    id: 'snakes-0224',
    replaces: 'imported-snakes-0224',
    topic: 'Reproduction',
    question: 'What does "gravid" mean for a female reptile?',
    options: ['Carrying eggs or young', 'Ready to shed', 'Too old to breed', 'In winter dormancy'],
    answer: 'Carrying eggs or young',
    funFact: 'It is the reptile word for pregnant. Winter dormancy is called brumation.',
    source: 'https://en.wikipedia.org/wiki/Gravidity_and_parity',
    evidence: 'when carrying eggs internally'
  },
  {
    id: 'snakes-0251',
    replaces: 'imported-snakes-0251',
    topic: 'Reproduction',
    question: 'Snakes that lay eggs are described as what?',
    options: ['Oviparous', 'Viviparous', 'Parthenogenetic', 'Ectothermic'],
    answer: 'Oviparous',
    funFact: 'Live-bearing snakes, like most boas and garter snakes, are viviparous.',
    source: 'https://en.wikipedia.org/wiki/Oviparity',
    evidence: 'reproduce by depositing'
  },
  {
    id: 'snakes-0225',
    replaces: 'imported-snakes-0225',
    topic: 'Reproduction',
    question: 'How many eggs does a ball python usually lay in one clutch?',
    options: [
      '3 to 11',
      '20 to 30',
      '1 or 2',
      '40 to 50'
    ],
    answer: '3 to 11',
    funFact: 'The eggs are large and leathery, and the female coils around them.',
    source: 'https://en.wikipedia.org/wiki/Ball_python',
    evidence: 'three to 11 rather large, leathery eggs'
  },
  {
    id: 'snakes-0226',
    replaces: 'imported-snakes-0226',
    topic: 'Reproduction',
    question: 'About how long do ball python eggs take to hatch at around 89°F (32°C)?',
    options: ['About 55 to 60 days', 'About 2 weeks', 'About 4 months', 'About 6 months'],
    answer: 'About 55 to 60 days',
    funFact: 'Incubators are kept very humid. Hatchlings slit the shell with an egg tooth and may wait a day or two before leaving.',
    source: 'https://en.wikipedia.org/wiki/Ball_python',
    evidence: 'the eggs hatch after 55 to 60 days'
  },
  {
    id: 'snakes-0281',
    replaces: 'imported-snakes-0281',
    topic: 'Reproduction',
    question: 'What do breeders mean when two snakes are "locked"?',
    options: ['They are mating', 'They are fighting', 'They refuse to eat', 'They are in shed'],
    answer: 'They are mating',
    funFact: 'Pythons can stay locked for many hours, and several locks may happen over a breeding season.',
    source: 'https://www.thecritterdepot.com/blogs/news/how-to-breed-ball-pythons-the-critter-depot',
    evidence: 'locked-in'
  },
  {
    id: 'snakes-0302',
    replaces: 'imported-snakes-0302',
    topic: 'Reproduction',
    question: 'Breeders commonly wait until a female ball python weighs about how much before her first breeding?',
    options: ['About 1,500 grams', 'About 300 grams', 'About 700 grams', 'About 5,000 grams'],
    answer: 'About 1,500 grams',
    funFact: 'The same guide suggests males should weigh at least 800 grams. Breeding a female too small raises the risk of complications.',
    source: 'https://www.thecritterdepot.com/blogs/news/how-to-breed-ball-pythons-the-critter-depot',
    evidence: 'females need to be a minimum of 1,500 grams'
  },
  {
    id: 'snakes-0310',
    replaces: 'imported-snakes-0310',
    topic: 'Reproduction',
    question: 'A captive population started from only a few wild animals has limited genetic diversity. What is this called?',
    options: ['The founder effect', 'Hybrid vigor', 'Genetic drift reversal', 'Natural selection'],
    answer: 'The founder effect',
    funFact: 'Inbreeding in such lines can bring out hidden genetic problems.',
    source: 'https://en.wikipedia.org/wiki/Founder_effect',
    evidence: 'established by a very small number of individuals'
  },
  {
    id: 'snakes-0311',
    replaces: 'imported-snakes-0311',
    topic: 'Reproduction',
    question: 'Which snake is an all-female species that reproduces without males?',
    options: ['Brahminy blind snake', 'Corn snake', 'Green tree python', 'Western hognose'],
    answer: 'Brahminy blind snake',
    funFact: 'All known specimens are female. Hitching rides in potted plants has spread it worldwide, earning it the name flowerpot snake.',
    source: 'https://en.wikipedia.org/wiki/Indotyphlops_braminus',
    evidence: 'all known specimens have been female'
  },
  {
    id: 'snakes-0312',
    replaces: 'imported-snakes-0312',
    topic: 'Reproduction',
    question: 'A female python kept with no male produces fertile eggs. What is this called?',
    options: ['Facultative parthenogenesis', 'Delayed fertilization', 'Hermaphroditism', 'Obligate parthenogenesis'],
    answer: 'Facultative parthenogenesis',
    funFact:
      'Females of normally sexual species can occasionally reproduce without a male. Some can also store sperm for years, so DNA tests are needed to tell the two apart.',
    source: 'https://en.wikipedia.org/wiki/Parthenogenesis',
    evidence: 'a female can produce offspring either sexually or via asexual'
  },
  {
    id: 'snakes-0313',
    replaces: 'imported-snakes-0313',
    topic: 'Reproduction',
    question: 'In most advanced snakes, such as colubrids and vipers, which sex carries two different sex chromosomes (ZW)?',
    options: ['Females', 'Males', 'Both sexes', 'Neither sex'],
    answer: 'Females',
    funFact: 'It is the reverse of the human XY system. In 2017, researchers found that pythons and boas use an XY system instead.',
    source: 'https://en.wikipedia.org/wiki/ZW_sex-determination_system',
    evidence: 'majority of snakes'
  },
  // Added from the user's October 2026 list after dedupe and source checks.
  {
    id: 'snakes-d01',
    topic: 'Species',
    question: 'The common kingsnake is famous for eating what kind of prey that most predators avoid?',
    options: ['Venomous snakes', 'Scorpions', 'Poison dart frogs', 'Porcupines'],
    answer: 'Venomous snakes',
    funFact: 'It eats copperheads and even coral snakes, and if one bites it, the kingsnake is immune to the venom.',
    source: 'https://en.wikipedia.org/wiki/Common_kingsnake',
    evidence: 'lampropeltis getula eats other snakes, including venomous snakes'
  },
  {
    id: 'snakes-d02',
    topic: 'Species',
    question: 'Which snake is the longest venomous snake in the world?',
    options: ['King cobra', 'Black mamba', 'Inland taipan', 'Eastern brown snake'],
    answer: 'King cobra',
    funFact: 'The record is 5.85 meters (19.2 feet). Despite its name, it is not a true cobra of the genus Naja.',
    source: 'https://en.wikipedia.org/wiki/King_cobra',
    evidence: "it is the world's longest venomous snake"
  },
  {
    id: 'snakes-d03',
    topic: 'Anatomy',
    question: 'Snakes have no movable eyelids. What is the clear scale that covers each eye called?',
    options: ['Brille', 'Nictitating membrane', 'Rostral scale', 'Supraocular scale'],
    answer: 'Brille',
    funFact: 'It is also called the spectacle, and it is shed along with the rest of the skin.',
    source: 'https://en.wikipedia.org/wiki/Snake',
    evidence: 'scales, also known as brille'
  },
  {
    id: 'snakes-d04',
    topic: 'Anatomy',
    question: 'Which bone forms the hinge between a snake\'s upper and lower jaws and helps it open its mouth so wide?',
    options: ['Quadrate bone', 'Hyoid bone', 'Stapes', 'Dentary bone'],
    answer: 'Quadrate bone',
    funFact: 'The two halves of the lower jaw are joined only by an elastic ligament at the chin, so each side can move on its own.',
    source: 'https://en.wikipedia.org/wiki/Snake',
    evidence: 'connected by a bone hinge that is called the quadrate bone'
  },
  {
    id: 'snakes-d05',
    topic: 'Species',
    question: 'Which venomous snake of the southeastern United States has wide red and black rings separated by narrow yellow rings?',
    options: ['Eastern coral snake', 'Scarlet kingsnake', 'Copperhead', 'Eastern hognose snake'],
    answer: 'Eastern coral snake',
    funFact: 'Its head is black from the snout to just behind the eyes, followed by a yellow band.',
    source: 'https://en.wikipedia.org/wiki/Micrurus_fulvius',
    evidence: 'wide red and black rings separated by narrow yellow rings'
  },
  {
    id: 'snakes-d06',
    topic: 'Venom',
    question: 'Cobra venom mainly attacks the nerves. What kind of venom do most vipers have instead?',
    options: ['Hemotoxic', 'Neurotoxic', 'Cardiotoxic only', 'Nonvenomous saliva'],
    answer: 'Hemotoxic',
    funFact: 'Hemotoxic venom takes longer to bring prey down, so vipers often let go and track the bitten animal afterward.',
    source: 'https://en.wikipedia.org/wiki/Viperidae',
    evidence: 'hemotoxic venom takes more time than neurotoxic venom to immobilize prey'
  },
  {
    id: 'snakes-d07',
    topic: 'Behavior',
    question: 'When its bluffing fails, what does an eastern hognose snake do to put off a predator?',
    options: ['Rolls onto its back and plays dead', 'Sprays venom at the eyes', 'Rattles its tail against leaves', 'Drops off the end of its tail'],
    answer: 'Rolls onto its back and plays dead',
    funFact: 'It may let its tongue hang out and release a foul musk. One was seen playing dead for 45 minutes.',
    source: 'https://en.wikipedia.org/wiki/Eastern_hognose_snake',
    evidence: 'rolls onto its back and plays dead'
  },
  {
    id: 'snakes-d08',
    topic: 'Species',
    question: 'The reticulated python is the longest snake. Which snake is the heaviest?',
    options: ['Green anaconda', 'Burmese python', 'African rock python', 'Boa constrictor'],
    answer: 'Green anaconda',
    funFact: 'Like all boas, it is a nonvenomous constrictor. It lives in northern South America.',
    source: 'https://en.wikipedia.org/wiki/Green_anaconda',
    evidence: "the green anaconda is the world's heaviest"
  },
  {
    id: 'snakes-d09',
    topic: 'Species',
    question: 'The eyelash viper of Central and South America gets its name from what?',
    options: ['Raised scales above its eyes', 'Long hair-like bristles on its lips', 'Dark lines around its eyes', 'Fringed scales along its tail'],
    answer: 'Raised scales above its eyes',
    funFact: 'It is a small, tree-dwelling pit viper with keeled scales covering its body.',
    source: 'https://en.wikipedia.org/wiki/Bothriechis_schlegelii',
    evidence: 'scales above its eyes'
  },
  {
    id: 'snakes-d10',
    topic: 'Venom',
    question: 'India\'s "Big Four" venomous snakes are the Indian cobra, common krait, Russell\'s viper and which other?',
    options: ['Saw-scaled viper', 'King cobra', 'Banded krait', 'Hump-nosed viper'],
    answer: 'Saw-scaled viper',
    funFact: 'Together, these four cause most of the snakebite cases in India.',
    source: 'https://en.wikipedia.org/wiki/Big_Four_(Indian_snakes)',
    evidence: 'indian saw-scaled viper, echis carinatus'
  },
  {
    id: 'snakes-d11',
    topic: 'Movement',
    question: 'Which North American rattlesnake is named for the looping way it moves across loose desert sand?',
    options: ['Sidewinder', 'Mojave rattlesnake', 'Western diamondback', 'Timber rattlesnake'],
    answer: 'Sidewinder',
    funFact: 'It is also called the horned rattlesnake for the pointed scales over its eyes.',
    source: 'https://en.wikipedia.org/wiki/Crotalus_cerastes',
    evidence: 'the sidewinder, and the sidewinder rattlesnake'
  },
  {
    id: 'snakes-d12',
    topic: 'Venom',
    question: 'Vipers have long, hollow fangs that fold against the roof of the mouth and swing forward to strike. What is this fang type called?',
    options: ['Solenoglyphous', 'Proteroglyphous', 'Opisthoglyphous', 'Aglyphous'],
    answer: 'Solenoglyphous',
    funFact: 'The fangs can be half as long as the head. Cobras have shorter fixed front fangs, called proteroglyphous.',
    source: 'https://en.wikipedia.org/wiki/Snake_skeleton',
    evidence: 'are folded against the roof of the mouth, pointing posteriorly'
  },
  {
    id: 'snakes-d13',
    topic: 'Conservation',
    question: 'Which snake, accidentally brought to the island of Guam, wiped out most of its native forest birds?',
    options: ['Brown tree snake', 'Burmese python', 'Common tree snake', 'Brahminy blind snake'],
    answer: 'Brown tree snake',
    funFact: 'It is a mildly venomous, rear-fanged colubrid native to Australia, New Guinea and nearby islands.',
    source: 'https://en.wikipedia.org/wiki/Brown_tree_snake',
    evidence: 'responsible for extirpating the majority of the native bird population in guam'
  },
  {
    id: 'snakes-d14',
    topic: 'Venom',
    question: 'Which Central and South American pit viper, often called the fer-de-lance, causes the most serious snakebites in its range?',
    options: ['Bothrops asper', 'Bushmaster', 'Eyelash viper', 'South American rattlesnake'],
    answer: 'Bothrops asper',
    funFact: 'Despite its fearsome reputation, it avoids people and usually bites only when cornered.',
    source: 'https://en.wikipedia.org/wiki/Bothrops_asper',
    evidence: 'responsible for the most envenomated snakebite'
  },
  {
    id: 'snakes-d15',
    topic: 'Behavior',
    question: 'The rinkhals, a cobra relative from southern Africa, defends itself by doing what?',
    options: ['Spitting venom', 'Rattling its tail', 'Puffing up with air and popping', 'Burrowing headfirst into sand'],
    answer: 'Spitting venom',
    funFact: 'It spits from a reared position with its hood spread, aiming at an attacker\'s eyes.',
    source: 'https://en.wikipedia.org/wiki/Rinkhals',
    evidence: 'as a defense mechanism, the rinkhals will spit venom'
  },
  {
    id: 'snakes-d16',
    topic: 'Anatomy',
    question: 'What do male boas and pythons use their cloacal spurs for?',
    options: ['Courtship and mating', 'Digging nests', 'Gripping prey', 'Climbing tree bark'],
    answer: 'Courtship and mating',
    funFact: 'Males use the spurs to clasp and stimulate females during courtship.',
    source: 'https://en.wikipedia.org/wiki/Pelvic_spur',
    evidence: 'used in the clasping and stimulation of females by males during courtship'
  },
  {
    id: 'snakes-d17',
    topic: 'Species',
    question: 'The golden lancehead, a critically endangered pit viper, lives only where?',
    options: ['An island off the coast of Brazil', 'The Galápagos Islands', 'A single valley in Peru', 'The Florida Keys'],
    answer: 'An island off the coast of Brazil',
    funFact: 'The island, Ilha da Queimada Grande, is nicknamed Snake Island. Its snakes feed mainly on migrating birds.',
    source: 'https://en.wikipedia.org/wiki/Golden_lancehead',
    evidence: 'found exclusively on the island of ilha da queimada grande'
  },
  {
    id: 'snakes-d18',
    topic: 'Venom',
    question: 'In 1957, herpetologist Karl Schmidt died after being bitten by which snake?',
    options: ['Boomslang', 'Black mamba', 'Gaboon viper', 'Puff adder'],
    answer: 'Boomslang',
    funFact: 'It was a juvenile, and Schmidt doubted it could give a deadly dose. Boomslang venom stops blood from clotting.',
    source: 'https://en.wikipedia.org/wiki/Boomslang',
    evidence: 'karl schmidt died after having been bitten by a juvenile boomslang'
  },
  {
    id: 'snakes-d19',
    topic: 'Species',
    question: 'What causes the rainbow sheen on a Brazilian rainbow boa\'s scales?',
    options: ['Structural coloration of the scales', 'A layer of oil on the skin', 'Bright pigments in the scales', 'Light reflecting off shed skin'],
    answer: 'Structural coloration of the scales',
    funFact: 'Structural color comes from the scale surface bending light, not from pigment.',
    source: 'https://en.wikipedia.org/wiki/Epicrates_cenchria',
    evidence: 'iridescent/holographic sheen caused by structural coloration'
  },
  {
    id: 'snakes-d20',
    topic: 'Behavior',
    question: 'The banded krait is a mainly nocturnal, highly venomous snake. What does it usually do when harassed?',
    options: ['Hides its head under its coils', 'Rears up and spreads a hood', 'Strikes repeatedly', 'Vibrates its tail'],
    answer: 'Hides its head under its coils',
    funFact: 'Kraits are shy and rarely seen, and they do not usually try to bite.',
    source: 'https://en.wikipedia.org/wiki/Bungarus_fasciatus',
    evidence: 'they will usually hide their heads under their coils'
  },
  {
    id: 'snakes-d21',
    topic: 'Feeding',
    question: 'How do African egg-eating snakes break the eggs they swallow whole?',
    options: ['With bony points on their spine', 'With sharp front teeth', 'With strong stomach acid', 'By squeezing them against a rock'],
    answer: 'With bony points on their spine',
    funFact: 'The snake drinks the contents, then coughs up the crushed shell.',
    source: 'https://en.wikipedia.org/wiki/Dasypeltis',
    evidence: 'bony protrusions on the ventral side of their spine which are used to aid in breaking the shells of eggs'
  },
  {
    id: 'snakes-d22',
    topic: 'Venom',
    question: 'Some Mojave rattlesnakes have venom with a powerful neurotoxin. What is that toxin called?',
    options: ['Mojave toxin', 'Taipoxin', 'Alpha-bungarotoxin', 'Tetrodotoxin'],
    answer: 'Mojave toxin',
    funFact: 'It was isolated in 1975. Some populations lack it and have venom that mostly damages tissue instead.',
    source: 'https://en.wikipedia.org/wiki/Crotalus_scutulatus',
    evidence: 'this neurotoxin was isolated and described in 1975'
  },
  {
    id: 'snakes-d23',
    topic: 'Reproduction',
    question: 'What are a male snake\'s hemipenes?',
    options: ['A pair of reproductive organs', 'Scent glands near the tail', 'Enlarged belly scales', 'Spurs beside the vent'],
    answer: 'A pair of reproductive organs',
    funFact: 'They are held inside the tail and turned outward to mate. Lizards have them too.',
    source: 'https://en.wikipedia.org/wiki/Hemipenis',
    evidence: 'one of a pair of intromittent organs of male squamates'
  },
  {
    id: 'snakes-d24',
    topic: 'Venom',
    question: 'The tiger keelback of East Asia stores toxins in glands on its neck. Where do those toxins come from?',
    options: ['Toads it eats', 'Its venom glands', 'Plants it rubs against', 'Bacteria on its skin'],
    answer: 'Toads it eats',
    funFact: 'The toxins, called bufadienolides, are separate from its venom, which is made in glands in its mouth.',
    source: 'https://en.wikipedia.org/wiki/Rhabdophis_tigrinus',
    evidence: 'sequestered from the toads in their diet'
  },
  {
    id: 'snakes-d25',
    topic: 'Species',
    question: 'Which Southeast Asian pit viper is nicknamed the temple viper because so many live around a temple in Malaysia?',
    options: ['Wagler\'s pit viper', 'Malayan pit viper', 'White-lipped pit viper', 'Mangshan pit viper'],
    answer: 'Wagler\'s pit viper',
    funFact: 'The temple is the Temple of the Azure Cloud in Penang, often called the Snake Temple.',
    source: 'https://en.wikipedia.org/wiki/Tropidolaemus_wagleri',
    evidence: 'temple of the azure cloud in malaysia'
  },
  {
    id: 'snakes-d26',
    topic: 'Venom',
    question: 'Which snake causes more snakebite deaths in Australia than any other?',
    options: ['Eastern brown snake', 'Inland taipan', 'Tiger snake', 'Red-bellied black snake'],
    answer: 'Eastern brown snake',
    funFact: 'Between 2005 and 2015 it caused 15 of Australia\'s 19 snakebite deaths. It often lives near farms and towns.',
    source: 'https://en.wikipedia.org/wiki/Eastern_brown_snake',
    evidence: 'responsible for more deaths from snakebite in australia than any other species'
  },
  {
    id: 'snakes-d27',
    topic: 'Behavior',
    question: 'The Narcisse Snake Dens in Manitoba, Canada, are the winter home of tens of thousands of which snake?',
    options: ['Red-sided garter snake', 'Eastern fox snake', 'Western hognose snake', 'Prairie rattlesnake'],
    answer: 'Red-sided garter snake',
    funFact: 'The dens hold the largest gathering of snakes in the world. In spring they leave for nearby marshes.',
    source: 'https://en.wikipedia.org/wiki/Narcisse_Snake_Dens',
    evidence: 'tens of thousands of red-sided garter snakes'
  },
  {
    id: 'snakes-d28',
    topic: 'Species',
    question: 'What shape are the dark markings across an eastern copperhead\'s back?',
    options: ['Hourglasses', 'Diamonds', 'Straight stripes', 'Round spots'],
    answer: 'Hourglasses',
    funFact: 'The bands are wide on the sides and pinched narrow in the middle of the back.',
    source: 'https://en.wikipedia.org/wiki/Agkistrodon_contortrix',
    evidence: 'hourglass-shaped markings'
  },
  {
    id: 'snakes-d29',
    topic: 'Species',
    question: 'Which venomous snake ranges as far north as the Arctic Circle?',
    options: ['Common European adder', 'Asp viper', 'Nose-horned viper', 'Caspian whipsnake'],
    answer: 'Common European adder',
    funFact: 'Its range runs across Europe and Russia to the Pacific Ocean. It has a dark zigzag down its back.',
    source: 'https://en.wikipedia.org/wiki/Vipera_berus',
    evidence: 'north of the arctic circle'
  },
  {
    id: 'snakes-d30',
    topic: 'Anatomy',
    question: 'Australia\'s black-headed python and woma lack which feature most pythons have?',
    options: ['Heat-sensing lip pits', 'Cloacal spurs', 'A forked tongue', 'A left lung'],
    answer: 'Heat-sensing lip pits',
    funFact: 'Both belong to the genus Aspidites, found only in Australia.',
    source: 'https://en.wikipedia.org/wiki/Aspidites',
    evidence: 'these snakes lack the heat-sensitive pits between the labial scales'
  },
  {
    id: 'snakes-d31',
    topic: 'Behavior',
    question: 'How did the cottonmouth get its name?',
    options: ['It gapes to show the white lining of its mouth', 'It has white lips', 'It lives among cotton fields', 'Its venom foams white'],
    answer: 'It gapes to show the white lining of its mouth',
    funFact: 'It often stands its ground and gapes as a warning. It is also called the water moccasin.',
    source: 'https://en.wikipedia.org/wiki/Agkistrodon_piscivorus',
    evidence: 'exposing the white lining of its mouth'
  },
  {
    id: 'snakes-d32',
    topic: 'Movement',
    question: 'What is the most common way snakes move over land, pushing side to side in S-shaped waves?',
    options: ['Lateral undulation', 'Concertina movement', 'Rectilinear movement', 'Sidewinding'],
    answer: 'Lateral undulation',
    funFact: 'It is also the only way snakes swim.',
    source: 'https://en.wikipedia.org/wiki/Snake_locomotion',
    evidence: 'the most common mode of terrestrial locomotion'
  },
  {
    id: 'snakes-d33',
    topic: 'Venom',
    question: 'Some snake venoms use up the blood\'s clotting factors, leaving the victim unable to stop bleeding. What is this called?',
    options: ['Venom-induced consumption coagulopathy', 'Compartment syndrome', 'Rhabdomyolysis', 'Anaphylaxis'],
    answer: 'Venom-induced consumption coagulopathy',
    funFact: 'It is often shortened to VICC. Enzymes in the venom switch on the clotting factors until they run out.',
    source: 'https://en.wikipedia.org/wiki/Venom-induced_consumption_coagulopathy',
    evidence: 'coagulation factors are activated by the specific serine proteases in the venom'
  }
];

// Imported questions removed rather than rewritten, with the reason.
export const retiredImportIds = {
  'imported-snakes-0158': 'No source found stating how super forms define co-dominant morphs.',
  'imported-snakes-0159': 'No source found for the super Spider claim.',
  'imported-snakes-0162': 'No source found defining the Super Pastel.',
  'imported-snakes-0288': 'No source found confirming which morphs lack wobble.',
  'imported-snakes-0172': 'Source does not state the reason for a temperature gradient.',
  'imported-snakes-0215': 'No source found defining popping.',
  'imported-snakes-0300': 'Source describes prolapse in humans, not snakes.',
  'imported-snakes-0249': 'Source does not mention snakes.',
  'imported-snakes-0213': 'No source found for the meaning of Ophiophagus.',
  'imported-snakes-0317': 'No source found for the rosy boa diet.',
  'imported-snakes-0253': 'Source does not state what proteolytic enzymes do.',
  'imported-snakes-0280': 'Breeders disagree on whether seasonal cooling is needed.',
  'imported-snakes-0284': 'No reliable source for the yolk-absorption explanation.',
  'imported-snakes-0185': 'Hook training is a debated hobby practice with no reliable source.',
  'imported-snakes-0204': 'No reliable source for the waiting period after regurgitation.',
  'imported-snakes-0196': 'Shed cycle length found only in forum estimates.',
  'imported-snakes-0157': 'List question with several correct answers.',
  'imported-snakes-0163': 'Merged into snakes-0166 (combination morphs).',
  'imported-snakes-0164': 'Merged into snakes-0165; a "super Butter" is a blue-eyed leucistic.',
  'imported-snakes-0167': 'Cause of Spider wobble is not established; merged into snakes-0168.',
  'imported-snakes-0169': 'Merged into snakes-0168 (Spider wobble).',
  'imported-snakes-0170': 'Opinion question with no single correct answer.',
  'imported-snakes-0173': 'Care sources disagree on the humidity range.',
  'imported-snakes-0176': 'List question with several correct answers.',
  'imported-snakes-0177': 'Merged into snakes-0264 (thermostats).',
  'imported-snakes-0178': 'Several substrates are acceptable; no single answer.',
  'imported-snakes-0179': 'Merged into snakes-0180 (hides).',
  'imported-snakes-0181': 'Care sources disagree on adult feeding intervals.',
  'imported-snakes-0182': 'Care sources disagree on the prey-size rule.',
  'imported-snakes-0184': 'Opinion question with no single correct answer.',
  'imported-snakes-0187': 'Merged into snakes-0188 (feeding tricks).',
  'imported-snakes-0193': 'Merged into snakes-0192 (stuck shed).',
  'imported-snakes-0194': 'Care sources disagree on shed humidity.',
  'imported-snakes-0197': 'Answer is "not reliably", which does not work as multiple choice.',
  'imported-snakes-0199': 'Pit counts vary between individuals.',
  'imported-snakes-0201': 'List question with several correct answers.',
  'imported-snakes-0202': 'Unclear question.',
  'imported-snakes-0203': 'Definitions given were not reliable.',
  'imported-snakes-0209': 'Too vague for a single correct option.',
  'imported-snakes-0210': 'Unclear comparison; the blood python name covers several species.',
  'imported-snakes-0214': 'Original answer was misleading about rear-fanged colubrids.',
  'imported-snakes-0219': 'Merged into snakes-0220 (stomatitis).',
  'imported-snakes-0221': 'List question with several correct answers.',
  'imported-snakes-0231': 'Too vague for a single correct option.',
  'imported-snakes-0240': 'Hormonal claim could not be confirmed.',
  'imported-snakes-0243': 'Too vague for a single correct option.',
  'imported-snakes-0245': 'The terms are used interchangeably; no single answer.',
  'imported-snakes-0246': 'Too vague for a single correct option.',
  'imported-snakes-0247': 'Merged into snakes-0205 (scenting).',
  'imported-snakes-0250': 'Merged into snakes-0249 (iridescence).',
  'imported-snakes-0255': 'Too vague for a single correct option.',
  'imported-snakes-0262': 'Snake color vision varies by species; no single answer.',
  'imported-snakes-0263': 'Niche figure that could not be confirmed.',
  'imported-snakes-0265': 'UVB for ball pythons is still debated.',
  'imported-snakes-0267': 'Merged into snakes-0236 (taipans).',
  'imported-snakes-0273': '"Most venomous sea snake" is disputed.',
  'imported-snakes-0276': 'Original answer contradicted itself about sand boa classification.',
  'imported-snakes-0277': 'Merged into snakes-0296 (temperature tools).',
  'imported-snakes-0278': 'Merged into snakes-0279 (pressure immobilization).',
  'imported-snakes-0282': 'Claim about "sweating" eggs could not be confirmed.',
  'imported-snakes-0283': 'Practice varies among breeders; no single answer.',
  'imported-snakes-0286': 'Unclear question.',
  'imported-snakes-0287': 'Merged into snakes-0180 (hides).',
  'imported-snakes-0289': 'Merged into snakes-0290 (allelic morphs).',
  'imported-snakes-0291': 'Bamboo\'s genetics are not settled.',
  'imported-snakes-0292': 'Care sources disagree on the humidity range.',
  'imported-snakes-0293': 'Advocacy group detail with little learning value.',
  'imported-snakes-0295': 'Opinion question with no single correct answer.',
  'imported-snakes-0297': 'Brand question; Ferguson Zones come from published research, not the brand.',
  'imported-snakes-0298': 'Opinion question with no single correct answer.',
  'imported-snakes-0299': 'Too vague for a single correct option.',
  'imported-snakes-0301': 'Sources disagree on which sex shows this behavior.',
  'imported-snakes-0303': 'Timing figures given were inconsistent.',
  'imported-snakes-0304': 'Merged into snakes-0226 (incubation).',
  'imported-snakes-0305': 'Ratios vary by breeder; no single answer.',
  'imported-snakes-0306': 'Merged into snakes-0284 (first meal).',
  'imported-snakes-0307': 'Brand question with little learning value.',
  'imported-snakes-0308': 'Merged into snakes-0223 (Cryptosporidium).',
  'imported-snakes-0314': 'List question with several correct answers.',
  'imported-snakes-0315': 'The survey named could not be found.'
};
