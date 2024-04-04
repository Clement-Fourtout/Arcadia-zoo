import React from "react";
import Header from "../Header.js";
import Nav from "../Nav.js";
import Footer from "../Footer.js";
import Lion from "../styles/Logo/Animaux/Lion.jpg"
import Hyene from "../styles/Logo/Animaux/Hyene.jpg"
import Chacal from "../styles/Logo/Animaux/Chacal.jpg"

export default function Savane() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
      <h1 class=" text-xl-center text-warning text-decoration-underline" style={{marginBottom: "50px", marginTop: "25px"}}>La Savane
      </h1>
      <div class="row justify-content-center mb-2">
        <div class="col-lg-4 ">
          <img src={Lion} class="col-lg-11 offset-lg-1 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 border">
          <h3 class="text-xl text-left text-light text-decoration-underline">Le Lion d'Afrique</h3>
            <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
              <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles)</h5>
                <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
        </div>


        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-left text-light text-decoration-underline">La Hyène tachetée</h3>
            <h5 class="text-light text-left mt-4">L'un des plus grands carnivores d'Afriques aussi connue pour son cri ressemblant à un ricanement, la hène vie principalement en meute. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les prairies et les semi-déserts.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Rictus est en trés bonne santé</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 2 à 5 kilos par jour (petits mammifères, ongulés, oiseaux, reptiles et charognes )</h5>
                <h5 class="text-light  font-weight-light text-decoration-underline"><em>Dernier passage</em> 25.04.2024</h5>
        </div>
        <div class="col-lg-4 mt-5">
          <img src={Hyene} class="col-lg-11 offset-lg-1 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
        </div>


        <div class="col-lg-4 mt-5 ">
          <img src={Chacal} class="col-lg-7 offset-lg-1 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-left text-light text-decoration-underline">Le Chacal</h3>
            <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen en Afrique du Maghreb jusqu'en Europe et en Asie dans des zones arides à désertiques.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Lou est en bonne santé</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 2 à 4 kilos par jour (petits rongeurs, oiseaux, herbivores jeunes ou affaiblis) mais aussi des végétaux gràace à son régime alimentaire trés varié. 
                <br/>Contrairement à ce que l'on peut penser, les cadavres d'animaux ne représentent que 3% de son alimentation</h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 26.04.2024</h5>
        </div>


      </div>
    </div>
    <div class="d-grid col-1 mx-auto mt-3 mb-3">
    <a class="btn btn-primary" href='/formulaire' role='button'>Contact</a>
    </div>
    <Footer></Footer>
    </>
  )
}