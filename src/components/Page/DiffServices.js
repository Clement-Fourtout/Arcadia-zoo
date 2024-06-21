import React, { useEffect, useState } from 'react';
import Restaurant1 from '../styles/Logo/Services/Restaurant 1.jpg'
import Restauration from '../styles/Logo/Restauration.jpg'
import Pacha from '../styles/Logo/Services/Le pacha.jpg'
import Guide from '../styles/Logo/Services/Guide.jpg'
import Train from '../styles/Logo/Services/Train.jpg'

const DiffServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        } else {
          console.error('Erreur lors de la récupération des services :', response.statusText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des services :', error);
      }
    }

    fetchServices();
  }, []);


  return (
    <div className="center-container">
      <h1>Les Services du Parc</h1>
      {services && services.length > 0 ? (
        <div className="services-container">
          {services.map(service => (
            <div key={service.id} className="service-item">
              <h2>{service.title}</h2>
              <img src={getImageUrl(service.image_url)} alt={service.title} className="service-image" />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun service à afficher</p>
      )}
    </div>
  );
};

// Fonction utilitaire pour obtenir l'URL complète de l'image en fonction de son nom importé
function getImageUrl(imageName) {
  switch (imageName) {
    case 'Restaurant1':
      return Restaurant1;
    case 'Restauration':
      return Restauration;
    case 'Pacha':
      return Pacha;
    case 'Guide':
      return Guide;
    case 'Train':
      return Train;
    default:
      return ''; // Gérer le cas où l'image n'est pas trouvée
  }
}

export default DiffServices;