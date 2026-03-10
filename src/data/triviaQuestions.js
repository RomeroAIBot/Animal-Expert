const sourceByCategory = {
  dogs: 'https://www.akc.org/dog-breeds/',
  snakes: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles',
  chickens: 'https://livestockconservancy.org/heritage-breeds/',
  cats: 'https://cfa.org/breeds/',
  horses: 'https://www.usef.org/compete/breeds-disciplines'
};

const termBank = [
  { id: 'd1', category: 'dogs', term: 'Positive reinforcement', definition: 'adding a valued stimulus after a behavior to increase future frequency', funFact: 'In marker training, timing determines which behavior gets reinforced.' },
  { id: 'd2', category: 'dogs', term: 'Negative reinforcement', definition: 'removing an aversive pressure when a desired behavior occurs to increase that behavior', funFact: 'Leash-pressure release work is a common example of negative reinforcement.' },
  { id: 'd3', category: 'dogs', term: 'Barrier frustration', definition: 'arousal and reactive behavior that escalates when access is blocked by a fence, window, or leash', funFact: 'Barrier frustration often looks aggressive but can be rooted in thwarted access.' },
  { id: 'd4', category: 'dogs', term: 'Counterconditioning', definition: 'pairing a trigger with a positive outcome to change emotional response over time', funFact: 'Counterconditioning is usually paired with distance control for safety.' },
  { id: 'd5', category: 'dogs', term: 'Systematic desensitization', definition: 'gradual exposure at sub-threshold intensity while maintaining calm behavior', funFact: 'Progression speed is set by dog body-language, not by calendar.' },
  { id: 'd6', category: 'dogs', term: 'Threshold distance', definition: 'the closest distance to a trigger where the dog can still respond to cues and food', funFact: 'Working under threshold protects learning and welfare.' },
  { id: 'd7', category: 'dogs', term: 'Displacement behavior', definition: 'seemingly unrelated behavior that appears under conflict or stress, like sudden sniffing', funFact: 'Displacement behaviors can be early stress indicators in daycare settings.' },
  { id: 'd8', category: 'dogs', term: 'Appeasement signal', definition: 'body-language intended to reduce social tension, such as lip licking or head turning', funFact: 'Appeasement signals are often missed before overt reactivity.' },
  { id: 'd9', category: 'dogs', term: 'Predatory drift', definition: 'rapid shift from social interaction to predatory motor pattern, usually in high arousal contexts', funFact: 'Size mismatch and chase games increase predatory drift risk.' },
  { id: 'd10', category: 'dogs', term: 'Trigger stacking', definition: 'cumulative stress from multiple events that lowers reactivity threshold', funFact: 'Sleep debt can magnify trigger stacking effects.' },
  { id: 'd11', category: 'dogs', term: 'CER', definition: 'conditioned emotional response to a cue, context, or trigger', funFact: 'Changing CER is often the true target of behavior modification plans.' },
  { id: 'd12', category: 'dogs', term: 'BAT 2.0', definition: 'behavior adjustment training protocol that uses functional rewards and distance to teach calmer choices', funFact: 'BAT commonly uses leash movement as feedback rather than food-only reinforcement.' },
  { id: 'd13', category: 'dogs', term: 'LAT', definition: 'look-at-that game where a dog marks and orients to a trigger then disengages for reinforcement', funFact: 'LAT builds operant disengagement from triggers.' },
  { id: 'd14', category: 'dogs', term: 'Extinction burst', definition: 'temporary increase in behavior intensity when reinforcement is first removed', funFact: 'Planning for extinction bursts prevents handlers from accidentally reinforcing escalation.' },
  { id: 'd15', category: 'dogs', term: 'Back-chaining', definition: 'teaching the final behavior sequence first, then adding earlier links', funFact: 'Back-chaining is common in agility contact and weave training.' },
  { id: 'd16', category: 'dogs', term: '2x2 weaves', definition: 'weave-pole method that builds entries by shaping through progressive pole sets', funFact: 'Good 2x2 performance depends on independent entry understanding.' },
  { id: 'd17', category: 'dogs', term: 'Contact criteria', definition: 'defined foot placement or position required in agility yellow contact zones', funFact: 'Consistency in criteria prevents trial-ring confusion.' },
  { id: 'd18', category: 'dogs', term: 'Resource guarding', definition: 'behavior used to retain access to food, objects, spaces, or social partners', funFact: 'Guarding treatment prioritizes safety, management, and conditioned emotional change.' },
  { id: 'd19', category: 'dogs', term: 'Cooperative care', definition: 'husbandry approach that teaches consent behaviors and gives the animal control breaks', funFact: 'Start-button behaviors are core to modern cooperative-care plans.' },
  { id: 'd20', category: 'dogs', term: 'Drive capping', definition: 'building high arousal for work while reinforcing impulse control before release', funFact: 'Drive capping is common in sport and working-dog routines.' },
  { id: 's1', category: 'snakes', term: 'Recessive inheritance', definition: 'genetic pattern where phenotype appears only when two copies of the allele are present', funFact: 'Piebald and clown ball python projects follow recessive inheritance.' },
  { id: 's2', category: 'snakes', term: 'Incomplete dominance', definition: 'inheritance where heterozygous animals show an intermediate or distinct visual phenotype', funFact: 'Mojave and pastel are commonly described as incomplete dominant traits.' },
  { id: 's3', category: 'snakes', term: 'Heterozygous', definition: 'having two different alleles at a gene locus, often written as het for recessive projects', funFact: 'A het recessive animal may look normal while carrying the trait.' },
  { id: 's4', category: 'snakes', term: 'Homozygous', definition: 'having identical alleles at a gene locus', funFact: 'Homozygous recessive offspring visually express the recessive trait.' },
  { id: 's5', category: 'snakes', term: 'Piebald odds', definition: 'expected 25 percent visual pied from a het pied x het pied pairing', funFact: 'Punnett expectations are statistical, not guaranteed per clutch.' },
  { id: 's6', category: 'snakes', term: 'Pre-shed opacity', definition: 'dull coloration and blue eye phase before ecdysis', funFact: 'Humidity support during opacity reduces retained eye cap risk.' },
  { id: 's7', category: 'snakes', term: 'Ecdysis', definition: 'the physiological process of shedding old epidermal layers', funFact: 'Healthy sheds are ideally removed in one piece in many species.' },
  { id: 's8', category: 'snakes', term: 'Thermal gradient', definition: 'enclosure design providing warm and cool zones for behavioral thermoregulation', funFact: 'Single-temperature enclosures prevent normal thermoregulatory choice.' },
  { id: 's9', category: 'snakes', term: 'Cryptic basking', definition: 'using partially concealed positions to absorb heat while maintaining security', funFact: 'Many pythons prefer cover while warming rather than open exposure.' },
  { id: 's10', category: 'snakes', term: 'Caudal luring', definition: 'tail movement used to attract prey within strike range', funFact: 'Caudal luring is documented in juvenile and ambush-oriented species.' },
  { id: 's11', category: 'snakes', term: 'Ophiophagy', definition: 'feeding specialization that includes predation on other snakes', funFact: 'Kingsnakes are classic examples of ophiophagous behavior.' },
  { id: 's12', category: 'snakes', term: 'Live-bearing', definition: 'reproductive mode where young are born rather than hatched from externally laid eggs', funFact: 'Boa constrictors are live-bearing while many colubrids are oviparous.' },
  { id: 's13', category: 'snakes', term: 'Oviparity', definition: 'reproductive mode involving externally laid eggs', funFact: 'Corn snakes and kingsnakes are oviparous species.' },
  { id: 's14', category: 'snakes', term: 'Brumation', definition: 'seasonal metabolic slowdown in ectotherms under cooler conditions', funFact: 'Not all captive species require brumation protocols.' },
  { id: 's15', category: 'snakes', term: 'Lateral undulation', definition: 'common serpentine locomotion using side-to-side waves for propulsion', funFact: 'Locomotion mode can shift with surface texture and confinement.' },
  { id: 's16', category: 'snakes', term: 'Heat pits', definition: 'infrared-sensitive organs present in pit vipers and some boas and pythons', funFact: 'Heat pits aid prey detection in low-light conditions.' },
  { id: 's17', category: 'snakes', term: 'Defensive musk', definition: 'cloacal secretion released as a deterrent during handling stress', funFact: 'Musk release is common in many colubrid species.' },
  { id: 's18', category: 'snakes', term: 'Neurotoxic venom', definition: 'venom profile that primarily disrupts neuromuscular signaling', funFact: 'Neurotoxic effects can include progressive paralysis.' },
  { id: 'c1', category: 'chickens', term: 'Fibromelanosis', definition: 'genetic hyperpigmentation causing dark skin and connective tissue in certain breeds', funFact: 'Silkie and Ayam Cemani lines are known for fibromelanosis expression.' },
  { id: 'c2', category: 'chickens', term: 'Broodiness', definition: 'hormonal behavioral state where a hen persists in nest sitting and clutch defense', funFact: 'Broody hens may reduce feed intake and egg production.' },
  { id: 'c3', category: 'chickens', term: 'Molt', definition: 'cyclical feather replacement period often associated with reduced laying', funFact: 'Autumn photoperiod change commonly triggers molt in backyard flocks.' },
  { id: 'c4', category: 'chickens', term: 'Pecking order', definition: 'dominance hierarchy regulating flock access to resources and social rank', funFact: 'Hierarchy disruptions can temporarily increase aggression.' },
  { id: 'c5', category: 'chickens', term: 'Bloom', definition: 'cuticle layer that seals eggshell pores and reduces microbial penetration', funFact: 'Washing eggs removes part of the natural bloom barrier.' },
  { id: 'c6', category: 'chickens', term: 'Blue egg gene', definition: 'oocyan allele that deposits biliverdin pigment through the shell matrix', funFact: 'Blue-shelled eggs are blue throughout shell thickness.' },
  { id: 'c7', category: 'chickens', term: 'Olive egger cross', definition: 'cross using blue-egg and dark-brown lines to yield olive shell coloration', funFact: 'Olive intensity depends on brown overlay depth.' },
  { id: 'c8', category: 'chickens', term: 'Bantam', definition: 'small-bodied chicken classification that can be true bantam or bantam variety of large fowl', funFact: 'True bantams have no corresponding large-fowl counterpart.' },
  { id: 'c9', category: 'chickens', term: 'Coccidiosis', definition: 'protozoal intestinal disease often controlled through hygiene and management', funFact: 'Wet litter significantly increases coccidiosis risk.' },
  { id: 'c10', category: 'chickens', term: 'Vent gleet', definition: 'cloacal inflammation syndrome associated with digestive imbalance or infection', funFact: 'Persistent vent soiling warrants targeted veterinary workup.' },
  { id: 'c11', category: 'chickens', term: 'Double mating', definition: 'breeding strategy pairing one line for cock traits and another for hen traits in exhibition programs', funFact: 'Double mating is historically used in sexually dimorphic color varieties.' },
  { id: 'c12', category: 'chickens', term: 'Rose comb', definition: 'comb type controlled by dominant allele producing a flattened broad comb surface', funFact: 'Comb type can influence frostbite risk in cold climates.' },
  { id: 'c13', category: 'chickens', term: 'V-comb', definition: 'paired horn-like comb structure characteristic of breeds like La Fleche', funFact: 'La Fleche is one of the best-known V-comb breeds.' },
  { id: 'c14', category: 'chickens', term: 'Autosexing', definition: 'ability to sex chicks at hatch by down color pattern tied to sex-linked genetics', funFact: 'Cream Legbar is a classic autosexing breed.' },
  { id: 'c15', category: 'chickens', term: 'Egg binding', definition: 'reproductive emergency where an egg is retained in the oviduct', funFact: 'Calcium balance and body condition influence risk.' },
  { id: 'c16', category: 'chickens', term: 'Saddle feathers', definition: 'elongated pointed feathers in male back region preceding tail base', funFact: 'Saddle feather shape is a practical sexing cue in maturing birds.' },
  { id: 'c17', category: 'chickens', term: 'Scissor beak', definition: 'crossed mandible condition impairing normal feed prehension', funFact: 'Early supportive management improves long-term welfare outcomes.' },
  { id: 'c18', category: 'chickens', term: 'Dust bathing', definition: 'self-maintenance behavior using dry substrate to reduce ectoparasites and condition feathers', funFact: 'Lack of dust access increases frustration behaviors in confined flocks.' },
  { id: 'ct1', category: 'cats', term: 'Ticking', definition: 'agouti banding on individual hairs that creates a salt-and-pepper effect without full body striping', funFact: 'Abyssinians are a classic ticked breed profile.' },
  { id: 'ct2', category: 'cats', term: 'Rosetting', definition: 'bicolored or outlined spotting pattern associated with wild-type horizontal flow in certain breeds', funFact: 'Strong rosetting is a hallmark show goal in Bengals.' },
  { id: 'ct3', category: 'cats', term: 'Colorpoint', definition: 'temperature-sensitive pigmentation that darkens cooler body extremities', funFact: 'Pointed breeds typically combine this with blue eyes.' },
  { id: 'ct4', category: 'cats', term: 'Ruff', definition: 'full neck frill of longer fur especially valued in forest-type breeds', funFact: 'Maine Coons and Norwegian Forest Cats are judged for substantial ruff and coat texture.' },
  { id: 'ct5', category: 'cats', term: 'Boning', definition: 'substance of the skeletal frame relative to body type and standard balance', funFact: 'Judges distinguish fine, medium, and substantial boning by breed standard.' },
  { id: 'ct6', category: 'cats', term: 'Whisker break', definition: 'pronounced muzzle pad contour that creates visible indentation between cheek and whisker pads', funFact: 'Bengal type rewards a strong muzzle with clear whisker pad definition.' },
  { id: 'ct7', category: 'cats', term: 'Profile break', definition: 'stop or curve transition between forehead and nose line in the head profile', funFact: 'Different cat standards call for distinct profile shapes rather than one universal ideal.' },
  { id: 'ct8', category: 'cats', term: 'Outcross', definition: 'planned breeding to an unrelated line to widen genetic diversity while preserving type', funFact: 'Outcross policy is tightly controlled in registry breed programs.' },
  { id: 'ct9', category: 'cats', term: 'Polydactyl', definition: 'having extra toes beyond the normal count on one or more feet', funFact: 'Extra toes are famous in some Maine Coon lines, though not part of the CFA show standard.' },
  { id: 'ct10', category: 'cats', term: 'Slow maturing', definition: 'breed development pattern in which coat, body, or head type reaches full expression over several years', funFact: 'Ragdolls and Maine Coons are often described as slow-maturing breeds.' },
  { id: 'h1', category: 'horses', term: 'Collection', definition: 'state of balance where the horse shifts weight to the hindquarters and shortens frame without losing energy', funFact: 'True collection changes balance, not just headset.' },
  { id: 'h2', category: 'horses', term: 'Impulsion', definition: 'controlled stored energy generated from the hindquarters and transmitted through a supple back', funFact: 'Impulsion is more than speed and is judged by elasticity and thrust.' },
  { id: 'h3', category: 'horses', term: 'Engagement', definition: 'greater flexion and stepping under of the hind limbs beneath the body mass', funFact: 'Engagement supports transitions, self-carriage, and collected work.' },
  { id: 'h4', category: 'horses', term: 'Bascule', definition: 'arc of the horse over a fence created by rounding the back and neck use', funFact: 'A correct bascule reduces wasted motion over jumps.' },
  { id: 'h5', category: 'horses', term: 'Feathering', definition: 'long hair growth at the lower legs typical of certain breeds', funFact: 'Friesians are recognized for notable feathering.' },
  { id: 'h6', category: 'horses', term: 'Baroque type', definition: 'compact, powerful conformation associated with elevated action and collected work', funFact: 'Andalusians and Friesians are often discussed as baroque breeds.' },
  { id: 'h7', category: 'horses', term: 'Cow sense', definition: 'instinctive responsiveness to cattle movement prized in stock-horse work', funFact: 'Quarter Horse breeding programs heavily value cow sense in ranch and reining lines.' },
  { id: 'h8', category: 'horses', term: 'Foundation sire', definition: 'ancestral stallion or mare with outsized influence on a registry or breed family', funFact: 'Many closed studbooks trace heavily to a few foundation individuals.' },
  { id: 'h9', category: 'horses', term: 'Self-carriage', definition: 'ability to maintain balance and posture without continual rider support', funFact: 'Self-carriage is a core marker of advanced training rather than cosmetic frame.' },
  { id: 'h10', category: 'horses', term: 'Conformation', definition: 'structural build and proportional arrangement of the horse body', funFact: 'Soundness, discipline suitability, and breed type all intersect in conformation evaluation.' }
];

