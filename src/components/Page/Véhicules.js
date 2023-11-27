//Ne pas oublier cet import au préalable à l’utilisation de hooks
import { useState }  from "react";

//pour cet exemple, nous utilisons un composant fonctionnel
export default function Vehicules() {

    // Variable qui contient la liste des villes à afficher
    const [villes, setVilles] = useState([]);

    /* Variable qui contient le numéro du département, et qui est mise à jour à chaque modification
    du formulaire - voir la fonction handleChange. Nous lui donnons la valeur par défaut « 01 » */
    const [departement, setDepartement] = useState("01");

    // Variable qui contient l’action à réaliser lors du clic sur le bouton « Update »
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://geo.api.gouv.fr/communes?codeDepartement=" + departement)
            .then((response) => response.json())
            .then((data) => setVilles(data));
    };

    /* Variable qui contient l’action à réaliser lors d’une modification de la valeur du formulaire */
    const handleChange = (event) => {

        //mise à jour de la variable « departement » à partir de son setter « setDepartement »
        setDepartement(event.target.value);

    };

   return (
      <main>
          <div>
              <h2>Liste des Villes du département</h2>
              <form action="submit" onSubmit={handleSubmit}>
                     <input
                         value={departement}
                         type="text"
                         placeholder="département ..."
                         onChange={handleChange}
                     />
                     <button>Update</button>
              </form>

              <ul>
                 {villes.map((ville) => (
                     <li key={ville.code}> 
                         {ville.nom} : {ville.population} habitants
                     </li>
                 ))}
              </ul>
          </div>
      </main>
    )
}

