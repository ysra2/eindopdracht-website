import React from "react";
import './styles/style.scss';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import RegisterTrainer from "./components/register/RegisterTrainer";
import RegisterSporter from "./components/register/RegisterSporter";
import Login from "./components/login/Login";
import Profile from "./components/profiles/Profile";
import TrainerPage from "./pages/TrainerPage";
import HomePage from "./pages/HomePage";
import Maps from "./components/map/Maps";
import SporterPage from "./pages/SporterPage";
import ListActivity from "./components/ListActivity";
import {AuthContext, roles} from "./context/AuthContext";
import AdminPage from "./pages/AdminPage";
import AcceptedListSporter from "./components/AcceptedListSporter";
import PrivateRoute from "./components/PrivateRoute";

function App() {

    return (
        <AuthContext.Provider>
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/"><HomePage/></Route>

                    <Route path="/registreer/trainer" component={RegisterTrainer}/>
                    <Route path="/registreer/sporter" component={RegisterSporter}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>

                    <PrivateRoute condition="admin" exact path="/admin"><AdminPage/></PrivateRoute>
                    <PrivateRoute condition="trainer" exact path="/trainer"><TrainerPage/></PrivateRoute>
                    <PrivateRoute condition="sporter" exact path="/sporter"><SporterPage/></PrivateRoute>
                    <PrivateRoute condition="sporter" path="/activiteiten"><ListActivity/></PrivateRoute>
                    <PrivateRoute condition="sporter" path="/sportactiviteiten"><AcceptedListSporter/></PrivateRoute>

                    <Route path="*" component={() => "404 NOT FOUND"}/>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );

}

export default App;
