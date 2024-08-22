import React, { useEffect, useState, useRef } from 'react';
import { useLocation  , useNavigate} from 'react-router-dom';
import './ProductDetails.css';

const Machines = [
  {
    name: 'Mini Desk Lamp',
    image: './images/machine.png',
    category: 'Home Embroidery Machines',
    produces: ['Palestine Embroidery', 'Deko Embroidery'], // Related products
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Dome Pendant',
    image: './images/machine2.png',
    category: 'Commercial',
    produces: ['Nanami Embroidery', 'Gon Embroidery'], // Related products
    description: 'Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine3.png',
    category: 'Single-Needle',
    produces: ['Sussuke Embroidery', 'Naruto Embroidery'], // Related products
    description: 'Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine4.png',
    category: 'Multi-Needle',
    produces: ['Palestine Embroidery', 'Nanami Embroidery'], // Related products
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Novelty Pendant',
    image: './images/machine5.png',
    category: 'Industrial',
    produces: ['Gon Embroidery', 'Sussuke Embroidery'], // Related products
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
  },
  // Add more machines...
];

const OtherProducts = [
  {
    name: 'Palestine Embroidery',
    image: './images/Palestine.png',
    category: 'Electronics',
    relatedMachines: ['Mini Desk Lamp', 'Novelty Pendant'], // Related machines
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Deko Embroidery',
    image: './images/product1.png',
    category: 'Wearables',
    relatedMachines: ['Mini Desk Lamp'], // Related machines
    description: 'Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Nanami Embroidey',
    image: './images/product2.png',
    category: 'Electronics',
    relatedMachines: ['Dome Pendant', 'Novelty Pendant'], // Related machines
    description: 'Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.'
  },
  {
    name: 'Gon Embroidery',
    image: './images/Gon.png',
    category: 'Office Supplies',
    relatedMachines: ['Dome Pendant', 'Novelty Pendant'], // Related machines
    description: 'Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.'
  },
  {
    name: 'Sussuke Embroidey',
    image: './images/Machine1-Product1.png',
    category: 'Fitness',
    relatedMachines: ['Novelty Pendant'], // Related machines
    description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
  },
  {
    name: 'Naruto Embroidery',
    image: './images/Machine1-Product2.png',
    category: 'Office Supplies',
    relatedMachines: ['Novelty Pendant'], // Related machines
    description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
  },
  // Add more products here...
];  

function ProductDescription() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const { product, relatedProducts, relatedMachines } = location.state;
  const [relatedProductsState, setRelatedProductsState] = useState([]);
  const [relatedMachine, setRelatedMachine] = useState(null);
  const imageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const machine = Machines.find(machine => machine.produces.includes(product.name));
    setRelatedMachine(machine);

    if (machine) {
      const related = OtherProducts.filter(op => machine.produces.includes(op.name) && op.name !== product.name);
      setRelatedProductsState(related);
    }
  }, [product, relatedMachine]);

  const handleMouseMove = (e) => {
    setIsHovering(true);
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const lensX = x - (rect.width / 2);
      const lensY = y - (rect.height / 2);

      const zoomLens = document.querySelector('.zoom-lens');
      zoomLens.style.left = `${lensX}px`;
      zoomLens.style.top = `${lensY}px`;

      const zoomedImage = document.querySelector('.zoomed-image');
      zoomedImage.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate('/products')}>
        &#9664;  Back 
      </button>
      <div className="left-column">
        <div className="Images-Container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img src={product.image} alt={product.name} className="product-image" ref={imageRef} />
          <div className="zoom-lens"></div>
          <div className={`zoomed-image ${isHovering ? 'show' : 'hide'}`} style={{ backgroundImage: `url(${product.image})` }}></div>
        </div>
        <div className="product-info">
          <h2 className="title">{product.name}</h2>
          <p>Category: {product.category}</p>
         
        </div>
      </div>
      <div className="right-column">
        <div className="product-description-section">
          <h3 className="description">Description</h3>
          <p>{product.description}</p>
        </div>
        {relatedMachines && (
          <div className="related-machine-section">
            <h3 className="related">Related Machines</h3>
            <div className="related-machine-grid">
              {relatedMachines.map((relatedMachine, index) => (
                <div className="related-machine-card" key={index}>
                  <img src={relatedMachine.image} alt={relatedMachine.name} className="related-machine-image" />
                  <h4>{relatedMachine.name}</h4>
                  <p>Category: {relatedMachine.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;