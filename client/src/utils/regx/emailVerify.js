const emailValid = (value) => {
    const regx = /\S+@\S+\.\S+/;
    if (!regx.test(value)) {
        return true
    }

    return false;
}

export default emailValid;