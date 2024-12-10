import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Mensaje enviado: \nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
    // Aquí podrías agregar el código para enviar el mensaje a un servidor o API
  };

  return (
    <div>
      <h1>Contacto</h1>
      <p>Si tienes alguna pregunta o inquietud, no dudes en contactarnos. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;