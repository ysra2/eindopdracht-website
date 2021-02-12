import React from "react";
import Maps from "../components/Maps";
import AcceptActivity from "../components/activity/AcceptActivity";
import DeleteActivity from "../components/activity/DeleteActivity";
import ActivityProfile from "../components/activity/ActivityProfile";

export default function SporterPage() {
    return (
        <div >
            <div className="map">
                <Maps/>
            </div>
        </div>
    )

}