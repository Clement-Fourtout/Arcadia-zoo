
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
    <>
      <div className="container-fluid bg-dark p-2 mt-1 mb-3">
        <div className="row justify-content-center">
          <div className="col col-lg-5 text-light">
            <h1 className="text-xl-center text-decoration-underline font-weight-bold mt-5 mb-5">
              Les Services du Parc
            </h1>
          </div>
        </div>
        {services.map((service) => (
          <div key={service.id} className="row justify-content-center">
            <div className="col-lg-5 text-light text-center">
              <h2 className="font-weight-bold text-decoration-underline text-info mt-3 mb-4">
                {service.title}
              </h2>
              <img
                src={`https://api-zoo-22654ce4a3d5.herokuapp.com/uploads/${service.image_url}`}
                className="d-block w-100"
                alt={service.title}

              />
              
              <p className="mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
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