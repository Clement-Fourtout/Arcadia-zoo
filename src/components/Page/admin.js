import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../styles/Logo/Arcadia Zoo.png';
import Nav from '../Nav';
import AvisEnAttente from './AvisEnAttente';
import '../styles/CSS/Admin.css/Vetrecords.css';
import '../styles/CSS/Admin.css/WrapperRegister.css';
import { useNavigate } from 'react-router-dom';


export default function Admin() {
  const [roles, setRoles] = useState([]); // État pour stocker les rôles
  const [nom, setNom] = useState('');
  const [mot_de_passe, setMotDePasse] = useState('');
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [services, setServices] = useState([]); 
  const [newService, setNewService] = useState({ title: '', description: '', image: null });
  const [habitats, setHabitats] = useState([]);
  const [newHabitat, setNewHabitat] = useState({name: '', description: '', image: '', animal_list: '' });
  const [newAnimal, setNewAnimal] = useState({name: '', species: '', age: '', habitat_id: '',image: null });
  const [setAnimal] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [animalId, setAnimalId] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [food, setFood] = useState('');
  const [foodAmount, setFoodAmount] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [animalViews, setAnimalViews] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredVetRecords, setFilteredVetRecords] = useState([]);
  const [visitTime, setVisitTime] = useState('');
  const [animalDetails, setAnimalDetails] = useState([]);
  const [horaires, setHoraires] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchUserData() {
      const userIdFromStorage = localStorage.getItem('userId');
      const tokenFromStorage = localStorage.getItem('token');

      if (userIdFromStorage && tokenFromStorage) {
        setUserId(userIdFromStorage);
        setToken(tokenFromStorage);
      } else {
        navigate('/connexion');
        // Gérer le cas où les données utilisateur ne sont pas disponibles dans le localStorage
      }
    }

    fetchUserData();
  }, [navigate]);


//Création de compte
const handleRegister = async (event) => {
    event.preventDefault();
    const userRole = localStorage.getItem('role');
    const email = document.getElementById('email').value;
    const nom = document.getElementById('nom').value;
    if (userRole === 'administrateur') {
        try {
            const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nom, mot_de_passe, role, email })
            });

            if (response.ok) {
                const { message, user: {mot_de_passe} } = await response.json();
                console.log(message);
                console.log('Mot de passe généré:', mot_de_passe);
                alert(`Mot de passe généré : ${mot_de_passe}`); // Affichez un message de succès
                setSuccessMessageVisible(true);
                setNom('');
                setMotDePasse('');
                setRole('');

            } else {
                const { error } = await response.json();
                console.error('Erreur lors de la création du compte :', error);
            }
        } catch (error) {
            console.error('Erreur lors de la création du compte :', error);
        }
    } else {
        console.error('Vous n\'êtes pas autorisé à créer de nouveaux comptes.');
    }
};

