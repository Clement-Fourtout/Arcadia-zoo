import React, { useState, useEffect } from 'react';

const EditVetRecord = () => {
  const [animalId, setAnimalId] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [food, setFood] = useState('');
  const [foodAmount, setFoodAmount] = useState('');
  const [visitDate, setVisitDate] = useState('');

  const [animals, setAnimals] = useState([]);

  // Fonction pour récupérer la liste des animaux depuis votre API
  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/animals');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des animaux');
      }
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des animaux :', error);
      // Gérer l'erreur ici (affichage d'un message d'erreur, etc.)
    }
  };

  // Charger la liste des animaux au chargement du composant
  useEffect(() => {
    fetchAnimals();
  }, []);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/vetrecords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          animal_id: animalId,
          health_status: healthStatus,
          food: food,
          food_amount: foodAmount,
          visit_date: visitDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de l\'enregistrement vétérinaire');
      }

      console.log('Enregistrement vétérinaire ajouté avec succès');
      // Ajoutez ici la logique pour informer l'utilisateur que l'ajout a réussi
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'enregistrement vétérinaire :', error);
      // Gérer l'erreur ici (affichage d'un message d'erreur, etc.)
    }
  };

  return (
    <div className="container">
      <h2>Ajouter un enregistrement vétérinaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="animalId">Sélectionnez un animal :</label>
          <select
            id="animalId"
            className="form-control"
            value={animalId}
            onChange={(e) => setAnimalId(e.target.value)}
            required
          >
            <option value="">Sélectionnez un animal</option>
            {animals.map((animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="healthStatus">État de santé :</label>
          <input
            type="text"
            id="healthStatus"
            className="form-control"
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="food">Nourriture proposée :</label>
          <input
            type="text"
            id="food"
            className="form-control"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodAmount">Quantité de nourriture :</label>
          <input
            type="text"
            id="foodAmount"
            className="form-control"
            value={foodAmount}
            onChange={(e) => setFoodAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitDate">Date de visite :</label>
          <input
            type="date"
            id="visitDate"
            className="form-control"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter Enregistrement Vétérinaire
        </button>
      </form>
    </div>
  );
};

export default EditVetRecord;