const breedQuestionBank = [
  {
    id: 'dog-breed-1',
    category: 'dogs',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which Norwegian breed is documented by the AKC as having six functional toes on each foot?',
    options: ['Norwegian Lundehund', 'Vizsla', 'Belgian Malinois', 'Doberman Pinscher'],
    answer: 'Norwegian Lundehund',
    funFact: 'The Lundehund was developed for puffin-hunting on steep Norwegian cliffs.',
    source: 'https://www.akc.org/dog-breeds/norwegian-lundehund/'
  },
  {
    id: 'dog-breed-2',
    category: 'dogs',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'According to the AKC breed profile, which breed is historically tied to fishermen and water rescue work?',
    options: ['Newfoundland', 'German Shepherd Dog', 'Border Collie', 'Australian Cattle Dog'],
    answer: 'Newfoundland',
    funFact: 'Newfoundlands are one of the classic giant working water dogs.',
    source: 'https://www.akc.org/dog-breeds/newfoundland/'
  },
  {
    id: 'dog-breed-3',
    category: 'dogs',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'What working style trait is especially associated with Border Collies in stock work?',
    options: ['Intense eye', 'Curled tail set', 'Tracking nose-only pattern', 'Silent guarding posture'],
    answer: 'Intense eye',
    funFact: 'The Border Collie is strongly associated with eye, balance, and biddability on stock.',
    source: 'https://www.akc.org/dog-breeds/border-collie/'
  },
  {
    id: 'dog-breed-4',
    category: 'dogs',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which sporting breed is classically described by the AKC as having a golden-rust coat color?',
    options: ['Vizsla', 'Belgian Malinois', 'Norwegian Lundehund', 'Newfoundland'],
    answer: 'Vizsla',
    funFact: 'Vizslas are a Hungarian pointing breed with close handler attachment.',
    source: 'https://www.akc.org/dog-breeds/vizsla/'
  },
  {
    id: 'dog-breed-5',
    category: 'dogs',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is commonly selected for high-drive detection and protection work while still belonging to the herding group?',
    options: ['Belgian Malinois', 'Border Collie', 'Newfoundland', 'Vizsla'],
    answer: 'Belgian Malinois',
    funFact: 'Malinois selection often emphasizes nerve, athleticism, and environmental engagement.',
    source: 'https://www.akc.org/dog-breeds/belgian-malinois/'
  },
  {
    id: 'snake-breed-1',
    category: 'snakes',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'If two heterozygous Piebald ball pythons are bred together, what percentage of offspring are expected to be visual Piebalds?',
    options: ['25%', '50%', '75%', '100%'],
    answer: '25%',
    funFact: 'Punnett ratios are statistical expectations across many offspring, not guarantees per clutch.',
    source: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles'
  },
  {
    id: 'snake-breed-2',
    category: 'snakes',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which of these snakes is live-bearing rather than egg-laying?',
    options: ['Boa Constrictor', 'Corn Snake', 'California Kingsnake', 'Western Hognose Snake'],
    answer: 'Boa Constrictor',
    funFact: 'Boa constrictors give birth to live young rather than laying eggs externally.',
    source: 'https://animals.sandiegozoo.org/animals/boa'
  },
  {
    id: 'snake-breed-3',
    category: 'snakes',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which snake is especially known for ophiophagy, the consumption of other snakes?',
    options: ['California Kingsnake', 'Boa Constrictor', 'Gaboon Viper', 'Western Hognose Snake'],
    answer: 'California Kingsnake',
    funFact: 'Kingsnakes are named partly for their ability to prey on other snakes.',
    source: 'https://animals.sandiegozoo.org/animals/king-snake'
  },
  {
    id: 'snake-breed-4',
    category: 'snakes',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which species is well known for dramatic bluffing that can include hooding, hissing, and death-feigning?',
    options: ['Western Hognose Snake', 'Corn Snake', 'Boa Constrictor', 'Ball Python'],
    answer: 'Western Hognose Snake',
    funFact: 'Western hognoses often rely on display before they rely on flight.',
    source: 'https://www.fws.gov/species/plains-hognose-snake-heterodon-nasicus'
  },
  {
    id: 'snake-breed-5',
    category: 'snakes',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which viper is famous for possessing exceptionally long fangs among venomous snakes?',
    options: ['Gaboon Viper', 'California Kingsnake', 'Corn Snake', 'Ball Python'],
    answer: 'Gaboon Viper',
    funFact: 'Gaboon vipers pair cryptic camouflage with very large gape and fang length.',
    source: 'https://animals.sandiegozoo.org/animals/gaboon-viper'
  },
  {
    id: 'chicken-breed-1',
    category: 'chickens',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which chicken breed is famous for fibromelanosis and also commonly has five toes?',
    options: ['Silkie', 'Australorp', 'Welsummer', 'La Fleche'],
    answer: 'Silkie',
    funFact: 'Silkies also carry unusual feather structure that lacks normal barbicel hooklets.',
    source: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/silkie-chicken/'
  },
  {
    id: 'chicken-breed-2',
    category: 'chickens',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is both autosexing and known for laying blue eggs?',
    options: ['Cream Legbar', 'Australorp', 'Welsummer', 'La Fleche'],
    answer: 'Cream Legbar',
    funFact: 'Cream Legbars are one of the most frequently cited blue-egg autosexing breeds.',
    source: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/cream-legbar-chicken/'
  },
  {
    id: 'chicken-breed-3',
    category: 'chickens',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which heritage breed is especially associated with dark brown terracotta eggs?',
    options: ['Welsummer', 'Silkie', 'Ameraucana', 'Australorp'],
    answer: 'Welsummer',
    funFact: 'Welsummer eggs are often used as a benchmark when discussing rich shell pigmentation.',
    source: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/welsummer-chicken/'
  },
  {
    id: 'chicken-breed-4',
    category: 'chickens',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is characterized by a V-comb sometimes described as horned?',
    options: ['La Fleche', 'Australorp', 'Cream Legbar', 'Welsummer'],
    answer: 'La Fleche',
    funFact: 'La Fleche is one of the most recognizable V-comb chicken breeds.',
    source: 'https://livestockconservancy.org/'
  },
  {
    id: 'chicken-breed-5',
    category: 'chickens',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is particularly known for strong laying performance in dual-purpose systems?',
    options: ['Australorp', 'Silkie', 'La Fleche', 'Ameraucana'],
    answer: 'Australorp',
    funFact: 'Australorps became famous in part because of historical laying-performance records.',
    source: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/australorp-chicken/'
  },
  {
    id: 'cat-breed-1',
    category: 'cats',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'According to the CFA profile, what eye color range is preferred in the Chartreux?',
    options: ['Copper to gold', 'Blue only', 'Green only', 'Odd-eyed'],
    answer: 'Copper to gold',
    funFact: 'The Chartreux combines dense blue coat texture with warm eye color.',
    source: 'https://cfa.org/breed/chartreux/'
  },
  {
    id: 'cat-breed-2',
    category: 'cats',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'The Savannah achieved championship status in TICA in which year?',
    options: ['2012', '2001', '2008', '2016'],
    answer: '2012',
    funFact: 'Savannah development and exhibition status were heavily shaped by registry policy.',
    source: 'https://tica.org/breed/savannah/'
  },
  {
    id: 'cat-breed-3',
    category: 'cats',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which natural breed is known for a shaggy coat, substantial ruff, and large rectangular body?',
    options: ['Maine Coon', 'Sphynx', 'Chartreux', 'Abyssinian'],
    answer: 'Maine Coon',
    funFact: 'Maine Coons mature slowly and develop significant coat furnishings over time.',
    source: 'https://cfa.org/breed/maine-coon/'
  },
  {
    id: 'cat-breed-4',
    category: 'cats',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is best known for a ticked coat rather than visible body striping or rosetting?',
    options: ['Abyssinian', 'Bengal', 'Ragdoll', 'Savannah'],
    answer: 'Abyssinian',
    funFact: 'Ticking creates the warm, luminous coat effect prized in Abyssinians.',
    source: 'https://cfa.org/breed/abyssinian/'
  },
  {
    id: 'cat-breed-5',
    category: 'cats',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which pointed breed is expected to have blue eyes and a slow-maturing coat?',
    options: ['Ragdoll', 'Chartreux', 'Abyssinian', 'Bengal'],
    answer: 'Ragdoll',
    funFact: 'Ragdolls often take several years to reach full coat and body development.',
    source: 'https://cfa.org/breed/ragdoll/'
  },
  {
    id: 'horse-breed-1',
    category: 'horses',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is most classically associated with explosive quarter-mile acceleration?',
    options: ['American Quarter Horse', 'Arabian', 'Friesian', 'Cleveland Bay'],
    answer: 'American Quarter Horse',
    funFact: 'The breed name itself reflects sprint dominance over a quarter-mile distance.',
    source: 'https://www.aqha.com/'
  },
  {
    id: 'horse-breed-2',
    category: 'horses',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is recognized for a dished profile, high tail carriage, and major endurance influence?',
    options: ['Arabian', 'Friesian', 'Morgan', 'American Cream Draft'],
    answer: 'Arabian',
    funFact: 'Arabian bloodlines have influenced numerous modern riding breeds.',
    source: 'https://www.usef.org/compete/breeds-disciplines/breeds/arabian'
  },
  {
    id: 'horse-breed-3',
    category: 'horses',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is strongly associated with black coat color, abundant mane, and lower-leg feathering?',
    options: ['Friesian', 'Morgan', 'Quarter Horse', 'Marsh Tacky'],
    answer: 'Friesian',
    funFact: 'Friesians are one of the most visually distinctive carriage and dressage breeds.',
    source: 'https://www.usef.org/compete/breeds-disciplines/breeds/friesian'
  },
  {
    id: 'horse-breed-4',
    category: 'horses',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which old English horse breed is traditionally always bay in color?',
    options: ['Cleveland Bay', 'Arabian', 'Friesian', 'Andalusian'],
    answer: 'Cleveland Bay',
    funFact: 'Cleveland Bays are one of the oldest established English horse breeds.',
    source: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/cleveland-bay-horse/'
  },
  {
    id: 'horse-breed-5',
    category: 'horses',
    difficulty: 'expert',
    type: 'multiple-choice',
    question: 'Which breed is the only draft breed developed in the United States?',
    options: ['American Cream Draft', 'Friesian', 'Arabian', 'Morgan'],
    answer: 'American Cream Draft',
    funFact: 'The American Cream Draft is also a conservation-priority heritage breed.',
    source: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/american-cream-draft-horse/'
  }
];

