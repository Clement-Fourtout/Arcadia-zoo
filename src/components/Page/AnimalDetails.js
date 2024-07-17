import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <h1 className="text-xl-center text-custom-savane text-decoration-underline font-weight-bold" style={{ marginBottom: "50px", marginTop: "25px" }}>
        {animal.name}
      </h1>
      <div className="row justify-content-center mb-2">
        <div className="col-lg-4">
          <img src={animal.image} className="col-lg-11 rounded" alt={animal.name} style={{ marginLeft: 0, padding: 0 }} />
        </div>
        <div className="col-lg-5 border">
          <h3 className="text-xl text-align-center text-light text-decoration-underline mt-3">{animal.name}</h3>
          <h5 className="text-light text-left mt-3"><em>Espèce:</em> {animal.species}</h5>
          <h5 className="text-light text-left mt-3"><em>Âge:</em> {animal.age}</h5>
          <h5 className="text-light text-left mt-3"><em>Description:</em> {animal.description}</h5>
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
    </div>
  );
};

export default AnimalDetails;
