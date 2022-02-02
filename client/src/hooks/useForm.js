import React, {useState} from "react";

const useForm = (initialState, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors] = useState(validate(values))

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (event) => {
        event.persist();
        setValues((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.values
        }))
    }

    const handleSubmit = (submit, event) => {
        event.preventDefault();

        setIsSubmitted(true);
        const newArray = Object.values(errors);
        let error = false;
        newArray.forEach((element) => {
            if (typeof element === 'string' || element) {
                error = true;
            }
        });
        if (!error) {
            submit(values);
        }
    }

    return {
        handleChange,
        handleSubmit,
        errors,
        isSubmitted,
        values,
    };
}

export default useForm;