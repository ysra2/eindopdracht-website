import React from "react";
import './styles/style.scss';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RegisterTrainer from "./components/register/RegisterTrainer";
import RegisterSporter from "./components/register/RegisterSporter";
import Login from "./components/login/Login";
import Profile from "./components/profiles/Profile";
import TrainerPage from "./pages/TrainerPage";
import HomePage from "./pages/HomePage";
import Maps from "./components/map/Maps";
import ProfilePT from "./components/profiles/ProfilePT";
import LoginPT from "./components/login/LoginPT";
import SporterPage from "./pages/SporterPage";
import ListActivity from "./components/ListActivity";
import {AuthContext} from "./context/AuthContext";
import Footer from "./components/Footer";

function App () {

    return (
      <AuthContext.Provider>
          <NavBar/>
          <Router>
              <Switch>
                  <Route exact path="/"><HomePage/></Route>
                  <Route path="/registreer/trainer" component={RegisterTrainer}/>
                  <Route path="/registreer/sporter" component={RegisterSporter}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/login/trainer" component={LoginPT}/>
                  <Route path="/profile/sporter" component={Profile}/>
                  <Route path="/profile/trainer" component={ProfilePT}/>
                  <Route path="/trainer"><TrainerPage/></Route>
                  <Route path="/sporter"><SporterPage/></Route>
                  <Route path="/map"><Maps/></Route>
                  <Route path="/list"><ListActivity/></Route>
              </Switch>
          </Router>
      </AuthContext.Provider>
  );

}

export default App;
