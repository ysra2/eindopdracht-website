import React from "react";
import useForm from "../form/useForm";
import validate from "../form/validateInfo";

const RegisterSporter = () => {
    const {handleChangePT, formData, handleSubmitSporter, errors, successful, message} =
        useForm(submit, validate);

    function submit() {
        console.log("Succesvol geregistreerd");
    }

    return(
        <div className="form-page">
            <form className="form">
                <label className="title">Sporter</label>
                {successful ? (
                    <div>
                        <h4>Succesvol geregistreerd</h4>
                    </div>
                ):(
                    <div>
                        <div >
                            <label>Voornaam</label>
                            <input id="firstName" type="text" placeholder="Voornaam"
                                   value={formData.firstName} onChange={handleChangePT}/>
                            {errors.firstName && <p>{errors.firstName}</p>}
                        </div>
                        <div >
                            <label>Achternaam</label>
                            <input id="lastName" type="text" placeholder="Achternaam"
                                   value={formData.lastName} onChange={handleChangePT}/>
                            {errors.lastName && <p>{errors.lastName}</p>}
                        </div>
                        <div >
                            <label>Gebruikersnaam</label>
                            <input id="username" type="text" placeholder="Gebruikersnaam"
                                   value={formData.username} onChange={handleChangePT}/>
                            {errors.username && <p>{errors.username}</p>}
                        </div>
                        <div >
                            <label>Email</label>
                            <input id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                                   value={formData.email} onChange={handleChangePT}/>
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div>
                            <label>Wachtwoord</label>
                            <input id="password" type="password" autoComplete="new-password" placeholder="Voer hier uw wachtwoord in"
                                   value={formData.password} onChange={handleChangePT} />
                            {errors.password && <p>{errors.password}</p>}
                        </div >
                        <button type="submit" className="register-button" onClick={handleSubmitSporter}>
                            Registreer
                        </button>

                    </div>
                )}
                {!message && (
                    <div>{message}</div>
                )}
            </form>
        </div>

    )
}

export default RegisterSporter;