import React, {useState, useEffect} from "react";
import AuthService from "../services/auth.service";

const useForm = (callBack, validate) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        // password2: ""
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverErrors, setServerErrors] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = event => {
        const {id, value} = event.target;
        (setFormData({
            ...formData,
            [id]: value
        }));
    };

    const handleSubmitTrainer = (event) => {
        event.preventDefault();
        setErrors(validate(formData));

        setMessage("");
        setSuccessful(true);


        AuthService.registerTrainer(
            formData.firstName,
            formData.lastName,
            formData.username,
            formData.email,
            formData.password,
            formData.role
        ).then(
            (response) =>{
                console.log(response);
                setMessage(response.data.message);
                setSuccessful(true);
            },

            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            });


        if (formData.errors){
            setServerErrors(formData.errors);
            console.log("Unsuccessfully registered")
        } else{
            console.log("Successfully registered")
        }
        setServerErrors("")

        setIsSubmitting(true);

    };

    const handleSubmitSporter = (event) => {
        event.preventDefault();
        setErrors(validate(formData));

        setMessage("");
        setSuccessful(true);

//Het is vreemd dat ik niet dubbel gebruik kan maken van de state formData zelf.
// Het lijkt alsof de server het niet accepteert en het geeft een error 400.
        //Hierdoor moet ik specifiek in de data weergeven dat het om bijv formData.firstName gaat
        AuthService.registerSporter(
            formData.firstName,
            formData.lastName,
            formData.username,
            formData.email,
            formData.password,
            formData.role
        ).then(
            (response) =>{
                console.log(response);
                setMessage(response.data.message);
                setSuccessful(true);
            } ,

            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            });


        if (formData.errors){
            setServerErrors(formData.errors);
            console.log("Unsuccessfully registered")
        } else{
            console.log("Successfully registered")
        }
        setServerErrors("")

        setIsSubmitting(true);

    };


    // const loginSubmit = (props) =>{
    //     AuthService.login(
    //         formData.username,
    //         formData.password
    //     ).then(
    //         (response) => {
    //             console.log(response);
    //             props.history.push('/profile');
    //             },
    //
    //         (error) => {
    //             const resMessage =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
    //
    //             setMessage(resMessage);
    //             setSuccessful(false);
    //         });
    //     if (formData.errors){
    //         setServerErrors(formData.errors);
    //     } else{
    //         console.log("error")
    //     }
    //     setServerErrors("")
    //
    //     setIsSubmitting(true);
    // };

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

    return {handleChange,
        formData,
        handleSubmitTrainer,
        handleSubmitSporter,
        errors,
        message,
        successful, setSuccessful, setErrors, setMessage};
};

export default useForm;