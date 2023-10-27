function Nav () {
  return (
    <nav class="navbar navbar-expand-lg bg-dark-subtle border border-light-subtle" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/" >Accueil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">

        <a class="nav-link" href="/occasions">Nos véhicules</a>
        <a class="nav-link" href="/services">Nos services</a>
        <a class="nav-link button" href="/contact">Espace Pro</a>

      </div>
    </div>
  </div>
</nav>
  );
}

export default Nav;