import React, { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Planetas = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(response => response.json())
      .then(data => setPlanetas(data.results))
      .catch(error => console.log(error));
  }, []);

  const isFavorite = (planetId) => favorites.some(fav => fav.id === planetId);

  return (
    <div className="scroll-container">
      {planetas.map((planeta) => (
        <div key={planeta.uid} className="card">
          <img
            className="card-img-top"
            src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`}
            alt={planeta.name}
          />
          <div className="card-body">
            <h5 className="card-title">{planeta.name}</h5>
            <div className="button-container">
              <button className="btn-learn-more">Learn more!</button>
              <button
                className="heart-button"
                onClick={() =>
                  isFavorite(planeta.uid)
                    ? removeFavorite(planeta.uid)
                    : addFavorite({ id: planeta.uid, name: planeta.name })
                }
              >
                {isFavorite(planeta.uid) ? '💔' : '❤️'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planetas;