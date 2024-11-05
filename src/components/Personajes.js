import React from 'react';
import { Link } from 'react-router-dom';

const Personajes = () => {
  const personajes = [
    { id: 1, name: 'Luke Skywalker', gender: 'male', hairColor: 'blond', eyeColor: 'blue', image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg' },
    //... otros personajes
  ];

  return (
    <div className="scroll-container">
      {personajes.map((personaje) => (
        <div key={personaje.id} className="card">
          <img className="card-img-top" src={personaje.image} alt={personaje.name} />
          <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <p>Gender: {personaje.gender}</p>
            <p>Hair Color: {personaje.hairColor}</p>
            <p>Eye Color: {personaje.eyeColor}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link to={`/detalle/personajes/${personaje.id}`} className="btn-learn-more">Learn more!</Link>
              <button className="favoritos-button">❤️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personajes;