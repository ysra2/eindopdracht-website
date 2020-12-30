import React from "react";
import validate from "../validate/validateInfo";
import useFormTrainer from "./useFormTrainer";

const RegisterForm = () => {
    const {registerChangeT, formDataT, registerSubmitT, errors} = useFormTrainer(submit, validate);

    function submit() {
        console.log("Succesvol geregistreerd");

    }

    return (
        <div className="register-content-right">
            <form className="register-form" id="trainer" value={formDataT.role} onSubmit={registerSubmitT} noValidate>
                <div className="register-form-input" >
                    <label className="register-form-input" >Voornaam</label>
                    <input className="register-form-input" id="firstName" placeholder="Voornaam"
                           type="text"
                           value={formDataT.firstName} onChange={registerChangeT}/>
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input">Achternaam</label>
                    <input className="register-form-input" id="lastName" placeholder="Achternaam"
                           type="text"
                           value={formDataT.lastName} onChange={registerChangeT}/>
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input" >Gebruikersnaam</label>
                    <input className="register-form-input" id="username" placeholder="Gebruikersnaam"
                           type="text"
                           value={formDataT.username} onChange={registerChangeT}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="register-form-input" >
                    <label className="register-form-input" >Email</label>
                    <input className="register-form-input" id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                           value={formDataT.email} onChange={registerChangeT}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input">Wachtwoord</label>
                    <input className="register-form-input" id="password" type="password" autoComplete="new-password"
                           placeholder="Voer hier uw wachtwoord in"
                           value={formDataT.password} onChange={registerChangeT}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input">Herhaal Wachtwoord</label>
                    <input className="register-form-input" id="password2" type="password" autoComplete="password"
                           placeholder="Voer hier uw wachtwoord in"
                           value={formDataT.password2} onChange={registerChangeT}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div >
                <button className="register-form-Btn" type="submit">
                    Registreer
                </button>
                <span className="register-form-input-login" >Heb je al een account?<a href="/login">Klik hier</a></span>
            </form>
        </div>
    )
};

export default RegisterForm;