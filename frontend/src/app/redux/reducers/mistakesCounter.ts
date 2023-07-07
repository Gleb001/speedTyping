// imports =================================================== //
import { createSlice } from "@reduxjs/toolkit";

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "mistakes-counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        reset: () => 0
    }
});

// // export ==================================================== //
export {currentSymbolSlice};
export let { increment, reset } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;