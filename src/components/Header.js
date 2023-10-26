import Logo from './styles/Logo/simple.png'

function Header() {
  return (
    <>
    <header class="container-fluid bg-primary-subtle border-bottom">
      <div class="row justify-content-between">
        <div class="col-sm-3">
          <img src={Logo} class="img-fluid float-start " alt="reparation" />    
        </div>
        <div class="col-sm-7 row align-items-center">
          <p class=" text-xl-center fs-1 fw-bold text-decoration-underline">La fiabilité, notre qualité !</p>
        </div>
      </div>

    </header>
    </>
  );
}

export default Header;