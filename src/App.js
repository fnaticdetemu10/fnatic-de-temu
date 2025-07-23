import React from 'react';
import './App.css'; // Para los estilos básicos

// Componente principal
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Fnatic de Temu</h1>
        <p>El club de esports de League of Legends con visión profesional</p>
      </header>
      
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#membresias">Membresías</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <section id="inicio">
        <h2>¿Quiénes somos?</h2>
        <p>Fnatic de Temu es un club comprometido con el desarrollo competitivo y la formación de talentos en la escena de League of Legends. ¡Únete a nosotros!</p>
      </section>

      <section id="membresias">
        <h2>Membresías</h2>
        <p>Elige tu plan de suscripción y disfruta de acceso exclusivo a torneos, contenido premium, y más.</p>
        <button>Suscribirse</button>
      </section>

      <section id="eventos">
        <h2>Próximos Eventos</h2>
        <p>Participa en nuestros próximos torneos y demuestra tu habilidad en el juego.</p>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <form>
          <label>
            Nombre:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Correo electrónico:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
