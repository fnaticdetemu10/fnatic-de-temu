import './PlayerCard.css'

export default function PlayerCard({ photoSrc, name, role }) {
  return (
    <div className="player-card" aria-label={`${name} - ${role}`}>
      <div className="player-media">
        {photoSrc ? (
          <img src={photoSrc} alt={`${name} foto`} className="player-photo" />
        ) : (
          <div className="player-photo placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="player-info">
        <span className="player-name">{name}</span>
        <span className="player-role">{role}</span>
      </div>
    </div>
  )
}
