// imports =================================================== //
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
type setActionType = PayloadAction<
    [keyof initialStateType, keycapType]
>
type keycapType = {
    key: KeyboardEvent["key"] | "",
    isFirst: boolean
}
type initialStateType = {
    "down": keycapType,
    "up": keycapType,
}

// constants ================================================= //
const initialState: initialStateType = {
    "down": {
        key: "",
        isFirst: false
    },
    "up": {
        key: "",
        isFirst: false
    }
};

// main ====================================================== //
let currentSymbolSlice = createSlice({
    name: "keycap",
    initialState,
    reducers: {
        set: (state, action: setActionType) => {
            state[action.payload[0]] = action.payload[1];
        },
    }
});

// export ==================================================== //
export { currentSymbolSlice };
export let { set } = currentSymbolSlice.actions;
export default currentSymbolSlice.reducer;
export type {keycapType, initialStateType};