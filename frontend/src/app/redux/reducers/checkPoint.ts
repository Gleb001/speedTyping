// imports =================================================== //
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "check-point",
    initialState: 0,
    reducers: {
        set: (state, action: PayloadAction<number>) => action.payload,
    }
})

// // export ==================================================== //
export {currentSymbolSlice};
export let { set } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;