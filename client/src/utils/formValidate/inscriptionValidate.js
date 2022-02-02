import isEmpty from "../formVerify/isEmpty";
import emailValid from "../regx/emailVerify";
import isEqual from "../formVerify/isEqual";
import specialCharacter from "../regx/specialCharacter";
import minCharacter from "../regx/minCharacter";
import isInt from "../regx/isInt";
import noSpace from "../regx/noSpace";
import uppercase from "../regx/uppercase";
import lowercase from "../regx/lowercase";

const inscriptionValidate = (value) => {
    const errors = {
        lastNameEmpty: false,
        firstNameEmpty: false,
        addressEmpty: false,
        zipEmpty: false,
        cityEmpty: false,
        emailEmpty: false,
        emailValid: false,
        emailConfirmEmpty: false,
        emailConfirmEqual: false,
        passwordEmpty: '',
        passwordLengthCharacter: false,
        passwordLowercase: false,
        passwordNoSpace: '',
        passwordSpecialCharacter: false,
        passwordUppercase: false,
        passwordIny: false,
    }

    errors.firstNameEmpty =
        isEmpty(value.firstName) && 'Vous devez indiquer votre prénom';
    errors.lastNameEmpty =
        isEmpty(value.lastName) && 'Vous devez indiquer votre nom';
    errors.addressEmpty =
        isEmpty(value.address) && 'Vous devez indiquer votre adresse';
    errors.zipEmpty =
        isEmpty(value.zip) && 'Vous devez indiquer votre code postal';
    errors.cityEmpty =
        isEmpty(value.city) && 'Vous devez indiquer votre ville';
    errors.emailEmpty =
        isEmpty(value.email) && 'Vous devez indiquer votre email';
    errors.emailValid =
        emailValid(value.email) && "Votre email n'est pas valide";
    errors.emailConfirmEmpty =
        isEmpty(value.emailConfirm) && 'Vous devez confirmer votre email';
    errors.emailEqual =
        isEqual([value.email, value.emailConfirm]) &&
        'Vos emails ne correspondent pas';
    errors.passwordEmpty =
        isEmpty(value.password) && 'Vous devez indiquer un mot de passe';
    errors.passwordUppercase = uppercase(value.password) && true;
    errors.passwordLowercase = lowercase(value.password) && true;
    errors.passwordSpecialCharacter =
        specialCharacter(value.password) && true;
    errors.passwordLengthCharacter =
        minCharacter(value.password) && true;
    errors.passwordInt = isInt(value.password) && true;
    errors.passwordNoSpace =
        noSpace(value.password) &&
        "Votre mot de passe ne peut pas contenir d'espace";

    return errors;
}

export default inscriptionValidate;