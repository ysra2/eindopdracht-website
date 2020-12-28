import React from 'react';
import RegisterForm from "../RegisterForm";
import Search from "../Search";
import Trainer from "./Trainer";
import {Link} from "react-router-dom";
// import Maps from "../Maps";

function Homepage() {
    return(
        <div >
            <header>
                <nav>
                    <button href="/login">Login</button>
                    <Search/>
                </nav>
            </header>
            <div className="row">
            <div className="colum">
                <h3>Sporter</h3>
                <RegisterForm/>
            </div>
            <div className="colum">
                <Link to="/trainer" onClick={Trainer}><h3>Trainer</h3></Link>


            </div>
            </div>
            {/*<div>*/}
            {/*<Maps/>*/}
            {/*</div>*/}
            <footer/>
        </div>
    )

}
 export default Homepage;