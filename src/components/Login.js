import React from "react";
import useForm from "./useForm";
import AuthService from "../services/auth.service";

const Login = (props) => {
    const {handleChange, formData, errors,} = useForm(submit());


    const loginSubmit = () =>{
            AuthService.login(
                formData.username,
                formData.password
            ).then(
                (response) => {
                    console.log(response);
                    props.history.push('/profile');
                });
    };

    function submit() {
        console.log("Succesvol geregistreerd");
    }

    return(
        <div>
            <form/>
            <div>
                <label>Email</label>
                <input id="username" type="email" placeholder="Voer hier uw emailadres in"
                       value={formData.username} onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Password</label>
                <input id="password" type="current-password" placeholder="Voer hier uw wachtwoord in"
                       value={formData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <input type="checkbox"/><span>Wachtwoord onthouden</span>
            </div>
            <div>
            <button onClick={loginSubmit} >
                Login
            </button>
            </div>
        </div>
    )
}

export default Login;

// const loginSubmit = (event) => {
//     event.preventDefault();
//     setErrors(validate(formData));
//
//     setMessage("");
//     setSuccessful(true);
//
//
//     AuthService.login(
//         formData.username,
//         formData.password,
//     ).then(
//         (response) => {
//             console.log(response);
//             props.history.push('/profile');
//             setSuccessful(true);
//         } ,
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
//
//
//     if (formData.errors){
//         setServerErrors(formData.errors);
//     } else{
//         console.log("Gelukt!")
//     }
//     setServerErrors("")
//
//     setIsSubmitting(true);
//
// };