import React from "react";
import Header from "../Header.js";
import Nav from "../Nav.js";
import Footer from "../Footer.js";
import Alligator from "../styles/Logo/Animaux/Marais/Alligator.jpg"
import Caiman from "../styles/Logo/Animaux/Marais/Caiman.jpg"
import Crocodile from "../styles/Logo/Animaux/Marais/Crocodile.jpg"
import CouleuvreCollier from "../styles/Logo/Animaux/Marais/Couleuvre-collier.jpg"
import AnacondaVert from "../styles/Logo/Animaux/Marais/Anaconda-vert.jpg"
import Buffle from "../styles/Logo/Animaux/Marais/Buffle-d'afrique.jpg"
import Faucon from "../styles/Logo/Animaux/Marais/Faucon-pèlerin.jpg"
import Flamant from "../styles/Logo/Animaux/Marais/Flamant-rose.jpg"
import Raton from "../styles/Logo/Animaux/Marais/Raton-laveur.jpg"
import Salamandre from "../styles/Logo/Animaux/Marais/Salamandre-tigrée.jpg"
import Rainette from "../styles/Logo/Animaux/Marais/Rainette-white.jpg"
import BecASabot from "../styles/Logo/Animaux/Marais/Bec-a-sabot-du-nil.jpg"


export default function Marais() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
      <h1 class=" text-xl-center text-success text-decoration-underline" style={{marginBottom: "50px", marginTop: "25px"}}>Le Marais</h1>
        <div class="row justify-content-center mb-2">
          <div class="col-lg-4 ">
            <img src={Alligator} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Alligator d'Amérique</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Caiman} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Caiman à lunettes</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Crocodile} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Crocodile</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={CouleuvreCollier} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Couleuvre à Collier</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={AnacondaVert} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Anaconda Vert</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Buffle} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Buffle d'Afrique</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Faucon} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Faucon Pèlerin</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Flamant} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Flamant Rose</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Raton} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Raton Laveur</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Salamandre} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Salamandre Tigrée</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Rainette} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La rainette de White</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={BecASabot} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Bec-à-Sabot du Nil</h3>
              <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
                <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="d-grid col-1 mx-auto mt-5 mb-5">
    <a class="btn btn-success" href='/parc' role='button'>Retour aux Habitats</a>
    </div>
    </div>
    <div class="d-grid col-1 mx-auto mt-3 mb-3">
    <a class="btn btn-primary" href='/formulaire' role='button'>Contact</a>
    </div>
    <Footer></Footer>
    </>
  )
}