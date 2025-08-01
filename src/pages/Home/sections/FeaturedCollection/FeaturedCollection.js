import React from 'react';
import './FeaturedCollection.css';

// TODO: replace these imports with your own product images.
// Place three or more images inside `src/assets/images` and update the paths accordingly.
import product1 from '../../../../assets/images/general/featured1.jpg';
import product2 from '../../../../assets/images/general/featured2.jpg';
import product3 from '../../../../assets/images/general/featured3.jpg';

/**
 * FeaturedCollection
 *
 * This component renders a “featured collection” It displays a
 * headline, a short description encouraging visitors to discover the club’s
 * official merchandise and a grid of product images.
 */
const FeaturedCollection = () => {
  // Array of product images. Each item could also include a link to a shop.
  const products = [product1, product2, product3];

  return (
    <section id="featured" className="featured-section">
      <h2>Colección destacada</h2>
      <p className="featured-description">
        Descubre nuestra colección oficial y demuestra tu pasión por el equipo
        con estilo.
      </p>
      <div className="product-grid">
        {products.map((img, index) => (
          <div className="product-card" key={index}>
            <img src={img} alt={`Producto destacado ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="featured-cta">
        <a
          href="#tienda"
          className="cta-button"
        >
          Explorar tienda
        </a>
      </div>
    </section>
  );
};

export default FeaturedCollection;