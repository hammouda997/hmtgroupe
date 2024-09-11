// ProductDetailsModal.js
import React, { useEffect } from 'react';
import './ProductDetailsModal.css';

const categories = [
  { key: 'tracing_material', label: 'TRACING MATERIAL', img: 'https://www.frenchtex.org/media/cache/large_jobs_item/uploads/ckeditor/img/Metiers/French_Tex-Coupeur.jpg' },
  { key: 'quilting_and_cutting', label: 'QUILTING AND CUTTING', img: 'https://img.fashion-skills.com/wp-content/uploads/sites/44/2019/02/coupeur-textile-1.jpg' },
  { key: 'sewing_machines', label: 'SEWING MACHINES', img: 'https://www.meloncollie.fr/wp-content/uploads/2020/01/meloncollie.jpg' },
  { key: 'bonding_and_ultrasonic_machines', label: 'BONDING AND ULTRASONIC MACHINES', img: 'https://i.ytimg.com/vi/b7KhDVhIdq8/maxresdefault.jpg' },
  { key: 'embroidery_machines', label: 'EMBROIDERY MACHINES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7TEVClBriEFWUwOvDjgGEa7KiCru9A6jvw&s' },
  { key: 'ironing_and_fusing_equipment', label: 'IRONING AND FUSING EQUIPMENT', img: 'https://www.apicius-shop.com/media/common/categories/repassage_1_1.jpg' },
  { key: 'washing_dyeing_drying_finishing_equipment', label: 'WASHING, DYEING, DRYING, AND FINISHING EQUIPMENT', img: 'https://image.made-in-china.com/202f0j00SEbRLpfgIWkP/Washing-and-Dyeing-Machine-for-Sock-Clothes-Garment-T-Shirts.webp' },
  { key: 'cads_software', label: 'CAD SOFTWARE', img: 'https://www.lectra.com/sites/default/files/styles/1050x430/public/2021-11/AM%26AN%20Header.jpg?itok=9CuylhSq' },
  { key: 'leather_and_furniture', label: 'LEATHER AND FURNITURE', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3PJ8GpUXnE2guMSoxchDB9lrODwxDdZi_g&s' },
  { key: 'accessories', label: 'ACCESSORIES', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJnCl0-KKCQHXKz9HIK38I128z9lS5dkn3w&s' },
  { key: 'spare_parts', label: 'SPARE PARTS', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9kWUtvFHmzDk0ClHP9oRB3YALJ2753HV2g&s' }
];
const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  // Close modal when pressing "Escape" key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Close modal when clicking outside of the modal container
  const handleClickOutside = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
                  <p >Category:{categories.find(cat => cat.key === product.category)?.label || "No label"}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
