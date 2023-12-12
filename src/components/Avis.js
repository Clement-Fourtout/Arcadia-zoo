
import Etoile from "./styles/Logo/Etoiles.jpg"
import Note from "./styles/Logo/Stella.png"

function Avis () {
  return (
    <>
    <div class="container-lg bg-dark rounded  pt-3 pb-3 mb-2 mt-2   ">

    <div class="container-lg ps-0 pe-0">
      <div id="carouselExampleDark" class="carousel carousel-light slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src={Etoile} class="d-block w-100" alt="stella"></img>
            <div class="carousel-caption d-none d-md-block">
              <h3>Johanna Delaccio</h3>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <p>Garage possédant un vrai savoir faire et des tarifs tout à fait abordable.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
          <img src={Etoile} class="d-block w-100" alt="stella"></img>
            <div class="carousel-caption d-none d-md-block">
              <h3>Francis Legendre</h3>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <h4>Rendez-vous pris rapidement, la révision s'sest trés bien déroulée !</h4>
            </div>
          </div>
          <div class="carousel-item">
          <img src={Etoile} class="d-block w-100" alt="stella"></img>
            <div class="carousel-caption d-none d-md-block">
              <h3>Laurie Fuçon</h3>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <img src={Note} class="c-block w-25 p-4" alt='stella'/>
              <h4>Entretien parfait, le garage m'a fait un bilan de tout mes équipements sur leur état d'usure, un futur rendez-vous est déjà planifié</h4>
          </div>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
    </>
  )
}

export default Avis;