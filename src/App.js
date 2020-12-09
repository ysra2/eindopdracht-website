import React from "react";
import './styles/style.sass';
import Homepage from "./components/Homepage";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SporterProfile from "./components/Sporter/SporterProfile";
import RegisterSporter from "./components/Sporter/RegisterSporter";
import LoginSporter from "./components/Sporter/LoginSporter";
import RegisterTrainer from "./components/Trainer/RegisterTrainer";
import LoginTrainer from "./components/Trainer/LoginTrainer";
import TrainerProfile from "./components/Trainer/TrainerProfile";

function App () {

      return (
      <div >
          <Homepage/>
          <Router>
              <Switch>
                  <Route path="/sign-up" component={RegisterSporter}/>
                  <Route path="/login" component={LoginSporter}/>
                  <Route path="/profile/sporter" component={SporterProfile}/>
                  <Route path="/sign-up/trainer" component={RegisterTrainer}/>
                  <Route path="/login/trainer" component={LoginTrainer}/>
                  <Route path="/profile/trainer" component={TrainerProfile}/>
              </Switch>
          </Router>



      </div>
  );

}

export default App;
