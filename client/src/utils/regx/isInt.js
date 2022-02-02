const isInt = (value) => {
    const regx = /\d/;

    if (!regx.test(value)) {
        return true
    }

    return false;
}

export default isInt;