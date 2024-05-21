import React, { useState, useEffect } from 'react';

const AvisEnAttente = () => {
  const [avisAttente, setAvisAttente] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les avis en attente depuis le serveur
    async function fetchAvisAttente() {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/avis_attente');
        if (response.ok) {
          const data = await response.json();
          // Mettre à jour l'état avec les données directement, car elles sont déjà dans la bonne structure
          setAvisAttente(data);
        } else {
          console.error('Erreur lors de la récupération des avis en attente :', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des avis en attente :', error);
      }
    }

    // Récupérer les données du serveur
    fetchAvisAttente();
  }, []);

  return (
    <div>
      <h1>Avis en Attente</h1>
      {avisAttente && avisAttente.length > 0 ? (
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
