import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

/**
 * Navigation
 *
 * This component renders the secondary navigation bar below the header.
 * It contains anchor links pointing to each major section of the page. When
 * clicked, the page will smoothly scroll to the corresponding section ID.
 * Includes a mobile hamburger menu for better mobile experience.
 * Handles navigation from sub-pages back to main page sections.
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId, event) => {
    event.preventDefault();
    closeMenu();
    
    // Si estamos en la página principal, hacer scroll normal
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a la principal y luego hacer scroll
      navigate('/');
      // Pequeño delay para asegurar que la página se carga antes del scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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
        {/* Botón de cerrar solo en móviles */}
        <li className="close-button-container">
          <button 
            className="close-menu-button"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <span>×</span>
          </button>
        </li>
        <li><a href="#inicio" onClick={(e) => handleNavClick('inicio', e)}>Inicio</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick('about', e)}>Quiénes somos</a></li>
        <li><a href="#featured" onClick={(e) => handleNavClick('featured', e)}>Colección</a></li>
        <li><a href="#games" onClick={(e) => handleNavClick('games', e)}>Juegos</a></li>
        <li><a href="#membership" onClick={(e) => handleNavClick('membership', e)}>Socios</a></li>
        <li><a href="#teams" onClick={(e) => handleNavClick('teams', e)}>Equipos</a></li>
        <li><a href="#membresias" onClick={(e) => handleNavClick('membresias', e)}>Planes</a></li>
        <li><a href="#eventos" onClick={(e) => handleNavClick('eventos', e)}>Eventos</a></li>
        <li><a href="#contacto" onClick={(e) => handleNavClick('contacto', e)}>Contacto</a></li>
      </ul>
      
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navigation;