// Hand-checked horse trivia. Same rules as the other category files: each question replaces one
// imported question, and its `evidence` phrase must appear on the source page
// (`npm run check:sources -- --category=horse --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const horseQuestions = [
  // Breeds
  {
    id: 'horse-0477',
    replaces: 'imported-horse-0477',
    topic: 'Breeds',
    question: 'Which breed registry is the largest in the world?',
    options: ['American Quarter Horse Association', 'The Jockey Club', 'Arabian Horse Association', 'American Paint Horse Association'],
    answer: 'American Quarter Horse Association',
    funFact: 'It had almost three million living Quarter Horses registered in 2014.',
    source: wiki('American_Quarter_Horse'),
    evidence: 'american quarter horse association is the largest breed registry in the world'
  },
  {
    id: 'horse-0581',
    replaces: 'imported-horse-0581',
    topic: 'Breeds',
    question: 'The American Quarter Horse is named for its speed over what distance?',
    options: ['A quarter mile', 'A half mile', 'A full mile', 'A furlong'],
    answer: 'A quarter mile',
    funFact: 'Quarter Horses excel at short sprints, and are also known for ranch and rodeo work.',
    source: wiki('American_Quarter_Horse'),
    evidence: 'its name is derived from its ability to outrun other horse breeds in races of'
  },
  {
    id: 'horse-0478',
    replaces: 'imported-horse-0478',
    topic: 'Breeds',
    question: 'The Morgan breed traces back to a single foundation stallion. What was his original name?',
    options: ['Figure', 'Messenger', 'Janus', 'Eclipse'],
    answer: 'Figure',
    funFact: 'He was later called Justin Morgan, after his best-known owner, a Vermont schoolteacher.',
    source: wiki('Morgan_horse'),
    evidence: 'tracing back to the foundation sire figure, later named justin morgan'
  },
  {
    id: 'horse-0479',
    replaces: 'imported-horse-0479',
    topic: 'Breeds',
    question: 'Which three imported stallions are the foundation sires of the Thoroughbred?',
    options: [
      'Byerley Turk, Darley Arabian, Godolphin Arabian',
      'Eclipse, Herod, Matchem',
      'Man o\' War, Secretariat, Northern Dancer',
      'Messenger, Figure, Janus'
    ],
    answer: 'Byerley Turk, Darley Arabian, Godolphin Arabian',
    funFact: 'All three came to England in the late 1600s and early 1700s. Eclipse, Herod and Matchem were their descendants.',
    source: wiki('Thoroughbred'),
    evidence: 'the byerley turk (1680s), the darley arabian (1704), and the godolphin arabian (1729)'
  },
  {
    id: 'horse-0480',
    replaces: 'imported-horse-0480',
    topic: 'Breeds',
    question: 'Sampson, later called Mammoth, was probably the tallest horse in recorded history. What breed was he?',
    options: ['Shire', 'Clydesdale', 'Belgian', 'Percheron'],
    answer: 'Shire',
    funFact: 'Foaled in England in 1846, he stood over 21.2 hands, about 7 feet 2 inches at the withers.',
    source: wiki('Shire_horse'),
    evidence: 'in recorded history was probably a shire gelding named sampson'
  },
  {
    id: 'horse-0481',
    replaces: 'imported-horse-0481',
    topic: 'Breeds',
    question: 'Which breed performs at the Spanish Riding School of Vienna?',
    options: ['Lipizzan', 'Andalusian', 'Friesian', 'Lusitano'],
    answer: 'Lipizzan',
    funFact: 'The breed is named for Lipica, a stud farm now in Slovenia that is still active.',
    source: wiki('Lipizzan'),
    evidence: 'the lipizzaner is closely associated with the spanish riding school of vienna'
  },
  {
    id: 'horse-0482',
    replaces: 'imported-horse-0482',
    topic: 'Breeds',
    question: 'Most adult Lipizzans look white. What color are they at birth?',
    options: ['Dark, then lighten with age', 'White from birth', 'Spotted, then fade to white', 'Golden, then darken'],
    answer: 'Dark, then lighten with age',
    funFact: 'Lipizzans are genetically gray: black skin and dark eyes, with a coat that whitens over the years.',
    source: wiki('Lipizzan'),
    evidence: 'gray horses, including lipizzans, are born with a pigmented'
  },
  {
    id: 'horse-0483',
    replaces: 'imported-horse-0483',
    topic: 'Breeds',
    question: 'Which Dutch breed is best known for its all-black coat, long flowing mane and feathered legs?',
    options: ['Friesian', 'Gelderlander', 'Groningen', 'Dutch Warmblood'],
    answer: 'Friesian',
    funFact: 'The breed nearly went extinct more than once.',
    source: wiki('Friesian_horse'),
    evidence: 'this breed is most known for its all-black coat colour'
  },
  {
    id: 'horse-0484',
    replaces: 'imported-horse-0484',
    topic: 'Breeds',
    question: 'What is the Andalusian horse\'s official Spanish name?',
    options: ['Pura Raza Española', 'Puro Sangue Lusitano', 'Pura Sangre Inglés', 'Caballo de Paso Fino'],
    answer: 'Pura Raza Española',
    funFact: 'It means "Pure Spanish Horse," often shortened to PRE.',
    source: wiki('Andalusian_horse'),
    evidence: 'pure spanish horse (pura raza española, abbreviated pre)'
  },
  {
    id: 'horse-0485',
    replaces: 'imported-horse-0485',
    topic: 'Breeds',
    question: 'Which federal agency manages and protects most wild mustang herds in the United States?',
    options: ['Bureau of Land Management', 'National Park Service', 'U.S. Fish and Wildlife Service', 'Department of Agriculture'],
    answer: 'Bureau of Land Management',
    funFact: 'Its role comes from the Wild and Free-Roaming Horses and Burros Act of 1971.',
    source: wiki('Mustang'),
    evidence: 'managed and protected by the u.s. bureau of land management'
  },
  {
    id: 'horse-0486',
    replaces: 'imported-horse-0486',
    topic: 'Breeds',
    question: 'Which breed makes up Anheuser-Busch\'s famous eight-horse hitch teams?',
    options: ['Clydesdale', 'Shire', 'Percheron', 'Belgian'],
    answer: 'Clydesdale',
    funFact: 'The breed is named for the Clydesdale district of Scotland.',
    source: wiki('Clydesdale_horse'),
    evidence: 'known as the budweiser clydesdales'
  },
  {
    id: 'horse-0487',
    replaces: 'imported-horse-0487',
    topic: 'Breeds',
    question: 'Besides a spotted coat, which is a core trait of the Appaloosa?',
    options: ['Striped hooves', 'A curly coat', 'Heavy feathering on the legs', 'A dished face'],
    answer: 'Striped hooves',
    funFact: 'The other core traits are mottled skin and a white sclera around the eye.',
    source: wiki('Appaloosa'),
    evidence: 'mottled skin, striped hooves, and eyes with a white sclera'
  },
  {
    id: 'horse-0488',
    replaces: 'imported-horse-0488',
    topic: 'Breeds',
    question: 'Which Native American people developed the original American spotted horse, the Appaloosa?',
    options: ['Nez Perce', 'Comanche', 'Lakota', 'Cherokee'],
    answer: 'Nez Perce',
    funFact: 'The Appaloosa Horse Club became the breed registry in 1938.',
    source: wiki('Appaloosa'),
    evidence: 'the nez perce people of what today is the united states pacific northwest developed the original american spotted'
  },
  {
    id: 'horse-0489',
    replaces: 'imported-horse-0489',
    topic: 'Breeds',
    question: 'Which pony breed comes from Ireland and is known for its athleticism and good disposition?',
    options: ['Connemara', 'Welsh Mountain', 'Dartmoor', 'Exmoor'],
    answer: 'Connemara',
    funFact: 'Connemaras compete in show jumping, dressage and eventing, and have the stamina for endurance riding.',
    source: wiki('Connemara_pony'),
    evidence: 'is a pony breed originating in ireland'
  },
  {
    id: 'horse-0491',
    replaces: 'imported-horse-0491',
    topic: 'Breeds',
    question: 'Which breed is known for its dished face and high tail carriage?',
    options: ['Arabian', 'Akhal-Teke', 'Thoroughbred', 'Barb'],
    answer: 'Arabian',
    funFact: 'Arabian bloodlines are found in almost every modern breed of riding horse.',
    source: wiki('Arabian_horse'),
    evidence: 'with a distinctive head shape and high tail carriage'
  },
  {
    id: 'horse-0492',
    replaces: 'imported-horse-0492',
    topic: 'Gaits',
    question: 'The Paso Fino\'s gait comes in three speeds: classic fino, paso corto, and which?',
    options: ['Paso largo', 'Paso llano', 'Sobreandando', 'Termino'],
    answer: 'Paso largo',
    funFact: 'The paso largo is fast enough to match a canter, yet still a smooth four-beat lateral gait.',
    source: wiki('Paso_Fino'),
    evidence: 'the paso largo is a fast, lateral, four-beat gait'
  },
  {
    id: 'horse-0494',
    replaces: 'imported-horse-0494',
    topic: 'Breeds',
    question: 'The American Paint Horse was developed from spotted horses with bloodlines of which two breeds?',
    options: ['Quarter Horse and Thoroughbred', 'Arabian and Mustang', 'Appaloosa and Morgan', 'Andalusian and Friesian'],
    answer: 'Quarter Horse and Thoroughbred',
    funFact: '"Pinto" describes a spotted coat in any breed; the Paint is a specific breed with its own registry.',
    source: wiki('American_Paint_Horse'),
    evidence: 'developed from a base of spotted horses with quarter horse and thoroughbred bloodlines'
  },
  {
    id: 'horse-0495',
    replaces: 'imported-horse-0495',
    topic: 'Breeds',
    question: 'The Shetland pony comes from islands belonging to which country?',
    options: ['Scotland', 'Ireland', 'Norway', 'Iceland'],
    answer: 'Scotland',
    funFact: 'The harsh island conditions made Shetlands hardy and strong for their size.',
    source: wiki('Shetland_pony'),
    evidence: 'small, hardy breed of pony from the shetland islands of scotland'
  },
  {
    id: 'horse-0554',
    replaces: 'imported-horse-0554',
    topic: 'Breeds',
    question: 'Which breed is claimed to be the only hypoallergenic horse breed?',
    options: ['American Bashkir Curly', 'Tennessee Walking Horse', 'American Quarter Horse', 'Missouri Fox Trotter'],
    answer: 'American Bashkir Curly',
    funFact: 'It is only a claim: many, but not all, people allergic to horses report fewer reactions to Curlies.',
    source: wiki('American_Bashkir_Curly'),
    evidence: 'curlies are claimed to be the only hypoallergenic horse breed'
  },
  {
    id: 'horse-0555',
    replaces: 'imported-horse-0555',
    topic: 'Breeds',
    question: 'In 1971, stallions of which breed were imported to Denmark to add new blood to the spotted Knabstrupper?',
    options: ['Appaloosa', 'Arabian', 'Friesian', 'Thoroughbred'],
    answer: 'Appaloosa',
    funFact: 'Both breeds can carry the leopard-complex spotting pattern.',
    source: wiki('Knabstrupper'),
    evidence: 'three appaloosa stallions were imported to denmark in the hope of adding new blood to the knabstrupper breed'
  },
  {
    id: 'horse-0556',
    replaces: 'imported-horse-0556',
    topic: 'Breeds',
    question: 'Which breed is nicknamed the "golden horses" for its metallic coat sheen?',
    options: ['Akhal-Teke', 'Haflinger', 'Arabian', 'Lusitano'],
    answer: 'Akhal-Teke',
    funFact: 'It is a Turkmen breed, known for speed and endurance.',
    source: wiki('Akhal-Teke'),
    evidence: 'distinctive metallic sheen which led to their nickname'
  },
  {
    id: 'horse-0557',
    replaces: 'imported-horse-0557',
    topic: 'Breeds',
    question: 'The Lusitano horse comes from which country?',
    options: ['Portugal', 'Spain', 'Italy', 'Brazil'],
    answer: 'Portugal',
    funFact: 'Its name comes from Lusitania, the Roman name for the region. Lusitanos are still used in dressage and bullfighting.',
    source: wiki('Lusitano'),
    evidence: 'is a portuguese horse breed'
  },
  {
    id: 'horse-0558',
    replaces: 'imported-horse-0558',
    topic: 'Breeds',
    question: 'Which is the oldest established horse breed in England?',
    options: ['Cleveland Bay', 'Shire', 'Thoroughbred', 'Hackney'],
    answer: 'Cleveland Bay',
    funFact: 'It is a rare breed; conservation groups in the UK and US consider its population at risk.',
    source: wiki('Cleveland_Bay'),
    evidence: 'it is the oldest established horse breed in england'
  },
  {
    id: 'horse-0559',
    replaces: 'imported-horse-0559',
    topic: 'Breeds',
    question: 'The Standardbred is best known for which sport?',
    options: ['Harness racing', 'Barrel racing', 'Show jumping', 'Polo'],
    answer: 'Harness racing',
    funFact: 'Standardbreds race at either a trot or a pace.',
    source: wiki('Standardbred'),
    evidence: 'best known for its ability in harness racing'
  },
  {
    id: 'horse-0583',
    replaces: 'imported-horse-0583',
    topic: 'Breeds',
    question: 'Which of these is a warmblood breed?',
    options: ['Hanoverian', 'Arabian', 'Shire', 'Thoroughbred'],
    answer: 'Hanoverian',
    funFact: 'Warmbloods came from crossing European carriage and war horses with lighter hot-blooded horses. Arabians and Thoroughbreds are hot-bloods; the Shire is a cold-blood.',
    source: wiki('Horse'),
    evidence: 'breeds, such as the trakehner or hanoverian, developed when european carriage and war horses'
  },

  // Coat color
  {
    id: 'horse-0496',
    replaces: 'imported-horse-0496',
    topic: 'Coat color',
    question: 'In horse coat genetics, which base color is fully red with no black?',
    options: ['Chestnut', 'Bay', 'Buckskin', 'Black'],
    answer: 'Chestnut',
    funFact: 'Chestnut and black are the two base colors; bay adds black points to a red body. Other colors come from genes acting on these.',
    source: wiki('Equine_coat_color'),
    evidence: 'chestnut, which is fully red'
  },
  {
    id: 'horse-0497',
    replaces: 'imported-horse-0497',
    topic: 'Coat color',
    question: 'How many copies of the gray allele does a horse need to turn gray?',
    options: ['One', 'Two', 'Three', 'None; it comes with age alone'],
    answer: 'One',
    funFact: 'Gray is dominant. Gray horses are born another color and lighten as they age, often to pure white.',
    source: wiki('Gray_horse'),
    evidence: 'a horse needs only one copy of the gray allele'
  },
  {
    id: 'horse-0498',
    replaces: 'imported-horse-0498',
    topic: 'Coat color',
    question: 'Which pinto pattern usually has white crossing the back between the withers and the tail?',
    options: ['Tobiano', 'Frame overo', 'Splashed white', 'Sabino'],
    answer: 'Tobiano',
    funFact: 'In overo patterns, by contrast, the white usually does not cross the back.',
    source: wiki('Tobiano'),
    evidence: 'white crossing the back between the withers and the dock of the tail'
  },
  {
    id: 'horse-0499',
    replaces: 'imported-horse-0499',
    topic: 'Coat color',
    question: 'If two frame overo carriers are bred together, what is the chance of a foal with lethal white syndrome?',
    options: ['25%', '50%', '10%', '75%'],
    answer: '25%',
    funFact: 'Affected foals are born with a nonfunctioning colon and die within days, so breeders DNA-test for the gene.',
    source: wiki('Overo'),
    evidence: 'there is a 25% chance the foal will have lethal white syndrome'
  },

  // Racing
  {
    id: 'horse-0493',
    replaces: 'imported-horse-0493',
    topic: 'Racing',
    question: 'Every Kentucky Derby runner belongs to which breed?',
    options: ['Thoroughbred', 'Quarter Horse', 'Standardbred', 'Arabian'],
    answer: 'Thoroughbred',
    funFact: 'The Derby is for three-year-olds, run over 1¼ miles at Churchill Downs.',
    source: wiki('Kentucky_Derby'),
    evidence: 'the race is run by three-year-old thoroughbreds'
  },
  {
    id: 'horse-0553',
    replaces: 'imported-horse-0553',
    topic: 'Racing',
    question: 'When is the Kentucky Derby held each year?',
    options: ['The first Saturday in May', 'The last Saturday in May', 'The Fourth of July', 'The first Saturday in June'],
    answer: 'The first Saturday in May',
    funFact: 'It lasts about two minutes, hence the nickname "the most exciting two minutes in sports."',
    source: wiki('Kentucky_Derby'),
    evidence: 'held annually on the first saturday in may'
  },
  {
    id: 'horse-0588',
    replaces: 'imported-horse-0588',
    topic: 'Racing',
    question: 'Which three races make up the American Triple Crown?',
    options: [
      'Kentucky Derby, Preakness Stakes, Belmont Stakes',
      'Kentucky Derby, Breeders\' Cup Classic, Travers Stakes',
      'Preakness Stakes, Belmont Stakes, Pegasus World Cup',
      'Kentucky Oaks, Santa Anita Derby, Belmont Stakes'
    ],
    answer: 'Kentucky Derby, Preakness Stakes, Belmont Stakes',
    funFact: 'All three are for three-year-old Thoroughbreds.',
    source: wiki('Triple_Crown_of_Thoroughbred_Racing_(United_States)'),
    evidence: 'consisting of the kentucky derby, preakness stakes, and belmont stakes'
  },
  {
    id: 'horse-0505',
    replaces: 'imported-horse-0505',
    topic: 'Racing',
    question: 'How many horses have won the American Triple Crown?',
    options: ['13', '9', '11', '17'],
    answer: '13',
    funFact: 'The first was Sir Barton in 1919; the most recent was Justify in 2018.',
    source: wiki('Triple_Crown_of_Thoroughbred_Racing_(United_States)'),
    evidence: 'only 13 horses have ever won the triple crown'
  },
  {
    id: 'horse-0502',
    replaces: 'imported-horse-0502',
    topic: 'Racing',
    question: 'By how many lengths did Secretariat win the 1973 Belmont Stakes?',
    options: ['31', '8', '12', '21'],
    answer: '31',
    funFact: 'His time of 2:24 flat is still the fastest 1½ miles on dirt.',
    source: wiki('Secretariat_(horse)'),
    evidence: 'which he won by 31 lengths'
  },
  {
    id: 'horse-0503',
    replaces: 'imported-horse-0503',
    topic: 'Racing',
    question: 'Which horse won the American Triple Crown in 2015, ending a 37-year wait?',
    options: ['American Pharoah', 'Justify', 'California Chrome', 'Big Brown'],
    answer: 'American Pharoah',
    funFact: 'He was the 12th Triple Crown winner and also won the Breeders\' Cup Classic that year.',
    source: wiki('American_Pharoah'),
    evidence: 'he was the 12th triple crown winner in history'
  },
  {
    id: 'horse-0504',
    replaces: 'imported-horse-0504',
    topic: 'Racing',
    question: 'Which horse won the 2018 Triple Crown and retired undefeated?',
    options: ['Justify', 'American Pharoah', 'Seattle Slew', 'Affirmed'],
    answer: 'Justify',
    funFact: 'Like American Pharoah, he was trained by Bob Baffert.',
    source: wiki('Justify_(horse)'),
    evidence: 'he was retired, undefeated, several weeks after the belmont'
  },
  {
    id: 'horse-0506',
    replaces: 'imported-horse-0506',
    topic: 'Racing',
    question: 'Which racehorse became a symbol of hope for many Americans during the Great Depression?',
    options: ['Seabiscuit', 'Man o\' War', 'War Admiral', 'Phar Lap'],
    answer: 'Seabiscuit',
    funFact: 'His underdog story has been told in several books and films.',
    source: wiki('Seabiscuit'),
    evidence: 'a symbol of hope to many americans during the great depression'
  },
  {
    id: 'horse-0507',
    replaces: 'imported-horse-0507',
    topic: 'Racing',
    question: 'Barbaro won the 2006 Kentucky Derby, then shattered his leg two weeks later in which race?',
    options: ['Preakness Stakes', 'Belmont Stakes', 'Breeders\' Cup Classic', 'Travers Stakes'],
    answer: 'Preakness Stakes',
    funFact: 'He survived surgery but later developed laminitis and was euthanized in January 2007.',
    source: wiki('Barbaro_(horse)'),
    evidence: 'shattered his leg two weeks later in the preakness stakes'
  },
  {
    id: 'horse-0508',
    replaces: 'imported-horse-0508',
    topic: 'Racing',
    question: 'In 1964, which horse became the first Canadian-bred winner of the Kentucky Derby?',
    options: ['Northern Dancer', 'Native Dancer', 'Secretariat', 'Seabiscuit'],
    answer: 'Northern Dancer',
    funFact: 'He became one of the most successful sires of the 20th century.',
    source: wiki('Northern_Dancer'),
    evidence: 'became the first canadian-bred horse to win the kentucky derby'
  },
  {
    id: 'horse-0512',
    replaces: 'imported-horse-0512',
    topic: 'Racing',
    question: 'Funny Cide, winner of the 2003 Kentucky Derby, was the first Derby winner bred in which state?',
    options: ['New York', 'California', 'Florida', 'Maryland'],
    answer: 'New York',
    funFact: 'He also won the Preakness Stakes that year.',
    source: wiki('Funny_Cide'),
    evidence: 'he was the first new york-bred horse to win the kentucky derby'
  },
  {
    id: 'horse-0589',
    replaces: 'imported-horse-0589',
    topic: 'Racing',
    question: 'In a claiming race, what is true of every horse entered?',
    options: ['It is for sale at a set price', 'It must never have won a race', 'It must be owned by its trainer', 'It races without a jockey'],
    answer: 'It is for sale at a set price',
    funFact: 'Until 1924 they were called selling races.',
    source: wiki('Claiming_race'),
    evidence: 'the horses are all for sale at a specified claiming price'
  },
  {
    id: 'horse-0547',
    replaces: 'imported-horse-0547',
    topic: 'History',
    question: 'According to Pausanias, when was chariot racing added to the ancient Olympic Games?',
    options: ['680 BC', '776 BC', '490 BC', 'AD 393'],
    answer: '680 BC',
    funFact: 'The games were extended from one day to two to make room for the chariot races.',
    source: wiki('Chariot_racing'),
    evidence: 'chariot races were added only from 680 bc'
  },

  // Famous horses and history
  {
    id: 'horse-0509',
    replaces: 'imported-horse-0509',
    topic: 'Famous horses',
    question: 'Who wrote the 1877 novel Black Beauty?',
    options: ['Anna Sewell', 'Marguerite Henry', 'Enid Bagnold', 'Walter Farley'],
    answer: 'Anna Sewell',
    funFact: 'The story is told in the first person by the horse himself.',
    source: wiki('Black_Beauty'),
    evidence: '1877 novel by english author anna sewell'
  },
  {
    id: 'horse-0510',
    replaces: 'imported-horse-0510',
    topic: 'Famous horses',
    question: 'What is the name of Zorro\'s black horse?',
    options: ['Tornado', 'Silver', 'Trigger', 'Scout'],
    answer: 'Tornado',
    funFact: 'Silver belonged to the Lone Ranger, Trigger to Roy Rogers, and Scout to Tonto.',
    source: wiki('Zorro'),
    evidence: 'a black horse named tornado'
  },
  {
    id: 'horse-0511',
    replaces: 'imported-horse-0511',
    topic: 'Famous horses',
    question: 'Bucephalus was the horse of which ancient leader?',
    options: ['Alexander the Great', 'Julius Caesar', 'Hannibal', 'Genghis Khan'],
    answer: 'Alexander the Great',
    funFact: 'He is described as black with a large white star on his brow.',
    source: wiki('Bucephalus'),
    evidence: 'was the horse of alexander the great'
  },
  {
    id: 'horse-0513',
    replaces: 'imported-horse-0513',
    topic: 'Famous horses',
    question: 'In the film Spirit: Stallion of the Cimarron, what kind of horse is Spirit?',
    options: ['Kiger Mustang', 'Arabian', 'Appaloosa', 'Quarter Horse'],
    answer: 'Kiger Mustang',
    funFact: 'Matt Damon voices Spirit\'s narration.',
    source: wiki('Spirit:_Stallion_of_the_Cimarron'),
    evidence: 'spirit, a kiger mustang stallion',
    // Kiger Mustang is itself a breed, so breed-name distractors are fair.
    allowChecks: ['off-topic-distractor']
  },
  {
    id: 'horse-0549',
    replaces: 'imported-horse-0549',
    topic: 'History',
    question: 'The cavalry horse Comanche is famous for surviving which 1876 battle?',
    options: ['Little Bighorn', 'Wounded Knee', 'Gettysburg', 'The Alamo'],
    answer: 'Little Bighorn',
    funFact: 'He is often called the sole survivor of Custer\'s detachment, but that is a legend; other horses survived too.',
    source: wiki('Comanche_(horse)'),
    evidence: 'survived the battle of the little bighorn'
  },
  {
    id: 'horse-0548',
    replaces: 'imported-horse-0548',
    topic: 'History',
    question: 'What did Eadweard Muybridge\'s 1878 photographs, The Horse in Motion, show?',
    options: [
      'All four feet are sometimes off the ground at once',
      'One foot always stays on the ground',
      'The front legs always land together',
      'A gallop has only two beats'
    ],
    answer: 'All four feet are sometimes off the ground at once',
    funFact: 'The work was commissioned by Leland Stanford. Many earlier paintings showed galloping horses with legs stretched out, which never happens.',
    source: wiki('The_Horse_in_Motion'),
    evidence: 'the photographs showed that all four feet are sometimes simultaneously off the ground'
  },
  {
    id: 'horse-0545',
    replaces: 'imported-horse-0545',
    topic: 'History',
    question: 'When did horses die out in North America before Europeans brought them back?',
    options: ['10,000 to 7,600 years ago', '1 million to 900,000 years ago', '3,000 to 2,000 years ago', '800 to 500 years ago'],
    answer: '10,000 to 7,600 years ago',
    funFact: 'The reasons for this extinction are still not fully known.',
    source: wiki('Horse'),
    evidence: 'between 10,000 and 7,600 years ago, the horse became extinct in north america'
  },
  {
    id: 'horse-0570',
    replaces: 'imported-horse-0570',
    topic: 'Biology',
    question: 'What is the typical life expectancy of a modern domestic horse?',
    options: ['25 to 30 years', '10 to 15 years', '15 to 20 years', '40 to 50 years'],
    answer: '25 to 30 years',
    funFact: 'A few horses live into their 40s.',
    source: wiki('Horse'),
    evidence: 'has a life expectancy of 25 to 30 years'
  },
  {
    id: 'horse-0572',
    replaces: 'imported-horse-0572',
    topic: 'Famous horses',
    question: 'Old Billy is the oldest horse on verifiable record. How old did he live to be?',
    options: ['62', '45', '51', '74'],
    answer: '62',
    funFact: 'He was a 19th-century English barge horse.',
    source: wiki('Horse'),
    evidence: 'a 19th-century horse that lived to the age of 62'
  },

  // Biology and senses
  {
    id: 'horse-0563',
    replaces: 'imported-horse-0563',
    topic: 'Biology',
    question: 'Can horses vomit?',
    options: ['No', 'Yes, as easily as dogs', 'Only as foals', 'Only when sedated'],
    answer: 'No',
    funFact: 'That is one reason digestive problems can quickly turn into colic.',
    source: wiki('Horse'),
    evidence: 'horses cannot vomit, so digestion problems can quickly cause colic'
  },
  {
    id: 'horse-0564',
    replaces: 'imported-horse-0564',
    topic: 'Biology',
    question: 'About how long is a horse\'s digestive system?',
    options: ['About 100 feet (30 m)', 'About 10 feet (3 m)', 'About 30 feet (9 m)', 'About 300 feet (90 m)'],
    answer: 'About 100 feet (30 m)',
    funFact: 'Most of that length is intestines.',
    source: wiki('Equine_anatomy'),
    evidence: 'the digestive system of a horse is about 30 m (100 ft) long'
  },
  {
    id: 'horse-0565',
    replaces: 'imported-horse-0565',
    topic: 'Senses',
    question: 'Because its eyes are on the sides of its head, a horse\'s range of vision covers more than how many degrees?',
    options: ['350', '180', '270', '120'],
    answer: '350',
    funFact: 'Only about 65 degrees of that is binocular vision; the rest is monocular.',
    source: wiki('Horse'),
    evidence: 'horses have a range of vision of more than 350'
  },
  {
    id: 'horse-0568',
    replaces: 'imported-horse-0568',
    topic: 'Senses',
    question: 'What kind of color vision do horses have?',
    options: ['Dichromatic (two-color)', 'Trichromatic, like most humans', 'None; they see only gray', 'Tetrachromatic, like many birds'],
    answer: 'Dichromatic (two-color)',
    funFact: 'It is somewhat like red-green color blindness in humans.',
    source: wiki('Horse'),
    evidence: 'they have two-color, or dichromatic vision'
  },
  {
    id: 'horse-0536',
    replaces: 'imported-horse-0536',
    topic: 'Biology',
    question: 'What lets a horse doze while standing without collapsing?',
    options: ['The stay apparatus in its legs', 'A locking joint in its neck', 'Resting one brain half at a time', 'Leaning its weight on its tail'],
    answer: 'The stay apparatus in its legs',
    funFact: 'Horses can sleep standing or lying down, and sleep better in groups where some keep watch.',
    source: wiki('Horse'),
    evidence: 'in their legs, allowing them to doze without collapsing'
  },
  {
    id: 'horse-0578',
    replaces: 'imported-horse-0578',
    topic: 'Breeding',
    question: 'About how long is a mare\'s pregnancy?',
    options: ['About 340 days (11 months)', 'About 150 days (5 months)', 'About 280 days (9 months)', 'About 450 days (15 months)'],
    answer: 'About 340 days (11 months)',
    funFact: 'The normal range is about 320 to 370 days, and twins are rare.',
    source: wiki('Horse'),
    evidence: 'gestation lasts approximately 340 days'
  },
  {
    id: 'horse-0586',
    replaces: 'imported-horse-0586',
    topic: 'Breeding',
    question: 'Which breeding method has a veterinarian inseminate the mare instead of a stallion covering her?',
    options: ['Artificial insemination', 'Live cover', 'Pasture breeding', 'Hand breeding'],
    answer: 'Artificial insemination',
    funFact: 'In live cover, the mare is brought to the stallion and bred in the breeding shed.',
    source: wiki('Horse_breeding'),
    evidence: 'the mare is inseminated by a veterinarian or an equine reproduction manager'
  },
  {
    id: 'horse-0550',
    replaces: 'imported-horse-0550',
    topic: 'Biology',
    question: 'Under the common international definition, a pony is a horse up to what height at the withers?',
    options: ['14.2 hands', '12 hands', '15.3 hands', '16 hands'],
    answer: '14.2 hands',
    funFact: '14.2 hands is 58 inches, or 147 cm.',
    source: wiki('Pony'),
    evidence: 'a horse that measures up to 14.2 hands'
  },
  {
    id: 'horse-0571',
    replaces: 'imported-horse-0571',
    topic: 'Biology',
    question: 'A "hand," used to measure a horse\'s height, equals how much?',
    options: ['4 inches', '3 inches', '6 inches', '12 inches'],
    answer: '4 inches',
    funFact: 'Hands use base 4, so 15.3 hands is 15 hands plus 3 inches, and the next height up is 16.0.',
    source: wiki('Hand_(unit)'),
    evidence: 'standardized to four inches'
  },

  // Health and care
  {
    id: 'horse-0540',
    replaces: 'imported-horse-0540',
    topic: 'Health',
    question: 'Among domesticated horses, what is the leading cause of premature death?',
    options: ['Colic', 'Laminitis', 'Strangles', 'Tetanus'],
    answer: 'Colic',
    funFact: 'Common signs are pawing, looking at the flank, and rolling.',
    source: wiki('Horse_colic'),
    evidence: 'colic is the leading cause of premature death'
  },
  {
    id: 'horse-0543',
    replaces: 'imported-horse-0543',
    topic: 'Health',
    question: 'Which is a classic sign of laminitis?',
    options: ['Increased digital pulses and hot hooves', 'A dry cough', 'Nasal discharge', 'Hair loss along the mane'],
    answer: 'Increased digital pulses and hot hooves',
    funFact: 'Foot tenderness can progress until the horse cannot walk.',
    source: wiki('Laminitis'),
    evidence: 'increased digital pulses, and increased temperature in the hooves'
  },
  {
    id: 'horse-0529',
    replaces: 'imported-horse-0529',
    topic: 'Health',
    question: 'Bedding made from shavings of which tree can trigger laminitis?',
    options: ['Black walnut', 'Pine', 'Aspen', 'Spruce'],
    answer: 'Black walnut',
    funFact: 'Black walnut contains juglone, a compound toxic to many plants as well.',
    source: wiki('Laminitis'),
    evidence: 'contact with black walnut shavings'
  },
  {
    id: 'horse-0528',
    replaces: 'imported-horse-0528',
    topic: 'Health',
    question: 'On the Henneke body condition scale of 1 to 9, what range is ideal for most horses?',
    options: ['4 to 6', '1 to 3', '6 to 8', '7 to 9'],
    answer: '4 to 6',
    funFact: '1 means poor and 9 means extremely fat. The score uses both sight and touch.',
    source: wiki('Henneke_horse_body_condition_scoring_system'),
    evidence: 'the ideal range for most horses is from 4 to 6'
  },
  {
    id: 'horse-0524',
    replaces: 'imported-horse-0524',
    topic: 'Health',
    question: 'Many horses need their teeth floated (rasped) about how often?',
    options: ['Once every 12 months', 'Once a week', 'Once every 5 years', 'Once in a lifetime'],
    answer: 'Once every 12 months',
    funFact: 'Horse teeth keep erupting and wear unevenly, leaving sharp points.',
    source: wiki('Horse_teeth'),
    evidence: 'many horses require floating (or rasping) of teeth once every 12 months'
  },
  {
    id: 'horse-0532',
    replaces: 'imported-horse-0532',
    topic: 'Health',
    question: 'What is "stocking up" in a horse\'s legs?',
    options: ['Swelling without lameness', 'A fracture of the cannon bone', 'Cracking of the hoof wall', 'A torn tendon'],
    answer: 'Swelling without lameness',
    funFact: 'It is a relatively minor problem compared with most leg injuries.',
    source: wiki('Limbs_of_the_horse'),
    evidence: 'stocking up, which causes swelling without lameness'
  },

  // Gaits and riding
  {
    id: 'horse-0514',
    replaces: 'imported-horse-0514',
    topic: 'Gaits',
    question: 'Gaited horses perform an ambling gait. How many beats does an ambling gait have?',
    options: ['Four', 'Two', 'Three', 'Six'],
    answer: 'Four',
    funFact: 'Ambling gaits are smoother to ride than the two-beat trot or pace.',
    source: wiki('Ambling_gait'),
    evidence: 'is any of several four-beat intermediate horse gaits'
  },
  {
    id: 'horse-0516',
    replaces: 'imported-horse-0516',
    topic: 'Gaits',
    question: 'What is the Peruvian Paso\'s outward-swinging front-leg action called?',
    options: ['Termino', 'Piaffe', 'Passage', 'Sobreandando'],
    answer: 'Termino',
    funFact: 'The swing starts at the shoulder, and the lower front legs roll outward.',
    source: wiki('Peruvian_Paso'),
    evidence: 'a unique trait of the peruvian gait is termino'
  },
  {
    id: 'horse-0584',
    replaces: 'imported-horse-0584',
    topic: 'Gaits',
    question: 'How many beats does a canter have?',
    options: ['Three', 'Two', 'Four', 'Six'],
    answer: 'Three',
    funFact: 'The walk has four beats and the trot two.',
    source: wiki('Horse_gait'),
    evidence: 'the canter is a controlled three-beat gait'
  },
  {
    id: 'horse-0585',
    replaces: 'imported-horse-0585',
    topic: 'Gaits',
    question: 'In the two-beat trot, which legs move forward together?',
    options: ['Diagonal pairs', 'Both legs on the same side', 'Both front legs, then both hind legs', 'One leg at a time'],
    answer: 'Diagonal pairs',
    funFact: 'Same-side pairs moving together is a different gait, the pace.',
    source: wiki('Trot'),
    evidence: 'the diagonal pairs of legs move forward at the same time'
  },
  {
    id: 'horse-0551',
    replaces: 'imported-horse-0551',
    topic: 'Riding',
    question: 'What did Italian cavalry officer Federico Caprilli revolutionize?',
    options: ['The jumping seat', 'The racing saddle', 'The double bridle', 'The dressage test'],
    answer: 'The jumping seat',
    funFact: 'His "forward seat" is the basis of the position used by jumping riders today.',
    source: wiki('Federico_Caprilli'),
    evidence: 'who revolutionized the jumping seat'
  },

  // Sport
  {
    id: 'horse-0517',
    replaces: 'imported-horse-0517',
    topic: 'Sport',
    question: 'Which are the current Olympic equestrian disciplines?',
    options: [
      'Dressage, eventing and show jumping',
      'Dressage, reining and polo',
      'Show jumping, endurance and vaulting',
      'Eventing, driving and racing'
    ],
    answer: 'Dressage, eventing and show jumping',
    funFact: 'Individual and team medals are awarded in each.',
    source: wiki('Equestrian_events_at_the_Summer_Olympics'),
    evidence: 'the olympic equestrian disciplines are dressage, eventing, and show jumping'
  },
  {
    id: 'horse-0518',
    replaces: 'imported-horse-0518',
    topic: 'Sport',
    question: 'What is the highest level of modern dressage competition?',
    options: ['Grand Prix', 'Prix St. Georges', 'Intermediate I', 'Fourth Level'],
    answer: 'Grand Prix',
    funFact: 'Grand Prix tests include the piaffe and passage.',
    source: wiki('Dressage'),
    evidence: 'the highest level of modern competition is at the grand prix level'
  },
  {
    id: 'horse-0577',
    replaces: 'imported-horse-0577',
    topic: 'Sport',
    question: 'In Grand Prix dressage, what is the piaffe?',
    options: ['A collected, elevated trot in place', 'A canter on the opposite lead', 'A sideways walk', 'A sliding stop'],
    answer: 'A collected, elevated trot in place',
    funFact: 'The passage is its forward-moving cousin: a very collected trot with long moments of suspension.',
    source: wiki('Dressage'),
    evidence: 'piaffe a calm, composed, collected, and elevated trot in place'
  },
  {
    id: 'horse-0519',
    replaces: 'imported-horse-0519',
    topic: 'Sport',
    question: 'Eventing was previously known by what name?',
    options: ['Combined training', 'Hunter pacing', 'Ride and tie', 'Steeplechasing'],
    answer: 'Combined training',
    funFact: 'It is also called horse trials, and tests dressage, cross-country and show jumping.',
    source: wiki('Eventing'),
    evidence: 'eventing was previously known as combined training'
  },
  {
    id: 'horse-0520',
    replaces: 'imported-horse-0520',
    topic: 'Sport',
    question: 'In reining, which movement must come right before a sliding stop?',
    options: ['A rundown', 'A spin', 'A rollback', 'A flying lead change'],
    answer: 'A rundown',
    funFact: 'Reining patterns combine circles, spins and stops, all at the lope.',
    source: wiki('Reining'),
    evidence: 'a rundown is a required movement prior to a sliding stop'
  },
  {
    id: 'horse-0522',
    replaces: 'imported-horse-0522',
    topic: 'Sport',
    question: 'How long is the Tevis Cup endurance ride?',
    options: ['100 miles', '25 miles', '50 miles', '250 miles'],
    answer: '100 miles',
    funFact: 'It crosses the Sierra Nevada and has run every year since 1955 except a few cancellations.',
    source: wiki('Tevis_Cup'),
    evidence: 'is a 100-mile endurance ride'
  },
  {
    id: 'horse-0552',
    replaces: 'imported-horse-0552',
    topic: 'Sport',
    question: 'What is the FEI in horse sport?',
    options: [
      'The international governing body of equestrian sports',
      'The U.S. registry for sport horses',
      'The world body for horse racing',
      'An international vets\' association'
    ],
    answer: 'The international governing body of equestrian sports',
    funFact: 'FEI stands for Fédération Équestre Internationale.',
    source: wiki('International_Federation_for_Equestrian_Sports'),
    evidence: 'is the international governing body of equestrian sports'
  },
  {
    id: 'horse-0582',
    replaces: 'imported-horse-0582',
    topic: 'Sport',
    question: 'Which organization is the national governing body for most equestrian sports in the United States?',
    options: ['USEF', 'The Jockey Club', 'AQHA', 'American Horse Council'],
    answer: 'USEF',
    funFact: 'The United States Equestrian Federation, or US Equestrian, began in 1917.',
    source: wiki('United_States_Equestrian_Federation'),
    evidence: 'is the national governing body for most equestrian sports in the united states'
  },
  {
    id: 'horse-0561',
    replaces: 'imported-horse-0561',
    topic: 'Sport',
    question: 'British dressage rider Charlotte Dujardin rose to fame on which horse?',
    options: ['Valegro', 'Totilas', 'Gigolo', 'Big Star'],
    answer: 'Valegro',
    funFact: 'Valegro is a Dutch Warmblood gelding, not a Hanoverian as is sometimes said.',
    source: wiki('Charlotte_Dujardin'),
    evidence: 'develop valegro, a novice dutch warmblood gelding'
  }
];

