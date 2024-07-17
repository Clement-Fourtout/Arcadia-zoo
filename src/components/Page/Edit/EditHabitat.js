import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHabitat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habitats, setHabitats] = useState({
    name: '',
    description: '',
    animal_list: '',
    image: null, // Utilisez null pour le champ image
  });

  useEffect(() => {
    const fetchHabitats = async () => {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/habitats');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des habitats');
        }
        const data = await response.json();
        setHabitats(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des habitats', error);
      }
    };

    fetchHabitats();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitats((prevHabitats) => ({
      ...prevHabitats,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHabitats((prevHabitats) => ({
        ...prevHabitats,
        image: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', habitats.name);
      formData.append('description', habitats.description);
      formData.append('animal_list', habitats.animal_list);
      if (habitats.image) {
        formData.append('image', habitats.image);
      }

      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'Habitats');
      }

    navigate('/admin');  // Redirige vers la page d'administration après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'Habitats', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-decoration-underline font-weight-bold mb-3 mt-3">Modifier Habitats</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            placeholder="Nom de l'Habitats"
            value={habitats.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            name="description"
            placeholder="Description"
            value={habitats.description}
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
        <input
            type="text"
            name="animal_list"
            placeholder="Liste des animaux"
            value={habitats.animal_list}
            onChange={handleChange}
            required
          />
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
