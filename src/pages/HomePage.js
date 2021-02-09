import React from 'react';
import trainer from "../components/assets/tennis.jpg"
import sporter from "../components/assets/boksen.jpg"


function HomePage() {

    return(
        <div className="row">
            <div className="column">
                <img src={sporter} alt="sporter" className="size" />
                {/*<label>Trainer</label>*/}
            </div>
            <div className="column">
                <img src={trainer} alt="trainer" className="size"/>
                {/*<label>Sporter</label>*/}
            </div>
        </div>
    )
}
export default HomePage;