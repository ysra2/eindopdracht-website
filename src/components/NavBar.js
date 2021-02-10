import React from 'react';

function NavBar() {
    return(
        <div >
            <header>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkBtn" >
                            <div className="menu-icon"/>
                            <div className="menu-icon"/>
                            <div className="menu-icon"/>
                    </label>
                {/*//Hier komt nog een image dat hetzelfde is als een home button*/}
                <label className="nav-logo" >
                    TRAIN FAST
                </label>
                <ul>
                    {/*<form>*/}
                    {/*    <input type="search" className="search-bar" />*/}
                    {/*    <button>Zoek</button>*/}
                    {/*</form>*/}
                    <div className="nav-logo">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li className="dropdown">
                            <a href={null}>Login</a>
                            <div  className="dropdown-content">
                                <a href="/login/trainer" >Trainer</a>
                                <a href="/login">Sporter</a>
                            </div>
                        </li>
                    </div>
                </ul>
            </header>
            <nav/>
        </div>
    )

}
 export default NavBar;