import React from "react";
import './styles/style.sass';
import Homepage from "./pages/Homepage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegisterTrainer from "./components/Register/RegisterTrainer";
import RegisterSporter from "./components/Register/RegisterSporter";
import Login from "./components/Login";
import Profile from "./components/Profile";
import TrainerPage from "./pages/TrainerPage";
import AddActivity from "./components/Activity/AddActivity";
import UpdateActivity from "./components/Activity/UpdateActivity";
import Activity from "./components/Activity/Activity";



function App () {


    return (
      <div >
          <Homepage/>
          <Router>
              <Switch>
                  <Route path="/registreer/trainer" component={RegisterTrainer}/>
                  <Route path="/registreer/sporter" component={RegisterSporter}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/trainer" component={TrainerPage}/>
                  <Route path ="/add" component={AddActivity}/>
                  <Route path="/update" component={UpdateActivity}/>
                  <Route path="/activiteit" component={Activity}/>
              </Switch>
          </Router>
      </div>
  );

}

export default App;
