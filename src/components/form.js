import React, {useState} from "react";
import AuthService from "../services/auth.service";
import validation from "./validation";


const Form = validate => {
    // noinspection JSAnnotator
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        role: ["sporter"],
        role: ["trainer"]

    });

   const [errors, setErrors] = useState({});

    const registerChange = e => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const registerSubmit = e => {

        e.preventDefault();

        setErrors(validation(formData));

        const result = AuthService.register(
                formData.firstName,
                formData.lastName,
                formData.username,
                formData.email,
                formData.password,
                formData.password2,
                formData.role
            )
            console.log(result)
    };

    return{registerChange, registerSubmit, formData, errors};
};

export default Form;