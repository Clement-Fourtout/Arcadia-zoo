
import React, { useState } from 'react';

function Avis({ onSubmit }) {
  const [pseudo, setPseudo] = useState('');
  const [avis, setAvis] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ pseudo, avis });
    setPseudo('');
    setAvis('');
  };

  return (
    <div  class='container-fluid mr-3 ml-3 mb-3 text-xl-center' >Votre avis compte pour nous
    <form onSubmit={handleSubmit} class='row justify-content-center'>
      <input
        class='col-lg-2 col-md-auto mr-3 mb-3 mt-3 bg-white rounded'
        type="text"
        placeholder="Votre pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        required
      />
      <textarea
      class='mr-3 bg-white rounded'
        placeholder="Votre avis"
        value={avis}
        onChange={(e) => setAvis(e.target.value)}
        required
      />
      <button type="submit" class=' bg-white col-md-auto mt-3 mr-3'>Soumettre</button>
    </form>
    </div>
  );
}

export default Avis;
