import { breeds } from './breeds.js';
import { importedTriviaQuestions } from './importedTriviaQuestions.js';

const sourceByCategory = {
  dogs: 'https://www.akc.org/dog-breeds/',
  snakes: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles',
  chickens: 'https://livestockconservancy.org/heritage-breeds/',
  cat: 'https://cfa.org/breeds/',
  horse: 'https://www.usef.org/compete/breeds-disciplines'
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
  { id: 's19', category: 'snakes', term: 'Fossorial', definition: 'adapted for burrowing or spending substantial time below the substrate surface', funFact: 'Many hognose husbandry setups benefit from substrate depth that supports fossorial behavior.' },
  { id: 's20', category: 'snakes', term: 'Arboreal', definition: 'adapted for climbing and spending significant time above the ground', funFact: 'Arboreal species typically demand more vertical structure than terrestrial setups.' },
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
  { id: 'c19', category: 'chickens', term: 'Pullet', definition: 'young female chicken before she is considered a mature laying hen', funFact: 'Production planning changes meaningfully when pullets transition into lay.' },
  { id: 'c20', category: 'chickens', term: 'Wry tail', definition: 'tail set deviation in which the tail twists or points off-center from the spine', funFact: 'Breed exhibition selection often treats tail faults as important type defects.' },
  { id: 'ct1', category: 'cat', term: 'Ticking', definition: 'agouti banding on individual hairs that creates a salt-and-pepper effect without full body striping', funFact: 'Abyssinians are a classic ticked breed profile.' },
  { id: 'ct2', category: 'cat', term: 'Rosetting', definition: 'bicolored or outlined spotting pattern associated with wild-type horizontal flow in certain breeds', funFact: 'Strong rosetting is a hallmark show goal in Bengals.' },
  { id: 'ct3', category: 'cat', term: 'Colorpoint', definition: 'temperature-sensitive pigmentation that darkens cooler body extremities', funFact: 'Pointed breeds typically combine this with blue eyes.' },
  { id: 'ct4', category: 'cat', term: 'Ruff', definition: 'full neck frill of longer fur especially valued in forest-type breeds', funFact: 'Maine Coons and Norwegian Forest Cats are judged for substantial ruff and coat texture.' },
  { id: 'ct5', category: 'cat', term: 'Boning', definition: 'substance of the skeletal frame relative to body type and standard balance', funFact: 'Judges distinguish fine, medium, and substantial boning by breed standard.' },
  { id: 'ct6', category: 'cat', term: 'Whisker break', definition: 'pronounced muzzle pad contour that creates visible indentation between cheek and whisker pads', funFact: 'Bengal type rewards a strong muzzle with clear whisker pad definition.' },
  { id: 'ct7', category: 'cat', term: 'Profile break', definition: 'stop or curve transition between forehead and nose line in the head profile', funFact: 'Different cat standards call for distinct profile shapes rather than one universal ideal.' },
  { id: 'ct8', category: 'cat', term: 'Outcross', definition: 'planned breeding to an unrelated line to widen genetic diversity while preserving type', funFact: 'Outcross policy is tightly controlled in registry breed programs.' },
  { id: 'ct9', category: 'cat', term: 'Polydactyl', definition: 'having extra toes beyond the normal count on one or more feet', funFact: 'Extra toes are famous in some Maine Coon lines, though not part of the CFA show standard.' },
  { id: 'ct10', category: 'cat', term: 'Slow maturing', definition: 'breed development pattern in which coat, body, or head type reaches full expression over several years', funFact: 'Ragdolls and Maine Coons are often described as slow-maturing breeds.' },
  { id: 'ct11', category: 'cat', term: 'Cobby', definition: 'compact and rounded body type with short sturdy legs and broad frame', funFact: 'Cobby type contrasts strongly with foreign or semi-foreign body style.' },
  { id: 'ct12', category: 'cat', term: 'Foreign type', definition: 'sleek body type with long lines, fine boning, and more tubular silhouette', funFact: 'Show standards use body-type language very precisely across cat breeds.' },
  { id: 'ct13', category: 'cat', term: 'Tufting', definition: 'longer hair growth between the toes or at ear tips that contributes to breed expression', funFact: 'Forest breeds are especially known for toe tufts and ear furnishings.' },
  { id: 'ct14', category: 'cat', term: 'Mitted', definition: 'white foot markings on a pointed cat that stop at specific glove-like boundaries', funFact: 'Precise white placement can be critical in pointed breed patterns.' },
  { id: 'ct15', category: 'cat', term: 'Bicolor', definition: 'coat pattern category combining white with another solid or patterned color', funFact: 'Distribution of white can distinguish van, harlequin, and standard bicolor expressions.' },
  { id: 'ct16', category: 'cat', term: 'Locket', definition: 'small isolated patch of white on an otherwise solid-colored cat', funFact: 'In some pedigreed programs, a locket is considered a fault rather than a desired marking.' },
  { id: 'ct17', category: 'cat', term: 'Silver inhibitor', definition: 'genetic effect that suppresses pigment at the hair base to create silver or smoke expression', funFact: 'Silver genetics can dramatically alter contrast in tabby and shaded cats.' },
  { id: 'ct18', category: 'cat', term: 'Tipping', definition: 'coat effect where only the tip of each hair is pigmented while the base remains light', funFact: 'Shaded and shell patterns depend on precise tipping distribution.' },
  { id: 'ct19', category: 'cat', term: 'Semi-longhair', definition: 'intermediate coat category with body and tail furnishings but less bulk than a full longhair coat', funFact: 'Several natural breeds are classified as semi-longhair rather than fully longhair.' },
  { id: 'ct20', category: 'cat', term: 'Ear furnishings', definition: 'longer hair inside the ears that contributes to breed expression and weather-protective appearance', funFact: 'Ear furnishings are common in cold-climate cat breeds.' },
  { id: 'h1', category: 'horse', term: 'Collection', definition: 'state of balance where the horse shifts weight to the hindquarters and shortens frame without losing energy', funFact: 'True collection changes balance, not just headset.' },
  { id: 'h2', category: 'horse', term: 'Impulsion', definition: 'controlled stored energy generated from the hindquarters and transmitted through a supple back', funFact: 'Impulsion is more than speed and is judged by elasticity and thrust.' },
  { id: 'h3', category: 'horse', term: 'Engagement', definition: 'greater flexion and stepping under of the hind limbs beneath the body mass', funFact: 'Engagement supports transitions, self-carriage, and collected work.' },
  { id: 'h4', category: 'horse', term: 'Bascule', definition: 'arc of the horse over a fence created by rounding the back and neck use', funFact: 'A correct bascule reduces wasted motion over jumps.' },
  { id: 'h5', category: 'horse', term: 'Feathering', definition: 'long hair growth at the lower legs typical of certain breeds', funFact: 'Friesians are recognized for notable feathering.' },
  { id: 'h6', category: 'horse', term: 'Baroque type', definition: 'compact, powerful conformation associated with elevated action and collected work', funFact: 'Andalusians and Friesians are often discussed as baroque breeds.' },
  { id: 'h7', category: 'horse', term: 'Cow sense', definition: 'instinctive responsiveness to cattle movement prized in stock-horse work', funFact: 'Quarter Horse breeding programs heavily value cow sense in ranch and reining lines.' },
  { id: 'h8', category: 'horse', term: 'Foundation sire', definition: 'ancestral stallion or mare with outsized influence on a registry or breed family', funFact: 'Many closed studbooks trace heavily to a few foundation individuals.' },
  { id: 'h9', category: 'horse', term: 'Self-carriage', definition: 'ability to maintain balance and posture without continual rider support', funFact: 'Self-carriage is a core marker of advanced training rather than cosmetic frame.' },
  { id: 'h10', category: 'horse', term: 'Conformation', definition: 'structural build and proportional arrangement of the horse body', funFact: 'Soundness, discipline suitability, and breed type all intersect in conformation evaluation.' },
  { id: 'h11', category: 'horse', term: 'Cadence', definition: 'clear regularity and measured rhythm within a gait', funFact: 'Cadence is especially scrutinized in dressage movement quality.' },
  { id: 'h12', category: 'horse', term: 'Straightness', definition: 'alignment of the horse body so hind feet follow the track of the forehand', funFact: 'Straightness is a prerequisite for true collection and even contact.' },
  { id: 'h13', category: 'horse', term: 'Lead change', definition: 'switch from one canter lead to the other either through simple transition or flying change', funFact: 'Clean lead changes reflect balance, straightness, and response to aids.' },
  { id: 'h14', category: 'horse', term: 'Tracking up', definition: 'hind feet stepping into or beyond the prints of the front feet at walk or trot', funFact: 'Tracking up is one visible indicator of impulsion and reach.' },
  { id: 'h15', category: 'horse', term: 'Pastern angle', definition: 'slope of the pastern relative to the hoof and limb which affects shock absorption and durability', funFact: 'Extremes in pastern angle can predispose certain soundness issues.' },
  { id: 'h16', category: 'horse', term: 'Withers', definition: 'ridge between the shoulder blades that influences saddle fit and silhouette', funFact: 'Breed type and conditioning both affect wither expression.' },
  { id: 'h17', category: 'horse', term: 'Coupling', definition: 'strength and connection of the loin area between back and croup', funFact: 'Weak coupling can reduce power transfer from hindquarters to forehand.' },
  { id: 'h18', category: 'horse', term: 'Cow-hocked', definition: 'hind limb alignment where the hocks angle inward and feet point outward', funFact: 'Some conformation faults are cosmetic while others materially affect performance risk.' },
  { id: 'h19', category: 'horse', term: 'Over at the knee', definition: 'forelimb fault where the knee appears slightly bent forward when viewed from the side', funFact: 'Forelimb deviations are assessed carefully in conformation judging and prepurchase exams.' },
  { id: 'h20', category: 'horse', term: 'Suspension', definition: 'moment of aerial phase and elasticity within a gait or jump effort', funFact: 'Suspension contributes strongly to perceived brilliance in movement.' }
];

