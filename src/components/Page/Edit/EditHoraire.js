import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHoraire = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [horaire, setHoraire] = useState({ jour: '', heures: '' });
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
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/horaires/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'horaire');
        }
        const data = await response.json();
        setHoraire({
          jour: data.jour,
          heures: data.heures,
        });
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'horaire', error);
      }
    };

    fetchHoraire();
  }, [navigate, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHoraire((prevHoraire) => ({
      ...prevHoraire,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/horaires/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(horaire),
      });


      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'horaire');
      }

      navigate('/admin'); // Redirige vers la page d'administration après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'horaire', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-decoration-underline font-weight-bold mb-3 mt-3">Modifier Horaire</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Jour :</label>
          <input
            type="text"
            name="jour"
            placeholder="Jour de la semaine"
            value={horaire.jour}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Heures :</label>
          <input
            type="text"
            name="heures"
            placeholder="Heures d'ouverture"
            value={horaire.heures}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
};

export default EditHoraire;
