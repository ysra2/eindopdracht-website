import React, {useState} from "react";

import AuthService from "../services/auth.service"

const LoginForm = (props) => {
    const [loginData, setLoginData] = useState({username: "", password: ""});

    const loginChange = e => {
        const {id, value} = e.target;
        setLoginData({...loginData,
            [id]: value});
    }

    const loginSubmit = () =>{
        try {
            const result = AuthService.login(
                loginData.username,
                loginData.password
            );
            console.log(result.data);
            // localStorage.setItem("token", JSON.stringify(result.data.accessToken));
            // localStorage.setItem("user_id", JSON.stringify(result.data.id));
            props.history.push("/");
        }
        catch (error) {

        }
    }

    return(
        <div>
            <form>
            <div>
                <label>Email</label>
                <input id="username" type="email" placeholder="Voer hier uw emailadres in"
                       value={(loginData.username)} onChange={loginChange}/>

                <label>Password</label>
                <input id="password" type="current-password" placeholder="Voer hier uw wachtwoord in"
                       value={(loginData.password)} onChange={loginChange}/>
            </div>
            <div>
                <input type="checkbox"/><span>Wachtwoord onthouden</span>
            </div>
            <button onClick={loginSubmit}>
                Login
            </button>
            </form>
        </div>
    );
}

export default LoginForm;