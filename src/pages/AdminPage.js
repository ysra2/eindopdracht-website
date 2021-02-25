import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Maps from "../components/map/Maps";
import axios from "../services/axios.instance";
import AcceptActivity from "../components/AcceptActivity";

export default function AdminPage() {

    return (

        <>
            <div className="form">
                <h4>
                    Hier vind u een overzicht van alle sporter en trainer accounts.
                </h4>
                <div>
                    <DeleteTrainer/>
                </div>
                <div>
                    <DeleteSporter/>
                </div>
            </div>

        </>
    )

}

const DeleteTrainer = () =>{
    const [ trainer, setTrainer ] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: ""})
    const [account, setAccount] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        axios.get(`/user_sports/trainer`)
            .then((response) =>{
                setAccount(response.data)
                setTrainer(response.data)
                setLoading(false);
            })
            .catch(error =>{
                console.log(error)
            });
    },[])


    const deleteTrainerAccount = id => {
        return axios.delete(`/user_sports/admin/trainer/${id}`, trainer.id)
            .then(response => {
                const del = account.filter(trainer => id !== trainer.id)
                setAccount(del)
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    return (
        <div>
            {loading &&
            <p>Loading...</p>}
            {!loading &&
            <div className="form">
                <h2>Trainer Accounts</h2>
                <div className="form-page">
                    {account.map((activity, i) =>(
                        <div className="form"
                             key={i} >
                            <div>
                                <div>{trainer.id}</div>
                                <div>
                                    <h4>Voornaam: </h4>
                                    {trainer.firstname}
                                </div>
                                <div>
                                    <h4>Achternaam: </h4>
                                    {trainer.lastname}
                                </div>
                                <div>
                                    <h4>Gebruikersnaam: </h4>
                                    {trainer.username}
                                </div>
                                <div>
                                    <h4>Email adres: </h4>
                                    {trainer.email}
                                </div>
                                <br/>
                                <button
                                    onClick={() => deleteTrainerAccount(trainer.id)}
                                >Verwijder Traineraccount</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

const DeleteSporter = () =>{
    const [ sporter, setSporter ] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: ""})
    const [account, setAccount] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        axios.get(`/user_sports/sporter`)
            .then((response) =>{
                setAccount(response.data)
                setSporter(response.data)
                setLoading(false);
            })
            .catch(error =>{
                console.log(error)
            });
    },[])

    const deleteSporterAccount = id => {
        return axios.delete(`/user_sports/admin/sporter/${id}`, sporter.id)
            .then(response => {
                const del = account.filter(sporter => id !== sporter.id)
                setAccount(del)
                console.log(response);
            }).catch(e => (
                console.log(e)
            ))
    }

    return (
        <div>
            {loading &&
            <p>Loading...</p>}
            {!loading &&
            <div className="form">
                <h2>Sporter Accounts</h2>
                <div className="form-page">
                    {account.map((sporter, i) =>(
                        <div className="form"
                             key={i} >
                            <div>
                                <div>{sporter.id}</div>
                                <div>
                                    <h4>Voornaam: </h4>
                                    {sporter.firstname}
                                </div>
                                <div>
                                    <h4>Achternaam: </h4>
                                    {sporter.lastname}
                                </div>
                                <div>
                                    <h4>Gebruikersnaam: </h4>
                                    {sporter.username}
                                </div>
                                <div>
                                    <h4>Email adres: </h4>
                                    {sporter.email}
                                </div>
                                <br/>
                                <button
                                    onClick={() => deleteSporterAccount(sporter.id)}
                                >Verwijder Sporteraccount</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}