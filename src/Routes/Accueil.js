import React from 'react'
import Reparation from '../components/styles/Logo/Nos services.jpg'
import Mecanicien from '../components/styles/Logo/entretien.jpg'
import Occasions from '../components/styles/Logo/occasions.png'

export default function Accueil() {
  return (
 <>
      <main class="container-lg bg-dark-subtle p-2 mt-3 mb-3  border border-bottom-0 border-top-0 border-bg-primary-subtle ">
      <h2 class="text-center"><a class="btn btn-outline-primary " href="reparation" role="button">Nos services de réparations</a></h2>
      <div class="row justify-content-center">
        <div class="col-6 col-md-7">
          <img src={Reparation} class="img-fluid border border-primary rounded mb-3 " alt="reparation" />    
        </div>
        <h2 class="text-center"><a class="btn btn-outline-secondary " href="entretien" role="button">Nos services d'entretiens</a></h2>
        <div class="col-6 col-md-7">      
          <img src={Mecanicien} class="img-fluid border border-secondary rounded mb-3" alt="mecanicien" />   
        </div>
        <h2 class="text-center"><a class="btn btn-warning" href="occasions" role="button">Nos véhicules d'occasions</a></h2>
        <div class="col-6 col-md-7">
          <img src={Occasions}  class="img-fluid border border-warning rounded mb-3" alt="occasions"  /> 
        </div>
      </div>
      </main>
</> 
  )
}


