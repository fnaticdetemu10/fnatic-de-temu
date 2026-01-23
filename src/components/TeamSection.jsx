import './TeamSection.css'
import PlayerCard from './PlayerCard'

const teams = [
  {
    name: 'Fnatic de Temu',
    players: [
      { role: 'Top', name: 'Jugador Top', photo: '' },
      { role: 'Jungla', name: 'Jugador Jungla', photo: '' },
      { role: 'Mid', name: 'Jugador Mid', photo: '' },
      { role: 'ADC', name: 'Jugador ADC', photo: '' },
      { role: 'Support', name: 'Jugador Support', photo: '' },
    ],
  },
  {
    name: 'FNT T1 Academy',
    players: [
      { role: 'Top', name: 'Jugador Top', photo: '' },
      { role: 'Jungla', name: 'Jugador Jungla', photo: '' },
      { role: 'Mid', name: 'Jugador Mid', photo: '' },
      { role: 'ADC', name: 'Jugador ADC', photo: '' },
      { role: 'Support', name: 'Jugador Support', photo: '' },
    ],
  },
]

export default function TeamSection() {
  return (
    <section id='equipos' className="teams-section">
      <div className="teams-container">
        {teams.map((team) => (
          <div className="team-block" key={team.name}>
            <h2 className="team-title">{team.name}</h2>
            <div className="players-grid">
              {team.players.map((p, idx) => (
                <PlayerCard key={`${team.name}-${p.role}-${idx}`} photoSrc={p.photo} name={p.name} role={p.role} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
