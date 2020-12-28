import React, {useState, useEffect} from "react";
import axios from "axios";

const useForm = (callBack, validate) => {
    // Register
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        role:  [" "]

    })


    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);

   const registerChange = event => {
        const {id, value} = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };


    const registerSubmit = async (event) => {
        event.preventDefault();

        setErrors(validate(formData));

        try {
            const result = await axios
                .post('http://localhost:8080/api/auth/signup',{
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    role: formData.role
                });
            console.log(result);
            // // localStorage.setItem("token", JSON.stringify(result.data.accessToken));
            // // localStorage.setItem("user_id", JSON.stringify(result.data.id));
            // props.history.push("/login");
        }
        catch (error) {

        }

        callBack();

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

    return {registerChange, formData, registerSubmit, errors};
};

export default useForm;