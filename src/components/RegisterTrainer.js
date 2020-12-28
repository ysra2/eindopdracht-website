import React, {useState} from "react";
import AuthService from "../services/auth.service";


const Register = () => {
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        role: ["trainer"]

    });

    const registerChange = e => {
        const {id, value} = e.target;
        setRegisterData({
            ...registerData,
            [id]: value
        });
    };

    const registerSubmit = () => {
        try {
            const result = AuthService.register(
                registerData.firstName,
                registerData.lastName,
                registerData.username,
                registerData.email,
                registerData.password,
                registerData.role,
                )
            console.log(result)
            localStorage.setItem("token", JSON.stringify(result.data.accessToken));
            localStorage.setItem("user_id", JSON.stringify(result.data));
            localStorage.setItem("role_id", JSON.stringify(result.data.user.id));

        } catch (error) {

        }
    }

    return (
        <div>
            <form id="trainer" value={registerData.role} onChange={registerChange}/>
            <form>
                <label>Voornaam</label>
                <input id="firstName" placeholder="Voornaam"
                       value={registerData.firstName} onChange={registerChange}/>
            </form>
            <form>
                <label>Achternaam</label>
                <input id="lastName" placeholder="Achternaam"
                       value={registerData.lastName} onChange={registerChange}/>
            </form>
            <form>
                <label>Gebruikersnaam</label>
                <input id="username" placeholder="Gebruikersnaam"
                       value={registerData.username} onChange={registerChange}/>
            </form>
            <form>
                <label>Email</label>
                <input id="email" type="email" autoComplete="nope" placeholder="Voer hier uw emailadres in"
                       value={registerData.email} onChange={registerChange}/>
            </form>
            <form>
                <label>Wachtwoord</label>
                <input id="password" type="password" autoComplete="new-password"
                       placeholder="Voer hier uw wachtwoord in"
                       value={registerData.password} onChange={registerChange}/>
            </form>
            <button type="submit" onClick={registerSubmit}>
                Login
            </button>
        </div>
    )
}
export default Register;