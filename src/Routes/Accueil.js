import React from 'react'
import Chimpanzée from '../components/styles/Logo/Animaux/Savane/Chimpanzée.jpg'
import Services from '../components/styles/Logo/Restauration.jpg'
import Histoire from '../components/styles/Logo/Foret de brocéliande.jpg'
import Top from "../components/styles/Logo/Accessoire/to_top.png"


export default function Accueil() {
  return (
 <>
     <a id="top" href="top"> </a>
      <main class="container-fluid bg-dark p-2 mt-1 mb-3    ">
      <h2 class="text-center"><a class="btn btn-outline-success " href="parc" role="button">Nos animaux</a></h2>
      <div class="row justify-content-center">
        <div class="col-6 col-md-7">
          <a href="parc">
          <img src={Chimpanzée} class="img-fluid border border-success rounded mb-3 " alt="chimpanzée" />    
          </a>
        </div>
        <hr></hr>
        <h2 class="text-center"><a class="btn btn-outline-light " href="services" role="button">Les services du parc</a></h2>
        <div class="col-6 col-md-7"> 
        <a href='services'>    
          <img src={Services} class="img-fluid border border-light rounded mb-3" alt="services" />
        </a>    
        </div>
        <hr></hr>
        <h2 class="text-center"><a class="btn btn-outline-info" href="arcadia" role="button">Notre histoire</a></h2>
        <div class="col-6 col-md-7">
          <a href='arcadia'>
          <img src={Histoire}  class="img-fluid border border-info rounded mb-3" alt="histoire"  />
          </a>
        </div>
      </div>
      </main>
      <a href="#top" >
      <img src={Top} class="" alt="" style={{position: "fixed", bottom : "50px", right: "50px", opacity: 0.5}}/>
      </a>
</> 
  )
}


