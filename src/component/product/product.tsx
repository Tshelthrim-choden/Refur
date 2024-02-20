import React, { useState } from 'react';
import './product.css';

const numberOfImages = 3;

const Product: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrl = `${process.env.PUBLIC_URL}/images/${currentImageIndex + 1}.png`;

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : numberOfImages - 1));
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex < numberOfImages - 1 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="product-navigation" onClick={() => navigate('next')}>
      <div className="text-container">
        <h1>Have good furniture on a click</h1>
      </div>
      <div className="product-image-container">
        <div className="fixed-image-container">
          <img
            src={imageUrl}
            alt={`Product Image ${currentImageIndex + 1}`}
            className="product-image"
          />
        </div>
      </div>
      <div className="arrow right-arrow">
        &gt;
      </div>
    </div>
  );
};

export default Product;
