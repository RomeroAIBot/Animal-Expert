export const sourceCatalog = {
  images: {
    dogs: [
      {
        name: 'The Dog API',
        type: 'image + breed metadata',
        url: 'https://docs.thedogapi.com/'
      },
      {
        name: 'dog.ceo',
        type: 'dog image fallback',
        url: 'https://dog.ceo/dog-api/'
      },
      {
        name: 'Unsplash',
        type: 'generic image search fallback',
        url: 'https://unsplash.com/documentation'
      }
    ],
    cats: [
      {
        name: 'The Cat API',
        type: 'image + breed metadata',
        url: 'https://www.thecatapi.com/'
      },
      {
        name: 'Unsplash',
        type: 'generic image search fallback',
        url: 'https://unsplash.com/documentation'
      }
    ],
    snakes: [
      {
        name: 'Unsplash',
        type: 'image search',
        url: 'https://unsplash.com/documentation'
      }
    ],
    chickens: [
      {
        name: 'Unsplash',
        type: 'image search',
        url: 'https://unsplash.com/documentation'
      }
    ],
    horses: [
      {
        name: 'Unsplash',
        type: 'image search',
        url: 'https://unsplash.com/documentation'
      }
    ]
  },
  facts: {
    dogs: [
      {
        name: 'American Kennel Club',
        focus: 'breed standards, traits, sports',
        url: 'https://www.akc.org/dog-breeds/'
      }
    ],
    cats: [
      {
        name: "Cat Fanciers' Association",
        focus: 'breed standards and profiles',
        url: 'https://cfa.org/breeds/'
      },
      {
        name: 'The International Cat Association',
        focus: 'breed sections and standards',
        url: 'https://tica.org/'
      }
    ],
    snakes: [
      {
        name: 'Merck Veterinary Manual',
        focus: 'husbandry and health',
        url: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/reptiles/management-and-husbandry-of-reptiles'
      },
      {
        name: 'U.S. Fish & Wildlife Service',
        focus: 'taxonomy and species profiles',
        url: 'https://www.fws.gov/'
      },
      {
        name: 'San Diego Zoo Wildlife Alliance',
        focus: 'species natural history',
        url: 'https://animals.sandiegozoo.org/'
      }
    ],
    chickens: [
      {
        name: 'The Livestock Conservancy',
        focus: 'heritage breed profiles and comparison charts',
        url: 'https://livestockconservancy.org/heritage-breeds/'
      }
    ],
    horses: [
      {
        name: 'US Equestrian',
        focus: 'recognized breed profiles',
        url: 'https://www.usef.org/compete/breeds-disciplines'
      },
      {
        name: 'American Quarter Horse Association',
        focus: 'breed characteristics and registry context',
        url: 'https://www.aqha.com/'
      },
      {
        name: 'The Livestock Conservancy',
        focus: 'heritage horse breed profiles',
        url: 'https://livestockconservancy.org/heritage-breeds/livestock-breeds/'
      }
    ]
  }
};

export const getSourcesForCategory = (category) => ({
  images: sourceCatalog.images[category] || [],
  facts: sourceCatalog.facts[category] || []
});
