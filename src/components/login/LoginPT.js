import React from "react";
import useForm from "../useForm";
import validate from "../validateInfo";
import AuthService from "../../services/auth.service"

const LoginPT = ({history}) => {
    const {handleChange, formData, errors, setSuccessful, setErrors, setMessage} =
        useForm(submit, validate);


    function submit() {
        console.log("Succesvol geregistreerd");
    }

    const loginSubmitPT = (event) => {
        event.preventDefault();
        setErrors(validate(formData));

        setMessage("");
        setSuccessful(true);


        AuthService.login(
            formData.username,
            formData.password,
        ).then(
            (response) => {
                console.log(response);
                history.push('/profile');
                setSuccessful(true);
            });

    };

    return(
        <div className="form-page">
            <form className="form">
                <label className="title">
                    Inloggen
                </label>
                <div>
                    <label >Email</label>
                    <input id="username" type="email" placeholder="Voer hier uw emailadres in"
                           value={formData.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input id="password" type="password" placeholder="Voer hier uw wachtwoord in"
                           value={formData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                {/*<div>*/}
                {/*    <input type="checkbox"/><span>Wachtwoord onthouden</span>*/}
                {/*</div>*/}
                <button type="submit"  onClick={loginSubmitPT} >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPT;
