import {
    RegisterFailure, RegisterStart, RegisterSuccess,
    LoginStart, LoginSuccess, LoginFailure
} from "./userRedux";
import { publicRequest } from "../reqMethods";

export const register = (userInfo) => async (dispatch) => {
    dispatch(RegisterStart());

    try {
        const response = await publicRequest.post('/users/register', userInfo);
        dispatch(RegisterSuccess(response.data));
    } catch (error) {
        let errorMessage = error.response.data.message || "Unknown error occurred.";
        if (error.response && error.response.status === 404) {
            errorMessage = "Endpoint not found.";
        }
        dispatch(RegisterFailure(errorMessage));
    }
};

export const login = (credentials) => async (dispatch) => {
    dispatch(LoginStart());

    try {
        const response = await publicRequest.post('/users/login', credentials);
        dispatch(LoginSuccess(response.data));
    } catch (error) {
        const errorMessage = error.response.data.message || "Unknown error occurred.";
        dispatch(LoginFailure(errorMessage));
    }
};

