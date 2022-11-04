import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: {}, events: { numberOfEvents: 0, totalSales: "0€", totalTicketsSold: 0 },
}


export const organisatorSlice = createSlice({
    name: 'organisator',
    initialState,
    reducers: {
        setNumberOfEvents: (state, action) => {
            state.events.numberOfEvents = action.payload
        },

        setTotalSales: (state, action) => {
            state.events.totalSales = action.payload
        },

        setTotalTicketsSold: (state, action) => {
            state.events.totalTicketsSold = action.payload
        }
    }

})


export const { setNumberOfEvents, setTotalSales, setTotalTicketsSold } = organisatorSlice.actions

export default organisatorSlice.reducer