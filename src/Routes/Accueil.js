import React from 'react'
import Chimpanzée from '../components/styles/Logo/Animaux/Chimpanzée.jpg'
import Services from '../components/styles/Logo/Services/Restauration.jpg'
import Histoire from '../components/styles/Logo//Histoire/Foret de brocéliande.jpg'
import Top from "../components/styles/Logo/Accessoire/to_top.png"
import AvisList from '../components/Page/AvisList'
import Avis from '../components/Page/Avis'

export default function Accueil() {
  return (
<>
  <a id="top" href="top"> </a>
  <main className="container-fluid bg-dark p-2  mb-3">
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-7 mb-3">
        <h2 className="text-center"><a className="btn btn-outline-success" href="parc" role="button">Nos animaux</a></h2>
        <a href="parc">
          <img src={Chimpanzée} className="img-fluid border border-success rounded mb-3" alt="chimpanzée" />
        </a>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-7 mb-3">
        <h2 className="text-center"><a className="btn btn-outline-light" href="services" role="button">Les services du parc</a></h2>
        <a href='services'>
          <img src={Services} className="img-fluid border border-light rounded mb-3" alt="services" />
        </a>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-7 mb-3">
        <h2 className="text-center"><a className="btn btn-outline-info" href="arcadia" role="button">Notre histoire</a></h2>
        <a href='arcadia'>
          <img src={Histoire} className="img-fluid border border-info rounded mb-3" alt="histoire" />
        </a>
      </div>
    </div>
  </main>
  <a href="#top">
    <img src={Top} alt="" style={{ position: "fixed", bottom: "50px", right: "50px", opacity: 0.5 }} />
  </a>
  <Avis></Avis>
  <AvisList></AvisList>
</>

  )
}


