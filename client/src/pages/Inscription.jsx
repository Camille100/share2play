import '../assets/layout/inscription.scss';

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { registration } from '../services/userService';
import inscriptionValidate from '../utils/formValidate/inscriptionValidate';

function Inscription() {
    const INITIAL_STATE = {
        lastName: '',
        firstName: '',
        pseudo: '',
        address: '',
        zip: '',
        city: '',
        email: '',
        password: '',
    };

    const { handleChange, handleSubmit, errors, isSubmitted } = useForm(
        INITIAL_STATE,
        inscriptionValidate
    );

    const navigate = useNavigate();
    const [messageError, setMessageError] = useState();

    const onSubmit = (value) => {
        console.log(value);

        registration(value).then((res) => {
            if (res.data) {
                setMessageError(res.data);
                console.log(messageError);
            } else {
                navigate('/connexion');
            }
        });
    };

    return (
        <div className="inscription">
            <form onSubmit={(e) => handleSubmit(onSubmit, e)}>
                <div className="box-input">
                    <label htmlFor="lastName">Nom : </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required="required"
                        onChange={handleChange}
                    />
                    <div className="box-errors">
                        {isSubmitted && errors.lastNameEmpty}
                    </div>
                </div>

                <div className="box-input">
                    <label htmlFor="firstName">Prénom : </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required="required"
                        onChange={handleChange}
                    />
                    <div className="box-errors">
                        {isSubmitted && errors.firstNameEmpty}
                    </div>
                </div>

                <div className="box-input">
                    <label htmlFor="pseudo">Pseudo : </label>
                    <input
                        type="text"
                        name="pseudo"
                        id="pseudo"
                        onChange={handleChange}
                    />
                </div>

                <div className="box-input">
                    <label htmlFor="address">Adresse : </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        required="required"
                        onChange={handleChange}
                    />
                    <div className="box-errors">
                        {isSubmitted && errors.addressEmpty}
                    </div>
                </div>

                <div className="box-input">
                    <label htmlFor="zip">Code postal : </label>
                    <input
                        type="text"
                        name="zip"
                        id="zip"
                        required="required"
                        onChange={handleChange}
                    />
                    <div className="box-errors">
                        {isSubmitted && errors.zipEmpty}
                    </div>
                </div>

                <div className="box-input">
                    <label htmlFor="city">Commune : </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required="required"
                        onChange={handleChange}
                    />
                    {isSubmitted && errors.cityEmpty}
                </div>

                <div className="box-input">
                    <label htmlFor="email">Adresse mail : </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required="required"
                        onChange={handleChange}
                    />
                    {isSubmitted && errors.emailEmpty && errors.emailValid}
                </div>

                <div className="box-input">
                    <label htmlFor="emailConfirm">
                        Confirmez votre adresse mail :{' '}
                    </label>
                    <input
                        type="email"
                        name="emailConfirm"
                        id="emailConfirm"
                        required="required"
                        onChange={handleChange}
                    />
                    {isSubmitted &&
                        errors.emailConfirmEmpty &&
                        errors.emailConfirmEqual}
                </div>

                <div className="box-input">
                    <label htmlFor="password">Mot de passe : </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required="required"
                        onChange={handleChange}
                    />
                    {isSubmitted &&
                        errors.passwordEmpty &&
                        errors.passwordLengthCharacter &&
                        errors.passwordLowercase &&
                        errors.passwordNoSpace &&
                        errors.passwordSpecialCharacter &&
                        errors.passwordUppercase &&
                        errors.passwordIny}
                </div>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default Inscription;
