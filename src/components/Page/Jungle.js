import React from "react";
import Header from "../Header.js";
import Nav from "../Nav.js";
import Footer from "../Footer.js";
import Paresseux from "../styles/Logo/Animaux/Jungle/Le paresseux.jpg"
import Empereur from "../styles/Logo/Animaux/Jungle/Empereur d'amazonie.jpg"
import Jaguar from "../styles/Logo/Animaux/Jungle/Jaguar.jpg"
import PanthèreNoire from "../styles/Logo/Animaux/Jungle/Panthère noire.jpg"
import DauphinRose from "../styles/Logo/Animaux/Jungle/Dauphin rose.jpg"
import Toucan from "../styles/Logo/Animaux/Jungle/Toucan.jpg"
import AraRouge from "../styles/Logo/Animaux/Jungle/Ara Rouge.jpg"
import Tapir from "../styles/Logo/Animaux/Jungle/Tapir.jpg"
import MillePattes from "../styles/Logo/Animaux/Jungle/Milles pattes.jpg"
import Empoisonneuse from "../styles/Logo/Animaux/Jungle/L'empoisonneuse.jpg"
import Gorille from "../styles/Logo/Animaux/Jungle/Gorille.jpg"
import OrangOutan from "../styles/Logo/Animaux/Jungle/Orang outans.jpg"
import Top from "../styles/Logo/Accessoire/to_top.png"

