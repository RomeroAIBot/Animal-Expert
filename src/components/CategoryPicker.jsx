import { categories } from '../data/breeds';

const labels = {
  dogs: 'Dogs',
  snakes: 'Snakes',
  chickens: 'Chickens',
  cat: 'Cats',
  horse: 'Horses',
  mixed: 'Mixed'
};

function CategoryPicker({ value, onChange, includeMixed = true }) {
  const options = includeMixed ? [...categories, 'mixed'] : categories;

  return (
    <label className="field">
      <span>Category</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((item) => (
          <option key={item} value={item}>
            {labels[item] || item}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CategoryPicker;
