import React from "react";

function Inscription() {
  return (
    <div>
      <form>
        <div className="box-input">
          <label for="lastName">Nom : </label>
          <input type="text" name="lastName" id="lastName" required="required" />
        </div>

        <div className="box-input">
          <label for="firstName">Prénom : </label>
          <input type="text" name="firstName" id="firstName" required="required" />
        </div>
        <div className="box-input">
          <label for="pseudo">Pseudo : </label>
          <input type="text" name="pseudo" id="pseudo" />
        </div>

        <div className="box-input">
          <label for="address">Adresse : </label>
          <input type="text" name="address" id="address" required="required" />
        </div>

        <div className="box-input">
          <label for="zip">Code postal : </label>
          <input type="text" name="zip" id="zip" required="required" />
        </div>

        <div className="box-input">
          <label for="city">Commune : </label>
          <input type="text" name="city" id="city" required="required" />
        </div>

        <div className="box-input">
          <label for="email">Adresse mail : </label>
          <input type="email" name="email" id="email" required="required" />
        </div>

        <div className="box-input">
          <label for="emailConfirm">Confirmez votre adresse mail : </label>
          <input type="email" name="emailConfirm" id="emailConfirm" required="required" />
        </div>

        <div className="box-input">
          <label for="password">Mot de passe : </label>
          <input type="password" name="password" id="password" required="required" />
        </div>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Inscription;
