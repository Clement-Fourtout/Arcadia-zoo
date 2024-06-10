import Logo from './styles/Logo/Arcadia Zoo.png'

function Header() {
  return (
<>
  <header className="container-fluid bg-white">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-1 text-center">
        <a href='/'>
          <img src={Logo} className="img-fluid max-width-100" alt="logo" style={{ maxWidth: '150px' }}/>    
        </a>
      </div>
    </div>
  </header>
</>


  );
}

export default Header;