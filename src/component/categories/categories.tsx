import React from 'react';
import './categories.css';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Living Room', imageSrc: '/images/living.png' },
    { name: 'Couch', imageSrc: '/images/couch.png' },
    { name: 'Chair', imageSrc: '/images/chair.png' },
    { name: 'Table', imageSrc: '/images/table.png' },
    { name: 'Outdoor', imageSrc: '/images/door.png' },
    { name: 'Other', imageSrc: '/images/other.png' },
  ];

  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.imageSrc} alt={category.name} className="category-image" />
            <p className="category-text">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
