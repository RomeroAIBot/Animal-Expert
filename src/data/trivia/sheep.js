// Hand-checked sheep trivia (Livestock group), from the user's livestock question list (October 2026).
// Same rules as the other category files: each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=sheep --rewritten`). Drafted questions were corrected where
// the source disagreed, and dropped where no checkable source supports them.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const merck = (page) => `https://www.merckvetmanual.com/special-subjects/reference-guides/${page}`;

export const sheepQuestions = [
  // Breeds
  {
    id: 'sheep-077',
    topic: 'Breeds',
    question: 'Which breed, known for very fine soft wool, originated in the Iberian Peninsula and was long a Spanish monopoly?',
    options: ['Merino', 'Rambouillet', 'Corriedale', 'Targhee'],
    answer: 'Merino',
    funFact: 'Its characteristic fine wool may not have been fully developed until the 15th century.',
    source: wiki('Merino'),
    evidence: 'characterised by very fine soft wool'
  },
  {
    id: 'sheep-079',
    topic: 'Breeds',
    question: 'Which large, polled meat breed has a black face and black legs free of wool?',
    options: ['Suffolk', 'Southdown', 'Dorset Horn', 'Cheviot'],
    answer: 'Suffolk',
    funFact: 'It came from crossing Norfolk Horn ewes with improved Southdown rams.',
    source: wiki('Suffolk_sheep'),
    evidence: 'with a black face and black legs free of wool'
  },
  {
    id: 'sheep-083',
    topic: 'Breeds',
    question: 'Among British sheep, which breed is the only one able to breed throughout the winter?',
    options: ['Dorset Horn', 'Romney', 'Cheviot', 'Border Leicester'],
    answer: 'Dorset Horn',
    funFact: 'It is highly prolific and sometimes produces two lambing seasons a year.',
    source: wiki('Dorset_Horn'),
    evidence: 'it is the only breed capable of breeding throughout the winter'
  },
  {
    id: 'sheep-085',
    topic: 'Breeds',
    question: 'Which small Scottish island breed comes in many colours and patterns with traditional names, and is kept for very fine wool?',
    options: ['Shetland', 'Jacob', 'Icelandic', 'Manx Loaghtan'],
    answer: 'Shetland',
    funFact: 'It belongs to the northern European short-tailed group of breeds.',
    source: wiki('Shetland_sheep'),
    evidence: 'shetlands occur in many different colours and patterns'
  },
  {
    id: 'sheep-087',
    topic: 'Breeds',
    question: 'Which breed, bred by John Ellman of Glynde in Sussex around 1800, became the basis of all the Down breeds?',
    options: ['Southdown', 'Hampshire Down', 'Oxford Down', 'Shropshire'],
    answer: 'Southdown',
    funFact: 'It was once small and dusky grey, but is now woolly and white.',
    source: wiki('Southdown_sheep'),
    evidence: 'originally bred by john ellman of glynde'
  },
  {
    id: 'sheep-089',
    topic: 'Breeds',
    question: 'Which New Zealand breed was developed by crossing Merino and Lincoln Longwool sheep?',
    options: ['Corriedale', 'Romney', 'Coopworth', 'Perendale'],
    answer: 'Corriedale',
    funFact: 'James Little began breeding it on the South Island in about 1882.',
    source: wiki('Corriedale'),
    evidence: 'who cross-bred merino and lincoln longwool sheep'
  },
  {
    id: 'sheep-091',
    topic: 'Breeds',
    question: 'Which hill breed is always horned, with a black face and black legs?',
    options: ['Scottish Blackface', 'Suffolk', 'Hampshire Down', 'Cheviot'],
    answer: 'Scottish Blackface',
    funFact: 'The Suffolk also has a black face, but it is polled.',
    source: wiki('Scottish_Blackface'),
    evidence: 'the blackface is always horned'
  },
  {
    id: 'sheep-093',
    topic: 'Breeds',
    question: 'Which British breed is piebald and most commonly has four horns?',
    options: ['Jacob', 'Manx Loaghtan', 'Hebridean', 'Navajo-Churro'],
    answer: 'Jacob',
    funFact: 'Its name comes from the story of Jacob\'s speckled and spotted flock in the Book of Genesis.',
    source: wiki('Jacob_sheep'),
    evidence: 'it most commonly has four horns'
  },
  {
    id: 'sheep-098',
    topic: 'Breeds',
    question: 'Which Caribbean hair sheep descends partly from hair sheep brought to its island from West Africa?',
    options: ['Barbados Blackbelly', 'Katahdin', 'Dorper', 'Wiltshire Horn'],
    answer: 'Barbados Blackbelly',
    funFact: 'The European wool sheep brought to the island did poorly on its coarse pasture.',
    source: wiki('Barbados_Blackbelly_sheep'),
    evidence: 'hair sheep brought from west africa'
  },
  {
    id: 'sheep-100',
    topic: 'Breeds',
    question: 'Which South African breed was developed by crossing Dorset Horn with Blackhead Persian sheep?',
    options: ['Dorper', 'Van Rooy', 'Ile de France', 'Wiltshire Horn'],
    answer: 'Dorper',
    funFact: 'Its name joins the first syllables of its two parent breeds.',
    source: wiki('Dorper'),
    evidence: 'developed by crossing dorset horn and the blackhead persian sheep'
  },
  {
    id: 'sheep-102',
    topic: 'Breeds',
    question: 'Which old British longwool breed is the largest sheep of the United Kingdom?',
    options: ['Lincoln Longwool', 'Cotswold', 'Leicester Longwool', 'Wensleydale'],
    answer: 'Lincoln Longwool',
    funFact: 'The heaviest fleece on record came from a Lincoln ram.',
    source: wiki('Lincoln_sheep'),
    evidence: 'it is the largest sheep of the united kingdom'
  },
  {
    id: 'sheep-106',
    topic: 'Breeds',
    question: 'Which breed developed at the US Sheep Experiment Station in Dubois, Idaho, is named after the national forest around it?',
    options: ['Targhee', 'Columbia', 'Panama', 'Romeldale'],
    answer: 'Targhee',
    funFact: 'Its ancestors were Rambouillet, Corriedale and Lincoln sheep.',
    source: wiki('Targhee_sheep'),
    evidence: 'is named after the targhee national forest'
  },
  {
    id: 'sheep-108',
    topic: 'Breeds',
    question: 'Which northern European short-tailed breed has had litters of as many as seven live lambs?',
    options: ['Finnsheep', 'Texel', 'Merino', 'Suffolk'],
    answer: 'Finnsheep',
    funFact: 'Its lambs mature early and can be mated at six months old.',
    source: wiki('Finnsheep'),
    evidence: 'there have been litters born with as many as seven viable lambs'
  },
  {
    id: 'sheep-112',
    topic: 'Breeds',
    question: 'Which American breed began in 1912 in Laramie, Wyoming, by crossing Lincoln rams with Rambouillet ewes?',
    options: ['Columbia', 'Targhee', 'Corriedale', 'Romeldale'],
    answer: 'Columbia',
    funFact: 'It is one of the first breeds of sheep developed in the United States.',
    source: wiki('Columbia_sheep'),
    evidence: 'lincoln rams were crossed with rambouillet ewes'
  },

  // Health
  {
    id: 'sheep-078',
    topic: 'Health',
    question: 'How is ovine progressive pneumonia most commonly spread?',
    options: ['Through infected colostrum or milk', 'Through biting midges', 'Through contaminated soil', 'Through shearing cuts'],
    answer: 'Through infected colostrum or milk',
    funFact: 'Breathing in infected droplets in close winter housing spreads it too.',
    source: wiki('Ovine_progressive_pneumonia'),
    evidence: 'ingestion of colostrum or milk that contains the virus'
  },
  {
    id: 'sheep-081',
    topic: 'Health',
    question: 'Which blood-feeding stomach worm, named for its red-and-white coloring, causes anemia in sheep and goats?',
    options: ['Haemonchus contortus', 'Ostertagia ostertagi', 'Nematodirus battus', 'Ascaris suum'],
    answer: 'Haemonchus contortus',
    funFact: 'Fluid gathering under the jaw, called bottle jaw, is a classic sign.',
    source: wiki('Haemonchus_contortus'),
    evidence: 'easily recognized by its trademark "barber pole" coloration'
  },
  {
    id: 'sheep-082',
    topic: 'Health',
    question: 'Ovine foot rot is caused by Fusobacterium necrophorum together with which bacterium?',
    options: ['Dichelobacter nodosus', 'Clostridium chauvoei', 'Corynebacterium pseudotuberculosis', 'Erysipelothrix rhusiopathiae'],
    answer: 'Dichelobacter nodosus',
    funFact: 'Its enzymes make the hoof separate from the tissue beneath it.',
    source: wiki('Dichelobacter_nodosus'),
    evidence: 'dichelobacter nodosus, along with fusobacterium necrophorum, co-exist as the causative agents of ovine foot rot'
  },
  {
    id: 'sheep-084',
    topic: 'Health',
    question: 'Pregnancy toxemia ("twin lamb disease") usually strikes ewes at what stage?',
    options: ['Late pregnancy, carrying multiple lambs', 'Right after weaning', 'During the breeding season', 'In their first month of life'],
    answer: 'Late pregnancy, carrying multiple lambs',
    funFact: 'It is the sheep form of ketosis, driven by the huge energy demands of several fetuses.',
    source: wiki('Ketosis'),
    evidence: 'may develop in late pregnancy in ewes bearing multiple fetuses'
  },
  {
    id: 'sheep-086',
    topic: 'Health',
    question: 'Scrapie, a fatal disease of the nervous system in sheep and goats, is thought to be caused by what?',
    options: ['A prion', 'A retrovirus', 'A tapeworm', 'A fungus'],
    answer: 'A prion',
    funFact: 'Scrapie has been known since at least 1732 and does not appear to infect humans.',
    source: wiki('Scrapie'),
    evidence: 'it is thought to be caused by a prion'
  },
  {
    id: 'sheep-088',
    topic: 'Health',
    question: 'Orf, or sore mouth, which can spread from sheep to people\'s hands, is caused by what kind of virus?',
    options: ['A parapoxvirus', 'A coronavirus', 'A lentivirus', 'An orbivirus'],
    answer: 'A parapoxvirus',
    funFact: 'Feeding or shearing animals with active lesions is a common way people catch it.',
    source: wiki('Contagious_pustular_dermatitis'),
    evidence: 'it is caused by a member of the genus parapoxvirus'
  },
  {
    id: 'sheep-090',
    topic: 'Health',
    question: 'Which bacterium causes caseous lymphadenitis, with pus-filled abscesses in the lymph nodes of sheep and goats?',
    options: ['Corynebacterium pseudotuberculosis', 'Clostridium perfringens', 'Dichelobacter nodosus', 'Brucella abortus'],
    answer: 'Corynebacterium pseudotuberculosis',
    funFact: 'Commercial goat herds have shown infection rates as high as 30%.',
    source: wiki('Caseous_lymphadenitis'),
    evidence: 'caused by the bacterium corynebacterium pseudotuberculosis'
  },
  {
    id: 'sheep-095',
    topic: 'Health',
    question: 'Blackleg, in which gas builds up in large muscles, is most commonly caused by which bacterium?',
    options: ['Clostridium chauvoei', 'Clostridium tetani', 'Bacillus anthracis', 'Listeria monocytogenes'],
    answer: 'Clostridium chauvoei',
    funFact: 'Pressing the affected muscle makes a crackling or popping sound.',
    source: wiki('Blackleg_(disease)'),
    evidence: 'most commonly caused by clostridium chauvoei'
  },
  {
    id: 'sheep-097',
    topic: 'Health',
    question: 'The mite Psoroptes ovis causes which highly infectious disease?',
    options: ['Sheep scab', 'Foot rot', 'Bluetongue', 'Orf'],
    answer: 'Sheep scab',
    funFact: 'It spreads via fence posts and other structures that infested animals rub against.',
    source: wiki('Psoroptes_ovis'),
    evidence: 'it is also known as sheep scab and cattle scab'
  },
  {
    id: 'sheep-099',
    topic: 'Health',
    question: 'Overeating disease, or pulpy kidney, in sheep is caused by which type of Clostridium perfringens?',
    options: ['Type D', 'Type A', 'Type B', 'Type C'],
    answer: 'Type D',
    funFact: 'Type B causes a different form, lamb dysentery, in lambs under three weeks old.',
    source: wiki('Enterotoxemia'),
    evidence: 'a form of enterotoxemia caused by type d c. perfringens'
  },
  {
    id: 'sheep-104',
    topic: 'Health',
    question: 'Bluetongue virus is mainly spread by which insects?',
    options: ['Culicoides biting midges', 'Stable flies', 'Anopheles mosquitoes', 'Sheep keds'],
    answer: 'Culicoides biting midges',
    funFact: 'It is described as a noncontagious, insect-borne disease: the midges carry it between animals.',
    source: wiki('Bluetongue_disease'),
    evidence: 'mainly transmitted by biting midges, specifically culicoides species'
  },
  {
    id: 'sheep-107',
    topic: 'Health',
    question: 'White muscle disease in lambs and calves is caused by a deficiency of what?',
    options: ['Selenium and vitamin E', 'Calcium and vitamin D', 'Iron and copper', 'Thiamine'],
    answer: 'Selenium and vitamin E',
    funFact: 'Soils low in selenium grow forages and grains that are low in it too.',
    source: wiki('Nutritional_muscular_dystrophy'),
    evidence: 'caused by a deficiency of selenium and vitamin e'
  },
  {
    id: 'sheep-110',
    topic: 'Health',
    question: 'Peste des petits ruminants, a deadly disease of sheep and goats, is also known by what name?',
    options: ['Goat plague', 'Red water', 'Staggers', 'Lumpy jaw'],
    answer: 'Goat plague',
    funFact: 'The FAO has a global plan to eradicate it.',
    source: wiki('Peste_des_petits_ruminants'),
    evidence: 'ppr is also known as goat plague'
  },
  {
    id: 'sheep-113',
    topic: 'Health',
    question: 'Scrapie is named after which sign of the disease?',
    options: ['Scraping off fleece against fences', 'Scraping hooves on the ground', 'Scraping teeth together', 'Scraping at the eyes'],
    answer: 'Scraping off fleece against fences',
    funFact: 'Excessive lip smacking and an altered gait are other signs.',
    source: wiki('Scrapie'),
    evidence: 'compulsively scrape off their fleeces against rocks, trees or fences'
  },
  {
    id: 'sheep-114',
    topic: 'Health',
    question: 'To help prevent urinary stones in wether lambs, what dietary calcium-to-phosphorus ratio is recommended?',
    options: ['2:1', '1:2', '1:1', '1:4'],
    answer: '2:1',
    funFact: 'Stones cause more trouble in males because of the narrow bend in their urethra.',
    source: wiki('Urolithiasis'),
    evidence: 'maintaining a dietary ca:p intake ratio of 2:1'
  },

  // Husbandry
  {
    id: 'sheep-094',
    topic: 'Husbandry',
    question: 'What is crutching?',
    options: ['Removing wool around the tail and rear legs', 'Trimming overgrown hooves', 'Docking the tail', 'Plucking the face wool for showing'],
    answer: 'Removing wool around the tail and rear legs',
    funFact: 'It helps prevent fly strike, when flies lay eggs in damp, dirty wool.',
    source: wiki('Crutching'),
    evidence: 'removal of wool from around the tail and between the rear legs'
  },
  {
    id: 'sheep-105',
    topic: 'Husbandry',
    question: 'What is a castrated male sheep called?',
    options: ['Wether', 'Ram', 'Tup', 'Hogget'],
    answer: 'Wether',
    funFact: 'An intact male is a ram, sometimes called a tup.',
    source: wiki('Sheep'),
    evidence: 'a castrated male as a wether'
  },
  {
    id: 'sheep-109',
    topic: 'Husbandry',
    question: 'What is it called when the naturally loosening fleece of primitive sheep such as Shetlands is plucked by hand?',
    options: ['Rooing', 'Crutching', 'Carding', 'Skirting'],
    answer: 'Rooing',
    funFact: 'A natural break in wool growth each spring lets the fleece peel away without cutting.',
    source: wiki('Sheep_shearing'),
    evidence: 'it may then be plucked by hand without cutting - this is known as rooing'
  },

  // Biology
  {
    id: 'sheep-080',
    topic: 'Biology',
    question: 'About how long is a sheep\'s pregnancy?',
    options: ['Five months', 'Three months', 'Seven months', 'Nine months'],
    answer: 'Five months',
    funFact: 'Normal labour takes one to three hours.',
    source: wiki('Sheep'),
    evidence: 'sheep have a gestation period of about five months'
  },
  {
    id: 'sheep-103',
    topic: 'Biology',
    question: 'Which stomach compartment, also called the manyplies, absorbs water, electrolytes and fatty acids?',
    options: ['Omasum', 'Rumen', 'Reticulum', 'Abomasum'],
    answer: 'Omasum',
    funFact: 'It is the third of a ruminant\'s four stomach compartments.',
    source: wiki('Omasum'),
    evidence: 'the omasum, also known as the green, the fardel, the manyplies'
  },
  {
    id: 'sheep-092',
    topic: 'Biology',
    question: 'According to the Merck Veterinary Manual, what is a sheep\'s resting heart rate range?',
    options: ['70 to 80 beats a minute', '28 to 40 beats a minute', '120 to 140 beats a minute', '250 to 300 beats a minute'],
    answer: '70 to 80 beats a minute',
    funFact: 'Goats share the same range.',
    source: merck('resting-heart-rates'),
    evidence: 'sheep 70-80'
  },
  {
    id: 'sheep-096',
    topic: 'Biology',
    question: 'What is a sheep\'s normal rectal temperature range?',
    options: ['100.9 to 103.8 °F', '98.0 to 99.5 °F', '99.0 to 100.6 °F', '105.0 to 109.4 °F'],
    answer: '100.9 to 103.8 °F',
    funFact: 'That is 38.3 to 39.9 °C, a little warmer than a person.',
    source: merck('normal-rectal-temperature-ranges'),
    evidence: 'sheep 38.3-39.9 100.9-103.8'
  },
  {
    id: 'sheep-111',
    topic: 'Biology',
    question: 'What is a sheep\'s resting breathing rate?',
    options: ['16 to 34 breaths a minute', '4 to 8 breaths a minute', '60 to 80 breaths a minute', '100 to 120 breaths a minute'],
    answer: '16 to 34 breaths a minute',
    funFact: 'A resting dog breathes at almost the same rate, 18 to 34 a minute.',
    source: merck('resting-respiratory-rates'),
    evidence: 'sheep 16-34'
  },

  // Added November 2026 from the user's livestock quiz pages (FunTrivia, 4-H), checked the same way.
  {
    id: 'sheep-n01',
    topic: 'Breeds',
    question: 'Sheep of the original North Ronaldsay flock in Orkney live almost entirely on what?',
    options: ['Seaweed', 'Heather', 'Hay', 'Kelp-fed fish'],
    answer: 'Seaweed',
    funFact: 'They are one of very few mammals that do this, kept on the shore by a stone wall built in the early 1800s.',
    source: wiki('North_Ronaldsay_sheep'),
    evidence: 'evolved to subsist almost entirely on seaweed'
  },
  {
    id: 'sheep-n02',
    topic: 'Breeds',
    question: 'The hardy Herdwick sheep is native to which part of England?',
    options: ['The Lake District', 'Cornwall', 'The Yorkshire Dales', 'The South Downs'],
    answer: 'The Lake District',
    funFact: 'Its name comes from the Old Norse "herdvyck", meaning sheep pasture.',
    source: wiki('Herdwick'),
    evidence: 'is a breed of domestic sheep native to the lake district'
  },
  {
    id: 'sheep-n03',
    topic: 'Breeds',
    question: 'The Gentile di Puglia is a sheep breed from which country?',
    options: ['Italy', 'Spain', 'Greece', 'Portugal'],
    answer: 'Italy',
    funFact: 'It comes from the Tavoliere di Foggia, a large plain in the north of Puglia.',
    source: wiki('Gentile_di_Puglia'),
    evidence: 'is an italian breed of domestic sheep indigenous to southern italy'
  },
  {
    id: 'sheep-n04',
    topic: 'Biology',
    question: 'What shape are a sheep\'s pupils?',
    options: ['Horizontal slits', 'Round', 'Vertical slits', 'W-shaped'],
    answer: 'Horizontal slits',
    funFact: 'They give sheep excellent side vision; a sheep can see behind itself without turning its head.',
    source: wiki('Sheep'),
    evidence: 'sheep have horizontal slit-shaped pupils, with excellent peripheral vision'
  },
  {
    id: 'sheep-n05',
    topic: 'Health',
    question: 'Where does the sheep bot fly lay its larvae?',
    options: ['In the sheep\'s nostrils', 'In open wounds', 'In the fleece', 'Between the hooves'],
    answer: 'In the sheep\'s nostrils',
    funFact: 'The larvae crawl up into the nasal sinuses, where they grow before dropping out to pupate.',
    source: wiki('Oestrus_ovis'),
    evidence: 'directly into a nostril of the host animal'
  }
];
