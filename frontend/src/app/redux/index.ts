// imports =================================================== //
// external
import { configureStore } from "@reduxjs/toolkit";
// internal
import checkPointReducer from "./reducers/checkPoint";
import mistakesCounter from "./reducers/mistakesCounter";
import inputKeycap from "./reducers/keycap";

// main ====================================================== //
let store = configureStore({
    reducer: {
        check_point: checkPointReducer,
        mistakes_counter: mistakesCounter,
        keycap: inputKeycap
    },
});

// export ==================================================== //
export default store;