import React from 'react';

import ProductDisplay from '../../components/ProductsDisplay/ProductsDisplay';
import FilterSidebar from '../../components/Filter/Filter';
import '../Products/Products.css'

function Products() {
  return (
    <div className="Products">
       <FilterSidebar/>
      <ProductDisplay/>
     

    </div>
  );
}

export default Products;
