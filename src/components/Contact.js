import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="myContact">
        <h3>My contact</h3>
      </div>
      <div className="myMail">
        <a href="mailto:luka.patrun@gmail.com?Subject=Greetings%20Luka!"
          target="_blank" rel="noopener noreferrer">
          <button className="cv-btn contact-btn">
            <p>Send me an email!</p>
          </button>
        </a>
      </div>
    </section>
  )
}

export default Contact;
