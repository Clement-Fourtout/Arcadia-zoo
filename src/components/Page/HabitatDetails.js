import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HabitatDetails = () => {
  const { id } = useParams();
  const [habitat, setHabitat] = useState(null);

  useEffect(() => {
    const fetchHabitat = async () => {
      try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${id}`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération de l\'habitat');
        }
        const data = await response.json();
        setHabitat(data);
      } catch (error) {
        console.error('Error fetching habitat:', error);
      }
    };

    fetchHabitat();
  }, [id]);

  if (!habitat) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center">
      <h1 className="text-xl-center text-custom-savane text-decoration-underline font-weight-bold" style={{ marginBottom: "50px", marginTop: "25px" }}>
        {habitat.name}
      </h1>
      <div className="row justify-content-center mb-2">
        {habitat.animals && habitat.animals.length > 0 ? (
          habitat.animals.map((animal) => (
            <div key={animal.id} className="col-lg-4 mb-4">
              <img src={animal.image} className="col-lg-11 rounded" alt={animal.name} style={{ marginLeft: 0, padding: 0 }} />
              <div className="col-lg-12 border">
                <h3 className="text-xl text-align-center text-light text-decoration-underline mt-3">{animal.name}</h3>
                <h5 className="text-light text-left mt-3"><em>Espèce :</em> {animal.species}</h5>
                <h5 className="text-light text-left mt-3"><em>Âge :</em> {animal.age}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun animal trouvé pour cet habitat.</p>
        )}
      </div>
    </div>
  );
};


export default HabitatDetails;
