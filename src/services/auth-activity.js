import React, {useState, useEffect} from "react";
import axios from "../services/axios.instance";
import authHeader from "../services/";

function SportsActivity() {

    const [activity, setActivity] = useState([])

    const trainerId = authHeader().id;


    useEffect(()=>{
        axios.get(`user_sports/trainer/${trainerId}`)
            .then(response =>(
                console.log(response.data["activities"]
                )))



    }, [])

    useEffect(()=>{
        axios.get(`user_sports/trainer/`)
            .then(response =>(
                setActivity(response.data
                )))

    }, [])

    return(
        <>
            {activity}
        </>
    );
}

export default SportsActivity;