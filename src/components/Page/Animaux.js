import Savane from "../styles/Logo/Savane.jpg"
import Marais from "../styles/Logo/Marais.jpg"
import Jungle from "../styles/Logo/Jungle.jpg"


export default function Animaux() {

  return (
    <div className="container-fluid bg-dark p-2 mt-1 mb-3 text-center ">
      <h1 class=" text-xl-center text-light text-decoration-underline font-weight-bold" style={{marginBottom: "50px", marginTop: "25px"}}>Choisissez votre environnement</h1>
      <div class="card-deck" style={{marginBottom: "5%"}}>
  <div class="card border-warning">
    <a href="savane">
    <img  src={Savane} class="card-img-top" alt=""/>
    </a>
    <div class="card-body">
      <h4 class="card-title text-custom-savane text-decoration-underline">La Savane</h4>
      <p class="card-text">Les paysages d'Afrique font encore souvent rêver les Occidentaux. Nombreux sont les animaux de la savane africaine qui sont profondément ancrés dans notre imaginaire collectif. 
      Hélas, beaucoup sont menacés de disparition. C'est pourquoi nous apportons une attention particulière à leur bien être chaque jour de l'année. Nous recueuillons chaque mois de nouveaux spécimens.</p>
      <a href="savane" class="btn btn-warning">Découvrir la Savane</a>
      <p></p>
      <div class="card-footer">Lion, Hyène, Chacal, Fennec, Tigre, Hippopotame, Girafe, Dromadaire, Eléphant, Suricate, Babouin, Antilope !
    </div>
    </div>
  </div>
  <div class="card border-secondary ">
    <a href="marais">
    <img class="card-img-top" src={Marais} alt=""/>
    </a>
    <div class="card-body">
      <h4 class="card-title text-custom-marais text-decoration-underline">Le Marais</h4>
      <p class="card-text">Marais, étangs et marécages cachent une biodiversité unique, grande comme petite. Ils sont un écosystème à la fois terrestre et aquatique, composé d'une grande étendue d'eau stagnante peu profonde. 
      Nous pouvons retrouver ce biotope un peu partout sur la planète, essentiellement dans les régions chaudes et tempérées. </p>
      <a href="marais" class="btn btn-secondary">Découvrir le Marais</a>
      <p></p>
      <div class="card-footer">Alligator d'Amérique, Crocodile, Caiman à lunettes, Couleuvre à collier, Anaconda vert, Buffle d'Afrique, Faucon pélerin, Flamant rose, Raton laveur, Salamandre tigrée, Rainette de white, Bec à Sabot du Nil !
    </div>
    </div>
  </div>
  <div class="card border-success">
    <a href="jungle">
    <img class="card-img-top" src={Jungle} alt=""/>
    </a>
    <div class="card-body">
      <h4 class="card-title text-custom-jungle text-decoration-underline">La Jungle</h4>
      <p class="card-text">Quand on pense Jungle, nous pensons immédiatement Amazonie ! Dix fois la taille de la France, elle possède une grande variété d'habitats : rivières, forêts denses, marécages et donc une multitude d'espèces animales. 
      2.5 millions d'insectes, 500 espèces d'oiseaux, 1000 de grenouilles, plus de 600 espèces de reptiles et mammifères.  </p>
      <a href="jungle" class="btn btn-success">Découvrir la Jungle</a>
      <p></p>
      <div class="card-footer">Le Paresseux, l'Empereur d'Amazonie, le Jaguar, la Panthère noire, le Dauphin rose, le Toucan, l'Ara rouge, la Tapir, le Mille-pattes géant, l'Empoisonneuse, le gorille, l'orang-outan !
    </div>
    </div>
  </div>
</div>
  </div>

  );
}