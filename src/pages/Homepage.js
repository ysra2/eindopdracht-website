import React from 'react';
import {Link} from "react-router-dom";

function Homepage() {
    return(
        <div >
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </header>
        </div>
    )

}
 export default Homepage;