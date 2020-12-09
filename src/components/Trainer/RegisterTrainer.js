import React, {useState} from "react";
import AuthService from "../../services/auth.service";


const RegisterTrainer = () => {
    const [registerDataT, setRegisterDataT] = useState({
        firstNameT: "",
        lastNameT: "",
        usernameT: "",
        emailT: "",
        passwordT: "",
        role: ["trainer"]
    });

    const registerChangeT = e => {
        setRegisterDataT({
            ...registerDataT,
            [e.target.id]:
            e.target.value});
    };

    const registerSubmitT = () => {
        try {
            const result = AuthService.registerT(
                registerDataT.firstNameT,
                registerDataT.lastNameT,
                registerDataT.usernameT,
                registerDataT.emailT,
                registerDataT.passwordT,
                {role: registerDataT.role
                })
            console.log(result)

        }
        catch (error) {

        }
    }

    return(
        <div>
            <form as="trainer" id="trainer" value={registerDataT.role} onChange={registerChangeT}/>
            <form>
                <label>Voornaam</label>
                <input id="firstNameT"  placeholder="Voornaam"
                       value={registerDataT.firstNameT} onChange={registerChangeT}/>
            </form>
            <form>
                <label>Achternaam</label>
                <input id="lastNameT"  placeholder="Achternaam"
                       value={registerDataT.lastNameT} onChange={registerChangeT}/>
            </form>
            <form>
                <label>Gebruikersnaam</label>
                <input id="usernameT"  placeholder="Gebruikersnaam"
                       value={registerDataT.usernameT} onChange={registerChangeT}/>
            </form>
            <form>
                <label>Email</label>
                <input id="emailT" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                       value={registerDataT.emailT} onChange={registerChangeT}/>
            </form>
            <form>
                <label>Wachtwoord</label>
                <input id="passwordT" type="password" autoComplete="new-password" placeholder="Voer hier uw wachtwoord in"
                       value={registerDataT.passwordT} onChange={registerChangeT}/>
            </form>
            <button type="submit" onClick={registerSubmitT}>
                Login
            </button>
        </div>
    )
}

export default RegisterTrainer;