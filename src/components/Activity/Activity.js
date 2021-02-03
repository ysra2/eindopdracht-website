import React from "react"
import {Link} from "react-router-dom";
import AuthService from "../../services/auth.service";

const Activity = () => {

    const currentActivity = AuthService.getCurrentActivity()

    return(
        <div>
        <h3>
                Sportactiviteiten
            {/*{currentActivity.id}*/}
        </h3>
            <p>
                <strong>
                    ActivityId:
                </strong>
                {currentActivity.activityId}
            </p>
        <p>
            <strong>
                Activiteit:
            </strong>
            {currentActivity.activityName}
        </p>
        <p>
            <strong>
                Naam Trainer:
            </strong>
            {currentActivity.nameTrainer}
        </p>
        <p>
            <strong>
                Locatie:
            </strong>{currentActivity.location}
        </p>
        <p>
            <strong>
                Tijd:
            </strong>{currentActivity.time}
        </p>
        <p>
            <strong>
                Datum:
            </strong>{currentActivity.date}
        </p>
        <button>
            <Link to="/update">Wijzig</Link>
        </button>
            <button>
                <Link to="/trainer">Terug</Link>
            </button>
    </div>
    );
};

export default Activity;