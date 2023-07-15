// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// reducers -------------------------------------------------- //
import keyboardData from "./reducers/keyboardData";
import inputKeycapReducer from "./reducers/keycap";
import checkPointReducer from "./reducers/checkPoint";
import currentCharReducer from "./reducers/currentChar";
import mistakesCounterReducer from "./reducers/mistakesCounter";

// main ====================================================== //
let store = configureStore({
    reducer: {
        keyboard_data: keyboardData,
        keycap: inputKeycapReducer,
        check_point: checkPointReducer,
        current_char: currentCharReducer,
        mistakes_counter: mistakesCounterReducer,
    },
});

// export ==================================================== //
export default store;