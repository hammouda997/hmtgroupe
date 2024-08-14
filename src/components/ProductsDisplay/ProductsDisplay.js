import React, { useState , useEffect } from 'react';
import './ProductsDisplay.css';

const products = [
  {
    name: 'Mini Desk Lamp',
    price: 99.0,
    originalPrice: 110.0,
    image: './images/machine.png',
    category: 'Home Embroidery Machines',
  },
  {
    name: 'Dome Pendant',
    price: 345.0,
    originalPrice: 380.0,
    image: './images/machine2.png',
    category: 'Commercial',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine3.png',
    category: 'Single-Needle',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine4.png',
    category: 'Multi-Needle',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine5.png',
    category: 'Industrial',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine1.png',
    category: 'Industrial',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine3.png',
    category: 'Industrial',
  },
  {
    name: 'Novelty Pendant',
    price: 780.0,
    originalPrice: 820.0,
    image: './images/machine4.png',
    category: 'Industrial',
  },
  // Add more products here...
];

const ProductDisplay = ({ selectedCategories }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true whenever filtering is triggered
    const timeout = setTimeout(() => {
      const filtered = products.filter((product) =>
        selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true
      );
      setFilteredProducts(filtered);
      setLoading(false); // Set loading to false once filtering is complete
    }, 1000); // Simulate a delay for the shimmer effect

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, [selectedCategories]);

  return (
    <div className="product-display-container">
      <div className="product-sort-view">
        <div className="view-options">
          <button className="grid-view active"></button>
          <button className="list-view"></button>
        </div>
        <div className="sort-options">
          <span>Sort By</span>
          <select>
            <option value="trending">Trending</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="product-card-shimmer shimmer-wrapper" key={index}>
                <div className="shimmer"></div>
              </div>
            ))
          : filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">
                  ৳{product.price.toFixed(1)} BDT{' '}
                  <span className="original-price">৳{product.originalPrice.toFixed(1)} BDT</span>
                </p>
                <p className="category">{product.category}</p>
                <button className="add-to-cart">Add To Cart</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductDisplay;