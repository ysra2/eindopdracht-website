import React, {useEffect, useState} from "react"
import axios from "../../services/axios.instance"
import authHeader from "../../services/auth-header";
import AddActivity from "./AddActivity";
import authActivity from "../../services/auth-activity";
import AuthService from "../../services/auth.service";


const UpdateActivity = (props) => {
    const [updateActivity, setUpdateActivity] = useState({
        activityName: "",
        nameTrainer: "",
        address: "",
        zipcode: "",
        city: "",
        date: "",
        time: ""});

    const activityChange = event => {
        const {id, value} = event.target;
        (setUpdateActivity({
            ...updateActivity,
            [id]: value
        }));
    };


    const creatActivity = event => {
        event.preventDefault();

        // const activityId = AuthService.getCurrentActivity().activityId
        const activityId = authActivity().activityId
        console.log(activityId);
        return axios.put(`activity/${activityId} `,
            updateActivity)
            .then(
                (response) => {
                    console.log(response);
                })
            .then(
                props.history.push('/activiteit')
            )
            .catch((error) => {
                console.log(error);
            });


        // const trainerId = authHeader().id;
        // const activityId = authActivity().activityId
        // console.log(activityId);
        // return axios.put(`activity/${activityId} `,
        //     updateActivity)
        //     .then(
        //         (response) => {
        //             console.log(response);
        //         })
        //     .then((result) => {
        //         if (activityId === activityId) {
        //             props.history.push('/activiteit')
        //         }
        //         console.log(result)
        //     })
        //     .then(
        //         props.history.push('/activiteit')
        //     )
        //     .catch((error) => {
        //         console.log(error);
        //     });


    }

    return(
        <div>
            <div className="form-page">
                <form className="form">
                    <label className="title">
                        Training wijzigen
                    </label>
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
                        <label>Adres</label>
                        <input id="address" type="address" placeholder="Adres"
                               value={updateActivity.address} onChange={activityChange}/>

                    </div>
                    <div>
                        <label>Postcode</label>
                        <input id="zipcode" type="zipcode" placeholder="Postcode (optioneel)"
                               value={updateActivity.zipcode} onChange={activityChange}/>

                    </div>
                    <div>
                        <label>Plaats</label>
                        <input id="city" type="city" placeholder="Plaats"
                               value={updateActivity.city} onChange={activityChange}/>
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
                </form>
            </div>
        </div>
    )
}

export default UpdateActivity;