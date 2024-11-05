import React, { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Vehiculos = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(response => response.json())
      .then(data => setVehiculos(data.results))
      .catch(error => console.log(error));
  }, []);

  const isFavorite = (vehicleId) => favorites.some(fav => fav.id === vehicleId);

  return (
    <div className="scroll-container">
      {vehiculos.map((vehiculo) => (
        <div key={vehiculo.uid} className="card">
          <img
            className="card-img-top"
            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`}
            alt={vehiculo.name}
          />
          <div className="card-body">
            <h5 className="card-title">{vehiculo.name}</h5>
            <div className="button-container">
              <button className="btn-learn-more">Learn more!</button>
              <button
                className="heart-button"
                onClick={() =>
                  isFavorite(vehiculo.uid)
                    ? removeFavorite(vehiculo.uid)
                    : addFavorite({ id: vehiculo.uid, name: vehiculo.name })
                }
              >
                {isFavorite(vehiculo.uid) ? '💔' : '❤️'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehiculos;