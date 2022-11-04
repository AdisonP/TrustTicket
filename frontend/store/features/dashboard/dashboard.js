import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboard: { displayCreateEvent: false },
}


export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        displayEventCreator: (state, action) => {
            state.displayCreateEvent = action.payload
        }
    }

})


export const { displayEventCreator } = dashboardSlice.actions

export default dashboardSlice.reducer