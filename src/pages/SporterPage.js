import React from "react";
import {Link} from "react-router-dom";
import Maps from "../components/map/Maps";

export default function SporterPage() {
    return (
        <>
            <div className="form">
                <h4>
                    Hier vind u een overzicht van alle sportactiviteiten in Eindhoven
                </h4>
                <Link to="/list">
                    <button>Bekijk Activiteiten</button>
                </Link>


                <div>
                <h5 >
                    Door op de Marker van de Kaart te drukken ziet u welke sportactiviteit plaatsvind en waar het gelokaliseerd is.
                    Kunt vanuit de kaart meteen aanmelden voor een sportactiviteit.

                </h5>
                    <Maps/>
                </div>
            </div>

        </>
    )

}