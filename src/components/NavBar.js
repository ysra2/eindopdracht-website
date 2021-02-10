import React from 'react';
import logo from "./assets/Logo.png"

function NavBar() {
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
                    <div className="nav-logo">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/login/trainer">Trainer</a></li>
                        <li><a href="/login">Sporter</a></li>
                    </div>
                </ul>
                </nav>
            </header>
        </div>
    )

}
 export default NavBar;