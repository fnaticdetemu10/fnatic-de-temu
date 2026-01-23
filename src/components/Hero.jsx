import './Hero.css'
import heroVideo from '../assets/videos/Hero_Video.mp4'

export default function Hero() {
  return (
    <section className="hero" aria-label="Sección principal">
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">FNATIC DE TEMU</h1>
        <p className="hero__subtitle">Honor · Disciplina · Mejora constante · 精益求精</p>
        <p className="hero__tagline">Competimos con pasión y respeto. 💥#Esports #FNT</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#equipos" aria-label="Ver equipos">Ver Equipos</a>
          <a className="btn btn--secondary" href="#unete" aria-label="Únete">Únete</a>
        </div>
      </div>
    </section>
  )
}
