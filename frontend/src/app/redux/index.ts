// imports =================================================== //
// redux toolkit --------------------------------------------- //
import { configureStore } from "@reduxjs/toolkit";
// reducers -------------------------------------------------- //
import keyboardSlice from "./reducers/keyboard";
import KeycapSlice from "./reducers/keycap";
import countersSlice from "./reducers/counters";
import SettingsSlice from "./reducers/settings";

// main ====================================================== //
let store = configureStore({
    reducer: {
        keyboard: keyboardSlice,
        keycaps: KeycapSlice,
        counters: countersSlice,
        settings: SettingsSlice
    },
});

// export ==================================================== //
export default store;