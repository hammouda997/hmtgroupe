import React, { useState } from 'react';

import ProductDisplay from '../../components/ProductsDisplay/ProductsDisplay';
import FilterSidebar from '../../components/Filter/Filter';
import '../Products/Products.css';
import OffersSection from '../../components/Offers/OfferSection';

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('embroidery'); // Manage activeCategory state

  return (
    <>
      <div className="Products">
        <FilterSidebar
          onCategoryChange={setSelectedCategories}
          activeCategory={activeCategory} // Pass activeCategory to FilterSidebar
        />
        <ProductDisplay
          selectedCategories={selectedCategories}
          activeCategory={activeCategory} // Pass activeCategory to ProductDisplay
          onActiveCategoryChange={setActiveCategory} // Handle activeCategory change
        />
      </div>
      <div>
        <OffersSection />
      </div>
    </>
  );
}

export default Products;
