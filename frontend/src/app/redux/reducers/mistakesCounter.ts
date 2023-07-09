// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "mistakes-counter",
    initialState: { current: 0, previous: 0, },
    // initialState: {
    //     current: [] as number[],
    //     previous: [] as number[],
    // },
    reducers: {
        increment: (state) => { state.current++; },
        // setErrorIndex: (state, action: PayloadAction<number>) => {
        //     state.current.push(action.payload);
        // },
        reset: (state) => {
            state.previous = state.current;
            state.current = 0;
        }
    }
});

// // export ==================================================== //
export {currentSymbolSlice};
export let { reset, increment } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;