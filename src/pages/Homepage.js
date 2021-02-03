import React from 'react';
import {Link} from "react-router-dom";
import Maps from "../components/Maps";

function Homepage() {
    return(
        <div >
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </header>
            <Maps/>
        </div>
    )

}
 export default Homepage;