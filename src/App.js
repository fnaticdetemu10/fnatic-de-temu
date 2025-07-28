import React from 'react';
import './styles/App.css';

// Import core layout components
import Header from './components/Header';
import Navigation from './components/Navigation';

// Import page sections
import Hero from './pages/Hero';
import About from './pages/About';
import FeaturedCollection from './pages/FeaturedCollection';
import GamesSection from './pages/GamesSection';
import MembershipCall from './pages/MembershipCall';
import Teams from './pages/Teams';
import Memberships from './pages/Memberships';
import Events from './pages/Events';
import Contact from './pages/Contact';

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
    <div className="App">
      <Header />
      <Navigation />
      <main>
        {/* Hero banner with large headline */}
        <Hero />
        {/* About / Who we are */}
        <About />
        {/* Featured collection of merchandise */}
        <FeaturedCollection />
        {/* Games where the club competes */}
        <GamesSection />
        {/* Membership call to action */}
        <MembershipCall />
        {/* Teams roster */}
        <Teams />
        {/* Existing membership plans section */}
        <Memberships />
        {/* Upcoming events */}
        <Events />
        {/* Contact form */}
        <Contact />
      </main>
    </div>
  );
}

export default App;