import { categories } from '../data/breeds';

function CategoryPicker({ value, onChange, includeMixed = true }) {
  const options = includeMixed ? [...categories, 'mixed'] : categories;

  return (
    <label className="field">
      <span>Category</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item[0].toUpperCase() + item.slice(1)}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CategoryPicker;