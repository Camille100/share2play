import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { connexion } from '../services/userService';
import connexionValidate from '../utils/formValidate/connexionValidate';

const INITIAL_STATE = {
    email: '',
    password: '',
};

function Connexion() {
    const navigate = useNavigate();
    const [messageError, setMessageError] = useState();

    const { handleChange, handleSubmit, errors, isSubmitted } = useForm(
        INITIAL_STATE,
        connexionValidate
    );

    const onSubmit = (value) => {
        console.log(value);

        connexion(value).then((res) => {
            if (res.data) {
                setMessageError(res.data);
                console.log(messageError);
            } else {
                navigate('/');
            }
        });
    };

    return (
        <main>
            <h1>Connexion</h1>
            <form onSubmit={(e) => handleSubmit(onSubmit, e)}>
                <div className="box-input">
                    <label htmlFor="email">
                        Email :
                        <input
                            type="text"
                            name="email"
                            placeholder="Votre email"
                            required="required"
                            onChange={handleChange}
                        />
                    </label>
                    <div className="box-errors">
                        {isSubmitted && errors.emailEmpty}
                    </div>
                </div>
                <div className="box-input">
                    <label htmlFor="password">
                        Password :
                        <input
                            type="text"
                            name="password"
                            placeholder="Votre mot de passe"
                            required="required"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="box-errors">
                    {isSubmitted && errors.passwordEmpty}
                </div>
                <input type="submit" value="Envoyer" />
            </form>
            <a href="#">Mot de passe oublié ?</a>
        </main>
    );
}

export default Connexion;
