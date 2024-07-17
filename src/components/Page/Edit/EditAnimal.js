import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    name: '',
    species: '',
    age: '',
    description: '',
    habitat_id: '',
    image: ''
  });
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals/${id}`);
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'animal', error);
      }
    };

    const fetchHabitats = async () => {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/habitats');
        const data = await response.json();
        setHabitats(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des habitats', error);
      }
    };

    fetchAnimal();
    fetchHabitats();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal, [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAnimal((prevAnimal) => ({
          ...prevAnimal, image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(animal),
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'animal');
      }
  
      const data = await response.json();
      console.log('Réponse de mise à jour:', data); // Vérifiez la réponse de mise à jour dans la console
  
      // Temporairement, commentez ou retirez cette ligne pour éviter la redirection automatique
      // navigate('/admin'); // Redirige vers la page d'administration après la mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'animal', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3 mt-3">Modifier Animal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            placeholder="Nom de l'animal"
            value={animal.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Espèce :</label>
          <input
            type="text"
            name="species"
            placeholder="Espèce"
            value={animal.species}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Âge :</label>
          <input
            type="number"
            name="age"
            placeholder="Âge"
            value={animal.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <textarea
            name="description"
            placeholder="Description"
            value={animal.description}
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
          <label>Habitat :</label>
          <select
            name="habitat_id"
            value={animal.habitat_id}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un habitat</option>
            {habitats.map((habitat) => (
              <option key={habitat.id} value={habitat.id}>{habitat.name}</option>
            ))}
          </select>
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

export default EditAnimal;
