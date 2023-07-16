// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
// interface initialStateType {
//     current: string,
//     previous: string,
// }

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "current-symbol",
    initialState: "",
    reducers: {
        set: (
            state,
            action: PayloadAction<string>
        ) => action.payload,
    }
});

// // export ==================================================== //
export {currentSymbolSlice};
export let { set } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;