const minCharacter = (value) => {
    const regx = /[A-Za-z\d@$!%*?&]{8,}/;

    if (!regx.test(value)) {
        return true
    }

    return false;
}

export default minCharacter;