import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHoraire = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jour, setJour] = useState('');
    const [heures, setHeures] = useState('');
    const [token, setToken] = useState('');
    const [modifiedHoraires, setModifiedHoraires] = useState([]);

    useEffect(() => {
        const fetchHoraire = async () => {
            try {
                const tokenFromStorage = localStorage.getItem('token');
                if (!tokenFromStorage) {
                    navigate('/connexion');
                    return;
                }
                setToken(tokenFromStorage);

                const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/horaires/${id}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération de l\'horaire');
                }
                const data = await response.json();
                setJour(data.jour);
                setHeures(data.heures);
                // Initialisation de modifiedHoraires avec l'horaire récupéré
                setModifiedHoraires([{ jour: data.jour, heures: data.heures }]);
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'horaire :', error);
            }
        };

        fetchHoraire();
    }, [navigate, id]);

    const handleChange = (field, value) => {
        setModifiedHoraires([{ ...modifiedHoraires[0], [field]: value }]);
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
                body: JSON.stringify(modifiedHoraires[0]),
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
            <h2>Modifier les Horaires</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="jour">Jour :</label>
                    <input
                        id="jour"
                        type="text"
                        value={modifiedHoraires[0].jour}
                        onChange={(e) => handleChange('jour', e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="heures">Heures :</label>
                    <input
                        id="heures"
                        type="text"
                        value={modifiedHoraires[0].heures}
                        onChange={(e) => handleChange('heures', e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer les modifications</button>
            </form>
        </div>
    );
};

export default EditHoraire;
