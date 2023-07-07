// imports =================================================== //
// libs
import { configureStore } from "@reduxjs/toolkit";
// components
import checkPointReducer from "./reducers/checkPoint";
// import textTypingReducer from "./reducers/textTyping";
// import currentSymbolReducer from "./reducers/currentSymbol";


// main ====================================================== //
let store = configureStore({
    reducer: {
        check_point: checkPointReducer
        // textTyping: textTypingReducer,
        // currentSymbol: currentSymbolReducer,
    },
});

// export ==================================================== //
export default store;