import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Accueil from './Routes/Accueil';
import Services from './Routes/Services.js';
import { Route, Routes } from 'react-router-dom';
import Avis from './components/Page/Avis.js';
import Parc from './Routes/Parc.js';
import Arcadia from './Routes/Arcadia.js';
import { CookiesProvider } from 'react-cookie';
import Connexion from './Routes/Connexion.js';
import Admin from './components/Page/admin.js';
import Politique from './components/Page/Politique.js';
import MentionsLégales from './components/Page/MentionsLégales.js';
import HabitatDetails from './components/Page/HabitatDetails.js';
import AnimalDetails from './components/Page/AnimalDetails.js';
import EditAnimal from './components/Page/Edit/EditAnimal.js';
import EditHabitat from './components/Page/Edit/EditHabitat.js';
import EditService from './components/Page/Edit/EditService.js';
import EditHoraire from './components/Page/Edit/EditHoraire.js';
import Contact from './components/Page/Contact.js';
import CookieConsent from './Routes/CookieConsent.js';

function App() {

  return (
    <>
    <CookiesProvider>
    <Header></Header>
    <Nav></Nav>
    <CookieConsent/>
    <Routes>
      <Route path='/' element={<Accueil/>} />
      <Route path='/connexion' element={<Connexion/>} />
      <Route path='/habitat' element={<Parc/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/avis' element={<Avis/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/arcadia' element={<Arcadia/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/politique' element={<Politique/>} />
      <Route path='/mentions' element={<MentionsLégales/>} />
      <Route path="/habitat/:id" element={<HabitatDetails />} />
      <Route path="/animals/:id" element={<AnimalDetails />} />
      <Route path="/admin/edit-animal/:id" element={<EditAnimal />} />
      <Route path="/admin/edit-habitat/:id" element={<EditHabitat />} />
      <Route path="/admin/edit-service/:id" element={<EditService />} />
      <Route path="/admin/edit-horaire" element={<EditHoraire />} />
    </Routes>
    <Main></Main>
    <Footer></Footer>
    </CookiesProvider>
    </>
  );
}

export default App;
