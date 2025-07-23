import React from 'react';
import './Contact.css';

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
        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
