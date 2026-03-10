export const categories = ['dogs', 'snakes', 'chickens'];

export const breeds = {
  dogs: [
    {
      id: 'norwegian-lundehund',
      displayName: 'Norwegian Lundehund',
      dogApiBreedId: 198,
      imageQueries: ['Norwegian Lundehund dog breed'],
      funFact: 'Lundehunds are known for six functional toes on each foot.'
    },
    {
      id: 'belgian-malinois',
      displayName: 'Belgian Malinois',
      dogApiBreedId: 16,
      imageQueries: ['Belgian Malinois working dog'],
      funFact: 'The Belgian Malinois is often selected for high-drive detection and protection work.'
    },
    {
      id: 'border-collie',
      displayName: 'Border Collie',
      dogApiBreedId: 50,
      imageQueries: ['Border Collie agility dog'],
      funFact: 'Border Collies are widely used in stock work for intense eye and biddability.'
    },
    {
      id: 'german-shepherd',
      displayName: 'German Shepherd Dog',
      dogApiBreedId: 115,
      imageQueries: ['German Shepherd Dog breed standard'],
      funFact: 'German Shepherd Dogs are a classic utility breed in herding and service roles.'
    },
    {
      id: 'australian-cattle-dog',
      displayName: 'Australian Cattle Dog',
      dogApiBreedId: 12,
      imageQueries: ['Australian Cattle Dog breed'],
      funFact: 'Australian Cattle Dogs were developed for heel-nipping cattle control.'
    },
    {
      id: 'doberman-pinscher',
      displayName: 'Doberman Pinscher',
      dogApiBreedId: 94,
      imageQueries: ['Doberman Pinscher dog breed'],
      funFact: 'Dobermans are known for a compact, athletic build and strong trainability.'
    },
    {
      id: 'newfoundland',
      displayName: 'Newfoundland',
      dogApiBreedId: 212,
      imageQueries: ['Newfoundland dog breed'],
      funFact: 'Newfoundlands have a long history in water rescue work.'
    },
    {
      id: 'vizsla',
      displayName: 'Vizsla',
      dogApiBreedId: 287,
      imageQueries: ['Vizsla sporting dog'],
      funFact: 'Vizslas are a Hungarian pointing breed with strong handler attachment.'
    }
  ],
  snakes: [
    {
      id: 'ball-python-piebald',
      displayName: 'Ball Python (Piebald Morph)',
      imageQueries: ['Ball python Piebald morph'],
      funFact: 'Piebald in ball pythons is a recessive trait requiring two copies of the gene.'
    },
    {
      id: 'ball-python-mojave',
      displayName: 'Ball Python (Mojave Morph)',
      imageQueries: ['Ball python Mojave morph'],
      funFact: 'Mojave is an incomplete dominant morph in ball pythons.'
    },
    {
      id: 'ball-python-clown',
      displayName: 'Ball Python (Clown Morph)',
      imageQueries: ['Ball python Clown morph'],
      funFact: 'Clown is a recessive ball python project known for reduced dorsal pattern.'
    },
    {
      id: 'corn-snake',
      displayName: 'Corn Snake',
      imageQueries: ['Corn snake morph'],
      funFact: 'Corn snakes are commonly kept colubrids with many color morph lines.'
    },
    {
      id: 'hognose-snake',
      displayName: 'Western Hognose Snake',
      imageQueries: ['Western hognose snake'],
      funFact: 'Western hognose snakes often bluff with hooding and dramatic defensive displays.'
    },
    {
      id: 'king-snake',
      displayName: 'California Kingsnake',
      imageQueries: ['California kingsnake'],
      funFact: 'Kingsnakes are known ophiophagous snakes and may consume other snakes.'
    },
    {
      id: 'boa-constrictor',
      displayName: 'Boa Constrictor',
      imageQueries: ['Boa constrictor species'],
      funFact: 'Boa constrictors are live-bearing snakes, unlike many egg-laying species.'
    },
    {
      id: 'gaboon-viper',
      displayName: 'Gaboon Viper',
      imageQueries: ['Gaboon viper species'],
      funFact: 'Gaboon vipers have very long fangs among venomous snakes.'
    }
  ],
  chickens: [
    {
      id: 'silkie',
      displayName: 'Silkie',
      imageQueries: ['Silkie chicken breed'],
      funFact: 'Silkies carry fibromelanosis, causing dark skin and connective tissues.'
    },
    {
      id: 'ayam-cemani',
      displayName: 'Ayam Cemani',
      imageQueries: ['Ayam Cemani chicken breed'],
      funFact: 'Ayam Cemani birds are notable for hyperpigmentation across many tissues.'
    },
    {
      id: 'dong-tao',
      displayName: 'Dong Tao',
      imageQueries: ['Dong Tao chicken breed'],
      funFact: 'Dong Tao chickens are recognized for unusually thick, scaled legs.'
    },
    {
      id: 'la-fleche',
      displayName: 'La Fleche',
      imageQueries: ['La Fleche chicken breed'],
      funFact: 'La Fleche is a historic French breed with distinct V-comb horns.'
    },
    {
      id: 'australorp',
      displayName: 'Australorp',
      imageQueries: ['Australorp chicken breed'],
      funFact: 'Australorps are known for excellent laying performance in dual-purpose systems.'
    },
    {
      id: 'welsummer',
      displayName: 'Welsummer',
      imageQueries: ['Welsummer chicken breed'],
      funFact: 'Welsummers are known for dark brown terracotta eggs.'
    },
    {
      id: 'cream-legbar',
      displayName: 'Cream Legbar',
      imageQueries: ['Cream Legbar chicken breed'],
      funFact: 'Cream Legbars are a blue-egg laying autosexing breed.'
    },
    {
      id: 'ameraucana',
      displayName: 'Ameraucana',
      imageQueries: ['Ameraucana chicken breed'],
      funFact: 'Ameraucanas carry the blue egg gene and should have muffs and beard.'
    }
  ]
};

export const getEntitiesForCategory = (category) => {
  if (category === 'mixed') {
    return [...breeds.dogs, ...breeds.snakes, ...breeds.chickens];
  }
  return breeds[category] || [];
};