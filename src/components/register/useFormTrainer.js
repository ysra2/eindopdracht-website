import React, {useState, useEffect} from "react";
import axios from "axios";

const useFormTrainer = (callBack, validate) => {
    // Register
    const [formDataT, setFormDataT] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        role:  ["trainer"]

    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const registerChangeT = event => {
        const {id, value} = event.target;
        setFormDataT({
            ...formDataT,
            [id]: value
        });
    };


    const registerSubmitT = async (event) => {
        event.preventDefault();

        setErrors(validate(formDataT));

        try {
            const result = await axios
                .post('http://localhost:8080/api/auth/signup',{
                    firstName: formDataT.firstName,
                    lastName: formDataT.lastName,
                    username: formDataT.username,
                    email: formDataT.email,
                    password: formDataT.password,
                    password2: formDataT.password,
                    role: formDataT.role
                });
            console.log(result);
            // // localStorage.setItem("token", JSON.stringify(result.data.accessToken));
            // // localStorage.setItem("user_id", JSON.stringify(result.data.id));
            // props.history.push("/login");
        }
        catch (error) {

        }

        setIsSubmitting(true);
    };

    //useEffect checks of de errors veranderen
    useEffect(() => {
            //controleer of er geen errors zijn
            if (Object.keys(errors).length === 0 && isSubmitting){
                callBack();
            }
            //roep de callBack
        },

        //verander alleen als het object veranderd.
        [errors])

    return {registerChangeT, formDataT, registerSubmitT, errors};
};

export default useFormTrainer;