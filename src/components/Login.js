import React from "react";

import useForm from "./useForm";
import AuthService from "../services/auth.service";

const Login = (props) => {
    const {handleChange, formData} = useForm(submit);

    const loginSubmit = () =>{
        AuthService.login(
            formData.username,
            formData.password
        ).then(
            (response) =>{
                console.log(response);
                // localStorage.setItem("token", JSON.stringify(result.data.accessToken));
                // localStorage.setItem("user_id", JSON.stringify(result.data.id));
                props.history.push("/profile");
                window.location.reload();
            });
    };

    function submit() {
        console.log("Succesvol geregistreerd");
    }

    return(
        <div>
            <form as="sporter" id="sporter" onSubmit={handleChange}/>
            <div>
                <label>Email</label>
                <input id="username" type="email" placeholder="Voer hier uw emailadres in"
                       value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <label>Password</label>
                <input id="password" type="current-password" placeholder="Voer hier uw wachtwoord in"
                       value={formData.password} onChange={handleChange}/>
            </div>
            <div>
                <input type="checkbox"/><span>Wachtwoord onthouden</span>
            </div>
            <button onClick={loginSubmit}>
                Login
            </button>
        </div>
    )
}

export default Login;

