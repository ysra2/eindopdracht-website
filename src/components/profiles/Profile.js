import React from "react";
import AuthService from "../../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return(
        <div className="form-page">
            <div className="form">
                <h3>
                    Profile:
                    <strong>{currentUser.firstName}</strong>

                </h3>
            </div>
            <p>
                <strong>Token:</strong>{currentUser.accessToken.substring(0,20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length -20)}
            </p>
            <p>
                <strong>Id:</strong>{currentUser.id}
            </p>
            <p>
                <strong>Email:</strong>{currentUser.username}
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