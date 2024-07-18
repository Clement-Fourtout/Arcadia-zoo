import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHoraire = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jour, setJour] = useState('');
    const [heures, setHeures] = useState('');
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
                setJour(data.jour);
                setHeures(data.heures);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'horaire :', error);
            }
        };

        fetchHoraire();
    }, [navigate, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/horaires/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,                
                  },
                body: JSON.stringify({ jour, heures }),
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour de l\'horaire');
            }
            navigate('/admin'); // Redirige vers la page d'administration après la mise à jour
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'horaire :', error);
        }
    };

    return (
        <div className="container">
            <h2>Modifier Horaire</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Jour :</label>
                    <input
                        type="text"
                        value={jour}
                        onChange={(e) => setJour(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Heures :</label>
                    <input
                        type="text"
                        value={heures}
                        onChange={(e) => setHeures(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enregistrer les modifications</button>
            </form>
        </div>
    );
};

export default EditHoraire;
