// imports =================================================== //
import { createSlice } from "@reduxjs/toolkit";
import { Languages, TypesKeyboards } from "@shared/constants/keyboards";

// types ===================================================== //
type ColorTheme = "light" | "dark"
interface initialState {
    language?: Languages,
    keyboard_layout?: TypesKeyboards,
    color_theme?: ColorTheme,
    isOpen?: boolean
}

// constants ================================================= //
const initialState: initialState = {
    language: "english",
    keyboard_layout: "ansi",
    color_theme: "dark",
    isOpen: false,
};

// main ====================================================== //
const SettingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        set: (state, action: { payload: initialState }) => {
            for (let key in action.payload) {
                state[key] = action.payload[key];
            }
        }
    }
});

// // export ==================================================== //
export { SettingsSlice };
export let { set } = SettingsSlice.actions;
export default SettingsSlice.reducer;