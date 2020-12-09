import React from "react";
import AuthService from "../../services/auth.service";

const TrainerProfile = () => {
    const currentTrainer = AuthService.getCurrentTrainer();

    return(
        <div>
            <header>
                <h3>
                    <strong>{currentTrainer.usernameT}</strong>
                </h3>
            </header>
            <p>
                <strong>Token:</strong>{currentTrainer.accessToken.substring(0,20)} ...{" "}
                {currentTrainer.accessToken.substr(currentTrainer.accessToken.length -20)}
            </p>
            <p>
                <strong>Id:</strong>{currentTrainer.id}
            </p>
            <p>
                <strong>Email:</strong>{currentTrainer.emailT}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentTrainer.roles &&
                currentTrainer.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    )
}

export default TrainerProfile;