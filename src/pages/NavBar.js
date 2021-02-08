import React from 'react';

function NavBar() {
    return(
        <div >
            <header>
                    <input type="checkbox" id="check"/>
                    <label for="check" className="checkBtn" >
                            <div className="menu-icon"/>
                            <div className="menu-icon"/>
                            <div className="menu-icon"/>
                    </label>
                <label className="nav-logo" >
                    TRAIN FAST
                </label>
                <ul>
                    {/*//Hier komt nog een image dat hetzelfde is als een home button*/}
                    <div className="nav-logo">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                    </div>
                </ul>
            </header>
        </div>
    )

}
 export default NavBar;