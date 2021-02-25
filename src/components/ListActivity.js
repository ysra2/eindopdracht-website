import React, {useEffect, useState} from "react";
import axios from "../services/axios.instance"
import AcceptActivity from "./AcceptActivity";

export default function ListActivity() {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filterActivities, setFilterActivities] = useState([])

    useEffect(() =>{
        setLoading(true);
        axios.get(`/activity`)
            .then((response) =>{
                setActivity(response.data)
                setLoading(false);
            })
            .catch(error =>{
                console.log(error)
            });
    },[])

    useEffect(() =>{
        setFilterActivities(
            activity.filter((activity) =>
            activity.activityName.toLowerCase().includes(search.toLowerCase())
        )
        );
    },[search, activity])

    return (
        <div>
            {loading &&
            <p>Loading...</p>}
            {!loading &&
            <div className="form">
                <h2>Activiteiten</h2>
                <div className="search-box">
                    <input type="text" placeholder="Zoek een activiteit"
                           onChange={(event) => setSearch(event.target.value)}/>
                </div>
                <div> Hier ziet u een overzicht van alle activiteiten in Eindhoven.
                    Meld je aan voor één of meerdere activiteiten
                </div>

                <div className="form-page">
                    {filterActivities.map((activity, i) =>(
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
                                <AcceptActivity/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}
