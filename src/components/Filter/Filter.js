import React, { useState } from 'react';
import './Filter.css';

const FilterSidebar = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryChange = (category) => {
    const newActiveCategory = activeCategory === category ? null : category;
    setActiveCategory(newActiveCategory);
    onCategoryChange(newActiveCategory ? [newActiveCategory] : []); 
  };

  return (
    <div className="filter-sidebar">
      {/* <h3>Select Price Range</h3>
      <input type="range" min="0" max="6400" step="100" />
      <div className="price-labels">
        <span>৳0 BDT</span>
        <span>৳6400 BDT</span>
      </div> */}

      <h3>Product Categories</h3>
      <div className="categories">
        {['Home Embroidery Machines', 'Commercial', 'Single-Needle', 'Multi-Needle', 'Industrial'].map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'selected' : ''}`}
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
