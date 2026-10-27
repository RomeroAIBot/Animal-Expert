// Hand-checked dog trivia. Each question replaces one imported question (`replaces`), with a
// complete answer, three wrong options of the same kind as the answer, a short explanation,
// and a source link. Options are listed answer-first here; the loader shuffles them.
//
// Writing rules:
// - Every option must be a believable answer to the question and the same kind of thing
//   (all terms, all breeds, all people), at a similar length.
// - The answer must not appear in the question.
// - Facts are checked before they are written; questions built on wrong or unverifiable
//   facts are listed in `retiredImportIds` with the reason.

export const dogQuestions = [
  {
    id: 'dogs-0001',
    replaces: 'imported-dogs-0001',
    topic: 'Learning theory',
    question: 'In operant conditioning, adding something the dog likes to make a behavior more likely is called what?',
    options: ['Positive reinforcement', 'Negative reinforcement', 'Positive punishment', 'Negative punishment'],
    answer: 'Positive reinforcement',
    funFact:
      '"Positive" means something is added and "reinforcement" means the behavior becomes more likely. Clicking and treating a sit is the classic example.',
    source: 'https://en.wikipedia.org/wiki/Operant_conditioning',
    evidence: 'positive reinforcement, wherein an observed behavior is made more likely to occur'
  },
  {
    id: 'dogs-0007',
    replaces: 'imported-dogs-0007',
    topic: 'Learning theory',
    question: 'A dog jumps up for attention, so you turn your back and ignore it. Which operant quadrant is that?',
    options: ['Negative punishment', 'Positive punishment', 'Negative reinforcement', 'Extinction'],
    answer: 'Negative punishment',
    funFact:
      'Attention is the reward the dog wants, and you take it away to make jumping less likely. Taking something away to reduce a behavior is negative punishment.',
    source: 'https://en.wikipedia.org/wiki/Operant_conditioning',
    evidence: 'is followed by the removal of a stimulus, and the behavior is less likely'
  },
  {
    id: 'dogs-0009',
    replaces: 'imported-dogs-0009',
    topic: 'Learning theory',
    question: 'Which reinforcement schedule produces behavior that is most resistant to extinction?',
    options: ['Variable ratio', 'Fixed ratio', 'Fixed interval', 'Continuous reinforcement'],
    answer: 'Variable ratio',
    funFact:
      'The reward comes after an unpredictable number of responses, so the dog keeps trying, much like a person at a slot machine.',
    source: 'https://en.wikipedia.org/wiki/Reinforcement',
    evidence: 'the variable ratio schedule produces both the highest rate of responding and the greatest resistance to extinction'
  },
  {
    id: 'dogs-0011',
    replaces: 'imported-dogs-0011',
    topic: 'Behavior modification',
    question:
      'A trainer feeds chicken every time a fearful dog sees another dog, aiming to change how the dog feels about other dogs. What is this technique?',
    options: ['Counterconditioning', 'Systematic desensitization', 'Flooding', 'Extinction'],
    answer: 'Counterconditioning',
    funFact:
      'Counterconditioning changes the emotional response by pairing the trigger with something good. Desensitization gradually raises exposure while keeping the dog calm, and the two are usually combined.',
    source: 'https://en.wikipedia.org/wiki/Counterconditioning',
    evidence: 'counterconditioning (also called stimulus substitution)'
  },
  {
    id: 'dogs-0019',
    replaces: 'imported-dogs-0019',
    topic: 'Reactivity protocols',
    question: 'Who developed Behavior Adjustment Training (BAT) for reactive dogs?',
    options: ['Grisha Stewart', 'Leslie McDevitt', 'Karen Pryor', 'Patricia McConnell'],
    answer: 'Grisha Stewart',
    funFact:
      'Leslie McDevitt created the "Look At That" game in her book Control Unleashed, and Karen Pryor popularized clicker training.',
    source: 'https://grishastewart.com/',
    evidence: 'home of bat (behavior adjustment training)'
  },
  {
    id: 'dogs-0022',
    replaces: 'imported-dogs-0022',
    topic: 'Reactivity protocols',
    question:
      'Several stressors pile up over a day until a dog overreacts to something it normally ignores. What do trainers call this?',
    options: ['Trigger stacking', 'Barrier frustration', 'Learned helplessness', 'Displacement behavior'],
    answer: 'Trigger stacking',
    funFact:
      'Stress builds when triggers come too close together for the dog to recover, so the final, often minor trigger gets the blame. Spacing stressors out and allowing recovery time helps.',
    source: 'https://www.akc.org/expert-advice/training/how-to-avoid-trigger-stacking-in-dogs/',
    evidence: 'a series of successive triggers'
  },
  {
    id: 'dogs-0034',
    replaces: 'imported-dogs-0034',
    topic: 'Herding',
    question: 'Which herding style is the Border Collie best known for?',
    options: [
      'Eye, stalk and gather',
      'Heeling and nipping from behind',
      'Tending as a living fence',
      'Barking to drive stock forward'
    ],
    answer: 'Eye, stalk and gather',
    funFact:
      'Border Collies control stock with an intense stare and a crouched stalk. Cattle dogs heel, German Shepherds tend, and New Zealand Huntaways drive with their voice.',
    source: 'https://en.wikipedia.org/wiki/Herding_dog',
    evidence: 'strong eye to stare down the animals'
  },
  {
    id: 'dogs-0041',
    replaces: 'imported-dogs-0041',
    topic: 'Health testing',
    question: 'In canine health testing, what does the registry name "OFA" stand for?',
    options: [
      'Orthopedic Foundation for Animals',
      'Organization for Animal Fitness',
      'Orthopedic Federation of America',
      'Official Fitness Assessment'
    ],
    answer: 'Orthopedic Foundation for Animals',
    funFact:
      'Founded to fight hip dysplasia, OFA now keeps public results for hips, elbows, hearts, eyes and many DNA tests.',
    source: 'https://ofa.org/',
    evidence: 'orthopedic foundation for animals'
  },
  {
    id: 'dogs-0048',
    replaces: 'imported-dogs-0048',
    topic: 'Health testing',
    question:
      'Which breed is most associated with dilated cardiomyopathy, with yearly Holter monitoring advised from about age two?',
    options: ['Doberman Pinscher', 'Cavalier King Charles Spaniel', 'Dachshund', 'Border Collie'],
    answer: 'Doberman Pinscher',
    funFact:
      'Dilated cardiomyopathy can stay hidden for years, so Dobermans are screened every year. Cavaliers are screened mainly for mitral valve disease instead.',
    source: 'https://dpca.org/breed/health/',
    evidence: 'doberman-related dilated cardiomyopathy'
  },
  {
    id: 'dogs-0064',
    replaces: 'imported-dogs-0064',
    topic: 'Breeds',
    question: 'Which breed was developed to herd reindeer in Finnish Lapland?',
    options: ['Lapponian Herder', 'Norwegian Buhund', 'Norwegian Elkhound', 'Keeshond'],
    answer: 'Lapponian Herder',
    funFact:
      'In Finnish it is the Lapinporokoira, or "Lapland reindeer dog." The Norwegian Buhund is an all-round farm dog and the Elkhound hunts moose.',
    source: 'https://en.wikipedia.org/wiki/Lapponian_Herder',
    evidence: 'lapp reindeer dog'
  },
  {
    id: 'dogs-0091',
    replaces: 'imported-dogs-0091',
    topic: 'Behavior',
    question:
      'A dog is relaxed when left with anyone at all, but panics when one particular person leaves. Which condition fits best?',
    options: ['Separation anxiety', 'Isolation distress', 'Barrier frustration', 'Noise phobia'],
    answer: 'Separation anxiety',
    funFact:
      'Separation anxiety is tied to specific people. A dog with isolation distress panics about being alone, and any company will settle it.',
    source: 'https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/separation-anxiety',
    evidence: 'separation from their guardians, the people they\'re attached to'
  },
  {
    id: 'dogs-0099',
    replaces: 'imported-dogs-0099',
    topic: 'Breeds',
    question: 'Which breed does not bark the way most dogs do, and instead makes a yodel-like sound?',
    options: ['Basenji', 'Shiba Inu', 'Siberian Husky', 'Pharaoh Hound'],
    answer: 'Basenji',
    funFact:
      'Its unusually shaped larynx produces the yodel, and the AKC calls it Africa\'s "barkless dog".',
    source: 'https://en.wikipedia.org/wiki/Basenji',
    evidence: 'yodel-like'
  },

  // Learning theory
  {
    id: 'dogs-0002',
    replaces: 'imported-dogs-0002',
    topic: 'Learning theory',
    question:
      'Leash pressure is released the instant a dog steps forward, so stepping forward becomes more likely. Which operant quadrant is that?',
    options: ['Negative reinforcement', 'Positive reinforcement', 'Negative punishment', 'Positive punishment'],
    answer: 'Negative reinforcement',
    funFact:
      'Something unpleasant (the pressure) is taken away, and the behavior increases. "Negative" means removed, not bad.',
    source: 'https://en.wikipedia.org/wiki/Operant_conditioning',
    evidence: 'followed by the removal of an aversive stimulus, thereby increasing'
  },
  {
    id: 'dogs-0003',
    replaces: 'imported-dogs-0003',
    topic: 'Learning theory',
    question: 'A sharp leash pop is given each time a dog lunges, to make lunging less likely. Which operant quadrant is that?',
    options: ['Positive punishment', 'Negative punishment', 'Negative reinforcement', 'Positive reinforcement'],
    answer: 'Positive punishment',
    funFact:
      'Something unpleasant is added to reduce a behavior. Many modern trainers avoid it because it can increase fear and reactivity.',
    source: 'https://en.wikipedia.org/wiki/Operant_conditioning',
    evidence: 'followed by an aversive stimulus which makes the behavior less likely'
  },
  {
    id: 'dogs-0005',
    replaces: 'imported-dogs-0005',
    topic: 'Learning theory',
    question: 'When a behavior stops being reinforced and gradually fades away, what is the process called?',
    options: ['Extinction', 'Habituation', 'Desensitization', 'Generalization'],
    answer: 'Extinction',
    funFact:
      'Behavior often gets worse before it fades. This temporary spike is called an extinction burst, and giving in during it makes the behavior stronger.',
    source: 'https://en.wikipedia.org/wiki/Extinction_(psychology)',
    evidence: 'no longer providing the reinforcement that has been maintaining a behavior'
  },
  {
    id: 'dogs-0010',
    replaces: 'imported-dogs-0010',
    topic: 'Learning theory',
    question:
      'A dog has heard a sound hundreds of times with nothing following it, and is now slow to learn that it predicts food. What explains this?',
    options: ['Latent inhibition', 'Learned helplessness', 'Spontaneous recovery', 'Overshadowing'],
    answer: 'Latent inhibition',
    funFact:
      'A familiar, meaningless signal is harder to attach new meaning to. That is why trainers pick a fresh, distinct sound or word for a marker.',
    source: 'https://en.wikipedia.org/wiki/Latent_inhibition',
    evidence: 'initially exposed to a stimulus without any meaningful connection'
  },
  {
    id: 'dogs-0012',
    replaces: 'imported-dogs-0012',
    topic: 'Learning theory',
    question:
      'A dog happened to spin just before a treat arrived, and now spins before every cue. What is this accidentally reinforced habit called?',
    options: ['Superstitious behavior', 'Shaping', 'Chaining', 'Generalization'],
    answer: 'Superstitious behavior',
    funFact:
      'B. F. Skinner described it in pigeons that repeated whatever they had been doing when food arrived by chance. Good timing with a marker prevents it.',
    source: 'https://psychclassics.yorku.ca/Skinner/Pigeon/',
    evidence: 'can set up superstitious behavior'
  },
  {
    id: 'dogs-0013',
    replaces: 'imported-dogs-0013',
    topic: 'Learning theory',
    question: 'Reinforcing small steps that get closer and closer to a final behavior is called what?',
    options: ['Shaping', 'Capturing', 'Luring', 'Chaining'],
    answer: 'Shaping',
    funFact:
      'Shaping is also called reinforcing successive approximations. It is how behaviors like closing a door or a full retrieve are often built.',
    source: 'https://en.wikipedia.org/wiki/Shaping_(psychology)',
    evidence: 'reinforcing exact segments of behavior'
  },
  {
    id: 'dogs-0014',
    replaces: 'imported-dogs-0014',
    topic: 'Learning theory',
    question:
      'Marking and rewarding a behavior the dog offers on its own, such as a spontaneous play bow, without prompting it, is called what?',
    options: ['Capturing', 'Shaping', 'Luring', 'Modeling'],
    answer: 'Capturing',
    funFact:
      'Capturing works best for behaviors the dog already does naturally. A cue is added once the dog offers the behavior reliably.',
    source: 'https://www.akc.org/expert-advice/training/put-your-dogs-cute-behaviors-on-cue/',
    evidence: 'capturing means marking and rewarding a specific target behavior'
  },
  {
    id: 'dogs-0015',
    replaces: 'imported-dogs-0015',
    topic: 'Learning theory',
    question: "Pavlov's experiments with dogs, a bell and food demonstrated which kind of learning?",
    options: ['Classical conditioning', 'Operant conditioning', 'Social learning', 'Habituation'],
    answer: 'Classical conditioning',
    funFact:
      'Also called respondent conditioning, it links a neutral signal to an automatic response, such as drooling. Operant conditioning changes voluntary behavior through its consequences.',
    source: 'https://en.wikipedia.org/wiki/Classical_conditioning',
    evidence: 'classical conditioning (also respondent conditioning and pavlovian conditioning)'
  },
  {
    id: 'dogs-0016',
    replaces: 'imported-dogs-0016',
    topic: 'Learning theory',
    question:
      'Which principle says animals divide their responses among choices in proportion to how much reinforcement each choice provides?',
    options: ['The matching law', 'The Premack principle', 'The law of effect', 'The Yerkes-Dodson law'],
    answer: 'The matching law',
    funFact:
      'Richard Herrnstein described it in 1961. It explains why a dog chooses whatever pays best, so making the behavior you want the best-paid option works.',
    source: 'https://en.wikipedia.org/wiki/Matching_law',
    evidence: 'rate of response is proportional to rate of reinforcement'
  },
  {
    id: 'dogs-0017',
    replaces: 'imported-dogs-0017',
    topic: 'Learning theory',
    question: 'Teaching the last step of a sequence first, then adding earlier steps in front of it, is called what?',
    options: ['Backward chaining', 'Forward chaining', 'Shaping', 'Fading'],
    answer: 'Backward chaining',
    funFact:
      'Because the dog always finishes with the step it knows best, every repetition ends in success. It is common for retrieves and agility sequences.',
    source: 'https://en.wikipedia.org/wiki/Chaining',
    evidence: 'teach the last step first'
  },

  // Reactivity protocols
  {
    id: 'dogs-0021',
    replaces: 'imported-dogs-0021',
    topic: 'Reactivity protocols',
    question: "Leslie McDevitt's book Control Unleashed introduced which game for reactive dogs?",
    options: ['Look At That', 'Find It', 'Engage-Disengage', 'Touch and Go'],
    answer: 'Look At That',
    // "Look At That" is the game's real name, not a sentence cut short.
    allowChecks: ['truncated-answer'],
    funFact:
      'The dog is rewarded for calmly glancing at a trigger, turning the trigger itself into a cue to check in with the handler.',
    source: 'https://www.dogwise.com/control-unleashed-creating-a-focused-and-confident-dog',
    evidence: 'her look at that game'
  },
  {
    id: 'dogs-0023',
    replaces: 'imported-dogs-0023',
    topic: 'Reactivity protocols',
    question:
      'A reactive dog notices a trigger but can still take treats and respond to cues. How do trainers describe that dog?',
    options: ['Under threshold', 'Over threshold', 'Trigger stacked', 'Flooded'],
    answer: 'Under threshold',
    funFact:
      'Learning happens under threshold. Once a dog is over threshold it may bark, lunge or shut down, and it can no longer take in training.',
    source: 'https://www.akc.org/expert-advice/training/how-to-avoid-trigger-stacking-in-dogs/',
    evidence: 'under threshold'
  },

  // Barrier frustration and aggression
  {
    id: 'dogs-0028',
    replaces: 'imported-dogs-0028',
    topic: 'Behavior',
    question:
      "A dog behind a fence can't reach a passing dog, so it turns and bites its housemate. What is this called?",
    options: ['Redirected aggression', 'Resource guarding', 'Predatory aggression', 'Pain-related aggression'],
    answer: 'Redirected aggression',
    funFact:
      'The arousal is aimed at whatever is closest, sometimes the handler. It is a key safety risk when a dog has barrier frustration.',
    source: 'https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/aggression',
    evidence: 'sometimes one will turn and attack the other'
  },
  {
    id: 'dogs-0063',
    replaces: 'imported-dogs-0063',
    topic: 'Behavior',
    question: 'A dog stiffens, eats faster and growls when someone walks near its food bowl. What is this behavior called?',
    options: ['Resource guarding', 'Barrier frustration', 'Redirected aggression', 'Displacement behavior'],
    answer: 'Resource guarding',
    funFact:
      'Guarding valued things is normal dog behavior that ranges from mild to dangerous. Punishing the growl removes the warning without removing the worry.',
    source: 'https://www.aspca.org/pet-care/dog-care/common-dog-behavior-issues/food-guarding',
    evidence: 'resource guarding in dogs can range'
  },
  {
    id: 'dogs-0095',
    replaces: 'imported-dogs-0095',
    topic: 'Behavior',
    question:
      'A dog barks and lunges at other dogs on leash but has never threatened or bitten one. Which term fits it best?',
    options: ['Reactive', 'Aggressive', 'Dominant', 'Feral'],
    answer: 'Reactive',
    funFact:
      'Reactivity is an over-the-top response, often from fear or frustration. Aggression means threats or actual contact. A reactive dog is not necessarily aggressive.',
    source: 'https://www.akc.org/expert-advice/training/reactivity-vs-aggression/',
    evidence: 'behaviors out of proportion to the situation'
  },

  // Agility
  {
    id: 'dogs-0031',
    replaces: 'imported-dogs-0031',
    topic: 'Agility',
    question: 'Which AKC agility obstacles have painted contact zones that the dog must touch?',
    options: [
      'A-frame, dog walk and teeter',
      'Tire, chute and tunnel',
      'Weave poles, tire and table',
      'Broad jump, tunnel and weaves'
    ],
    answer: 'A-frame, dog walk and teeter',
    funFact:
      'The yellow zones at each end make the dog get on and off safely instead of leaping from height. Missing one is a fault.',
    source: 'https://en.wikipedia.org/wiki/Dog_agility',
    evidence: 'contact obstacles are obstacles made of planks and ramps'
  },
  {
    id: 'dogs-0127',
    replaces: 'imported-dogs-0127',
    topic: 'Agility',
    question: 'What does the AKC agility title MACH stand for?',
    options: [
      'Master Agility Champion',
      'Master Agility Course Handler',
      'Major Agility Championship',
      'Maximum Agility Champion'
    ],
    answer: 'Master Agility Champion',
    funFact:
      'A MACH takes 750 speed points plus 20 "double Qs", meaning qualifying runs in both Master Standard and Master Jumpers With Weaves on the same day.',
    source: 'https://en.wikipedia.org/wiki/Dog_agility',
    evidence: 'mach (master agility champion for akc)'
  },
  {
    id: 'dogs-0142',
    replaces: 'imported-dogs-0142',
    topic: 'Agility',
    question: 'In dog agility, what does NADAC stand for?',
    options: [
      'North American Dog Agility Council',
      'National Association of Dog Agility Clubs',
      'North American Dog Athletics Club',
      'National Agility Dog Association Council'
    ],
    answer: 'North American Dog Agility Council',
    funFact: 'NADAC is known for flowing courses, distance handling and the Hoopers class, which uses arches instead of jumps.',
    source: 'https://www.nadac.com/',
    evidence: 'the north american dog agility council'
  },

  // Herding
  {
    id: 'dogs-0033',
    replaces: 'imported-dogs-0033',
    topic: 'Herding',
    question: 'In herding, what does a "header" do?',
    options: [
      'Works the front of the stock to turn or stop it',
      'Nips at the heels to drive stock forward',
      'Patrols a boundary as a living fence',
      'Lives with the flock to guard it from predators'
    ],
    answer: 'Works the front of the stock to turn or stop it',
    funFact:
      'Heelers work from behind and drive. Many breeds can do both, but most lean one way. Livestock guardians, by contrast, protect rather than move stock.',
    source: 'https://en.wikipedia.org/wiki/Herding_dog',
    evidence: 'they consistently go to the front'
  },
  {
    id: 'dogs-0036',
    replaces: 'imported-dogs-0036',
    topic: 'Herding',
    question: 'In a sheepdog trial, the "fetch" moves the sheep in which direction?',
    options: ['Toward the handler', 'Away from the handler', 'Into the pen', 'Across the field in front of the handler'],
    answer: 'Toward the handler',
    funFact: 'A classic trial runs outrun, lift, fetch, drive, shed and pen. Moving stock across in front of the handler is the cross-drive.',
    source: 'https://en.wikipedia.org/wiki/Sheepdog_trial',
    evidence: 'driving the sheep towards the handler (fetch)'
  },
  {
    id: 'dogs-0037',
    replaces: 'imported-dogs-0037',
    topic: 'Herding',
    question: 'Which breed is a classic "heeler", driving cattle with nips at the heels?',
    options: ['Australian Cattle Dog', 'Border Collie', 'German Shepherd Dog', 'Shetland Sheepdog'],
    answer: 'Australian Cattle Dog',
    funFact:
      'Heelers use force and close contact instead of eye. Cardigan and Pembroke Welsh Corgis are also traditional heelers.',
    source: 'https://en.wikipedia.org/wiki/Herding_dog',
    evidence: 'for this reason they are called heelers'
  },
  {
    id: 'dogs-0040',
    replaces: 'imported-dogs-0040',
    topic: 'Herding',
    question: 'Which breed is the classic "tending" herder, trotting the edge of a grazing flock like a living fence?',
    options: ['German Shepherd Dog', 'Border Collie', 'Australian Cattle Dog', 'Pembroke Welsh Corgi'],
    answer: 'German Shepherd Dog',
    funFact:
      "Tending keeps a large flock off crops on unfenced land. It is the origin of the German Shepherd's tireless, ground-covering trot.",
    source: 'https://en.wikipedia.org/wiki/Herding_dog',
    evidence: 'historically tending dogs'
  },

  // Health testing
  {
    id: 'dogs-0042',
    replaces: 'imported-dogs-0042',
    topic: 'Health testing',
    question: 'A dog earns a CHIC number from the Canine Health Information Center when it has done what?',
    options: [
      'Completed every test its breed club requires, with results public',
      'Passed every required test with an excellent score',
      'Finished its conformation championship',
      'Been DNA-profiled to confirm its parentage'
    ],
    answer: 'Completed every test its breed club requires, with results public',
    funFact:
      'A CHIC number shows the testing was done, not that every result was normal. The aim is openness so breeders can make informed choices.',
    source: 'https://ofa.org/chic-programs/',
    evidence: 'those results are publicly available'
  },
  {
    id: 'dogs-0044',
    replaces: 'imported-dogs-0044',
    topic: 'Health testing',
    question: 'What does PennHIP measure to predict hip dysplasia risk?',
    options: ['Hip joint laxity', 'Bone density', 'Cartilage thickness', 'Thigh muscle mass'],
    answer: 'Hip joint laxity',
    funFact:
      'PennHIP gives a "distraction index" for how loose the hip can be pulled. Looser hips are more likely to develop arthritis. It can be done from 16 weeks of age.',
    source: 'https://en.wikipedia.org/wiki/PennHIP',
    evidence: 'measure the joint laxity'
  },
  {
    id: 'dogs-0045',
    replaces: 'imported-dogs-0045',
    topic: 'Health testing',
    question: 'Degenerative myelopathy in dogs is often compared with which human disease?',
    options: ['ALS (Lou Gehrig\'s disease)', 'Multiple sclerosis', "Parkinson's disease", 'Muscular dystrophy'],
    answer: 'ALS (Lou Gehrig\'s disease)',
    funFact:
      'Both involve the SOD1 gene and cause slowly progressing weakness, starting in the hind legs in dogs. A DNA test identifies at-risk dogs.',
    source: 'https://en.wikipedia.org/wiki/Degenerative_myelopathy',
    evidence: 'lou gehrig\'s disease'
  },
  {
    id: 'dogs-0046',
    replaces: 'imported-dogs-0046',
    topic: 'Health testing',
    question: 'Exercise-induced collapse (EIC), a genetic condition, is most associated with which breed?',
    options: ['Labrador Retriever', 'Greyhound', 'Dalmatian', 'Siberian Husky'],
    answer: 'Labrador Retriever',
    funFact:
      'Affected dogs lose control of their hind legs after a few minutes of intense exercise. It is caused by a DNM1 mutation, and the EIC DNA test is part of the Labrador\'s CHIC requirements.',
    source: 'https://en.wikipedia.org/wiki/Exercise-induced_collapse',
    evidence: 'mainly found in labrador retrievers'
  },
  {
    id: 'dogs-0047',
    replaces: 'imported-dogs-0047',
    topic: 'Health testing',
    question: 'What is the name of OFA\'s registry for canine eye exam results?',
    options: ['Companion Animal Eye Registry', 'Canine Vision Database', 'National Retinal Registry', 'Ocular Health Index'],
    answer: 'Companion Animal Eye Registry',
    funFact: 'Exams are still done by board-certified veterinary ophthalmologists; only the registry changed hands.',
    source: 'https://ofa.org/diseases/eye-certification/',
    evidence: 'companion animal eye registry (caer)'
  },
  {
    id: 'dogs-0049',
    replaces: 'imported-dogs-0049',
    topic: 'Health testing',
    question: "Von Willebrand's disease, screened for in Doberman Pinschers, is what kind of disorder?",
    options: ['A bleeding disorder', 'A heart rhythm disorder', 'A thyroid disorder', 'A spinal cord disorder'],
    answer: 'A bleeding disorder',
    funFact:
      'Affected dogs lack a clotting protein and can bleed heavily after surgery or injury. Dobermans carry the mildest form, type 1.',
    source: 'https://en.wikipedia.org/wiki/Von_Willebrand_disease',
    evidence: 'identified in dogs of the breeds doberman pinscher'
  },
  {
    id: 'dogs-0050',
    replaces: 'imported-dogs-0050',
    topic: 'Health testing',
    question: 'Which heart condition is the main reason Cavalier King Charles Spaniels are screened before breeding?',
    options: ['Mitral valve disease', 'Dilated cardiomyopathy', 'Subaortic stenosis', 'Patent ductus arteriosus'],
    answer: 'Mitral valve disease',
    funFact:
      'Nearly all Cavaliers develop a mitral valve murmur eventually, often young. The breeding protocol favors parents whose hearts stay clear for longest.',
    source: 'https://en.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel',
    evidence: 'cavaliers can be prone to mitral valve disease'
  },
  {
    id: 'dogs-0051',
    replaces: 'imported-dogs-0051',
    topic: 'Health testing',
    question: "A BAER test checks a dog's what?",
    options: ['Hearing', 'Vision', 'Heart rhythm', 'Hip laxity'],
    answer: 'Hearing',
    funFact:
      'BAER stands for Brainstem Auditory Evoked Response. It can detect deafness in one ear, common in Dalmatians and in dogs with lots of white or merle.',
    source: 'https://ofa.org/diseases/congenital-deafness/',
    evidence: 'brainstem auditory evoked response (baer) test'
  },
  {
    id: 'dogs-0052',
    replaces: 'imported-dogs-0052',
    topic: 'Health testing',
    question: 'Juvenile laryngeal paralysis and polyneuropathy (JLPP) is a major health concern in which Russian working breed?',
    options: ['Black Russian Terrier', 'Borzoi', 'Samoyed', 'Russian Toy'],
    answer: 'Black Russian Terrier',
    funFact:
      'Affected puppies develop breathing trouble and weakness within months, so breeders DNA-test to avoid producing it.',
    source: 'https://en.wikipedia.org/wiki/Black_Russian_Terrier',
    evidence: 'juvenile laryngeal paralysis and polyneuropathy'
  },
  {
    id: 'dogs-0053',
    replaces: 'imported-dogs-0053',
    topic: 'Health testing',
    question: 'The DNA test for Collie eye anomaly looks for a mutation in which gene?',
    options: ['NHEJ1', 'SOD1', 'MDR1', 'PRCD'],
    answer: 'NHEJ1',
    funFact:
      'The other three are real dog genetic tests too: SOD1 for degenerative myelopathy, MDR1 for drug sensitivity and PRCD for a form of progressive retinal atrophy.',
    source: 'https://en.wikipedia.org/wiki/Collie_eye_anomaly',
    evidence: 'a mutation in the nhej1 gene is responsible'
  },
  {
    id: 'dogs-0054',
    replaces: 'imported-dogs-0054',
    topic: 'Health testing',
    question: "How does the British BVA hip scheme report results, unlike OFA's grades?",
    options: [
      'A number for each hip, where lower is better',
      'A letter grade from A to E for the dog',
      'A single pass or fail certificate',
      'A percentage of normal joint fit'
    ],
    answer: 'A number for each hip, where lower is better',
    funFact:
      'Each hip scores 0 to 53, for a total of 0 to 106. The A-to-E letter grades are the FCI system used in much of Europe.',
    source: 'https://www.bva.co.uk/canine-health-schemes/hip-scheme/',
    evidence: 'the maximum is 53'
  },

  // Stress and body language
  {
    id: 'dogs-0055',
    replaces: 'imported-dogs-0055',
    topic: 'Body language',
    question:
      'A dog turns its head away but keeps its eyes fixed on something, showing the whites of its eyes. What is this called?',
    options: ['Whale eye', 'Hard stare', 'Soft eye', 'Cherry eye'],
    answer: 'Whale eye',
    funFact:
      'Whale eye signals stress or a warning, often while guarding or being hugged. Cherry eye is something else entirely: a prolapsed tear gland.',
    source: 'https://www.akc.org/expert-advice/training/dog-body-language/',
    evidence: 'whale eye'
  },
  {
    id: 'dogs-0059',
    replaces: 'imported-dogs-0059',
    topic: 'Body language',
    question: 'Repetitive circling or pacing in a boarding kennel is an example of what?',
    options: ['Stereotypic behavior', 'Play behavior', 'Displacement grooming', 'Territorial marking'],
    answer: 'Stereotypic behavior',
    funFact:
      'Stereotypies are repetitive behaviors with no obvious purpose that point to stress or an environment that is too restrictive or under-stimulating.',
    source: 'https://en.wikipedia.org/wiki/Stereotypy_(non-human)',
    evidence: 'examples of stereotypical behaviours include pacing'
  },

  // Medicine
  {
    id: 'dogs-0065',
    replaces: 'imported-dogs-0065',
    topic: 'Medicine',
    question: 'On OFA hip X-rays, which two things are evaluated?',
    options: [
      'Joint looseness and arthritic changes',
      'Bone length and bone density',
      'Muscle mass and walking pattern',
      'Leg angle and paw size'
    ],
    answer: 'Joint looseness and arthritic changes',
    funFact:
      'OFA grades hips from Excellent to Severe and only gives a final rating at 24 months or older. Earlier films are preliminary.',
    source: 'https://ofa.org/diseases/hip-dysplasia/',
    evidence: 'significant subluxation present'
  },
  {
    id: 'dogs-0066',
    replaces: 'imported-dogs-0066',
    topic: 'Medicine',
    question: 'Which of these is part of brachycephalic obstructive airway syndrome, as seen in Pugs and Bulldogs?',
    options: ['Narrowed nostrils', 'Loose hip joints', 'Retained baby teeth', 'Cloudy lenses'],
    answer: 'Narrowed nostrils',
    funFact:
      'The syndrome also includes an elongated soft palate, a narrow windpipe and everted laryngeal saccules, all caused by a shortened skull.',
    source: 'https://en.wikipedia.org/wiki/Brachycephalic_obstructive_airway_syndrome',
    evidence: 'stenotic nares (pinched or narrowed nostrils)'
  },
  {
    id: 'dogs-0069',
    replaces: 'imported-dogs-0069',
    topic: 'Medicine',
    question: 'What happens in gastric dilatation-volvulus, or bloat?',
    options: [
      'The stomach fills with gas and twists',
      'A swallowed toy blocks the intestines',
      'The stomach lining becomes ulcerated',
      'The esophagus loses its muscle tone'
    ],
    answer: 'The stomach fills with gas and twists',
    funFact:
      'It is an emergency that can kill within hours. Deep-chested breeds such as Great Danes, Saint Bernards and German Shepherds are most at risk.',
    source: 'https://www.acvs.org/small-animal/gastric-dilatation-volvulus',
    evidence: 'twisted stomach'
  },
  {
    id: 'dogs-0070',
    replaces: 'imported-dogs-0070',
    topic: 'Medicine',
    question: 'Which preventive surgery tacks the stomach to the body wall so it cannot twist?',
    options: ['Gastropexy', 'Gastrotomy', 'Splenectomy', 'Pyloroplasty'],
    answer: 'Gastropexy',
    funFact:
      'It is often done during a spay or neuter in high-risk breeds. It does not stop the stomach filling with gas, but it prevents the deadly twist.',
    source: 'https://en.wikipedia.org/wiki/Gastropexy',
    evidence: 'the stomach is sutured to the abdominal wall'
  },
  {
    id: 'dogs-0071',
    replaces: 'imported-dogs-0071',
    topic: 'Medicine',
    question: "Addison's disease in dogs is caused by too little of which hormones?",
    options: [
      'Cortisol and aldosterone',
      'Insulin and glucagon',
      'Thyroid hormones',
      'Estrogen and progesterone'
    ],
    answer: 'Cortisol and aldosterone',
    funFact:
      'It is nicknamed "the great pretender" because its vague signs, such as weakness, vomiting and diarrhea, mimic other illnesses until a sudden crisis.',
    source: 'https://en.wikipedia.org/wiki/Addison%27s_disease_in_canines',
    evidence: 'cortisol and mineralocorticoids such as aldosterone'
  },
  {
    id: 'dogs-0086',
    replaces: 'imported-dogs-0086',
    topic: 'Medicine',
    question: 'Heavy drinking and urinating, a pot belly and hair loss on both sides of the body are classic signs of what?',
    options: ["Cushing's disease", "Addison's disease", 'Hypothyroidism', 'Diabetes insipidus'],
    answer: "Cushing's disease",
    funFact:
      "Cushing's is too much cortisol, the opposite of Addison's. Most canine cases come from a small tumor in the pituitary gland.",
    source: 'https://www.petmd.com/dog/conditions/endocrine/cushings-disease-dogs',
    evidence: 'potbelly appearance'
  },
  {
    id: 'dogs-0088',
    replaces: 'imported-dogs-0088',
    topic: 'Medicine',
    question: 'TPLO surgery is used to treat which injury?',
    options: [
      'Torn cruciate ligament in the knee',
      'Hip joint dysplasia',
      'Dislocating kneecap',
      'Elbow joint dysplasia'
    ],
    answer: 'Torn cruciate ligament in the knee',
    funFact:
      "TPLO stands for tibial plateau leveling osteotomy. It changes the angle of the shin bone so the knee is stable without the ligament. It is the dog version of a torn ACL.",
    source: 'https://www.acvs.org/small-animal/cranial-cruciate-ligament-disease',
    evidence: 'tibial plateau leveling osteotomy'
  },
  {
    id: 'dogs-0119',
    replaces: 'imported-dogs-0119',
    topic: 'Medicine',
    question: 'What is megaesophagus in dogs?',
    options: [
      "A widened esophagus that can't move food to the stomach",
      'A stomach that fills with gas and twists',
      'An enlarged heart with weak muscle walls',
      'A windpipe that flattens when the dog breathes'
    ],
    answer: "A widened esophagus that can't move food to the stomach",
    funFact:
      'Food pools and is regurgitated, which risks aspiration pneumonia. Dogs are often fed upright so gravity does the work.',
    source: 'https://en.wikipedia.org/wiki/Megaesophagus',
    evidence: 'the esophagus becomes abnormally enlarged'
  },
  {
    id: 'dogs-0120',
    replaces: 'imported-dogs-0120',
    topic: 'Medicine',
    question: 'What is a Bailey chair used for?',
    options: [
      'Keeping a dog with megaesophagus upright while it eats',
      'Supporting a dog after spinal surgery',
      'Weighing newborn puppies',
      'Holding a dog still for nail trims'
    ],
    answer: 'Keeping a dog with megaesophagus upright while it eats',
    funFact:
      'It is named after Bailey, a dog with megaesophagus whose family designed the first one. Dogs usually stay upright for 10 to 30 minutes after meals.',
    source: 'https://en.wikipedia.org/wiki/Megaesophagus',
    evidence: 'bailey chair'
  },
  {
    id: 'dogs-0130',
    replaces: 'imported-dogs-0130',
    topic: 'Medicine',
    question: 'Wobbler syndrome, a compression of the spinal cord in the neck, is most common in which two breeds?',
    options: [
      'Great Dane and Doberman Pinscher',
      'Dachshund and Pembroke Welsh Corgi',
      'Beagle and Basset Hound',
      'Chihuahua and Pomeranian'
    ],
    answer: 'Great Dane and Doberman Pinscher',
    funFact:
      'It causes a wobbly gait, especially in the hind legs. Dachshunds and Corgis have a different spinal problem: intervertebral disc disease.',
    source: 'https://en.wikipedia.org/wiki/Wobbler_disease',
    evidence: 'great dane, doberman'
  },
  {
    id: 'dogs-0146',
    replaces: 'imported-dogs-0146',
    topic: 'Medicine',
    question: 'Syringomyelia, fluid-filled cavities in the spinal cord linked to a skull malformation, is most notorious in which breed?',
    options: ['Cavalier King Charles Spaniel', 'Boxer', 'Beagle', 'Labrador Retriever'],
    answer: 'Cavalier King Charles Spaniel',
    funFact:
      "The skull is too small for the brain, which blocks spinal fluid flow. Affected dogs often scratch at the air near their neck, called 'phantom scratching'.",
    source: 'https://en.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel',
    evidence: 'syringomyelia (sm)'
  },
  {
    id: 'dogs-0145',
    replaces: 'imported-dogs-0145',
    topic: 'Medicine',
    question: 'What does "idiopathic" mean in idiopathic epilepsy?',
    options: [
      'No underlying cause can be found',
      'It is caused by a brain tumor',
      'It only occurs in young puppies',
      'It is triggered by flashing lights'
    ],
    answer: 'No underlying cause can be found',
    funFact:
      'It is diagnosed by ruling other causes out, and it is often inherited. Border Collies, Belgian Shepherds and Labradors are among the predisposed breeds.',
    source: 'https://en.wikipedia.org/wiki/Epilepsy_in_animals',
    evidence: 'no known cause for primary or idiopathic epilepsy'
  },
  {
    id: 'dogs-0078',
    replaces: 'imported-dogs-0078',
    topic: 'Medicine',
    question: 'Why is canine parvovirus so hard to eliminate from a kennel?',
    options: [
      'It survives in the environment for months or longer',
      'It spreads mainly through mosquito bites',
      'It is not affected by any vaccine',
      'It lives inside dogs for their whole lives'
    ],
    answer: 'It survives in the environment for months or longer',
    funFact:
      'Ordinary cleaners don\'t kill it; diluted bleach and certain disinfectants do. Puppies are protected through a series of vaccines.',
    source: 'https://en.wikipedia.org/wiki/Canine_parvovirus',
    evidence: 'survive indoors for months and outdoors in moist environments for years'
  },
  {
    id: 'dogs-0076',
    replaces: 'imported-dogs-0076',
    topic: 'Medicine',
    question: 'What does a titer test measure in a dog?',
    options: [
      'Antibody levels against a disease',
      'Blood sugar levels',
      'Thyroid hormone levels',
      'Kidney function'
    ],
    answer: 'Antibody levels against a disease',
    funFact:
      'Titers can show whether a dog is still protected against distemper, parvovirus and adenovirus, which helps decide whether to revaccinate.',
    source: 'https://en.wikipedia.org/wiki/Titer',
    evidence: 'an antibody titer is a measurement of how much antibody'
  },
  {
    id: 'dogs-0150',
    replaces: 'imported-dogs-0150',
    topic: 'Medicine',
    question: 'Bravecto (fluralaner) protects dogs against what?',
    options: ['Fleas and ticks', 'Heartworm', 'Intestinal worms', 'Kennel cough'],
    answer: 'Fleas and ticks',
    funFact: 'A single dose of the chewable lasts about 12 weeks, much longer than monthly products.',
    source: 'https://en.wikipedia.org/wiki/Fluralaner',
    evidence: 'prevention of ticks and fleas on dogs'
  },
  {
    id: 'dogs-0151',
    replaces: 'imported-dogs-0151',
    topic: 'Medicine',
    question: 'What is the first-line emergency drug for anaphylaxis in dogs?',
    options: ['Epinephrine', 'Diphenhydramine', 'Prednisone', 'Atropine'],
    answer: 'Epinephrine',
    funFact:
      'Antihistamines like diphenhydramine and steroids like prednisone are supporting treatments; epinephrine reverses the life-threatening collapse.',
    source: 'https://en.wikipedia.org/wiki/Anaphylaxis',
    evidence: 'epinephrine is the treatment of choice'
  },
  {
    id: 'dogs-0153',
    replaces: 'imported-dogs-0153',
    topic: 'Medicine',
    question: 'Apoquel (oclacitinib) relieves allergic itch in dogs by blocking what?',
    options: ['Janus kinase (JAK) enzymes', 'Histamine receptors', 'The itch protein IL-31', 'Prostaglandins'],
    answer: 'Janus kinase (JAK) enzymes',
    funFact:
      'Blocking JAK enzymes interrupts the signals that cause itch. Cytopoint works differently: it is an antibody that mops up IL-31 itself.',
    source: 'https://en.wikipedia.org/wiki/Oclacitinib',
    evidence: 'janus kinase inhibitor'
  },
  {
    id: 'dogs-0154',
    replaces: 'imported-dogs-0154',
    topic: 'Medicine',
    question: 'Most dogs carry Demodex mites. Why do most healthy adult dogs show no disease?',
    options: [
      'A healthy immune system keeps mite numbers low',
      'The mites can only survive on puppies',
      'Adult dogs are vaccinated against them',
      'The mites leave once a dog is fully grown'
    ],
    answer: 'A healthy immune system keeps mite numbers low',
    funFact:
      'Puppies pick the mites up from their mother while nursing. Demodectic mange appears when immunity is weak or genetically faulty, and it is not contagious.',
    source: 'https://en.wikipedia.org/wiki/Demodicosis',
    evidence: 'immune system is unable to keep the mites under control'
  },
  {
    id: 'dogs-0155',
    replaces: 'imported-dogs-0155',
    topic: 'Medicine',
    question: 'Which mange mite is highly contagious between dogs and can also make people itch?',
    options: ['Sarcoptes scabiei', 'Demodex canis', 'Demodex injai', 'Otodectes cynotis'],
    answer: 'Sarcoptes scabiei',
    funFact:
      'Sarcoptic mange burrows in the skin and is intensely itchy. Otodectes is the ear mite, and both Demodex species are not contagious.',
    source: 'https://en.wikipedia.org/wiki/Sarcoptic_mange',
    evidence: 'highly contagious infestation of sarcoptes scabiei'
  },
  {
    id: 'dogs-0144',
    replaces: 'imported-dogs-0144',
    topic: 'Medicine',
    question:
      'Fluoxetine (Prozac), used for some canine behavior problems, mainly increases the availability of which brain chemical?',
    options: ['Serotonin', 'Dopamine', 'Cortisol', 'Melatonin'],
    answer: 'Serotonin',
    funFact:
      'It is used alongside behavior modification for anxiety and compulsive disorders, and usually takes several weeks to reach full effect.',
    source: 'https://en.wikipedia.org/wiki/Fluoxetine',
    evidence: 'selective serotonin reuptake inhibitor'
  },
  {
    id: 'dogs-0149',
    replaces: 'imported-dogs-0149',
    topic: 'Behavior',
    question: 'Why are intact male dogs more likely to urine-mark than neutered males?',
    options: [
      'Testosterone drives marking behavior',
      'They drink more water each day',
      'They have smaller bladders',
      'They are harder to house-train'
    ],
    answer: 'Testosterone drives marking behavior',
    funFact:
      'Marking is communication, not a house-training failure. Neutering reduces it in most dogs but does not always stop it.',
    source: 'https://www.aspca.org/pet-care/general-pet-care/spayneuter-your-pet',
    evidence: 'undesirable behaviors caused by a higher level of testosterone'
  },

  // Genetics
  {
    id: 'dogs-0068',
    replaces: 'imported-dogs-0068',
    topic: 'Genetics',
    question: 'Harlequin Great Danes result from the harlequin gene acting together with which other coat gene?',
    options: ['Merle', 'Piebald', 'Brindle', 'Ticking'],
    answer: 'Merle',
    funFact:
      'The harlequin gene changes merle\'s diluted patches to white, leaving torn black patches. Two copies of harlequin are lethal before birth.',
    source: 'https://en.wikipedia.org/wiki/Dog_coat_genetics',
    evidence: 'h has no effect on non-merle'
  },
  {
    id: 'dogs-0074',
    replaces: 'imported-dogs-0074',
    topic: 'Genetics',
    question: 'A mutation in which gene causes natural bobtails in breeds like the Pembroke Welsh Corgi?',
    options: ['T-box (T gene)', 'FGF5', 'MITF', 'MLPH'],
    answer: 'T-box (T gene)',
    funFact:
      'The C189G mutation shortens the tail. Two copies are lethal, so bobtail-to-bobtail litters are smaller.',
    source: 'https://en.wikipedia.org/wiki/Natural_bobtail',
    evidence: 'c189g'
  },
  {
    id: 'dogs-0093',
    replaces: 'imported-dogs-0093',
    topic: 'Genetics',
    question: 'The long "fluffy" coat in Pembroke Welsh Corgis comes from a recessive mutation in which gene?',
    options: ['FGF5', 'KRT71', 'RSPO2', 'MC1R'],
    answer: 'FGF5',
    funFact:
      'FGF5 controls coat length across many breeds. KRT71 causes curl, RSPO2 causes beards and eyebrows, and MC1R affects color.',
    source: 'https://en.wikipedia.org/wiki/Dog_coat_genetics',
    evidence: 'fibroblast growth factor-5 gene or fgf5'
  },
  {
    id: 'dogs-0132',
    replaces: 'imported-dogs-0132',
    topic: 'Genetics',
    question: 'Sable coloring in dogs comes from which allele?',
    options: ['Ay at the Agouti locus', 'd at the Dilution locus', 'E at the Extension locus', 'M at the Merle locus'],
    answer: 'Ay at the Agouti locus',
    funFact: 'Sable means yellow to red hair with black tips. How dark it looks varies a lot between breeds.',
    source: 'https://en.wikipedia.org/wiki/Dog_coat_genetics',
    evidence: 'ay = fawn or sable'
  },
  {
    id: 'dogs-0133',
    replaces: 'imported-dogs-0133',
    topic: 'Genetics',
    question: 'Blue (dilute black) coat color in dogs comes from two recessive copies of a variant in which gene?',
    options: ['MLPH', 'ASIP', 'PMEL', 'MITF'],
    answer: 'MLPH',
    funFact: 'MLPH is the Dilution locus. In some breeds, blue coats come with color dilution alopecia, a hair-loss condition.',
    source: 'https://en.wikipedia.org/wiki/Dog_coat_genetics',
    evidence: '(mlph) at the d locus'
  },
  {
    id: 'dogs-0134',
    replaces: 'imported-dogs-0134',
    topic: 'Genetics',
    question: 'Piebald white spotting in dogs is caused by variants of which gene?',
    options: ['MITF', 'MLPH', 'FGF5', 'TYRP1'],
    answer: 'MITF',
    funFact:
      'Two copies give extensive white, as in many Bull Terriers and Dalmatians. One copy gives more moderate white markings.',
    source: 'https://en.wikipedia.org/wiki/Dog_coat_genetics',
    evidence: 'determine the degree and distribution of white spotting'
  },
  {
    id: 'dogs-0111',
    replaces: 'imported-dogs-0111',
    topic: 'Genetics',
    question: 'Which scientific name places the domestic dog as a subspecies of the gray wolf?',
    options: ['Canis lupus familiaris', 'Canis lupus dingo', 'Canis latrans', 'Canis aureus'],
    answer: 'Canis lupus familiaris',
    funFact:
      'Some scientists treat the dog as its own species, Canis familiaris. Canis latrans is the coyote and Canis aureus the golden jackal.',
    source: 'https://en.wikipedia.org/wiki/Dog',
    evidence: 'canis lupus familiaris'
  },

  // Breeds
  {
    id: 'dogs-0072',
    replaces: 'imported-dogs-0072',
    topic: 'Breeds',
    question: 'The Leonberger was developed in which country?',
    options: ['Germany', 'Switzerland', 'France', 'Belgium'],
    answer: 'Germany',
    funFact:
      'It is named for the town of Leonberg. Its creator is said to have crossed Saint Bernards, Newfoundlands and Great Pyrenees to resemble the lion on the town crest.',
    source: 'https://en.wikipedia.org/wiki/Leonberger',
    evidence: 'german breed of large dog'
  },
  {
    id: 'dogs-0075',
    replaces: 'imported-dogs-0075',
    topic: 'Breeds',
    question: 'Which breed has won Best in Show at the Westminster Kennel Club Dog Show the most times?',
    options: ['Wire Fox Terrier', 'Scottish Terrier', 'English Springer Spaniel', 'Standard Poodle'],
    answer: 'Wire Fox Terrier',
    funFact: 'Wire Fox Terriers have 15 Best in Show wins. Scottish Terriers are second.',
    source: 'https://en.wikipedia.org/wiki/Westminster_Kennel_Club_Dog_Show',
    evidence: 'has won 15 times'
  },
  {
    id: 'dogs-0131',
    replaces: 'imported-dogs-0131',
    topic: 'Breeds',
    question: 'What is the typical lifespan of an Irish Wolfhound?',
    options: ['6 to 8 years', '10 to 12 years', '13 to 15 years', '3 to 5 years'],
    answer: '6 to 8 years',
    funFact:
      'Giant breeds age faster than small ones, and Wolfhounds are prone to heart disease and bone cancer.',
    source: 'https://www.akc.org/dog-breeds/irish-wolfhound/',
    evidence: 'life expectancy: 6-8 years'
  },
  {
    id: 'dogs-0137',
    replaces: 'imported-dogs-0137',
    topic: 'Breeds',
    question: 'The Jindo is a national treasure of which country?',
    options: ['South Korea', 'Japan', 'China', 'Taiwan'],
    answer: 'South Korea',
    funFact:
      'It comes from Jindo Island and is famous for loyalty: stories tell of Jindos traveling hundreds of kilometers to return home.',
    source: 'https://en.wikipedia.org/wiki/Korean_Jindo',
    evidence: 'one of south korea\'s national treasures'
  },
  {
    id: 'dogs-0138',
    replaces: 'imported-dogs-0138',
    topic: 'Breeds',
    question: 'Which hairless breed has ancestors that lived in the Americas long before European contact?',
    options: ['Xoloitzcuintli', 'Chinese Crested', 'Basenji', 'Pharaoh Hound'],
    answer: 'Xoloitzcuintli',
    funFact:
      'The Xolo is linked to the Aztec god Xolotl and is a national symbol of Mexico. It comes in toy, miniature and standard sizes, plus a coated variety.',
    source: 'https://www.akc.org/dog-breeds/xoloitzcuintli/',
    evidence: 'ancient aztec dog of the gods'
  },
  {
    id: 'dogs-0143',
    replaces: 'imported-dogs-0143',
    topic: 'Breeds',
    question: 'About how fast can a Greyhound run at top speed?',
    options: ['At least 43 mph', 'About 25 mph', 'About 30 mph', 'About 65 mph'],
    answer: 'At least 43 mph',
    funFact: 'That is about 69 km/h. Typical winning race speeds are a little lower, around 36 to 38 mph.',
    source: 'https://en.wikipedia.org/wiki/Greyhound',
    evidence: '69 km/h (43 mph)'
  },
  {
    id: 'dogs-0141',
    replaces: 'imported-dogs-0141',
    topic: 'Breeds',
    question: "Which of these is NOT one of the AKC's seven breed groups?",
    options: ['Guardian Group', 'Herding Group', 'Non-Sporting Group', 'Toy Group'],
    answer: 'Guardian Group',
    funFact:
      'The seven are Sporting, Hound, Working, Terrier, Toy, Non-Sporting and Herding. Breeds still working toward recognition go in the Miscellaneous Class.',
    source: 'https://en.wikipedia.org/wiki/American_Kennel_Club',
    evidence: 'hound, terrier, working, herding, sporting, non-sporting, toy'
  },
  {
    id: 'dogs-0109',
    replaces: 'imported-dogs-0109',
    topic: 'Breeds',
    question: 'Breed-specific legislation most often targets which type of dog?',
    options: ['Pit bull-type dogs', 'Herding breeds', 'Toy breeds', 'Scent hounds'],
    answer: 'Pit bull-type dogs',
    funFact:
      'The AVMA and many other groups oppose breed-specific laws, saying bite risk depends more on the individual dog and its environment.',
    source: 'https://en.wikipedia.org/wiki/Breed-specific_legislation',
    evidence: 'pit bull-type dogs'
  },

  // Puppies and reproduction
  {
    id: 'dogs-0084',
    replaces: 'imported-dogs-0084',
    topic: 'Puppies',
    question: "About how long is a dog's pregnancy?",
    options: ['About 63 days', 'About 42 days', 'About 90 days', 'About 120 days'],
    answer: 'About 63 days',
    funFact: 'Counted from ovulation it is very consistent at about 63 days; from the day of breeding it can range from about 57 to 72 days.',
    source: 'https://en.wikipedia.org/wiki/Dog',
    evidence: 'with an average of 63 days'
  },
  {
    id: 'dogs-0097',
    replaces: 'imported-dogs-0097',
    topic: 'Puppies',
    question: 'A puppy learns to soften its mouth after a littermate yelps. What is this learned control called?',
    options: ['Bite inhibition', 'Bite threshold', 'Soft mouth', 'Mouthing'],
    answer: 'Bite inhibition',
    funFact:
      'Bite threshold is different: how much provocation it takes before a dog bites at all. "Soft mouth" is a retriever\'s gentle grip on game.',
    source: 'https://en.wikipedia.org/wiki/Bite_inhibition',
    evidence: 'learns to moderate the strength of its bite'
  },
  {
    id: 'dogs-0096',
    replaces: 'imported-dogs-0096',
    topic: 'Behavior',
    question: 'FRAP is the scientific-sounding name for the "zoomies". What do the letters stand for?',
    options: [
      'Frenetic Random Activity Period',
      'Fast Running After Play',
      'Frantic Rapid Agility Phase',
      'Free Roaming Active Pursuit'
    ],
    answer: 'Frenetic Random Activity Period',
    funFact: 'Zoomies are a normal release of pent-up energy, common after baths, waking up or being let out of a crate.',
    source: 'https://www.akc.org/expert-advice/lifestyle/what-are-zoomies/',
    evidence: 'frenetic random activity period'
  },

  // Nutrition
  {
    id: 'dogs-0101',
    replaces: 'imported-dogs-0101',
    topic: 'Nutrition',
    question:
      'In 2018 the FDA began investigating a possible link between certain grain-free diets and which heart disease in dogs?',
    options: ['Dilated cardiomyopathy', 'Mitral valve disease', 'Heartworm disease', 'Subaortic stenosis'],
    answer: 'Dilated cardiomyopathy',
    funFact:
      'Many reported diets were high in peas, lentils or potatoes. A cause has not been proven, and the research is ongoing.',
    source: 'https://www.fda.gov/animal-veterinary/outbreaks-and-advisories/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy',
    evidence: 'certain diets and canine dilated cardiomyopathy'
  },
  {
    id: 'dogs-0102',
    replaces: 'imported-dogs-0102',
    topic: 'Nutrition',
    question: 'FEDIAF publishes pet food nutrition guidelines for which region?',
    options: ['Europe', 'United States', 'Australia', 'Japan'],
    answer: 'Europe',
    funFact: 'It is the European pet food industry federation, the counterpart to AAFCO in the United States.',
    source: 'https://europeanpetfood.org/',
    evidence: 'the voice of the european pet food industry'
  },
  {
    id: 'dogs-0103',
    replaces: 'imported-dogs-0103',
    topic: 'Nutrition',
    question: 'In the United States, which organization publishes the nutrient profiles that dog food labels are measured against?',
    options: ['AAFCO', 'WSAVA', 'ASPCA', 'AKC'],
    answer: 'AAFCO',
    funFact:
      'The Association of American Feed Control Officials writes the model rules; state regulators and the FDA enforce them.',
    source: 'https://www.aafco.org/',
    evidence: 'sets standards for both animal feeds and pet foods in the united states'
  },
  {
    id: 'dogs-0104',
    replaces: 'imported-dogs-0104',
    topic: 'Nutrition',
    question: 'A dog food labeled "complete and balanced" under AAFCO rules means what?',
    options: [
      'It meets nutrient profiles for the stated life stage',
      'It contains no grains or fillers',
      'It was approved by a veterinarian',
      'It uses only human-grade ingredients'
    ],
    answer: 'It meets nutrient profiles for the stated life stage',
    funFact:
      'The label should name the life stage: growth, adult maintenance or all life stages. Large-breed puppies need a food tested for their growth.',
    source: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/complete-and-balanced-pet-food',
    evidence: 'meet one of the dog or cat food nutrient profiles'
  },
  {
    id: 'dogs-0106',
    replaces: 'imported-dogs-0106',
    topic: 'Nutrition',
    question: "What did Glickman's 2000 study find about raised food bowls and bloat in large dogs?",
    options: [
      'They were linked to a higher risk',
      'They cut the risk roughly in half',
      'They made no difference at all',
      'They only helped puppies'
    ],
    answer: 'They were linked to a higher risk',
    funFact:
      'Raised bowls were long recommended to prevent bloat, but this large Purdue study found the opposite. A 2012 study found no effect, so with mixed evidence many vets suggest floor feeding for at-risk dogs.',
    source: 'https://veterinaryevidence.org/index.php/ve/article/view/57',
    evidence: 'fed from a raised feeder being at an'
  },
  {
    id: 'dogs-0107',
    replaces: 'imported-dogs-0107',
    topic: 'Research',
    question: 'Which large study follows tens of thousands of pet dogs and is testing whether rapamycin extends lifespan?',
    options: ['The Dog Aging Project', 'The Golden Retriever Lifetime Study', "Darwin's Ark", 'The Canine Genome Project'],
    answer: 'The Dog Aging Project',
    funFact:
      'The rapamycin arm is called TRIAD. The Golden Retriever Lifetime Study is a different project following about 3,000 Goldens, mainly for cancer.',
    source: 'https://en.wikipedia.org/wiki/Dog_Aging_Project',
    evidence: 'test of rapamycin in aging dogs'
  },

  // Sports and titles
  {
    id: 'dogs-0082',
    replaces: 'imported-dogs-0082',
    topic: 'Sports and titles',
    question: 'Which organization runs the Canine Good Citizen (CGC) program?',
    options: ['American Kennel Club', 'United Kennel Club', 'ASPCA', 'Humane Society of the United States'],
    answer: 'American Kennel Club',
    funFact: 'The CGC is a 10-step test of manners, open to all dogs, including mixed breeds.',
    source: 'https://www.akc.org/products-services/training-programs/canine-good-citizen/',
    evidence: 'canine good citizen'
  },
  {
    id: 'dogs-0083',
    replaces: 'imported-dogs-0083',
    topic: 'Sports and titles',
    question: 'In AKC obedience, what does the title OTCH stand for?',
    options: [
      'Obedience Trial Champion',
      'Obedience Training Certificate Holder',
      'Open Trial Champion',
      'Official Tracking Champion'
    ],
    answer: 'Obedience Trial Champion',
    funFact: 'It takes championship points and first-place wins earned in the Open B and Utility B classes.',
    source: 'https://en.wikipedia.org/wiki/Obedience_trial',
    evidence: 'obedience trial champion'
  },
  {
    id: 'dogs-0114',
    replaces: 'imported-dogs-0114',
    topic: 'Sports and titles',
    question: 'The protection sport long known as Schutzhund is now officially called what?',
    options: ['IGP', 'French Ring', 'Mondioring', 'KNPV'],
    answer: 'IGP',
    funFact:
      'IGP is short for Internationale Gebrauchshund Prüfung. Like Schutzhund, it tests tracking, obedience and protection. It replaced the IPO name in 2019.',
    source: 'https://en.wikipedia.org/wiki/Schutzhund',
    evidence: 'currently known competitively as igp'
  },
  {
    id: 'dogs-0113',
    replaces: 'imported-dogs-0113',
    topic: 'Sports and titles',
    question: 'In canicross, how is the dog attached to the runner?',
    options: [
      'A bungee line to a waist belt',
      'A rigid pole to a handlebar',
      'A short leash held in one hand',
      'A towline to a kick scooter'
    ],
    answer: 'A bungee line to a waist belt',
    funFact: 'The dog runs ahead in a pulling harness. Pulling a scooter or bike is a different dryland sport.',
    source: 'https://en.wikipedia.org/wiki/Canicross',
    evidence: 'joined by a bungee cord'
  },
  {
    id: 'dogs-0125',
    replaces: 'imported-dogs-0125',
    topic: 'Sports and titles',
    question: 'Denise Fenzi\'s FDSA is best known as what?',
    options: [
      'An online dog sports school',
      'A dog sports title registry',
      'A canine nutrition brand',
      'A therapy dog charity'
    ],
    answer: 'An online dog sports school',
    funFact: 'Fenzi Dog Sports Academy teaches obedience, agility, nosework and more through online classes.',
    source: 'https://www.fenzidogsportsacademy.com/',
    evidence: 'exceptional online classes teaching you to train your dog'
  },
  // Added from "Trivia Questions to add to the database.txt" (October 2026), checked the same way.
  {
    id: 'dogs-n01',
    topic: 'Breeds',
    question: 'Which extinct water dog from the Anglo-Scottish border helped develop the Golden Retriever and the Curly-coated Retriever?',
    options: ['Tweed Water Spaniel', 'English Water Spaniel', 'Irish Water Spaniel', 'Norfolk Spaniel'],
    answer: 'Tweed Water Spaniel',
    funFact: 'It was a brown, athletic water dog from around Berwick-upon-Tweed, and died out in the 19th century.',
    source: 'https://en.wikipedia.org/wiki/Tweed_Water_Spaniel',
    evidence: 'early development of the modern curly coated retriever and golden retriever breeds'
  },
  {
    id: 'dogs-n02',
    topic: 'Breeds',
    question: 'Which sighthound is raised throughout the Sahel of Mali, Niger and Burkina Faso?',
    options: ['Azawakh', 'Saluki', 'Sloughi', 'Afghan Hound'],
    answer: 'Azawakh',
    funFact: 'It is named after the Azawagh valley in that region.',
    source: 'https://en.wikipedia.org/wiki/Azawakh',
    evidence: 'raised throughout the sahelian zone of mali, niger, and burkina faso'
  },
  {
    id: 'dogs-n03',
    topic: 'Breeds',
    question: 'Which livestock guardian breed must have double dewclaws on its hind legs, with their absence a disqualifying fault in the show ring?',
    options: ['Great Pyrenees', 'Maremma Sheepdog', 'Kuvasz', 'Anatolian Shepherd Dog'],
    answer: 'Great Pyrenees',
    funFact: 'Outside the US it is called the Pyrenean Mountain Dog, and in France the Patou.',
    source: 'https://en.wikipedia.org/wiki/Great_Pyrenees',
    evidence: 'double dewclaws on the hind legs; their absence is considered a disqualifying fault'
  },
  {
    id: 'dogs-n04',
    topic: 'Breeds',
    question: 'Which white spitz breed takes its name from Siberian peoples who used it for herding, hunting and pulling sleds?',
    options: ['Samoyed', 'Yakutian Laika', 'East Siberian Laika', 'Alaskan Malamute'],
    answer: 'Samoyed',
    funFact: 'It descends from the Nenets Herding Laika, a reindeer-herding spitz.',
    source: 'https://en.wikipedia.org/wiki/Samoyed_dog',
    evidence: 'take their name from the samoyedic peoples'
  },
  {
    id: 'dogs-n05',
    topic: 'Breeds',
    question: 'The name of which small German breed comes from the German word for "ape" or "monkey"?',
    options: ['Affenpinscher', 'Miniature Pinscher', 'Brussels Griffon', 'Miniature Schnauzer'],
    answer: 'Affenpinscher',
    funFact: 'It was once a farm and stable dog that caught mice and rats.',
    source: 'https://en.wikipedia.org/wiki/Affenpinscher',
    evidence: 'derives from affe, german for'
  },
  {
    id: 'dogs-n06',
    topic: 'Genetics',
    question: 'What happens to a Chinese Crested pup that inherits two copies of the hairless gene?',
    options: ['It dies before birth', 'It is born fully coated', 'It is born deaf', 'It grows a double coat'],
    answer: 'It dies before birth',
    funFact: 'So every hairless Crested carries one copy, and coated Powderpuffs can turn up in the same litter. Hairless dogs often lack some premolars.',
    source: 'https://en.wikipedia.org/wiki/Chinese_Crested_Dog',
    evidence: 'gene has a prenatal lethal effect when homozygous'
  },
  {
    id: 'dogs-n07',
    topic: 'Breeds',
    question: 'Which giant breed was originally bred for rescue work by a hospice on a mountain pass between Italy and Switzerland?',
    options: ['Saint Bernard', 'Leonberger', 'Bernese Mountain Dog', 'Newfoundland'],
    answer: 'Saint Bernard',
    funFact: 'Switzerland is recognized as its country of origin.',
    source: 'https://en.wikipedia.org/wiki/St._Bernard_(dog)',
    evidence: 'originally bred for rescue work by the hospice of the great st bernard pass'
  },
  {
    id: 'dogs-n08',
    topic: 'History',
    question: 'The famous image of rescue dogs carrying brandy barrels around their necks is traced back to what?',
    options: [
      'An 1820 painting by Edwin Landseer',
      'Rescue records kept by the monks',
      'A Swiss army equipment order',
      'Photographs taken in the 1890s'
    ],
    answer: 'An 1820 painting by Edwin Landseer',
    funFact: 'The painting became a popular engraving in 1831, and cartoons kept the barrel alive.',
    source: 'https://en.wikipedia.org/wiki/St._Bernard_(dog)',
    evidence: 'attribute the image to an 1820 painting by edwin landseer'
  },
  {
    id: 'dogs-n09',
    topic: 'Behavior',
    question: 'By about what age do puppies begin socializing with other dogs?',
    options: ['3 to 8 weeks', '1 to 2 days', '16 to 20 weeks', '6 to 9 months'],
    answer: '3 to 8 weeks',
    funFact: 'Many puppies also go through a fear period at about 8 to 12 weeks, when they may briefly turn cautious.',
    source: 'https://en.wikipedia.org/wiki/Dog',
    evidence: 'dogs begin socializing with other dogs by the time they reach the ages of 3 to 8 weeks'
  },
  {
    id: 'dogs-n10',
    topic: 'Behavior',
    question: 'Research on dog communication found that dogs can judge what from another dog\'s growl?',
    options: ['Its body size', 'Its age', 'Its family ties', 'Its last meal'],
    answer: 'Its body size',
    funFact: 'Dogs also communicate with barks, howls, whines, pants and sighs, as well as scent and posture.',
    source: 'https://en.wikipedia.org/wiki/Dog_communication',
    evidence: 'able to tell from a growl how big the dog is'
  },
  {
    id: 'dogs-n11',
    topic: 'Anatomy',
    question: 'In animals that show the Flehmen response, what connects the mouth to the vomeronasal organ?',
    options: ['The incisive papilla and ducts', 'The nasolacrimal ducts', 'The auditory tubes', 'The ethmoid turbinates'],
    answer: 'The incisive papilla and ducts',
    funFact: 'They sit just behind the front teeth. Dogs, cats, cattle and pigs all have a vomeronasal organ.',
    source: 'https://en.wikipedia.org/wiki/Vomeronasal_organ',
    evidence: 'animals that present flehmen behavior have incisive papilla and ducts'
  },
  {
    id: 'dogs-n12',
    topic: 'Behavior',
    question: 'Stanley Coren\'s breed rankings in The Intelligence of Dogs came from surveying whom?',
    options: ['Obedience trial judges', 'Veterinarians', 'Police dog handlers', 'Dog owners online'],
    answer: 'Obedience trial judges',
    funFact: 'Border Collies ranked at the top, and Afghan Hounds were consistently near the bottom.',
    source: 'https://en.wikipedia.org/wiki/The_Intelligence_of_Dogs',
    evidence: 'representing about 50 percent of obedience judges'
  },
  {
    id: 'dogs-n13',
    topic: 'Anatomy',
    question: 'What reflective layer behind a dog\'s retina helps it see in dim light?',
    options: ['The tapetum lucidum', 'The nictitating membrane', 'The fovea centralis', 'The ciliary body'],
    answer: 'The tapetum lucidum',
    funFact: 'Dogs also have very large pupils and many rod cells for low-light vision.',
    source: 'https://en.wikipedia.org/wiki/Dog_anatomy',
    evidence: 'the tapetum is a reflective surface behind the retina'
  },
  {
    id: 'dogs-n14',
    topic: 'Anatomy',
    question: 'How does panting cool a dog?',
    options: [
      'It moves air over the moist tongue and lungs',
      'It pushes sweat out through the skin',
      'It slows the heart to cut body heat',
      'It sends warm blood into the ears'
    ],
    answer: 'It moves air over the moist tongue and lungs',
    funFact: 'Dogs also sweat through their paws, but have few sweat glands elsewhere in the skin.',
    source: 'https://en.wikipedia.org/wiki/Dog_anatomy',
    evidence: 'panting moves cooling air over the moist surfaces of the tongue and lungs'
  },
  {
    id: 'dogs-n15',
    topic: 'Training',
    question: 'In clicker training, the click acts as what kind of reinforcer?',
    options: ['A conditioned reinforcer', 'A primary reinforcer', 'A negative reinforcer', 'A punisher'],
    answer: 'A conditioned reinforcer',
    funFact: 'A trainer can deliver a click faster and more precisely than food, then follow it with the treat.',
    source: 'https://en.wikipedia.org/wiki/Clicker_training',
    evidence: 'the system uses conditioned reinforcers'
  },
  {
    id: 'dogs-n16',
    topic: 'Training',
    question: 'When a behavior that used to be rewarded stops paying off, it often gets stronger for a while before fading. What is that spike called?',
    options: ['An extinction burst', 'Spontaneous recovery', 'Stimulus generalization', 'Habituation'],
    answer: 'An extinction burst',
    funFact: 'If the behavior gets rewarded again during the burst, it tends to return.',
    source: 'https://en.wikipedia.org/wiki/Extinction_(psychology)',
    evidence: 'extinction burst'
  },
  {
    id: 'dogs-n17',
    topic: 'Training',
    question: 'Letting a dog chase its ball only after it sits uses which principle?',
    options: ['The Premack principle', 'The matching law', 'The law of effect', 'Drive-reduction theory'],
    answer: 'The Premack principle',
    funFact: 'It says more probable behaviors will reinforce less probable ones. It grew out of studies of capuchin monkeys.',
    source: 'https://en.wikipedia.org/wiki/Premack%27s_principle',
    evidence: 'more probable behaviors will reinforce less probable behaviors'
  },
  {
    id: 'dogs-n18',
    topic: 'History',
    question: 'When did dog domestication happen, compared with the start of farming?',
    options: ['Before agriculture began', 'Alongside the first wheat farms', 'Soon after cattle were tamed', 'During the Bronze Age'],
    answer: 'Before agriculture began',
    funFact: 'The gray wolf is the dog\'s nearest living relative; an extinct Late Pleistocene wolf may have been its ancestor.',
    source: 'https://en.wikipedia.org/wiki/Domestication_of_the_dog',
    evidence: 'the domestication of the dog predates agriculture'
  },
  {
    id: 'dogs-n19',
    topic: 'History',
    question: 'Dmitry Belyaev\'s long-running experiment, started in 1959 in Novosibirsk, bred which animal for tameness?',
    options: ['Silver foxes', 'Gray wolves', 'Golden jackals', 'Raccoon dogs'],
    answer: 'Silver foxes',
    funFact: 'Tameness rose in every generation after the second, and tail wagging soon appeared.',
    source: 'https://en.wikipedia.org/wiki/Domesticated_silver_fox',
    evidence: 'the experiment at the institute of cytology and genetics in novosibirsk'
  },
  {
    id: 'dogs-n20',
    topic: 'History',
    question: 'The ancient Molossus dog was kept by a tribe that lived in which region of Greece?',
    options: ['Epirus', 'Laconia', 'Attica', 'Thessaly'],
    answer: 'Epirus',
    funFact: 'Molossian dogs were famous across the ancient world for their size.',
    source: 'https://en.wikipedia.org/wiki/Molossus_(dog)',
    evidence: 'the molossians, who inhabited the region of epirus'
  },
  {
    id: 'dogs-n21',
    topic: 'History',
    question: 'In 1758, Carl Linnaeus placed the dog, the wolf and the golden jackal in which genus?',
    options: ['Canis', 'Vulpes', 'Lycaon', 'Cuon'],
    answer: 'Canis',
    funFact: 'Canis is simply the Latin word for "dog".',
    source: 'https://en.wikipedia.org/wiki/Dog',
    evidence: 'carl linnaeus assigned the genus name canis'
  },
  {
    id: 'dogs-n22',
    topic: 'Breeds',
    question: 'The Cairn Terrier is named after cairns, piles of stones in the Scottish Highlands. What did it do there?',
    options: ['Flushed out vermin', 'Guarded sheep', 'Retrieved shot birds', 'Pulled carts'],
    answer: 'Flushed out vermin',
    funFact: 'It is recognized as one of Scotland\'s earliest working dogs.',
    source: 'https://en.wikipedia.org/wiki/Cairn_Terrier',
    evidence: 'where the terriers often flushed out vermin'
  },
  {
    id: 'dogs-n23',
    topic: 'Breeds',
    question: 'The Labrador Retriever was developed in Britain from which dogs imported from Newfoundland?',
    options: ["St. John's water dogs", 'Newfoundland dogs', 'Irish Water Spaniels', 'Chesapeake Bay Retrievers'],
    answer: "St. John's water dogs",
    funFact: 'It was named after the Labrador region of that colony.',
    source: 'https://en.wikipedia.org/wiki/Labrador_Retriever',
    evidence: "developed in the united kingdom from st. john's water dogs"
  },
  {
    id: 'dogs-n24',
    topic: 'Breeds',
    question: 'Which breed from southern China, traditionally a property guardian, is known in the West for its deep wrinkles?',
    options: ['Shar Pei', 'Chow Chow', 'Pug', 'Shih Tzu'],
    answer: 'Shar Pei',
    funFact: 'Like the Chow Chow, it has a blue-black tongue. It nearly went extinct in the 20th century.',
    source: 'https://en.wikipedia.org/wiki/Shar_Pei',
    evidence: 'traditionally kept as a property guardian'
  },
  {
    id: 'dogs-n25',
    topic: 'Breeds',
    question: 'How does a Nova Scotia Duck Tolling Retriever help hunters?',
    options: [
      'It lures ducks within gunshot range',
      'It points silently at hidden birds',
      'It flushes birds out of tall grass',
      'It tracks wounded deer by scent'
    ],
    answer: 'It lures ducks within gunshot range',
    funFact: 'It plays at the water\'s edge to draw the ducks in, then retrieves them after the shot.',
    source: 'https://en.wikipedia.org/wiki/Nova_Scotia_Duck_Tolling_Retriever',
    evidence: 'lure waterfowl within gunshot range'
  },
  {
    id: 'dogs-n26',
    topic: 'Breeds',
    question: 'The Staffordshire Bull Terrier descends from 19th-century crosses between bulldogs and what?',
    options: ['Various terriers', 'Mastiffs', 'Pointers', 'Greyhounds'],
    answer: 'Various terriers',
    funFact: 'These "bull and terriers" went by names such as the "patched fighting terrier".',
    source: 'https://en.wikipedia.org/wiki/Staffordshire_Bull_Terrier',
    evidence: 'developed by crossing bulldogs with various terriers'
  },
  {
    id: 'dogs-n27',
    topic: 'Genetics',
    question: 'What is the set of an animal\'s observable characteristics, such as coat color and ear shape, called?',
    options: ['Phenotype', 'Genotype', 'Karyotype', 'Allele'],
    answer: 'Phenotype',
    funFact: 'The genotype is the genetic makeup behind those traits; environment shapes the phenotype too.',
    source: 'https://en.wikipedia.org/wiki/Phenotype',
    evidence: 'is the set of observable characteristics or traits of an organism'
  },
  {
    id: 'dogs-n28',
    topic: 'Genetics',
    question: 'Why does inbreeding raise the risk of inherited disease?',
    options: [
      'It increases homozygosity, exposing recessive traits',
      'It creates new mutations in every generation',
      'It switches off the dominant genes entirely',
      'It shortens the chromosomes over generations'
    ],
    answer: 'It increases homozygosity, exposing recessive traits',
    funFact: 'Closely related parents are more likely to pass on the same hidden recessive variant.',
    source: 'https://en.wikipedia.org/wiki/Inbreeding',
    evidence: 'inbreeding results in homozygosity which can increase the chances of offspring being affected by recessive traits'
  },
  {
    id: 'dogs-n29',
    topic: 'Genetics',
    question: 'What is another name for heterosis?',
    options: ['Hybrid vigor', 'Genetic drift', 'Linebreeding', 'The founder effect'],
    answer: 'Hybrid vigor',
    funFact: 'It means improved function of some trait in hybrid offspring. Crossbreeding doesn\'t guarantee it for every trait.',
    source: 'https://en.wikipedia.org/wiki/Heterosis',
    evidence: 'heterosis, hybrid vigor, or outbreeding enhancement'
  },
  {
    id: 'dogs-n30',
    topic: 'Breeding',
    question: 'How often does a female dog typically go into heat?',
    options: ['Twice a year', 'Every month', 'Every three months', 'Every two years'],
    answer: 'Twice a year',
    funFact: 'Some breeds typically cycle only once a year.',
    source: 'https://en.wikipedia.org/wiki/Estrous_cycle',
    evidence: 'goes into heat typically twice per year'
  },
  // Added from "simple_dog_breed_trivia_corrected_40.md" (October 2026), checked the same way.
  {
    id: 'dogs-b01',
    topic: 'Breeds',
    question: 'Which breed did Sir Dudley Marjoribanks develop in the late 1800s at Guisachan, his Scottish estate?',
    options: ['Golden Retriever', 'Labrador Retriever', 'Flat-Coated Retriever', 'Nova Scotia Duck Tolling Retriever'],
    answer: 'Golden Retriever',
    funFact: 'It is a Scottish breed known for its gentle, affectionate nature.',
    source: 'https://en.wikipedia.org/wiki/Golden_Retriever',
    evidence: 'bred by sir dudley marjoribanks at his scottish estate guisachan'
  },
  {
    id: 'dogs-b02',
    topic: 'Breeds',
    question: 'Which breed descends from a now-extinct dog used for bull-baiting in England until the sport was banned in 1835?',
    options: ['Bulldog', 'French Bulldog', 'Bullmastiff', 'Boxer'],
    answer: 'Bulldog',
    funFact: "The Cruelty to Animals Act of 1835 outlawed bull-baiting, and today's Bulldog is a companion dog.",
    source: 'https://en.wikipedia.org/wiki/Bulldog',
    evidence: 'used for bull-baiting until the sport was outlawed under the cruelty to animals act of 1835'
  },
  {
    id: 'dogs-b03',
    topic: 'Breeds',
    question: 'Silver-grey dogs like which German hunting breed appear in 17th-century paintings by Anthony van Dyck?',
    options: ['Weimaraner', 'German Shorthaired Pointer', 'Vizsla', 'Rhodesian Ridgeback'],
    answer: 'Weimaraner',
    funFact: 'In Germany it is not considered suitable for keeping as a companion dog.',
    source: 'https://en.wikipedia.org/wiki/Weimaraner',
    evidence: 'silver-grey dogs are shown in paintings by antoon van dyck'
  },
  {
    id: 'dogs-b04',
    topic: 'Breeds',
    question: 'The Basset Hound gets its name from the French word "bas". What does "bas" mean?',
    options: ['Low', 'Slow', 'Long', 'Hound'],
    answer: 'Low',
    funFact: 'It was bred to hunt rabbit and hare on foot, slowly enough that hunters needed no horses.',
    source: 'https://en.wikipedia.org/wiki/Basset_Hound',
    evidence: 'derived from the french word bas, meaning'
  },
  {
    id: 'dogs-b05',
    topic: 'Breeds',
    question: 'Lassie, the famous film dog, was played by a line of which breed?',
    options: ['Rough Collie', 'Shetland Sheepdog', 'Border Collie', 'Smooth Collie'],
    answer: 'Rough Collie',
    funFact: 'Rough Collies were bred for herding sheep in Scotland.',
    source: 'https://en.wikipedia.org/wiki/Rough_Collie',
    evidence: 'lassie, a line of rough collies'
  },
  {
    id: 'dogs-b06',
    topic: 'Breeds',
    question: 'Which herding breed was the favorite of Queen Elizabeth II, who owned more than 30 during her reign?',
    options: ['Pembroke Welsh Corgi', 'Cardigan Welsh Corgi', 'Shetland Sheepdog', 'Swedish Vallhund'],
    answer: 'Pembroke Welsh Corgi',
    funFact: 'It began as a cattle-herding dog in Pembrokeshire, Wales.',
    source: 'https://en.wikipedia.org/wiki/Pembroke_Welsh_Corgi',
    evidence: 'the preferred breed of queen elizabeth ii'
  },
  {
    id: 'dogs-b07',
    topic: 'Breeds',
    question: 'Which tri-coloured Swiss farm dog once pulled carts and drove dairy cattle to alpine pastures?',
    options: ['Bernese Mountain Dog', 'Greater Swiss Mountain Dog', 'Appenzeller Sennenhund', 'Saint Bernard'],
    answer: 'Bernese Mountain Dog',
    funFact: 'Its coat is black with a white chest and rust markings. The breed was formally recognized in 1912.',
    source: 'https://en.wikipedia.org/wiki/Bernese_Mountain_Dog',
    evidence: 'drive dairy cattle long distances from the farm to the alpine pastures'
  },
  {
    id: 'dogs-b08',
    topic: 'Breeds',
    question: 'Which white livestock guardian breed is native to central Italy, especially Tuscany and Lazio?',
    options: ['Maremma Sheepdog', 'Kuvasz', 'Great Pyrenees', 'Akbash'],
    answer: 'Maremma Sheepdog',
    funFact: 'Ancient Roman writers such as Columella and Varro described white flock-guarding dogs.',
    source: 'https://en.wikipedia.org/wiki/Maremma_Sheepdog',
    evidence: 'indigenous to central italy, especially to the maremma region of tuscany and lazio'
  },
  {
    id: 'dogs-b09',
    topic: 'Breeds',
    question: 'Which Hungarian livestock guardian has a long white corded coat that earns it the nickname "mop dog"?',
    options: ['Komondor', 'Puli', 'Kuvasz', 'Bergamasco Sheepdog'],
    answer: 'Komondor',
    funFact: 'Its cords take about two years to form.',
    source: 'https://en.wikipedia.org/wiki/Komondor',
    evidence: "sometimes referred to as 'mop dogs'"
  },
  {
    id: 'dogs-b10',
    topic: 'Breeds',
    question: 'Early Scottish Terrier standards called for grey, grizzle or brindle coats. When did black become the favored color?',
    options: ['In the 20th century', 'In the 1600s', 'In the 1700s', 'Only after 2000'],
    answer: 'In the 20th century',
    funFact: 'Scotties were originally bred to hunt and kill vermin. Wheaten coats sometimes occur too.',
    source: 'https://en.wikipedia.org/wiki/Scottish_Terrier',
    evidence: 'the typically black colouring of scotties did not become fashionable'
  },
  {
    id: 'dogs-b11',
    topic: 'Breeds',
    question: 'The story goes that West Highland White Terriers were bred white after a reddish terrier was mistaken for what and shot?',
    options: ['A fox', 'A hare', 'A badger', 'A deer'],
    answer: 'A fox',
    funFact: 'Edward Donald Malcolm, 16th Laird of Poltalloch, is credited with creating the modern breed.',
    source: 'https://en.wikipedia.org/wiki/West_Highland_White_Terrier',
    evidence: 'a reddish-brown terrier was mistaken for a fox and shot'
  },
  {
    id: 'dogs-b12',
    topic: 'Breeds',
    question: 'Which toy terrier\'s early standard said its coat "ought to be a deep steel blue"?',
    options: ['Yorkshire Terrier', 'Silky Terrier', 'Australian Terrier', 'Skye Terrier'],
    answer: 'Yorkshire Terrier',
    funFact: 'An early dog named Huddersfield Ben is famous in the breed\'s history.',
    source: 'https://en.wikipedia.org/wiki/Yorkshire_Terrier',
    evidence: 'it ought to be a deep steel blue'
  },
  {
    id: 'dogs-b13',
    topic: 'Breeds',
    question: 'In which century were Pugs brought from China to Europe?',
    options: ['The 16th century', 'The 10th century', 'The 19th century', 'The 20th century'],
    answer: 'The 16th century',
    funFact: 'The Dutch House of Orange helped make them popular in western Europe.',
    source: 'https://en.wikipedia.org/wiki/Pug',
    evidence: 'pugs were brought from china to europe in the sixteenth century'
  },
  {
    id: 'dogs-b14',
    topic: 'Breeds',
    question: 'About how much does a modern Maltese weigh at most?',
    options: ['3 to 4 kg (7 to 9 lb)', '1 kg (2 lb)', '8 to 10 kg (18 to 22 lb)', '12 to 15 kg (26 to 33 lb)'],
    answer: '3 to 4 kg (7 to 9 lb)',
    funFact: 'It has a silky pure-white coat, hanging ears and a tail curving over its back.',
    source: 'https://en.wikipedia.org/wiki/Maltese_dog',
    evidence: 'weighs up to 3-4 kg (7-9 lb)'
  },
  {
    id: 'dogs-b15',
    topic: 'Breeds',
    question: 'Which bichon-type breed is the national dog of Cuba?',
    options: ['Havanese', 'Bichon Frise', 'Bolognese', 'Coton de Tulear'],
    answer: 'Havanese',
    funFact: 'It developed from the now-extinct Blanquito de la Habana, the "little white dog of Havana".',
    source: 'https://en.wikipedia.org/wiki/Havanese_dog',
    evidence: 'is the national dog of cuba'
  },
  {
    id: 'dogs-b16',
    topic: 'Breeds',
    question: 'The Papillon is named for its butterfly-like upright ears. What is the drop-eared variety called?',
    options: ['Phalène', 'Löwchen', 'Bolognese', 'Griffon'],
    answer: 'Phalène',
    funFact: 'Phalène is French for "moth". Apart from the ears, the two varieties are identical.',
    source: 'https://en.wikipedia.org/wiki/Papillon_dog',
    evidence: 'those of the phalène'
  },
  {
    id: 'dogs-b17',
    topic: 'Breeds',
    question: 'In 1926, American Roswell Eldridge offered prizes for spaniels that looked like those in old paintings. Which breed grew from this?',
    options: ['Cavalier King Charles Spaniel', 'King Charles Spaniel', 'Sussex Spaniel', 'Papillon'],
    answer: 'Cavalier King Charles Spaniel',
    funFact: 'The Cavalier\'s muzzle tends to be longer than that of the King Charles Spaniel, its cousin.',
    source: 'https://en.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel',
    evidence: 'in 1926, the american roswell eldridge offered a dog show class prize'
  },
  {
    id: 'dogs-b18',
    topic: 'Breeds',
    question: 'Bloodhounds are believed to descend from hounds once kept at which abbey?',
    options: ['Saint-Hubert, Belgium', 'Westminster, England', 'Cluny, France', 'Melk, Austria'],
    answer: 'Saint-Hubert, Belgium',
    funFact: 'Bloodhounds have been used for tracking people since the Middle Ages.',
    source: 'https://en.wikipedia.org/wiki/Bloodhound',
    evidence: 'descended from hounds once kept at the abbey of saint-hubert'
  },
  {
    id: 'dogs-b19',
    topic: 'Breeds',
    question: 'What is the "ridge" of a Rhodesian Ridgeback?',
    options: [
      'Hair growing the opposite way along its back',
      'A raised line of bone along its spine',
      'A stripe of darker fur down its back',
      'A fold of loose skin over its shoulders'
    ],
    answer: 'Hair growing the opposite way along its back',
    funFact: 'Early settlers in the Cape Colony used these dogs to hold lions at bay.',
    source: 'https://en.wikipedia.org/wiki/Rhodesian_Ridgeback',
    evidence: 'ridge of hair running along its back in the opposite direction'
  },
  {
    id: 'dogs-b20',
    topic: 'Breeds',
    question: 'Poodles come in standard, miniature and toy sizes. Which fourth size is not recognized everywhere?',
    options: ['Medium', 'Giant', 'Teacup', 'Pocket'],
    answer: 'Medium',
    funFact: 'The Poodle began as a water dog; its French name is Caniche.',
    source: 'https://en.wikipedia.org/wiki/Poodle',
    evidence: 'although the medium poodle is not universally recognised'
  },
  {
    id: 'dogs-b21',
    topic: 'Breeds',
    question: 'The Irish Setter\'s Irish name, sotar rua, literally means what?',
    options: ['Red setter', 'Fast hunter', 'Bird finder', 'Field dog'],
    answer: 'Red setter',
    funFact: 'It is a gundog from Ireland, also kept widely as a family dog.',
    source: 'https://en.wikipedia.org/wiki/Irish_Setter',
    evidence: 'irish: sotar rua'
  },
  {
    id: 'dogs-b22',
    topic: 'Breeds',
    question: 'Hachikō, born in 1923, helped make which Japanese breed famous around the world?',
    options: ['Akita', 'Shiba Inu', 'Kishu Ken', 'Hokkaido'],
    answer: 'Akita',
    funFact: 'Akitas were used to hunt bear, wild boar and serow in snowy mountains.',
    source: 'https://en.wikipedia.org/wiki/Akita_(dog_breed)',
    evidence: 'the story of hachikō helped push the akita into the international dog world'
  },
  {
    id: 'dogs-b23',
    topic: 'Breeds',
    question: 'Which is the smallest of Japan\'s six original native dog breeds?',
    options: ['Shiba Inu', 'Akita', 'Kai Ken', 'Shikoku'],
    answer: 'Shiba Inu',
    funFact: 'Its name translates to "brushwood dog". It was originally bred for hunting.',
    source: 'https://en.wikipedia.org/wiki/Shiba_Inu',
    evidence: 'it is the smallest of the six original dog breeds native to japan'
  },
  {
    id: 'dogs-b24',
    topic: 'Breeds',
    question: 'Which Mexican toy breed is the smallest recognized dog breed in the world?',
    options: ['Chihuahua', 'Pomeranian', 'Toy Fox Terrier', 'Papillon'],
    answer: 'Chihuahua',
    funFact: 'It comes in both short-coated and long-coated varieties.',
    source: 'https://en.wikipedia.org/wiki/Chihuahua_(dog_breed)',
    evidence: 'the smallest recognized dog breed in the world'
  },
  {
    id: 'dogs-b25',
    topic: 'Breeds',
    question: 'What does the German name "Dachshund" mean?',
    options: ['Badger dog', 'Low hound', 'Sausage dog', 'Burrow digger'],
    answer: 'Badger dog',
    funFact: 'It was bred to scent, chase and flush out badgers and other burrowing animals.',
    source: 'https://en.wikipedia.org/wiki/Dachshund',
    evidence: 'bred to scent, chase, and flush out badgers'
  },
  {
    id: 'dogs-b26',
    topic: 'Breeds',
    question: 'Which US president had two Portuguese Water Dogs named Bo and Sunny?',
    options: ['Barack Obama', 'Joe Biden', 'George W. Bush', 'Bill Clinton'],
    answer: 'Barack Obama',
    funFact: "On Portugal's coast the breed herded fish into nets, retrieved lost tackle and carried messages between boats.",
    source: 'https://en.wikipedia.org/wiki/Portuguese_Water_Dog',
    evidence: 'the chosen breed of us president barack obama'
  },
  {
    id: 'dogs-b27',
    topic: 'Breeds',
    question: 'English Mastiffs always show black on the muzzle, ears and nose. Which coat color is accepted?',
    options: ['Apricot-fawn', 'Solid white', 'Blue merle', 'Black and tan'],
    answer: 'Apricot-fawn',
    funFact: 'Silver-fawn, fawn and dark fawn-brindle are accepted as well.',
    source: 'https://en.wikipedia.org/wiki/English_Mastiff',
    evidence: 'english mastiff colours are apricot-fawn'
  },
  {
    id: 'dogs-b28',
    topic: 'Breeds',
    question: 'What was the Shetland Sheepdog originally called, before Rough Collie breeders objected?',
    options: ['Shetland Collie', 'Shetland Terrier', 'Toy Collie', 'Island Sheepdog'],
    answer: 'Shetland Collie',
    funFact: 'The Kennel Club formally recognized the breed in 1909.',
    source: 'https://en.wikipedia.org/wiki/Shetland_Sheepdog',
    evidence: 'it was originally called the shetland collie'
  }
];