const labels = {
  dogs: 'canine behavior and training',
  snakes: 'herpetoculture and snake genetics',
  chickens: 'poultry husbandry and breed science',
  cat: 'cat breed standards and feline husbandry',
  horse: 'equine sport, conformation, and breed type'
};

const entityClues = {
  'norwegian-lundehund': 'A rare Nordic breed developed for puffin hunting with six functional toes and unusual spinal flexibility.',
  'belgian-malinois': 'A high-drive Belgian shepherd variety strongly associated with detection, patrol, and protection work.',
  'border-collie': 'A gathering stock dog known for intense eye, crouching style, and exceptional handler responsiveness.',
  'german-shepherd': 'A large utility breed frequently discussed in service, patrol, and health-testing conversations around hips and elbows.',
  'australian-cattle-dog': 'A compact drover bred to move cattle over long distances and famous for heel-nipping working style.',
  'doberman-pinscher': 'A sleek guarding breed commonly linked to cardiac screening and a square athletic outline.',
  'newfoundland': 'A giant water-working breed with a long association with lifesaving and hauling work.',
  vizsla: 'A Hungarian pointing breed with a rust coat and unusually strong handler attachment.',
  'ball-python-piebald': 'A recessive ball python project defined by large unpigmented white patches.',
  'ball-python-mojave': 'An incomplete dominant ball python morph central to many blue-eyed leucistic complex discussions.',
  'ball-python-clown': 'A recessive ball python project valued for its cleaner, reduced pattern architecture.',
  'corn-snake': 'A commonly kept oviparous colubrid with an enormous catalog of captive color and pattern lines.',
  'western-hognose': 'A small fossorial species famous for bluff displays like hooding, flattening, and dramatic death-feigning.',
  'california-kingsnake': 'A commonly kept kingsnake often cited as an example of ophiophagy.',
  'boa-constrictor': 'A heavy-bodied New World constrictor that is live-bearing rather than egg-laying.',
  'gaboon-viper': 'A venomous African species best known for massive body, camouflage, and extremely long fangs.',
  silkie: 'A heavily broody ornamental chicken with silk-like plumage, dark skin, crest, beard, and five toes.',
  'ayam-cemani': 'A rare Indonesian chicken noted for extreme black pigmentation extending well beyond the feathers.',
  'dong-tao': 'A rare breed immediately recognized by unusually thick, heavily scaled legs.',
  'la-fleche': 'A historic French chicken strongly associated with a horned V-comb.',
  australorp: 'A dual-purpose breed famous for high egg production records.',
  welsummer: 'A heritage breed best known for dark terracotta-brown eggs.',
  'cream-legbar': 'A blue-egg laying autosexing breed that can often be sexed by chick down pattern.',
  ameraucana: 'A true blue-egg breed expected to carry muffs and beard rather than being an olive-egger cross.',
  'maine-coon': 'A large natural breed associated with HCM screening, a shaggy coat, and a substantial ruff.',
  chartreux: 'A French breed noted for a woolly blue coat and copper-to-gold eyes.',
  sphynx: 'A minimally coated breed known for skin-care needs rather than traditional coat grooming.',
  savannah: 'A long-legged spotted breed associated with hybrid-generation discussion and tall ears.',
  bengal: 'A breed prized for horizontal flow, contrast, and rosetted or marbled pattern.',
  'norwegian-forest-cat': 'A natural forest breed with a water-resistant outer coat and dense undercoat.',
  abyssinian: 'A sleek breed defined by warm ticking rather than full-body striping.',
  ragdoll: 'A blue-eyed pointed breed with slow-maturing coat and substantial size.',
  'american-quarter-horse': 'A stock horse strongly associated with explosive sprinting and cow sense.',
  arabian: 'A breed known for endurance influence, a dished profile, and high tail carriage.',
  friesian: 'A black baroque breed associated with abundant feathering and animated action.',
  'cleveland-bay': 'A historic English carriage breed traditionally always bay in color.',
  morgan: 'An American breed celebrated for versatility across harness and saddle work.',
  andalusian: 'An Iberian breed strongly tied to collected movement and baroque type.',
  'american-cream-draft': 'The only draft breed developed in the United States, known for cream dilution and amber eyes.',
  'marsh-tacky': 'A heritage horse adapted to the wet terrain of the Carolina Lowcountry.'
};

