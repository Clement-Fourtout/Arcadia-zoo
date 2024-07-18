import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHabitat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habitat, setHabitat] = useState({
    name: '',
    description: '',
    animal_list: '',
    image: null, // Utilisez null pour le champ image
  });

  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    } else {
      navigate('/connexion');
    }
    const fetchHabitat = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'habitat');
        }
        const data = await response.json();
        setHabitat({
          name: data.name,
          description: data.description,
          animal_list: data.animal_list,
          image: null, // Initialiser l'image à null
        });
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'habitat', error);
      }
    };

    fetchHabitat();
  }, [navigate, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitat((prevHabitat) => ({
      ...prevHabitat,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHabitat((prevHabitat) => ({
        ...prevHabitat,
        image: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', habitat.name);
      formData.append('description', habitat.description);
      formData.append('animal_list', habitat.animal_list);
      if (habitat.image) {
        formData.append('image', habitat.image);
      }

      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // Ajouter le token JWT dans l'en-tête Authorization
      },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'habitat');
      }

      navigate('/admin');  // Redirige vers la page d'administration après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'habitat', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-decoration-underline font-weight-bold mb-3 mt-3">Modifier Habitat</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            placeholder="Nom de l'Habitat"
            value={habitat.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            name="description"
            placeholder="Description"
            value={habitat.description}
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
          <label>Liste des animaux :</label>
          <input
            type="text"
            name="animal_list"
            placeholder="Liste des animaux"
            value={habitat.animal_list}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image :</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
};

export default EditHabitat;
