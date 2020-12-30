import React, {useEffect, useRef, useState} from "react";
import AuthService from "../../services/auth.service";

const LoginForm = (props, callBack, validateLogin) => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const loginChange = event => {
        const {id, value} = event.target;
        setLoginData({
            ...loginData,
            [id]: value
        });
    };


    const loginSubmit = async (event) => {
        event.preventDefault();
        //setErrors(validateLogin(loginData));

        setLoading(true);
        setMessage("");

            try {
                const result = AuthService.login(
                   loginData.email,
                   loginData.password
                );
            console.log(result);
            props.history.push.id("/profile");
            window.location.reload();
        }
        catch (error) {

            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            setMessage(resMessage);
            setLoading(false)
        }
        setIsSubmitting(true);
    };

    //useEffect checks of de errors veranderen
    useEffect(() => {
            //controleer of er geen errors zijn
            if (Object.keys(errors).length === 0 && isSubmitting){
                callBack();
            }
            //roep de callBack
        },

        //verander alleen als het object veranderd.
        [errors])

    return (
        <div className="register-content-left" noValidate>
            <form onSubmit={loginSubmit}>
                <div className="register-form-input" >
                    <label htmlFor="username" className="register-form-input" >Email</label>
                    <input className="register-form-input" id="username" type="email"
                           placeholder="Voer hier uw emailadres in"
                           value={loginData.username} onChange={loginChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="register-form-input">
                    <label htmlFor="password" className="register-form-input">Wachtwoord</label>
                    <input className="register-form-input" id="password" type="password"
                           placeholder="Voer hier uw wachtwoord in"
                           value={loginData.password} onChange={loginChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="register-form-Btn" type="submit" onClick={loginSubmit} >
                    <span>Login</span>
                </button>
                {loading && (<span/>)}
                {message && (<div role="alert">{message}</div>)}
            </form>
        </div>
    )
};

export default LoginForm;