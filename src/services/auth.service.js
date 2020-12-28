import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (firstName, lastName, username, email, password, role) => {
    return await axios.post(API_URL + "signup", {
        firstName,
        lastName,
        username,
        email,
        password,
        role
    });
};

// const registerT = async (firstNameT, lastNameT, usernameT, emailT, passwordT) => {
//     return await axios.post(API_URL + "signup", {
//         firstNameT,
//         lastNameT,
//         usernameT,
//         emailT,
//         passwordT,
//     });
// };

const login = async (username, password) => {
    return await axios
        .post(API_URL + "signin", {
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

// const loginT = async (usernameT, passwordT) => {
//     return await axios
//         .post(API_URL + "signin", {
//             usernameT,
//             passwordT,
//         })
//         .then((result) => {
//             if (result.data.accessToken) {
//                 localStorage.setItem("user_id", JSON.stringify(result.data));
//             }
//
//             return result.data;
//         });
// };

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
    // registerT,
    // loginT,
    logout,
    getCurrentUser,
    getCurrentTrainer,
    getCurrentSporter
};