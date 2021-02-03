import axios from "./axios.instance";

const registerSporter = async (firstName, lastName, username, email, password) => {
    return await axios
        .post(  "auth/signup", {
            firstName,
            lastName,
            username,
            email,
            password,
            role: ["sporter"]

    });
};

const registerTrainer = async (firstName, lastName, username, email, password) => {
    return await axios
        .post( "auth/signup", {
        firstName,
        lastName,
        username,
        email,
        password,
        role: ["trainer"]

    });
};

const login = async (username, password) => {
    return await axios
        .post("auth/signin", {
            username,
            password,
        })
        .then((result) => {
            if (result.data.accessToken) {
                localStorage.setItem("user_id", JSON.stringify(result.data));
            }
            return result.data;
        });
};

const logout = () => {
    localStorage.removeItem("user_id");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user_id"));
};

const getCurrentActivity = () => {
    return JSON.parse(localStorage.getItem("activity_id"));
};


export default {
    registerTrainer,
    registerSporter,
    login,
    logout,
    getCurrentUser,
    getCurrentActivity
};