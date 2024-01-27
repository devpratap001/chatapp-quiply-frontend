import { createSlice } from "@reduxjs/toolkit";

const loadingSlice= createSlice({
    name: "isLoading",
    initialState: {isLoading: false},
    reducers: {
        setIsLoading (state) {
            state.isLoading = !state.isLoading
        }
    }
})

export const {setIsLoading} = loadingSlice.actions ;
export default loadingSlice.reducer ;
