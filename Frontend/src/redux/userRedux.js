import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        name: '',
        email: '',
        password: '',
        isFetching: false,
        error: false
    },
    reducers: {
        RegisterStart: (state) => {
            state.isFetching = true
        },
        RegisterSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        RegisterFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    },
})


export const { RegisterStart, RegisterSuccess, RegisterFailure } = userSlice.actions;
export default userSlice.reducer;