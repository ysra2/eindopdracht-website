import React, {useEffect, useState} from "react";
import './styles/style.sass';
import Homepage from "./components/pages/Homepage";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import RegisterTrainer from "./components/register/RegisterTrainer";
import AuthService from "./services/auth.service";
import BoardTrainer from "./components/roleBasedPages/BoardTrainer";
import BoardSporter from "./components/roleBasedPages/BoardSporter";
import BoardUser from "./components/roleBasedPages/BoardUser";
import BoardAdmin from "./components/roleBasedPages/BoardAdmin";
import Profile from "./components/Profile";


function App () {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);


    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user.roles.includes("ROLE_SPORTER"));
            setCurrentUser(user.roles.includes("ROLE_TRAINER"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
      <div >

          {showAdminBoard && (
              <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                      Admin Board
                  </Link>
              </li>
          )}

          {currentUser && (
              <li>
                  <Link to={"/sporter"} >
                      Sporter
                  </Link>
              </li>
          )}

          {currentUser && (
              <li>
                  <Link to={"/trainer"} >
                      Trainer
                  </Link>
              </li>
          )}

          {currentUser ? (
              <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link to={"/profile"} className="nav-link">
                          {currentUser.username}
                      </Link>
                  </li>
                  <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={logOut}>
                          LogOut
                      </a>
                  </li>
              </div>
          ) : (
              <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                          Login
                      </Link>
                  </li>

              </div>
          )}
          <Router>
              <Switch>
                  <Route path={["/", "/home"]}><Homepage/></Route>
                  <Route path="/register"><RegisterForm/></Route>
                  <Route path="/register-trainer"><RegisterTrainer/></Route>
                  <Route path="/login"><LoginForm/></Route>
                  <Route exact path="/profile"><Profile/></Route>
                  <Route path="/user" component={BoardUser} />
                  <Route path="/sporter" component={BoardSporter} />
                  <Route path="/trainer" component={BoardTrainer} />
                  <Route path="/admin" component={BoardAdmin} />
              </Switch>
          </Router>

      </div>
  );

}

export default App;
