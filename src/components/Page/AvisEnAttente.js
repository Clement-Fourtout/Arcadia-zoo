import React, { useState, useEffect } from 'react';

const AvisEnAttente = () => {
  const [avisAttente, setAvisAttente] = useState([]);

  useEffect(() => {
    async function fetchAvisAttente() {
      try {
        const response = await fetch('/avis_attente');
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

  return (
    <div>
      <h1>Avis en Attente</h1>
      {avisAttente.length > 0 ? (
        <ul>
          {avisAttente.map(avis => (
            <li key={avis.id}>
              <p>Pseudo : {avis.pseudo}</p>
              <p>Avis : {avis.avis}</p>
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
