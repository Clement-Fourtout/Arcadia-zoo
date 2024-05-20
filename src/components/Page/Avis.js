
import React, { useState } from 'react';

function Avis({ onSubmit }) {
  
  const [pseudo, setPseudo] = useState('');
  const [avis, setAvis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit({ pseudo, avis });
    }
    setPseudo('');
    setAvis('');
  };

  return (
    <div className="container-fluid mr-3 ml-3 mb-3 text-xl-center">
      <h2>Votre avis compte pour nous</h2>
      <form onSubmit={handleSubmit} className="row justify-content-center">
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
