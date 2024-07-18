import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Accueil from './Routes/Accueil';
import Services from './Routes/Services.js';
import Avis from './components/Page/Avis.js';
import Parc from './Routes/Parc.js';
import Arcadia from './Routes/Arcadia.js';
import Connexion from './Routes/Connexion.js';
import Admin from './components/Page/admin.js';
import Politique from './components/Page/Politique.js';
import MentionsLegales from './components/Page/MentionsLegales.js';
import HabitatDetails from './components/Page/HabitatDetails.js';
import AnimalDetails from './components/Page/AnimalDetails.js';
import EditAnimal from './components/Page/Edit/EditAnimal.js';
import EditHabitat from './components/Page/Edit/EditHabitat.js';
import EditService from './components/Page/Edit/EditService.js';
import ProtectedRoute from './Routes/ProtectedRoute.js';

function App() {
    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/parc" element={<Parc />} />
                <Route path="/services" element={<Services />} />
                <Route path="/avis" element={<Avis />} />
                <Route path="/arcadia" element={<Arcadia />} />
                <ProtectedRoute path="/admin" element={<Admin />} />
                <Route path="/politique" element={<Politique />} />
                <Route path="/mentions" element={<MentionsLegales />} />
                <Route path="/parc/:id" element={<HabitatDetails />} />
                <Route path="/animals/:id" element={<AnimalDetails />} />
                <ProtectedRoute path="/edit-animal/:id" element={<EditAnimal />} />
                <ProtectedRoute path="/edit-habitat/:id" element={<EditHabitat />} />
                <ProtectedRoute path="/admin/edit-service/:id" element={<EditService />} />
            </Routes>
            <Main />
            <Footer />
        </>
    );
}

export default App;
