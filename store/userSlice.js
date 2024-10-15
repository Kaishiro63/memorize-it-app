import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
}

const userSlice = createSlice({
    name: "chimpoHistory",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.token = null
        }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer

