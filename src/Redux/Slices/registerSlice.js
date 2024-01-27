import { createSlice } from "@reduxjs/toolkit";

const registerSlice= createSlice({
    name: "register",
    initialState: {},
    reducers: {
        setRegisterData (state, action) {
            state= action.payload
            return state
        }
    }
})

export const {setRegisterData}= registerSlice.actions ;
export default registerSlice.reducer;