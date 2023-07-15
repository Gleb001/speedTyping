// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
interface initialStateType {
    has: boolean,
    height: number,
    // animation: "show" | "hide"
}

// constants ================================================= //
const initialState: initialStateType = {
    has: false,
    height: 0,
    // animation: "show",
};

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "keyboard-data",
    initialState,
    reducers: {
        set(state, action: PayloadAction<{ key: string, value: any }>) {
            state[action.payload.key] = action.payload.value;
        },
    }
});

// export ==================================================== //
export {currentSymbolSlice};
export let { set } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;