import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HabitatDetails = () => {
  const { id } = useParams();
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimalsByHabitat = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals?habitat_id=${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des animaux');
        }
        const animalsData = await response.json();
        setAnimals(animalsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des animaux :', error);
      }
    };

    fetchAnimalsByHabitat();
  }, [id]);

  return (
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
      <h1>Animaux présents dans l'habitat</h1>
      <ul>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <li key={animal.id}>
              <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">{animal.name}</h3>
              <p class="text-light text-left mt-3">Espèce : {animal.species}</p>
              <p class="text-light text-left mt-3">Âge : {animal.age}</p>
              {animal.image && <img src={animal.image} alt={animal.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />}
            </li>
          ))
        ) : (
          <p>Aucun animal trouvé pour cet habitat</p>
        )}
      </ul>
    </div>
  );
};

export default HabitatDetails;