useEffect(() => {
  // Fonction pour charger les rôles depuis l'API
  const fetchRoles = async () => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/roles'); // Remplacez par votre URL d'API
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des rôles');
      }
      const data = await response.json();
      setRoles(data); // Met à jour l'état des rôles avec les données de l'API
    } catch (error) {
      console.error('Erreur lors de la récupération des rôles', error);
    }
  };

  fetchRoles();
}, []);
//Suppression de compte
const handleDeleteAccount = async () => {
  try {
      const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/users/${userId}`, {
          method: 'DELETE',
          headers: {
              'Authorization': `Bearer ${token}` // Assurez-vous d'envoyer le jeton d'authentification si nécessaire
          },
      });

      if (response.ok) {
          // Redirigez l'utilisateur vers la page de connexion après la suppression réussie du compte
          window.location.href = "/connexion";
      } else {
          const { error } = await response.json();
          console.error('Erreur lors de la suppression du compte :', error);
      }
  } catch (error) {
      console.error('Erreur lors de la suppression du compte :', error);
  }
};
const handleLogout = () => {
  // Supprimer le jeton JWT du stockage local
  localStorage.removeItem('token');
  // Supprimer d'autres données de session si nécessaire
  localStorage.removeItem('role');
  localStorage.removeItem('userId');
  // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée
  window.location.href = "/connexion";
};

// Gestion des services

const fetchServices = useCallback(async () => {
  try {
    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/services', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des services');
    }

    const data = await response.json();
    setServices(data);
  } catch (error) {
    console.error('Erreur lors de la récupération des services :', error);
  }
}, [token]);

useEffect(() => {
  if (token) {
    fetchServices();
  }
}, [token, fetchServices]);

//Ajout de service
const handleAddService = async (event) => {
  event.preventDefault();

  if (!newService.title || !newService.description || !newService.image) {
    console.error('Les champs title, description et image doivent être remplis');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('title', newService.title);
    formData.append('description', newService.description);
    formData.append('image_url', newService.image);

    console.log('Données à envoyer :', {
      title: newService.title,
      description: newService.description,
      image_url: newService.image
    });

    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/services', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout du service');
    }

    const data = await response.json();
    console.log('Service ajouté avec succès', data);
    fetchServices();
    setNewService({ title: '', description: '', image: null });
    setSuccessMessageVisible(true);
  } catch (error) {
    console.error('Erreur lors de l\'ajout du service :', error);
  }
};

const handleImageChange = (event) => {
  setNewService({
    ...newService,
    image: event.target.files[0],
  });
};

//Suppression de service
  const handleDeleteService = async (serviceId) => {
    try {
        const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/services/${serviceId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la suppression du service');
        }

        console.log('Service supprimé avec succès');
        fetchServices(); // Rafraîchir la liste des services après la suppression
    } catch (error) {
        console.error('Erreur lors de la suppression du service :', error);
    }
};

useEffect(() => {
  const fetchHoraires = async () => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/horaires');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des horaires');
      }
      const data = await response.json();
      setHoraires(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des horaires', error);
    }
  };

  fetchHoraires();
}, []);
// Edition de service pour pouvoir les modifier via EditHoraire.js
const handleEditHoraires = (horaireID) => {
  navigate(`/admin/edit-horaire/`);
};
// Edition de service pour pouvoir les modifier via EditService.js
const handleEditService = (serviceID) => {
  navigate(`/admin/edit-service/${serviceID}`);
};




//Gestion des Habitats
const fetchHabitatsAndAnimals = useCallback(async () => {
  try {
    // Récupérer à la fois les habitats et les animaux
    const [habitatsResponse, animalsResponse] = await Promise.all([
      fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/habitats', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/animals', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ]);

    // Vérifier les réponses
    if (!habitatsResponse.ok || !animalsResponse.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    // Récupérer les données JSON des deux réponses
    const habitatsData = await habitatsResponse.json();
    const animalsData = await animalsResponse.json();

    // Organiser les animaux par habitat
    const habitatsMap = {};

    animalsData.forEach((animal) => {
      const { habitat_id } = animal;
      if (!habitatsMap[habitat_id]) {
        habitatsMap[habitat_id] = {
          id: habitat_id,
          name: '', // Ajoutez le nom de l'habitat si nécessaire
          description: '', // Ajoutez la description de l'habitat si nécessaire
          animal_list: [],
        };
      }
      habitatsMap[habitat_id].animal_list.push(animal);
    });

    // Mettre à jour les habitats avec leurs descriptions si disponibles
    const updatedHabitats = habitatsData.map((habitat) => ({
      ...habitat,
      animals: habitatsMap[habitat.id] ? habitatsMap[habitat.id].animal_list : [],
    }));

    // Mettre à jour l'état local avec les habitats et les animaux associés
    setHabitats(updatedHabitats);
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    // Gérer les erreurs ici (affichage d'un message d'erreur, etc.)
  }
}, [token]);

useEffect(() => {
  if (token) {
    fetchHabitatsAndAnimals();
  }
}, [token, fetchHabitatsAndAnimals]);

//Ajout d'habitat
const handleAddHabitat = async (event) => {
  event.preventDefault();
  if (!newHabitat.name || !newHabitat.description || !newHabitat.image || !newHabitat.animal_list ) {
    console.error('Les champs title, description et image doivent être remplis');
    return;
  }
  try {
    const formData = new FormData();
    formData.append('name', newHabitat.name);
    formData.append('description', newHabitat.description);
    formData.append('image', newHabitat.image); 
    formData.append('animal_list', newHabitat.animal_list);

    console.log('Données à envoyer :', {
      name: newHabitat.name,
      description: newHabitat.description,
      image: newHabitat.image,
      animal_list: newHabitat.animal_list
    });

    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/habitats', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout de l\'habitat');
    }

    const data = await response.json();
    console.log('Habitat ajouté avec succès', data);
    fetchHabitatsAndAnimals(); // Rafraîchir la liste des habitats après l'ajout
    setNewHabitat({ name: '', description: '', image: null, animal_list: '' }); // Réinitialiser le formulaire
    setSuccessMessageVisible(true);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'habitat :', error);
  }
};


const handleImageHabitatsChange = (event) => {
  setNewHabitat({
    ...newHabitat,
    image: event.target.files[0],
  });
}
const handleEditHabitat = (habitatId) => {
  navigate(`/admin/edit-habitat/${habitatId}`);
};
const handleDeleteHabitat = async (habitatId) => {
  try {
    const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/habitats/${habitatId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression de l\'habitat');
    }

    console.log('Habitat supprimé avec succès');
    fetchHabitatsAndAnimals(); // Rafraîchir la liste des habitats après la suppression
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'habitat :', error);
  }
};

// Ajout Animaux
console.log('Données à envoyer :', {
  name: newAnimal.name,
  species: newAnimal.species,
  age: newAnimal.age,
  habitat_id: newAnimal.habitat_id,
  image: newAnimal.image,
});



const handleAddAnimal = async (event) => {
  event.preventDefault();
  if (!newAnimal.name || !newAnimal.species || !newAnimal.age || !newAnimal.description || !newAnimal.habitat_id || !newAnimal.image ) {
    console.error('Les champs nom, espèce, âge, habitat et image doivent être remplis');
    return;
  }
  try {
    const formData = new FormData();
    formData.append('name', newAnimal.name);
    formData.append('species', newAnimal.species);
    formData.append('age', newAnimal.age);
    formData.append('description', newAnimal.description);
    formData.append('habitat_id', newAnimal.habitat_id);
    formData.append('image', newAnimal.image);
   
    console.log('Données à envoyer :', {
      name: newAnimal.name,
      species: newAnimal.species,
      age: newAnimal.age,
      description: newAnimal.description,
      habitat_id: newAnimal.habitat_id,
      image: newAnimal.image
    });

    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/animals', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout de l\'animal');
    }

    const data = await response.json();
    console.log('Animal ajouté avec succès', data);
    fetchHabitatsAndAnimals();
    setNewAnimal({
      name: '',
      species: '',
      age: '',
      description:'',
      habitat_id: '',
      image: null
    });

    alert('Animal ajouté avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'animal :', error);
    alert('Erreur lors de l\'ajout de l\'animal');
  }
};

const handleImageAnimalsChange = (event) => {
  setNewAnimal({
    ...newAnimal,
    image: event.target.files[0],
  });
};

const handleDeleteAnimal = async (animalId) => {
  if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet animal ?')) {
    return;
  }
  try {
    const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals/${animalId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression de l\'animal');
    }

    alert('Animal supprimé avec succès');
    fetchHabitatsAndAnimals(); // Rafraîchir la liste des habitats après la suppression
  } catch (error) {
    console.error('Error deleting animal:', error);
    alert('Erreur lors de la suppression de l\'animal');
  }
};

const handleEditAnimal = (animalId) => {
  navigate(`/admin/edit-animal/${animalId}`);
};
// Afficher compteur d'incrémentation
useEffect(() => {
  const fetchAnimalViews = async () => {
    try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/animalviews');
      if (!response.ok) {
        throw new Error('Failed to fetch animal views');
      }
      const data = await response.json();
      setAnimalViews(data);
    } catch (error) {
      console.error('Error fetching animal views:', error);
    }
  };

  fetchAnimalViews();
}, []);

useEffect(() => {
  let records = [];
  animals.forEach(animal => {
    animal.vetRecords.forEach(record => {
      if (
        (selectedAnimal === '' || animal.id === parseInt(selectedAnimal)) &&
        (selectedDate === '' || new Date(record.visit_date).toLocaleDateString() === selectedDate)
      ) {
        records.push({
          ...record,
          animalName: animal.name,
        });
      }
    });
  });
  setFilteredVetRecords(records);
}, [selectedAnimal, selectedDate, animals]);
// Récupérer la liste des animaux depuis l'API
useEffect(() => {
  fetchAnimals();
}, []);

const fetchAnimals = async () => {
  try {
    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/animals');
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des animaux');
    }
    const data = await response.json();

    // Récupérer les détails des animaux avec leurs enregistrements vétérinaires
    const animalsWithVetRecords = await Promise.all(data.map(async (animal) => {
      const animalResponse = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/animals/${animal.id}`);
      if (!animalResponse.ok) {
        throw new Error(`Erreur lors du chargement des détails de l'animal ${animal.id}`);
      }
      const animalData = await animalResponse.json();
      return animalData;
    }));

    setAnimals(animalsWithVetRecords);
  } catch (error) {
    console.error('Erreur lors du chargement des animaux :', error);
    // Gérer les erreurs ici
  }
};



