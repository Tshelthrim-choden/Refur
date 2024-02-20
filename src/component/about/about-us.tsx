import React from 'react';
import './about-us.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="text-section">
        <h2>About Us</h2>
        <p>We are team passionate about reducing waste and making a positive impact on the environment. Our journey began with a shared vision to create sustainable and stylish furniture solutions. Welcome to our eco-friendly furniture store!</p>
      </div>
      <div className="image-section">
        <img src="/images/cub.png" alt="About Us" className="circular-image" />
      </div>
    </section>
  );
};

export default AboutUs;
