// "This day in animal history" items for the welcome-back section. Same rules as trivia: every
// item is a real event with a source, and each `evidence` phrase must appear on the source page
// (`npm run check:history`). Never add an item from memory alone; drop anything no source states.
// `date` is month-day; `year` is when it happened.

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;

export const animalHistory = [
  {
    date: '01-05',
    year: 2007,
    animal: 'cat',
    text: 'Tama, a calico cat, was officially made station master of Kishi Station, on a small railway line in Japan.',
    source: wiki('Tama_(cat)'),
    evidence: ['On January 5, 2007, railway officials officially awarded Tama the title of station master', 'operating officer at Kishi Station']
  },
  {
    date: '01-14',
    year: 1872,
    animal: 'dogs',
    text: 'Greyfriars Bobby died. The little Edinburgh terrier became famous for reportedly guarding his owner\'s grave for 14 years.',
    source: wiki('Greyfriars_Bobby'),
    evidence: ['He died on 14 January 1872', 'reportedly spending 14 years guarding the grave of his owner']
  },
  {
    date: '02-02',
    year: 1925,
    animal: 'dogs',
    text: 'Musher Gunnar Kaasen\'s sled team, led by Balto, carried diphtheria serum into Nome, Alaska, on the last stretch of the famous serum run.',
    source: wiki('1925_serum_run_to_Nome'),
    evidence: ['Kaasen reached Point Safety ahead of schedule on February 2', 'Balto, the lead sled dog on the final stretch into Nome', 'reaching Front Street at 5:30 am']
  },
  {
    date: '02-05',
    year: 1918,
    animal: 'dogs',
    text: 'Stubby, later called the most decorated war dog of World War I, first went into combat in France.',
    source: wiki('Sergeant_Stubby'),
    evidence: ['He entered combat on February 5, 1918, at Chemin des Dames', 'Stubby has been called the most decorated war dog of the Great War']
  },
  {
    date: '02-08',
    year: 1960,
    animal: 'dogs',
    text: 'Rin Tin Tin, the German Shepherd film star, was given a star on the Hollywood Walk of Fame.',
    source: wiki('Rin_Tin_Tin'),
    evidence: ['In a ceremony on February 8, 1960, Rin Tin Tin was honored with a star on the Hollywood Walk of Fame']
  },
  {
    date: '02-22',
    year: 1997,
    animal: 'sheep',
    text: 'Scientists announced Dolly the sheep to the world, the first mammal cloned from an adult cell.',
    source: wiki('Dolly_(sheep)'),
    evidence: ["Dolly's existence was announced to the public on 22 February 1997", 'the first mammal that was cloned from an adult somatic cell']
  },
  {
    date: '03-08',
    year: 1935,
    animal: 'dogs',
    text: 'Hachikō, the Akita who waited at Tokyo\'s Shibuya Station for his owner almost every day for years after the owner died, passed away.',
    source: wiki('Hachikō'),
    evidence: ["From then until his death on March 8, 1935, Hachikō returned to Shibuya Station almost every day to await Ueno's return"]
  },
  {
    date: '03-19',
    year: 1927,
    animal: 'dogs',
    text: 'Balto and his teammates from the 1925 serum run arrived at their new home, the Cleveland Zoo, to a hero\'s welcome.',
    source: wiki('1925_serum_run_to_Nome'),
    evidence: ["On March 19, 1927, the dogs received a hero's welcome as they arrived at their permanent home at the Cleveland Zoo"]
  },
  {
    date: '03-30',
    year: 1970,
    animal: 'horse',
    text: 'Secretariat was born. "Big Red" went on to become the ninth winner of the American Triple Crown.',
    source: wiki('Secretariat_(horse)'),
    evidence: ['On March 30, 1970, at 12:10', 'the ninth winner of the American Triple Crown']
  },
  {
    date: '04-03',
    year: 1860,
    animal: 'horse',
    text: 'The Pony Express began, with relays of riders and horses carrying mail between Missouri and California.',
    source: wiki('Pony_Express'),
    evidence: ['The first eastbound Pony Express trip left Sacramento on April 3, 1860', 'relays of horse-mounted riders between Missouri and California']
  },
  {
    date: '04-15',
    year: 2004,
    animal: 'sheep',
    text: 'Shrek, a Merino sheep in New Zealand who had hidden in caves to avoid being shorn for six years, was found. He was named after the ogre.',
    source: wiki('Shrek_(sheep)'),
    evidence: ['After being discovered on 15 April 2004, he was named after the fictional ogre Shrek', 'avoided being caught and shorn for six years', 'Shrek apparently hid in caves']
  },
  {
    date: '04-24',
    year: 2005,
    animal: 'dogs',
    text: 'Snuppy the Afghan Hound, cloned at Seoul National University in South Korea, was born. He was the first cloned dog.',
    source: wiki('Snuppy'),
    evidence: ['April 24, 2005 – May 2015) was an Afghan Hound, the first dog clone', 'Seoul National University, which cloned Snuppy']
  },
  {
    date: '05-08',
    year: 1877,
    animal: 'dogs',
    text: 'The first Westminster Kennel Club Dog Show was held. It is one of the longest continuously held sporting events in the United States.',
    source: wiki('Westminster_Kennel_Club_Dog_Show'),
    evidence: ['The first Westminster show took place on May 8, 1877', 'continuously held sporting events in the United States']
  },
  {
    date: '05-17',
    year: 1875,
    animal: 'horse',
    text: 'The first Kentucky Derby was run, with 15 three-year-old horses racing in front of about 10,000 people.',
    source: wiki('Kentucky_Derby'),
    evidence: ['On May 17, 1875, in front of an estimated crowd of 10,000 people, a field of 15 three-year-old horses']
  },
  {
    date: '05-20',
    year: 1734,
    animal: 'bees',
    text: 'Anton Janša, a pioneer of beekeeping, was baptised. That is why World Bee Day is celebrated on 20 May.',
    source: wiki('World_Bee_Day'),
    evidence: ['World Bee Day is celebrated on 20 May. On this day Anton Janša, the pioneer of beekeeping, was baptized in 1734']
  },
  {
    date: '05-23',
    year: 1933,
    animal: 'horse',
    text: 'Seabiscuit was foaled in Kentucky. The small racehorse became a symbol of hope during the Great Depression.',
    source: wiki('Seabiscuit'),
    evidence: ['Seabiscuit was foaled on May 23, 1933, at Claiborne Farm in Paris, Kentucky', 'a symbol of hope to many Americans during the Great Depression']
  },
  {
    date: '06-13',
    year: 1919,
    animal: 'birds',
    text: 'Cher Ami, a famous homing pigeon of World War I, died of wounds received in battle.',
    source: wiki('Cher_Ami'),
    evidence: ['Cher Ami died at Fort Monmouth, New Jersey, on June 13, 1919, from the wounds he received in battle']
  },
  {
    date: '06-15',
    year: 1859,
    animal: 'pigs',
    text: 'A pig was shot on San Juan Island, starting the "Pig War" border standoff between the United States and Britain. The only casualty was the pig.',
    source: wiki('Pig_War_(1859)'),
    evidence: [
      'On June 15, 1859, exactly 13 years after the adoption of the Oregon Treaty',
      'there were no human casualties on either side, only a pig',
      'triggered by the shooting of a pig'
    ]
  },
  {
    date: '06-23',
    year: 2006,
    animal: 'turtles',
    text: 'Harriet, a Galápagos tortoise, died at Australia Zoo. Her 175th birthday had been celebrated there the year before.',
    source: wiki('Harriet_(tortoise)'),
    evidence: ['Harriet died in her enclosure on 23 June 2006 of heart failure', 'her much-publicised 175th birthday']
  },
  {
    date: '06-24',
    year: 2012,
    animal: 'turtles',
    text: 'Lonesome George died. He was the last known Pinta Island tortoise.',
    source: wiki('Lonesome_George'),
    evidence: ['June 24, 2012) was a male Pinta Island tortoise']
  },
  {
    date: '06-25',
    year: 1876,
    animal: 'horse',
    text: 'Captain Myles Keogh rode the cavalry horse Comanche at the Battle of the Little Bighorn. Comanche survived the battle.',
    source: wiki('Comanche_(horse)'),
    evidence: ['On June 25, 1876, Captain Keogh rode Comanche at the Battle of the Little Bighorn', 'who survived the battle of the Little Bighorn']
  },
  {
    date: '07-05',
    year: 1996,
    animal: 'sheep',
    text: 'Dolly the sheep was born in Scotland. She had three mothers: one gave the egg, one the DNA, and one carried her.',
    source: wiki('Dolly_(sheep)'),
    evidence: ['Dolly was born on 5 July 1996 and had three mothers']
  },
  {
    date: '08-10',
    year: 1932,
    animal: 'dogs',
    text: 'Rin Tin Tin, the German Shepherd film star, died in Los Angeles.',
    source: wiki('Rin_Tin_Tin'),
    evidence: ['On August 10, 1932, Rin Tin Tin died']
  },
  {
    date: '08-19',
    year: 1960,
    animal: 'dogs',
    text: 'The Soviet space dogs Belka and Strelka were launched, spent a day in space and came home safely.',
    source: wiki('Belka_and_Strelka'),
    evidence: ['spent a day in space aboard Korabl-Sputnik 2 (Sputnik 5), launched on 19 August 1960, before safely returning to Earth']
  },
  {
    date: '09-01',
    year: 1914,
    animal: 'birds',
    text: 'Martha, the last known passenger pigeon, died of old age.',
    source: wiki('Martha_(passenger_pigeon)'),
    evidence: ['September 1, 1914) was a passenger pigeon, the last known of her species', 'on September 1, 1914, of old age']
  },
  {
    date: '09-10',
    year: 1945,
    animal: 'chickens',
    text: 'A Colorado farmer went to fetch a chicken for supper. The beheaded rooster, later called Mike the Headless Chicken, lived on for 18 months.',
    source: wiki('Mike_the_Headless_Chicken'),
    evidence: ['On September 10, 1945, farmer Lloyd Olsen of Fruita, Colorado', 'lived for 18 months after he was beheaded']
  },
  {
    date: '10-04',
    year: 1926,
    animal: 'horse',
    text: 'Phar Lap was foaled in New Zealand. The chestnut gelding is considered one of the greatest racehorses of all time.',
    source: wiki('Phar_Lap'),
    evidence: ['Phar Lap was foaled on 4 October 1926 in Seadown near Timaru', 'one of the greatest race horses of all time']
  },
  {
    date: '10-05',
    year: 1852,
    animal: 'bees',
    text: 'Lorenzo Langstroth was granted a patent for the first movable-frame beehive in America. Langstroth hives are still in common use.',
    source: wiki('Lorenzo_Langstroth'),
    evidence: ['On 5 October 1852, Langstroth received a patent on the first movable frame beehive in America', 'Langstroth hives are still in common use today']
  },
  {
    date: '10-18',
    year: 1963,
    animal: 'cat',
    text: 'Félicette, a Parisian cat, became the first cat launched into space, on a French rocket flight.',
    source: wiki('Félicette'),
    evidence: ['became the first feline launched into space on 18 October 1963 as part of the French space program']
  },
  {
    date: '10-18',
    year: 1995,
    animal: 'horse',
    text: 'Red Rum, the steeplechaser who won Britain\'s Grand National a record three times, died aged 30.',
    source: wiki('Red_Rum'),
    evidence: ['Red Rum died on 18 October 1995, aged 30', 'won the Grand National in 1973, 1974 and 1977']
  },
  {
    date: '11-01',
    year: 1938,
    animal: 'horse',
    text: 'Seabiscuit beat the 1937 Triple Crown winner, War Admiral, by four lengths in a two-horse race at Pimlico.',
    source: wiki('Seabiscuit'),
    evidence: ['On November 1, 1938, Seabiscuit met War Admiral', 'War Admiral, by four lengths in a two-horse special at Pimlico']
  },
  {
    date: '11-01',
    year: 1971,
    animal: 'turtles',
    text: 'A scientist first saw Lonesome George on Pinta Island in the Galápagos. He turned out to be the last of his kind.',
    source: wiki('Lonesome_George'),
    evidence: ['George was first seen on the island of Pinta on November 1, 1971', 'the last known individual of the subspecies']
  },
  {
    date: '11-03',
    year: 1957,
    animal: 'dogs',
    text: 'Laika, a stray dog from Moscow, was launched aboard Sputnik 2 and became the first animal to orbit the Earth.',
    source: wiki('Laika'),
    evidence: ['launched into low orbit on 3 November 1957', 'the first to orbit the Earth']
  },
  {
    date: '11-07',
    year: 1891,
    animal: 'horse',
    text: 'Comanche, the cavalry horse famous for surviving the Battle of the Little Bighorn, died at about 29 years old.',
    source: wiki('Comanche_(horse)'),
    evidence: ['Comanche died of colic on November 7, 1891, believed to be 29 years old']
  },
  {
    date: '11-15',
    year: 2005,
    animal: 'turtles',
    text: 'Harriet the Galápagos tortoise celebrated her 175th birthday at Australia Zoo.',
    source: wiki('Harriet_(tortoise)'),
    evidence: ['On 15 November 2005, her much-publicised 175th birthday was celebrated at Australia Zoo']
  },
  {
    date: '11-18',
    year: 1865,
    animal: 'frogs',
    text: 'Mark Twain\'s jumping frog story, later called "The Celebrated Jumping Frog of Calaveras County", was first published.',
    source: wiki('The_Celebrated_Jumping_Frog_of_Calaveras_County'),
    evidence: ['where it appeared in the November 18, 1865, edition']
  },
  {
    date: '11-19',
    year: 1963,
    animal: 'poultry',
    text: 'President John F. Kennedy spared a Thanksgiving turkey. Presidents now give a turkey a ceremonial "pardon" every year.',
    source: wiki('National_Thanksgiving_Turkey_Presentation'),
    evidence: ['Kennedy spontaneously spared a turkey on November 19, 1963', 'All presidents since Bush have issued a ceremonial "pardon" to the turkey']
  },
  {
    date: '11-24',
    year: 1859,
    animal: 'animals',
    text: 'Charles Darwin\'s "On the Origin of Species" was published, explaining evolution by natural selection.',
    source: wiki('On_the_Origin_of_Species'),
    evidence: ['It was published on 24 November 1859']
  },
  {
    date: '11-28',
    year: 1949,
    animal: 'cat',
    text: 'Simon, the rat-catching ship\'s cat of HMS Amethyst, died in quarantine of an infection linked to his war wounds.',
    source: wiki('Simon_(cat)'),
    evidence: ['died on 28 November 1949 from a complication of the viral infection caused by his war wounds', 'adept at catching and killing rats', 'Whilst in quarantine, Simon contracted a virus']
  },
  {
    date: '12-15',
    year: 1925,
    animal: 'dogs',
    text: 'A statue of the sled dog Balto was unveiled in New York City\'s Central Park.',
    source: wiki('1925_serum_run_to_Nome'),
    evidence: ["A statue of Balto by sculptor Frederick Roth was unveiled in New York City's Central Park during a visit on December 15, 1925"]
  },
  {
    date: '12-22',
    year: 2001,
    animal: 'cat',
    text: 'CC, short for "CopyCat", was born. She was the first cloned pet.',
    source: wiki('CC_(cat)'),
    evidence: ['December 22, 2001 – March 3, 2020), was a brown tabby and white domestic shorthair and the first cloned pet']
  },
  {
    date: '12-28',
    year: 1973,
    animal: 'animals',
    text: 'President Richard Nixon signed the US Endangered Species Act into law.',
    source: wiki('Endangered_Species_Act_of_1973'),
    evidence: ['the ESA was signed into law by President Richard Nixon on December 28, 1973']
  }
];

export default animalHistory;
