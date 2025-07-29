import './Hero.css';
import React from 'react';
import petalosCayendo from '../../../../assets/images/general/petalos-cerezo-cayendo.gif';

/**
 * Hero
 *
 * The landing banner of the page. It features a background animation (falling
 * petals) and a bold headline introducing Fnatic de Temu. This design is
 * inspired by the “BUILT FOR THE GAME” hero section of Movistar KOI’s homepage
 *【838726961147687†L71-L76】 but tailored to the club’s own identity and
 * philosophy.
 */
const Hero = () => {
  return (
    <div id="inicio" className="hero">
      <img
        className="background-gif"
        src={petalosCayendo}
        alt="Pétalos de cerezo cayendo"
      />
      <div className="hero-content">
        <h1 className="hero-title">FNATIC DE TEMU</h1>
        <p className="hero-subtitle">Honor · Disciplina · Mejora constante 改善</p>
        <div className="hero-hashtags">
          <span className="hashtag">
            Competimos con pasión y respeto. 💥#Esports #FNT
          </span>
        </div>
        <div className="hero-buttons">
          <a href="#teams" className="hero-btn primary">Ver Equipos</a>
          <a href="#membership" className="hero-btn secondary">Únete</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;