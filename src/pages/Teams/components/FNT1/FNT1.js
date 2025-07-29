import React from 'react';
import '../EquiposLol.css';
import hextechSeriesLogo from '../../../../assets/images/general/hextech_series.png';

// Importa aquí las imágenes de tus jugadores
import midPlayer from '../../../../assets/images/teams/mid_player.png';    // <-- cámbialo por el nombre real si quieres

const FNT1 = () => {
  const roster = [
    { name: 'MarcMef #EUW', role: 'Top' },
    { name: 'KÉR Chete #6472', role: 'Jungla' },
    { name: '?¿', role: 'Mid', photo: midPlayer }, // Ejemplo con foto
    { name: 'Azpy #1337', role: 'Adc' },
    { name: 'melon pan #7027', role: 'Support' },
  ];
  return (
    <div className="equipos-lol-page">
      <header className="equipos-lol-hero">
        <div className="container">
          <h1 className="equipos-lol-title">League of Legends – FNT T1</h1>
          <p className="equipos-lol-subtitle">
            Nuestro equipo academia cultiva el talento emergente y prepara a
            los futuros campeones de Fnatic de Temu.
          </p>
        </div>
      </header>
      <main className="equipos-lol-content">
        <div className="breadcrumbs">
          <a href="/">Inicio</a> / <span>Equipos LOL</span> / <span>FNT T1</span>
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
              ></div>
              <h3 className="player-name">{player.name.toUpperCase()}</h3>
              <p className="player-role">{player.role}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FNT1;
