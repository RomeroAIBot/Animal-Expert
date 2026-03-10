export const categories = ['dogs', 'snakes', 'chickens', 'cat', 'horse'];

const fallbackImages = {
  dogs: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  snakes: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=900&q=80',
  chickens: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80',
  cat: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80',
  horse: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=900&q=80'
};

const withPhotoDefaults = (category, entity) => ({
  ...entity,
  photoQuery: entity.photoQuery,
  imageQueries: [entity.photoQuery],
  fallbackUrl: entity.fallbackUrl || fallbackImages[category]
});

export const breeds = {
  dogs: [
    withPhotoDefaults('dogs', {
      id: 'norwegian-lundehund',
      displayName: 'Norwegian Lundehund',
      dogApiBreedId: 198,
      photoQuery: 'Norwegian Lundehund dog breed',
      funFact: 'Lundehunds are known for six functional toes on each foot.',
      factSource: 'https://www.akc.org/dog-breeds/norwegian-lundehund/'
    }),
    withPhotoDefaults('dogs', {
      id: 'belgian-malinois',
      displayName: 'Belgian Malinois',
      dogApiBreedId: 16,
      photoQuery: 'Belgian Malinois working dog',
      funFact: 'The Belgian Malinois is often selected for high-drive detection and protection work.',
      factSource: 'https://www.akc.org/dog-breeds/belgian-malinois/'
    }),
    withPhotoDefaults('dogs', {
      id: 'border-collie',
      displayName: 'Border Collie',
      dogApiBreedId: 50,
      photoQuery: 'Border Collie agility dog',
      funFact: 'Border Collies are widely used in stock work for intense eye and biddability.',
      factSource: 'https://www.akc.org/dog-breeds/border-collie/'
    }),
    withPhotoDefaults('dogs', {
      id: 'german-shepherd',
      displayName: 'German Shepherd Dog',
      dogApiBreedId: 115,
      photoQuery: 'German Shepherd Dog breed standard',
      funFact: 'German Shepherd Dogs are a classic utility breed in herding and service roles.',
      factSource: 'https://www.akc.org/dog-breeds/german-shepherd-dog/'
    }),
    withPhotoDefaults('dogs', {
      id: 'australian-cattle-dog',
      displayName: 'Australian Cattle Dog',
      dogApiBreedId: 12,
      photoQuery: 'Australian Cattle Dog breed',
      funFact: 'Australian Cattle Dogs were developed for heel-nipping cattle control.',
      factSource: 'https://www.akc.org/dog-breeds/australian-cattle-dog/'
    }),
    withPhotoDefaults('dogs', {
      id: 'doberman-pinscher',
      displayName: 'Doberman Pinscher',
      dogApiBreedId: 94,
      photoQuery: 'Doberman Pinscher dog breed',
      funFact: 'Dobermans are known for a compact, athletic build and strong trainability.',
      factSource: 'https://www.akc.org/dog-breeds/doberman-pinscher/'
    }),
    withPhotoDefaults('dogs', {
      id: 'newfoundland',
      displayName: 'Newfoundland',
      dogApiBreedId: 212,
      photoQuery: 'Newfoundland dog breed',
      funFact: 'Newfoundlands have a long history in water rescue work.',
      factSource: 'https://www.akc.org/dog-breeds/newfoundland/'
    }),
    withPhotoDefaults('dogs', {
      id: 'vizsla',
      displayName: 'Vizsla',
      dogApiBreedId: 287,
      photoQuery: 'Vizsla sporting dog',
      funFact: 'Vizslas are a Hungarian pointing breed with strong handler attachment.',
      factSource: 'https://www.akc.org/dog-breeds/vizsla/'
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
