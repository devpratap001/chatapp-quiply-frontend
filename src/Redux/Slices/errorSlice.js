import { createSlice } from "@reduxjs/toolkit";

const errorSlice= createSlice({
    name: "isError",
    initialState: {isError: false},
    reducers: {
        setIsError (state) {
            state.isError = !state.isError
        }
    }
})

export const {setIsError} = errorSlice.actions ;
export default errorSlice.reducer ;