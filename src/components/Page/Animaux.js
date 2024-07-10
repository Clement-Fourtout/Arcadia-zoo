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
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
      <h1 class=" text-xl-center text-light text-decoration-underline font-weight-bold" style={{marginBottom: "50px", marginTop: "25px"}}>Choisissez votre habitat</h1>
      {habitats.map(habitat => (
        <div key={habitat.id} className="habitat-card">
          <h4 class="card-title text-custom-savane text-decoration-underline">{habitat.name}</h4>
          <p class="card-text">{habitat.description}</p>
          <img class="card-img-top" src={habitat.image} alt={habitat.name} />
          <p class="card-footer">Animaux présents : {habitat.animal_list}</p>
        </div>
      ))}
    </div>
  );
};

export default Habitats;
