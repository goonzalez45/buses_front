import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Gracias por tu mensaje. Te contactaremos pronto.");
  };

  return (
    <div className="contact-page fade-in">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Correo" required />
        <textarea placeholder="Escribe tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Contact;
