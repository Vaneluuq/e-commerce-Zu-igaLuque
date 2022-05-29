export const validate = values => {
    const errorMsg = "Must be 20 characters or less";
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length > 20) {
        errors.firstName = errorMsg;
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
        errors.lastName = errorMsg;
    }

    if (!values.cellphone) {
        errors.cellphone = "Required";
    } else if (values.cellphone.length > 15) {
        errors.lastName = errorMsg;
    }

    if (!values.email) {
        errors.email = "Required";
    }

    return errors;
};