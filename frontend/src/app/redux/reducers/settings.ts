// imports =================================================== //
import { LanguagesKeyboard, TypesKeyboards } from "@entities/keyboard/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
type ColorTheme = "Светлая" | "Тёмная"
interface initialState {
    language: LanguagesKeyboard,
    keyboard_layout: TypesKeyboards,
    color_theme: ColorTheme,
    isOpen: boolean,
    hasFingerStatus: boolean
}
interface setAction {
    language?: LanguagesKeyboard,
    keyboard_layout?: TypesKeyboards,
    color_theme?: ColorTheme,
    isOpen?: boolean,
    hasFingerStatus?: boolean
}

// constants ================================================= //
const initialState: initialState = {
    language: "english",
    keyboard_layout: "ansi",
    color_theme: "Тёмная",
    isOpen: false,
    hasFingerStatus: false
};

// main ====================================================== //
const SettingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<setAction>) => {
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
export type { ColorTheme };