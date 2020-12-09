import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getSporterBoard = () => {
    return axios.get(API_URL + "sporter", { headers: authHeader() });
};

const getTrainerBoard = () => {
    return axios.get(API_URL + "trainer", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getSporterBoard,
    getTrainerBoard,
    getAdminBoard,
};