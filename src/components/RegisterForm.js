import React, {useState} from "react";
import Form from "./form";
import Validate from "./validation";


const RegisterForm = () => {
    const {registerChange, registerSubmit, formData, errors} = Form(Validate)

    return (
        <div>
            <form onSubmit={registerSubmit}>
                <label>Sporter</label>
                <input id="sporter" type="checkbox" value={formData.role} onChange={registerChange}/>
            </form>
            <form>
                <label>Trainer</label>
                <input id="trainer" type="checkbox" value={formData.role} onChange={registerChange}/>
            </form>
            <form>
                <label>Voornaam</label>
                <input id="firstName" placeholder="Voornaam"
                       value={formData.firstName} onChange={registerChange}/>
                       {errors.firstName && <p>{errors.firstName}</p>}
            </form>
            <form>
                <label>Achternaam</label>
                <input id="lastName" placeholder="Achternaam"
                       value={formData.lastName} onChange={registerChange}/>
                       {errors.lastName && <p>{errors.lastName}</p>}
            </form>
            <form>
                <label>Gebruikersnaam</label>
                <input id="username" placeholder="Gebruikersnaam"
                       value={formData.username} onChange={registerChange}/>
                       {errors.username && <p>{errors.username}</p>}
            </form>

            <form>
                <label>Email</label>
                <input id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                       value={formData.email} onChange={registerChange}/>
                       {errors.email && <p>{errors.email}</p>}
            </form>
            <form>
                <label>Wachtwoord</label>
                <input id="password" type="password" autoComplete="new-password"
                       placeholder="Voer hier uw wachtwoord in"
                       value={formData.password} onChange={registerChange}/>
                       {errors.password && <p>{errors.password}</p>}
            </form>
            <form>
                <label>Herhaal Wachtwoord</label>
                <input id="password2" type="password2" autoComplete="password"
                       placeholder="Voer hier uw wachtwoord in"
                       value={formData.password2} onChange={registerChange}/>
                       {errors.password2 && <p>{errors.password2}</p>}
            </form>
            <button type="submit" onClick={registerSubmit}>
                Registreer
            </button>
        </div>
    )
};

export default RegisterForm;