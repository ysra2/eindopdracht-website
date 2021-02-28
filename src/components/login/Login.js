import React, {useEffect, useRef} from "react";
import useForm from "../form/useForm";
import validate from "../form/validateInfo";
import AuthService from "../../services/auth.service"


function Login(props){
    const {handleChangePT, formData, errors, setSuccessful, setErrors, setMessage} =
        useForm(submit, validate);

    const mountRef = useRef(false)

    useEffect(() => {
        return () => { mountRef.current = true }
    }, []);

    function submit() {
        console.log("Succesvol geregistreerd");
    }

    const loginSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(formData));

        setMessage("");
        setSuccessful(true);


                 AuthService.login(
                     formData.username,
                     formData.password,
                 ).then(
                     (response) => {
                         if(!mountRef.current){
                         console.log(response);
                         props.history.push('/profile');
                         setSuccessful(true);
                     }});

             }

    return(
        <div className="form-page">
            <form className="form">
            <label className="title">
                Inloggen
            </label>
            <div>
                <label >Email</label>
                <input id="username" type="email" placeholder="Voer hier uw emailadres in"
                       value={formData.username} onChange={handleChangePT}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Password</label>
                <input id="password" type="password" placeholder="Voer hier uw wachtwoord in"
                       value={formData.password} onChange={handleChangePT}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit"  onClick={loginSubmit} >
                Login
            </button>
            </form>
        </div>
    )
}

export default Login;
