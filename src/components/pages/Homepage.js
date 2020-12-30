import React, {useEffect, useState} from 'react';
import RegisterForm from "../register/RegisterForm";
import Search from "../Search";
import RegisterTrainer from "../register/RegisterTrainer";
import LoginForm from "../login/LoginForm";
import UserService from "../../services/user.service"

function Homepage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return(
        <div>
            <header>
                <nav>
                    <button href="/login">Login</button>
                    <Search/>
                    <div>{content}</div>
                </nav>
            </header>
            <div className="row">
                <div className="colum">
                <h3>Sporter</h3>
                <RegisterForm/>
                <LoginForm/>
                </div>
                <div className="colum">
                    <h3>Trainer</h3>
                    <RegisterTrainer/>
                </div>
            </div>
            {/*<div>*/}
            {/*<Maps/>*/}
            {/*</div>*/}
            <footer/>
        </div>
    )

}
 export default Homepage;