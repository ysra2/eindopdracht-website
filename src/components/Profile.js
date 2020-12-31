import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return(
        <div>
            <header>
                <h3>
                   h <strong>{currentUser.id.username}</strong>
                </h3>
            </header>
            <p>
                <strong>Token:</strong>{currentUser.id.accessToken.substring(0,20)} ...{" "}
                {currentUser.id.accessToken.substr(currentUser.id.accessToken.length -20)}
            </p>
            <p>
                <strong>Id:</strong>{currentUser.id.id}
            </p>
            <p>
                <strong>Email:</strong>{currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    );
};

export default Profile;