import React from 'react';
import './Teams.css';

/**
 * Teams
 *
 * This section displays the rosters of Fnatic de Temu’s competitive teams.
 * Each team includes a list of players and their roles. You can edit the
 * sample data below to reflect your actual lineups and add more teams as
 * needed.
 */
const Teams = () => {
  // Example data structure for teams and players
  const teams = [
    {
      name: 'League of Legends',
      roster: [
        { player: 'HideOnMäta69 #EUW', role: 'Top' },
        { player: 'FNT Drakesin #FNT', role: 'Jungla' },
        { player: 'Liss The Iceborn #LISS', role: 'Mid' },
        { player: 'FNT Uma Jam #TEMU', role: 'ADC' },
        { player: 'Jugador5', role: 'Support' },
      ],
    },
    {
      name: 'Valorant',
      roster: [
        { player: 'Agente1', role: 'Duelista' },
        { player: 'Agente2', role: 'Iniciador' },
        { player: 'Agente3', role: 'Centinela' },
        { player: 'Agente4', role: 'Controlador' },
        { player: 'Agente5', role: 'Flex' },
      ],
    },
    {
      name: 'Rocket League',
      roster: [
        { player: 'Piloto1', role: 'Jugador' },
        { player: 'Piloto2', role: 'Jugador' },
        { player: 'Piloto3', role: 'Jugador' },
      ],
    },
  ];

  return (
    <section id="teams" className="teams-section">
      <h2>Equipos</h2>
      <div className="teams-container">
        {teams.map((team, idx) => (
          <div className="team-card" key={idx}>
            <h3 className="team-name">{team.name}</h3>
            <ul className="team-roster">
              {team.roster.map((member, i) => (
                <li key={i} className="team-member">
                  <span className="player-name">{member.player}</span>
                  <span className="player-role">{member.role}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;