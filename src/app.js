import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Personajes from './components/Personajes';
import Vehiculos from './components/Vehiculos';
import Planetas from './components/Planetas';
import Favoritos from './components/Favoritos';
import { FavoritesProvider } from './context/FavoritesContext'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Personajes />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        <Footer />
      </Router>
    </FavoritesProvider>
  );
};

export default App;