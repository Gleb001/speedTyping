// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "mistakes-counter",
    initialState: {
        current: [] as number[],
        previous: [] as number[],
    },
    reducers: {
        setErrorIndex: (state, action: PayloadAction<number>) => {
            state.current.push(action.payload);
        },
        reset: (state) => {
            state.previous = state.current;
            state.current = [];
        }
    }
});

// // export ==================================================== //
export {currentSymbolSlice};
export let { reset, setErrorIndex } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;