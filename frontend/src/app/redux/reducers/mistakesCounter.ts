// imports =================================================== //
import { createSlice } from "@reduxjs/toolkit";

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "mistakes-counter",
    initialState: {
        current: 0,
        previous: 0,
    },
    reducers: {
        increment: (state) => {
            state.current++;
        },
        reset: (state) => {
            state.previous = state.current;
            state.current = 0;
        }
    }
});

// // export ==================================================== //
export {currentSymbolSlice};
export let { increment, reset } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;