import React from 'react';
import './styles/App.css';

// Import core layout components
import Header from './components/Header';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';

// React Router for handling multiple pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages for routing
import MainPage from './pages/MainPage';
import FNT from './pages/equiposlol/FNT';
import FNT1 from './pages/equiposlol/FNT1';

/**
 * App
 *
 * The root component assembles all the sections of the Fnatic de Temu website.
 * Each section is rendered in sequence within the <main> element. The
 * Navigation component uses anchor links that correspond to the IDs defined
 * on each section, enabling smooth scrolling through the page.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main>
          <Routes>
            {/* Ruta principal que muestra todas las secciones en una sola página */}
            <Route path="/" element={<MainPage />} />
            {/* Páginas de equipos de League of Legends */}
            <Route path="/pages/equiposlol/FNT" element={<FNT />} />
            <Route path="/pages/equiposlol/FNT1" element={<FNT1 />} />
          </Routes>
        </main>
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;