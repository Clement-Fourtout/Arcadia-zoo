import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const EditHoraire = () => {
    const navigate = useNavigate();
    const [modifiedHoraires, setModifiedHoraires] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        } else {
            navigate('/connexion');
        }

        const fetchHoraire = async () => {
            try {
                const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/horaires`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération de l\'horaire');
                }
                const data = await response.json();
                setModifiedHoraires([data]); // Mettre les données dans un tableau pour accéder à modifiedHoraires[0]
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'horaire :', error);
            }
        };

        fetchHoraire();
    }, [navigate,]);

    const handleChange = (field, value) => {
        const updatedHoraire = { ...modifiedHoraires[0], [field]: value };
        setModifiedHoraires([updatedHoraire]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/horaires`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,                
                },
                body: JSON.stringify(modifiedHoraires[0]), // Envoyer le premier élément de modifiedHoraires
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour de l\'horaire');
            }
            navigate('/admin'); // Rediriger vers la page d'administration après la mise à jour
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'horaire :', error);
        }
    };

    // Vérifier si modifiedHoraires[0] est défini avant d'afficher le formulaire
    if (!modifiedHoraires[0]) {
        return <p>Chargement en cours...</p>;
    }

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
              value={horaire.jour}
              onChange={(e) => handleChange(index, 'jour', e.target.value)}
              required
            />
            <label htmlFor={`heures-${index}`}>Heures :</label>
            <input
              id={`heures-${index}`}
              type="text"
              value={horaire.heures}
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
