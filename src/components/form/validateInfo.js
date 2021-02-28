export default function validateInfo(formData){
    let errors = {}


    //Register
    if (!formData.firstName.trim()){
        errors.firstName = "Veld mag niet leeg zijn";
    }

    if (!formData.lastName.trim()){
        errors.lastName = "Veld mag niet leeg zijn";
    }

    if (!formData.username.trim()){
        errors.username = "Veld mag niet leeg zijn";
    }

    if (!formData.email){
        errors.email = "Veld mag niet leeg zijn";
    }else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)){
        errors.email = "Emailadres is onjuist ingevuld";
    }

    if (!formData.password){
        errors.password = "Veld mag niet leeg zijn";
    } else if(formData.password.length < 8
        || !/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.password)
    ){
        errors.password = "Wachtwoord moet 8 of meer karakters hebben + het moet 1 hoofdletter en 1 cijfer en  1 !/@/#/$/%/&/* hebben.";
    }

    if (!formData.password2){
        errors.password2 = "Veld mag niet leeg zijn";
    } else if(formData.password2 !== formData.password){
        errors.password2 = "Wachtwoord komt niet overeen";
    }

    return errors;
}
