import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css';

const OtherProducts = [
  {
    name: 'Palestine Embroidery',
    image: './images/Palestine.png',
    category: 'Electronics',
  },
  {
    name: 'Deko Embroidery',
    image: './images/product1.png',
    category: 'Wearables',
  },
  {
    name: 'Nanami Embroidery',
    image: './images/product2.png',
    category: 'Electronics',
  },
  {
    name: 'Gon Embroidery',
    image: './images/Gon.png',
    category: 'Office Supplies',
  },
  {
    name: 'Sussuke Embroidery',
    image: './images/Machine1-Product1.png',
    category: 'Fitness',
  },
  {
    name: 'Naruto Embroidery',
    image: './images/Machine1-Product2.png',
    category: 'Office Supplies',
  },
  // Add more other products...
];

function ProductDescription() {
  const location = useLocation();
  const { product } = location.state;
  const [relatedProducts, setRelatedProducts] = useState([]);
  const imageRef = useRef(null); // Reference to the image element
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  useEffect(() => {
    // Find related products based on the machine's produces field
    const related = OtherProducts.filter(op => product.produces.includes(op.name));
    setRelatedProducts(related);
  }, [product]);

  const handleMouseMove = (e) => {
    setIsHovering(true); // Set hover state to true on mouse move
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate zoom lens position
      const lensX = x - (rect.width / 2);
      const lensY = y - (rect.height / 2);

      // Update zoom lens position
      const zoomLens = document.querySelector('.zoom-lens');
      zoomLens.style.left = `${lensX}px`;
      zoomLens.style.top = `${lensY}px`;

      // Update zoomed image position
      const zoomedImage = document.querySelector('.zoomed-image');
      zoomedImage.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false); // Set hover state to false on mouse leave
  };

  return (
    <div className="product-details-container">
      <div 
        className='Images-Container' 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave} // Add mouse leave handler
      >
        <img src={product.image} alt={product.name} className="product-image" ref={imageRef} />
        <div className="zoom-lens"></div>
        <div className={`zoomed-image ${isHovering ? 'show' : 'hide'}`} style={{ backgroundImage: `url(${product.image})` }}></div> {/* Set zoomed image background */}
      </div>
      <div className="product-info">
        <h2 className="title">{product.name}</h2>
        <p>Category: {product.category}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
      
      {/* Description Section */}
      <div className="product-description-section">
        <h3 className='description'>Description</h3>
        <p>{product.description}</p> {/* Assuming 'description' is a field in your product object */}
      </div>
      
      {/* Related Products Section */}
      <div className="related-products-section">
        <h3 className='related'>Related Products</h3>
        <div className="related-products-grid">
          {relatedProducts.map((relatedProduct, index) => (
            <div className="related-product-card" key={index}>
              <img src={relatedProduct.image} alt={relatedProduct.name} className="related-product-image" />
              <h4>{relatedProduct.name}</h4>
              <p>Category: {relatedProduct.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
