import React, {useEffect, useState} from 'react';
import logo from "./assets/Logo.png"
import {Link} from "react-router-dom";
import AuthService from "../services/auth.service";
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentTrainer, setCurrentTrainer] = useState(false);
    const [currentSporter, setCurrentSporter] = useState(false);

    useEffect(()=>{
        const user = AuthService.getCurrentUser();
        if (user){
            setCurrentUser(user)
        }
        const trainer = AuthService.getCurrentTrainer();
        if(trainer){
            setCurrentTrainer(trainer)
        }

        const sporter = AuthService.getCurrentSporter();
        if(sporter){
            setCurrentSporter(sporter)
        }

    }, [])

    const logOut = () =>{
        AuthService.logout()
    }


    return(
        <AuthContext.Provider>
            <header className="header">
                <nav className="navbar">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkBtn" >
                            <div className="menu-icon"/>
                            <div className="menu-icon"/>
                            <div className="menu-icon"/>
                    </label>
                {/*//Hier komt nog een image dat hetzelfde is als een home button*/}
                    <img src={logo} alt="trainfast" className="logo"/>
                    <div>
                    <ul>
                        <li><a href="/" className="active">Home</a></li>

                        {currentUser ? (
                            <div>
                                <li>
                                    <a href="/login/trainer" onClick={logOut}>
                                        Logout
                                    </a>
                                </li>
                            </div>
                        ):(
                                <li><a href="/login/trainer">Trainer</a></li>
                        )}

                    </ul>
                    </div>
                </nav>
            </header>
        </AuthContext.Provider>
    )

}
 export default NavBar;