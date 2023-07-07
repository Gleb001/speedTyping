// imports =================================================== //
// external
import { configureStore } from "@reduxjs/toolkit";
// internal
import checkPointReducer from "./reducers/checkPoint";
import mistakesCounter from "./reducers/mistakesCounter";

// main ====================================================== //
let store = configureStore({
    reducer: {
        check_point: checkPointReducer,
        mistakes_counter: mistakesCounter,
    },
});

// export ==================================================== //
export default store;