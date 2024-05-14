import React, { useState, useEffect } from 'react';
import Logo from '../styles/Logo/Arcadia Zoo.png'

export default function Admin() {
  const [nom, setNom] = useState('');
  const [mot_de_passe, setMotDePasse] = useState('');
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Récupérer userId et token depuis le localStorage ou tout autre endroit où ils sont stockés après la connexion
    const userIdFromStorage = localStorage.getItem('userId');
    const tokenFromStorage = localStorage.getItem('token');
    setUserId(userIdFromStorage);
    setToken(tokenFromStorage);
}, []);


var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.type = 'text/css';

var css = `
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



const register = async (nom, mot_de_passe, role) => {
  try {
      const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nom, mot_de_passe, role })
      });

      if (response.ok) {
          const { message } = await response.json();
          console.log(message); // Affichez un message de succès
      } else {
          const { error } = await response.json();
          console.error('Erreur lors de la création du compte :', error);
      }
  } catch (error) {
      console.error('Erreur lors de la création du compte :', error);
  }
};

const handleRegister = async (event) => {
  event.preventDefault();
  const userRole = localStorage.getItem('role');
  if (userRole === 'administrateur') {
      await register(nom, mot_de_passe, role);
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
          }
      });

      if (response.ok) {
          // Redirigez l'utilisateur vers la page de connexion après la suppression réussie du compte
          window.location.href = '/login';
      } else {
          const { error } = await response.json();
          console.error('Erreur lors de la suppression du compte :', error);
      }
  } catch (error) {
      console.error('Erreur lors de la suppression du compte :', error);
  }
};


return (
  <>
      <div>
          <h1>Page Administrateur</h1>
          <p>Bienvenue sur la page Administrateur.</p>
          <div className="wrapper">
              <div className="logo">
                  <a href='/'>
                      <img src={Logo} alt="Logo" />
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
                      <span className="fas fa-key"></span>
                      <input
                          type="password"
                          name="mot_de_passe"
                          id="mot_de_passe"
                          placeholder="Mot de passe"
                          value={mot_de_passe}
                          onChange={(event) => setMotDePasse(event.target.value)}
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
                  <button type="button" onClick={handleRegister} className="btn1 mt-3">Créer un compte</button>
              </form>
              <div className="p-3 mt-3">
                    <h2>Supprimer mon compte</h2>
                    <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
                    <button onClick={handleDeleteAccount}>Supprimer mon compte</button>
                </div>
          </div>
      </div>
  </>
);
};