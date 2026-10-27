// Hand-checked "Which animal matches this description?" clues, one per breed. The clue also
// feeds the Identify & Cross crossword, so it never names the breed. Wrong options are
// look-alike breeds, and `evidence` must appear on the source page
// (`npm run check:sources -- --rewritten`).

const wiki = (title) => `https://en.wikipedia.org/wiki/${title}`;
const wobp = (morph) => `https://www.worldofballpythons.com/morphs/${morph}/`;

export const breedClues = {
  // Dogs
  'norwegian-lundehund': {
    clue: 'A small spitz-type breed developed to hunt puffins on cliffs and in caves, which normally has six toes on each foot.',
    distractors: ['Norwegian Elkhound', 'Finnish Spitz', 'Icelandic Sheepdog'],
    funFact: 'The breed nearly died out in the 1960s; preservation work has gone on ever since.',
    source: wiki('Norwegian_Lundehund'),
    evidence: 'the lundehund normally has six toes'
  },
  'belgian-malinois': {
    clue: 'The short-haired fawn variety of a herding breed whose other varieties are the Groenendael, Laekenois and Tervueren.',
    distractors: ['Dutch Shepherd', 'German Shepherd Dog', 'Australian Kelpie'],
    funFact: 'The American Kennel Club treats the four Belgian Shepherd varieties as separate breeds.',
    source: wiki('Belgian_Shepherd'),
    evidence: 'the short-haired fawn malinois'
  },
  'border-collie': {
    clue: 'A British sheep-herding breed that competes with success in sheepdog trials; some claim it is the most intelligent dog breed.',
    distractors: ['Rough Collie', 'Shetland Sheepdog', 'Australian Shepherd'],
    funFact: 'It comes from the region along the border between England and Scotland.',
    source: wiki('Border_Collie'),
    evidence: 'some have claimed that it is the most intelligent breed of dog'
  },
  'german-shepherd': {
    clue: 'Developed from 1899 by Max von Stephanitz from traditional herding stock, and known in Britain as the Alsatian.',
    distractors: ['Belgian Malinois', 'Dutch Shepherd', 'Czechoslovakian Wolfdog'],
    funFact: 'Bred to herd sheep, it has since done disability assistance, search-and-rescue, police and military work.',
    source: wiki('German_Shepherd'),
    evidence: 'it was developed in germany from 1899 by max von stephanitz'
  },
  'australian-cattle-dog': {
    clue: 'A herding breed developed for droving herds over long distances across rough terrain, coming in "red" or "blue" and bred to herd by biting.',
    distractors: ['Australian Kelpie', 'Border Collie', 'Australian Shepherd'],
    funFact: 'Its most common hereditary health problems are deafness and progressive blindness.',
    source: wiki('Australian_Cattle_Dog'),
    evidence: 'developed in australia for droving cattle over long distances across rough terrain'
  },
  'doberman-pinscher': {
    clue: 'A working breed first bred around 1890 in Thuringia by a tax collector, whose surname it carries.',
    distractors: ['German Pinscher', 'Rottweiler', 'Manchester Terrier'],
    funFact: 'Outside Canada and the US it is called the Dobermann, after its creator Louis Dobermann.',
    source: wiki('Dobermann'),
    evidence: 'originally bred in thuringia in about 1890 by louis dobermann, a tax collector'
  },
  newfoundland: {
    clue: 'A large working breed first kept by fishermen, which excels at water rescue thanks to webbed paws and a thick double coat.',
    distractors: ['Leonberger', 'Saint Bernard', 'Great Pyrenees'],
    funFact: 'The black-and-white form is called a Landseer.',
    source: wiki('Newfoundland_dog'),
    evidence: 'they excel at water rescue and lifesaving'
  },
  vizsla: {
    clue: 'A Hungarian pointing breed of medium size, used to hunt, point and retrieve fowl and upland game.',
    distractors: ['Weimaraner', 'German Shorthaired Pointer', 'Redbone Coonhound'],
    funFact: 'It is also called the Magyar Vizsla or Hungarian Pointer.',
    source: wiki('Vizsla'),
    evidence: 'hungarian pointer, is a dog breed from hungary'
  },
  'australian-shepherd': {
    clue: 'Despite its name, this herding breed was developed in California in the 19th century.',
    distractors: ['Australian Cattle Dog', 'Australian Kelpie', 'Border Collie'],
    funFact: 'The name probably comes from collies imported with sheep from Australia and New Zealand.',
    source: wiki('Australian_Shepherd'),
    evidence: 'despite the name, the breed was developed in california in the 19th century'
  },
  rottweiler: {
    clue: 'Once used to herd livestock and pull carts of butchered meat to market, until railways replaced droving.',
    distractors: ['Bernese Mountain Dog', 'Doberman Pinscher', 'Greater Swiss Mountain Dog'],
    funFact: 'Its German name means "Rottweil butchers\' dog."',
    source: wiki('Rottweiler'),
    evidence: 'pull carts laden with butchered meat to market'
  },
  'siberian-husky': {
    clue: 'A medium-sized spitz-type sled dog first developed by the Chukchi people of the Russian Far East.',
    distractors: ['Alaskan Malamute', 'Samoyed', 'Greenland Dog'],
    funFact: 'A Russian fur trader brought the breed to Nome, Alaska, during the gold rush.',
    source: wiki('Siberian_Husky'),
    evidence: 'first developed by the chukchi people for sled pulling'
  },
  'dutch-shepherd': {
    clue: 'A herding breed that since 1914 has been allowed only in brindle, to set it apart from similar herding breeds.',
    distractors: ['Belgian Malinois', 'Bouvier des Flandres', 'Plott Hound'],
    funFact: 'Farmers valued it as a versatile dog that made few demands and could handle a harsh life.',
    source: wiki('Dutch_Shepherd'),
    evidence: 'it was decided to allow only brindle'
  },
  'cane-corso': {
    clue: 'An Italian mastiff breed once used both for hunting large game and for herding cattle, now kept mostly as a companion or guard dog.',
    distractors: ['Bullmastiff', 'Dogo Argentino', 'Boerboel'],
    funFact: 'It may also be used to protect livestock.',
    source: wiki('Cane_Corso'),
    evidence: 'in the past it was used both for hunting large game and for herding cattle'
  },
  'alaskan-malamute': {
    clue: 'A large spitz-type sled dog bred for strength and endurance to haul heavy freight.',
    distractors: ['Siberian Husky', 'Samoyed', 'Greenland Dog'],
    funFact: 'It is larger than the similar-looking Siberian Husky.',
    source: wiki('Alaskan_Malamute'),
    evidence: 'bred for its strength and endurance to haul heavy freight as a sled dog'
  },
  beagle: {
    clue: 'A British scent hound that looks like a much smaller foxhound, bred mainly to hunt rabbit or hare.',
    distractors: ['Harrier', 'Basset Hound', 'Dachshund'],
    funFact: 'Its nose makes it a good detection dog for banned food and agricultural imports in quarantine.',
    source: wiki('Beagle'),
    evidence: 'similar in appearance to the much larger foxhound'
  },

  // Snakes
  'ball-python-piebald': {
    clue: 'A recessive morph first produced by Peter Kahl in 1997.',
    distractors: ['Ball Python Clown', 'Ball Python Spider', 'Ball Python Mojave'],
    funFact: 'Recessive means a snake needs two copies of the gene to show the look.',
    source: wobp('piebald'),
    evidence: 'first produced by peter kahl'
  },
  'ball-python-mojave': {
    clue: 'An incomplete dominant morph first produced by The Snake Keeper.',
    distractors: ['Ball Python Lesser', 'Ball Python Pastel', 'Ball Python Butter'],
    funFact: 'Incomplete dominant means one copy changes the look, and two copies change it further.',
    source: wobp('mojave'),
    evidence: 'first produced by the snake keeper'
  },
  'ball-python-clown': {
    clue: 'A recessive morph with a dark back and a head pattern in which the eye stripes are almost always missing.',
    distractors: ['Ball Python Piebald', 'Ball Python Genetic Stripe', 'Ball Python Spider'],
    funFact: 'It was first produced by Dave and Tracy Barker of Vida Preciosa International.',
    source: wobp('clown'),
    evidence: 'with a distinct head pattern where the eye stripes are almost always removed'
  },
  'corn-snake': {
    clue: 'A North American colubrid often killed because people mistake it for the venomous copperhead.',
    distractors: ['Milk Snake', 'Gray Rat Snake', 'Eastern Hognose Snake'],
    funFact: 'It is harmless to people and helps control crop-damaging rodents.',
    source: wiki('Corn_snake'),
    evidence: 'superficially resembling the venomous copperhead'
  },
  'western-hognose': {
    clue: 'A rear-fanged North American colubrid, nicknamed "bluffer," whose rare bites have never caused a recorded death.',
    distractors: ['Corn Snake', 'Bullsnake', 'Eastern Garter Snake'],
    funFact: 'Its species name, nasicus, refers to its upturned snout.',
    source: wiki('Western_hognose_snake'),
    evidence: 'blow snake, bluffer, plains hognose snake'
  },
  'california-kingsnake': {
    clue: 'A nonvenomous colubrid of the western United States and northern Mexico, among the most popular captive snakes thanks to easy care and many color variations.',
    distractors: ['Milk Snake', 'Corn Snake', 'Gopher Snake'],
    funFact: 'Kingsnakes are known for eating other snakes.',
    source: wiki('California_kingsnake'),
    evidence: 'due to ease of care and a wide range of color variations'
  },
  'boa-constrictor': {
    clue: 'A large, heavy-bodied, nonvenomous snake native to tropical South America, with a highly variable but distinctive pattern.',
    distractors: ['Green Anaconda', "Dumeril's Boa", 'Burmese Python'],
    funFact: 'Its scientific name is the same as its common name: Boa constrictor.',
    source: wiki('Boa_constrictor'),
    evidence: 'the species is native to tropical south america'
  },
  'gaboon-viper': {
    clue: 'A sub-Saharan African species with the longest fangs of any venomous snake and the highest venom yield.',
    distractors: ['Puff Adder', 'Rhinoceros Viper', 'Black Mamba'],
    funFact: 'Its fangs can reach 2 inches (5 cm).',
    source: wiki('Gaboon_viper'),
    evidence: 'it has the longest fangs of any venomous snake'
  },
  'carpet-python': {
    clue: 'A large constrictor of Australia and New Guinea with many recognized subspecies.',
    distractors: ['Green Tree Python', 'Woma Python', "Children's Python"],
    funFact: 'Different authorities list six to eight subspecies.',
    source: wiki('Morelia_spilota'),
    evidence: 'is a large snake of the family pythonidae found in australia'
  },
  'green-tree-python': {
    clue: 'An emerald-colored constrictor of New Guinea, Indonesia and Cape York that lives mostly off the ground, and whose wild numbers have suffered from smuggling.',
    distractors: ['Emerald Tree Boa', 'Carpet Python', 'Green Mamba'],
    funFact: 'The look-alike emerald tree boa lives in South America, not Australasia.',
    source: wiki('Green_tree_python'),
    evidence: 'large-scale smuggling of wild-caught green tree pythons in indonesia'
  },
  'rosy-boa': {
    clue: 'A small constrictor of the southwestern United States and northwestern Mexico.',
    distractors: ['Rubber Boa', 'Kenyan Sand Boa', "Dumeril's Boa"],
    funFact: 'Rosy boas make up the genus Lichanura.',
    source: wiki('Lichanura'),
    evidence: 'they are distributed across the southwestern united states and northwestern mexico'
  },
  'milk-snake': {
    clue: 'A kingsnake species whose banding can strikingly resemble venomous coral species, an example of Batesian mimicry.',
    distractors: ['California Kingsnake', 'Corn Snake', 'Mexican Black Kingsnake'],
    funFact: 'It was once split into as many as 24 subspecies.',
    source: wiki('Milk_snake'),
    evidence: 'some milk snakes have a striking resemblance to coral snakes, in batesian mimicry'
  },
  'dumerils-boa': {
    clue: 'A nonvenomous constrictor found only on Madagascar.',
    distractors: ['Boa Constrictor', 'Rosy Boa', 'Kenyan Sand Boa'],
    funFact: 'No subspecies are recognized.',
    source: wiki('Acrantophis_dumerili'),
    evidence: 'the species is endemic to madagascar'
  },

  // Chickens
  silkie: {
    clue: 'A Chinese breed named for its fluffy plumage, with black skin and bones, blue earlobes and five toes on each foot.',
    distractors: ['Cochin', 'Polish', 'Ayam Cemani'],
    funFact: 'Marco Polo wrote of a "furry" chicken in the 13th century.',
    source: wiki('Silkie_(chicken_breed)'),
    evidence: 'black skin and bones, blue earlobes, and pentadactyly'
  },
  'ayam-cemani': {
    clue: 'A rare Indonesian breed whose dominant hyperpigmentation gene makes it black even in its beak and internal organs.',
    distractors: ['Silkie', 'Kadaknath', 'Australorp'],
    funFact: 'The condition is called fibromelanosis.',
    source: wiki('Ayam_Cemani'),
    evidence: 'making the chicken mostly black, including feathers, beak, and internal organs'
  },
  'dong-tao': {
    clue: 'A rare Vietnamese breed with enlarged feet, once raised only for the royal family and mandarins.',
    distractors: ['Brahma', 'Cochin', 'Ayam Cemani'],
    funFact: 'Hens often break eggs with their bulky legs, so eggs are usually incubated artificially.',
    source: wiki('Dong_Tao_chicken'),
    evidence: 'rare vietnamese chicken breed with enlarged feet'
  },
  'la-fleche': {
    clue: 'A rare French dual-purpose breed from the Sarthe, once famous for its fine meat, with a U- or V-shaped comb.',
    distractors: ['Houdan', 'Crèvecœur', 'Faverolles'],
    funFact: 'Numbers have fallen very low since the Second World War.',
    source: wiki('La_Flèche_chicken'),
    evidence: 'the breed was once famous for the fine quality of its meat'
  },
  australorp: {
    clue: 'An Australian utility breed derived from a British black breed, which broke numerous egg-laying world records in the 1920s.',
    distractors: ['Orpington', 'Jersey Giant', 'Langshan'],
    funFact: 'Some hens lay more than 300 eggs a year.',
    source: wiki('Australorp'),
    evidence: 'broke numerous world records for number of eggs laid'
  },
  welsummer: {
    clue: 'A Dutch breed created in the early 1900s from local fowl of Rhode Island Red, Barnevelder, Partridge Leghorn, Cochin and Wyandotte origin.',
    distractors: ['Marans', 'Penedesenca', 'Sussex'],
    funFact: 'Its bantams lay about 180 dark brown eggs a year.',
    source: wiki('Welsummer'),
    evidence: 'rhode island reds, barnevelders, partridge leghorns, cochins, and wyandottes'
  },
  'cream-legbar': {
    clue: 'A crested, auto-sexing British breed that lays blue or blue-green eggs, developed at Cambridge.',
    distractors: ['Ameraucana', 'Araucana', 'Easter Egger'],
    funFact: 'The crest and blue eggs came from crossing with Araucanas.',
    source: wiki('Legbar'),
    evidence: 'later crossing with araucanas caused this to have a crest and to lay blue or blue-green eggs'
  },
  ameraucana: {
    clue: 'An American breed developed in the 1970s from Chilean chickens, keeping the blue-egg gene but dropping the parent breed\'s lethal alleles.',
    distractors: ['Araucana', 'Cream Legbar', 'Easter Egger'],
    funFact: 'It comes in both standard and bantam sizes.',
    source: wiki('Ameraucana'),
    evidence: 'bred to retain the blue-egg gene but eliminate the lethal alleles of the parent breed'
  },
  orpington: {
    clue: 'A British breed created in the late 1800s by William Cook in Kent; meant to be dual-purpose, it soon became mainly a show bird.',
    distractors: ['Australorp', 'Sussex', 'Dorking'],
    funFact: 'The Australorp was developed from it.',
    source: wiki('Orpington_chicken'),
    evidence: 'it was bred in the late nineteenth century by william cook'
  },
  'plymouth-rock': {
    clue: 'An American dual-purpose breed first seen in Massachusetts, and for much of the early 1900s the most widely kept chicken in the United States.',
    distractors: ['Dominique', 'Rhode Island Red', 'Wyandotte'],
    funFact: 'It is cold-hardy, easy to manage and a good sitter.',
    source: wiki('Plymouth_Rock_chicken'),
    evidence: 'the most widely kept chicken breed in the united states'
  },
  'rhode-island-red': {
    clue: 'An American breed, now its home state\'s state bird, developed by crossing Malay-type birds with brown Leghorns.',
    distractors: ['New Hampshire', 'Plymouth Rock', 'Buckeye'],
    funFact: 'Traditional strains are on The Livestock Conservancy\'s "watch" list.',
    source: wiki('Rhode_Island_Red'),
    evidence: 'by cross-breeding birds of oriental origin such as the malay with brown leghorn birds from italy'
  },
  marans: {
    clue: 'A French dual-purpose breed laying rich brown eggs from mahogany to chocolate; only one other breed, from Catalonia, lays as dark an egg.',
    distractors: ['Welsummer', 'Barnevelder', 'Faverolles'],
    funFact: 'The other dark-egg breed is the Penedesenca.',
    source: wiki('Marans'),
    evidence: 'only one other chicken breed, the penedesenca of catalonia, lays such a dark egg'
  },
  polish: {
    clue: 'A European crested breed with a small V-shaped comb and an abundant crest of feathers on its crown.',
    distractors: ['Houdan', 'Silkie', 'Sultan'],
    funFact: 'Similar birds appear in 15th-century images from Italy and the Netherlands.',
    source: wiki('Polish_chicken'),
    evidence: 'the birds have a small v-shaped comb and an abundant crest of feathers'
  },
  sussex: {
    clue: 'One of the oldest British breeds; its first standard, in 1902, had light, red and speckled varieties.',
    distractors: ['Dorking', 'Orpington', 'Faverolles'],
    funFact: 'Of those three varieties, the speckled was the oldest.',
    source: wiki('Sussex_chicken'),
    evidence: 'with three colour varieties, the light, the red and the speckled'
  },
  cochin: {
    clue: 'A large exhibition breed descended from feather-legged chickens brought from China to Europe and North America in the 1840s and 1850s.',
    distractors: ['Faverolles', 'Orpington', 'Sussex'],
    funFact: 'It was once known as the Cochin-China.',
    source: wiki('Cochin_chicken'),
    evidence: 'derives from large feather-legged chickens brought from china to europe and north america in the 1840s and 1850s'
  },

  // Cats
  'maine-coon': {
    clue: 'A large North American landrace breed, nicknamed "the gentle giant," that is the official state cat of its home state.',
    distractors: ['Norwegian Forest Cat', 'Siberian', 'Ragamuffin'],
    funFact: 'Its long, dense coat helps it survive harsh winters.',
    source: wiki('Maine_Coon'),
    evidence: 'where it is the official state cat'
  },
  chartreux: {
    clue: 'A rare French breed with a blue, water-resistant double coat, copper or orange eyes, and an apparent "smile."',
    distractors: ['Russian Blue', 'British Shorthair', 'Korat'],
    funFact: 'Its official name starts with a letter that encodes its birth year.',
    source: wiki('Chartreux'),
    evidence: 'is a rare breed of cat from france'
  },
  sphynx: {
    clue: 'A breed known for its lack of fur, developed by selective breeding from the 1960s, with skin that feels like chamois leather.',
    distractors: ['Peterbald', 'Donskoy', 'Devon Rex'],
    funFact: 'Without fur, these cats lose heat quickly and seek out warm places.',
    source: wiki('Sphynx_cat'),
    evidence: 'texture of chamois leather'
  },
  savannah: {
    clue: 'A hybrid breed from a serval crossed with a domestic cat; an early-generation male once held the record for tallest cat.',
    distractors: ['Bengal', 'Chausie', 'Ocicat'],
    funFact: 'Show-eligible later generations weigh about as much as a Maine Coon.',
    source: wiki('Savannah_cat'),
    evidence: 'from hybridisation of a serval'
  },
  bengal: {
    clue: 'A hybrid breed from crossing the Asian leopard cat with domestic cats; its coat ranges from spots to rosettes and marbling.',
    distractors: ['Savannah', 'Ocicat', 'Toyger'],
    funFact: 'Because of its wild ancestry, owning one is regulated in several countries.',
    source: wiki('Bengal_cat'),
    evidence: 'created from crossbreeding an asian leopard cat to domestic cats'
  },
  'norwegian-forest-cat': {
    clue: 'A landrace breed adapted to a very cold climate, with a long glossy top coat and a woolly undercoat; its ancestors may have arrived with the Vikings.',
    distractors: ['Siberian', 'Maine Coon', 'Turkish Angora'],
    funFact: 'It nearly died out during World War II.',
    source: wiki('Norwegian_Forest_Cat'),
    evidence: 'with a top coat of long, glossy hair and a woolly undercoat for insulation'
  },
  abyssinian: {
    clue: 'A breed with a distinctive "ticked" tabby coat, named after the country its first show cats came from, though genetic studies point to Southeast Asia.',
    distractors: ['Somali', 'Singapura', 'Ocicat'],
    funFact: 'That country, Abyssinia, is now Ethiopia.',
    source: wiki('Abyssinian_cat'),
    evidence: 'genetic studies place the breed\'s origins in southeast asia and europe'
  },
  ragdoll: {
    clue: 'A large, semi-longhaired colorpoint breed with blue eyes, developed by American breeder Ann Baker in the 1960s.',
    distractors: ['Birman', 'Ragamuffin', 'Himalayan'],
    funFact: 'Its name comes from its habit of going limp when picked up.',
    source: wiki('Ragdoll'),
    evidence: 'american breeder ann baker developed ragdolls in the 1960s'
  },
  'scottish-fold': {
    clue: 'Every cat of this breed has osteochondrodysplasia, the cartilage disorder behind its forward-folded ears; some countries ban breeding it.',
    distractors: ['American Curl', 'British Shorthair', 'Exotic Shorthair'],
    funFact: 'The disorder can cause painful joint disease, sometimes at a young age.',
    source: wiki('Scottish_Fold'),
    evidence: 'all scottish fold cats are affected by focd'
  },
  siamese: {
    clue: 'One of the first recognized breeds, from Thailand\'s Wichianmat landrace, with a colorpoint coat caused by temperature-sensitive albinism.',
    distractors: ['Balinese', 'Tonkinese', 'Birman'],
    funFact: 'Rounder "old-style" cats split off from the modern slender type from the 1980s on.',
    source: wiki('Siamese_cat'),
    evidence: 'resulting from a temperature-sensitive type of albinism'
  },
  burmese: {
    clue: 'Most cats of this breed descend from one female, Wong Mau, brought to the United States in 1930 and bred with Siamese.',
    distractors: ['Tonkinese', 'Bombay', 'Havana Brown'],
    funFact: 'American and British breeders developed noticeably different standards for it.',
    source: wiki('Burmese_cat'),
    evidence: 'most modern burmese are descendants of one female cat called wong mau'
  },
  'russian-blue': {
    clue: 'A shorthaired breed with a dense, plush grey double coat with a silver sheen and bright emerald-green eyes.',
    distractors: ['Chartreux', 'Korat', 'British Shorthair'],
    funFact: 'The solid blue coat has been the breed\'s defining feature for over a century.',
    source: wiki('Russian_Blue'),
    evidence: 'bright emerald green to yellow-green eyes'
  },
  'turkish-van': {
    clue: 'A semi-longhaired breed developed in 1950s Britain from cats of Turkey, mostly white with color only on the head and tail.',
    distractors: ['Turkish Angora', 'Japanese Bobtail', 'Khao Manee'],
    funFact: 'It may have blue eyes, orange eyes, or one of each.',
    source: wiki('Turkish_Van'),
    evidence: 'where the colour is restricted to the head and the tail'
  },
  birman: {
    clue: 'A long-haired colorpoint breed with deep blue eyes and white "gloves" on each paw, first recognized in France in 1925.',
    distractors: ['Ragdoll', 'Himalayan', 'Snowshoe'],
    funFact: 'Its name comes from Birmanie, the French word for Burma.',
    source: wiki('Birman'),
    evidence: 'the breed was first recognised in 1925 in france'
  },

  // Horses
  'american-quarter-horse': {
    clue: 'A US breed that excels at sprinting short distances; some have been clocked at up to 44 mph.',
    distractors: ['Thoroughbred', 'Appaloosa', 'American Paint Horse'],
    funFact: 'Its compact body suits reining, cutting and barrel racing.',
    source: wiki('American_Quarter_Horse'),
    evidence: 'some have been clocked at speeds up to 44 mph'
  },
  arabian: {
    clue: 'A desert breed with roots in West Asia, prized by the Bedouin, who often brought these horses inside the family tent.',
    distractors: ['Akhal-Teke', 'Barb', 'Thoroughbred'],
    funFact: 'Its bloodlines are found in almost every modern riding breed.',
    source: wiki('Arabian_horse'),
    evidence: 'often being brought inside the family tent for shelter and protection from theft'
  },
  friesian: {
    clue: 'A breed from the northern Netherlands, classed as a light draught horse, that nearly became extinct more than once.',
    distractors: ['Gelderlander', 'Groningen', 'Dutch Warmblood'],
    funFact: 'It is best known for its all-black coat.',
    source: wiki('Friesian_horse'),
    evidence: 'it is classified as a light draught horse'
  },
  'cleveland-bay': {
    clue: 'England\'s oldest established horse breed, always brown-bodied with black points, descended from medieval pack horses.',
    distractors: ['Hackney', 'Suffolk Punch', 'Shire'],
    funFact: 'Those pack-horse ancestors were nicknamed "Chapman Horses."',
    source: wiki('Cleveland_Bay'),
    evidence: 'the horses are always bay in colour'
  },
  morgan: {
    clue: 'In 1907 the US Department of Agriculture set up a farm near Middlebury, Vermont, to preserve and improve this breed.',
    distractors: ['American Saddlebred', 'Standardbred', 'Canadian Horse'],
    funFact: 'The breed traces to a single stallion named Figure.',
    source: wiki('Morgan_horse'),
    evidence: 'established the us morgan horse farm near middlebury, vermont'
  },
  andalusian: {
    clue: 'A Spanish riding horse of the Iberian Peninsula, recognized as a distinct breed since the 15th century and prized as a war horse.',
    distractors: ['Lusitano', 'Lipizzan', 'Friesian'],
    funFact: 'Exports from Spain were restricted until the 1960s.',
    source: wiki('Andalusian_horse'),
    evidence: 'has been recognized as a distinct breed since the 15th century'
  },
  'american-cream-draft': {
    clue: 'A heavy horse breed developed in Iowa in the early 1900s from a mare named Old Granny.',
    distractors: ['Belgian', 'Haflinger', 'Suffolk Punch'],
    funFact: 'The Livestock Conservancy lists its conservation status as critical.',
    source: wiki('American_Cream_Draft'),
    evidence: 'from a cream-colored mare named old granny'
  },
  'marsh-tacky': {
    clue: 'A critically endangered Colonial Spanish breed from South Carolina, well adapted to lowland swamps.',
    distractors: ['Banker Horse', 'Florida Cracker Horse', 'Chincoteague Pony'],
    funFact: 'Only around 400 exist today.',
    source: wiki('Carolina_Marsh_Tacky'),
    evidence: 'well-adapted for use in the lowland swamps of its native south carolina'
  },
  thoroughbred: {
    clue: 'A hot-blooded racing breed developed in 17th- and 18th-century England from native mares and imported Arabian, Barb and Turkoman stallions.',
    distractors: ['Standardbred', 'American Quarter Horse', 'Akhal-Teke'],
    funFact: 'Around 100,000 foals are registered worldwide each year.',
    source: wiki('Thoroughbred'),
    evidence: 'when native mares were crossbred with imported stallions of arabian, barb, and turkoman breeding'
  },
  appaloosa: {
    clue: 'An American breed whose spotted coat is linked to the leopard complex mutation, and which is prone to congenital stationary night blindness.',
    distractors: ['Knabstrupper', 'American Paint Horse', 'Noriker'],
    funFact: 'Horses with leopard spotting appear in prehistoric European cave paintings.',
    source: wiki('Appaloosa'),
    evidence: 'appaloosas are prone to develop equine recurrent uveitis and congenital stationary night blindness'
  },
  'tennessee-walking-horse': {
    clue: 'A gaited breed known for its four-beat running walk; its foundation sire, Black Allan, was foaled in 1886.',
    distractors: ['Missouri Fox Trotter', 'Paso Fino', 'American Saddlebred'],
    funFact: 'Its studbook was closed in 1947.',
    source: wiki('Tennessee_Walking_Horse'),
    evidence: 'in 1886 a foal named black allan was born'
  },
  clydesdale: {
    clue: 'A Scottish draught breed; after its breed society formed in 1877, thousands were exported, especially to Australia and New Zealand.',
    distractors: ['Shire', 'Suffolk Punch', 'Percheron'],
    funFact: 'By the 1970s the Rare Breeds Survival Trust considered it vulnerable.',
    source: wiki('Clydesdale_horse'),
    evidence: 'particularly to australia and new zealand'
  },
  hanoverian: {
    clue: 'A German warmblood whose state stud at Celle was founded in 1735 by George II.',
    distractors: ['Trakehner', 'Holsteiner', 'Oldenburg'],
    funFact: 'Registration depends on performance rather than ancestry.',
    source: wiki('Hanoverian_horse'),
    evidence: 'founded the state stud at celle'
  },
  mustang: {
    clue: 'A free-roaming horse of the western United States descended from the conquistadors\' horses; formally feral, not wild.',
    distractors: ['Brumby', 'Banker Horse', 'Marsh Tacky'],
    funFact: 'The Bureau of Land Management manages and protects the herds.',
    source: wiki('Mustang'),
    evidence: 'they are formally classified as feral horses'
  },

  // Dogs (added)
  'shiba-inu': {
    clue: 'The smallest of the six original dog breeds native to Japan; its name translates as "brushwood dog".',
    distractors: ['Akita', 'Hokkaido', 'Kishu'],
    funFact: 'Its cream underside markings are called urajiro, meaning "underside white".',
    source: wiki('Shiba_Inu'),
    evidence: 'it is the smallest of the six original dog breeds native to japan'
  },
  dalmatian: {
    clue: 'A white dog marked with dark spots, once used as a carriage dog by firefighters in the days of horse-drawn carriages.',
    distractors: ['English Pointer', 'Great Dane', 'English Setter'],
    funFact: 'Puppies are born plain white; their first spots usually appear within 10 days.',
    source: wiki('Dalmatian_dog'),
    evidence: 'used as a carriage dog by firefighters'
  },
  basenji: {
    clue: 'A Central African hunting breed that does not bark in the usual way, making an unusual yodel-like sound instead.',
    distractors: ['Pharaoh Hound', 'Ibizan Hound', 'Shiba Inu'],
    funFact: 'Its unusually shaped larynx earns it the nickname of "barkless" dog.',
    source: wiki('Basenji'),
    evidence: 'the breed does not bark in the traditional manner of most dogs'
  },
  samoyed: {
    clue: 'A spitz-type herding dog with a thick white double coat, descended from the Nenets Herding Laika and taken on Arctic and Antarctic expeditions.',
    distractors: ['American Eskimo Dog', 'Japanese Spitz', 'Siberian Husky'],
    funFact: 'Its double-layer coat is naturally dirt-repellent.',
    source: wiki('Samoyed_dog'),
    evidence: 'descending from the nenets herding laika'
  },
  weimaraner: {
    clue: 'A German gun dog named for the city where it originated; from 1879 it was considered a blue variant of the German Short-haired Pointer.',
    distractors: ['Vizsla', 'German Shorthaired Pointer', 'Labrador Retriever'],
    funFact: 'Silver-grey dogs like it appear in 17th-century paintings by Antoon van Dyck.',
    source: wiki('Weimaraner'),
    evidence: 'the dogs were considered to be a blue variant of the german short-haired pointer'
  },
  saluki: {
    clue: 'A deep-chested, long-legged sighthound from the Fertile Crescent, once used by nomadic tribes to run down game; also called the gazelle hound.',
    distractors: ['Afghan Hound', 'Sloughi', 'Greyhound'],
    funFact: 'It is one possible explanation for the mythical Egyptian Set animal.',
    source: wiki('Saluki'),
    evidence: 'has also been called the gazelle hound'
  },
  bloodhound: {
    clue: 'A large scent hound believed to descend from hounds kept at the Abbey of Saint-Hubert in Belgium, and used by police to track fugitives.',
    distractors: ['Basset Hound', 'Black and Tan Coonhound', 'Dogue de Bordeaux'],
    funFact: 'It can weigh from 36 to 72 kg (80 to 160 lb).',
    source: wiki('Bloodhound'),
    evidence: 'believed to be descended from hounds once kept at the abbey of saint-hubert'
  },

  // Snakes (added)
  'king-cobra': {
    clue: "The world's longest venomous snake, which chiefly hunts other snakes and is the only snake that builds an above-ground nest for its eggs.",
    distractors: ['Indian Cobra', 'Monocled Cobra', 'Black Mamba'],
    funFact: 'Despite its common name, it is not a true cobra.',
    source: wiki('King_cobra'),
    evidence: "it is the world's longest venomous snake"
  },
  'black-mamba': {
    clue: 'An African elapid named not for its grey-to-brown body but for the inky lining of its mouth; the second-longest venomous snake.',
    distractors: ['Eastern Green Mamba', 'Cape Cobra', 'Boomslang'],
    funFact: 'Over suitable surfaces it can move at up to 16 km/h for short distances.',
    source: wiki('Black_mamba'),
    evidence: 'the colour name describes rather the inside of its mouth'
  },
  'reticulated-python': {
    clue: "The world's longest snake, native to South and Southeast Asia, whose Latin species name means \"net-like\".",
    distractors: ['Burmese Python', 'Green Anaconda', 'Boa Constrictor'],
    funFact: 'It is an excellent swimmer and has been reported far out at sea.',
    source: wiki('Reticulated_python'),
    evidence: "it is the world's longest snake"
  },
  'green-anaconda': {
    clue: 'A non-venomous South American boa, one of the longest and heaviest snakes, that spends most of its time in slow-moving water.',
    distractors: ['Yellow Anaconda', 'Reticulated Python', 'Boa Constrictor'],
    funFact: 'Other common names for it include common water boa, akayima and sucuri.',
    source: wiki('Green_anaconda'),
    evidence: 'it spends most of its time in the water'
  },
  'emerald-tree-boa': {
    clue: 'A South American rainforest constrictor with a white zigzag "lightning bolt" stripe on its green back; its young are orange or brick-red.',
    distractors: ['Green Tree Python', 'Amazon Tree Boa', 'Annulated Tree Boa'],
    funFact: 'Its front teeth are likely proportionately larger than those of any other non-venomous snake.',
    source: wiki('Emerald_tree_boa'),
    evidence: 'white irregular interrupted zigzag stripe'
  },
  'eastern-indigo-snake': {
    clue: 'A large, nonvenomous colubrid of the Southeastern United States, the longest native serpent in that country; its genus name means "lord of the forest".',
    distractors: ['Black Racer', 'Black Rat Snake', 'Texas Indigo Snake'],
    funFact: 'Its species name honours the planter James Hamilton Couper.',
    source: wiki('Eastern_indigo_snake'),
    evidence: 'it is the longest native snake species in the country'
  },
  copperhead: {
    clue: 'A venomous pit viper of the eastern United States with dark brown hourglass-shaped markings; its newborn young have green or yellow tail tips.',
    distractors: ['Cottonmouth', 'Timber Rattlesnake', 'Corn Snake'],
    funFact: 'In winter it often hibernates in dens together with timber rattlesnakes and black rat snakes.',
    source: wiki('Agkistrodon_contortrix'),
    evidence: 'neonates are born with green or yellow tail tips'
  },

  // Chickens (added)
  brahma: {
    clue: 'An American breed developed from heavily feathered-legged "Shanghai" birds, and the principal American meat breed from the 1850s until about 1930.',
    distractors: ['Cochin', 'Langshan', 'Jersey Giant'],
    funFact: 'In 1852 nine of the birds were sent to Queen Victoria as a gift.',
    source: wiki('Brahma_chicken'),
    evidence: 'was the principal american meat breed from the 1850s until about 1930'
  },
  leghorn: {
    clue: 'An Italian breed from Tuscany, named after the traditional English name of the port of Livorno; its white variety is a common commercial layer.',
    distractors: ['Ancona', 'Minorca', 'Hamburg'],
    funFact: 'In North America the birds were at first called "Italians".',
    source: wiki('Leghorn_chicken'),
    evidence: 'white leghorns are commonly used as layer chickens'
  },
  wyandotte: {
    clue: 'An American dual-purpose breed of the 1870s, named for an indigenous people of North America and originally known as the American Sebright.',
    distractors: ['Orpington', 'Plymouth Rock', 'Barnevelder'],
    funFact: 'The silver-laced type came first, entering the American Standard of Perfection in 1883.',
    source: wiki('Wyandotte_chicken'),
    evidence: 'it was originally known as the american sebright'
  },
  faverolles: {
    clue: 'A French heavy breed from near Houdan with a beard, muffs, feathered feet and five toes per foot.',
    distractors: ['Houdan', 'Dorking', 'Silkie'],
    funFact: 'The final "s" of its name is silent in French, and the singular keeps the "s".',
    source: wiki('Faverolles_chicken'),
    evidence: 'have a beard, muffs, feathered feet and five toes per foot'
  },
  sebright: {
    clue: 'A true bantam with no large version, created in the early nineteenth century by a baronet who was Member of Parliament for Hertfordshire.',
    distractors: ['Rosecomb', 'Dutch Bantam', 'Pekin'],
    funFact: 'It was the first poultry breed to have its own specialist club.',
    source: wiki('Sebright_chicken'),
    evidence: 'a miniature bird with no corresponding large version'
  },
  barnevelder: {
    clue: 'A Dutch breed from local chickens crossed with "Shanghai" birds, whose hens lay large brown eggs and keep laying well in winter.',
    distractors: ['Welsummer', 'Marans', 'Wyandotte'],
    funFact: 'It is named for a town in Gelderland in the central Netherlands.',
    source: wiki('Barnevelder'),
    evidence: 'continue to lay well during winter'
  },
  serama: {
    clue: 'A bantam from Malaysia, developed within the last 50 years, and the smallest breed of chicken in the world.',
    distractors: ['Japanese Bantam', 'Sebright', 'Pekin'],
    funFact: 'Its breeder named it after Rama, the title of the Kings of Thailand.',
    source: wiki('Serama'),
    evidence: 'it is the smallest breed of chicken in the world'
  },

  // Cats (added)
  persian: {
    clue: 'A long-haired breed with a round face; the very short flat nose of many modern lines was created in the US through in-breeding.',
    distractors: ['Himalayan', 'Exotic Shorthair', 'Turkish Angora'],
    funFact: 'The first such cats may have reached Italy from Khorasan as early as 1620.',
    source: wiki('Persian_cat'),
    evidence: 'the short flat nose was created in the us from in-breeding'
  },
  'british-shorthair': {
    clue: "A stocky, broad-faced pedigree cat whose most familiar colour is solid grey-blue with copper eyes; it inspired Tenniel's Cheshire Cat.",
    distractors: ['Chartreux', 'Russian Blue', 'Scottish Fold'],
    funFact: 'Half of all kittens registered with the GCCF each year belong to this breed.',
    source: wiki('British_Shorthair'),
    evidence: "the inspiration for john tenniel's famous illustration of the cheshire cat"
  },
  'devon-rex': {
    clue: 'A tall-eared breed with a short, wavy coat that emerged in England after a curly-coated kitten named Kirlee was found in 1960.',
    distractors: ['Cornish Rex', 'Selkirk Rex', 'Sphynx'],
    funFact: 'Its oddly shaped head gives it a "pixie-like" appearance.',
    source: wiki('Devon_Rex'),
    evidence: 'a novel curly-coated kitten'
  },
  'egyptian-mau': {
    clue: 'One of the few naturally spotted tabby breeds of domestic cat; a cat obtained from Cairo in the 1950s helped found it.',
    distractors: ['Bengal', 'Ocicat', 'Savannah'],
    funFact: 'Its spots occur only on the tips of the hairs of its coat.',
    source: wiki('Egyptian_Mau'),
    evidence: 'one of the few naturally spotted tabby breeds of domesticated cat'
  },
  manx: {
    clue: 'A breed from an island in the Irish Sea, best known for being entirely tailless, along with long hind legs and a rounded head.',
    distractors: ['Japanese Bobtail', 'Cymric', 'American Bobtail'],
    funFact: 'On its home island, tailless cats are called "rumpy" and short-tailed ones "stubbin".',
    source: wiki('Manx_cat'),
    evidence: 'cats are best known as being entirely tailless'
  },
  'turkish-angora': {
    clue: 'An ancient, natural long-haired breed from central Anatolia, often simply called the Ankara cat outside the United States.',
    distractors: ['Turkish Van', 'Persian', 'Norwegian Forest Cat'],
    funFact: 'Its ancestors were among the cats first domesticated in the Fertile Crescent.',
    source: wiki('Turkish_Angora'),
    evidence: 'having originated in central anatolia'
  },
  ocicat: {
    clue: 'A spotted all-domestic breed with no recent wild ancestry, first bred in 1964 from Siamese and Abyssinian cats and named for the ocelot.',
    distractors: ['Bengal', 'Egyptian Mau', 'Savannah'],
    funFact: 'American Shorthair bloodlines were later added to the breed.',
    source: wiki('Ocicat'),
    evidence: 'named for its resemblance to the ocelot'
  },

  // Horses (added)
  'akhal-teke': {
    clue: 'A Turkmen breed known for speed, endurance, thin manes and a metallic sheen that earned it the nickname "Golden Horses".',
    distractors: ['Arabian', 'Thoroughbred', 'Marwari'],
    funFact: 'About 6,600 exist worldwide, mostly in Turkmenistan.',
    source: wiki('Akhal-Teke'),
    evidence: 'distinctive metallic sheen which led to their nickname'
  },
  shire: {
    clue: "An English draught breed that once towed canal barges and pulled brewers' drays, and has held world records for the largest and tallest horse.",
    distractors: ['Clydesdale', 'Suffolk Punch', 'Belgian Draught'],
    funFact: 'Its breed society and stud-book were set up in the 1870s.',
    source: wiki('Shire_horse'),
    evidence: "pulling brewer's drays for delivery of beer"
  },
  percheron: {
    clue: 'A draft breed from the Huisne river valley in western France, usually grey or black, believed to descend from war horses.',
    distractors: ['Boulonnais', 'Ardennes', 'Shire'],
    funFact: 'Arabian blood was added to the breed in the late 18th and early 19th centuries.',
    source: wiki('Percheron'),
    evidence: 'usually gray or black in color'
  },
  haflinger: {
    clue: 'A small breed from Austria and northern Italy, developed for mountainous terrain, that is always chestnut with a flaxen mane and tail.',
    distractors: ['Norwegian Fjord', 'Suffolk Punch', 'Icelandic Horse'],
    funFact: 'Every one traces back to the foundation sire 249 Folie, born in 1874.',
    source: wiki('Haflinger'),
    evidence: 'are always chestnut with flaxen mane and tail'
  },
  lipizzan: {
    clue: 'A muscular, slow-maturing, long-lived riding breed named for a village in Slovenia and closely tied to the Spanish Riding School of Vienna.',
    distractors: ['Andalusian', 'Kladruber', 'Lusitano'],
    funFact: 'Its rescue in World War II inspired the Disney film Miracle of the White Stallions.',
    source: wiki('Lipizzan'),
    evidence: 'it is a muscular horse, powerful, slow to mature and long-lived'
  },
  'icelandic-horse': {
    clue: 'A hardy, long-lived breed descended from ponies brought by Norse settlers; many can tölt and do the flying pace, and exported animals may never return.',
    distractors: ['Faroese Pony', 'Norwegian Fjord', 'Shetland Pony'],
    funFact: 'It is the only breed of horse in its native country.',
    source: wiki('Icelandic_horse'),
    evidence: 'exported animals are not permitted to return'
  },
  'shetland-pony': {
    clue: 'A small, hardy breed from Scottish islands, known for its strength and dense coat, once used to carry peat and seaweed and to work in coal mines.',
    distractors: ['Exmoor Pony', 'Welsh Pony', 'Falabella'],
    funFact: 'It has been present on its home islands since at least the Bronze Age.',
    source: wiki('Shetland_pony'),
    evidence: 'shetland ponies were used for farm work, carrying peat and seaweed'
  }
};
// No clue for ball-python-banana: no source we can check states its genetics.
