import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "/test/all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user_id", { headers: authHeader() });
};

const setActivity = () => {
    return axios.post(API_URL + "user_id", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    setActivity,
    getAdminBoard,
};

