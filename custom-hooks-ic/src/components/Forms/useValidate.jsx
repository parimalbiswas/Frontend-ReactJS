

const useValidate = ({ email, password }) => {

    const validateInputs = () => {
        if (email.includes("@") && password.length > 5) {
            return true;
        }
        else {
            return false;
        }
    }


    return validateInputs();
}

export default useValidate;