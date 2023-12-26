import Mecanique from '../styles/Logo/Mecanique.jpg'
import Carrosserie from '../styles/Logo/Carrosserie.jpg'
import Entretien from '../styles/Logo/Vidange.jpg'


function DiffServices () {
  return (
    <>
        <div class="container-lg bg-dark p-5 mt-5  border border-bottom-0 border-top-0 border-bg-primary-subtle ">
      <div class="container-lg ps-0 pe-0">
         <div id="carouselExampleDark" class="carousel carousel-light slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <img src={Mecanique} class="d-block w-100" alt="/"></img>
        <div class="carousel-caption d-none d-md-block">
          <a class="btn btn-primary" href='/mecanique' role='button'>Mecanique</a>    
          <li>Freinage (outil/plaquette)</li>
          <li>Pneumatique/géométrie</li>
          <li>Vitrage pare-brise</li>
          <li>Distribution</li>
          <li>Amortisseur</li>
          <li>Embrayage</li>
          <li>Diagnostic</li>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
      <img src={Carrosserie} class="d-block w-100" alt="/"></img>
        <div class="carousel-caption d-none d-md-block">
        <a class="btn btn-warning" href='/carrosserie' role='button'>Carrosserie</a>
          <li>Réparation plastique automobile</li>
          <li>Rénovation optique phares</li>
          <li>Peinture</li>
          <li>Débosselage</li>
          <li>Polissage</li>
        </div>
      </div>
      <div class="carousel-item">
      <img src={Entretien} class="d-block w-100" alt="/"></img>
        <div class="carousel-caption d-none d-md-block">
        <a class="btn btn-info" href='/entretien' role='button'>Entretien</a>
          <li>Vidange</li>
          <li>Révision</li>
          <li>Climatisation</li>
          <li>Purge liquide de frein</li>
          <li>Vérification état des plaquettes</li>
          <li>Vérification des niveaux</li>
          <li>Pression des pneus</li>
          <li>Pré-contrôle technique</li>
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

export default DiffServices;