import React from "react";
import useForm from "../useForm";
import validate from "../validateInfo";

const RegisterTrainer = () => {
    const {handleChange, formData, handleSubmitTrainer, errors, successful, message} =
        useForm(submit, validate);


    function submit() {
        console.log("Succesvol geregistreerd");
    }


    return(
        <div>
            <form/>
            <label>Trainer</label>
            {!successful && (
                <div>
                    <form>
                        <label>Voornaam</label>
                        <input id="firstName"  placeholder="Voornaam"
                               value={formData.firstName} onChange={handleChange}/>
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </form>
                    <form>
                        <label>Achternaam</label>
                        <input id="lastName"  placeholder="Achternaam"
                               value={formData.lastName} onChange={handleChange}/>
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </form>
                    <form>
                        <label>Gebruikersnaam</label>
                        <input id="username"  placeholder="Gebruikersnaam"
                               value={formData.username} onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p>}
                    </form>
                    <form>
                        <label>Email</label>
                        <input id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                               value={formData.email} onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
                    </form>
                    <form>
                        <label>Wachtwoord</label>
                        <input id="password" type="password" autoComplete="new-password" placeholder="Voer hier uw wachtwoord in"
                               value={formData.password} onChange={handleChange} />
                        {errors.password && <p>{errors.password}</p>}
                    </form>
                    <button type="submit" onClick={handleSubmitTrainer}>
                        Registreer
                    </button>
                </div>
            )}
            {!message && (
                <div>{message}</div>
            )}
        </div>
    )
}

export default RegisterTrainer;