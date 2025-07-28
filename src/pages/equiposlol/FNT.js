import React from 'react';
import './EquiposLol.css';
import hextechSeriesLogo from '../../assets/images/hextech_series.png';

// Importa aquí las imágenes de tus jugadores
import supportPlayer from '../../assets/images/support_player.png';    // <-- cámbialo por el nombre real si quieres

const FNT = () => {
  const roster = [
    { name: 'HideOnMäta69 #EUW', role: 'Top' }, // Ejemplo con foto
    { name: 'FNT Drakesin #FNT', role: 'Jungla' },
    { name: 'Liss The Iceborn #LISS', role: 'Mid' },
    { name: 'FNT Uma Jam #TEMU', role: 'Adc' },
    { name: '¿?', role: 'Support', photo: supportPlayer }, // Ejemplo con foto},
  ];
  return (
    <div className="equipos-lol-page">
      <header className="equipos-lol-hero">
        <div className="container">
          <h1 className="equipos-lol-title">League of Legends – FNT</h1>
          <p className="equipos-lol-subtitle">
            Nuestro equipo principal compite en la 3ª Div. HEXTECH SERIES, combinando pasión,
            disciplina y un deseo constante de superación. League of Legends es más que un juego para nosotros; es una forma de vida.
          </p>
        </div>
      </header>
      <main className="equipos-lol-content">
        <div className="breadcrumbs">
          <a href="/">Inicio</a> / <span>Equipos LOL</span> / <span>FNT</span>
        </div>
        {/* Logo de la competición */}
        <div className="series-logo">
          <img src={hextechSeriesLogo} alt="Hextech Series" />
        </div>
        <div className="roster-grid">
          {roster.map((player, idx) => (
            <div className="roster-card" key={idx}>
              <div
                className="roster-photo"
                style={{
                  backgroundImage: player.photo ? `url(${player.photo})` : "none"
                }}
              />
              <h3 className="player-name">{player.name.toUpperCase()}</h3>
              <p className="player-role">{player.role}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FNT;
