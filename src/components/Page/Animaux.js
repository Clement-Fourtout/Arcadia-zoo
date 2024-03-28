import Chimpanzée from '../styles/Logo/Chimpanzée.jpg'
import React from 'react'

function Animaux() {
  return (
    <>
        <div class="container-fluid bg-dark p-2 mt-1 mb-3 ">
            <h2 class="text-center"><a class="btn btn-outline-success " href="parc" role="button">Nos animaux</a></h2>
        <div class="row justify-content-center">
        <div class="col-6 col-md-7">
          <a href="parc">
          <img src={Chimpanzée} class="img-fluid border border-success rounded mb-3 " alt="chimpanzée" />    
          </a>
        </div>
       </div>
       </div>
  </>
)
}
export default Animaux;