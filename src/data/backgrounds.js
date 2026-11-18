// Close-up photos used as page backgrounds. Each animal has its own; groups, Mixed and pages with no
// category use the jungle leaf. Most are from Wikimedia Commons under free licenses, checked by eye for
// watermarks, and stored as compressed WebP copies in public/backgrounds. The CC BY and CC BY-SA
// licenses need credit, which the page footer shows for the photo on screen. Photos the site owner
// supplied have artist, license and source set to null, and the footer shows only the description.

export const backgrounds = {
  jungle: {
    file: '/backgrounds/jungle.webp',
    description: 'Monstera leaf',
    artist: 'Forest & Kim Starr',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Starr_980529-4186_Monstera_deliciosa.jpg'
  },
  dogs: {
    file: '/backgrounds/dogs.webp',
    description: 'Golden retriever fur and eyelashes',
    artist: 'David Whelan',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Golden_retriever_eyelashes_(30082360352).jpg'
  },
  cat: {
    file: '/backgrounds/cat.webp',
    description: "A tabby cat's nose and whiskers",
    artist: 'tooony',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Cat_rhinarium.JPG'
  },
  cattle: {
    file: '/backgrounds/cattle.webp',
    description: 'A shaggy Highland cow',
    artist: 'Sally',
    license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Highland_cattle_in_Little_Langdale_-_geograph.org.uk_-_2269400.jpg'
  },
  pigs: {
    file: '/backgrounds/pigs.webp',
    description: "A pig's bristly snout",
    artist: 'Quinn Dombrowski from Berkeley, USA',
    license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Hairy_two-tone_snout_(6044069728).jpg'
  },
  sheep: {
    file: '/backgrounds/sheep.webp',
    description: 'Freshly shorn sheep fleece',
    artist: 'Julian Paren',
    license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Sheep_fleece_-_Scottish_Wool_Growers_Depot,_Evanton_-_geograph.org.uk_-_4995945.jpg'
  },
  goats: {
    file: '/backgrounds/goats.webp',
    description: 'A horned white and brown goat in close-up',
    artist: 'André Karwath (Aka)',
    license: 'CC BY-SA 2.5',
    source: 'https://commons.wikimedia.org/wiki/File:Domestic_Goat_Portrait_(aka).jpg'
  },
  horse: {
    file: '/backgrounds/horse.webp',
    description: "A bay horse's muzzle",
    // Supplied by the site owner in November 2026; no outside credit on file.
    artist: null,
    license: null,
    source: null
  },
  chickens: {
    file: '/backgrounds/chickens.webp',
    description: 'Rooster neck feathers in copper and black',
    artist: 'stevepb',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Rooster-475790.jpg'
  },
  poultry: {
    file: '/backgrounds/poultry.webp',
    description: 'Mallard wing feathers with the blue-green patch',
    artist: 'Auckland Museum Collections from Auckland, Aotearoa New Zealand',
    license: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Anas_platyrhynchos_(Mallard)_(48719405292).jpg'
  },
  snakes: {
    file: '/backgrounds/snakes.webp',
    description: 'A black mangrove pit viper coiled on black',
    // Supplied by the site owner in November 2026; no outside credit on file.
    artist: null,
    license: null,
    source: null
  },
  lizards: {
    file: '/backgrounds/lizards.webp',
    description: 'Bearded dragon scales in orange and gray',
    // Supplied by the site owner in November 2026; no outside credit on file.
    artist: null,
    license: null,
    source: null
  },
  turtles: {
    file: '/backgrounds/turtles.webp',
    description: 'Tent tortoise shell pattern',
    artist: 'Marius Burger',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Western_%27Namaqualand%27_tent_tortoise_scutes.jpg'
  },
  crocodilians: {
    file: '/backgrounds/crocodilians.webp',
    description: 'Crocodile skin',
    // Supplied by the site owner in November 2026; no outside credit on file.
    artist: null,
    license: null,
    source: null
  },
  frogs: {
    file: '/backgrounds/frogs.webp',
    description: 'Red-eyed tree frog',
    artist: 'Hans Hillewaert',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Agalychnis_callidryas_(eye_detail).jpg'
  },
  salamanders: {
    file: '/backgrounds/salamanders.webp',
    description: 'Fire salamander, black and yellow',
    artist: 'Didier Descouens',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Salamandara_salamandra_MHNT_3.jpg'
  },
  bees: {
    file: '/backgrounds/bees.webp',
    description: 'A honey bee on lavender',
    // Supplied by the site owner in November 2026; no outside credit on file.
    artist: null,
    license: null,
    source: null
  },
  butterflies: {
    file: '/backgrounds/butterflies.webp',
    description: 'A white moth with orange spots on tree bark',
    // Supplied by the site owner in November 2026; no outside credit on file.
    artist: null,
    license: null,
    source: null
  },
  bugs: {
    file: '/backgrounds/bugs.webp',
    description: 'Dragonfly wing veins',
    artist: 'Patilssp',
    license: 'CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Vein_pattern_on_a_dragonfly_wing.jpg'
  }
};

export const defaultBackground = 'jungle';

// The background for a category value: an animal id has its own photo, anything else gets the jungle leaf.
export const backgroundKeyFor = (category) => (backgrounds[category] ? category : defaultBackground);
