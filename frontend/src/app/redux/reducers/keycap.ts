// imports =================================================== //
import { Keycap } from "@entities/keyboard/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// types ===================================================== //
interface InitialState {
    down: string,
    up: string,
    active: Keycap | [],
}
interface setAction {
    down?: string,
    up?: string,
    active?: Keycap | [],
}

// constants ================================================= //
const initialState: InitialState = {
    active: [],
    down: "",
    up: ""
};

// main ====================================================== //
let keycapsSlice = createSlice({
    name: "keycaps",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<setAction>) => {
            for (let key in action.payload) {
                if (typeof state[key] !== undefined) {
                    state[key] = action.payload[key];
                }
            }
        },
    }
});

// export ==================================================== //
export { keycapsSlice };
export let { set } = keycapsSlice.actions;
export default keycapsSlice.reducer;