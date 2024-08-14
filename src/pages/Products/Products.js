import React , { useState }  from 'react';

import ProductDisplay from '../../components/ProductsDisplay/ProductsDisplay';
import FilterSidebar from '../../components/Filter/Filter';
import '../Products/Products.css'
import OffersSection from '../../components/Offers/OfferSection';

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
    <>
    <div className="Products">
        <FilterSidebar onCategoryChange={setSelectedCategories} />
      <ProductDisplay selectedCategories={selectedCategories} />
      
     

    </div>
    <div>
      <OffersSection/>
      
    </div>
    </>
  );
}

export default Products;
