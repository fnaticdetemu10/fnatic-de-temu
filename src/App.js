import React from 'react';
import './styles/App.css';

// Importar componentes
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Memberships from './pages/Memberships';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Componente principal
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <Home />
        <Memberships />
        <Events />
        <Contact />
      </main>
    </div>
  );
}

export default App;
