import React, { useState, useEffect } from 'react';
import './Filter.css';
import { FaFilter, FaWindowClose } from 'react-icons/fa';

const FilterSidebar = ({ onCategoryChange, activeCategory }) => {
  const [activeCategoryState, setActiveCategoryState] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const embroideryCategories = [
    'Home Embroidery Machines',
    'Commercial',
    'Single-Needle',
    'Multi-Needle',
    'Industrial',
  ];

  const otherProductCategories = [
    'Electronics',
    'Accessories',
    'Threads',
    'Stabilizers',
    'Hoops',
  ];

  // Display all categories if activeCategory is 'all'
  const categoriesToDisplay = 
    activeCategory === 'machine' 
      ? embroideryCategories 
      : activeCategory === 'creation'
      ? otherProductCategories 
      : activeCategory === 'all'
      ? [...embroideryCategories, ...otherProductCategories] // Combine both categories
      : [];

  const handleCategoryChange = (category) => {
    const newActiveCategory = activeCategoryState === category ? null : category;
    setActiveCategoryState(newActiveCategory);
    onCategoryChange(newActiveCategory ? [newActiveCategory] : []); 
  };

  useEffect(() => {
    setActiveCategoryState(null);
    onCategoryChange([]);
  }, [activeCategory, onCategoryChange]);

  // Toggle filter visibility on small screens
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={`filter-sidebar ${isFilterVisible ? 'active' : ''}`}>
      <button 
        className="filter-toggle-button"
        onClick={toggleFilterVisibility}
      >
        {isFilterVisible ? <FaWindowClose /> : <FaFilter/>}
      </button>
      <h3>
        {activeCategory === 'machine' 
          ? 'Embroidery Categories' 
          : activeCategory === 'creation'
          ? 'Other Product Categories'
          : 'All Categories'}
      </h3>
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
