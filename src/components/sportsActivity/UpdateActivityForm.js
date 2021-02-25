import React, {useState} from 'react'
import axios from "../../services/axios.instance";

const UpdateActivityForm = (props) => {
    const [ activity, setActivity ] = useState(props.currentActivity)

    const handleInputChange = event => {
        const {id, value} = event.target

        setActivity({...activity, [id]: value})
    }

    const update = (activityId) => {
        return axios.put(`/activity/trainer/${activityId}`,{
            activityName: activity.activityName,
            nameTrainer: activity.nameTrainer,
            address: activity.address,
            zipcode: activity.zipcode,
            city: activity.city,
            date: activity.date,
            time: activity.time
        })
            .then(response => {
            setActivity({...activity})
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }


    return (
        <div className="form-page">
            <form onSubmit={event => {
                event.preventDefault()
                props.updateActivity(activity.activityId, activity)
            }}
                className="form">
                <label className="title">
                    Training wijzigen
                </label>
                <div>
                    <label>Sportactiviteit</label>
                    <input id="activityName" type="activityName" placeholder="Sportactiviteit"
                           value={activity.activityName} onChange={handleInputChange}/>

                </div>
                <div>
                    <label>Naam Trainer</label>
                    <input id="nameTrainer" type="nameTrainer" placeholder="Naam Trainer"
                           value={activity.nameTrainer} onChange={handleInputChange}/>

                </div>
                <div>
                    <label>Adres</label>
                    <input id="address" type="address" placeholder="Adres"
                           value={activity.address} onChange={handleInputChange}/>

                </div>
                <div>
                    <label>Postcode</label>
                    <input id="zipcode" type="zipcode" placeholder="Postcode (optioneel)"
                           value={activity.zipcode} onChange={handleInputChange}/>

                </div>
                <div>
                    <label>Plaats</label>
                    <input id="city" type="city" placeholder="Plaats"
                           value={activity.city} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Tijd</label>
                    <input id="time" type="time" placeholder="Tijd"
                           value={activity.time} onChange={handleInputChange}/>

                </div>
                <div>
                    <label>Datum</label>
                    <input id="date" type="date" placeholder="Datum"
                           value={activity.date} onChange={handleInputChange}/>

                </div>
                <button onClick={()=>update()}>
                    Wijzig sportactiviteit
                </button>
                <button onClick={() => props.setEditing(false)} className="button muted-button">
                    Annuleer wijziging
                </button>
            </form>
        </div>
    )
}

export default UpdateActivityForm


// import React, {useEffect, useState} from 'react'
// import authActivity from "../../services/auth-activity";
// import axios from "../../services/axios.instance";
//
//
// const UpdateActivityForm = (props, setEditing) => {
//     const [activity, setActivity] = useState({
//         activityId: null,
//         activityName: "",
//         nameTrainer: "",
//         address: "",
//         zipcode: "",
//         city: "",
//         date: "",
//         time: ""})
//
//
//     useEffect(
//         () => {
//             setActivity(activity)
//         }, [])
//
//     const handleInputChange = event => {
//         const { id, value } = event.target
//
//         setActivity({ ...activity, [id]: value })
//     }
//
//
//     const editActivity = (data, activityId) => {
//         axios.put(`activity/${activityId} `, activity)
//             .then(response => {
//                 setEditing(true)
//                 setActivity({
//                     activityId: activity.activityId,
//                     activityName: activity.activityName,
//                     nameTrainer: activity.nameTrainer,
//                     address: activity.address,
//                     zipcode: activity.zipcode,
//                     city: activity.city,
//                     date: activity.date,
//                     time: activity.time
//                 })
//                 console.log(response);
//             })
//     }
//
//
//     return (
//         <div>
//             <div >
//                 <form >
//                     <label className="title">
//                         Training wijzigen
//                     </label>
//                     <div>
//                         <label>Sportactiviteit</label>
//                         <input id="activityName" placeholder="Sportactiviteit"
//                                value={activity.activityName} onChange={handleInputChange}/>
//
//                     </div>
//                     <div>
//                         <label>Naam Trainer</label>
//                         <input id="nameTrainer" placeholder="Naam Trainer"
//                                value={activity.nameTrainer} onChange={handleInputChange}/>
//
//                     </div>
//                     <div>
//                         <label>Adres</label>
//                         <input id="address" type="address" placeholder="Adres"
//                                value={activity.address} onChange={handleInputChange}/>
//
//                     </div>
//                     <div>
//                         <label>Postcode</label>
//                         <input id="zipcode" type="zipcode" placeholder="Postcode (optioneel)"
//                                value={activity.zipcode} onChange={handleInputChange}/>
//
//                     </div>
//                     <div>
//                         <label>Plaats</label>
//                         <input id="city" type="city" placeholder="Plaats"
//                                value={activity.city} onChange={handleInputChange}/>
//                     </div>
//                     <div>
//                         <label>Tijd</label>
//                         <input id="time" type="time" placeholder="Tijd"
//                                value={activity.time} onChange={handleInputChange}/>
//
//                     </div>
//                     <div>
//                         <label>Datum</label>
//                         <input id="date" type="date" placeholder="Datum"
//                                value={activity.date} onChange={handleInputChange}/>
//
//                     </div>
//                     <button onClick={() =>
//                         editActivity(activity.activityId, activity)}>
//                         Wijzig sportactiviteit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }
//
// export default UpdateActivityForm