import React, { useState } from 'react'
import OverviewActivity from './OverviewActivity'
import AddActivityForm from "./AddActivityForm";
import UpdateActivityForm from "./UpdateActivityForm";
import axios from "../../services/axios.instance";

const App = () => {
    const [ currentActivity, setCurrentActivity ] = useState({
        activityId: null,
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

    const editRow = (activityId) => {
        setEditing(true)
        setCurrentActivity({
            activityId: currentActivity.activityId,
            activityName: currentActivity.activityName,
            nameTrainer: currentActivity.nameTrainer,
            address: currentActivity.address,
            zipcode: currentActivity.zipcode,
            city: currentActivity.city,
            date: currentActivity.date,
            time: currentActivity.time
        })
        const set = post.filter(activity => activityId !== activity.activityId)
        setPost(set)
    }

    const updateActivity = (activityId, updatedActivity) => {
        setEditing(false)
        setPost(post.map((activity) => (activity.activityId === activityId ? updatedActivity : activity)))

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
                                editing={editing}
                                setEditing={setEditing}
                                currentActivity={currentActivity}
                                updateActivity={updateActivity}
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