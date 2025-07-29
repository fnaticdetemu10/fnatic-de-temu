import React from 'react';
import './Memberships.css';

/**
 * Memberships
 *
 * This component lists subscription plans and invites visitors to subscribe.
 * It complements the MembershipCall section by providing more detail. Feel free
 * to adjust the copy or add pricing tiers as needed.
 */
const Memberships = () => {
  return (
    <section id="membresias" className="memberships-section">
      <h2>Membresías</h2>
      <p>
        Elige tu plan de suscripción y disfruta de acceso exclusivo a torneos,
        contenido premium y más.
      </p>
      <button className="subscribe-btn">Suscríbete aquí</button>
    </section>
  );
};

export default Memberships;