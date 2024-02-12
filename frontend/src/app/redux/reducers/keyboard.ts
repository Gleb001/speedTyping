// imports =================================================== //
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { MatrixKeycapsWithSystem, Keycap, MatrixKeycapsWithoutSystem } from "@entities/keyboard/types";

// types ===================================================== //
interface initialState {
    has: boolean,
    matrix_keycaps: MatrixKeycapsWithSystem | []
}

// constants ================================================= //
const initialState: initialState = {
    has: false,
    matrix_keycaps: []
};

// helpers =================================================== //
function addSystemKeycaps(matrix_keycaps: MatrixKeycapsWithoutSystem) {

    // for numeric line
    let numberic_line = matrix_keycaps[0];
    numberic_line.push(["◄═════"]);

    // for first chars line
    let first_line = matrix_keycaps[1];
    first_line.unshift(["tab"]);

    // for second chars line
    let second_line = matrix_keycaps[2];
    second_line.unshift(["CapsLock"]);
    second_line.push(["◄════╝"]);

    // for third chars line
    let third_line = matrix_keycaps[3];
    third_line.unshift(["ShiftLeft"]);
    third_line.push(["ShiftRight"]);

    // add last line
    const last_line: Keycap[] = [
        ["ControlLeft"],
        ["cmd"],
        ["alt"],
        [" "],
        ["alt"],
        ["fn"],
        ["ControlRight"],
        [":)"]
    ];
    matrix_keycaps.push(last_line);

}

// main ====================================================== //
const KeyboardSlice = createSlice({
    name: "keyboard",
    initialState,
    reducers: {
        set(state, action: PayloadAction<initialState | { matrix_keycaps: MatrixKeycapsWithoutSystem }>) {
            for (let key in action.payload) {
                if (key === "matrix_keycaps") {
                    let matrix_keycaps = action.payload[key];
                    // @ts-ignore
                    if (matrix_keycaps.length !== 0) {
                        // @ts-ignore
                        addSystemKeycaps(matrix_keycaps);
                    }
                    // @ts-ignore
                    state.matrix_keycaps = matrix_keycaps;
                } else {
                    state[key] = action.payload[key];
                }
            }
        },
    }
});

// export ==================================================== //
export {KeyboardSlice};
export let { set } = KeyboardSlice.actions;
export default KeyboardSlice.reducer;