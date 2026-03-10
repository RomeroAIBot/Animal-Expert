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
  { id: 'c18', category: 'chickens', term: 'Dust bathing', definition: 'self-maintenance behavior using dry substrate to reduce ectoparasites and condition feathers', funFact: 'Lack of dust access increases frustration behaviors in confined flocks.' }
];

const labels = {
  dogs: 'canine behavior and training',
  snakes: 'herpetoculture and snake genetics',
  chickens: 'poultry husbandry and breed science'
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

  return [
    {
      id: `${item.id}-a`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: `Which expert term matches this definition: ${item.definition}?`,
      options: rotated,
      answer: item.term,
      funFact: item.funFact
    },
    {
      id: `${item.id}-b`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: `In ${labels[item.category]}, what is the best technical term for this concept: ${item.definition}?`,
      options: [...rotated.slice(1), rotated[0]],
      answer: item.term,
      funFact: item.funFact
    },
    {
      id: `${item.id}-c`,
      category: item.category,
      difficulty: 'expert',
      type: 'multiple-choice',
      question: `Select the correct professional term: ${item.definition}.`,
      options: [rotated[2], rotated[0], rotated[3], rotated[1]],
      answer: item.term,
      funFact: item.funFact
    }
  ];
};

export const triviaQuestions = termBank.flatMap(buildVariants);

export default triviaQuestions;