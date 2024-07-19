import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CSS/Animaux/HabitatDetails.css';
import Top from "../styles/Logo/Accessoire/to_top.png";

const HabitatDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habitat, setHabitat] = useState(null);
  const [animals, setAnimals] = useState([]);

  const handleMoreInfo = async (animalId) => {
    document.getElementById(`button-${animalId}`).disabled = true;
    console.log('Animal ID:', animalId); // Log l'ID pour vérifier qu'il est correct
    const animalName = await getAnimalName(animalId);
    await incrementConsultations(animalId, animalName);
    navigate(`/animals/${animalId}`);
  };

  const getAnimalName = async (animalId) => {
    try {
      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals/${animalId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch animal details');
      }
      const data = await response.json();
      return data.name;
    } catch (error) {
      console.error('Erreur lors de la récupération du nom de l\'animal:', error);
      return '';
    }
  };

  const incrementConsultations = async (animalId, animalName) => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/animalviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ animalId: animalId.toString(), animalName: animalName }), // Convertir en chaîne de caractères
      });
      const data = await response.json();
      console.log('Response from server:', data); // Log la réponse du serveur
    } catch (error) {
      console.error('Erreur lors de l\'incrémentation des consultations:', error);
    }
  };

  useEffect(() => {
    const fetchHabitatAndAnimals = async () => {
      try {
        const habitatResponse = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${id}`);
        if (!habitatResponse.ok) {
          throw new Error('Erreur lors de la récupération de l\'habitat');
        }
        const habitatData = await habitatResponse.json();
        setHabitat(habitatData);

        const animalsResponse = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals`);
        if (!animalsResponse.ok) {
          throw new Error('Erreur lors de la récupération des animaux');
        }
        const animalsData = await animalsResponse.json();
        const filteredAnimals = animalsData.filter(animal => animal.habitat_id === parseInt(id, 10));
        setAnimals(filteredAnimals);
      } catch (error) {
        console.error('Error fetching habitat and animals:', error);
      }
    };

    fetchHabitatAndAnimals();
  }, [id]);

  if (!habitat) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="habitat-details-container container-fluid">
    <a id="top" href="#top"> </a>
    <h1 className="habitat-title text-xl-center">
      {habitat.name}
    </h1>
    <div className="animal-row row justify-content-center mb-2">
      {animals.length > 0 ? (
        animals.map((animal) => (
          <div key={animal.id} className="animal-card col-lg-4 mb-4">
            <h3 className="animal-name text-xl text-align-center mt-3">{animal.name}</h3>
            <img src={animal.image} className="animal-image" alt={animal.name} />
            <div className="animal-details col-lg-12">
              <h5 className="text-light text-center mt-3"><em>Espèce :</em> {animal.species}</h5>
              <h5 className="text-light text-center mt-3"><em>Âge :</em> {animal.age}</h5>
              <button
                id={`button-${animal.id}`}
                onClick={() => handleMoreInfo(animal.id)}
                className="more-info-button btn mt-2"
              >
                En savoir plus
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-light">Aucun animal trouvé pour cet habitat.</p>
      )}
    </div>
    <a href="#top">
      <img src={Top} alt="Top" className="top-icon" />
    </a>
  </div>
);
};
export default HabitatDetails;
