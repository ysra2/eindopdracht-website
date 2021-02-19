import React, {useEffect, useState} from "react";
import axios from "../../services/axios.instance"
import UpdateActivity from "./UpdateActivity";
import DeleteActivity from "./DeleteActivity";
import authHeader from "../../services/auth-header";
import {Link} from "react-router-dom";


export default function ActivityAdded() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");


    useEffect(() =>{
        // event.preventDefault();

        const trainerId = authHeader().id;
        axios.get(`/user_sports/trainer/${trainerId}`)
            .then((response) =>{
                setPost(response.data["activities"]);
                console.log(response.data["activities"]);
                setLoading(false);
            })
            .catch(error =>{
                console.log(error)
            })
    },[])



    return (
        <div>
            {loading &&
            <p>Loading...</p>}
            {!loading &&
            <div>
                <h2>Activiteiten</h2>
                <div>
                    <input type="search" placeholder="Zoek een activiteit" onChange={() => setSearch(search)}/>
                    <button type="/button" >
                        Zoek</button>
                </div>
                <div> Hier ziet u een overzicht van alle activiteiten in Eindhoven.
                    Meld je aan voor één of meerdere activiteiten
                </div>
                    <ul className="form-page">
                        <div>
                        {post?.map((activity, i) =>(
                            <div className="form"
                                 key={i}
                            >
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
                                    <button type="button">
                                        <Link to="/update">
                                            Activiteit Wijzigen
                                        </Link>
                                    </button>

                                    <br/>
                                    <DeleteActivity/>
                                </div>
                            </div>

                        ))}
                        </div>
                    </ul>
                )}
            </div>
            }
        </div>
    )
}
