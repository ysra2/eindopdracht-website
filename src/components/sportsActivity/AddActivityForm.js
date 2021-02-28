import React, {useState} from 'react'
import authHeader from "../../services/auth-header";
import axios from "../../services/axios.instance";
import validate from "../sportsActivity/validateActivity";

const AddActivityForm = (props) => {
    const [activity, setActivity] = useState(props.currentActivity)
    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
        const { id, value } = event.target
        setActivity({ ...activity, [id]: value })
    }

    const createActivity =  async event => {
        event.preventDefault();
        setErrors(validate(activity));

        const trainerId = authHeader().id;

        console.log(trainerId);
        return await axios.post(`/activity/trainer/${trainerId}`,
            {
                activityId: activity.activityId,
                activityName: activity.activityName,
                nameTrainer: activity.nameTrainer,
                address: activity.address,
                zipcode: activity.zipcode,
                city: activity.city,
                date: activity.date,
                time: activity.time
            } )
            .then((response) => {
                if (trainerId === trainerId) {
                    localStorage.setItem(["activity_id"], JSON.stringify(response.data));
                    setActivity(response.data);
                    console.log(response);
                }})
            .catch((error) => {
                console.log(error);
            })


    }

    return (
        <div className="form-page">
        <form className="form-page">
            <label>SportActiviteit</label>
            <input
                type="text"
                id="activityName"
                value={activity.activityName}
                onChange={handleInputChange}
            />
            {errors.activityName && <p>{errors.activityName}</p>}
            <label>Naam Trainer</label>
            <input
                type="text"
                id="nameTrainer"
                value={activity.nameTrainer}
                onChange={handleInputChange}
            />
            {errors.nameTrainer && <p>{errors.nameTrainer}</p>}
            <label>Adres</label>
            <input
                type="text"
                id="address"
                value={activity.address}
                onChange={handleInputChange}
            />
            {errors.address && <p>{errors.address}</p>}
            <label>Postcode</label>
            <input
                type="zipcode"
                id="zipcode"
                placeholder="Postcode (optioneel)"
                value={activity.zipcode}
                onChange={handleInputChange}
            />
            <label>Plaats</label>
            <input
                type="text"
                id="city"
                value={activity.city}
                onChange={handleInputChange}
            />
            {errors.city && <p>{errors.city}</p>}
            <label>Tijd</label>
            <input
                type="time"
                id="time"
                value={activity.time}
                onChange={handleInputChange}
            />
            {errors.time && <p>{errors.time}</p>}
            <label>Datum</label>
            <input
                type="date"
                id="date"
                value={activity.date}
                onChange={handleInputChange}
            />
            {errors.date && <p>{errors.date}</p>}
            <button onClick={createActivity}>Voeg Sportactiviteit toe</button>
        </form>
        </div>
    )
}

export default AddActivityForm