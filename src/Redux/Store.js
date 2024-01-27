import {configureStore} from "@reduxjs/toolkit";
import isLoadingReducer from "./Slices/loadingSlice";
import isErrorReducer from "./Slices/errorSlice";
import registerReducer from "./Slices/registerSlice";
import loginReducer from "./Slices/loginSlice";

const store= configureStore({
    reducer: {
        loading: isLoadingReducer,
        error: isErrorReducer,
        register: registerReducer,
        login: loginReducer
    }
});

export default store ;