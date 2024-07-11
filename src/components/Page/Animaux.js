import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Habitats = () => {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/habitats');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des habitats');
        }
        const data = await response.json();
        setHabitats(data);
      } catch (error) {
        console.error('Error fetching habitats:', error);
      }
    };

    fetchHabitats();
  }, []);

  return (
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center">
      <h1 className="text-xl-center text-light text-decoration-underline font-weight-bold" style={{ marginBottom: "50px", marginTop: "25px" }}>Choisissez votre habitat</h1>
      <div className="row justify-content-center">
        {habitats.map(habitat => (
          <div key={habitat.id} className="col-md-4 mb-4">
            <div className="card bg-light">
              <img className="card-img-top" src={habitat.image} alt={habitat.name} />
              <div className="card-body">
                <h4 className="card-title text-custom-savane text-decoration-underline">{habitat.name}</h4>
                <p className="card-text">{habitat.description}</p>
                <p className="card-footer">Animaux présents : {habitat.animal_list}</p>
                <Link to={`/parc/${habitat.id}`} className="btn btn-warning">Découvrir {habitat.name}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habitats;
