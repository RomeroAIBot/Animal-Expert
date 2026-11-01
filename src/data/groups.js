// Animals are organised into groups. A player can pick one animal, a whole group (questions
// drawn from every animal in it) or Mixed (every animal in the game). Category values are the
// animal ids below, the group ids, or 'mixed'; the older ids ('cat', 'horse') are kept so saved
// games, history and rankings keep working.

export const animalLabels = {
  dogs: 'Dogs',
  cat: 'Cats',
  cattle: 'Cattle',
  pigs: 'Pigs',
  sheep: 'Sheep',
  goats: 'Goats',
  horse: 'Horses',
  chickens: 'Chickens',
  snakes: 'Snakes'
};

export const animalGroups = [
  { id: 'pets', label: 'Pets', animals: ['dogs', 'cat'] },
  { id: 'livestock', label: 'Livestock', animals: ['cattle', 'pigs', 'sheep', 'goats', 'horse', 'chickens'] },
  { id: 'reptiles', label: 'Reptiles & Amphibians', animals: ['snakes'] }
];

export const allAnimals = animalGroups.flatMap((group) => group.animals);

// Every value a game can be played in, for rankings and the database check.
export const allCategoryValues = [...allAnimals, ...animalGroups.map((group) => group.id), 'mixed'];

const groupById = Object.fromEntries(animalGroups.map((group) => [group.id, group]));

export const isGroup = (value) => Boolean(groupById[value]);

// The animal ids a category value covers.
export const animalsInCategory = (value) => {
  if (value === 'mixed') return allAnimals;
  if (groupById[value]) return groupById[value].animals;
  return [value];
};

// "Livestock (all)" style label for menus and history.
export const categoryLabel = (value) => {
  if (value === 'mixed') return 'Mixed (every animal)';
  if (groupById[value]) return `${groupById[value].label} (all)`;
  return animalLabels[value] || value;
};

// Lower-case name for sentences, e.g. "12 livestock have a checked photo".
export const categoryNoun = (value) => {
  if (value === 'mixed') return 'animals';
  if (groupById[value]) return groupById[value].label.toLowerCase().replace('&', 'and');
  return (animalLabels[value] || value).toLowerCase();
};
