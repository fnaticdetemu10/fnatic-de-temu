import React from 'react';
import './About.css';

/**
 * About
 *
 * This component introduces the Fnatic de Temu club. It can replace the
 * existing Home component or serve as a standalone section. Use it to
 * communicate the club’s values, mission and passion for esports.
 */
const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>¿Quiénes somos?</h2>
      <div className="about-content">
        <p>
          <strong>¡Bienvenido/a a <span style={{color: "#f89f36"}}>Fnatic de Temu</span>!</strong> Somos una comunidad apasionada por los esports y especialmente por <strong>League of Legends</strong>. Nuestra misión es impulsar el desarrollo competitivo y personal de cada miembro.
        </p>

        <h3>🌟 Una Familia Competitiva</h3>
        <p>
          En Fnatic de Temu no solo jugamos; <strong>construimos relaciones y crecemos juntos</strong>, impulsados por la pasión y el respeto.
        </p>

        <h3>📌 Nuestros Valores</h3>
        <ul className="about-values">
          <li>🛡️ <strong>Honor y Respeto:</strong> Competimos limpiamente, reconociendo el esfuerzo de compañeros y rivales por igual.</li>
          <li>🔥 <strong>Disciplina y Constancia:</strong> El éxito es fruto del esfuerzo constante y la dedicación diaria.</li>
          <li>🚀 <strong>Competitividad Sana:</strong> Buscamos la excelencia manteniendo una mentalidad abierta y humilde.</li>
          <li>💖 <strong>Compromiso y Pasión:</strong> Nos mueve el amor genuino por el juego y la ilusión de formar parte de algo más grande.</li>
        </ul>

        <p style={{marginTop: "2rem"}}>
          ¿Te identificas con nuestros valores? Entonces <strong>Fnatic de Temu</strong> es tu lugar. <br />
          <strong>¡Únete a la aventura y hagamos historia juntos!</strong>
        </p>
        <p style={{textAlign: "center", fontSize: "1.25rem", margin: "1.5rem 0"}}>
          <b>¡Te esperamos en la Grieta del Invocador!</b> ⚔️✨
        </p>
      </div>
    </section>
  );
};

export default About;