const rotateOptions = (options, shift) => options.map((_, index) => options[(index + shift) % options.length]);

const termTemplates = [
  (item, options) => ({ question: `In ${labels[item.category]}, which technical concept best fits this definition: ${item.definition}?`, options }),
  (item, options) => ({ question: `A specialist reviewing a case note would use which term if the defining feature is ${item.definition}?`, options: rotateOptions(options, 1) }),
  (item, options) => ({ question: `Choose the expert-level term that belongs in this scenario: ${item.definition}.`, options: rotateOptions(options, 2) }),
  (item, options) => ({ question: `Which concept should come to mind first for an experienced professional reading ${item.definition}?`, options: rotateOptions(options, 3) }),
  (item, options) => ({ question: `Select the most accurate vocabulary item for a case described as ${item.definition}.`, options }),
  (item, options) => ({ question: `An advanced handler or keeper would label this as what: ${item.definition}?`, options: rotateOptions(options, 1) })
];

const breedTemplates = [
  (entity, options) => ({ question: `${entityClues[entity.id]} Which answer best fits that description?`, options }),
  (entity, options) => ({ question: `Breed specialists would hear this clue and think of which animal: ${entityClues[entity.id]}`, options: rotateOptions(options, 1) }),
  (entity, options) => ({ question: `Select the breed or morph most strongly associated with this profile: ${entityClues[entity.id]}`, options: rotateOptions(options, 2) }),
  (entity, options) => ({ question: `An expert-level identification prompt points to which answer here: ${entityClues[entity.id]}`, options: rotateOptions(options, 3) }),
  (entity, options) => ({ question: `Which breed name closes the loop on this clue: ${entityClues[entity.id]}`, options }),
  (entity, options) => ({ question: `If this were a standards or husbandry exam item, what would the correct answer be: ${entityClues[entity.id]}`, options: rotateOptions(options, 1) }),
  (entity, options) => ({ question: `Which answer is most defensible from this source-backed clue: ${entityClues[entity.id]}`, options: rotateOptions(options, 2) }),
  (entity, options) => ({ question: `An experienced judge, trainer, or keeper would identify which animal from this description: ${entityClues[entity.id]}`, options: rotateOptions(options, 3) }),
  (entity, options) => ({ question: `Choose the correct identification for this advanced clue: ${entityClues[entity.id]}`, options }),
  (entity, options) => ({ question: `Which one of these is the strongest match for the following description: ${entityClues[entity.id]}`, options: rotateOptions(options, 1) })
];

