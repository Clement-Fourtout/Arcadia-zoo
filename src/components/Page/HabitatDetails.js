import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HabitatDetails = () => {
  const { slug } = useParams();
  const [habitat, setHabitat] = useState(null);

  useEffect(() => {
    const fetchHabitat = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'habitat');
        }
        const data = await response.json();
        setHabitat(data[0]);
      } catch (error) {
        console.error('Error fetching habitat:', error);
      }
    };

    fetchHabitat();
  }, [slug]);

  if (!habitat) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container">
      <h1>{habitat.name}</h1>
      <img src={habitat.image} alt={habitat.name} />
      <p>{habitat.description}</p>
      <p>Animaux présents : {habitat.animal_list}</p>
    </div>
  );
};

export default HabitatDetails;
