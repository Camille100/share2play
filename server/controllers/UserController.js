const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = require('../schemas/userSchema');
const isEmpty = require('../utils/isEmpty');
const isValid = require('../utils/isValid');
const isEqual = require('../utils/isEqual');

exports.registration = async (req, res) => {
    const emailRegx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passwordRegx =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const errorsMessage = [];

    const {
        firstName,
        lastName,
        email,
        emailConfirm,
        password,
        city,
        zip,
        address,
        pseudo,
    } = req.body;

    const lastNameEmpty = isEmpty(lastName, 'Vous devez indiquer votre nom');
    const firstNameEmpty = isEmpty(
        firstName,
        'Vous devez indiquer votre prénom'
    );
    const emailEmpty = isEmpty(email, 'Vous devez indiquer votre email');
    const emailConfirmEmpty = isEmpty(
        emailConfirm,
        'Vous devez confirmer votre email'
    );
    const passwordEmpty = isEmpty(
        password,
        'Vous devez entrer votre mot de passe'
    );
    const cityEmpty = isEmpty(city, 'Vous devez entrer votre ville');
    const addressEmpty = isEmpty(address, 'Vous devez entrer votre adresse');
    const zipEmpty = isEmpty(zip, 'Vous devez entrer votre code postal');

    const emailValid = isValid(
        email,
        emailRegx,
        "Votre email n'est pas valide"
    );

    const emailEqual = isEqual(
        email,
        emailConfirm,
        'Vos emails ne correspondent pas'
    );

    const passwordValid = isValid(
        password,
        passwordRegx,
        'Votre mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial'
    );

    if (
        lastNameEmpty.error ||
        firstNameEmpty.error ||
        emailEmpty.error ||
        emailConfirmEmpty.error ||
        passwordEmpty.error ||
        cityEmpty.error ||
        zipEmpty.error ||
        addressEmpty.error ||
        emailValid.error ||
        passwordValid.error ||
        emailEqual.error
    ) {
        errorsMessage.push(
            { message: lastNameEmpty.message },
            { message: firstNameEmpty.message },
            { message: emailEmpty.message },
            { message: emailConfirmEmpty.message },
            { message: passwordEmpty.message },
            { message: cityEmpty.message },
            { message: zipEmpty.message },
            { message: addressEmpty.message },
            { message: emailValid.message },
            { message: passwordValid.message },
            { message: emailEqual.message }
        );
    }

    if (pseudo && (await UserSchema.findOne({ pseudo }))) {
        errorsMessage.push({ message: 'Ce pseudo est déjà utilisé' });
    }

    if (!emailEmpty.error && (await UserSchema.findOne({ email }))) {
        errorsMessage.push({
            message: 'Cette adresse email est déjà utilisée',
        });
    }

    if (errorsMessage.length > 0) return res.status(200).json(errorsMessage);

    const hash = await bcrypt.hash(password, 10);

    const newUser = new UserSchema({
        ...req.body,
        password: hash,
    });

    const user = newUser.save();

    if (!user) return res.status(500);

    return res.status(200).json(true);
};
