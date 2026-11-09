import { categories as photoAnimals } from '../data/breeds';
import { animalGroups, animalLabels, categoryLabel } from '../data/groups';

// Animals are listed under their group. Choosing the group itself plays every animal in it.
// Photo games pass `photoGame` so animals without breed photos (and groups with none) are hidden; a
// group keeps its "(all)" choice there whenever the full group has more than one animal, so switching
// from trivia to a photo game never leaves the menu on a choice it no longer lists.
function CategoryPicker({ value, onChange, includeMixed = true, photoGame = false, placeholder, id }) {
  const groups = animalGroups
    .map((group) => ({
      ...group,
      hasAllOption: group.animals.length > 1,
      animals: photoGame ? group.animals.filter((animal) => photoAnimals.includes(animal)) : group.animals
    }))
    .filter((group) => group.animals.length > 0);

  return (
    <label className="field">
      <span>Category</span>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {includeMixed && <option value="mixed">{categoryLabel('mixed')}</option>}
        {groups.map((group) => (
          <optgroup key={group.id} label={group.label}>
            {group.hasAllOption && <option value={group.id}>{categoryLabel(group.id)}</option>}
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
