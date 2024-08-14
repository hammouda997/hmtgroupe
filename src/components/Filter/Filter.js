import React from 'react';
import './Filter.css';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h3>Select Price Range</h3>
      <input type="range" min="0" max="6400" step="100" />
      <div className="price-labels">
        <span>৳0 BDT</span>
        <span>৳6400 BDT</span>
      </div>

      <h3>Product Categories</h3>
      <ul>
        <li><input type="checkbox" /> Featured Products (4)</li>
        <li><input type="checkbox" /> Floor Lamps (4)</li>
        <li><input type="checkbox" /> Hanging Lamps (5)</li>
        <li><input type="checkbox" /> Modern Lamps (2)</li>
        <li><input type="checkbox" /> Table Lamps (3)</li>
      </ul>

      <h3>Brands</h3>
      <ul>
        <li><input type="checkbox" /> Home Decor (2)</li>
        <li><input type="checkbox" /> Nextcart Nexus (5)</li>
        <li><input type="checkbox" /> Urban Lights Emporium (3)</li>
        <li><input type="checkbox" /> Company 123 (4)</li>
      </ul>
    </div>
  );
};

export default FilterSidebar;
