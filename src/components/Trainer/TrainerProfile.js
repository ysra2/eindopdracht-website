import React from "react";
import AuthService from "../../services/auth.service";

const TrainerProfile = () => {
    const currentTrainer = AuthService.getCurrentUser();

    return(
        <div>
            <header>
                <h3>
                    <strong>{currentTrainer.username}</strong>
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
                <strong>Email:</strong>{currentTrainer.email}
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