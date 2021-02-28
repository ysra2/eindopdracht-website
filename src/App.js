import React, {useState, useEffect} from "react";
import './styles/style.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import RegisterTrainer from "./components/register/RegisterTrainer";
import RegisterSporter from "./components/register/RegisterSporter";
import Login from "./components/login/Login";
import Profile from "./components/profiles/Profile";
import TrainerPage from "./pages/TrainerPage";
import HomePage from "./pages/HomePage";
import SporterPage from "./pages/SporterPage";
import ListActivity from "./components/ListActivity";
import {AuthContext} from "./context/AuthContext";
import AcceptedListSporter from "./components/AcceptedListSporter";
import DeleteActivity from "./pages/AdminPage";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import authHeader from "./services/auth-header";



// function Trainer() {
//     const account = localStorage.getItem('user_id')
//     if (account && account.accessToken[0]) {
//         return {
//             Authorization: 'Bearer ' + account.accessToken,
//         };
//     }
//     console.log(trainer)
// }
//
//
// function Sporter() {
//     const sporter = localStorage.getItem('user_id')
//     if (sporter && sporter.roles[0]) {
//         return true;
//     }
// }

function Roles() {

    const role = localStorage.getItem('user_id')
    if (role && role.roles[0]) {
        return{

            roles: role.roles
        }
    }
}

function App() {

    return (
        <>
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/"><HomePage/></Route>
                    <Route path="/registreer/trainer" component={RegisterTrainer}/>
                    <Route path="/registreer/sporter" component={RegisterSporter}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route exact path="/trainer"
                           render={() => {
                               return Roles ?
                                   <TrainerPage/> : <Redirect to="/"/>
                           }}
                    />
                    <Route exact path="/sporter" render={() => {
                        return Roles ?
                            <SporterPage/> : <Redirect to="/"/>
                    }}
                    />
                    <Route exact path="/admin"
                           render={() => {
                               return Roles ?
                                   <AdminPage/> : <Redirect to="/" />
                           }}
                    />
                    <Route path="/activiteiten" component={ListActivity}/>
                    <Route path="/sportactiviteiten" component={AcceptedListSporter}/>
                    <Route path="delete" component={DeleteActivity}/>
                    <Route path="*" component={() => "404 NOT FOUND"}/>
                </Switch>
            </Router>
        </>
    );

}

export default App;
