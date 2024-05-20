import React from 'react';

function AvisList({ avis }) {
  // Vérifie si avis est défini et s'il est un tableau
  if (!avis || !Array.isArray(avis)) {
    return <div class='text-center'>Pas d'avis disponibles pour le moment.</div>;
  }

  return (
    <div class='container-lg text-center'>
      <h2>Avis des utilisateurs</h2>
      <ul>
        {avis.map((avisItem, index) => (
          <li key={index}>
            <strong>{avisItem.pseudo} :</strong> {avisItem.avis}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvisList;