import React, { useState, useEffect } from 'react';

const EditVetRecord = ({ recordId, onSave, token }) => {
  const [record, setRecord] = useState({
    health_status: '',
    food: '',
    food_amount: '',
    visit_date: '',
    details: '',
  });

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/vetrecords/${recordId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'enregistrement vétérinaire');
        }
        const data = await response.json();
        setRecord(data);
      } catch (error) {
        console.error('Error fetching vet record:', error);
      }
    };

    fetchRecord();
  }, [recordId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/vetrecords/${recordId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(record),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'enregistrement vétérinaire');
      }
      onSave();
      alert('Enregistrement vétérinaire mis à jour avec succès');
    } catch (error) {
      console.error('Error updating vet record:', error);
      alert('Erreur lors de la mise à jour de l\'enregistrement vétérinaire');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>État de santé</label>
        <input
          type="text"
          name="health_status"
          value={record.health_status}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Nourriture proposée</label>
        <input
          type="text"
          name="food"
          value={record.food}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Grammage de la nourriture</label>
        <input
          type="text"
          name="food_amount"
          value={record.food_amount}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Date de passage</label>
        <input
          type="date"
          name="visit_date"
          value={record.visit_date}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Détails</label>
        <textarea
          name="details"
          value={record.details}
          onChange={handleChange}
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enregistrer
      </button>
    </form>
  );
};

export default EditVetRecord;
