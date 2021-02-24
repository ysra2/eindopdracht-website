import React, {useEffect, useState} from "react";
import axios from "../services/axios.instance"
import authActivity from "../services/auth-activity";

function AcceptActivity(){
    // const [accept, setAccept] = useState("accept");
    //
    // function acceptActivity(data) {
    //     setAccept("accept")
    //     const activityId = authActivity().activityId
    //     const response =  axios.post(`/sporter/accept/${activityId}`, {
    //         activityId: data.activityId
    //     })
    //     setAccept("Success")
    //     console.log(response)
    // }

    return (
        <div>
            <button>Meld je aan</button>
        </div>
    )

}

export default AcceptActivity;
