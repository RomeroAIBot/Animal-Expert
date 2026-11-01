import { breedClues } from './trivia/breedClues.js';

export const categories = ['dogs', 'snakes', 'chickens', 'cat', 'horse'];

// fallbackUrl is only kept when it is a specific photo of this exact breed. A generic
// category photo would show the wrong animal, so the UI shows "photo unavailable" instead.
const withPhotoDefaults = (category, entity) => ({
  ...entity,
  category,
  photoQuery: entity.photoQuery,
  imageQueries: entity.imageQueries || [entity.photoQuery],
  fallbackUrl: entity.fallbackUrl || null
});

export const breeds = {
  dogs: [
    withPhotoDefaults('dogs', {
      id: 'norwegian-lundehund',
      displayName: 'Norwegian Lundehund',
      dogApiBreedId: 198,
      photoQuery: 'Norwegian Lundehund dog breed',
      dogCeoPath: '',
      funFact: 'Lundehunds are known for six functional toes on each foot.',
      factSource: 'https://www.akc.org/dog-breeds/norwegian-lundehund/'
    }),
    withPhotoDefaults('dogs', {
      id: 'belgian-malinois',
      displayName: 'Belgian Malinois',
      dogApiBreedId: 16,
      photoQuery: 'Belgian Malinois working dog',
      dogCeoPath: 'malinois',
      funFact: 'The Belgian Malinois is often selected for high-drive detection and protection work.',
      factSource: 'https://www.akc.org/dog-breeds/belgian-malinois/'
    }),
    withPhotoDefaults('dogs', {
      id: 'border-collie',
      displayName: 'Border Collie',
      dogApiBreedId: 50,
      photoQuery: 'Border Collie agility dog',
      dogCeoPath: 'collie/border',
      funFact: 'Border Collies are widely used in stock work for intense eye and biddability.',
      factSource: 'https://www.akc.org/dog-breeds/border-collie/'
    }),
    withPhotoDefaults('dogs', {
      id: 'german-shepherd',
      displayName: 'German Shepherd Dog',
      dogApiBreedId: 115,
      photoQuery: 'German Shepherd Dog breed standard',
      dogCeoPath: 'germanshepherd',
      funFact: 'German Shepherd Dogs are a classic utility breed in herding and service roles.',
      factSource: 'https://www.akc.org/dog-breeds/german-shepherd-dog/'
    }),
    withPhotoDefaults('dogs', {
      id: 'australian-cattle-dog',
      displayName: 'Australian Cattle Dog',
      dogApiBreedId: 12,
      dogCeoPath: '',
      photoQuery: 'Australian Cattle Dog breed',
      funFact: 'Australian Cattle Dogs were developed for heel-nipping cattle control.',
      factSource: 'https://www.akc.org/dog-breeds/australian-cattle-dog/'
    }),
    withPhotoDefaults('dogs', {
      id: 'doberman-pinscher',
      displayName: 'Doberman Pinscher',
      dogApiBreedId: 94,
      dogCeoPath: 'doberman',
      photoQuery: 'Doberman Pinscher dog breed',
      funFact: 'Dobermans are known for a compact, athletic build and strong trainability.',
      factSource: 'https://www.akc.org/dog-breeds/doberman-pinscher/'
    }),
    withPhotoDefaults('dogs', {
      id: 'newfoundland',
      displayName: 'Newfoundland',
      dogApiBreedId: 212,
      dogCeoPath: 'newfoundland',
      photoQuery: 'Newfoundland dog breed',
      funFact: 'Newfoundlands have a long history in water rescue work.',
      factSource: 'https://www.akc.org/dog-breeds/newfoundland/'
    }),
    withPhotoDefaults('dogs', {
      id: 'vizsla',
      displayName: 'Vizsla',
      dogApiBreedId: 287,
      dogCeoPath: 'vizsla',
      photoQuery: 'Vizsla sporting dog',
      funFact: 'Vizslas are a Hungarian pointing breed with strong handler attachment.',
      factSource: 'https://www.akc.org/dog-breeds/vizsla/'
    }),
    withPhotoDefaults('dogs', {
      id: 'australian-shepherd',
      displayName: 'Australian Shepherd',
      photoQuery: 'Australian Shepherd herding dog',
      funFact: 'Australian Shepherds are a herding breed known for merle coat patterns and intense working drive.',
      factSource: 'https://www.akc.org/dog-breeds/australian-shepherd/'
    }),
    withPhotoDefaults('dogs', {
      id: 'rottweiler',
      displayName: 'Rottweiler',
      photoQuery: 'Rottweiler dog breed',
      funFact: 'Rottweilers are a large working breed with a guarding history and cardiac health focus in responsible breeding.',
      factSource: 'https://www.akc.org/dog-breeds/rottweiler/'
    }),
    withPhotoDefaults('dogs', {
      id: 'siberian-husky',
      displayName: 'Siberian Husky',
      photoQuery: 'Siberian Husky sled dog',
      funFact: 'Siberian Huskies are a sled breed known for endurance, double coat, and pack-oriented social behavior.',
      factSource: 'https://www.akc.org/dog-breeds/siberian-husky/'
    }),
    withPhotoDefaults('dogs', {
      id: 'dutch-shepherd',
      displayName: 'Dutch Shepherd',
      photoQuery: 'Dutch Shepherd working dog brindle',
      funFact: 'Dutch Shepherds are a brindle-coated working breed closely associated with police and military selection.',
      factSource: 'https://www.akc.org/dog-breeds/dutch-shepherd/'
    }),
    withPhotoDefaults('dogs', {
      id: 'cane-corso',
      displayName: 'Cane Corso',
      photoQuery: 'Cane Corso mastiff dog breed',
      funFact: 'Cane Corsos are a large Italian mastiff-type breed with a background in guarding and estate protection.',
      factSource: 'https://www.akc.org/dog-breeds/cane-corso/'
    }),
    withPhotoDefaults('dogs', {
      id: 'alaskan-malamute',
      displayName: 'Alaskan Malamute',
      photoQuery: 'Alaskan Malamute arctic sled dog',
      funFact: 'Alaskan Malamutes are a heavy-boned arctic draft breed developed for freight hauling rather than sprint racing.',
      factSource: 'https://www.akc.org/dog-breeds/alaskan-malamute/'
    }),
    withPhotoDefaults('dogs', {
      id: 'beagle',
      displayName: 'Beagle',
      dogApiBreedId: 28,
      dogCeoPath: 'beagle',
      photoQuery: 'Beagle scenthound dog breed',
      funFact: 'Beagles are a pack scenthound breed with strong olfactory drive commonly used in detection work.',
      factSource: 'https://www.akc.org/dog-breeds/beagle/'
    }),
    withPhotoDefaults('dogs', {
      id: 'shiba-inu',
      displayName: 'Shiba Inu',
      photoQuery: 'Shiba Inu dog',
      funFact: 'The Shiba Inu is the smallest of the six original Japanese spitz breeds.',
      factSource: 'https://en.wikipedia.org/wiki/Shiba_Inu'
    }),
    withPhotoDefaults('dogs', {
      id: 'dalmatian',
      displayName: 'Dalmatian',
      photoQuery: 'Dalmatian dog',
      funFact: 'Dalmatian puppies are born plain white; their spots appear as they grow.',
      factSource: 'https://en.wikipedia.org/wiki/Dalmatian_dog'
    }),
    withPhotoDefaults('dogs', {
      id: 'basenji',
      displayName: 'Basenji',
      photoQuery: 'Basenji dog',
      funFact: 'Basenjis rarely bark; they make an unusual yodel-like sound instead.',
      factSource: 'https://en.wikipedia.org/wiki/Basenji'
    }),
    withPhotoDefaults('dogs', {
      id: 'samoyed',
      displayName: 'Samoyed',
      photoQuery: 'Samoyed dog',
      funFact: 'Samoyeds were bred to herd reindeer and pull sleds in Siberia.',
      factSource: 'https://en.wikipedia.org/wiki/Samoyed_dog'
    }),
    withPhotoDefaults('dogs', {
      id: 'weimaraner',
      displayName: 'Weimaraner',
      photoQuery: 'Weimaraner dog',
      funFact: 'Weimaraners were bred by German nobility to hunt large game such as boar and deer.',
      factSource: 'https://en.wikipedia.org/wiki/Weimaraner'
    }),
    withPhotoDefaults('dogs', {
      id: 'saluki',
      displayName: 'Saluki',
      photoQuery: 'Saluki dog',
      funFact: 'Salukis are sighthounds built for chasing game by sight across open desert.',
      factSource: 'https://en.wikipedia.org/wiki/Saluki'
    }),
    withPhotoDefaults('dogs', {
      id: 'bloodhound',
      displayName: 'Bloodhound',
      photoQuery: 'Bloodhound dog',
      funFact: 'Bloodhounds are famous for following human scent trails days old.',
      factSource: 'https://en.wikipedia.org/wiki/Bloodhound'
    })
  ],
  snakes: [
    withPhotoDefaults('snakes', {
      id: 'ball-python-piebald',
      displayName: 'Ball Python Piebald',
      photoQuery: 'Ball python Piebald morph',
      funFact: 'Piebald in ball pythons is a recessive trait requiring two copies of the gene.',
      factSource: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles'
    }),
    withPhotoDefaults('snakes', {
      id: 'ball-python-mojave',
      displayName: 'Ball Python Mojave',
      photoQuery: 'Ball python Mojave morph',
      funFact: 'Mojave is an incomplete dominant morph in ball pythons.',
      factSource: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles'
    }),
    withPhotoDefaults('snakes', {
      id: 'ball-python-clown',
      displayName: 'Ball Python Clown',
      photoQuery: 'Ball python Clown morph',
      funFact: 'Clown is a recessive ball python project known for reduced dorsal pattern.',
      factSource: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles'
    }),
    withPhotoDefaults('snakes', {
      id: 'corn-snake',
      displayName: 'Corn Snake',
      photoQuery: 'Corn snake morph',
      funFact: 'Corn snakes are commonly kept colubrids with many color morph lines.',
      factSource: 'https://animals.sandiegozoo.org/animals/corn-snake'
    }),
    withPhotoDefaults('snakes', {
      id: 'western-hognose',
      displayName: 'Western Hognose Snake',
      photoQuery: 'Western hognose snake',
      funFact: 'Western hognose snakes often bluff with hooding and dramatic defensive displays.',
      factSource: 'https://www.fws.gov/species/plains-hognose-snake-heterodon-nasicus'
    }),
    withPhotoDefaults('snakes', {
      id: 'california-kingsnake',
      displayName: 'California Kingsnake',
      photoQuery: 'California kingsnake',
      funFact: 'Kingsnakes are known ophiophagous snakes and may consume other snakes.',
      factSource: 'https://animals.sandiegozoo.org/animals/king-snake'
    }),
    withPhotoDefaults('snakes', {
      id: 'boa-constrictor',
      displayName: 'Boa Constrictor',
      photoQuery: 'Boa constrictor species',
      funFact: 'Boa constrictors are live-bearing snakes, unlike many egg-laying species.',
      factSource: 'https://animals.sandiegozoo.org/animals/boa'
    }),
    withPhotoDefaults('snakes', {
      id: 'gaboon-viper',
      displayName: 'Gaboon Viper',
      photoQuery: 'Gaboon viper species',
      funFact: 'Gaboon vipers have very long fangs among venomous snakes.',
      factSource: 'https://animals.sandiegozoo.org/animals/gaboon-viper'
    }),
    withPhotoDefaults('snakes', {
      id: 'carpet-python',
      displayName: 'Carpet Python',
      photoQuery: 'Carpet python Morelia spilota',
      funFact: 'Carpet pythons are Australian semi-arboreal pythons with wide regional pattern variation.',
      factSource: 'https://animals.sandiegozoo.org/animals/carpet-python'
    }),
    withPhotoDefaults('snakes', {
      id: 'green-tree-python',
      displayName: 'Green Tree Python',
      photoQuery: 'Green tree python Morelia viridis',
      funFact: 'Green tree pythons are arboreal pythons known for vivid adult green coloration and coiled perch resting posture.',
      factSource: 'https://animals.sandiegozoo.org/animals/green-tree-python'
    }),
    withPhotoDefaults('snakes', {
      id: 'rosy-boa',
      displayName: 'Rosy Boa',
      photoQuery: 'Rosy boa Lichanura trivirgata',
      funFact: 'Rosy boas are small western North American constrictors known for docile temperament and ease of captive care.',
      factSource: 'https://www.fws.gov/'
    }),
    withPhotoDefaults('snakes', {
      id: 'ball-python-banana',
      displayName: 'Ball Python Banana',
      photoQuery: 'Ball python Banana morph yellow lavender',
      funFact: 'Banana is a co-dominant ball python morph producing yellow and lavender coloration with freckling.',
      factSource: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles'
    }),
    withPhotoDefaults('snakes', {
      id: 'milk-snake',
      displayName: 'Milk Snake',
      photoQuery: 'Milk snake Lampropeltis triangulum',
      funFact: 'Milk snakes display tricolor banding that mimics the aposematic pattern of coral snakes.',
      factSource: 'https://animals.sandiegozoo.org/animals/milk-snake'
    }),
    withPhotoDefaults('snakes', {
      id: 'dumerils-boa',
      displayName: "Dumeril's Boa",
      photoQuery: "Dumeril's boa Acrantophis dumerili Madagascar",
      funFact: "Dumeril's boas are ground-dwelling Madagascar constrictors known for earthy patterning and calm captive temperament.",
      factSource: 'https://animals.sandiegozoo.org/animals/dumerils-boa'
    }),
    withPhotoDefaults('snakes', {
      id: 'king-cobra',
      displayName: 'King Cobra',
      photoQuery: 'King cobra Ophiophagus hannah',
      funFact: 'King cobras are the longest venomous snakes in the world.',
      factSource: 'https://en.wikipedia.org/wiki/King_cobra'
    }),
    withPhotoDefaults('snakes', {
      id: 'black-mamba',
      displayName: 'Black Mamba',
      photoQuery: 'Black mamba Dendroaspis polylepis',
      funFact: 'Black mambas are named for the inky black lining of their mouths, not their body color.',
      factSource: 'https://en.wikipedia.org/wiki/Black_mamba'
    }),
    withPhotoDefaults('snakes', {
      id: 'reticulated-python',
      displayName: 'Reticulated Python',
      photoQuery: 'Reticulated python Malayopython reticulatus',
      funFact: 'Reticulated pythons are among the longest snakes in the world.',
      factSource: 'https://en.wikipedia.org/wiki/Reticulated_python'
    }),
    withPhotoDefaults('snakes', {
      id: 'green-anaconda',
      displayName: 'Green Anaconda',
      photoQuery: 'Green anaconda Eunectes murinus',
      funFact: 'Green anacondas are among the heaviest snakes in the world.',
      factSource: 'https://en.wikipedia.org/wiki/Green_anaconda'
    }),
    withPhotoDefaults('snakes', {
      id: 'emerald-tree-boa',
      displayName: 'Emerald Tree Boa',
      photoQuery: 'Emerald tree boa Corallus caninus',
      funFact: 'Emerald tree boas are born orange or red and turn green as they mature.',
      factSource: 'https://en.wikipedia.org/wiki/Emerald_tree_boa'
    }),
    withPhotoDefaults('snakes', {
      id: 'eastern-indigo-snake',
      displayName: 'Eastern Indigo Snake',
      photoQuery: 'Eastern indigo snake Drymarchon couperi',
      funFact: 'Eastern indigo snakes are the longest native snakes in the United States.',
      factSource: 'https://en.wikipedia.org/wiki/Eastern_indigo_snake'
    }),
    withPhotoDefaults('snakes', {
      id: 'copperhead',
      displayName: 'Copperhead',
      photoQuery: 'Agkistrodon contortrix copperhead',
      funFact: 'Copperheads are pit vipers with hourglass-shaped crossbands.',
      factSource: 'https://en.wikipedia.org/wiki/Agkistrodon_contortrix'
    })
  ],
  chickens: [
    withPhotoDefaults('chickens', {
      id: 'silkie',
      displayName: 'Silkie',
      photoQuery: 'Silkie chicken breed',
      funFact: 'Silkies carry fibromelanosis, causing dark skin and connective tissues.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/silkie-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'ayam-cemani',
      displayName: 'Ayam Cemani',
      photoQuery: 'Ayam Cemani chicken breed',
      funFact: 'Ayam Cemani birds are notable for hyperpigmentation across many tissues.',
      factSource: 'https://chickenexperts.com/ayam-cemani-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'dong-tao',
      displayName: 'Dong Tao',
      photoQuery: 'Dong Tao chicken breed',
      funFact: 'Dong Tao chickens are recognized for unusually thick, scaled legs.',
      factSource: 'https://backyardchickens.com/'
    }),
    withPhotoDefaults('chickens', {
      id: 'la-fleche',
      displayName: 'La Fleche',
      photoQuery: 'La Fleche chicken breed',
      funFact: 'La Fleche is a historic French breed with a horned V-comb.',
      factSource: 'https://livestockconservancy.org/'
    }),
    withPhotoDefaults('chickens', {
      id: 'australorp',
      displayName: 'Australorp',
      photoQuery: 'Australorp chicken breed',
      funFact: 'Australorps are known for excellent laying performance in dual-purpose systems.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/australorp-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'welsummer',
      displayName: 'Welsummer',
      photoQuery: 'Welsummer chicken breed',
      funFact: 'Welsummers are known for dark brown terracotta eggs.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/welsummer-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'cream-legbar',
      displayName: 'Cream Legbar',
      photoQuery: 'Cream Legbar chicken breed',
      funFact: 'Cream Legbars are a blue-egg laying autosexing breed.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/cream-legbar-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'ameraucana',
      displayName: 'Ameraucana',
      photoQuery: 'Ameraucana chicken breed',
      funFact: 'Ameraucanas carry the blue egg gene and should have muffs and beard.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/ameraucana-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'orpington',
      displayName: 'Orpington',
      photoQuery: 'Buff Orpington chicken breed',
      funFact: 'Orpingtons are large soft-feathered heritage birds known for a rounded silhouette, calm temperament, and broodiness.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/orpington-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'plymouth-rock',
      displayName: 'Plymouth Rock',
      photoQuery: 'Barred Plymouth Rock chicken breed',
      funFact: 'Plymouth Rocks are an American heritage breed in barred and other varieties that helped establish dual-purpose production flocks.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/plymouth-rock-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'rhode-island-red',
      displayName: 'Rhode Island Red',
      photoQuery: 'Rhode Island Red chicken breed',
      funFact: 'Rhode Island Reds are a single-comb American heritage breed known for strong laying performance and rich mahogany plumage.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/rhode-island-red-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'marans',
      displayName: 'Marans',
      photoQuery: 'Black Copper Marans chicken breed',
      funFact: 'Marans are a French breed prized by fanciers for extremely dark chocolate-brown eggs.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/marans-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'polish',
      displayName: 'Polish',
      photoQuery: 'Polish chicken crested breed',
      funFact: 'Polish chickens are immediately recognized by a large vault crest and are commonly shown in V-comb varieties.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/polish-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'sussex',
      displayName: 'Sussex',
      photoQuery: 'Speckled Sussex chicken breed',
      funFact: 'Sussex is a British heritage breed available in speckled and other varieties, known for dual-purpose production.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/sussex-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'cochin',
      displayName: 'Cochin',
      photoQuery: 'Cochin chicken feathered legs',
      funFact: 'Cochins are large Chinese-origin birds known for heavily feathered legs, extreme broodiness, and exhibition influence.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/cochin-chicken/'
    }),
    withPhotoDefaults('chickens', {
      id: 'brahma',
      displayName: 'Brahma',
      photoQuery: 'Brahma chicken',
      funFact: 'Brahmas are one of the largest chicken breeds, with feathered feet.',
      factSource: 'https://en.wikipedia.org/wiki/Brahma_chicken'
    }),
    withPhotoDefaults('chickens', {
      id: 'leghorn',
      displayName: 'Leghorn',
      photoQuery: 'Leghorn chicken',
      funFact: 'Leghorns are prolific layers of white eggs.',
      factSource: 'https://en.wikipedia.org/wiki/Leghorn_chicken'
    }),
    withPhotoDefaults('chickens', {
      id: 'wyandotte',
      displayName: 'Wyandotte',
      photoQuery: 'Wyandotte chicken',
      funFact: 'Wyandottes have a rose comb that resists frostbite.',
      factSource: 'https://en.wikipedia.org/wiki/Wyandotte_chicken'
    }),
    withPhotoDefaults('chickens', {
      id: 'faverolles',
      displayName: 'Faverolles',
      photoQuery: 'Faverolles chicken',
      funFact: 'Faverolles have five toes, a beard, muffs and feathered feet.',
      factSource: 'https://en.wikipedia.org/wiki/Faverolles_chicken'
    }),
    withPhotoDefaults('chickens', {
      id: 'sebright',
      displayName: 'Sebright',
      photoQuery: 'Sebright chicken bantam',
      funFact: 'Sebrights are true bantams with laced feathers, and the roosters are hen-feathered.',
      factSource: 'https://en.wikipedia.org/wiki/Sebright_chicken'
    }),
    withPhotoDefaults('chickens', {
      id: 'barnevelder',
      displayName: 'Barnevelder',
      photoQuery: 'Barnevelder chicken',
      funFact: 'Barnevelders lay dark brown eggs.',
      factSource: 'https://en.wikipedia.org/wiki/Barnevelder'
    }),
    withPhotoDefaults('chickens', {
      id: 'serama',
      displayName: 'Serama',
      photoQuery: 'Serama chicken bantam',
      funFact: 'Seramas are among the smallest chickens in the world.',
      factSource: 'https://en.wikipedia.org/wiki/Serama'
    })
  ],
  cat: [
    withPhotoDefaults('cat', {
      id: 'maine-coon',
      displayName: 'Maine Coon',
      catApiBreedId: 'mcoo',
      photoQuery: 'Maine Coon cat breed',
      funFact: 'Maine Coons are a large natural breed known for a shaggy coat and substantial ruff.',
      factSource: 'https://cfa.org/breed/maine-coon/'
    }),
    withPhotoDefaults('cat', {
      id: 'chartreux',
      displayName: 'Chartreux',
      catApiBreedId: 'char',
      photoQuery: 'Chartreux cat breed',
      funFact: 'The Chartreux is known for a woolly blue coat and copper to gold eye color.',
      factSource: 'https://cfa.org/breed/chartreux/'
    }),
    withPhotoDefaults('cat', {
      id: 'sphynx',
      displayName: 'Sphynx',
      catApiBreedId: 'sphy',
      photoQuery: 'Sphynx cat breed',
      funFact: 'Sphynx cats are not truly hairless but carry a very fine down coat.',
      factSource: 'https://cfa.org/breed/sphynx/'
    }),
    withPhotoDefaults('cat', {
      id: 'savannah',
      displayName: 'Savannah',
      catApiBreedId: 'sava',
      photoQuery: 'Savannah cat breed',
      funFact: 'Savannahs were accepted for championship in TICA in 2012.',
      factSource: 'https://tica.org/breed/savannah/'
    }),
    withPhotoDefaults('cat', {
      id: 'bengal',
      displayName: 'Bengal',
      catApiBreedId: 'beng',
      photoQuery: 'Bengal cat breed',
      funFact: 'Bengals are prized for horizontal flow, rosetting, and high contrast pattern.',
      factSource: 'https://tica.org/breed/bengal/'
    }),
    withPhotoDefaults('cat', {
      id: 'norwegian-forest-cat',
      displayName: 'Norwegian Forest Cat',
      catApiBreedId: 'norw',
      photoQuery: 'Norwegian Forest Cat breed',
      funFact: 'Norwegian Forest Cats have a water-repellent outer coat over a dense undercoat.',
      factSource: 'https://cfa.org/breed/norwegian-forest-cat/'
    }),
    withPhotoDefaults('cat', {
      id: 'abyssinian',
      displayName: 'Abyssinian',
      catApiBreedId: 'abys',
      photoQuery: 'Abyssinian cat breed',
      funFact: 'Abyssinians are defined by ticked coat patterning rather than tabby striping.',
      factSource: 'https://cfa.org/breed/abyssinian/'
    }),
    withPhotoDefaults('cat', {
      id: 'ragdoll',
      displayName: 'Ragdoll',
      catApiBreedId: 'ragd',
      photoQuery: 'Ragdoll cat breed',
      funFact: 'Ragdolls are pointed cats with blue eyes and a slow-maturing coat.',
      factSource: 'https://cfa.org/breed/ragdoll/'
    }),
    withPhotoDefaults('cat', {
      id: 'scottish-fold',
      displayName: 'Scottish Fold',
      catApiBreedId: 'sfol',
      photoQuery: 'Scottish Fold cat breed folded ears',
      funFact: 'Scottish Folds are recognized by folded ears caused by a cartilage mutation associated with joint concerns.',
      factSource: 'https://cfa.org/breed/scottish-fold/'
    }),
    withPhotoDefaults('cat', {
      id: 'siamese',
      displayName: 'Siamese',
      catApiBreedId: 'siam',
      photoQuery: 'Siamese cat breed pointed',
      funFact: 'Siamese are a pointed breed known for vocal temperament and a long history distinguished by traditional versus modern head types.',
      factSource: 'https://cfa.org/breed/siamese/'
    }),
    withPhotoDefaults('cat', {
      id: 'burmese',
      displayName: 'Burmese',
      catApiBreedId: 'bure',
      photoQuery: 'Burmese cat breed sable',
      funFact: 'Burmese are a cobby semi-foreign breed known for satin coat texture, round head, and strong companion bonding.',
      factSource: 'https://cfa.org/breed/burmese/'
    }),
    withPhotoDefaults('cat', {
      id: 'russian-blue',
      displayName: 'Russian Blue',
      catApiBreedId: 'rblu',
      photoQuery: 'Russian Blue cat breed',
      funFact: 'Russian Blues are valued for a dense plush blue-gray coat, green eyes, and a reserved temperament.',
      factSource: 'https://cfa.org/breed/russian-blue/'
    }),
    withPhotoDefaults('cat', {
      id: 'turkish-van',
      displayName: 'Turkish Van',
      catApiBreedId: 'tvan',
      photoQuery: 'Turkish Van cat breed van pattern',
      funFact: 'Turkish Vans are a semi-longhair breed known for the van marking pattern and an unusual affinity for water.',
      factSource: 'https://cfa.org/breed/turkish-van/'
    }),
    withPhotoDefaults('cat', {
      id: 'birman',
      displayName: 'Birman',
      catApiBreedId: 'birm',
      photoQuery: 'Birman cat breed mitted pointed',
      funFact: 'Birmans are a pointed semi-longhair breed recognized by precisely mitted white feet and a single silky coat layer.',
      factSource: 'https://cfa.org/breed/birman/'
    }),
    withPhotoDefaults('cat', {
      id: 'persian',
      displayName: 'Persian',
      photoQuery: 'Persian cat',
      funFact: 'Persian cats have a long coat and, in show lines, a very flat face.',
      factSource: 'https://en.wikipedia.org/wiki/Persian_cat'
    }),
    withPhotoDefaults('cat', {
      id: 'british-shorthair',
      displayName: 'British Shorthair',
      photoQuery: 'British Shorthair cat',
      funFact: 'The blue British Shorthair is the best-known color of the breed.',
      factSource: 'https://en.wikipedia.org/wiki/British_Shorthair'
    }),
    withPhotoDefaults('cat', {
      id: 'devon-rex',
      displayName: 'Devon Rex',
      photoQuery: 'Devon Rex cat',
      funFact: 'Devon Rex cats have a soft, wavy coat and very large ears.',
      factSource: 'https://en.wikipedia.org/wiki/Devon_Rex'
    }),
    withPhotoDefaults('cat', {
      id: 'egyptian-mau',
      displayName: 'Egyptian Mau',
      photoQuery: 'Egyptian Mau cat',
      funFact: 'Egyptian Maus are one of the few naturally spotted domestic cat breeds.',
      factSource: 'https://en.wikipedia.org/wiki/Egyptian_Mau'
    }),
    withPhotoDefaults('cat', {
      id: 'manx',
      displayName: 'Manx',
      photoQuery: 'Manx cat tailless',
      funFact: 'Manx cats are known for being born without a tail, or with a short one.',
      factSource: 'https://en.wikipedia.org/wiki/Manx_cat'
    }),
    withPhotoDefaults('cat', {
      id: 'turkish-angora',
      displayName: 'Turkish Angora',
      photoQuery: 'Turkish Angora cat',
      funFact: 'Turkish Angoras are a long-haired breed often seen in pure white.',
      factSource: 'https://en.wikipedia.org/wiki/Turkish_Angora'
    }),
    withPhotoDefaults('cat', {
      id: 'ocicat',
      displayName: 'Ocicat',
      photoQuery: 'Ocicat cat',
      funFact: 'Ocicats look wild but have no wild ancestry.',
      factSource: 'https://en.wikipedia.org/wiki/Ocicat'
    })
  ],
  horse: [
    withPhotoDefaults('horse', {
      id: 'american-quarter-horse',
      displayName: 'American Quarter Horse',
      photoQuery: 'American Quarter Horse breed',
      funFact: 'Quarter Horses are known for explosive short-distance acceleration.',
      factSource: 'https://www.aqha.com/'
    }),
    withPhotoDefaults('horse', {
      id: 'arabian',
      displayName: 'Arabian',
      photoQuery: 'Arabian horse breed',
      funFact: 'Arabians are recognized for a dished profile, high tail carriage, and endurance influence.',
      factSource: 'https://www.usef.org/compete/breeds-disciplines/breeds/arabian'
    }),
    withPhotoDefaults('horse', {
      id: 'friesian',
      displayName: 'Friesian',
      photoQuery: 'Friesian horse breed',
      funFact: 'Friesians are noted for black coat color, abundant feathering, and animated action.',
      factSource: 'https://www.usef.org/compete/breeds-disciplines/breeds/friesian'
    }),
    withPhotoDefaults('horse', {
      id: 'cleveland-bay',
      displayName: 'Cleveland Bay',
      photoQuery: 'Cleveland Bay horse breed',
      funFact: 'Cleveland Bays are an old English carriage breed traditionally always bay in color.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/cleveland-bay-horse/'
    }),
    withPhotoDefaults('horse', {
      id: 'morgan',
      displayName: 'Morgan',
      photoQuery: 'Morgan horse breed',
      funFact: 'Morgans are known for versatility across driving, saddle seat, and general riding work.',
      factSource: 'https://www.usef.org/compete/breeds-disciplines/breeds/morgan'
    }),
    withPhotoDefaults('horse', {
      id: 'andalusian',
      displayName: 'Andalusian',
      photoQuery: 'Andalusian horse breed',
      funFact: 'Andalusians are associated with collected movement and Iberian baroque type.',
      factSource: 'https://www.usef.org/compete/breeds-disciplines/breeds/andalusian-lusitano'
    }),
    withPhotoDefaults('horse', {
      id: 'american-cream-draft',
      displayName: 'American Cream Draft',
      photoQuery: 'American Cream Draft horse breed',
      funFact: 'American Cream Drafts are the only draft breed developed in the United States.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/american-cream-draft-horse/'
    }),
    withPhotoDefaults('horse', {
      id: 'marsh-tacky',
      displayName: 'Marsh Tacky',
      photoQuery: 'Marsh Tacky horse breed',
      funFact: 'Marsh Tackies developed in the Carolina Lowcountry and are adapted to wetlands terrain.',
      factSource: 'https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/marsh-tacky-horse/'
    }),
    withPhotoDefaults('horse', {
      id: 'thoroughbred',
      displayName: 'Thoroughbred',
      photoQuery: 'Thoroughbred racehorse breed',
      funFact: 'Thoroughbreds are a racing breed central to flat racing and a major influence on warmblood sport horse breeding.',
      factSource: 'https://www.jockeyclub.com/'
    }),
    withPhotoDefaults('horse', {
      id: 'appaloosa',
      displayName: 'Appaloosa',
      photoQuery: 'Appaloosa horse leopard spotting',
      funFact: 'Appaloosas are an American stock breed known for leopard complex coat patterning.',
      factSource: 'https://www.appaloosa.com/'
    }),
    withPhotoDefaults('horse', {
      id: 'tennessee-walking-horse',
      displayName: 'Tennessee Walking Horse',
      photoQuery: 'Tennessee Walking Horse gaited breed',
      funFact: 'Tennessee Walking Horses are a gaited breed known for the running walk and associated with flat-shod and performance show divisions.',
      factSource: 'https://www.twhbea.com/'
    }),
    withPhotoDefaults('horse', {
      id: 'clydesdale',
      displayName: 'Clydesdale',
      photoQuery: 'Clydesdale draft horse feathering',
      funFact: 'Clydesdales are a Scottish heavy draft breed known for substantial feathering and high-stepping action.',
      factSource: 'https://www.clydesdalehorsesociety.com/'
    }),
    withPhotoDefaults('horse', {
      id: 'hanoverian',
      displayName: 'Hanoverian',
      photoQuery: 'Hanoverian warmblood sport horse',
      funFact: 'Hanoverians are a German warmblood registry breed known for sport performance across dressage, jumping, and eventing.',
      factSource: 'https://www.hanoverian.org/'
    }),
    withPhotoDefaults('horse', {
      id: 'mustang',
      displayName: 'Mustang',
      photoQuery: 'Mustang wild horse American',
      funFact: 'Mustangs are feral-origin North American horses descended from Spanish stock, managed on public lands by the BLM.',
      factSource: 'https://www.blm.gov/programs/wild-horse-and-burro'
    }),
    withPhotoDefaults('horse', {
      id: 'akhal-teke',
      displayName: 'Akhal-Teke',
      photoQuery: 'Akhal-Teke horse',
      funFact: 'Akhal-Tekes are famous for a metallic sheen on their coats.',
      factSource: 'https://en.wikipedia.org/wiki/Akhal-Teke'
    }),
    withPhotoDefaults('horse', {
      id: 'shire',
      displayName: 'Shire',
      photoQuery: 'Shire horse',
      funFact: 'Shires are a British draught breed that has held records for the tallest horse.',
      factSource: 'https://en.wikipedia.org/wiki/Shire_horse'
    }),
    withPhotoDefaults('horse', {
      id: 'percheron',
      displayName: 'Percheron',
      photoQuery: 'Percheron horse',
      funFact: 'Percherons are a French draft breed, usually grey or black.',
      factSource: 'https://en.wikipedia.org/wiki/Percheron'
    }),
    withPhotoDefaults('horse', {
      id: 'haflinger',
      displayName: 'Haflinger',
      photoQuery: 'Haflinger horse',
      funFact: 'Haflingers are always chestnut with a flaxen mane and tail.',
      factSource: 'https://en.wikipedia.org/wiki/Haflinger'
    }),
    withPhotoDefaults('horse', {
      id: 'lipizzan',
      displayName: 'Lipizzan',
      photoQuery: 'Lipizzaner horse',
      funFact: 'Lipizzans are born dark and turn grey or white as they age.',
      factSource: 'https://en.wikipedia.org/wiki/Lipizzan'
    }),
    withPhotoDefaults('horse', {
      id: 'icelandic-horse',
      displayName: 'Icelandic Horse',
      photoQuery: 'Icelandic horse',
      funFact: 'Icelandic horses have two extra gaits beyond walk, trot and canter.',
      factSource: 'https://en.wikipedia.org/wiki/Icelandic_horse'
    }),
    withPhotoDefaults('horse', {
      id: 'shetland-pony',
      displayName: 'Shetland Pony',
      photoQuery: 'Shetland pony',
      funFact: 'Shetland ponies are very strong for their small size.',
      factSource: 'https://en.wikipedia.org/wiki/Shetland_pony'
    })
  ]
};

export const getEntitiesForCategory = (category) => {
  if (category === 'mixed') {
    return [
      ...breeds.dogs,
      ...breeds.snakes,
      ...breeds.chickens,
      ...breeds.cat,
      ...breeds.horse
    ];
  }

  return breeds[category] || [];
};


// Full clue entries (look-alike names, fun fact, source) for games that need more than the clue text.
export const breedClueDetails = breedClues;

// Hand-checked clues that describe each animal without naming it; used for trivia and crossword clues.
export const entityClues = Object.fromEntries(
  Object.entries(breedClues).map(([id, { clue }]) => [id, clue])
);
