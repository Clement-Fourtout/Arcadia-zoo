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
        <div className="col-lg-4">
          <img src={habitat.animal.image} className="col-lg-11 rounded" alt="lion" style={{ marginLeft: 0, padding: 0 }} />
        </div>
        <div className="col-lg-5 border">
          <h3 className="text-xl text-align-center text-light text-decoration-underline mt-3">Le Lion d'Afrique</h3>
          <h5 className="text-light text-left mt-3"><em>Espèce :</em> {habitat.animal_list}</h5>
          <h5 className="text-light text-left mt-3"><em>Age :</em> {habitat.description}</h5>
          <p className="d-inline-flex gap-1">
            {/* Vous pouvez ajouter d'autres détails spécifiques de l'habitat ici */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HabitatDetails;
