import { useNavigate } from 'react-router-dom';
import Logo from '../components/styles/Logo/Arcadia Zoo.png';
import React, { useState } from 'react';
import '../components/styles/CSS/Admin.css/WrapperRegister.css'


export default function Connexion() {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [mot_de_passe, setMotDePasse] = useState('');
    const [error, setError] = useState('');

    const handleConnexion = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api-zoo-22654ce4a3d5.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nom: nom,mot_de_passe: mot_de_passe})
            });
            
            if (response.ok) {
                const { token, role, userId } = await response.json();
                // Stockez le jeton JWT dans le stockage local ou la session
                localStorage.setItem('token', token);
                // Stockez également le rôle de l'utilisateur
                localStorage.setItem('role', role);
                // Stockez également le numéro utilisateur
                localStorage.setItem('userId', userId);
                

                // Redirigez l'utilisateur vers une page protégée ou effectuez d'autres actions
                navigate('/admin')
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
                    <img className='logo' src={Logo} alt="Logo" />
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
                        name="nom"
                        id="nom"
                        placeholder="Nom d'utilisateur"
                        value={nom}
                        onChange={(event) => setNom(event.target.value)}
                        autoComplete='username'
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
                        autoComplete='current-password'
                    />
                </div>
                <button type="submit" className="btn mt-3">Connexion</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    </>
);
};