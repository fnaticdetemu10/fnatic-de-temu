import React from 'react';
import './MembershipCall.css';

/**
 * MembershipCall
 *
 * A call‑to‑action section encouraging visitors to join the Fnatic de Temu
 * community. This component takes inspiration from the Fénix Club membership
 * section on Movistar KOI’s website【838726961147687†L158-L166】, highlighting
 * the benefits of becoming a member and providing a clear action button.
 */
const MembershipCall = () => {
  return (
    <section id="membership" className="membership-section">
      <div className="membership-content">
        <h2>Únete a la leyenda</h2>
        <p>
          Conviértete en miembro de Fnatic de Temu y disfruta de beneficios
          exclusivos. Obtén tu tarjeta de miembro y vive los esports como nunca
          antes. ¡Forma parte de la comunidad!
        </p>
        <a href="#membresias" className="membership-button">Hazte miembro</a>
      </div>
    </section>
  );
};

export default MembershipCall;