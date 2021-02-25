import React, {useEffect, useState} from 'react';
import trainer from "../components/assets/tennis.jpg"
import sporter from "../components/assets/boksen.jpg"
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import AuthService from "../services/auth.service"


export default function HomePage() {


    return(
        <div>
        <div className="row">
            <div className="column">
                <div className="container">
                    <img src={sporter} alt="sporter" className="img"/>
                    <div className="transition1">
                        <Link to="/registreer/sporter">
                            <div className="button-text">Sporter</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="container">
                    <img src={trainer} alt="trainer" className="img"/>
                    <div className="transition2">
                        <Link to="/registreer/trainer">
                            <div className="button-text" >Trainer</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    )
}
