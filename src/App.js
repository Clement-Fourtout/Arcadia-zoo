import Avis from './components/Avis';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Contact from './Routes/Connexion.js';
import Accueil from './Routes/Accueil';
import Services from './Routes/Services';
import { Route, Routes } from 'react-router-dom';
import Occasions from './Routes/Occasions';
import Formulaire from './components/Page/Formulaire.js';




function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Routes>
      <Route path='*' element={<Accueil/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='services' element={<Services/>} />
      <Route path='occasions' element={<Occasions/>} />
      <Route path='formulaire' element={<Formulaire/>} />
    </Routes>
    <Main></Main>
    <Avis></Avis>
    <Footer></Footer>
    </>
  );
}

export default App;
