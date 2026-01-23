import { useState } from 'react'
import './About.css'

const values = [
  {
    title: 'Honor y respeto',
    desc: 'Competimos limpiamente y reconocemos el esfuerzo de compañeros y rivales.'
  },
  {
    title: 'Disciplina y constancia',
    desc: 'El éxito nace del trabajo diario y la dedicación sostenida.'
  },
  {
    title: 'Competitividad sana',
    desc: 'Buscamos la excelencia con mentalidad abierta y humilde.'
  },
  {
    title: 'Compromiso y pasión',
    desc: 'Nos mueve el amor por el juego y por construir algo grande.'
  }
]

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx)
  }

  const onKeyToggle = (idx, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(idx)
    }
  }

  return (
    <section id="quienes-somos" className="about" aria-label="¿Quiénes somos?">
      <div className="about__container">
        <header className="about__header">
          <h2 className="about__title">¿Quiénes somos?</h2>
          <p className="about__intro">
            Somos <strong className="emphasis">Fnatic de Temu</strong>, un club de esports enfocado en <strong className="emphasis">League of Legends</strong>. En Fnatic de Temu no solo jugamos; construimos relaciones y crecemos juntos, impulsados por la pasión y el respeto.
          </p>
        </header>

        <section className="about__mission" aria-label="Nuestra misión">
          <p className="about__missionEyebrow"><strong className="emphasis">Nuestra misión</strong></p>
          <p className="about__lead">
            Impulsar un entorno competitivo serio que eleve el nivel de cada jugador,
            mediante disciplina, respeto y trabajo en equipo.
          </p>
        </section>

        <section className="about__values" aria-label="Nuestros valores">
          <h3 className="about__sectionTitle"><strong className="emphasis">Nuestros valores</strong></h3>
          <ul className="values" role="list">
            {values.map((v, idx) => {
              const isActive = activeIndex === idx
              return (
                <li key={v.title} className="valueItem">
                  <button
                    type="button"
                    className="value"
                    aria-expanded={isActive}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => onKeyToggle(idx, e)}
                  >
                    <span className="value__indicator" aria-hidden />
                    <span className="value__swap">
                      <span className={`value__title ${isActive ? 'is-hidden' : 'is-visible'}`}>{v.title}</span>
                      <span className={`value__desc ${isActive ? 'is-visible' : 'is-hidden'}`}>{v.desc}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </section>
  )
}
