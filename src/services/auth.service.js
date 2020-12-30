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


const login = async (email, password) => {
    try {
        const token = JSON.parse(localStorage.getItem('user_id'));
        //data in de state zetten
        const result = await axios.post('http://localhost:8080/api/auth/signin',
            {
                headers: {"Authorization": `Bearer ` + token.accessToken},
                email,
                password,
            });
        console.log(result.data);
        localStorage.setItem("token", JSON.stringify(result.accessToken));
        localStorage.setItem("user_id", JSON.stringify(result.id));
    }
        // iets met die error doen
    catch (error) {
        console.log("Sorry.....Error");

    }

}


const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


export default {
    register,
    login,
    logout,
    getCurrentUser,
};