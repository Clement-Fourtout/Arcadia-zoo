import React, { useEffect, useState } from 'react';

const DiffServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/services')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched from API:', data); // Assurez-vous que les données sont correctement récupérées
        setServices(data);
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="container-fluid bg-dark p-2 mt-1 mb-3">
      <div className="row justify-content-center">
        <div className="col col-lg-5 text-light">
          <h1 className="text-xl-center text-decoration-underline font-weight-bold mt-5 mb-5">
            Les Services du Parc
          </h1>
        </div>
      </div>
      {Array.isArray(services) && services.length > 0 ? (
        services.map(service => (
          <div key={service.id} className="row justify-content-center">
            <div className="col-lg-5 text-light text-center">
              <h2 className="font-weight-bold text-decoration-underline text-info mt-3 mb-4">
                {service.title}
              </h2>
              <img
                src={service.image_url} // Assurez-vous que service.image_url est correctement formé
                className="d-block w-100"
                alt={service.title}
              />
              <p className="mt-2">{service.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-light">Aucun service trouvé.</p>
      )}
    </div>
  );
};

export default DiffServices;
