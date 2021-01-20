import React from "react";
import useForm from "./useForm";
import AuthService from "../services/auth.service";

const Login = (props) => {
    const {handleChange, formData, error} = useForm(submit());


    const loginSubmit = () =>{
            AuthService.login(
                formData.username,
                formData.password
            ).then(
                (response) => {
                    console.log(response);
                    props.history.push('/profile');
                });
    };


    function submit() {
        console.log("Succesvol geregistreerd");
    }

    return(
        <div>
            <form as="sporter" name="sporter" onSubmit={handleChange}/>
            <div>
                <label>Email</label>
                <input id="username" type="email" placeholder="Voer hier uw emailadres in"
                       value={formData.username} onChange={handleChange}/>
                {/*{error.username && <p>{error.username}</p>}*/}
            </div>
            <div>
                <label>Password</label>
                <input id="password" type="current-password" placeholder="Voer hier uw wachtwoord in"
                       value={formData.password} onChange={handleChange}/>
                {/*{error.password && <p>{error.password}</p>}*/}
            </div>
            <div>
                <input type="checkbox"/><span>Wachtwoord onthouden</span>
            </div>
            <button onClick={loginSubmit} >
                Login
            </button>
        </div>
    )
}

export default Login;

