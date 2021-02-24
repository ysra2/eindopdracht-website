import React, { useState } from 'react'
import OverviewActivity from './OverviewActivity'
import AddActivityForm from "./AddActivityForm";
import UpdateActivityForm from "./UpdateActivityForm";
import authHeader from "../../services/auth-header";
import axios from "../../services/axios.instance";
import Maps from "../map/Maps";

const App = () => {
    const [ activity, setActivity ] = useState("")
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

    // CRUD operations

    const deleteActivity = (activityId) => {
        return axios.delete(`/activity/${activityId}`, activity.activityId)
            .then(response => {
                const del = post.filter(activity => activityId !== activity.activityId)
                setPost(del)
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    const updateActivity = (activityId, updatedActivity) => {
        setEditing(false)
        return axios.put(`/activity/${updateActivity.activityId}`,
            {updateActivity})
            .then(response => {
                setPost(post.map(activity => (activity.activityId === activityId ? updatedActivity : activity)))
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    const editRow = user => {
        setEditing(true)
        setActivity({
            activityId: activity.activityId,
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
                                editing={editing}
                                setEditing={setEditing}
                                currentActivity={currentActivity}
                                updateActivity={updateActivity}
                            />
                        </div>
                    ) : (
                        <div className="form">
                            <h2>Voeg training toe</h2>
                            <AddActivityForm />
                        </div>
                    )}
                </div>
                <div className="form">
                    <h2>Overzicht Activiteiten</h2>
                    <OverviewActivity activity={activity} editRow={editRow} deleteActivity={deleteActivity} />
                </div>
            </div>
        </div>
    )
}


export default App