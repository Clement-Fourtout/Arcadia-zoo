import React, { useState } from 'react';

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
    <div className="container-fluid mr-3 ml-3 mb-3 text-xl-center">
      <h2>Votre avis compte pour nous</h2>
      <form onSubmit={handleAvisSubmit} className="row justify-content-center">
        <input
          className="col-lg-2 col-md-auto mr-3 mb-3 mt-3 bg-white rounded"
          type="text"
          placeholder="Votre pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          required
        />
        <textarea
          className="mr-3 bg-white rounded"
          placeholder="Votre avis"
          value={avis}
          onChange={(e) => setAvis(e.target.value)}
          required
        />
        <button type="submit" className="bg-white col-md-auto mt-3 mr-3">Soumettre</button>
      </form>
    </div>
  );
}

export default Avis;
