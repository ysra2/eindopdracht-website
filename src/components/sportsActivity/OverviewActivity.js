import React, {useEffect, useState} from 'react'
import authHeader from "../../services/auth-header";
import axios from "../../services/axios.instance";

const OverviewActivity = (props) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const trainerId = authHeader().id;
        axios.get(`/user_sports/trainer/${trainerId}`)
            .then((response) => {
                setPost(response.data["activitiesAsTrainer"]);
                console.log();

            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <>
            <div className="form-page">
                {post.length > 0 ? (
                    post.map((activity, index) => (
                        <div key={index} className="form">
                            <div>{activity.activityId}</div>
                            <div>
                                <h4>Sportactiviteit: </h4>
                                {activity.activityName}
                            </div>
                            <div>
                                <h4>Naam Trainer: </h4>

                                {activity.nameTrainer}
                            </div>
                            <div>
                                <h4>Adres: </h4>
                                {activity.address}
                            </div>
                            <div>
                                <h4>Postcode: </h4>
                                {activity.zipcode}
                            </div>
                            <div>
                                <h4>Plaats: </h4>
                                {activity.city}
                            </div>
                            <div>
                                <h4>Tijd: </h4>
                                {activity.time}
                            </div>
                            <div>
                                <h4>Datum:</h4>
                                {activity.date}
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        props.editRow(activity.activityId)
                                    }}
                                >
                                    Wijzig Activiteit
                                </button>
                                <button
                                    onClick={() => props.deleteActivity(activity.activityId)}
                                >
                                    Verwijder Activiteit
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <div colSpan={3}>Geen Sportactiviteiten</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default OverviewActivity
