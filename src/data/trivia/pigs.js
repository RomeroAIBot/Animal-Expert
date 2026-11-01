// Hand-checked pig trivia (Livestock group), from the user's livestock question list (October 2026).
// Same rules as the other category files: each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=pigs --rewritten`). Drafted questions were corrected where
// the source disagreed, and dropped where no checkable source supports them.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const merck = (page) => `https://www.merckvetmanual.com/special-subjects/reference-guides/${page}`;

export const pigQuestions = [
  // Breeds
  {
    id: 'pigs-039',
    topic: 'Breeds',
    question: 'Which pig breed, developed in Denmark for the bacon trade, is white with a long body and heavy drooping ears?',
    options: ['Landrace', 'Large White', 'Chester White', 'Duroc'],
    answer: 'Landrace',
    funFact: 'Denmark became a major supplier of bacon to Britain in the second half of the 19th century.',
    source: wiki('Danish_Landrace_pig'),
    evidence: 'white in colour with a long body, fine hair, a long snout and heavy drooping ears'
  },
  {
    id: 'pigs-041',
    topic: 'Breeds',
    question: 'Which American breed varies from golden to dark reddish-brown and has partially drooping ears?',
    options: ['Duroc', 'Hampshire', 'Berkshire', 'Poland China'],
    answer: 'Duroc',
    funFact: 'It descends from red pig strains that developed around 1800 in New England.',
    source: wiki('Duroc_pig'),
    evidence: 'it varies in color from golden to a dark reddish-brown'
  },
  {
    id: 'pigs-043',
    topic: 'Breeds',
    question: 'Which prick-eared English breed is black with six white markings: four socks, a snout splash and a tail tip?',
    options: ['Berkshire', 'Hampshire', 'Large Black', 'Tamworth'],
    answer: 'Berkshire',
    funFact: 'Despite its fame, it is a rare breed in the United Kingdom.',
    source: wiki('Berkshire_pig'),
    evidence: 'it is black with six white markings'
  },
  {
    id: 'pigs-045',
    topic: 'Breeds',
    question: 'Which breed has a black body with a white band over the shoulders and down the front legs?',
    options: ['Hampshire', 'Berkshire', 'Poland China', 'Tamworth'],
    answer: 'Hampshire',
    funFact: 'Hampshire hogs are noted for being well-muscled and growing fast.',
    source: wiki('Hampshire_pig'),
    evidence: 'black body with a white band or sheet over the shoulders and extending down the front legs'
  },
  {
    id: 'pigs-047',
    topic: 'Breeds',
    question: 'Which big white English breed, the source of the American Yorkshire, has erect ears and a slightly dished face?',
    options: ['Large White', 'Landrace', 'Chester White', 'Welsh'],
    answer: 'Large White',
    funFact: 'Its sows farrow large litters and produce abundant milk.',
    source: wiki('Large_White_pig'),
    evidence: 'the large white is a big, white pig, with erect ears and a slightly dished face'
  },
  {
    id: 'pigs-049',
    topic: 'Breeds',
    question: 'Which Belgian breed has heavy muscling, especially on the hams, and was very prone to porcine stress syndrome?',
    options: ['Piétrain', 'Belgian Landrace', 'Duroc', 'Spotted'],
    answer: 'Piétrain',
    funFact: 'Researchers at the University of Liège later bred a strain without the stress gene.',
    source: wiki('Piétrain'),
    evidence: 'the piétrain is a large pig with heavy muscling, particularly on the hams'
  },
  {
    id: 'pigs-051',
    topic: 'Breeds',
    question: 'Which British breed is the only red-coloured pig of the United Kingdom?',
    options: ['Tamworth', 'Duroc', 'Berkshire', 'Large Black'],
    answer: 'Tamworth',
    funFact: 'It is reared principally for bacon.',
    source: wiki('Tamworth_pig'),
    evidence: 'it is the only red-coloured pig of the united kingdom'
  },
  {
    id: 'pigs-055',
    topic: 'Breeds',
    question: 'Which white American pig breed originated in a county of south-eastern Pennsylvania?',
    options: ['Chester White', 'American Yorkshire', 'Landrace', 'Poland China'],
    answer: 'Chester White',
    funFact: 'It was formerly known as the Chester County White.',
    source: wiki('Chester_White'),
    evidence: 'originated in chester county, pennsylvania'
  },
  {
    id: 'pigs-057',
    topic: 'Breeds',
    question: 'Which large, lop-eared American breed was first bred in Warren County, Ohio?',
    options: ['Poland China', 'Duroc', 'Hampshire', 'Chester White'],
    answer: 'Poland China',
    funFact: 'It is usually solid black with white points on the nose, tail and feet, like a Berkshire.',
    source: wiki('Poland_China_pig'),
    evidence: 'it was first bred in warren county in ohio'
  },

  // Health
  {
    id: 'pigs-040',
    topic: 'Health',
    question: 'Porcine stress syndrome is an inherited disorder caused by a defect in which receptor?',
    options: ['The ryanodine receptor', 'The insulin receptor', 'The thyroid receptor', 'The oxytocin receptor'],
    answer: 'The ryanodine receptor',
    funFact: 'The defect floods muscle with calcium, so stress such as transport can cause sudden death.',
    source: wiki('Porcine_stress_syndrome'),
    evidence: 'due to a defective ryanodine receptor leading to huge calcium influx'
  },
  {
    id: 'pigs-044',
    topic: 'Health',
    question: 'Before 1983, the bacterium behind porcine pleuropneumonia was placed in which genus?',
    options: ['Haemophilus', 'Streptococcus', 'Mycoplasma', 'Clostridium'],
    answer: 'Haemophilus',
    funFact: 'DNA studies showed it was closer to Actinobacillus, so it was renamed Actinobacillus pleuropneumoniae.',
    source: wiki('Actinobacillus_pleuropneumoniae'),
    evidence: '(previously haemophilus pleuropneumoniae)'
  },
  {
    id: 'pigs-048',
    topic: 'Health',
    question: 'In pigs, infection with Erysipelothrix rhusiopathiae is known by what name?',
    options: ['Diamond skin disease', 'Greasy pig disease', 'Mulberry heart disease', 'Blue ear disease'],
    answer: 'Diamond skin disease',
    funFact: 'Diamond-shaped skin lesions are a telltale sign of erysipelas in pigs.',
    source: wiki('Erysipelothrix_rhusiopathiae'),
    evidence: 'in pigs, the disease is known as diamond skin disease'
  },
  {
    id: 'pigs-056',
    topic: 'Health',
    question: 'The virus that causes PRRS (porcine reproductive and respiratory syndrome) belongs to which family?',
    options: ['Arteriviridae', 'Coronaviridae', 'Parvoviridae', 'Herpesviridae'],
    answer: 'Arteriviridae',
    funFact: 'Its relatives include equine arteritis virus, which infects horses.',
    source: wiki('Porcine_reproductive_and_respiratory_syndrome_virus'),
    evidence: 'prrsv is a member of the family arteriviridae'
  },
  {
    id: 'pigs-059',
    topic: 'Health',
    question: 'Pigs are the intermediate host of which tapeworm, whose cysts infect people who eat undercooked pork?',
    options: ['Taenia solium', 'Taenia saginata', 'Echinococcus granulosus', 'Diphyllobothrium latum'],
    answer: 'Taenia solium',
    funFact: 'The cysts that form in the pig are called cysticerci.',
    source: wiki('Taenia_solium'),
    evidence: 'pigs and boars (family suidae) as the intermediate or secondary hosts'
  },
  {
    id: 'pigs-061',
    topic: 'Health',
    question: 'Porcine parvovirus infection can cause a sow to farrow a large proportion of what?',
    options: ['Mummified fetuses', 'Piglets with extra toes', 'Hairless piglets', 'Piglets with cleft palates'],
    answer: 'Mummified fetuses',
    funFact: 'Mummified fetuses can lengthen both pregnancy and farrowing, which leads to stillbirths.',
    source: wiki('Porcine_parvovirus'),
    evidence: 'farrow a large proportion of mummified fetuses'
  },
  {
    id: 'pigs-063',
    topic: 'Health',
    question: 'What does the African swine fever virus cause in domestic pigs?',
    options: ['A hemorrhagic fever with high mortality', 'A mild skin rash', 'Slow-developing arthritis', 'A short-lived cough'],
    answer: 'A hemorrhagic fever with high mortality',
    funFact: 'It is the only species in its genus, Asfivirus, and has no known close relatives.',
    source: wiki('African_swine_fever'),
    evidence: 'the virus causes a hemorrhagic fever with high mortality rates in domestic pigs'
  },
  {
    id: 'pigs-065',
    topic: 'Health',
    question: 'After burrowing through the liver, larvae of the pig roundworm Ascaris suum travel to which organ?',
    options: ['The lungs', 'The brain', 'The kidneys', 'The heart'],
    answer: 'The lungs',
    funFact: 'Their passage through the lungs can lead to secondary bacterial infections.',
    source: wiki('Ascaris_suum'),
    evidence: 'the migration of a. suum larvae through the lungs may cause secondary bacterial infections'
  },
  {
    id: 'pigs-067',
    topic: 'Health',
    question: 'The cattle disease known in the United States as "mad itch" turned out to be which pig disease?',
    options: ["Aujeszky's disease (pseudorabies)", 'African swine fever', 'Swine erysipelas', 'Porcine parvovirus'],
    answer: "Aujeszky's disease (pseudorabies)",
    funFact: 'Pigs are its natural host; in cattle, sheep, dogs and cats it is usually fatal.',
    source: wiki('Aujeszky%27s_disease'),
    evidence: "was concluded to be in fact aujeszky's disease"
  },
  {
    id: 'pigs-069',
    topic: 'Health',
    question: 'Mycoplasma hyopneumoniae causes which chronic, highly contagious disease of pigs?',
    options: ['Enzootic pneumonia', 'Atrophic rhinitis', 'Swine dysentery', 'Greasy pig disease'],
    answer: 'Enzootic pneumonia',
    funFact: 'It is present in almost every pig herd in the world.',
    source: wiki('Mycoplasma_hyopneumoniae'),
    evidence: 'known to cause the disease porcine enzootic pneumonia'
  },
  {
    id: 'pigs-071',
    topic: 'Health',
    question: 'Porcine epidemic diarrhea virus was first found in the United States in 2013 in which state?',
    options: ['Indiana', 'Iowa', 'North Carolina', 'Minnesota'],
    answer: 'Indiana',
    funFact: 'In newborn piglets, virulent strains can kill up to 100%.',
    source: wiki('Porcine_epidemic_diarrhea_virus'),
    evidence: 'it was discovered in the united states on may 5, 2013 in indiana'
  },
  {
    id: 'pigs-072',
    topic: 'Health',
    question: 'Porcine circovirus type 2 causes which wasting disease?',
    options: ['Postweaning multisystemic wasting syndrome', 'Porcine stress syndrome', 'Porcine dermatitis', 'Mulberry heart disease'],
    answer: 'Postweaning multisystemic wasting syndrome',
    funFact: 'The first USDA-approved vaccine against it launched in 2006.',
    source: wiki('Porcine_circovirus'),
    evidence: 'postweaning multisystemic wasting syndrome (pmws)'
  },

  // Husbandry
  {
    id: 'pigs-050',
    topic: 'Husbandry',
    question: 'What is the word for a sow giving birth to a litter?',
    options: ['Farrowing', 'Calving', 'Kidding', 'Lambing'],
    answer: 'Farrowing',
    funFact: 'Medieval European pigs farrowed about once a year; by the 1800s, twice a year was routine.',
    source: wiki('Pig'),
    evidence: 'medieval european pigs farrowed, or bore a litter of piglets'
  },
  {
    id: 'pigs-062',
    topic: 'Husbandry',
    question: 'What is a male pig called that was castrated before puberty?',
    options: ['Barrow', 'Stag', 'Wether', 'Steer'],
    answer: 'Barrow',
    funFact: 'A male castrated later in life is called a stag.',
    source: wiki('Pig_farming'),
    evidence: 'barrow, male pig castrated before puberty'
  },
  {
    id: 'pigs-066',
    topic: 'Husbandry',
    question: 'What is a young female pig called that has not yet farrowed?',
    options: ['Gilt', 'Sow', 'Heifer', 'Doeling'],
    answer: 'Gilt',
    funFact: 'After her first litter she is called a sow.',
    source: wiki('Pig_farming'),
    evidence: 'gilt, young female not yet'
  },
  {
    id: 'pigs-074',
    topic: 'Husbandry',
    question: 'Which is a known cause of tail biting in housed pigs?',
    options: ['Crowding and boredom', 'Too much sunlight', 'Being fed twice a day', 'Being kept with their litter-mates'],
    answer: 'Crowding and boredom',
    funFact: 'Lack of bedding to root in, poor ventilation and low-salt or low-iron diets can add to it.',
    source: wiki('Tail_biting'),
    evidence: 'tail biting even happens out of pure boredom'
  },
  {
    id: 'pigs-076',
    topic: 'Husbandry',
    question: 'A farrowing crate lets piglets feed while preventing the sow from doing what?',
    options: ['Attacking or crushing them', 'Leaving the pen', 'Eating their feed', 'Overheating'],
    answer: 'Attacking or crushing them',
    funFact: 'The crates are so small that the sow cannot turn around, which is why they are controversial.',
    source: wiki('Pig'),
    evidence: 'preventing her from attacking or crushing them'
  },

  // Biology
  {
    id: 'pigs-042',
    topic: 'Biology',
    question: 'A pig\'s pregnancy averages how long?',
    options: ['112 to 120 days', '60 to 70 days', '145 to 155 days', '280 to 290 days'],
    answer: '112 to 120 days',
    funFact: 'Farmers often remember it as three months, three weeks and three days.',
    source: wiki('Pig'),
    evidence: 'the gestation period averages 112-120 days'
  },
  {
    id: 'pigs-064',
    topic: 'Biology',
    question: 'What strengthens the long snout a pig uses to dig in the soil?',
    options: ['A prenasal bone and a disk of cartilage', 'A row of extra teeth', 'A thick layer of fat', 'A pair of tusks'],
    answer: 'A prenasal bone and a disk of cartilage',
    funFact: 'The snout is also an acute sense organ.',
    source: wiki('Pig'),
    evidence: 'a long snout strengthened by a special prenasal bone and a disk of cartilage'
  },
  {
    id: 'pigs-054',
    topic: 'Biology',
    question: 'According to the Merck Veterinary Manual, what is a pig\'s resting heart rate range?',
    options: ['70 to 120 beats a minute', '28 to 40 beats a minute', '250 to 300 beats a minute', '36 to 60 beats a minute'],
    answer: '70 to 120 beats a minute',
    funFact: 'An adult chicken\'s heart rests at 250 to 300 beats a minute.',
    source: merck('resting-heart-rates'),
    evidence: 'pig 70-120'
  },
  {
    id: 'pigs-060',
    topic: 'Biology',
    question: 'What is a pig\'s normal rectal temperature range?',
    options: ['101.6 to 103.6 °F', '98.0 to 99.5 °F', '99.0 to 100.6 °F', '105.0 to 109.4 °F'],
    answer: '101.6 to 103.6 °F',
    funFact: 'That is 38.7 to 39.8 °C. Pigs have few working sweat glands, so they overheat easily.',
    source: merck('normal-rectal-temperature-ranges'),
    evidence: 'pig 38.7-39.8 101.6-103.6'
  },
  {
    id: 'pigs-070',
    topic: 'Biology',
    question: 'What is a pig\'s resting breathing rate?',
    options: ['32 to 58 breaths a minute', '10 to 14 breaths a minute', '4 to 8 breaths a minute', '80 to 100 breaths a minute'],
    answer: '32 to 58 breaths a minute',
    funFact: 'That is faster than a dairy cow, at 26 to 50 breaths a minute.',
    source: merck('resting-respiratory-rates'),
    evidence: 'pig 32-58'
  }
];
