import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/star_wars_logo.png';
import { useFavorites } from '../context/FavoritesContext';

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} alt="Star Wars Logo" className="logo" />
      </Link>
      <nav>
        <Link to="/favoritos" className="favoritos-button">
          Favoritos ({favorites.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;