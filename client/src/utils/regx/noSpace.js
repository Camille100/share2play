const noSpace = (value) => {
    const regx = /\s/;
    if (!regx.test(value)) {
        return false;
    }

    return true;
};

export default noSpace;
