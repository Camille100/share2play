import isEmpty from "../formVerify/isEmpty";

const connexionValidate = (value) => {
    const errors = {
        emailEmpty: false,
        passwordEmpty: false,
        emailValid: false
    }

    errors.emailEmpty = isEmpty(value.email) && 'Vous devez indiquer votre email'
    errors.emailValid = isEmpty(value.email) && 'Vous devez indiquer un email valide'
    errors.passwordEmpty = isEmpty(value.password) && 'Vous devez indiquer votre mot de passe'

    return errors
}

export default connexionValidate;