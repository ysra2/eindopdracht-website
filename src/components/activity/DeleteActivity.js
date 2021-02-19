import React, {useEffect, useState} from "react";
import axios from "../../services/axios.instance"
import authActivity from "../../services/auth-activity";

const DeleteActivity = (props) => {

    // const [deleteActivity, setDeleteActivity] = useState([]);

    const deleteSubmit = () => {
        const activityId = authActivity().activityId
        axios.delete(`/activity/${activityId}`)
            .then(response => {
                localStorage.removeItem("activity_id")
                console.log(response.data);
            }).then(
            // props.history.push("/trainer")
        ).catch(e => (
            console.log(e)
        ))
    }

    return(
        <>
            <div>
                <button onClick={deleteSubmit}>Verwijder Activiteit</button>
            </div>
        </>
    )

}

export default DeleteActivity;