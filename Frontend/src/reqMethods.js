import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let TOKEN = "";

// Retrieve the token from localStorage and ensure it is available before creating the axios instance
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
if (currentUser?.accessToken) {
    TOKEN = currentUser.accessToken;
}

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN}` }, // Make sure it's "Authorization" and not "token" unless your backend is configured differently.
});
