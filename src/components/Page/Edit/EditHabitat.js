// EditHabitat.js

import React, { useState } from 'react';

const EditHabitat = ({ habitat, updateHabitat, cancelEdit }) => {
  const [formData, setFormData] = useState({
    name: habitat.name,
    description: habitat.description,
    animal_list: habitat.animal_list,
    image: habitat.imageUrl,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedHabitat = {
      ...formData,
      id: habitat.id,
    };
    await updateHabitat(updatedHabitat);
    cancelEdit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Modifier Habitat</h3>
      <label>
        Nom:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Liste des animaux:
        <textarea
          name="animal_list"
          value={formData.animal_list}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
        />
      </label>
      <br />
      <button type="submit">Enregistrer</button>
      <button type="button" onClick={cancelEdit}>Annuler</button>
    </form>
  );
};

export default EditHabitat;
