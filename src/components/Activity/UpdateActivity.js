import React, {useEffect, useState} from "react"
import axios from "../../services/axios.instance"
import authHeader from "../../services/auth-header";
import AddActivity from "./AddActivity";
import authActivity from "../../services/auth-activity";



const UpdateActivity = () => {
    const [updateActivity, setUpdateActivity] = useState({
        activityName: "",
        nameTrainer: "",
        location: "",
        date: "",
        time: ""});

    const activityChange = event => {
        const {id, value} = event.target;
        (setUpdateActivity({
            ...updateActivity,
            [id]: value
        }));
    };


    const creatActivity =  () => {

        console.log(userId);
        return axios.put(`activity/ `,
            {updateActivity})
            .then(
                (response) => {
                    console.log(response);
                    return (response)
                })
            .catch((error) => {
                console.log(error);
            });

    }



    return(
        <div>

            <form/>
            <div>
                <label>Sportactiviteit</label>
                <input id="activityName"  placeholder="Sportactiviteit"
                       value={updateActivity.activityName} onChange={activityChange}/>

            </div>
            <div>
                <label>Naam Trainer</label>
                <input id="nameTrainer" placeholder="Naam Trainer"
                       value={updateActivity.nameTrainer} onChange={activityChange}/>

            </div>
            <div>
                <label>Locatie</label>
                <input id="location" type="address" placeholder="Locatie"
                       value={updateActivity.location} onChange={activityChange}/>

            </div>
            <div>
                <label>Tijd</label>
                <input id="time" type="time" placeholder="Tijd"
                       value={updateActivity.time} onChange={activityChange}/>

            </div>
            <div>
                <label>Datum</label>
                <input id="date" type="date" placeholder="Datum"
                       value={updateActivity.date} onChange={activityChange}/>

            </div>
            <button onClick={creatActivity}>
                Wijzig sportactiviteit
            </button>
        </div>
    )
}

export default UpdateActivity;