import React, {useEffect, useState} from "react"
import axios from "../services/axios.instance"
import authHeader from "../services/auth-header";



const AddActivity = () => {
    const [addActivity, setAddActivity] = useState({
        activityName: "",
        nameTrainer: "",
        location: "",
        date: "",
        time: ""});

    const activityChange = event => {
        const {id, value} = event.target;
        (setAddActivity({
            ...addActivity,
            [id]: value
        }));
    };

    useEffect(() =>{

    },[])

    const createActivity =  async () => {

        const token = JSON.parse(localStorage.getItem('user_id'))

        const config = {
            headers: {  Authorization: 'Bearer ' + token.accessToken }
        };

        const trainerId = authHeader();
        console.log(trainerId);
        return axios.post(`/activity/${trainerId.id}`
            ,

            addActivity, config)
            .then((addActivity) =>{
                console.log(addActivity);
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
                       value={addActivity.activityName} onChange={activityChange}/>

            </div>
            <div>
                <label>Naam Trainer</label>
                <input id="nameTrainer" placeholder="Naam Trainer"
                       value={addActivity.nameTrainer} onChange={activityChange}/>

            </div>
            <div>
                <label>Locatie</label>
                <input id="location" type="address" placeholder="Locatie"
                       value={addActivity.location} onChange={activityChange}/>

            </div>
            <div>
                <label>Tijd</label>
                <input id="time" type="time" placeholder="Tijd"
                       value={addActivity.time} onChange={activityChange}/>

            </div>
            <div>
                <label>Datum</label>
                <input id="date" type="date" placeholder="Datum"
                       value={addActivity.date} onChange={activityChange}/>

            </div>
            <button onClick={createActivity} >
                Submit
            </button>
        </div>
    )
}

export default AddActivity;