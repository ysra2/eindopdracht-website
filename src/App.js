import React from "react";
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
import DeleteActivity from "./pages/AdminPage";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";

//De private Routes werkt helaas niet naar behoren. In deze situatie is er gekeken om een privateroute te maken,
//dat was zeer complex. Vandaar dat ervoor is gekozen om render te gebruiken bij elke de Trainer/Sporter/Admin pagina's
//Dat is helaas ook niet gelukt alleen geeft het wel de melding 403: "Forbidden" weer vanuit te backend.

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

                    {/*<Route exact path="/trainer"*/}
                    {/*       render={() => {*/}
                    {/*           return Roles ?*/}
                    {/*               <TrainerPage/> : <Redirect to="/"/>*/}
                    {/*       }}*/}
                    {/*/>*/}
                    {/*<Route exact path="/sporter" render={() => {*/}
                    {/*    return Roles ?*/}
                    {/*        <SporterPage/> : <Redirect to="/"/>*/}
                    {/*}}*/}
                    {/*/>*/}
                    {/*<Route exact path="/admin"*/}
                    {/*       render={() => {*/}
                    {/*           return Roles ?*/}
                    {/*               <AdminPage/> : <Redirect to="/" />*/}
                    {/*       }}*/}
                    {/*/>*/}

                    <Route exact path="/trainer" component={TrainerPage}/>
                    <Route exact path="/sporter" component={SporterPage}/>
                    <Route exact path="/admin" component={AdminPage}/>
                    <Route path="/activiteiten" component={ListActivity}/>
                    <Route path="delete" component={DeleteActivity}/>
                    <Route path="*" component={() => "404 NOT FOUND"}/>
                </Switch>
            </Router>
        </>
    );

}

export default App;