export default function Jungle() {
  return (
    <>
    <a id="top" href="top"> </a>
    <Header></Header>
    <Nav></Nav>
  
    <nav aria-label="breadcrumb" >
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="/">Accueil</a></li>
        <li class="breadcrumb-item"><a href="parc">Environnements</a></li>
        <li class="breadcrumb-item active" aria-current="page">Jungle</li>
      </ol>
    </nav>

    <div className="container-fluid bg-dark p-2 mb-3 text-center ">
      <h1 class=" text-xl-center text-custom-jungle text-decoration-underline font-weight-bold" style={{marginBottom: "50px", marginTop: "25px"}}>La Jungle</h1>
        <div class="row justify-content-center mb-2">
          <div class="col-lg-4 ">
            <img src={Paresseux} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Paresseux</h3>
              <h5 class="text-light text-left mt-4">Le paresseux fait partie des plus anciens mammifères terrestre doté d'un sourire éternel ! 
                                                    Sa tête est capable de tourner à 90° étant un atout stratégique pour repérer le danger qu'on on vit dans les arbres.
                                                    Il passe entre 14 et 16 heures par jour à se reposer.
                                                    Mesurant de 45cm à 75cm pour un poids de 4kg nous retrouvons deux espèces à deux griffes ou trois griffes.</h5>
              <h5 class="text-light text-left mt-3"><em>Habitat : </em>Nous pouvons retrouver ce spécimen en Amérique du Sud et en Amérique centrale dans la canopée ou les zones humides.</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Raoul est en trés bonne santé.</h5>
              <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-success">Végétarien </span>(feuilles, fleurs, fruits, bourgeons).</h5>
              <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
          </div>
        </div>
        <div class="row justify-content-center mb-2 mt-5">
          <div class="col-lg-4 mt-5">
            <img src={Empereur} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
          </div>
          <div class="col-lg-5 mt-5 border">
            <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Empereur d'Amazonie</h3>
              <h5 class="text-light text-left mt-4">Le tamarin empereur est un petit primate au faciès particulier, largement reconnaissable à son imposante moustache blanche 
                                                    semblable à celle de l'empereur allemand Guillaume II qui lui value son appelation.
                                                    Il pèse de 300g à 500 pour une taille de 23cm a 25cm et une queue de 40cm.</h5>
              <h5 class="text-light text-left mt-3"><em>Habitat : </em>Nous pouvons retrouver ce spécimen dans les forêts de plaines primaires et secondaire d'Amérique du Sud.</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé : </em>Une troupe de 5 individus en bonne santé.</h5>
              <h5 class="text-light text-left mt-3"><em>Régime alimentaire : </em><span class="text-custom-insectivore">Insectivore</span>, 
                                                                                   <span class="text-success"> Exsudativore</span>(suc,résine,gomme) et
                                                                                   <span class="text-success"> Frugivore</span> .</h5>
              <h5 class="text-light  font-weight-light text-decoration-underline"><em>Dernier passage</em> 23.04.2024</h5>
          </div>
        </div>
        <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Jaguar} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Jaguar</h3>
            <h5 class="text-light text-left mt-4">Troisième plus grand félin au monde, le jaguar fascine tant pour sa beauté que sa puissance. Il est aussi à l'aise dans l'eau que sur la terre ferme.
                                                  Sa corpulence imposante lui permet de s'attaquer à des proies qui font parfois le double de sa taille, il est dénommé "celui qui tue en un bond".
                                                  Cette espèce est quasi menacée de disparition. Mesurant jusqu'à 1,85m pour un maximum de 150kg. Vitesse 80km/h !</h5>
            <h5 class="text-light text-left mt-3"><em>Habitat : </em>Amérique centrale et Amérique du sud (Guyane) caché dans les forêts Tropicales.</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Nissam et Jumbo sont en bonne santé et attendent une portée de 3 petits. </h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em><span class="text-danger"> Carnivore</span> se nourrit de chasse et de pêche (tapirs, pécaris, cerfs, capybara, saumon) .</h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 26.04.2024</h5>
        </div>
      </div>
      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={PanthèreNoire} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Panthère Noire</h3>
            <h5 class="text-light text-left mt-4">Contrairement à ce que l'on croit, la panthère n'est pas une espèce en tant que telle. L'animal est noir en raison d'une anomalie de coloration due à la mélanine.
                                                  <br/>Cet animal est rare car il ne représente qu'un trés faible pourcentage des naissance chez les léopards et les jaguars. 
                                                  Cependant la population d'Asie du Sud-Est et de l'Inde compte 11% de la population de Léopards noire.
                                                  Elle mesure 1,2m pour 50kg et possède une vitesse de pointe de 60km/h</h5>
              <h5 class="text-light text-left mt-3"><em>Habitat : </em> les forêts tropicales d'Inde, de Malaisie et de Java</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Poutou et Lilio sont en bonnes santé et attend une portée de 2 petits. </h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger"> Carnivore</span> (singes, antilopes, rongeurs, phacochères, petits carnivores) <br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 20.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={DauphinRose} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Dauphin Rose</h3>
            <h5 class="text-light text-left mt-4">Peu connu et doté d'un nom amusant, le dauphin rose est longtemps resté une véritable énigme pour les scientifiques.
                                                  L'animal est pourtant essentiellement gris, avec parfois des touches rosées sur le ventre. Il devient surtout rose avec l'âge !
                                                  C'est le plus grand Dauphin d'eau douce.
                                                  Le dauphin rose est un cétacé de la famille des Inia. Il mesure entre 2m et 2,80m et pèse entre 100kg et 150kg. <br/>C'est une espèce menacée</h5>
              <h5 class="text-light text-left mt-3"><em>Habitat : </em> dans les fleuves des bassins de l'Amazone.</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Rosa a été receuilli il y a 2 mois pour blessure et se porte désormais en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-info"> Piscivore </span>(poisson de 30cm maximum, crabes, tortues)</h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 20.04.2024</h5>
        </div>
      </div>
      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Toucan} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Toucan</h3>
            <h5 class="text-light text-left mt-4">Le Toucan Toco appartient à l'ordre des piciformes dont il est le plus grand représentant ! Il se distingue par son énorme bec courbé 
                                                  et coloré de rouge, orange et jaune. Il mesure entre 58 et 64 cm de long et pèse entre 500 et 850 grammes. C'est un animal plutot sociable.</h5>
             <h5 class="text-light text-left mt-3"><em>Habitat : </em> uniquement dans les régions chaudes d'Amérique du Sud (Guyane, Brésil, Paraguay, Nord Argentine).</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Trois jeunes Toucan nous ont rejoint et sont en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em><span class="text-success"> Frugivore </span>(baie, fruits, graines, végétaux).</h5> 
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 28.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={AraRouge} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Ara Rouge'</h3>
            <h5 class="text-light text-left mt-4">Le rouge écarlate domine chez ce grand perroquet très coloré. Il porte une grande tache jaune.
                                                  Il y a peu de différences physiques entre le mâle et la femelle. 
                                                  Par contre, les jeunes ont des yeux sombres alors que les adultes ont des yeux jaune clair, presque blanc.
                                                  Il mesure entre 84 et 90cm pour un poid de 900g à 1,5kg</h5>
              <h5 class="text-light text-left mt-3"><em>Habitat : </em> On retrouve l'ara rouge en Amérique centrale et en Amérique du Sud dans les forêts tropicales humides.</h5>
              <h5 class="text-light text-left mt-3"><em>Etat de santé : </em> Un couple Lou et Junior sont en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-success"> Frugivore</span> et <span class="text-success">Herbivore</span> 
                                                      (graines, fruits, noix, nectar, bourgeons)  </h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 28.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Tapir} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Tapir</h3>
            <h5 class="text-light text-left mt-4">Doté d'une petite trompe, nageant bien, le tapir joue un rôle essentiel dans la biodiversité de l'Amérique du sud. 
                                                  Il consomme de nombreuses graines qu'il dissémine avec ses déjections. Son puissant passage éclaircit les sous-bois, éliminant les arbustes, favorisant les plantes.
                                                  Sa taille varie de 2m à 2,20m et son poids de 150 à 250kg.</h5>
            <h5 class="text-light text-left mt-3"><em>Habitat : </em>Principalement en Amérique du Sud.</h5>
            <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Max est un adulte de 14 ans en bonne santé.</h5>
            <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-success"> Frugivore</span> et <span class="text-success">Herbivore</span> (fruits,feuilles,racines,herbes)</h5>
            <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 18.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={MillePattes} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Mille-Pattes Géant</h3>
            <h5 class="text-light text-left mt-4">Au royaume des mille-pattes, Scolopendra gigantea est le plus grand. Cet arthropode géant est connu pour sa morsure douloureuse et venimeuse 
                                                  capable de venir à bout d'espèces en tout genre. Il est le plus grand scolopendre du monde mesurant entre 25 et 30 centimêtres</h5>
            <h5 class="text-light text-left mt-3"><em>Habitat : </em> Forêts Amazonienne, COlombie, Venezuela ainsi que sur les îles voisines sous les buches et tapis de feuilles </h5>
            <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> En bonne santé </h5>
            <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-danger"> Carnivore</span> (petits rongeurs, reptiles, insectes)</h5>
            <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Empoisonneuse} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Grenouille Empoisonneuse</h3>
            <h5 class="text-light text-left mt-4">Aussi appelée Grenouille à flèche empoisonnée parce que les autochtones en tirent du venin 
                                                  dont ils badigeonnent leurs flèches de manière à ce que leurs proies tombent, inconscientes.
                                                  À cause de sa couleur particulière, il s'agit d'une espèce parfaitement reconnaissable. 
                                                  Elle est caractérisée par sa petite taille, d'entre 3 et 4 cm de long, et une coloration de bandes noires et jaunes avec des petites taches noires.</h5>
            <h5 class="text-light text-left mt-3"><em>Habitat : </em> Dans les forêts équatoriales du Venezuela</h5>
            <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> En bonne santé </h5>
            <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-custom-insectivore">Insectivore </span>(fourmis, termites, petites araignées, grillons).</h5>
            <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Gorille} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Gorille</h3>
            <h5 class="text-light text-left mt-4"> Les gorilles sont les plus grands des singes et probablement les plus impressionnants. Pourtant, loin de l'image véhiculée par la littérature et le cinéma, 
                                                   ce sont des animaux pacifiques et timides. Ils sont aussi nos plus proches cousins après les chimpanzés et les bonobos.
                                                   Il mesure d'1,40m à 2m (debout) pour un poids moyen de 250kg.
                                                   Ils sont malheureusement en voie de disparition dût à la réduction de leur habitat et du braconage.</h5>
            <h5 class="text-light text-left mt-3"><em>Habitat : </em>Dans les forêts tropicales d'Afrique Centrale (Ouganda, Congo, Rwanda)</h5>
            <h5 class="text-light text-left mt-3"><em>Etat de santé :</em>Maryse et Casper ont été introduit il y a 2 ans et sont suivis quotidiennement pour leur offrir le meilleur état de santé possible</h5>
            <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> <span class="text-success">Herbivore</span> à tendance <span class="text-success">Folivore</span> 
                                                                          (tout végétaux, feuilles, écorce, racines, moelle des branches) </h5>
            <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5  ">
          <img src={OrangOutan} class="col-lg-11 rounded" alt="" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5  border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Orang Outans</h3>
            <h5 class="text-light text-left mt-4">Le nom « orang-outan » vient du malais orang hutan, qui signifie littéralement « homme de la forêt ». 
                                                  Ce grand singe a élu domicile à la cime des arbres et parcourt inlassablement la canopée.
                                                  Leurs bras puissants sont plus longs que leurs jambes et peuvent atteindre 2 mètres. Ils sont capables de toucher leurs chevilles lorsqu'ils se tiennent debout.
                                                  Il mesure d'1,10m à 1,40m pour un poids variant entre 40 et 90kg. </h5>
            <h5 class="text-light text-left mt-3"><em>Habitat : </em> dans les forêts humides des plaines, forêts de marais, tourbière en plaine 
                                                                      au Nord des îles de Sumatra en Indonésie et de Bornéo en Malaisie</h5>
            <h5 class="text-light text-left mt-3"><em>Etat de santé :</em> Bulle est naît au Zoo il y a 6 ans et n'a jamais eu de problèmes de santé </h5>
            <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em><span class="text-success"> Frugivore</span> (durians, fruit du jacquier, mangues, litchis) mais ce nourrit aussi de feuilles et de lianes.<br/></h5>
            <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 30.04.2024</h5>
        </div>
      </div>
    
      <a href="#top" >
      <img src={Top} class="" alt="" style={{position: "fixed", bottom : "50px", right: "10px", opacity: 0.5}}/>
      </a>

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