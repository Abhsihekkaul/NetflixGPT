import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducers from "./MoviesSlice";

const Store = configureStore({
    reducer : {
        user : UserReducer,
        Movies : MoviesReducers,
    }
});

export default Store;
