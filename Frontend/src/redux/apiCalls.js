import {
    RegisterFailure,
    RegisterStart,
    RegisterSuccess,
    LoginStart,
    LoginSuccess,
    LoginFailure,
} from "./userRedux";
import { publicRequest } from "../reqMethods";

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
    dispatch(LoginStart());
    try {
        const response = await publicRequest.post('/auth/login', credentials);
        dispatch(LoginSuccess(response.data));
    } catch (error) {
        dispatch(LoginFailure(error.response.data));
    }
};