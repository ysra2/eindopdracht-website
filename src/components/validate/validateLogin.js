export default function validateLogin(loginData) {
    let errors = {}

//Login
    if (!loginData.username) {
        errors.username = "Veld mag niet leeg zijn";
    }else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginData.email)){
        errors.username = "Emailadres is onjuist ingevuld";
    }


    if (!loginData.password) {
        errors.password = "Veld mag niet leeg zijn";
    } else if(loginData.password.length < 8){
        errors.password2 = "Wachtwoord komt niet overeen";
    }

    return errors;
}