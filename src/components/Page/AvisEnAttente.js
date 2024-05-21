import React, { useState, useEffect } from 'react';

const AvisEnAttente = () => {
  const [avisAttente, setAvisAttente] = useState([]);

  useEffect(() => {
    async function fetchAvisAttente() {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/avis_attente');
      if (response.ok) {
        const data = await response.json();
        console.log('data:', data); // Vérifiez la structure des données
        setAvisAttente(data); // Ajustez en fonction de la structure des données
      } else {
        console.error('Erreur lors de la récupération des avis en attente :', response.statusText);
      }
    }

    fetchAvisAttente().catch(error => {
      if (error instanceof SyntaxError) {
        console.error('Erreur de syntaxe lors du traitement des données JSON :', error);
      } else {
        console.error('Erreur lors de la récupération des avis en attente :', error);
      }
    });
    
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
