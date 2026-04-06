import './TeamSection.css'
import PlayerCard from './PlayerCard'
import fabuPhoto from '../assets/player_photo/fabu.png'
import annPhoto from '../assets/player_photo/ann.png'

const teams = [
  {
    name: 'Azure Dragons',
    players: [
      { role: 'Top', name: 'Ann', photo: annPhoto },
      { role: 'Jungla', name: 'Cachi', photo: '' },
      { role: 'Mid', name: 'Suzer', photo: '' },
      { role: 'ADC', name: 'Pikaru', photo: '' },
      { role: 'Support', name: 'Lukas', photo: '' },
    ],
  },
  {
    name: 'Azure Dragons Academy',
    players: [
      { role: 'Top', name: 'Claudi', photo: '' },
      { role: 'Jungla', name: 'Fabu', photo: fabuPhoto },
      { role: 'Mid', name: '', photo: '' },
      { role: 'ADC', name: '', photo: '' },
      { role: 'Support', name: '', photo: '' },
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
