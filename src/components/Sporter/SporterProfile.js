import React from "react";
import AuthService from "../../services/auth.service";

const SporterProfile = () => {
    const currentSporter = AuthService.getCurrentSporter();

    return(
        <div>
            <header>
                <h3>
                    <strong>{currentSporter.username}</strong>
                </h3>
            </header>
            <p>
                <strong>Token:</strong>{currentSporter.accessToken.substring(0,20)} ...{" "}
                {currentSporter.accessToken.substr(currentSporter.accessToken.length -20)}
            </p>
            <p>
                <strong>Id:</strong>{currentSporter.id}
            </p>
            <p>
                <strong>Email:</strong>{currentSporter.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentSporter.roles &&
                currentSporter.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    )
}

export default SporterProfile;