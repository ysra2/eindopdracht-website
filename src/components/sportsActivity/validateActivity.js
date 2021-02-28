export default function validateActivity(activity){
    let errors = {}

    //AddActivity
    //Register
    if (!activity.activityName.trim()){
        errors.activityName = "Veld mag niet leeg zijn";
    }

    if (!activity.nameTrainer.trim()){
        errors.nameTrainer = "Veld mag niet leeg zijn";
    }

    if (!activity.address.trim()){
        errors.address = "Veld mag niet leeg zijn";
    }
    if (!activity.city.trim()){
        errors.city = "Veld mag niet leeg zijn";
    }

    if (!activity.time.trim()){
        errors.time = "Veld mag niet leeg zijn";
    }

    if (!activity.date.trim()){
        errors.date = "Veld mag niet leeg zijn";
    }




    return errors;
}
