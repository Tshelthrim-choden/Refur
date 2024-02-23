// Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header: React.FC = () => {
  const [isLoginOverlayOpen, setLoginOverlayOpen] = useState(false);
  const loginButtonRef = useRef<HTMLButtonElement>(null);

  const handleLoginClick = () => {
    setLoginOverlayOpen(!isLoginOverlayOpen);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (loginButtonRef.current && !loginButtonRef.current.contains(target)) {
      setLoginOverlayOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <header>
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Refur Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>Categories</li>
          <li>Product</li>
          <li>AboutUs</li>
          <li>WhyUs</li>
          <li>ContactUs</li>
        </ul>
      </nav>
      <div className="user-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
        <div className="actions">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <button
            ref={loginButtonRef}
            className="login-button"
            onClick={handleLoginClick}
          >
            <FontAwesomeIcon icon={faUser} className="icon" />
            Login
          </button>
        </div>
        {isLoginOverlayOpen && (
          <div className="login-overlay">
            <p>Login in progress...</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
