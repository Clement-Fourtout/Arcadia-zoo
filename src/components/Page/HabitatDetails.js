import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HabitatDetails = () => {
  const { id } = useParams();
  const [habitat, setHabitat] = useState(null);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchHabitat = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'habitat');
        }
        const habitatData = await response.json();
        setHabitat(habitatData);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'habitat:', error);
      }
    };

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

    fetchHabitat();
    fetchAnimalsByHabitat();
  }, [id]);

  if (!habitat) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container">
      <h1>{habitat.name}</h1>
      <img src={habitat.image} alt={habitat.name} />
      <p>{habitat.description}</p>
      <h2>Animaux présents :</h2>
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