// Imported questions removed rather than rewritten, with the reason.
export const retiredImportIds = {
  'imported-dogs-0024': 'No source confirms the stated purpose of mat work.',
  'imported-dogs-0126': 'No scriptable source found for the term.',
  'imported-dogs-0098': 'Only source is a PDF the checker cannot read.',
  'imported-dogs-0077': 'No scriptable source found for the test age.',
  'imported-dogs-0128': 'No source found defining a double Q.',
  'imported-dogs-0081': 'No source found for splitting as a calming signal.',
  'imported-dogs-0121': 'No source found linking subaortic stenosis to Newfoundlands.',
  'imported-dogs-0105': 'Source does not state the nutrient differences.',
  'imported-dogs-0148': 'Source does not state the buoyancy claim.',
  'imported-dogs-0135': 'No scriptable source found for the chromosome count.',
  'imported-dogs-0085': 'Only source is a PDF the checker cannot read.',
  'imported-dogs-0122': 'Only source is a PDF the checker cannot read.',
  'imported-dogs-0035': 'No source found defining wearing.',
  'imported-dogs-0112': 'Only source blocks scripted checks and the booster interval was not confirmed.',
  'imported-dogs-0056': 'Source does not describe appeasement signals.',
  'imported-dogs-0060': 'Source does not describe shutdown behavior.',
  'imported-dogs-0108': 'No source found naming moose as the quarry.',
  'imported-dogs-0118': 'No scriptable source found for the AKC group.',
  'imported-dogs-0117': 'No source found for the VST title.',
  'imported-dogs-0032': 'No source found for the teeter rule.',
  'imported-dogs-0079': 'Unverifiable claim; the Alaskan Husky is a type, not a breed.',
  'imported-dogs-0089': 'Doubtful claim that one breed was developed specifically for mountain lions.',
  'imported-dogs-0092': 'The "triangle of life" agility rule could not be found in any source.',
  'imported-dogs-0100': 'Trick question whose answer is "not applicable".',
  'imported-dogs-0110': 'Misattributed research; the pointing studies were by Brian Hare, not a Vienna lab.',
  'imported-dogs-0123': 'The answer is in the question.',
  'imported-dogs-0004': 'Merged into dogs-0007 (negative punishment).',
  'imported-dogs-0006': 'Duplicate of dogs-0001 (positive reinforcement).',
  'imported-dogs-0008': 'Ambiguous; the original admits the quadrant depends on framing.',
  'imported-dogs-0018': 'Merged into dogs-0019, which names Behavior Adjustment Training.',
  'imported-dogs-0020': 'Merged into dogs-0021 (Look At That).',
  'imported-dogs-0025': 'Duplicate of the barrier frustration term question.',
  'imported-dogs-0026': 'No single agreed answer.',
  'imported-dogs-0027': 'Too vague for a single correct option.',
  'imported-dogs-0029': 'Too vague for a single correct option.',
  'imported-dogs-0030': 'Weak management question with no clear source.',
  'imported-dogs-0038': 'Merged into the herding questions on fetch and gather.',
  'imported-dogs-0039': 'Merged into dogs-0037 (heelers).',
  'imported-dogs-0043': 'Merged into dogs-0046 (EIC is the Labrador CHIC DNA test).',
  'imported-dogs-0057': 'Too vague for a single correct option.',
  'imported-dogs-0058': 'Too vague; drooling has many causes.',
  'imported-dogs-0061': 'Too vague for a single correct option.',
  'imported-dogs-0062': 'Too vague for a single correct option.',
  'imported-dogs-0067': 'The answer is in the condition\'s name ("Scottie cramp").',
  'imported-dogs-0073': 'Trivial acronym question.',
  'imported-dogs-0080': '"Clicker fatigue" is not an established term.',
  'imported-dogs-0087': 'Several breeds are equally correct.',
  'imported-dogs-0090': 'Too vague for a single correct option.',
  'imported-dogs-0094': 'Obscure acronym with little learning value.',
  'imported-dogs-0115': 'Ambiguous; mondioring draws on French, Belgian and Dutch ring sports.',
  'imported-dogs-0116': 'Merged into dogs-0117 (tracking titles).',
  'imported-dogs-0124': 'Too vague for a single correct option.',
  'imported-dogs-0129': 'Merged into dogs-0066 (brachycephalic airway syndrome).',
  'imported-dogs-0136': 'Sources disagree on the expected age.',
  'imported-dogs-0139': 'Duplicate of dogs-0045; CDRM is an old name for degenerative myelopathy.',
  'imported-dogs-0140': 'Merged into dogs-0117 (tracking titles).',
  'imported-dogs-0147': 'Merged into dogs-0088 (TPLO).',
  'imported-dogs-0152': 'Merged into dogs-0153 (allergic itch treatment).',
  'imported-dogs-0156': 'Obscure acronym with little learning value.'
};
