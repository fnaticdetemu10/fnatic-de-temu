import React from 'react';
import './Contact.css';

/**
 * Contact
 *
 * A simple contact form allowing visitors to send a message. Feel free to
 * integrate a real form handling solution (such as Formspree or your own
 * backend) for production use.
 */
const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">
            Nombre:
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Correo electrónico:
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Mensaje:
            <textarea id="message" name="message" rows="5"></textarea>
          </label>
        </div>
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;