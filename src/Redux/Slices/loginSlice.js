import { createSlice } from "@reduxjs/toolkit";

const loginSlice= createSlice({
    name: "login",
    initialState: {},
    reducers: {
        setLoginData (state, action) {
            state= action.payload
            return state
        }
    }
})

export const {setLoginData}= loginSlice.actions ;
export default loginSlice.reducer;