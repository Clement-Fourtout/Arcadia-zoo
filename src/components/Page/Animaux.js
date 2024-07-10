import React, { useEffect, useState } from 'react';

export default function Animaux() {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      try {
        const response = await fetch('/habitats');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des habitats');
        }
        const data = await response.json();
        setHabitats(data);
      } catch (error) {
        console.error('Error fetching habitats:', error);
      }
    };

    fetchHabitats();
  }, []);

  return (
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center">
      <h1 className="text-xl-center text-light text-decoration-underline font-weight-bold" style={{ marginBottom: "50px", marginTop: "25px" }}>Choisissez votre environnement</h1>
      <div className="card-deck" style={{ marginBottom: "5%" }}>
        {habitats.map(habitat => (
          <div className={`card ${habitat.cardBorderColor}`} key={habitat.id}>
            <a href={habitat.link}>
              <img src={habitat.image} className="card-img-top" alt={habitat.name} />
            </a>
            <div className="card-body">
              <h4 className={`card-title text-decoration-underline`}>{habitat.name}</h4>
              <p className="card-text">{habitat.description}</p>
              <a href={habitat.link} className={`btn ${habitat.buttonColor}`}>Découvrir {habitat.name}</a>
              <div className="card-footer">{habitat.footerText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
