import React from "react";
import './styles/style.sass';
import Homepage from "./components/Homepage";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App () {

    return (
      <div >
          <Homepage/>
          <Router>
              <Switch>
                  <Route path="/registreer" component={RegisterForm}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/profile" component={Profile}/>
              </Switch>
          </Router>
      </div>
  );

}

export default App;
