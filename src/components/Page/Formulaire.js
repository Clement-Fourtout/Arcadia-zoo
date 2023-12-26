function Formulaire () {
  return (
    <>
  <form>
    <div class='container-fluid'>
    <div class="row">
        <div class="col-6">
            <div class="mb-3">
                <label for="inputEmail" class="form-label">Adresse email</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Votre e-mail ne sera pas diffusé.</div>
            </div>
        </div>
        <div class="col-6">
            <div class="mb-3">
                <label for="inputPhoneNumber" class="form-label">Numéro de téléphone</label>
                <input type="number" class="form-control" id="inputMdp"/>
            </div>
        </div>
    </div>
    <div class="mb-3">
        <label for="commentaire">Commentaire</label>
        <textarea class="form-control" placeholder="Laissez-nous un commentaire !" id="commentaire"></textarea>
    </div>
    <div class="row">
        <div class="col-6">
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check"/>
                <label class="form-check-label" for="check">Se souvenir de moi</label>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-6">
            <div class="mb-3">
                <select class="form-select" aria-label="Exemple select">
                    <option selected>Sélectionner une option</option>
                    <option value="1">Etre recontacté par téléphone</option>
                    <option value="2">Etre recontacté par E-mail</option>
                </select>
            </div>
        </div>

    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
    </div>
</form>

</>
 )
 }

 export default Formulaire;