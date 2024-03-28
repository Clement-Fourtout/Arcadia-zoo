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
      <Route path='formulaire' element={<Formulaire/>} />
      <Route path='arcadia' element={<Arcadia/>} />
    </Routes>
    <Main></Main>
    <Avis></Avis>
    <Footer></Footer>
    </>
  );
}

export default App;
