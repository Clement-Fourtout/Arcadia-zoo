import Restaurant1 from '../styles/Logo/Services/Restaurant 1.jpg'
import Restauration from '../styles/Logo/Restauration.jpg'
import Pacha from '../styles/Logo/Services/Le pacha.jpg'
import Guide from '../styles/Logo/Services/Guide.jpg'
import Train from '../styles/Logo/Services/Train.jpg'

function DiffServices () {
  return (
    <>
      <div class="container-fluid bg-dark p-2 mt-1 mb-3 ">
      <div class="row justify-content-center">
      <div class="col col-lg-5 text-light">
        <h1 class="text-xl-center text- text-decoration-underline font-weight-bold mt-5 mb-5">Les Services du Parc</h1>
        </div>
      </div>
        <div class="row justify-content-center">
          <div class="col-lg-5 text-light text-center">
            <h2 class=" font-weight-bold text-decoration-underline text-info mt-3 mb-4">Nos restaurants</h2>
            <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img src={Restaurant1} class="d-block w-100" alt="Sauvageon"/>
          <div class="carousel-caption d-none d-md-block">
            <h5 class="font-weight-bold fs-3 text-dark text-decoration-underline">- Le Sauvageon -</h5>
            <p class="font-weight-bold fs-4">Snack/café placé au centre du parc est à côté d'une aire de jeu vous offrira un temps de pause en vous proposant boissons chaudes, paninis, burgers et vieinnoiseries.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src={Restauration} class="d-block w-100" alt="La serre gustative"/>
          <div class="carousel-caption d-none d-md-block">
          <h5 class="font-weight-bold fs-3 text-light text-decoration-underline">- La Serre Gustative -</h5>
          <p class="fw-bolder fs-4 text-white">La serre vous propose un snack et une découverte de boissons fruitées/aromatiques/détox avec visibilité sur l'habitat des flammants roses. Burger et produits veggie sont à votre dispositions.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src={Pacha} class="d-block w-100" alt="Le pacha"/>
          <div class="carousel-caption d-none d-md-block">
          <h5 class="font-weight-bold fs-3 text-light text-decoration-underline">- Le Pacha -</h5>
          <p class="fw-bolder fs-4 text-white">Le Pacha vous attend pour une dégustation des meilleurs plats du parc le temps d'un repas élaboré avec des saveurs venant des quatres coins du monde</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
      <h5 class="mt-2">Le sauvageon - Snack/café placé au centre du parc est à côté d'une aire de jeu vous offrira un temps de pause en vous proposant boissons chaudes, paninis, burgers et vieinnoiseries.</h5>
      <h5 class="mt-3">La Serre Gustative - La serre vous propose un snack et une découverte de boissons fruitées/aromatiques/détox avec visibilité sur l'habitat des flammants roses. Burger et produits veggie sont à votre dispositions.</h5>
      <h5 class="mt-3">Le Pacha - Le Pacha vous attend pour une dégustation des meilleurs plats du parc le temps d'un repas élaboré avec des saveurs venant des quatres coins du monde</h5>
          </div>
          </div>

          <div class="row justify-content-center">
          <div class="col-lg-5 text-light text-center">
          <h2 class=" font-weight-bold text-decoration-underline text-warning mt-5 mb-4">Visite des habitats (guide gratuit)</h2>
            <img src={Guide} class="img-fluid rounded" alt="guide"/>
            <h5 class="mt-2">De nombreux guides sont disponibles pour une visite guidée du parc sans frais supplémentaire moyennant une simple réservation au préalable de votre séjour ! <br/>Il est inclus dans le billet d'entrée.</h5>
          </div>
          </div>

          <div class="row justify-content-center">
          <div class=" col-lg-5 text-light text-center">
          <h2 class=" font-weight-bold text-decoration-underline text-custom-jungle mt-3">Le train du parc</h2>
          <img src={Train} class="img-fluid rounded" alt="train"/>
          <h5 class="mb-5 mt-2">Le zoo possède un petit train permettant la visite intégrale du parc. L'utilisation de ce dernier dépend de l'affluence du parc et ses horaires de disponibilité peuvent donc être varaibles.
                                <br/>La durée du trajet varie entre 25 et 35 mins. Déconseilles aux femmes enceintes. Les enfants doivent rester sous la responsabilité d'un adulte.</h5>
          </div>
          </div>
      </div>
    </>
)
}

export default DiffServices;