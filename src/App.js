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
import SporterPage from "./pages/SporterPage";
import ListActivity from "./components/ListActivity";
import AdminPage from "./pages/AdminPage";
import AcceptedListSporter from "./components/AcceptedListSporter";
import PrivateRoute from "./services/PrivateRoute";

function App () {

    return (
      <>
          <NavBar/>
          <Router>
              <Switch>
                  <Route exact path="/"><HomePage/></Route>
                  <PrivateRoute  path="/home"><HomePage/></PrivateRoute>
                  <Route exact path="/registreer/trainer" component={RegisterTrainer}/>
                  <Route exact path="/registreer/sporter" component={RegisterSporter}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/profile" component={Profile}/>
                  <PrivateRoute exact path="/trainer"><TrainerPage/></PrivateRoute>
                  <PrivateRoute exact path="/sporter"><SporterPage/></PrivateRoute>
                  <PrivateRoute exact path="/admin"><AdminPage/></PrivateRoute>
                  <PrivateRoute exact path="/activiteiten" component={ListActivity}/>
                  <PrivateRoute exact path="/sportactiviteiten" component={AcceptedListSporter}/>
                  <Route path="*" component={() => "404 NOT FOUND"}/>
              </Switch>
          </Router>
      </>
  );

}

export default App;
