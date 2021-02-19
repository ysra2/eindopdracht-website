import React, {useEffect, useState} from "react";
import axios from "../../services/axios.instance"
import AcceptActivity from "./AcceptActivity";

export default function ListActivity() {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");


    useEffect(() =>{
        axios.get(`/activity`)
            .then((response) =>{
                setActivity(response.data);
                console.log(response.data);
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

                <div>
                    <ul className="form-page">
                    {activity.map((activity, i) =>(
                        <div className="form"
                            key={i}>
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
                    </ul>
                </div>
                )}
            </div>
            }
        </div>
    )
}
