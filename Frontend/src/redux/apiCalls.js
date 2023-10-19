
import { RegisterFailure, RegisterStart, RegisterSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";



export const Register = async (dispatch, user) => {
    dispatch(RegisterStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(RegisterSuccess(res.data));
    } catch (err) {
        dispatch(RegisterFailure());
    }
};