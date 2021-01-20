import React from "react";
import useForm from "./useForm";


const RegisterSporter = () => {
    const {handleChange, formData, handleSubmitSporter} = useForm(submit);


    function submit() {
        console.log("Succesvol geregistreerd");
    }

    return(
        <div>
            <form>
                <label>Sporter</label>
            </form>
            <form>
                <label>Voornaam</label>
                <input id="firstName"  placeholder="Voornaam"
                       value={formData.firstName} onChange={handleChange}/>
            </form>
            <form>
                <label>Achternaam</label>
                <input id="lastName"  placeholder="Achternaam"
                       value={formData.lastName} onChange={handleChange}/>
            </form>
            <form>
                <label>Gebruikersnaam</label>
                <input id="username"  placeholder="Gebruikersnaam"
                       value={formData.username} onChange={handleChange}/>
            </form>
            <form>
                <label>Email</label>
                <input id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                       value={formData.email} onChange={handleChange}/>
            </form>
            <form>
                <label>Wachtwoord</label>
                <input id="password" type="password" autoComplete="new-password" placeholder="Voer hier uw wachtwoord in"
                       value={formData.password} onChange={handleChange}/>
            </form>
            <button type="submit" onClick={handleSubmitSporter}>
                Registreer
            </button>
        </div>
    )
}

export default RegisterSporter;