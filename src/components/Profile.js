import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentSporter = AuthService.getCurrentSporter();

    return(
        <div>
            <header>
                <h3>

                </h3>
            </header>
        </div>
    )
}

export default Profile;