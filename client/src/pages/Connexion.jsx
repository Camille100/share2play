import React from "react";

function Connexion ()
{
    return <main>
        <h1>Connexion</h1>
        <form>
            <div className="box-input">
                <label htmlFor="email">
                    Email :
                    <input type="text" name="email" placeholder="Votre email" required="required"/>
                </label>
            </div>
            <div className="box-input">
                <label htmlFor="password">
                    Password :
                    <input type="text" name="password" placeholder="Votre mot de passe" required="required"/>
                </label>
            </div>
            <input type="submit" value="Envoyer" />
        </form>
        <a href="#">Mot de passe oublié ?</a>
    </main>
}

export default Connexion;