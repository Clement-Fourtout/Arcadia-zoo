import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Top from "../styles/Logo/Accessoire/to_top.png";
import '../styles/CSS/Animaux/AnimalDetails.css'

const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'animal');
        }
        const data = await response.json();
        setAnimal(data); // Mettre à jour l'état de l'animal avec les données récupérées
      } catch (error) {
        console.error('Error fetching animal:', error);
      }
    };

    fetchAnimal();
  }, [id]);
  if (!animal) {
    return <div>Chargement...</div>; // Affichage de chargement pendant que les données sont récupérées
  }

    // Triez les vetRecords par date décroissante
    const sortedVetRecords = [...animal.vetRecords].sort((a, b) => new Date(b.visit_date) - new Date(a.visit_date));

    // Récupérez seulement le dernier enregistrement vétérinaire
    const latestVetRecord = sortedVetRecords.length > 0 ? sortedVetRecords[0] : null;

  return (
    
<div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center">
      <a id="top" href="top"> </a>
      <div className="animal-details-container">
        <div className="animal-image-container">
          <img src={animal.image} className="animal-image-2" alt={animal.name} />
        </div>
        <div className="animal-description-container">
          <h1 className="animal-name">{animal.name}</h1>
          <div className="animal-description">
            <h3 className="text-light text-decoration-underline">{animal.name}</h3>
            <h5 className="text-light"><em>Espèce:</em> {animal.species}</h5>
            <h5 className="text-light"><em>Âge:</em> {animal.age}</h5>
            <h5 className="text-light"><em>Description:</em> {animal.description}</h5>
          </div>
        </div>
      </div>
      <h2 className="text-light text-decoration-underline">Dernier enregistrement vétérinaire</h2>
      {latestVetRecord ? (
        <div key={latestVetRecord.id} className="vet-record border text-light p-3 my-2">
          <h3>Date de visite: {new Date(latestVetRecord.visit_date).toLocaleDateString()}</h3>
          <p><strong>État de santé:</strong> {latestVetRecord.health_status}</p>
          <p><strong>Nourriture proposée:</strong> {latestVetRecord.food}</p>
          <p><strong>Grammage de la nourriture:</strong> {latestVetRecord.food_amount}</p>
          <p><strong>Détails:</strong> {latestVetRecord.details}</p>
        </div>
      ) : (
        <p className="text-light">Aucun enregistrement vétérinaire trouvé pour cet animal.</p>
      )}
      <a href="#top">
        <img src={Top} alt="Retour en haut" className="top-icon" />
      </a>
    </div>
  );
};;

export default AnimalDetails;
