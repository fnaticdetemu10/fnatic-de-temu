import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#membresias">Membresías</a></li>
        <li><a href="#eventos">Eventos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
