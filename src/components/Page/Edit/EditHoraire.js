import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditHoraire = () => {
  const navigate = useNavigate();
  const [modifiedHoraires, setModifiedHoraires] = useState([]);

  useEffect(() => {
    const fetchHoraires = async () => {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/horaires');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des horaires');
        }
        const data = await response.json();
        setModifiedHoraires(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des horaires', error);
      }
    };

    fetchHoraires();
  }, []);

  const handleChange = (index, field, value) => {
    const updatedHoraires = [...modifiedHoraires];
    updatedHoraires[index][field] = value;
    setModifiedHoraires(updatedHoraires);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/horaires', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifiedHoraires),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour des horaires');
      }
      navigate('/admin'); // Redirige vers la page d'administration après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour des horaires :', error);
    }
  };

  // Vérification des données dans la console
  console.log('modifiedHoraires:', modifiedHoraires);

  return (
    <div className="container">
      <h2>Modifier les Horaires</h2>
      <form onSubmit={handleSubmit}>
        {modifiedHoraires.map((horaire, index) => (
          <div key={index} className="mb-3">
            <label htmlFor={`jour-${index}`}>Jour :</label>
            <input
              id={`jour-${index}`}
              type="text"
              value={horaire.jour || ''}
              onChange={(e) => handleChange(index, 'jour', e.target.value)}
              required
            />
            <label htmlFor={`heures-${index}`}>Heures :</label>
            <input
              id={`heures-${index}`}
              type="text"
              value={horaire.heures || ''}
              onChange={(e) => handleChange(index, 'heures', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

export default EditHoraire;
