import React, {useState} from "react";

import AuthService from "../../services/auth.service"

const LoginTrainer = (trainer) => {
    const [loginDataT, setLoginDataT] = useState({usernameT: "", passwordT: ""});

    const loginChangeT = e => {
        setLoginDataT({...loginDataT, [e.target.id]: e.target.value});
    }

    const loginSubmitT = () =>{
        try {
            const result = AuthService.loginT(
                loginDataT.usernameT,
                loginDataT.passwordT
            );
            console.log(result.data);
            trainer.history.push("/profile/trainer");
        }
        catch (error) {

        }
    }

    return(
        <div>
            <form as="trainer" id="trainer" onSubmit={loginChangeT}/>
            <form>
                <label>Email</label>
                <input id="usernameT" type="email" placeholder="Voer hier uw emailadres in"
                       value={loginDataT.usernameT} onChange={loginChangeT}/>
            </form>
            <form>
                <label>Password</label>
                <input id="passwordT" type="current-password" placeholder="Voer hier uw wachtwoord in"
                       value={loginDataT.passwordT} onChange={loginChangeT}/>
            </form>
            <form>
                <input type="checkbox"/><span>Wachtwoord onthouden</span>
            </form>
            <button onClick={loginSubmitT}>
                Login
            </button>
        </div>
    )
}

export default LoginTrainer;

