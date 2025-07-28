import React, { useState } from 'react';
import './Navigation.css';

/**
 * Navigation
 *
 * This component renders the secondary navigation bar below the header.
 * It contains anchor links pointing to each major section of the page. When
 * clicked, the page will smoothly scroll to the corresponding section ID.
 * Includes a mobile hamburger menu for better mobile experience.
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>Quiénes somos</a></li>
        <li><a href="#featured" onClick={closeMenu}>Colección</a></li>
        <li><a href="#games" onClick={closeMenu}>Juegos</a></li>
        <li><a href="#membership" onClick={closeMenu}>Socios</a></li>
        <li><a href="#teams" onClick={closeMenu}>Equipos</a></li>
        <li><a href="#membresias" onClick={closeMenu}>Planes</a></li>
        <li><a href="#eventos" onClick={closeMenu}>Eventos</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
      </ul>
      
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navigation;