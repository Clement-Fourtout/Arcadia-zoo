import Avis from './components/Avis';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Accueil from './Routes/Accueil';
import Services from './Routes/Services.js';
import { Route, Routes } from 'react-router-dom';
import Formulaire from './components/Page/Formulaire.js';
import Parc from './Routes/Parc.js';
import Arcadia from './Routes/Arcadia.js';
import Connexion from './Routes/Connexion.js';
import React, { useEffect, useState } from 'react';
import { getTasks } from './api';


function App() {
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      // Appel à l'API pour récupérer les tâches au chargement du composant
      getTasks()
        .then(data => {
          setTasks(data);
        })
        .catch(error => {
          // Gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
        });
    }, []);
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Routes>
      <Route path='*' element={<Accueil/>} />
      <Route path='connexion' element={<Connexion/>} />
      <Route path='parc' element={<Parc/>} />
      <Route path='services' element={<Services/>} />
      <Route path='formulaire' element={<Formulaire/>} />
      <Route path='arcadia' element={<Arcadia/>} />
    </Routes>
    <Main></Main>
    <Avis></Avis>
    <Footer></Footer>
    <div>
            {/* Afficher les tâches dans votre interface utilisateur */}
            {tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
    </>
  );
}

export default App;
