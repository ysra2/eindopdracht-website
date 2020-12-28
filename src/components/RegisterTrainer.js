import React from "react";
import useForm from "./useForm";
import validate from "./validateRegister";


const RegisterForm = () => {
    const {registerChange, formData, registerSubmit, errors} = useForm(submit, validate);

    function submit() {
        console.log("Succesvol geregistreerd");

    }

    return (
        <div className="register-content-left">
            <form className="register-form"  id="trainer" value={formData.role} onSubmit={registerSubmit} noValidate>
                <div className="register-form-input">
                    <label className="register-form-input">Trainer</label>
                </div>
                <div className="register-form-input" >
                    <label className="register-form-input" >Voornaam</label>
                    <input className="register-form-input" id="firstName" placeholder="Voornaam"
                           type="text"
                           value={formData.firstName} onChange={registerChange}/>
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input">Achternaam</label>
                    <input className="register-form-input" id="lastName" placeholder="Achternaam"
                           type="text"
                           value={formData.lastName} onChange={registerChange}/>
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input" >Gebruikersnaam</label>
                    <input className="register-form-input" id="username" placeholder="Gebruikersnaam"
                           type="text"
                           value={formData.username} onChange={registerChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="register-form-input" >
                    <label className="register-form-input" >Email</label>
                    <input className="register-form-input" id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                           value={formData.email} onChange={registerChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input">Wachtwoord</label>
                    <input className="register-form-input" id="password" type="password" autoComplete="new-password"
                           placeholder="Voer hier uw wachtwoord in"
                           value={formData.password} onChange={registerChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="register-form-input">
                    <label className="register-form-input">Herhaal Wachtwoord</label>
                    <input className="register-form-input" id="password2" type="password" autoComplete="password"
                           placeholder="Voer hier uw wachtwoord in"
                           value={formData.password2} onChange={registerChange}/>
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