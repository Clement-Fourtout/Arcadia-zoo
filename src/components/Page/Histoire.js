import Forêt from '../styles/Logo/Histoire/Foret de brocéliande.jpg'
import Forêt2 from '../styles/Logo/Histoire/histoire.jpg'
import Soin2 from '../styles/Logo/Histoire/Soin2.jpg'
import Soin from '../styles/Logo/Histoire/Soin.jpg'
import José from '../styles/Logo/Histoire/José.jpg'
import Merci from '../styles/Logo/Histoire/Merci.jpg'

function Histoire () {
  return (
    <>
        <div class="container-fluid bg-dark p-2 mt-1 mb-3 ">
          <div class="row justify-content-center  mb-2">
            <h1 class=" text-custom-histoire text-decoration-underline font-weight-bold text-center " style={{marginBottom: "25px", marginTop: "25px"}}>L'histoire du Zoo Arcadia</h1>

              <div class="col-lg-4 story ">
                <h3 class=" text-custom-histoire text-decoration-underline font-weight-bold mt-3 " >Une magnifique Histoire</h3>
                  <p class="text-light">Vous allez découvrir une histoire qui a aujourd'hui 64 ans d'existence. Plusieurs générations d'une même famille ont oeuvré pour la cause animale, 
                                        leur protection et leur bien être.</p>
              </div>
              <div class="col-lg-4 ">
                <img src={Forêt} class="col-lg-11 rounded-circle shadow-4-strong mt-2" alt="Foret" style={{marginLeft:0, padding:0}} />
              </div>
          </div>

            <div class="item row justify-content-center mb-2">
          <div class="col-lg-4 ">
          <img src={Forêt2} class="col-lg-11 rounded-circle" alt="Foret" style={{marginLeft:0, padding:0}} />
            </div>
            <div class="col-lg-4 story">
            <h3 class=" align-items-center text-custom-histoire text-decoration-underline font-weight-bold mt-5">Son Histoire</h3>
                      <p class="text-light">L'histoire commence ici, en 1960 près de la forêt de Brocéliande en Bretagne réputée depuis l'antiquité 
                                            pour ses légendes et autres récits merveilleux. La famille Saint Pierre a toujours eu une attention particulière pour protéger et préserver la 
                                            biodiversité mondiale, une passion pour les animaux qui n'a pas d'égale et ce tout au long de leur vie.</p>
            </div>
            </div>
            <div class="row justify-content-center  mb-2">
            <div class="col-lg-4 story ">
              <h3 class=" text-custom-histoire text-decoration-underline font-weight-bold mt-5 " >Leur santé, une priorité</h3>
                <p class="text-light">La famille Saint Pierre attache une importance toute particulière à la santé de ses congénéres. Chaque jour, plusieurs vétérinaires viennent 
                                      effectuer des contrôles sur chaque animal avant l'ouverture du zoo afin de s'assurer que tout se passe bien.
                                     </p>
            </div>
            <div class="col-lg-4 ">
              <img src={Soin2} class="col-lg-11 rounded-circle shadow-4-strong" alt="Soin" style={{marginLeft:0, padding:0}} />
            </div>
            </div>

            <div class="item row justify-content-center mb-2">
          <div class="col-lg-4 ">
          <img src={Soin} class="col-lg-11 rounded-circle" alt="miam" style={{marginLeft:0, padding:0}} />
            </div>
            <div class="col-lg-4 story">
            <h3 class=" align-items-center text-custom-histoire text-decoration-underline font-weight-bold mt-5">Une nourriture sélectionnée</h3>
                      <p class="text-light">Les soins tout comme l'apport d'une nourriture de qualité controlée avec un bon grammage pour chaque espèce 
                                            sont les facteurs les plus importants pour conserver leur bon état de santé</p>
            </div>
            </div>

            <div class="row justify-content-center  mb-2">
            <div class="col-lg-4 story ">
              <h3 class=" text-custom-histoire text-decoration-underline font-weight-bold mt-5 " >José, le dernier de la lignée</h3>
                <p class="text-light">La famille Saint Pierre a vu deux générations s'occuper du Zoo d'Arcadia. Aujourd'hui c'est José qui a repris le flambeau et 
                                      compte bien continuer à pérpétuer le dicton que sa famille a inscrit sur ce zoo " Leur santé, une priorité !"
                                     </p>
            </div>
            <div class="col-lg-4 ">
              <img src={José} class="col-lg-11 rounded-circle shadow-4-strong" alt="José" style={{marginLeft:0, padding:0}} />
            </div>
            </div>

            <div class="item row justify-content-center mb-2">
          <div class="col-lg-4 mb-3">
          <img src={Merci} class="col-lg-11 rounded-circle" alt="Merci" style={{marginLeft:0, padding:0}} />
            </div>
            <div class="col-lg-4 story">
            <h3 class=" align-items-center text-custom-histoire text-decoration-underline font-weight-bold mt-5">Merci à vous</h3>
                      <p class="text-light">Avant tout, la famille Saint Pierre vous remercie, c'est grâce à vous et vos parents que le zoo existe encore 60 ans plus tard. 
                                            C'est gràce à vous que l'état de santé et les soins apportés à ces animaux reste tels qu'il y a 60 ans. <br/> La Famille Saint Pierre et les animaux d'Arcadia vous remercient. </p>
            </div>
            </div>
  </div>
</>
)
}

export default Histoire;