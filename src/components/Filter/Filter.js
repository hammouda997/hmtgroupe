import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Filter.css';
import { useTranslation } from 'react-i18next';

const FilterSidebar = ({ onCategoryChange, initialCategory }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(['all']);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Define categories mapping
  const categories = [
    { key: 'tracing_material', label: t('filter.categories.tracingMaterial') },
    { key: 'quilting_and_cutting', label: t('filter.categories.quiltingAndCutting') },
    { key: 'sewing_machines', label: t('filter.categories.sewingMachines') },
    { key: 'bonding_and_ultrasonic_machines', label: t('filter.categories.bondingUltrasonicMachines') },
    { key: 'embroidery_machines', label: t('filter.categories.embroideryMachines') },
    { key: 'ironing_and_fusing_equipment', label: t('filter.categories.ironingFusingEquipment') },
    { key: 'washing_dyeing_drying_finishing_equipment', label: t('filter.categories.washingDyeingDryingFinishing') },
    { key: 'cads_software', label: t('filter.categories.cadsSoftware') },
    { key: 'leather_and_furniture', label: t('filter.categories.leatherFurniture') },
    { key: 'accessories', label: t('filter.categories.accessories') },
    { key: 'spare_parts', label: t('filter.categories.spareParts') },
  ];

  useEffect(() => {
    if (initialCategory === 'all') {
      setActiveCategory(null);
    } else {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleCategoryChange = useCallback(
    (categoryKey) => {
      if (categoryKey === activeCategory) {
        setActiveCategory(['all']);
        onCategoryChange('all');
      } else {
        setActiveCategory(categoryKey);
        onCategoryChange(categoryKey);
      }
    },
    [activeCategory, onCategoryChange]
  );

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`filter-sidebar-container ${isOpen ? 'open' : 'closed'}`}>

    <div ref={sidebarRef}>
      <div className={`arrow-toggle`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '◄' : '►'} {/* Arrow for toggle */}
      </div>
      <div className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
        <h3>{t('filter.title')}</h3>
        <div className="categories">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`category-button ${activeCategory === key ? 'selected' : ''}`}
              onClick={() => handleCategoryChange(key)}
              aria-selected={activeCategory === key}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="close-arrow" onClick={() => setIsOpen(false)}>
        ◄
        </div>
      </div>
    </div>
    </div>
  );
};

export default FilterSidebar;
