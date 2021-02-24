import React from "react";
import axios from "../services/axios.instance"
import authActivity from "../services/auth-activity";

function DeclineActivity(){
    // const [decline, setDecline] = useState("decline");
    //
    // useEffect( (data) =>{
    //     setDecline("decline")
    //     const activityId = authActivity().activityId
    //     const response =  axios.delete(`/sporter/decline/${activityId}`)
    //     setDecline("Success")
    //     console.log(response)
    // },[])

    return (
        <div>
            <button>Annuleer Sportactiviteit</button>
        </div>
    )

}

export default DeclineActivity;