const handleDeleteVetRecord = async (vetRecordId) => {
  try {
    const response = await fetch(`https://api-zoo-22654ce4a3d5.herokuapp.com/vetrecords/${vetRecordId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression de l\'enregistrement vétérinaire');
    }

    // Mettre à jour l'état pour refléter la suppression
    setAnimal(prevAnimal => {
      if (!prevAnimal || !prevAnimal.vetRecords) {
        return prevAnimal;
      }
      return {
        ...prevAnimal,
        vetRecords: prevAnimal.vetRecords.filter(record => record.id !== vetRecordId),
      };
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'enregistrement vétérinaire :', error);
    // Gérer les erreurs ici
  }
};



const handleAddVetRecord = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/vetrecords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        animal_id: animalId,
        health_status: healthStatus,
        food: food,
        food_amount: foodAmount,
        visit_date: visitDate,
        visit_time: visitTime,
        details: animalDetails,
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout des données vétérinaires');
    }

    alert('Données vétérinaires ajoutées avec succès!');
    // Réinitialisez les champs du formulaire après l'ajout
    setAnimalId('');
    setHealthStatus('');
    setFood('');
    setFoodAmount('');
    setVisitDate('');
    setVisitTime('');
    setAnimalDetails('');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des données vétérinaires :', error);
    alert('Erreur lors de l\'ajout des données vétérinaires');
  }
};




return (
  <>
   <Nav /> {/* Vérifiez que Nav est correctement importé et utilisé */}
            <div>
                <h1 className="text-xl-center text-decoration-underline font-weight-bold mt-5">Page Administrateur</h1>
                <div className="wrapper">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="Logo" /> {/* Assurez-vous que Logo est correctement importé */}
                </a>
            </div>
            <div className="text-center mt-4 name">
                Arcadia
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                    className="form-control"
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder="Nom d'utilisateur"
                        value={nom}
                        onChange={(event) => setNom(event.target.value)}
                    />
                </div>
                <div className="form-field d-flex align-items-center">
      <label htmlFor="role">Type</label>
      <select
        className="form-control"
        id="role"
        name="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      >
        <option value="">Sélectionnez un rôle</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
                <div className="form-field d-flex align-items-center">
                    <label htmlFor="email">E-mail :</label>
                    <input
                      className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Entrez votre adresse e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <button type="button" onClick={handleRegister} className="btn mt-3">Créer un compte</button>
            </form>
            {successMessageVisible && (
                <div className="success-message">Compte créé avec succès !</div>
            )}
        </div>

        <div className="wrapper">
        <div className="admin-container">
        <h2 className="text-xl-center text-decoration-underline font-weight-bold">Ajouter un service</h2>
          <form onSubmit={handleAddService}>
          <div className="form-group">
          <label className="small-label">Titre :</label>
            <input
              type="text"
              name="title"
              placeholder="Titre"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              required
              style={styles.input}
            />
            </div>
            <div className="form-group">
            <label className="small-label">Description :</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              required
              style={styles.input}
            />
            </div>
            <div className="form-group">
          <label className="small-label">Image :</label>
            <input
              type="file"
              name="image_url"
              onChange={handleImageChange}
              accept="image/*"
              required
              style={styles.input}
            />
            </div>
            <button type="submit" className="btn btn-primary" style={styles.button}>Ajouter le service</button>
          </form>
          </div>
        </div>

                {successMessageVisible && <p>Service ajouté avec succès!</p>}

                {/* Liste des services existants */}
                <div className="service-list">
                    <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3">Liste des Services</h2>
                    <ul>
                        {services.map((service) => (
                            <li key={service.id}>
                                <div>{service.title}</div>
                                <div>{service.description}</div>
                                <button onClick={() => handleDeleteService(service.id)} className='vet-records-button btn btn-danger'>Supprimer</button>
                                <button onClick={() => handleEditService(service.id)} className="vet-records-button btn btn-warning">Modifier</button>

                            </li>
                ))}
            </ul>
            </div>

          <div id="successMessage" style={{ display: successMessageVisible ? 'block' : 'none' }}>
            <p>Le service a été ajouté avec succès.</p>
          </div>


          {/* Gestion des horaires */}
          <div className="container-fluid p-2 mt-1 mb-3 text-center">
            <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3 mt-3">Gestion des Horaires</h2>
            <div className="row justify-content-center mb-2">
            <div className="col-lg-5">
                <table className="table table-light table-striped table-centered">
                    <thead>
                        <tr>
                            <th scope="col">Jour</th>
                            <th scope="col">Heures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horaires.map((horaire) => (
                            <tr key={horaire.id}>
                                <td>{horaire.jour}</td>
                                <td>{horaire.heures}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='vet-records-button btn btn-info ' onClick={handleEditHoraires}>
                Modifier les horaires
                </button>
            </div>
            </div>
        </div>



    {/* Suppression de compte / Déconnexion */}
    <div className="p-3 mt-3">
      <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3 mt-3">Supprimer mon compte</h2>
        <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>                  
          <button onClick={handleDeleteAccount} className='vet-records-button btn btn-danger'>Supprimer mon compte</button>
          <button onClick={handleLogout} className='vet-records-button btn btn-info'>Déconnexion</button>
    </div>
          

{/* Affichage des avis en attente de confirmation par un employé */}
    <div>
      <AvisEnAttente />
    </div>



    {/* Ajout d'habitat */}
    <div>
      <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3 mt-3">Ajouter un nouvel habitat</h2>
      <form onSubmit={handleAddHabitat}>
        <input
          type="text"
          name="name"
          placeholder="Nom de l'habitat"
          value={newHabitat.name}
          onChange={(e) => setNewHabitat({ ...newHabitat, name: e.target.value })}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description de l'habitat"
          value={newHabitat.description}
          onChange={(e) => setNewHabitat({ ...newHabitat, description: e.target.value })}
          required
        />
        <input
              type="file"
              name="image"
              onChange={handleImageHabitatsChange}
              accept="image/*"
              required
        />
        <input
          name="animal_list"
          placeholder="Liste des animaux (séparés par des virgules)"
          value={newHabitat.animal_list}
          onChange={(e) => setNewHabitat({ ...newHabitat, animal_list: e.target.value })}
          required
        />
        <button type="submit">Ajouter l'habitat</button>
      </form>
    </div>
          {/* Liste des habitats existants */}

{/* Ajout d'animaux */}
<div className='wrapper'>
<div className="admin-container">
  <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3 mt-3">Ajouter un nouvel animal</h2>
  <form onSubmit={handleAddAnimal} className="vertical-form" style={styles.form}>
    <div className="form-group"> 
      <label className="small-label">Nom :</label>
      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="Nom de l'animal"
        value={newAnimal.name}
        onChange={(e) => setNewAnimal({ ...newAnimal, name: e.target.value })}
        required
        style={styles.input}
      />
    </div>
    <div className="form-group">
      <label className="small-label">Espèce :</label>
      <input
        type="text"
        name="species"
        placeholder="Espèce"
        value={newAnimal.species}
        onChange={(e) => setNewAnimal({ ...newAnimal, species: e.target.value })}
        required
        style={styles.input}
      />
    </div>
    <div className="form-group">
      <label className="small-label">Âge :</label>
      <input
        type="number"
        name="age"
        placeholder="Âge"
        value={newAnimal.age}
        onChange={(e) => setNewAnimal({ ...newAnimal, age: e.target.value })}
        required
        style={styles.input}
      />
    </div>
    <div className="form-group">
      <label className="small-label">Description :</label>
      <textarea
        type="text"
        name="description"
        placeholder="Description"
        value={newAnimal.description}
        onChange={(e) => setNewAnimal({ ...newAnimal, description: e.target.value })}
        required
        style={styles.input}
      />
    </div>
    <div className="form-group">
  <label className="small-label">Habitat :</label>
<select
  className="form-control"
  value={newAnimal.habitat_id}
  onChange={(e) => setNewAnimal({ ...newAnimal, habitat_id: e.target.value })}
  required
  style={styles.input}
>
  <option value="">Sélectionnez un habitat</option>
  {habitats.map((habitat) => (
    <option key={habitat.id} value={habitat.id}>{habitat.name}</option>
  ))}
</select>
</div>
    <div className="form-group">
      <label className="small-label">Image :</label>
      <input
        type="file"
        name="image"
        onChange={handleImageAnimalsChange}
        accept="image/*"
        required
        style={styles.input}
      />
    </div>
    <button type="submit" className="btn btn-primary" style={styles.button}>Ajouter l'animal</button>
  </form>
</div>
</div>


<div className="habitat-list">
  <h2 className="text-xl-center text-decoration-underline font-weight-bold">Liste des Habitats et de leurs Animaux</h2>
  <ul>
    {habitats.map((habitat) => (
      <li key={habitat.id}>
        <div>{habitat.name}</div>
        <div>{habitat.description}</div>
        {habitat.animals && habitat.animals.length > 0 ? (
          <ul>
            {habitat.animals.map((animal) => (
              <li key={animal.id}>
                {animal.name} - {animal.species} - Âge : {animal.age}{' '}
                <button onClick={() => handleDeleteAnimal(animal.id)} className='vet-records-button btn btn-danger'>Supprimer</button>
                <button onClick={() => handleEditAnimal(animal.id)} className="vet-records-button btn btn-warning">Modifier</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun animal trouvé pour cet habitat</p>
        )}
        <button onClick={() => handleDeleteHabitat(habitat.id)} className='vet-records-button btn btn-danger'>Supprimer</button>
        <button onClick={() => handleEditHabitat(habitat.id)} className="vet-records-button btn btn-warning">Modifier</button>
      </li>
    ))}
  </ul>
</div>
{/*Données Vétérinaires*/}
<div className="wrapper">
<div className="admin-container">
      <h2 className="text-xl-center text-decoration-underline font-weight-bold mb-3">Ajouter des données vétérinaires</h2>
      <form onSubmit={handleAddVetRecord} className="vertical-form" style={styles.form}>
        <div className="form-group">
          <label className="small-label">Sélectionnez un animal :</label>
          <select
            className="form-control"
            value={animalId}
            onChange={(e) => setAnimalId(e.target.value)}
            required
            style={styles.input}
          >
            <option value="">Sélectionnez un animal</option>
            {animals.map((animal) => (
              <option key={animal.id} value={animal.id}>
                {animal.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="small-label">État de santé :</label>
          <input
            type="text"
            className="form-control"
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div className="form-group">
          <label className="small-label">Nourriture :</label>
          <input
            type="text"
            className="form-control"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div className="form-group">
          <label className="small-label">Quantité de nourriture :</label>
          <input
            type="text"
            className="form-control"
            value={foodAmount}
            onChange={(e) => setFoodAmount(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div className="form-group">
          <label className="small-label">Date de visite :</label>
          <input
            type="date"
            className="form-control"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div className="form-group">
            <label className="small-label">Heure d'alimentation :</label>
            <input
              type="time"
              className="form-control"
              value={visitTime}
              onChange={(e) => setVisitTime(e.target.value)}
              required
              style={styles.input}
            />
          </div>
        <div className="form-group">
          <label className="small-label">Détails :</label>
          <textarea
            type="text"
            className="form-control"
            value={animalDetails}
            onChange={(e) => setAnimalDetails(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={styles.button}>
          Ajouter données vétérinaires
        </button>
      </form>
    </div>
    </div>

<div className="container">
<h1 className="text-center text-decoration-underline font-weight-bold">Enregistrements vétérinaires</h1>
<div className="filters">
  <select value={selectedAnimal} onChange={(e) => setSelectedAnimal(e.target.value)}>
    <option value="">Tous les animaux</option>
    {animals.map(animal => (
      <option key={animal.id} value={animal.id}>{animal.name}</option>
    ))}
  </select>

  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(new Date(e.target.value).toLocaleDateString())}
  />
</div>

<div className="vet-records-container">
  {filteredVetRecords.length > 0 ? (
    <table className="vet-records-table">
      <thead>
        <tr>
          <th className='mt-5 text text-underline'>Nom de l'animal</th>
          <th>Date de visite</th>
          <th>Heure de visite</th>
          <th>État de santé</th>
          <th>Nourriture proposée</th>
          <th>Grammage de la nourriture</th>
          <th>Détails</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredVetRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.animalName}</td>
            <td>{new Date(record.visit_date).toLocaleDateString()}</td>
            <td>{record.visit_time}</td>
            <td>{record.health_status}</td>
            <td>{record.food}</td>
            <td>{record.food_amount}</td>
            <td>{record.details}</td>
            <td>
              <button className="vet-records-button btn btn-danger" onClick={() => handleDeleteVetRecord(record.id)}>Supprimer</button>
              {/* Ajoutez ici d'autres actions comme la modification */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="text-center">Aucun enregistrement vétérinaire trouvé pour les critères sélectionnés.</p>
  )}
</div>
</div>

    
    <div className="container-fluid p-2 mt-1 mb-3 text-center">
      <h1 className="text-xl-center text-decoration-underline font-weight-bold" style={{ marginBottom: "50px", marginTop: "25px" }}>
        Vue des Animaux
      </h1>
      <div className="row justify-content-center mb-2">
        {animalViews.length > 0 ? (
          <div className="col-lg-8">
          <table className="table table-light table-striped table-centered">
            <thead>
              <tr>
                <th>Nom de l'Animal</th>
                <th>Nombre de Vues</th>
              </tr>
            </thead>
            <tbody>
              {animalViews.map((view) => (
                <tr key={view.animalId}>
                  <td>{view.animalName}</td>
                  <td>{view.viewCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        ) : (
          <p className="text-light">Aucune vue trouvée pour les animaux.</p>
        )}
      </div>
    </div>
      </div>
    </>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  smallLabel: {
    fontSize: '0.85rem',
    textAlign: 'center',
    marginBottom: '5px',
  },
};

