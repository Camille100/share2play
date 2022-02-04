import isEmpty from "../formVerify/isEmpty";

const instrumentCreateValidate = (value) => {
  const errors = {
    nameEmpty: false,
    typeEmpty: false,
    descriptionEmpty: false,
    imageEmpty: false,
  };

  errors.nameEmpty = isEmpty(value.name) && "Vous devez indiquer votre email";
  errors.typeEmpty =
    isEmpty(value.type) && "Vous devez indiquer un email valide";
  errors.descriptionEmpty =
    isEmpty(value.description) && "Vous devez indiquer votre mot de passe";
  errors.imageEmpty =
    isEmpty(value.image) && "Vous devez indiquer votre mot de passe";

  return errors;
};

export default instrumentCreateValidate;
