import React from "react";
import './styles/style.sass';
import Homepage from "./components/pages/Homepage";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Trainer from "./components/pages/Sporter";
import Sporter from "./components/pages/Trainer";


function App () {

      return (
      <div >

          {/*<Homepage/>*/}
          <Router>
              <Switch>
                  <Route path="/"><Homepage/></Route>
                  <Route path="/signup"><RegisterForm/></Route>
                  {/*<Route path="/signup-trainer" exact render={() => <RegisterTrainer/>}/>*/}
                  <Route path="/login" component={LoginForm}/>
                  <Route path="/trainer" component={Trainer}/>
                  <Route path="/sporter" ><Sporter/></Route>
              </Switch>
          </Router>



      </div>
  );

}

export default App;
