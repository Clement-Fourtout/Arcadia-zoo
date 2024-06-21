import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      const response = await axios.get('https://api-zoo-22654ce4a3d5.herokuapp.com/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };


  return (
    <>
      <div className="container-fluid bg-dark p-2 mt-1 mb-3">
        <div className="row justify-content-center">
          <div className="col col-lg-5 text-light">
            <h1 className="text-xl-center text-decoration-underline font-weight-bold mt-5 mb-5">Les Services du Parc</h1>
          </div>
        </div>

        {services.map(service => (
          <div key={service.id} className="row justify-content-center">
            <div className="col-lg-5 text-light text-center">
              <h2 className={`font-weight-bold text-decoration-underline text-${service.colorClass} mt-3 mb-4`}>{service.title}</h2>
              {renderServiceImage(service.type)}
              <h5 className="mt-2">{service.description}</h5>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

const renderServiceImage = (type) => {
  switch (type) {
    case 'Restaurant1':
      return <img src={Restaurant1} className="img-fluid rounded" alt="Le Sauvageon" />;
    case 'Restauration':
      return <img src={Restauration} className="img-fluid rounded" alt="La Serre Gustative" />;
    case 'Pacha':
      return <img src={Pacha} className="img-fluid rounded" alt="Le Pacha" />;
    case 'Guide':
      return <img src={Guide} className="img-fluid rounded" alt="Guide" />;
    case 'Train':
      return <img src={Train} className="img-fluid rounded" alt="Train" />;
    default:
      return null;
  }
};

export default DiffServices;