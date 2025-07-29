import React from 'react';
import { Link } from 'react-router-dom';
import './GamesSection.css';

// TODO: add your own game logos in `src/assets/images` and update these imports.
import lolLogo from '../../../../assets/images/games/League of Legends logo.png';
import valorantLogo from '../../../../assets/images/games/valorant_logo.png';
import pokemonLogo from '../../../../assets/images/games/pokemon_logo.png';
import freefireLogo from '../../../../assets/images/games/freefire_logo.png';
import warzoneLogo from '../../../../assets/images/games/warzone_logo.png';
import honorLogo from '../../../../assets/images/games/honor_logo.png';
import apexLogo from '../../../../assets/images/games/apex_logo.png';
import rocketLogo from '../../../../assets/images/games/rocket_logo.png';

/**
 * GamesSection
 *
 * A section that showcases the different games where Fnatic de Temu competes.
 * Inspired by the “GAMES” section on the Movistar KOI home page【838726961147687†L131-L149】.
 */
const GamesSection = () => {
  // Each entry has a logo and a display name. Feel free to add more games as needed.
  const games = [
    {
      name: 'League of Legends – FNT',
      logo: lolLogo,
      link: '/teams/fnt',
    },
    {
      name: 'League of Legends – Academia',
      logo: lolLogo,
      link: '/teams/fnt1',
    },
    { name: 'Valorant', logo: valorantLogo, link: null },
    { name: 'Pokémon', logo: pokemonLogo, link: null },
    { name: 'Free Fire', logo: freefireLogo, link: null },
    { name: 'Warzone', logo: warzoneLogo, link: null },
    { name: 'Honor of Kings', logo: honorLogo, link: null },
    { name: 'Apex Legends', logo: apexLogo, link: null },
    { name: 'Rocket League', logo: rocketLogo, link: null },
  ];

  return (
    <section id="games" className="games-section">
      <h2>Juegos</h2>
      <div className="games-grid">
        {games.map((game, index) => {
          const content = (
            <>
              <img src={game.logo} alt={`Logo de ${game.name}`} />
              <span className="game-name">{game.name}</span>
            </>
          );
          return game.link ? (
            <Link to={game.link} className="game-card" key={index}>
              {content}
            </Link>
          ) : (
            <div className="game-card" key={index}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GamesSection;