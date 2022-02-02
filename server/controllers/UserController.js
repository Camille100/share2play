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
        pseudo,
        address,
        zip,
        city,
        email,
        emailConfirm,
        password,
    } = req.body;

    const lastNameEmpty = isEmpty(lastName, 'Vous devez indiquer votre nom');

    const firstNameEmpty = isEmpty(
        firstName,
        'Vous devez indiquer votre prénom'
    );

    const addressEmpty = isEmpty(address, 'Vous devez indiquer votre adresse');

    const zipEmpty = isEmpty(zip, 'Vous devez indiquer votre code postal');

    const cityEmpty = isEmpty(city, 'Vous devez indiquer votre commune');

    const emailEmpty = isEmpty(email, 'Vous devez indiquer votre email');

    const emailValid = isValid(
        email,
        emailRegx,
        "Votre email n'est pas valide"
    );

    const emailEqual = isValid(
        email,
        emailConfirm,
        'Vos emails ne correspondent pas'
    );

    const emailConfirmEmpty = isEmpty(
        emailConfirm,
        'Vous devez indiquer votre email'
    );

    const passwordEmpty = isEmpty(
        password,
        'Vous devez indiquer votre mot de passe'
    );

    const passwordValid = isValid(
        password,
        passwordRegx,
        'Votre mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial'
    );

    if (lastNameEmpty.error || 
        firstNameEmpty.error) || 
        emailEmpty.error || 
        emailConfirmEmpty.error || 
        passwordEmpty.error || 
        cityEmpty.error || 
        zipEmpty.error || 
        addressEmpty.error ||
        emailValid.error ||
        emailEqual.error ||
        passwordValid.error
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
            { message: emailEqual.message },
            { message: passwordValid.message }
        );
    }

    if (pseudo && (await UserShema.findOne({pseudo}))) {
        errorsMessage.push({message: 'Ce pseudo est déjà utilisé'});
    }

    if (!emailEmpty.error && (await UserSchema.findOne)) {
        errorsMessage.push({message: 'Cette adresse email est déjà utilisée'});
    }

    if (errorsMessage.length > 0) {
        return res.status(200).json(errorsMessage);
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new UserSchema({
        ...req.body,
        password: hash,
    });

    const user = newUser.save();

    if(!user) {
        return res.status(500);
    } 

    return res.status(200).json(true);
};
