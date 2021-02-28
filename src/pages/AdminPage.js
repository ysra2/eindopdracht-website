import React, {useEffect, useState} from "react";
import axios from "../services/axios.instance";

export default function AdminPage() {
    return (
        <>
            <div>
                <DeleteAccount/>
            </div>
            <div>
                <DeleteActivity/>
            </div>
        </>
    )

}

const DeleteAccount = () => {
    const [registeredAccounts, setRegisteredAccounts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`/user_sports/accounts`)
            .then((response) => {
                setRegisteredAccounts(response.data)
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
            });
    }, [])

    const deleteRegisterAccount = id => {
        return axios.delete(`/user_sports/admin/accounts/${id}`, registeredAccounts.id)
            .then(response => {
                const del = registeredAccounts.filter(account => id !== account.userId)
                setRegisteredAccounts(del)
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    return (
        <>
            {loading &&
            <p>Loading...</p>}
            {!loading &&
            <div className="form">
                <h2>Alle Sporter en Trainer Accounts</h2>
                <div className="form-page">
                    {registeredAccounts.map((account, i) => (
                        <div className="form"
                             key={i}>
                            <div>
                                <br/>
                                <div>{account.userId}</div>
                                <div>
                                    <h4>Voornaam: </h4>
                                    {account.firstname}
                                </div>
                                <div>
                                    <h4>Achternaam: </h4>
                                    {account.lastname}
                                </div>
                                <div>
                                    <h4>Gebruikersnaam: </h4>
                                    {account.username}
                                </div>
                                <div>
                                    <h4>Email adres: </h4>
                                    {account.email}
                                </div>
                                <br/>
                                <button
                                    onClick={() => deleteRegisterAccount(account.userId)}
                                >Verwijder Account
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </>
    )
}

const DeleteActivity = () => {

    const [sportActivity, setSportActivity] = useState([]);

    useEffect(() => {
        axios.get(`/activity`)
            .then((response) => {
                setSportActivity(response.data);
                console.log();

            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    const deleteActivity = activityId => {
        return axios.delete(`/activity/trainer/${activityId}`, sportActivity.activityId)
            .then(response => {
                const del = setSportActivity.filter(account => activityId !== account.activityId)
                setSportActivity(del)
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    return (
        <>
            <div className="form-page">
                <h2>Alle activiteiten</h2>
                {sportActivity.map((activity, index) => (
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
                                    onClick={() => deleteActivity(activity.activityId)}
                                >
                                    Verwijder Activiteit
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    )
}
