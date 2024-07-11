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
    <div className="container">
      <h1>Liste des Animaux dans cet Habitat</h1>
      <ul>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <li key={animal.id}>
              {animal.name} - {animal.species} - Âge : {animal.age}
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
