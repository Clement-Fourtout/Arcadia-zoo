import React, { useState } from 'react';
import '../styles/CSS/PostAvisForm.css';

function Avis() {
  const [pseudo, setPseudo] = useState('');
  const [avis, setAvis] = useState('');

  const handleAvisSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pseudo, avis }),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la soumission de l\'avis');
      }
      console.log('Avis soumis avec succès !');
      setPseudo('');
      setAvis('');
    } catch (error) {
      console.error('Erreur lors de la soumission de l\'avis :', error);
    }
  };

  return (
    <div className="container-fluid form-container">
    <h2 className="form-title">Votre avis compte pour nous</h2>
    <form onSubmit={handleAvisSubmit} className="form-content">
      <input
        className="form-input"
        type="text"
        placeholder="Votre pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        required
      />
      <textarea
        className="form-textarea"
        placeholder="Votre avis"
        value={avis}
        onChange={(e) => setAvis(e.target.value)}
        required
      />
      <button type="submit" className="form-button">Soumettre</button>
    </form>
  </div>
);
};

export default Avis;
