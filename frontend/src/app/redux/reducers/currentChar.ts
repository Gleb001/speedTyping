// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
interface initialStateType {
    value: string,
    isFocused: boolean,
}

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "current-symbol",
    initialState: {
        value: "",
        isFocused: false
    } as initialStateType,
    reducers: {
        set: (
            state,
            action: PayloadAction<initialStateType>
        ) => action.payload,
    }
});

// // export ==================================================== //
export {currentSymbolSlice};
export let { set } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;