const specialCharacter = (value) => {
    const regx = /[@$!%*?&]/;

    if (!regx.test(value)) {
        return true
    }

    return false;
}

export default specialCharacter;