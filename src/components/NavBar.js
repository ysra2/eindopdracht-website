import React, {useEffect, useState} from 'react';
import logo from "./assets/Logo.png"
import AuthService from "../services/auth.service";
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const [trainerPage, setTrainerPage] = useState(false);
    const [sporterPage, setSporterPage] = useState(false);
    const [adminPage, setAdminPage] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);


    useEffect(() =>{
        const user = AuthService.getCurrentUser();
        if(user){
            setCurrentUser(user);
            setTrainerPage(user.roles.includes(`ROLE_TRAINER`));
            setSporterPage(user.roles.includes(`ROLE_SPORTER`));
            setAdminPage(user.roles.includes(`ROLE_ADMIN`));
        }
    },[])


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

                        {trainerPage &&(
                            <li><a href="/trainer">Trainer</a></li>
                        )}

                        {sporterPage &&(
                            <li><a href="/sporter">Sporter</a></li>
                        )}
                        {adminPage &&(
                            <li><a href="/admin">Admin</a></li>
                        )}

                        {currentUser &&(
                            <li/>
                        )}


                        {currentUser ? (
                            <div>
                                <li>
                                    <a href="/profile" >
                                        {currentUser.firstname}
                                    </a>
                                </li>
                                <li>
                                    <a href="/" onClick={logOut}>
                                        Logout
                                    </a>
                                </li>
                            </div>
                        ):(
                                <ul>
                                    <li><a href="/" className="active">Home</a></li>
                                    <li><a href="/login">Login</a></li>
                                </ul>
                        )}

                    </ul>
                    </div>
                </nav>
            </header>
        </AuthContext.Provider>
    )

}
 export default NavBar;