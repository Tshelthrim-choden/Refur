import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faTruck, faBalanceScale, faBoxes } from '@fortawesome/free-solid-svg-icons';
import './why-us.css';

const WhyUs: React.FC = () => {
  const points = [
    { reason: 'Attractive Prices', icon: faMoneyBillAlt },
    { reason: 'Fast Delivery', icon: faTruck },
    { reason: 'Best Quality', icon: faBalanceScale },
    { reason: 'Large Selection', icon: faBoxes },
  ];

  return (
    <section className="why-us">
      <h2>Why Choose Us</h2>
      <div className="point-list">
        {points.map((point, index) => (
          <div key={index} className="point">
            <FontAwesomeIcon icon={point.icon} className="point-icon" />
            <p className="point-text">{point.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
