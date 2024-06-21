import React, { useState, useEffect } from 'react';
import '../styles/CSS/AvisValides.css';

const AvisList = () => {
  const [avisValidés, setAvisValidés] = useState([]);

  useEffect(() => {
    async function fetchAvisValidés() {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/avis_valides');
        if (response.ok) {
          const data = await response.json();
          setAvisValidés(data);
        } else {
          console.error('Erreur lors de la récupération des avis validés :', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des avis validés :', error);
      }
    }

    fetchAvisValidés();
  }, []);

  return (
    <div className="center-container">
      <h1>Avis</h1>
      {avisValidés && avisValidés.length > 0 ? (
        <ul className="avis-list">
          {avisValidés.map(avis => (
            <li key={avis.id} className="avis-item">
              <div className="pseudo">{avis.pseudo}</div>
              <div className="avis">{avis.avis}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun avis à afficher</p>
      )}
    </div>
  );
};

export default AvisList;
