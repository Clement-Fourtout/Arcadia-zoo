import React, { useState, useEffect } from 'react';

function Footer() {
    const [horaires, setHoraires] = useState([]);

    useEffect(() => {
        async function fetchHoraires() {
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
        }

        fetchHoraires();
    }, []);

    return (
        <div className="container-lg bg-dark rounded">
            <footer className="py-3 my-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/accueil" className="nav-link px-3 text-light">Accueil</a></li>
                    <li className="nav-item"><a href="/politique" className="nav-link px-3 text-light">Politique des données</a></li>
                    <li className="nav-item"><a href="/mentions" className="nav-link px-3 text-light">Mentions légales</a></li>
                    <li className="nav-item"><a href="/connexion" className="nav-link px-3 text-light">Espace Pro</a></li>
                    <div className="dropdown">
                        <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nos horaires d'ouverture
                        </button>
                        <ul className="dropdown-menu">
                            {horaires.map((horaire, index) => (
                                <li key={index}>
                                    <span className="dropdown-item-text">{horaire.jour} : {horaire.heures}</span>
                                    {index < horaires.length - 1 && <hr className="dropdown-divider" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </ul>
                <p className="text-center text-light">© Arcadia Zoo de Brocéliande.</p>
            </footer>
        </div>
    );
}

export default Footer;
