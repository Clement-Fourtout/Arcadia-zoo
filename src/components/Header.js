import Logo from './styles/Logo/Arcadia Zoo.png'

function Header() {
  return (
    <>
    <header class="container-fluid bg-white ">
      <div class="row justify-content-between">
        <div class="col-sm-1">
          <a href='/'>
          <img src={Logo} class="img-fluid float-start" alt="logo" />    
          </a>
        </div>
        <div class="col-sm-7 row align-items-center">
          <p class=" text-xl-center fs-1 fw-bold text-decoration-underline">Leur santé, notre priorité !</p>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;