import './Creators.css'

export default function Creators({ channel = '' }) {
  const host = typeof window !== 'undefined' ? window.location.hostname : 'localhost'
  const playerSrc = `https://player.twitch.tv/?channel=${encodeURIComponent(channel)}&parent=${encodeURIComponent(host)}&parent=localhost&parent=127.0.0.1&muted=true`
  return (
    <section id="creadores" className="creators" aria-label="Sigue a nuestros casters y creadores de contenido">
      <div className="creators__container">
        <h2 className="creators__title">Sigue a nuestros casters y creadores de contenido</h2>
        <div className="creators__player" role="region" aria-label={`Reproductor de Twitch del canal ${channel}`}>
          <iframe
            src={playerSrc}
            title={`Twitch player: ${channel}`}
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0" 
            scrolling="no"
          />
        </div>
      </div>
    </section>
  )
}
