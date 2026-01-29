import './Community.css'

export default function Community() {
  return (
    <section id="unete" className="community" aria-label="Únete a la comunidad y compite">
      <div className="community__container">
        <h2 className="community__title">Únete y compite con nosotros</h2>

        <div className="community__grid">
          <article className="community__card" aria-labelledby="community-discord-title">
            <div className="community__cardBody">
              <h3 id="community-discord-title" className="community__cardTitle">¿Quieres ser parte de la comunidad?</h3>
              <p className="community__cardText">
                Únete a nuestro Discord para conversar, participar en eventos, hacer watchparties y formar parte de <strong className='emphasis'>Fnatic de Temu</strong>.
              </p>
              <div className="community__actions">
                <a
                  className="btn btn--primary"
                  href="https://discord.gg/6tJNJnC9YC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Unirse al Discord del equipo"
                >
                  Unirme al Discord
                </a>
              </div>
            </div>
          </article>

          <article className="community__card" aria-labelledby="community-competir-title">
            <div className="community__cardBody">
              <h3 id="community-competir-title" className="community__cardTitle">¿Quieres competir con nosotros?</h3>
              <p className="community__cardText">
                Si tienes ganas de competir y mejorar en equipo, completa el formulario para aplicar a nuestros tryouts y equipos activos.
              </p>
              <div className="community__actions">
                <a
                  className="btn btn--primary"
                  href="https://forms.gle/ZpktiatxRkKhNJK86" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Abrir formulario para competir con Fnatic de Temu"
                >
                  Aplicar para competir
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