const pickDistractors = (items, selfId, offset) => {
  const pool = items.filter((item) => item.id !== selfId);
  const chosen = [];
  let cursor = offset;

  while (chosen.length < 3 && pool.length) {
    const index = cursor % pool.length;
    chosen.push(pool[index]);
    pool.splice(index, 1);
    cursor += 3;
  }

  return chosen;
};

const buildTermQuestions = (item, index) => {
  const categoryTerms = termBank.filter((entry) => entry.category === item.category);
  const distractors = pickDistractors(categoryTerms, item.id, index + 1).map((entry) => entry.term);
  const baseOptions = [item.term, ...distractors];

  return termTemplates.map((template, templateIndex) => {
    const next = template(item, baseOptions);
    return {
      id: `${item.id}-term-${templateIndex + 1}`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: next.question,
      options: next.options,
      answer: item.term,
      funFact: item.funFact,
      source: sourceByCategory[item.category]
    };
  });
};

const allBreedEntries = Object.entries(breeds).flatMap(([category, entries]) =>
  entries.map((entity) => ({ ...entity, category }))
);

const buildBreedQuestions = (entity, index) => {
  const categoryEntities = allBreedEntries.filter((entry) => entry.category === entity.category);
  const distractors = pickDistractors(categoryEntities, entity.id, index + 2).map((entry) => entry.displayName);
  const baseOptions = [entity.displayName, ...distractors];

  return breedTemplates.map((template, templateIndex) => {
    const next = template(entity, baseOptions);
    return {
      id: `${entity.id}-breed-${templateIndex + 1}`,
      entityId: entity.id,
      category: entity.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: next.question,
      options: next.options,
      answer: entity.displayName,
      funFact: entity.funFact,
      source: entity.factSource
    };
  });
};

export const triviaQuestions = [
  ...termBank.flatMap(buildTermQuestions),
  ...allBreedEntries.flatMap(buildBreedQuestions),
  ...importedTriviaQuestions
];

export default triviaQuestions;

