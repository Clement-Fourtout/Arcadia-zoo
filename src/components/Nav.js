function Nav () {
  return (
    <nav class="navbar navbar-dark navbar-custom" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/" >Accueil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">

        <a class="nav-link button" href="/parc">Nos animaux</a>
        <a class="nav-link button" href="/services">Nos services</a>
        <a class="nav-link button" href="/arcadia">Notre histoire</a>
        <a class="nav-link button" href="/connexion">Espace Pro</a>
        <a class="nav-link button" href="/formulaire">Contact</a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Nav;