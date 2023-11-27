function Footer() {
  return (
    <>
<div class="container">
  <footer class="py-3 my-3">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/accueil" class="nav-link px-3 text-light">Maison</a></li>
      <li class="nav-item"><a href="/entretien" class="nav-link px-3 text-light">Caractéristiques</a></li>
      <li class="nav-item"><a href="/reparation" class="nav-link px-3 text-light">Tarifs</a></li>
      <li class="nav-item"><a href="/contact" class="nav-link px-3 text-light">FAQ</a></li>
      <li class="nav-item"><a href="/connexion" class="nav-link px-4 text-light">À propos</a></li>
      <div class="dropdown">
  <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Nos horaires d'ouverture
  </button>
  <ul class="dropdown-menu">
    <li><span class="dropdown-item-text">Lundi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Mardi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Mercredi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Jeudi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Vendredi : 09:00 - 13:00  14:30 - 18:00</span></li>
    <li><hr class="dropdown-divider"/></li>
    <li><span class="dropdown-item-text">Samedi : 09:00 - 13:00</span></li>

  </ul>
</div>
    </ul>
    <p class="text-center text-light">© Vincent Parrot Garage.</p>

  </footer>
</div>

    </>
  );
}

export default Footer;