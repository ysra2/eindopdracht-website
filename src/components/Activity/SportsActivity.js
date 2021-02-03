import React from "react";

export default function SportsActivity({activity}) {
    return(
        <>
            {activity.map(sport=>
                <div key={sport}>{sport.activities}</div>)}
        </>
    )
}