// Imported questions that were dropped rather than rewritten, with the reason.
export const retiredImportIds = {
  'imported-horse-0490': 'Heaviest breed depends on the source and the individual.',
  'imported-horse-0500': 'No scriptable source found.',
  'imported-horse-0501': 'Informal slang with no checkable source.',
  'imported-horse-0515': 'The DMRT3 gene is not found in every gaited breed; claim overstated.',
  'imported-horse-0521': 'No scriptable source found.',
  'imported-horse-0523': 'Yes/no question with no single factual answer.',
  'imported-horse-0525': 'Vaccine guidance varies; no scriptable source.',
  'imported-horse-0526': 'Vital-sign ranges vary between sources.',
  'imported-horse-0527': 'Vital-sign ranges vary between sources.',
  'imported-horse-0530': 'Care advice with no single factual answer.',
  'imported-horse-0531': 'Definition question that gives the answer away.',
  'imported-horse-0533': 'No scriptable source found.',
  'imported-horse-0534': 'List question with several correct answers.',
  'imported-horse-0535': 'List question with several correct answers.',
  'imported-horse-0537': 'Merged into horse-0543 (laminitis signs).',
  'imported-horse-0538': 'No scriptable source found.',
  'imported-horse-0539': 'Definition question that gives the answer away.',
  'imported-horse-0541': 'Merged into horse-0540 (colic).',
  'imported-horse-0542': 'No scriptable source found.',
  'imported-horse-0544': 'No scriptable source found.',
  'imported-horse-0546': 'Oldest breed is disputed.',
  'imported-horse-0560': 'No scriptable source found.',
  'imported-horse-0562': 'No scriptable source found.',
  'imported-horse-0566': 'Figure could not be confirmed.',
  'imported-horse-0567': 'Opinion question; no source ranks the senses.',
  'imported-horse-0569': 'Several possible meanings; no single answer.',
  'imported-horse-0573': 'Riding jargon with no single factual answer.',
  'imported-horse-0574': 'Safety technique; no scriptable source.',
  'imported-horse-0575': 'Riding jargon with no single factual answer.',
  'imported-horse-0576': 'No scriptable source found.',
  'imported-horse-0579': 'Timeline could not be confirmed.',
  'imported-horse-0580': 'No scriptable source found.',
  'imported-horse-0587': 'Definition question that gives the answer away.',
  'imported-horse-0590': 'Informal term with no checkable source.',
  'imported-horse-0591': 'Definition question that gives the answer away.',
  'imported-horse-0592': 'No scriptable source found.'
};
