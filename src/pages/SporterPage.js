import React from "react";
import {Link} from "react-router-dom";
import Maps from "../components/Maps";

export default function SporterPage() {
    return (
        <div >
            <div >
                <nav >
                    <ul>
                        <li><Link to="/list">Activiteiten</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="map">
                <Maps/>
            </div>
        </div>
    )

}