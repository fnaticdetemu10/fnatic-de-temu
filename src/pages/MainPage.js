import React from 'react';

// Import the existing section components. This page consolidates all sections
// into one layout for the home page when using react-router-dom.
import Hero from './Hero';
import About from './About';
import FeaturedCollection from './FeaturedCollection';
import GamesSection from './GamesSection';
import MembershipCall from './MembershipCall';
import Teams from './Teams';
import Memberships from './Memberships';
import Events from './Events';
import Contact from './Contact';

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCollection />
      <GamesSection />
      <MembershipCall />
      <Teams />
      <Memberships />
      <Events />
      <Contact />
    </>
  );
};

export default MainPage;