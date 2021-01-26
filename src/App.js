import React from "react";
import './styles/style.sass';
import Homepage from "./pages/Homepage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegisterTrainer from "./components/Register/RegisterTrainer";
import RegisterSporter from "./components/Register/RegisterSporter";
import Login from "./components/Login";
import Profile from "./components/Profile";
import TrainerPage from "./pages/TrainerPage";



function App () {


    return (
      <div >
          <Homepage/>
          <nav>

          </nav>
          <div></div>
          <Router>
              <Switch>
                  <Route path="/registreer/trainer" component={RegisterTrainer}/>
                  <Route path="/registreer/sporter" component={RegisterSporter}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/trainer">
                      <TrainerPage/>
                  </Route>

              </Switch>
          </Router>
      </div>
  );

}

export default App;
