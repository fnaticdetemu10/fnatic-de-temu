import React from 'react';
import './Navigation.css';

/**
 * Navigation
 *
 * This component renders the secondary navigation bar below the header.
 * It contains anchor links pointing to each major section of the page. When
 * clicked, the page will smoothly scroll to the corresponding section ID.
 */
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#about">Quiénes somos</a></li>
        <li><a href="#featured">Colección</a></li>
        <li><a href="#games">Juegos</a></li>
        <li><a href="#membership">Socios</a></li>
        <li><a href="#teams">Equipos</a></li>
        <li><a href="#membresias">Planes</a></li>
        <li><a href="#eventos">Eventos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;