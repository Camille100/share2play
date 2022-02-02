const lowercase = (value) => {
    const regx = /[a-z]/;

    if (!regx.test(value)) {
        return true
    }

    return false;
}

export default lowercase;