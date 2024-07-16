import React, { useState, useEffect } from 'react';

const AvisEnAttente = () => {
  const [avisAttente, setAvisAttente] = useState([]);

  useEffect(() => {
    async function fetchAvisAttente() {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/avis_attente');
        if (response.ok) {
          const data = await response.json();
          setAvisAttente(data);
        } else {
          console.error('Erreur lors de la récupération des avis en attente :', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des avis en attente :', error);
      }
    }

    fetchAvisAttente();
  }, []);

  const handleValider = async (id) => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/avis_valides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setAvisAttente(avisAttente.filter((avis) => avis.id !== id));
      } else {
        console.error('Erreur lors de la validation de l\'avis :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la validation de l\'avis :', error);
    }
  };

  const handleRejeter = async (id) => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/avis_rejeter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setAvisAttente(avisAttente.filter((avis) => avis.id !== id));
      } else {
        console.error('Erreur lors du rejet de l\'avis :', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors du rejet de l\'avis :', error);
    }
  };

  return (
    <div>
      <h1 className="text-xl-center text-decoration-underline font-weight-bold mt-3 mb-3">Avis en Attente</h1>
      {avisAttente && avisAttente.length > 0 ? (
        <ul>
          {avisAttente.map(avis => (
            <li key={avis.id}>
              <p>Pseudo : {avis.pseudo}</p>
              <p>Avis : {avis.avis}</p>
              <button onClick={() => handleValider(avis.id)}>Valider</button>
              <button onClick={() => handleRejeter(avis.id)}>Rejeter</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun avis en attente à afficher</p>
      )}
    </div>
  );
};

export default AvisEnAttente;
