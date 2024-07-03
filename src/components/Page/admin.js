import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../styles/Logo/Arcadia Zoo.png';
import Nav from '../Nav';
import AvisEnAttente from './AvisEnAttente';
import { v4 as uuidv4 } from 'uuid';

export default function Admin() {
  const [nom, setNom] = useState('');
  const [mot_de_passe, setMotDePasse] = useState('');
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [services, setServices] = useState([]); // State pour stocker les services
  const [newService, setNewService] = useState({ title: '', description: '', image: null });


  useEffect(() => {
    async function fetchUserData() {
      const userIdFromStorage = localStorage.getItem('userId');
      const tokenFromStorage = localStorage.getItem('token');

      if (userIdFromStorage && tokenFromStorage) {
        setUserId(userIdFromStorage);
        setToken(tokenFromStorage);
      } else {
        // Gérer le cas où les données utilisateur ne sont pas disponibles dans le localStorage
      }
    }

    fetchUserData();
  }, []);




    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';

    const css = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #ecf0f3;
}

.wrapper {
    max-width: 350px;
    min-height: 500px;
    margin: 80px auto;
    padding: 40px 30px 30px 30px;
    background-color: #ecf0f3;
    border-radius: 15px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
}

.logo {
    width: 80px;
    margin: auto;
}

.logo img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 3px #5f5f5f,
        0px 0px 0px 5px #ecf0f3,
        8px 8px 15px #a7aaa7,
        -8px -8px 15px #fff;
}

.wrapper .name {
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    padding-left: 10px;
    color: #555;
}

.wrapper .form-field input {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    background: none;
    font-size: 1.2rem;
    color: #666;
    padding: 10px 15px 10px 10px;
    /* border: 1px solid red; */
}

.wrapper .form-field {
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
    color: #555;
}

.wrapper .btn {
    box-shadow: none;
    width: 100%;
    height: 40px;
    background-color: #32CD32;
    color: #fff;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #b1b1b1,
        -3px -3px 3px #fff;
    letter-spacing: 1.3px;
}

.wrapper .btn:hover {
    background-color: #438b52;
}


.wrapper a {
    text-decoration: none;
    font-size: 0.8rem;
    color: #03A9F4;
}

.wrapper a:hover {
    color: #039BE5;
}

@media(max-width: 380px) {
    .wrapper {
        margin: 30px 20px;
        padding: 40px 15px 15px 15px;
    }

`;

// Ajoutez les styles CSS à l'élément style
if (style.styleSheet){
  // Ce code est pour les anciennes versions d'Internet Explorer
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

// Ajoutez l'élément style au head du document
head.appendChild(style);



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
                const { message } = await response.json();
                console.log(message); // Affichez un message de succès
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

const handleAddService = async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData();
    const id = uuidv4(); // Générer un ID unique
    formData.append('id', id); // Ajouter l'ID dans le FormData
    formData.append('title', newService.title);
    formData.append('description', newService.description);
    formData.append('image', newService.image);

    const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/services', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur lors de l'ajout du service :", errorData);
      throw new Error("Erreur lors de l'ajout du service");
    }

    const data = await response.json();
    console.log('Service ajouté avec succès', data);
    fetchServices();
    setNewService({ title: '', description: '', image: null });
    setSuccessMessageVisible(true);
  } catch (error) {
    console.error("Erreur lors de l'ajout du service :", error);
    // Gérer l'affichage d'un message d'erreur à l'utilisateur
  }
};

const handleImageChange = (event) => {
  setNewService({
    ...newService,
    image: event.target.files[0],
  });
};



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


return (
  <>
   <Nav /> {/* Vérifiez que Nav est correctement importé et utilisé */}
            <div>
                <h1>Page Administrateur</h1>
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
                                id="role"
                                name="role"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="veterinaire">Vétérinaire</option>
                                <option value="employe">Employé</option>
                            </select>
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <label htmlFor="email">E-mail :</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Entrez votre adresse e-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </form>
                </div>

                <div>
          <h1>Ajouter un service</h1>
          <form onSubmit={handleAddService}>
            <input
              type="text"
              name="title"
              placeholder="Titre"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              required
            />
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
            <button type="submit">Ajouter le service</button>
          </form>
        </div>

                {successMessageVisible && <p>Service ajouté avec succès!</p>}

                {/* Liste des services existants */}
                <div className="service-list">
                    <h2>Liste des Services</h2>
                    <ul>
                        {services.map((service) => (
                            <li key={service.id}>
                                <div>{service.title}</div>
                                <div>{service.description}</div>
                                <button onClick={() => handleDeleteService(service.id)}>Supprimer</button>
                            </li>
                ))}
            </ul>
            </div>

          <div id="successMessage" style={{ display: successMessageVisible ? 'block' : 'none' }}>
            <p>Le service a été ajouté avec succès.</p>
          </div>

              <div className="p-3 mt-3">
                    <h2>Supprimer mon compte</h2>
                    <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
                    
                    <button onClick={handleDeleteAccount}>Supprimer mon compte</button>

                    <button onClick={handleLogout}>Déconnexion</button>

                    <button id="registerButton" onClick={handleRegister} type="submit">Créer un compte</button>
                </div>
          

    <div id="successMessage" style={{ display: successMessageVisible ? 'block' : 'none' }}>
                <p>Votre compte a été créé avec succès. Un e-mail de confirmation a été envoyé à votre adresse e-mail.</p>
    </div>
    <div>
      <AvisEnAttente />
    </div>

      </div>
    </>
  );
};