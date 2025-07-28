import React from 'react';
import './GamesSection.css';

// TODO: add your own game logos in `src/assets/images` and update these imports.
import lolLogo from '../assets/images/League of Legends logo.png';
import valorantLogo from '../assets/images/valorant_logo.png';
import pokemonLogo from '../assets/images/pokemon_logo.png';
import freefireLogo from '../assets/images/freefire_logo.png';
import warzoneLogo from '../assets/images/warzone_logo.png';
import honorLogo from '../assets/images/honor_logo.png';
import apexLogo from '../assets/images/apex_logo.png';
import rocketLogo from '../assets/images/rocket_logo.png';

/**
 * GamesSection
 *
 * A section that showcases the different games where Fnatic de Temu competes.
 * Inspired by the “GAMES” section on the Movistar KOI home page【838726961147687†L131-L149】.
 */
const GamesSection = () => {
  // Each entry has a logo and a display name. Feel free to add more games as needed.
  const games = [
    { name: 'League of Legends', logo: lolLogo },
    { name: 'Valorant', logo: valorantLogo },
    { name: 'Pokémon', logo: pokemonLogo },
    { name: 'Free Fire', logo: freefireLogo },
    { name: 'Warzone', logo: warzoneLogo },
    { name: 'Honor of Kings', logo: honorLogo },
    { name: 'Apex Legends', logo: apexLogo },
    { name: 'Rocket League', logo: rocketLogo },
  ];

  return (
    <section id="games" className="games-section">
      <h2>Juegos</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.logo} alt={`Logo de ${game.name}`} />
            <span className="game-name">{game.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;