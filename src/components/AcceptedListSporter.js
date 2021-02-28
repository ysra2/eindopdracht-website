import React, {useEffect, useState} from 'react'
import authHeader from "../services/auth-header";
import axios from "../services/axios.instance";
import DeclineActivity from "./DeclineActivity";

const AcceptedListSporter = () => {
    const [post, setPost] = useState([]);


    //functie werkt niet omdat activiteiten niet geaccepteerd kunnen worden. Backend probleem

    useEffect(() => {
        const sporterId = authHeader().id;
        axios.get(`/user_sports/sporter/${sporterId}`)
            .then((response) => {
                setPost(response.data["activitiesTypeTrainer"]);
                console.log();
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div className="form">
                <h2>Geregistreerde Activiteiten</h2>
                <div> Hier ziet u een overzicht van alle geregistreerde activiteiten.
                </div>
                <div className="form-page">
                    {post.map((activity, i) =>(
                        <div className="form"
                             key={i} >
                            <div>
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
                                <br/>
                                <DeclineActivity/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

export default AcceptedListSporter;




