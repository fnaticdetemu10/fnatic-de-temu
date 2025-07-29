import React from 'react';

// Import the existing section components. This page consolidates all sections
// into one layout for the home page when using react-router-dom.
import Hero from './Home/sections/Hero/Hero';
import About from './Home/sections/About/About';
import FeaturedCollection from './Home/sections/FeaturedCollection/FeaturedCollection';
import GamesSection from './Home/sections/GamesSection/GamesSection';
import MembershipCall from './MembershipCall';
import Teams from './Home/sections/Teams/Teams';
import Memberships from './Home/sections/Memberships/Memberships';
import Events from './Home/sections/Events/Events';
import Contact from './Home/sections/Contact/Contact';

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