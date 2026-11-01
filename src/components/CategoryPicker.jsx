import { categories as photoAnimals } from '../data/breeds';
import { animalGroups, animalLabels, categoryLabel } from '../data/groups';

// Animals are listed under their group. Choosing the group itself plays every animal in it.
// Photo games pass `photoGame` so animals without breed photos (and groups left with only one
// animal) are hidden.
function CategoryPicker({ value, onChange, includeMixed = true, photoGame = false }) {
  const groups = animalGroups
    .map((group) => ({
      ...group,
      animals: photoGame ? group.animals.filter((animal) => photoAnimals.includes(animal)) : group.animals
    }))
    .filter((group) => group.animals.length > 0);

  return (
    <label className="field">
      <span>Category</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {includeMixed && <option value="mixed">{categoryLabel('mixed')}</option>}
        {groups.map((group) => (
          <optgroup key={group.id} label={group.label}>
            {group.animals.length > 1 && <option value={group.id}>{categoryLabel(group.id)}</option>}
            {group.animals.map((animal) => (
              <option key={animal} value={animal}>
                {animalLabels[animal]}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  );
}

export default CategoryPicker;
