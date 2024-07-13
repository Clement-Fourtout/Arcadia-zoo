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
import Connexion from './Routes/Connexion.js';
import Admin from './components/Page/admin.js';
import AvisList from './components/Page/AvisList.js';
import Politique from './components/Page/Politique.js';
import MentionsLégales from './components/Page/MentionsLégales.js';
import HabitatDetails from './components/Page/HabitatDetails.js';
import AnimalDetails from './components/Page/AnimalDetails.js';

function App() {

  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Routes>
      <Route path='*' element={<Accueil/>} />
      <Route path='connexion' element={<Connexion/>} />
      <Route path='parc' element={<Parc/>} />
      <Route path='services' element={<Services/>} />
      <Route path='avis' element={<Avis/>} />
      <Route path='arcadia' element={<Arcadia/>} />
      <Route path='admin' element={<Admin/>} />
      <Route path='politique' element={<Politique/>} />
      <Route path='mentions' element={<MentionsLégales/>} />
      <Route path="parc/:id" element={<HabitatDetails />} />
      <Route path="animals/:id" element={<AnimalDetails />} />
    </Routes>
    <Main></Main>
    <Avis></Avis>
    <AvisList></AvisList>
    <Footer></Footer>
    </>
  );
}

export default App;
