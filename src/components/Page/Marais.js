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
import Top from "../styles/Logo/Accessoire/to_top.png"


export default function Marais() {
  return (
    <>
    <a id="top" href="top"> </a>
    <Header></Header>
    <Nav></Nav>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
        <li class="breadcrumb-item"><a href="parc">Environnements</a></li>
        <li class="breadcrumb-item active" aria-current="page">Marais</li>
      </ol>
    </nav>

    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
      <h1 class=" text-xl-center text-custom-marais text-decoration-underline font-weight-bold" style={{marginBottom: "50px", marginTop: "25px"}}>Le Marais</h1>
        <div class="row justify-content-center mb-2">
          <div class="col-lg-4 ">
            <img src={Alligator} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Alligator d'Amérique</h3>
              <h5 class="text-light text-left mt-4">L'Alligator d'Amérique est un grand crocodilien mesurant enttre 2,5m et 4,5m pour un poids allant de 90kg à 230kg. 
                                                    Il est réputé pour la force de sa machoire équivalent à 13 200 Newton (1,3 tonnes/cm2) 
                                                    le hissant à la 2nd place de la pluis puissante morsure du règne animal</h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> les cours d'eau et zones marécageuses d'Amérique du Nord</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Smooth est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span> (notamment piscivore et inectivore) 
                                                            comprenant tortues, poissons, petits mammifères et mêmes de jeunes crocodiliens.</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Caiman} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Caiman à lunettes</h3>
              <h5 class="text-light text-left mt-4">Le caïman à lunettes est l'un des plus petits crocodilien, ses paupières ridées avec notamment une crête osseuse entre ses yeux lui a valu son nom.
                                                    Il mesure entre 1,1m et 1.8m en moyenne pour un poids n'excedant pas les 50kg. </h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> dans divers habitats d'Amérique du Sud.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Steve est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span> (notamment piscivore et inectivore) avec un grande variété de proies, mange divers invertébrés 
                                                            (crabes, escargots, araignées, poisson, reptiles et mammifère) il est le seul crocodilien à se nourrir de végétaux.</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Crocodile} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Crocodile du Nil</h3>
              <h5 class="text-light text-left mt-4">Le Crocodile du Nil est le crocodilien et l'animal terrestre possédant le record de puissance de la mâchoire de 22000 Newtons(2,2tonnes/cm2).
                                                    Il mesure en moyenne 5m de long pour un poids variant entre 400kg et 1000kg. il peut atteindre 30km/h à la nage conter 15km/h sur terre</h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> dans les eaux douces (fleuves, rivières et lacs) et des eaux salées (marais, estuaires) 
                                               d'Afrique subsahariennes, Madagasgar et Comores.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Stanley est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span> (poissons, tortues, varans, antilopes, gnous, buffles, zèbres).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 26.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={CouleuvreCollier} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Couleuvre à Collier</h3>
              <h5 class="text-light text-left mt-4">La couleuvre à collier est une espèce de serpent non venimeux semi-aquatique appartenant à la classe des reptiles.
                                                    Mesurant de 65cm à 1,50m pour un poids d'en moyenne 200g elle peut rester en apnée 30 minutes</h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> en milieu aquatique et humides d'Europe, d'Afrique du Nord et du Moyen-orient.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Malfoy est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span> mangeant principalement des amphibiens (grenouilles, crapauds, salamandres) 
                                                                                      mais aussi des poissons d'eau douce.</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 21.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={AnacondaVert} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Anaconda Vert</h3>
              <h5 class="text-light text-left mt-4">Extrêmement à l'aise dans l'eau, l'Anaconda est le roi des fleuves et marais de la jungle amazonienne. 
                                                    Il pêse au mavimum 250kg la nommant serpent le plus lourd du monde ! Sa taille béante de 10m à 12m et sa machoire se désaxant, 
                                                    il peut donc aisément avaler des proies plus grosses que lui avec un peu de patience.</h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> marais et zones humides de la forêt amazonienne d'Amérique du Sud.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Francis est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span> (cerfs , cabiais, caïmans adultes voire même des êtres humains).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 28.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Buffle} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Buffle d'Afrique</h3>
              <h5 class="text-light text-left mt-4">Le buffle d'Afrique également appelé grand buffle noir des savanes est un grand mammifère herbivore appartenant à la famille des bovidés. 
                                                    Il tient ses origines du buffle d'Asie. Mesurant entre 2,50m et 3,40m; il pèse de 300 à 500kg pour une femelle et 700 à 900kg pour un mâle.</h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> dans la savane Africaine, les prairies, ainsi qu'autour des rivières et marécages.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Lola est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-success">Herbivore.</span></h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Faucon} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Faucon Pèlerin</h3>
              <h5 class="text-light text-left mt-4">Les Falconidés sont une famille de rapaces diurnes de taille petite à moyenne(50cm pour une envergure de 100 à 115cm) et un poids d'1kg de moyenne.
                                                    Ils sont de lointains cousins aux perroquets avec lesquels ils ont un commun un bec crochu.</h5> 
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> dans tout les habitats même s'il est plus agile dans des milieux ouverts.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Merlin est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Ornithophage</span>, il ne chasse pricniapelemnt que des oiseaux capturés en vol.</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 26.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Flamant} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Flamant Rose</h3>
              <h5 class="text-light text-left mt-4">Le flamant rose est un échassier migrateur de grande taille: il mesure 125 à 145 cm de long et environ 1,10 m à 1,50 m de hauteur. 
                                                    Il pèse de 2 à 4 kg et son envergure est de 140 à 165 cm.</h5> 
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> sur les quatres coins du globe dans les zones d'eaux salées, les lagunes et marécages.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Groupe de 12 flamants en bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-primary">Filtreur</span> grâce à son long bec recourbé, il filtre la vase afin d'extraire mollusques et crustacés. 
                                                                                      Mais son plat préféré c'est l'artémie, un petit crustacé qui contient un pigment responsable de la couleur rose du plumage du flamant (la carotène)</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 28.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Raton} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Raton Laveur</h3>
              <h5 class="text-light text-left mt-4">Le raton laveur est un mammifère originaire d'Amérique du Nord, 
                                                    il tire son nom du fait qu'il nettoie méticuleusement sa nourriture ou qu'il la trempe dans l'eau avant de la manger.
                                                    Il mesure en moyenne 80cm pour un poids entre 6kg et 8kg mais jusqu'à 28kg en Automne !</h5> 
                <h5 class="text-light text-left mt-3"><em>Habitat : </em> une multitude d'habitats 
                                                        (boix mixtes, bocages, parcs, proche d'habitations et de points d'eaux) et ce sur les quatres coins du globes.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Rocket et Marcus sont en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span> à tendance <span class="text-warning">Omnivore </span> 
                                                            (insectes, chenilles, crustacés, escargots, ver de terre, grenouille, crapauds, rats, fruits, baies, maïs).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Salamandre} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Salamandre Tigrée</h3>
              <h5 class="text-light text-left mt-4">La Salamandre tigrée est un urodèle(un ordre d'amphibiens qui gardent une queue à l'état adulte), c'est une assez grosse Salamandre
                                                    mesurant de 17 à 33 cm avec un queue faisant 40 à 50% de sa longueur totale pour un poids de 125g de moyenne. </h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em>en Amérique du Nprd dans les forêts tempérées, mares, étangs et marécages</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> René est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger">Carnivore</span>, principalement <span class="text-custom-insectivore">Insectivore </span>
                                                            (insectes, vers, amphibien, petits salamandres).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={Rainette} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La rainette de White</h3>
              <h5 class="text-light text-left mt-4">Cette espèce nommé la Rainette géante est un animal amphibie relativement trapu et mesurant généralement 
                                                    entre 5 et 12 cm une fois l'âge adulte atteint, et pouvant aller jusqu'à 15 cm. </h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em>dans les zones humides et chaudes des forêts subtropicales.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Plop est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-custom-insectivore">Insectivore </span> (grillons, sauterelles, vers de terre, mouches) .</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 ">
            <img src={BecASabot} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Bec-en-Sabot du Nil</h3>
              <h5 class="text-light text-left mt-4">Avec ses petits yeux ronds et son air vaguement ironique quand il vous observe fixement, totalement immobile, ce grand oiseau échassier, 
                                                    marche délicatement dans la végétation aquatique avec son drole de bec penché pour saisir les poissons et amphibiens.
                                                    Il mesure 1m à 1,50m et pèse de 4,5kg à 6,5kg. </h5>
                <h5 class="text-light text-left mt-3"><em>Habitat : </em>dans les lacs et marais à l'Est d'Afrique centrale.</h5>
                <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Jo est en trés bonne santé.</h5>
                  <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em><span class="text-warning">Omnivore </span> (vase, végétation, poisson, reptiles, batraciens).</h5>
                    <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
      </div>

      <a href="#top" >
      <img src={Top} class="" alt="" style={{position: "fixed", bottom : "50px", right: "50px", opacity: 0.5}}/>
      </a>

      <div class="d-grid col-1 mx-auto mt-5 mb-5">
    <a class="btn btn-success" href='/parc' role='button'>Retour aux Habitats</a>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}