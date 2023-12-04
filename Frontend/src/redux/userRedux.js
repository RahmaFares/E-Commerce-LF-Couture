import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isAdmin: false,
        isFetching: false,
        error: false
    },
    reducers: {
        RegisterStart: (state) => {
            state.isFetching = true;
        },
        RegisterSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        RegisterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        LoginStart: (state) => {
            state.isFetching = true;
        },
        LoginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isAdmin = action.payload.isAdmin;
        },
        LoginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        Logout: (state) => {
            state.currentUser = null;
            state.isAdmin = false;
        }
    },
});

export const {
    RegisterStart, RegisterSuccess, RegisterFailure,
    LoginStart, LoginSuccess, LoginFailure,
    Logout
} = userSlice.actions;

export default userSlice.reducer;
