import React, {useRef} from "react";
import useForm from "../form/useForm";
import validate from "../form/validateInfo";
import AuthService from "../../services/auth.service"


function LoginPT(props){
    const {handleChangePT, formData, errors, setSuccessful, setErrors, setMessage} =
        useForm(submit, validate);

    const mountRefPT = useRef(null)

    function submit() {
        console.log("Succesvol geregistreerd");
    }

    const loginSubmitPT = (event) => {
        event.preventDefault();
        setErrors(validate(formData));

        setMessage("");
        setSuccessful(true);

        mountRefPT.current = true;
        if(mountRefPT.current){
            AuthService.loginPT(
                formData.username,
                formData.password,
            ).then(
                (response) => {
                    console.log(response);
                    props.history.push('/profile/trainer');
                    setSuccessful(true);
                });
        }


        return () => mountRefPT.current = false;
    };


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
                {/*<div>*/}
                {/*    <input type="checkbox"/><span>Wachtwoord onthouden</span>*/}
                {/*</div>*/}
                <button type="submit"  onClick={loginSubmitPT} >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPT;
