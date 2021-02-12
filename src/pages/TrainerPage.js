import React, {useEffect, useState} from 'react';
import AddActivity from "../components/AddActivity";
import UpdateActivity from "../components/activity/UpdateActivity";
import ActivityProfile from "../components/activity/ActivityProfile";
import AuthActivity from "../services/auth-activity"
import AcceptActivity from "../components/activity/AcceptActivity";

function TrainerPage() {

    // const [display, setdisplay] = useState(undefined)

    // useEffect(() =>{
    //     const activity = AuthActivity().activityId
    //     setdisplay(activity)
    // },[])

    return(
        <div className="row-pages">
            <div className="column-pages">
                <AddActivity/>
                {/*{display ?(*/}
                {/*    <ActivityProfile/>*/}
                {/*) :(*/}
                {/*    <AddActivity/>*/}
                {/*)}*/}
            </div>
            <div className="column-pages">
                <UpdateActivity/>
            </div>
        </div>
    )
}
export default TrainerPage;