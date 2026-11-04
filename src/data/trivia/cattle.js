// Hand-checked cattle trivia (Livestock group), from the user's livestock question list (October 2026).
// Same rules as the other category files: each `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=cattle --rewritten`). Drafted questions were corrected where
// the source disagreed, and dropped where no checkable source supports them.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const merck = (page) => `https://www.merckvetmanual.com/special-subjects/reference-guides/${page}`;

export const cattleQuestions = [
  // Breeds
  {
    id: 'cattle-001',
    topic: 'Breeds',
    question: 'Which Channel Island dairy breed is known for milk high in butterfat (about 4.8%) and protein?',
    options: ['Jersey', 'Holstein Friesian', 'Ayrshire', 'Brown Swiss'],
    answer: 'Jersey',
    funFact: 'Jerseys come in every shade of brown, from light tan to almost black.',
    source: wiki('Jersey_cattle'),
    evidence: 'high butterfat (4.84%) and protein (3.95%)'
  },
  {
    id: 'cattle-003',
    topic: 'Breeds',
    question: 'Which breed from north-eastern Scotland is naturally polled and solid black or red?',
    options: ['Aberdeen Angus', 'Hereford', 'Shorthorn', 'Highland'],
    answer: 'Aberdeen Angus',
    funFact: 'In Japan its beef is prized for its marbling, the fine flecks of fat within the muscle.',
    source: wiki('Aberdeen_Angus'),
    evidence: 'the angus is naturally polled and solid black or red'
  },
  {
    id: 'cattle-007',
    topic: 'Breeds',
    question: 'The American Brown Swiss began in 1869, when seven cows and a bull of which Swiss breed were shipped to Massachusetts?',
    options: ['Braunvieh', 'Simmental', 'Hérens', 'Evolène'],
    answer: 'Braunvieh',
    funFact: 'In Switzerland the Braunvieh was a triple-purpose animal: it pulled loads and gave both milk and meat.',
    source: wiki('Brown_Swiss'),
    evidence: 'the braunvieh was first imported to the united states in 1869'
  },
  {
    id: 'cattle-009',
    topic: 'Breeds',
    question: 'Which French beef breed, white to cream in colour, is named after the area around the town of Charolles?',
    options: ['Charolais', 'Limousin', "Blonde d'Aquitaine", 'Salers'],
    answer: 'Charolais',
    funFact: 'Its nose is uniformly pink.',
    source: wiki('Charolais_cattle'),
    evidence: 'the coat ranges from white to cream-coloured'
  },
  {
    id: 'cattle-013',
    topic: 'Breeds',
    question: 'Which English beef breed had its white face firmly established by the end of the 18th century?',
    options: ['Hereford', 'Devon', 'Sussex', 'Lincoln Red'],
    answer: 'Hereford',
    funFact: 'Before then, cattle in its home county were wholly red with a white switch.',
    source: wiki('Hereford_cattle'),
    evidence: 'the white face characteristic of the modern breed was well established'
  },
  {
    id: 'cattle-015',
    topic: 'Breeds',
    question: 'Which dairy breed from south-western Scotland typically has red and white markings?',
    options: ['Ayrshire', 'Guernsey', 'Milking Shorthorn', 'Brown Swiss'],
    answer: 'Ayrshire',
    funFact: 'Its red can range from orange to a dark brown.',
    source: wiki('Ayrshire_cattle'),
    evidence: 'ayrshires typically have red and white markings'
  },
  {
    id: 'cattle-017',
    topic: 'Breeds',
    question: 'Which French beef breed, light wheat to golden-red in colour, is known for lean, tender meat?',
    options: ['Limousin', 'Simmental', 'Gelbvieh', 'Maine-Anjou'],
    answer: 'Limousin',
    funFact: 'Black Limousin were developed later by cross-breeding and grading up from other breeds.',
    source: wiki('Limousin_cattle'),
    evidence: 'coloration varies from light wheat to darker golden-red'
  },
  {
    id: 'cattle-019',
    topic: 'Breeds',
    question: 'Which beef breed is made up of 3/8 Brahman and 5/8 Hereford?',
    options: ['Braford', 'Brangus', 'Beefmaster', 'Santa Gertrudis'],
    answer: 'Braford',
    funFact: 'A straight half Brahman, half Hereford cross is called an F1 Braford or F1 baldy.',
    source: wiki('Braford'),
    evidence: 'is 3/8 brahman and 5/8 hereford'
  },
  {
    id: 'cattle-021',
    topic: 'Breeds',
    question: 'Which dairy breed gives milk with a golden-yellow tinge from its high beta-carotene content?',
    options: ['Guernsey', 'Jersey', 'Holstein Friesian', 'Brown Swiss'],
    answer: 'Guernsey',
    funFact: 'Beta-carotene is a provitamin the body turns into vitamin A.',
    source: wiki('Guernsey_cattle'),
    evidence: 'golden-yellow tinge caused by a high content of β-carotene'
  },
  {
    id: 'cattle-023',
    topic: 'Breeds',
    question: 'Which dual-purpose Swiss breed is named after the valley of the Simme river?',
    options: ['Simmental', 'Brown Swiss', 'Normande', 'Montbéliarde'],
    answer: 'Simmental',
    funFact: 'It helped create other European breeds, among them the Montbéliarde of France.',
    source: wiki('Simmental_cattle'),
    evidence: 'the valley of the simme river'
  },
  {
    id: 'cattle-027',
    topic: 'Breeds',
    question: 'The American Brahman was bred in the United States from 1885 using cattle that originated where?',
    options: ['India', 'Spain', 'Scotland', 'South Africa'],
    answer: 'India',
    funFact: 'Its founders were mainly Gir, Guzerá and Nelore cattle, imported by way of the UK, India and Brazil.',
    source: wiki('Brahman_cattle'),
    evidence: 'it was bred in the united states from 1885 using cattle originating in india'
  },
  {
    id: 'cattle-029',
    topic: 'Breeds',
    question: 'Which deep red English beef breed is also called the Red Ruby?',
    options: ['Devon', 'Lincoln Red', 'Sussex', 'Red Poll'],
    answer: 'Devon',
    funFact: 'It is also called the North Devon, to tell it apart from the South Devon.',
    source: wiki('North_Devon_cattle'),
    evidence: 'may be known as the devon ruby, ruby red or red ruby'
  },
  {
    id: 'cattle-031',
    topic: 'Breeds',
    question: 'Which breed developed on the King Ranch in Texas was officially recognised by the USDA in 1940?',
    options: ['Santa Gertrudis', 'Beefmaster', 'Brangus', 'Texas Longhorn'],
    answer: 'Santa Gertrudis',
    funFact: 'Its name comes from the Spanish-owned estate where the King Ranch was established in 1851.',
    source: wiki('Santa_Gertrudis_cattle'),
    evidence: 'officially recognized by the united states department of agriculture in 1940'
  },
  {
    id: 'cattle-033',
    topic: 'Breeds',
    question: 'Which British breed from County Durham and Yorkshire comes in red, white or roan?',
    options: ['Shorthorn', 'Red Poll', 'Dexter', 'Ayrshire'],
    answer: 'Shorthorn',
    funFact: 'A white strain was crossed with black Galloways to produce the blue roan Blue Grey.',
    source: wiki('Shorthorn'),
    evidence: 'shorthorns are coloured red, white, or roan'
  },
  {
    id: 'cattle-035',
    topic: 'Breeds',
    question: 'Which Belgian breed is famous for "double-muscling", caused by a deletion in the myostatin gene?',
    options: ['Belgian Blue', 'Charolais', "Blonde d'Aquitaine", 'Limousin'],
    answer: 'Belgian Blue',
    funFact: 'Myostatin normally slows muscle growth; without it, the meat is also very lean.',
    source: wiki('Belgian_Blue'),
    evidence: 'caused by a deletion in the myostatin gene'
  },
  {
    id: 'cattle-037',
    topic: 'Breeds',
    question: 'Which small Irish breed originated in County Kerry in the 18th century?',
    options: ['Dexter', 'Galloway', 'Lowline Angus', 'Highland'],
    answer: 'Dexter',
    funFact: 'Bulls usually stand only 102 to 112 cm at the withers.',
    source: wiki('Dexter_cattle'),
    evidence: 'it originated in the eighteenth century in county kerry'
  },

  // Health
  {
    id: 'cattle-002',
    topic: 'Health',
    question: 'Besides cough and fever, which behaviour is a recognised sign of bovine respiratory disease?',
    options: ['Ear droop', 'Head pressing', 'Constant licking', 'Walking backwards'],
    answer: 'Ear droop',
    funFact: 'It is often called "shipping fever" because it so often follows transport to feedlots.',
    source: wiki('Bovine_respiratory_disease'),
    evidence: 'general sickness behavior such as ear droop'
  },
  {
    id: 'cattle-005',
    topic: 'Health',
    question: '"White heifer disease", in which heifers have incomplete reproductive tracts, is linked to the gene behind which coat colour?',
    options: ['Roan', 'Brindle', 'Dun', 'Belted'],
    answer: 'Roan',
    funFact: 'Heifers that carry two copies of the gene (and are white) are the ones affected.',
    source: wiki('Roan_(color)'),
    evidence: 'white heifer disease," associated with the mgf gene'
  },
  {
    id: 'cattle-006',
    topic: 'Health',
    question: 'A displaced abomasum is most often seen within how long of calving?',
    options: ['14 days', '3 months', '6 months', 'A year'],
    answer: '14 days',
    funFact: 'It displaces to the left far more often than to the right, because of the cow\'s anatomy.',
    source: wiki('Displaced_abomasum'),
    evidence: 'most commonly seen within 14 days of parturition'
  },
  {
    id: 'cattle-008',
    topic: 'Health',
    question: 'What is a freemartin?',
    options: ['An infertile heifer born twin to a bull', 'A bull calf born without horns', 'A cow that calves twice a year', 'A steer castrated after a year'],
    answer: 'An infertile heifer born twin to a bull',
    funFact: 'Masculinizing factors reach the female twin through shared placental blood vessels.',
    source: wiki('Freemartin'),
    evidence: 'such a cow is born as one of a pair of twins'
  },
  {
    id: 'cattle-010',
    topic: 'Health',
    question: 'Milk fever in dairy cows is caused by low levels of what in the blood?',
    options: ['Calcium', 'Magnesium', 'Glucose', 'Iron'],
    answer: 'Calcium',
    funFact: '"Fever" is a misnomer: the disease usually does not raise body temperature.',
    source: wiki('Milk_fever'),
    evidence: 'characterized by reduced blood calcium levels (hypocalcemia)'
  },
  {
    id: 'cattle-011',
    topic: 'Health',
    question: 'Which bacteria are found in the lesions of digital dermatitis ("strawberry foot rot")?',
    options: ['Treponema spirochetes', 'Clostridium chauvoei', 'Brucella abortus', 'Mycoplasma bovis'],
    answer: 'Treponema spirochetes',
    funFact: 'It is also known as hairy heel warts and Mortellaro disease.',
    source: wiki('Digital_dermatitis'),
    evidence: 'spirochetes of the genus treponema, are found in the lesions'
  },
  {
    id: 'cattle-014',
    topic: 'Health',
    question: 'In hardware disease, a swallowed nail or piece of wire usually settles in which stomach compartment?',
    options: ['Reticulum', 'Omasum', 'Abomasum', 'Rumen'],
    answer: 'Reticulum',
    funFact: 'Many farmers switched from baling wire to plastic cord to protect their cows.',
    source: wiki('Hardware_disease'),
    evidence: 'these pieces of metal settle in the reticulum'
  },
  {
    id: 'cattle-016',
    topic: 'Health',
    question: 'Ketosis in dairy cows most commonly occurs when?',
    options: ['In the first weeks after calving', 'In the last month of pregnancy', 'During the dry period', 'Before first breeding'],
    answer: 'In the first weeks after calving',
    funFact: 'It reflects an energy deficit: feed intake cannot keep up with the demands of milking.',
    source: wiki('Ketosis'),
    evidence: 'ketosis commonly occurs during the first weeks after giving birth to a calf'
  },
  {
    id: 'cattle-020',
    topic: 'Health',
    question: 'Grass tetany is a metabolic disease involving a deficiency of which mineral?',
    options: ['Magnesium', 'Calcium', 'Selenium', 'Copper'],
    answer: 'Magnesium',
    funFact: 'High potassium intake, such as from heavily fertilised spring grass, can bring it on.',
    source: wiki('Grass_tetany'),
    evidence: 'high potassium intake relative to calcium and magnesium intake may induce hypomagnesemia'
  },
  {
    id: 'cattle-022',
    topic: 'Health',
    question: 'Cattle with signs of Johne\'s disease are a major source of infection for calves because they shed billions of bacteria through what?',
    options: ['Their manure', 'Their breath', 'Biting flies', 'Their saliva'],
    answer: 'Their manure',
    funFact: 'Signs usually start when cattle are four to seven years old.',
    source: wiki('Paratuberculosis'),
    evidence: 'shed billions of bacteria through their manure'
  },
  {
    id: 'cattle-025',
    topic: 'Health',
    question: 'Brucellosis in cows was named "Bang\'s disease" after a Danish vet who linked a bacillus to what?',
    options: ['Spontaneous abortion', 'Sudden lameness', 'Gradual blindness', 'Patchy hair loss'],
    answer: 'Spontaneous abortion',
    funFact: 'Bernhard Bang isolated the bacillus in 1897.',
    source: wiki('Brucellosis'),
    evidence: 'bang isolated a bacillus as the agent of heightened spontaneous abortion in cows'
  },
  {
    id: 'cattle-026',
    topic: 'Health',
    question: 'What is the procedure that destroys horn buds before they grow into horns?',
    options: ['Disbudding', 'Dehorning', 'Polling', 'Docking'],
    answer: 'Disbudding',
    funFact: 'It is done early in life; dehorning removes horns that have already grown.',
    source: wiki('Livestock_dehorning'),
    evidence: 'destroys horn buds before they have grown into horns'
  },
  {
    id: 'cattle-030',
    topic: 'Health',
    question: 'A cow infected with bovine viral diarrhea virus between about day 30 and day 120 of pregnancy may give birth to what?',
    options: ['A persistently infected calf', 'A freemartin', 'A double-muscled calf', 'A polled calf'],
    answer: 'A persistently infected calf',
    funFact: 'These calves treat the virus as "self" and shed it in large amounts.',
    source: wiki('Bovine_viral_diarrhea'),
    evidence: 'can result in immunotolerance and the birth of calves persistently infected'
  },
  {
    id: 'cattle-032',
    topic: 'Health',
    question: 'Frothy bloat, where gas is trapped in foam in the rumen, is often triggered by eating large amounts of what?',
    options: ['Legumes such as alfalfa and clover', 'Dry, mature grass hay', 'Corn stalks left after harvest', 'Straw used as bedding'],
    answer: 'Legumes such as alfalfa and clover',
    funFact: 'Some legumes, such as sainfoin and birdsfoot trefoil, are much less likely to cause it.',
    source: wiki('Ruminal_tympany'),
    evidence: 'such as legumes, alfalfa, red clover, or white clover'
  },
  {
    id: 'cattle-034',
    topic: 'Health',
    question: 'The California Mastitis Test gives a cow-side estimate of what in milk?',
    options: ['Somatic cell count', 'Butterfat content', 'Antibiotic residue', 'Protein content'],
    answer: 'Somatic cell count',
    funFact: 'Its reagent forms a gel with the DNA of cells in the milk.',
    source: wiki('California_mastitis_test'),
    evidence: 'simple cow-side indicator of the somatic cell count of milk'
  },
  {
    id: 'cattle-038',
    topic: 'Health',
    question: 'Bovine anaplasmosis is spread mainly by what?',
    options: ['Ticks', 'Mosquitoes', 'Contaminated water', 'Houseflies'],
    answer: 'Ticks',
    funFact: 'Once infected, cattle remain carriers for life.',
    source: wiki('Anaplasmosis'),
    evidence: 'anaplasmosis is a tick-borne disease affecting ruminants'
  },

  // Biology
  {
    id: 'cattle-004',
    topic: 'Biology',
    question: 'What is the main job of the small finger-like papillae lining the rumen?',
    options: ['Absorbing nutrients', 'Secreting acid', 'Grinding feed', 'Making rennet'],
    answer: 'Absorbing nutrients',
    funFact: 'A newborn calf\'s rumen is smooth; the papillae develop once fermentation of solid feed gets going.',
    source: wiki('Rumen'),
    evidence: 'fingerlike projections called papillae, which aid in nutrient absorption'
  },
  {
    id: 'cattle-012',
    topic: 'Biology',
    question: 'About how long is a cow\'s pregnancy?',
    options: ['Nine months', 'Five months', 'Seven months', 'Eleven months'],
    answer: 'Nine months',
    funFact: 'Slightly more bull calves are born than heifers, about 52 to 48.',
    source: wiki('Cattle'),
    evidence: 'the gestation period for a cow is about nine months long'
  },
  {
    id: 'cattle-018',
    topic: 'Biology',
    question: 'In a suckling calf, what closes so that milk bypasses the rumen?',
    options: ['The esophageal groove', 'The pyloric valve', 'The omasal orifice', 'The cardiac sphincter'],
    answer: 'The esophageal groove',
    funFact: 'The groove closes by reflex when the calf suckles.',
    source: wiki('Rumen'),
    evidence: 'bypassed by the reflexive closure of the esophageal groove'
  },
  {
    id: 'cattle-028',
    topic: 'Biology',
    question: 'According to the Merck Veterinary Manual, what is the resting heart rate range of a dairy cow?',
    options: ['48 to 84 beats a minute', '28 to 40 beats a minute', '120 to 140 beats a minute', '250 to 300 beats a minute'],
    answer: '48 to 84 beats a minute',
    funFact: 'A horse rests at only 28 to 40 beats a minute.',
    source: merck('resting-heart-rates'),
    evidence: 'dairy cow 48-84'
  },
  {
    id: 'cattle-036',
    topic: 'Biology',
    question: 'What is the normal rectal temperature range of a dairy cow?',
    options: ['100.4 to 102.8 °F', '98.0 to 99.5 °F', '103.5 to 105.0 °F', '105.0 to 109.4 °F'],
    answer: '100.4 to 102.8 °F',
    funFact: 'That is 38.0 to 39.3 °C. Beef cows run a little cooler at the low end.',
    source: merck('normal-rectal-temperature-ranges'),
    evidence: 'dairy cow 38.0-39.3 100.4-102.8'
  },
  {
    id: 'cattle-039',
    topic: 'Biology',
    question: 'What is the resting breathing rate of a dairy cow?',
    options: ['26 to 50 breaths a minute', '10 to 14 breaths a minute', '60 to 80 breaths a minute', '4 to 8 breaths a minute'],
    answer: '26 to 50 breaths a minute',
    funFact: 'A resting horse breathes only 10 to 14 times a minute.',
    source: merck('resting-respiratory-rates'),
    evidence: 'dairy cow 26-50'
  },

  // Added November 2026 from the user's livestock quiz pages (FunTrivia, 4-H), checked the same way.
  {
    id: 'cattle-n01',
    topic: 'Breeds',
    question: 'The Belted Galloway, a hardy beef breed named for the white band around its middle, comes from which country?',
    options: ['Scotland', 'Ireland', 'Wales', 'The Netherlands'],
    answer: 'Scotland',
    funFact: 'It comes from the Galloway region of south-western Scotland and was set up as a separate breed in 1921.',
    source: wiki('Belted_Galloway'),
    evidence: 'the belted galloway is a traditional scottish breed of beef cattle'
  },
  {
    id: 'cattle-n02',
    topic: 'Health',
    question: 'How have the United States, Mexico and Central America worked to wipe out the screwworm fly, which lays eggs in livestock wounds?',
    options: ['Releasing huge numbers of sterile male flies', 'Spraying every pasture with insecticide', 'Vaccinating all cattle', 'Setting sticky traps on every farm'],
    answer: 'Releasing huge numbers of sterile male flies',
    funFact: 'This is the sterile insect technique: females that mate with sterile males lay eggs that never hatch.',
    source: wiki('Screwworm'),
    evidence: 'to eradicate the fly via the sterile insect technique'
  },
  {
    id: 'cattle-n03',
    topic: 'Health',
    question: 'In the 2001 foot-and-mouth disease outbreak in Britain, about how many cattle and sheep were slaughtered to stop it?',
    options: ['Over 6 million', 'About 60,000', 'About 600,000', 'Over 60 million'],
    answer: 'Over 6 million',
    funFact: 'There were about 2,000 cases on farms, and the crisis hit both farming and tourism.',
    source: wiki('2001_United_Kingdom_foot-and-mouth_outbreak'),
    evidence: 'over 6 million cows and sheep were slaughtered'
  },

  // Added November 2026 from the user's beginner livestock and chicken list, checked the same way.
  {
    id: 'cattle-n04',
    topic: 'Husbandry',
    question: 'What is an adult male of cattle that has not been castrated called?',
    options: ['Bull', 'Steer', 'Cow', 'Heifer'],
    answer: 'Bull',
    funFact: 'A castrated male is called a steer.',
    source: wiki('Bull'),
    evidence: 'a bull is an intact (i.e., not castrated) adult male'
  },
  {
    id: 'cattle-n05',
    topic: 'Husbandry',
    question: 'What is a female of cattle called once she has had a calf?',
    options: ['Cow', 'Heifer', 'Steer', 'Bull'],
    answer: 'Cow',
    funFact: 'Before her first calf she is called a heifer.',
    source: wiki('Heifer'),
    evidence: 'a young cow before she has had her first calf'
  },
  {
    id: 'cattle-n06',
    topic: 'Husbandry',
    question: 'What is the word for a cow giving birth?',
    options: ['Calving', 'Farrowing', 'Lambing', 'Kidding'],
    answer: 'Calving',
    funFact: 'Cows seek out secluded areas to give birth.',
    source: wiki('Calving'),
    evidence: 'calving, the process of giving birth to a calf'
  },
  {
    id: 'cattle-n07',
    topic: 'Biology',
    question: 'What do cattle mainly eat on pasture?',
    options: ['Grass and other plants', 'Insects and worms', 'Corn grain only', 'Fish meal'],
    answer: 'Grass and other plants',
    funFact: 'Given the choice, they prefer about 70% clover and 30% grass.',
    source: wiki('Cattle'),
    evidence: 'specialized for processing plant material such as grass'
  },
  {
    id: 'cattle-n08',
    topic: 'Husbandry',
    question: 'Dairy cows are bred mainly to produce what?',
    options: ['Milk', 'Wool', 'Honey', 'Eggs'],
    answer: 'Milk',
    funFact: 'The Holstein Friesian is the best-known breed for high milk production.',
    source: wiki('Dairy_cattle'),
    evidence: 'cattle bred for the purpose of producing large quantities of milk'
  },
  {
    id: 'cattle-n09',
    topic: 'Biology',
    question: 'How many compartments make up a cow\'s stomach?',
    options: ['Four', 'One', 'Two', 'Six'],
    answer: 'Four',
    funFact: 'They are the rumen, reticulum, omasum and abomasum, which is why people often say cows have four stomachs.',
    source: wiki('Cattle'),
    evidence: 'one large stomach with four compartments'
  }
];
