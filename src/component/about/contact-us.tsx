import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import './contact-us.css';

const ContactUs: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to handle form submission (send email, etc.)
    setIsSubmitted(true);

    // Clear the form fields
    const form = event.currentTarget;
    form.reset();

    // Automatically hide the notification after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact-us">
      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <div>
            <p className="info-title">Our Office Address</p>
            <p>Area, City, Landmark, Pincode</p>
          </div>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <div>
            <p className="info-title">General Enquiries</p>
            <p>sample@example.ecom</p>
          </div>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <div>
            <p className="info-title">Call Us</p>
            <p>+91-1111111111</p>
          </div>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faClock} className="info-icon" />
          <div>
            <p className="info-title">Our Timing</p>
            <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Your Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Your Contact No:
            <input type="tel" name="contact" required />
          </label>
          <label>
            Your Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {isSubmitted && (
        <div className="notification">
          <p>Email sent successfully!</p>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
