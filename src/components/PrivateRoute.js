import React, {useEffect, useState} from "react";
import {BrowserRouter as Route, Redirect} from "react-router-dom";

export default function PrivateRoute(props) {
    const [state, setState] = useState("")

    useEffect(() => {

        switch (props.condition) {
            case "ROLE_TRAINER":
                return setState(
                    props.roles === "trainer" ? (
                        <Route {...props}
                        />
                    ) : (
                        <Redirect to="/"/>
                    )
                );
            case "ROLE_SPORTER":
                return setState(
                    props.roles === "sporter" ? (
                        <Route {...props}
                        />
                    ) : (
                        <Redirect to="/"/>
                    )
                );

            case "ROLE_ADMIN":
                return setState(
                    props.roles === "admin" ? (
                        <Route {...props}
                               to="/admin"
                        />
                    ) : (
                        <Redirect to="/"/>
                    )
                );
            default:
                return setState(<Route {...props}/>)
        }
    }, [props.condition])

    return <>{state}</>
}