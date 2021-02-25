import React from "react";
import {BrowserRouter as Route, Redirect} from "react-router-dom";
import AuthHeader from "../services/auth-header"

export default function PrivateRoute({ children, ...rest }) {

    return (
        <Route {...rest} render={({ location }) => {
            return AuthHeader().Authorization === true
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }}
                />
        }} />
    )
}
