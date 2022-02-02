const isEmpty = (value) => {
    if (value === undefined || value === "") {
        return true;
    }
    return false;
}

export default isEmpty;