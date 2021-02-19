import React, {useEffect, useState} from 'react';
import UpdateActivity from "../components/activity/UpdateActivity";
import AddActivity from "../components/activity/AddActivity";
import Maps from "../components/Maps";
import {Link} from "react-router-dom";
import ListActivity from "../components/activity/ListActivity";

function TrainerPage() {
    return(
        <div >
            <div >
                <nav >
                    <ul>
                        <li><Link to="/post">Activiteiten</Link></li>
                        <li><Link to="/update">Wijzig Training</Link></li>
                    </ul>
                </nav>
            </div>
            <div >
                <AddActivity/>
            </div>
            <div>
                <Maps/>
            </div>
            {/*<AddActivity/>*/}
        </div>
    )
}
export default TrainerPage;