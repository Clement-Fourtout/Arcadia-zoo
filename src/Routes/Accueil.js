import React from 'react'
import Reparation from '../components/styles/Logo/Chimpanzée.jpg'
import Mecanicien from '../components/styles/Logo/Restauration.jpg'
import Occasions from '../components/styles/Logo/Foret de brocéliande.jpg'

export default function Accueil() {
  return (
 <>
      <main class="container-sm bg-dark p-2 mt-3 mb-3 rounded   ">
      <h2 class="text-center"><a class="btn btn-outline-success " href="services" role="button">Nos animaux</a></h2>
      <div class="row justify-content-center">
        <div class="col-6 col-md-7">
          <img src={Reparation} class="img-fluid border border-success rounded mb-3 " alt="reparation" />    
        </div>
        <hr></hr>
        <h2 class="text-center"><a class="btn btn-outline-light " href="services" role="button">Les services du parc</a></h2>
        <div class="col-6 col-md-7">      
          <img src={Mecanicien} class="img-fluid border border-light rounded mb-3" alt="mecanicien" />   
        </div>
        <hr></hr>
        <h2 class="text-center"><a class="btn btn-outline-info" href="occasions" role="button">Notre histoire</a></h2>
        <div class="col-6 col-md-7">
          <img src={Occasions}  class="img-fluid border border-info rounded mb-3" alt="occasions"  /> 
        </div>
      </div>
      </main>
</> 
  )
}


