// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
interface InitialState {
    chars: number,
    mistakes: number
}
type KeysInitialState = keyof InitialState

// constants ================================================= //
const initialState: InitialState = {
    chars: 0,
    mistakes: 0
}

// main ====================================================== //
let countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<KeysInitialState[]>) => {
            for (let counter of action.payload) {
                if (typeof state[counter] === "number") {
                    state[counter]++;
                }
            }
        },
        reset: (state, action: PayloadAction<KeysInitialState[]>) => {
            for (let counter of action.payload) {
                if (typeof state[counter] === "number") {
                    state[counter] = 0;
                }
            }
        },
    }
});

// // export ==================================================== //
export { countersSlice };
export let { increment, reset } = countersSlice.actions;
export default countersSlice.reducer;