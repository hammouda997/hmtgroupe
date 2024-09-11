import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductDisplay from '../../components/ProductsDisplay/ProductsDisplay';
import FilterSidebar from '../../components/Filter/Filter';
import '../Products/Products.css';
import '../Products/Products.css';
import OffersSection from '../../components/Offers/OfferSection';

const allCategories = [
  'tracing_material',
  'quilting_and_cutting',
  'sewing_machines',
  'bonding_and_ultrasonic_machines',
  'embroidery_machines',
  'ironing_and_fusing_equipment',
  'washing_dyeing_drying_finishing_equipment',
  'cads_software',
  'leather_and_furniture',
  'accessories',
  'spare_parts'
];

function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory === 'all' ? allCategories : [initialCategory]
  );
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    if (initialCategory === 'all') {
      setSelectedCategories(allCategories);
    } else {
      setSelectedCategories([initialCategory]);
    }
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSelectedCategories(allCategories);
    } else {
      setSelectedCategories([category]);
    }
    setActiveCategory(category);
    navigate(`?category=${category}`);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <>
      <div className="Products">
        <FilterSidebar
          onCategoryChange={handleCategoryChange}
          initialCategory={initialCategory}
        />
        <ProductDisplay
          selectedCategories={selectedCategories}
          activeCategory={activeCategory}
          onActiveCategoryChange={setActiveCategory}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />
      </div>
      <div>
        <OffersSection />
      </div>
    </>
  );
}

export default Products;
