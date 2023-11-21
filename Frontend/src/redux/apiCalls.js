import {
    RegisterFailure,
    RegisterStart,
    RegisterSuccess,
    LoginStart,
    LoginSuccess,
    LoginFailure,
} from "./userRedux";
import { publicRequest } from "../reqMethods";
import { createAsyncThunk } from '@reduxjs/toolkit';


export const register = (userInfo) => async (dispatch) => {
    dispatch(RegisterStart());
    try {
        const response = await publicRequest.post('/auth/register', userInfo);
        dispatch(RegisterSuccess(response.data));
    } catch (error) {
        dispatch(RegisterFailure(error.response.data));
    }
};

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await publicRequest.post('/auth/login', credentials);
        if (response.status === 200) {
            dispatch(LoginSuccess(response.data));
            return { type: "user/loginSuccess", payload: response.data };
        } else {
            dispatch(LoginFailure());
            return { type: "user/loginFailure" };
        }
    } catch (error) {
        dispatch(LoginFailure());
        console.log('Login failure', error);
        return { type: "user/loginFailure" };
    }
};