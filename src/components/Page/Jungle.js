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

export default function Jungle() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
    <h1 class=" text-xl-center text-success text-decoration-underline" style={{marginBottom: "50px", marginTop: "25px"}}>La Jungle</h1>
    <div class="row justify-content-center mb-2">
    <div class="col-lg-4 ">
          <img src={Paresseux} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Paresseux</h3>
            <h5 class="text-light text-left mt-4">Mammifère pouvant dormir jusqu'à 20 heures par jour, consacre le reste de son temps à la défense de son territoire. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les plaines, forêts sèches et les semi-déserts.</h5>
              <h5 class="text-light text-left mt-5"><em>Etat de santé :</em> Gius est en trés bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 7 à 10 kilos par repas (jeunes mammifères, pachydermes, oiseaux et reptiles).</h5>
                <h5 class="text-light font-weight-light  text-decoration-underline"><em>Dernier passage</em> 22.04.2024</h5>
        </div>
        </div>
        <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5">
          <img src={Empereur} class="col-lg-11 rounded" alt="lion" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Empereur d'Amazonie</h3>
            <h5 class="text-light text-left mt-4">L'un des plus grands carnivores d'Afriques aussi connue pour son cri ressemblant à un ricanement, la hyène vie principalement en meute. 
                                          <br/>Nous pouvons retrouver ce spécimen dans la Savane, les prairies et les semi-déserts.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Rictus est en trés bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 2 à 5 kilos par jour (petits mammifères, ongulés, oiseaux, reptiles et charognes).</h5>
                <h5 class="text-light  font-weight-light text-decoration-underline"><em>Dernier passage</em> 25.04.2024</h5>
        </div>
      </div>
      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Jaguar} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Jaguar</h3>
            <h5 class="text-light text-left mt-4">Baptisé le chacal ou ici le chacal doré est un mammifère pouvant faire de 6 Kg à 15Kg et est de l'ordre des carnivores. Il est la proie de félins, hyènes, rapaces et phytons.
                                          <br/>Nous pouvons le retrouvé en Asie, au Moyen-Orient et jusqu'en Europe.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Nissam est en bonne santé et attendent une portée de 3 petits. </h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore mangeant 2 à 4 kilos par jour (petits rongeurs, oiseaux, charognes, reptiles et insectes). <br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 26.04.2024</h5>
        </div>
      </div>
      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={PanthèreNoire} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Panthère Noire</h3>
            <h5 class="text-light text-left mt-4">On le surnomme le Renard de Poche, du fait de sa toute petite taille allant de 20Cm à 40Cm pour un poids moyen de 1.7Kg. Lorsqu'il forme un couple les Fennec sont unis pour la vie.
                                          <br/>Nous pouvons le retrouver dans les zones arides et désert du Nord de l'Afrique jusqu'à l'Arabie Saoudite.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Poutou et Lilio sont en bonnes santé et attend une portée de 2 petits. </h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Le Fennec est omnivore et se nourrit principalement de fruits, graines, oeufs, termites et lézards. <br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 20.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={DauphinRose} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Dauphin Rose</h3>
            <h5 class="text-light text-left mt-4">Nous pouvons retrouver 6 sous-espèces de tigres. Ce dernier se différencie avec ses favoris blancs surs ses joues. 
                                                  Il est également le plus petit de tous les tigres vivants malgré un poids dépassant les 120Kg en moyenne.
                                          <br/>Nous pouvons le retrouver dans les savanes herbeuses d'Asie ou dans les forêtes tropicales.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Jumbo et Neyla ont été receuilli il y a 2 mois et sont en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Le tigre est un grand carnivore, possède un appétit insatiable ! Il se nourrit d'ongulés, de sangliers, tapirs 
                                                          mais aussi de singes et de poissons. Cependant malgré sa grande force, ses griffes et ses crocs sont peu efficaces et ne se nourrit donc pas de façon régulière.<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 20.04.2024</h5>
        </div>
      </div>
      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Toucan} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Toucan</h3>
            <h5 class="text-light text-left mt-4">L'hippopotame amphibie fait parti des plus grands êtres vivants d'Afrique mesurant de 2,70m à 4,50m de long 
                                                  pour 1,50m de hauteur mais surtout un poids de 2,2 tonnes de moyenne.
                                          <br/>Nous pouvons le retrouver dans fleuves, lac et rivières d'Afriques subsaharienne. Mais aussi en Colombie ! 
                                               Des individus se sont échappés du zoo privé de Pablo Escobar et se sont reproduits à l'état sauvage.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Root est une vieille hypopotame encore en trés bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> principalement végétarien (herves et plantes aquatiques), 
                                                          l'hippopotame a parfois été observé se nourrissant de la chair de cadavres et animaux morts.<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 28.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={AraRouge} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Ara Rouge'</h3>
            <h5 class="text-light text-left mt-4">Le plus grand animal terrestre de notre planête ! Jusqu'à 6 mêtres de haut elle fait parti des espèces menacées d'extinction 
                                                  dût à une mortalité des jeunes élevée chassés par les lions et autres félins.
                                          <br/>Nous pouvons le retrouver dans la savane et bois découverts de différents pays d'Afriques.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé : </em> Loula est une adulte de 14 ans en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire : </em> Herbivore: feuille des arbres et acacias inacceddibles aux autres animaux brouteurs.<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 28.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Tapir} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Tapir</h3>
            <h5 class="text-light text-left mt-4">Appelé aussi plus communément le vaisseau du désert, le dromadaire permet à l'homme le transport de marchandises et agricultures du désert.
                                                  Il mesure de 2,20m à 2,50m pour un poids allant de 400kg à 600kg.
                                          <br/>Nous pouvons le retrouver dans les régions arides du désert du Nord et de L'Est de l'Afrique, du Moyen Orient jusqu'en Asie. 
                                               Il a récemment été introduit en Australie.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Pau est un adulte de 32 ans en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Herbivore.<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 18.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={MillePattes} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Mille-Pattes Géant</h3>
            <h5 class="text-light text-left mt-4">L'Éléphant d'Afrique peut peser plus de 7 tonnes et mesurer jusqu'à 4 mêtres de hauteur. 
                                                  Il est le mammifère terreste le plus imposant sur terre et fait malheureusement parti des espèces en voie de disparition à cause du braconnage.
                                          <br/>Nous pouvons le retrouver dans les Forêts et les savanes de toute l'Afrique.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Dumbo est un adulte de 27 ans en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Herbivore.<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Empoisonneuse} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">La Grenouille Empoisonneuse</h3>
            <h5 class="text-light text-left mt-4">Le Babouin fait parti de l'ordre des primates, pesant 10 à 50kg, 
                                                  il est le singe le plus répendu en Afrique par sa vaste zone de répartition géographique et ses populations nombreuses.
                                                  Ils sont non territoriaux et vivent en troupes de 10 à plus de 100 individus avec un mâle dominant à la tête !
                                          <br/>Nous pouvons les retrouver dans les Forêts tropicales sèches, les savanes, semi déserts, du bord de mer jusqu'à 3.000 mêtres d'altitude de toute l'Afrique.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Le zoo possède 7 primates des plus jeunes aux plus anciens. Ils sont en bonnes santés</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Omnivore leur régime alimentaire est trés varié (feuilles, fruits, graines, champignons, poissons, lapins, rongeurs).<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={Gorille} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">Le Gorille</h3>
            <h5 class="text-light text-left mt-4">L'antilope d'Afrique ou plus communément appelé Impala. 
                                                  Mesurant 80cm à 92cm et pesant jusqu'a 75kg se distingue gràce à ses hautres cornes annelées en forme de S. Sa vitesse de pointe est de 80Km/h !
                                          <br/>Nous pouvons la retrouver dans les savanes herbeuses du Sud et de l'Est de l'Afrique.</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> Zuma, Box et Luna sont de jeunes antilopes en bonne santé.</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Herbivore, ruminant.<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 29.04.2024</h5>
        </div>
      </div>

      <div class="row justify-content-center mb-2 mt-5">
        <div class="col-lg-4 mt-5 ">
          <img src={OrangOutan} class="col-lg-11 rounded" alt="chacal" style={{marginLeft:0, padding:0}} />
        </div>
        <div class="col-lg-5 mt-5 border">
          <h3 class="text-xl text-align-center text-light text-decoration-underline mt-3">L'Orang Outans</h3>
            <h5 class="text-light text-left mt-4">Cette espèce est la plus petite au sein de la famille des Herpestidae(mangouste).
                                                  Mesurant 24cm à 30cm elle possède de grand yeux entourés de noir pour ne pas être aveuglé par le soleil et garder son statut de sentinelle du désert.
                                          <br/>Nous pouvons le retrouver dans les milieux ardies et semi-arides en Savane ou plaines ouvertes principalement dans le sud-ouest du continent africain</h5>
              <h5 class="text-light text-left mt-4"><em>Etat de santé :</em> 12 Suricates vivent au Zoo et ont la pleine santé</h5>
                <h5 class="text-light text-left mt-3"><em>Régime alimentaire :</em> Carnivore (insectes, petits vertébrés, oeufs).<br/></h5>
                <h5 class="text-light font-weight-light mt-4 text-decoration-underline"><em>Dernier passage</em> 30.04.2024</h5>
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