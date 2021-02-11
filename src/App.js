import React, {useEffect, useState} from "react";
import './styles/style.scss';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RegisterTrainer from "./components/register/RegisterTrainer";
import RegisterSporter from "./components/register/RegisterSporter";
import Login from "./components/login/Login";
import Profile from "./components/profiles/Profile";
import TrainerPage from "./pages/TrainerPage";
import AddActivity from "./components/activity/AddActivity";
import ActivityProfile from "./components/activity/ActivityProfile";
import UpdateActivity from "./components/activity/UpdateActivity";
import HomePage from "./pages/HomePage";
import Maps from "./components/Maps";
import ProfilePT from "./components/profiles/ProfilePT";
import LoginPT from "./components/login/LoginPT";

function App () {

    return (
      <div >
          <NavBar/>
          <Router>
              <Switch>
                  <Route exact path="/"><HomePage/></Route>
                  <Route path="/registreer/trainer" component={RegisterTrainer}/>
                  <Route path="/registreer/sporter" component={RegisterSporter}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/login/trainer" component={LoginPT}/>
                  <Route path="/profile/sporter" component={Profile}/>
                  <Route path="/profile" component={ProfilePT}/>
                  <Route path="/add" component={AddActivity}/>
                  <Route path="/activiteit" component={ActivityProfile}/>
                  <Route path="/update" component={UpdateActivity}/>
                  <Route path="/trainer"><TrainerPage/></Route>
                  <Route path="/map"><Maps/></Route>
              </Switch>
          </Router>
      </div>
  );

}

export default App;
