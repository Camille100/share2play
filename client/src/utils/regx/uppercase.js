const uppercase = (value) => {
    const regx = /[A-Z]/;

    if (!regx.test(value)) {
        return true
    }

    return false;
}

export default uppercase;