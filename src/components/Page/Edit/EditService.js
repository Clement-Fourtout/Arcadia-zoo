import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditService = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState({
        title: '',
        description: '',
        image_url: null,
    });
    const [token, setToken] = useState('');

    useEffect(() => {
      const tokenFromStorage = localStorage.getItem('token');
      if (tokenFromStorage) {
        setToken(tokenFromStorage);
      } else {
        navigate('/connexion');
      }
        const fetchService = async () => {
            try {
                const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/services/${id}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du service');
                }
                const data = await response.json();
                setService({
                    title: data.title,
                    description: data.description,
                    image_url: null,
                });
            } catch (error) {
                console.error('Erreur lors de la récupération du service', error);
            }
        };

        fetchService();
    }, [navigate, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService((prevService) => ({
            ...prevService,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setService((prevService) => ({
                ...prevService,
                image_url: file,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', service.title);
            formData.append('description', service.description);
            if (service.image_url) {
                formData.append('image_url', service.image_url);
            }

            const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/services/${id}`, {
                method: 'PUT',
                body: formData,
                headers: {
                  Authorization: `Bearer ${token}`, // Ajouter le token JWT dans l'en-tête Authorization
              },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du service');
            }

            navigate('/admin'); // Redirige vers la page d'administration après la mise à jour
        } catch (error) {
            console.error('Erreur lors de la mise à jour du service', error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center text-decoration-underline font-weight-bold mb-3 mt-3">Modifier Service</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Titre :</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Titre du service"
                        value={service.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description :</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={service.description}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            resize: 'vertical',
                            padding: '8px',
                            fontSize: '16px',
                            wordWrap: 'break-word',
                        }}
                    />
                </div>
                <div>
                    <label>Image :</label>
                    <input
                        type="file"
                        name="image_url"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                <button type="submit">Enregistrer les modifications</button>
            </form>
        </div>
    );
};

export default EditService;
