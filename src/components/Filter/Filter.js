import React, { useState, useEffect } from 'react';
import './Filter.css';

const FilterSidebar = ({ onCategoryChange, activeCategory }) => {
  const [activeCategoryState, setActiveCategoryState] = useState(null);

  const embroideryCategories = [
    'Home Embroidery Machines',
    'Commercial',
    'Single-Needle',
    'Multi-Needle',
    'Industrial',
  ];

  const otherProductCategories = [
    'Software',
    'Accessories',
    'Threads',
    'Stabilizers',
    'Hoops',
  ];

  const categoriesToDisplay = activeCategory === 'embroidery' ? embroideryCategories : otherProductCategories;

  const handleCategoryChange = (category) => {
    const newActiveCategory = activeCategoryState === category ? null : category;
    setActiveCategoryState(newActiveCategory);
    onCategoryChange(newActiveCategory ? [newActiveCategory] : []); 
  };

  useEffect(() => {
    setActiveCategoryState(null);
    onCategoryChange([]);
  }, [activeCategory, onCategoryChange]);

  return (
    <div className="filter-sidebar">
      <h3>{activeCategory === 'embroidery' ? 'Embroidery Categories' : 'Other Product Categories'}</h3>
      <div className="categories">
        {categoriesToDisplay.map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategoryState === category ? 'selected' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
