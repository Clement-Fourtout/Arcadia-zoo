import React, { useEffect, useState } from 'react';

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
    <div className="habitats-container">
      <h2>Les habitats disponibles</h2>
      {habitats.map(habitat => (
        <div key={habitat.id} className="habitat-card">
          <h3>{habitat.name}</h3>
          <p>{habitat.description}</p>
          <img src={habitat.image} alt={habitat.name} />
          <p>Animaux présents : {habitat.animal_list}</p>
        </div>
      ))}
    </div>
  );
};

export default Habitats;