const labels = {
  dogs: 'canine behavior and training',
  snakes: 'herpetoculture and snake genetics',
  chickens: 'poultry husbandry and breed science',
  cats: 'cat breed standards and feline husbandry',
  horses: 'equine sport, conformation, and breed type'
};

const pickDistractors = (category, term, offset) => {
  const pool = termBank.filter((item) => item.category === category && item.term !== term);
  const selected = [];
  let cursor = offset;
  while (selected.length < 3 && pool.length) {
    const idx = cursor % pool.length;
    selected.push(pool[idx].term);
    pool.splice(idx, 1);
    cursor += 3;
  }
  return selected;
};

const buildVariants = (item, index) => {
  const distractors = pickDistractors(item.category, item.term, index + 1);
  const options = [item.term, ...distractors];
  const rotated = options.map((_, idx) => options[(idx + (index % 4)) % 4]);
  const source = item.source || sourceByCategory[item.category];

  return [
    {
      id: `${item.id}-a`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: `Which expert term matches this definition: ${item.definition}?`,
      options: rotated,
      answer: item.term,
      funFact: item.funFact,
      source
    },
    {
      id: `${item.id}-b`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: `In ${labels[item.category]}, what is the best technical term for this concept: ${item.definition}?`,
      options: [...rotated.slice(1), rotated[0]],
      answer: item.term,
      funFact: item.funFact,
      source
    },
    {
      id: `${item.id}-c`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: `Select the correct professional term: ${item.definition}.`,
      options: [rotated[2], rotated[0], rotated[3], rotated[1]],
      answer: item.term,
      funFact: item.funFact,
      source
    }
  ];
};

export const triviaQuestions = [...termBank.flatMap(buildVariants), ...breedQuestionBank];

export default triviaQuestions;
