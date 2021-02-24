// import React, { useState } from 'react'

// const AddActivityForm = (props, activity) => {
//     const initialFormState = { id: null, name: '', username: '' }
//     const [ user, setUser ] = useState(initialFormState)
//
//     const handleInputChange = event => {
//         const { name, value } = event.target
//
//         setUser({ ...user, [name]: value })
//     }
//
//     return (
//         <form
//             // onSubmit={event => {
//             //     event.preventDefault()
//             //     if (!activity.a || !user.username) return
//             //
//             //     props.addActivity(user)
//             //     setUser(initialFormState)
//             // }}
//         >
//         <label>SportActiviteit</label>
//         <input
//             type="text"
//             id="activityName"
//             value={activity.activityName}
//             onChange={handleInputChange}
//         />
//         <label>Naam Trainer</label>
//         <input
//             type="text"
//             id="nameTrainer"
//             value={activity.nameTrainer}
//             onChange={handleInputChange}
//         />
//         <label>Adres</label>
//         <input
//             type="text"
//             id="address"
//             value={activity.address}
//             onChange={handleInputChange}
//         />
//         <label>Postcode</label>
//         <input
//             type="zipcode"
//             id="zipcode"
//             value={activity.zipcode}
//             onChange={handleInputChange}
//         />
//         <label>Plaats</label>
//         <input
//             type="text"
//             id="city"
//             value={activity.city}
//             onChange={handleInputChange}
//         />
//         <label>Tijd</label>
//         <input
//             type="time"
//             id="time"
//             value={activity.time}
//             onChange={handleInputChange}
//         />
//         <label>Datum</label>
//         <input
//             type="date"
//             id="date"
//             value={activity.date}
//             onChange={handleInputChange}
//         />
//         <button onClick={createActivity}>new user</button>
//     </form>
// )
// }
//
// export default AddActivityForm



import React, {useEffect, useState} from 'react'
import authHeader from "../../services/auth-header";
import axios from "../../services/axios.instance";

const AddActivityForm = (props) => {
    const initialFormState = {
        activityId: null,
        activityName: "",
        nameTrainer: "",
        address: "",
        zipcode: "",
        city: "",
        date: "",
        time: ""}
    const [activity, setActivity] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { id, value } = event.target

        setActivity({ ...activity, [id]: value })
    }

    const createActivity =  async event => {
        event.preventDefault();

        const trainerId = authHeader().id;

        console.log(trainerId);
        return axios.post(`activity/${trainerId}`,
            {
                activityName: activity.activityName,
                nameTrainer: activity.nameTrainer,
                address: activity.address,
                zipcode: activity.zipcode,
                city: activity.city,
                date: activity.date,
                time: activity.time
            })
            .then((response) => {
                if (trainerId === trainerId) {
                    localStorage.setItem("activities", JSON.stringify(response.data));
                    setActivity(response.data);
                    console.log(response);
                }})
            .catch((error) => {
                console.log(error);
            })


    }

    return (
        <div className="form-page">
        <form className="form">
            <label>SportActiviteit</label>
            <input
                type="text"
                id="activityName"
                value={activity.activityName}
                onChange={handleInputChange}
            />
            <label>Naam Trainer</label>
            <input
                type="text"
                id="nameTrainer"
                value={activity.nameTrainer}
                onChange={handleInputChange}
            />
            <label>Adres</label>
            <input
                type="text"
                id="address"
                value={activity.address}
                onChange={handleInputChange}
            />
            <label>Postcode</label>
            <input
                type="zipcode"
                id="zipcode"
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
            <label>Tijd</label>
            <input
                type="time"
                id="time"
                value={activity.time}
                onChange={handleInputChange}
            />
            <label>Datum</label>
            <input
                type="date"
                id="date"
                value={activity.date}
                onChange={handleInputChange}
            />
            <button onClick={createActivity}>new user</button>
        </form>
        </div>
    )
}

export default AddActivityForm