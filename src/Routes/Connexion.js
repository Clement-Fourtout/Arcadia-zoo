
import Logo from '../components/styles/Logo/Arcadia Zoo.png'
import { useState } from 'react';

// Sélectionnez le head du document
var head = document.head || document.getElementsByTagName('head')[0];

// Créez un élément style pour ajouter vos styles CSS
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



export default function Connexion() {
    const [utilisateur, setUtilisateur] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [error, setError] = useState('');

    const handleConnexion = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ utilisateur, motDePasse })
            });
            
            if (response.ok) {
                const { token } = await response.json();
                // Stockez le jeton JWT dans le stockage local ou la session
                localStorage.setItem('token', token);
                // Redirigez l'utilisateur vers une page protégée ou effectuez d'autres actions
            } else {
                // Si l'authentification échoue, affichez un message d'erreur approprié
                const { message } = await response.json();
                setError(message);
            }
        } catch (error) {
            console.error('Erreur de connexion :', error);
            setError('Erreur de connexion');
        }
    };

    return (
        <>
            <div className="wrapper">
                <div className="logo">
                    <a href='/'>
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="text-center mt-4 name">
                    Arcadia
                </div>
                <form className="p-3 mt-3" onSubmit={handleConnexion}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="text"
                            name="Utilisateur"
                            id="Utilisateur"
                            placeholder="Utilisateur"
                            value={utilisateur}
                            onChange={(event) => setUtilisateur(event.target.value)}
                        />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input
                            type="password"
                            name="motDePasse"
                            id="mdp"
                            placeholder="Mot de passe"
                            value={motDePasse}
                            onChange={(event) => setMotDePasse(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn mt-3">Connexion</button>
                </form>
            </div>
        </>
    );
};