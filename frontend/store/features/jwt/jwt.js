import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: undefined
}


export const jwtSlice = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        setJWT: (state, action) => {
            state.auth = action.payload
        },
        logout: (state) => {
            state.auth = undefined
        }
    }

})


export const { setJWT, logout } = jwtSlice.actions

export default jwtSlice.reducer