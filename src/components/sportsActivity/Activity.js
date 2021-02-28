import React, { useState } from 'react'
import OverviewActivity from './OverviewActivity'
import AddActivityForm from "./AddActivityForm";
import UpdateActivityForm from "./UpdateActivityForm";
import axios from "../../services/axios.instance";

const App = () => {
    const [ currentActivity, setCurrentActivity ] = useState({
        activityName: "",
        nameTrainer: "",
        address: "",
        zipcode: "",
        city: "",
        date: "",
        time: ""})
    const [ editing, setEditing ] = useState(false)
    const [post, setPost] = useState([]);

    const deleteActivity = activityId => {
        return axios.delete(`/activity/trainer/${activityId}`, currentActivity.activityId)
            .then(response => {
                const del = post.filter(activity => activityId !== activity.activityId)
                setPost(del)
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    const editRow = (activity) => {
        setEditing(true)
        setCurrentActivity({
            activityName: activity.activityName,
            nameTrainer: activity.nameTrainer,
            address: activity.address,
            zipcode: activity.zipcode,
            city: activity.city,
            date: activity.date,
            time: activity.time
        })

    }



    return (
        <div >
            <div className="form">
                <h3>
                    Hier kunt u een training plaatsen en ziet u een overzicht van uw sportactiviteiten.
                </h3>
                <div >
                    {editing ? (
                        <div className="form">
                            <h2>Wijzig Training</h2>
                            <UpdateActivityForm
                                setEditing={setEditing}
                                currentActivity={currentActivity}
                            />
                        </div>
                    ) : (
                        <div className="form">
                            <h2>Voeg training toe</h2>
                            <AddActivityForm currentActivity={currentActivity} />
                        </div>
                    )}
                </div>
                <div className="form">
                    <h2>Overzicht Activiteiten</h2>
                    <OverviewActivity currentActivity={currentActivity}
                                      editRow={editRow} deleteActivity={deleteActivity} />
                </div>
            </div>
        </div>
    )
}


export default App