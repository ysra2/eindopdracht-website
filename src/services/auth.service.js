import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (firstName, lastName, username, email, password) => {
    return await axios.post(API_URL + "signup", {
        firstName,
        lastName,
        username,
        email,
        password,
    });
};

const login = async (username, password) => {
    return await axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((result) => {
            if (result.data.accessToken) {
                localStorage.setItem("token", JSON.stringify(result.data.accessToken));
                localStorage.setItem("user_id", JSON.stringify(result.data.id));
            }

            return result.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getCurrentTrainer = () => {
    return JSON.parse(localStorage.getItem("trainer"));
};

const getCurrentSporter = () => {
    return JSON.parse(localStorage.getItem("sporter"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
    getCurrentTrainer,
    getCurrentSporter
};