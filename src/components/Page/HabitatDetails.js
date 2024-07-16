import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CSS/Animaux/HabitatDetails.css';

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
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center">
      <h1 className="text-xl-center text-custom-savane text-decoration-underline font-weight-bold" style={{ marginBottom: "50px", marginTop: "25px" }}>
        {habitat.name}
      </h1>
      <div className="row justify-content-center mb-2">
        {animals.length > 0 ? (
          animals.map((animal) => (
            <div key={animal.id} className="col-lg-4 mb-4">
              <h3 className="text-xl text-align-center text-light text-decoration-underline mt-3">{animal.name}</h3>
              <img src={animal.image} className="animal-image col-lg-11 rounded" alt={animal.name} style={{ marginLeft: 0, padding: 0 }} />
              <div className="col-lg-12">
                <h5 className="text-light text-left mt-3"><em>Espèce :</em> {animal.species}</h5>
                <h5 className="text-light text-left mt-3"><em>Âge :</em> {animal.age}</h5>
                <button id={`button-${animal.id}`} onClick={() => handleMoreInfo(animal.id)} className="btn btn-info mt-2">En savoir plus</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-light">Aucun animal trouvé pour cet habitat.</p>
        )}
      </div>
    </div>
  );
};

export default HabitatDetails;
