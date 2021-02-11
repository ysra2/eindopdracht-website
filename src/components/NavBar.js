import React, {useEffect, useState} from 'react';
import logo from "./assets/Logo.png"
import {Link} from "react-router-dom";
import AuthService from "../services/auth.service";

function NavBar() {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(()=>{
        const user = AuthService.getCurrentUser();
            setCurrentUser(user)
    }, [])

    const logOut = () =>{
        AuthService.logout()
    }


    return(
        <div >
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
                    <ul>
                        <li><a href="/" className="active">Home</a></li>
                        {currentUser && (
                            <li>
                                <Link to={"/trainer"}>
                                    Trainer
                                </Link>
                            </li>
                        )}

                        {currentUser ? (
                            <div>
                                <li>
                                    <Link to={"/profile"}>
                                        {currentUser.username}
                                    </Link>
                                </li>
                                <li>
                                    <a href="/login" onClick={logOut}>
                                        Logout
                                    </a>
                                </li>
                            </div>
                        ):(
                                <li><a href="/login">Login</a></li>
                        )}

                    </ul>
                </nav>
            </header>
        </div>
    )

}
 export default NavBar;