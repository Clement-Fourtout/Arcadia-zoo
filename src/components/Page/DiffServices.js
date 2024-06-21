import React, { useEffect, useState } from 'react';
import Restaurant1 from '../styles/Logo/Services/Restaurant 1.jpg'
import Restauration from '../styles/Logo/Restauration.jpg'
import Pacha from '../styles/Logo/Services/Le pacha.jpg'
import Guide from '../styles/Logo/Services/Guide.jpg'
import Train from '../styles/Logo/Services/Train.jpg'

const DiffServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
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
  };

  return (
    <div className="services-container">
      <h1>Les Services du Parc</h1>
      {services.map(service => (
        <div key={service.id} className="service-item">
          <img src={getServiceImage(service.title)} alt={service.title} />
          <div className="service-details">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Fonction utilitaire pour obtenir l'URL complète de l'image en fonction de son nom importé
const getServiceImage = (title) => {
  switch (title) {
    case 'Le Sauvageon':
      return Restaurant1;
    case 'La Serre Gustative':
      return Restauration;
    case 'Le Pacha':
      return Pacha;
    case 'Guide':
      return Guide;
    case 'Train':
      return Train;
    default:
      return '';
  }
};

export default DiffServices;