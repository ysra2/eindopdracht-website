import React from "react";
import './styles/style.sass';
import Homepage from "./components/Homepage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegisterTrainer from "./components/RegisterTrainer";
import RegisterSporter from "./components/RegisterSporter";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App () {


    return (
      <div >
          <Homepage/>
          <nav>

          </nav>
          <Router>
              <Switch>
                  <Route path="/registreer/trainer" component={RegisterTrainer}/>
                  <Route path="/registreer/sporter" component={RegisterSporter}/>
                  <Route path="/login" component={Login}/>
                  <Route exact path="/profile" component={Profile}/>
              </Switch>
          </Router>
      </div>
  );

}

export default App;
