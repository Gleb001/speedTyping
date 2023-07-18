// imports =================================================== //
// helpers --------------------------------------------------- //
import { isChar, isUpperCase } from "@shared/helpers/withString";
// internal -------------------------------------------------- //
import {
    getPositionKeycapType,
    getKeycapRefType,
    getClassNameKeycapType,
    getCurrentKeycapsType,
    actionOnKeycapsType,
} from "./types";

// main ====================================================== //
let isSpecSymbol = (matrix_keycaps, char) => {
    if (isChar(char) || char === " ") return false;

    for (let row_index = 0; row_index < matrix_keycaps.length; row_index++) {
        let row = matrix_keycaps[row_index];
        for (let cell_index = 0; cell_index < row.length; cell_index++) {
            let cell = row[cell_index];
            if (cell[1] === char) return true;
        }
    }

    return false;
};

let getPositionKeycap: getPositionKeycapType = (
    matrix, keycap
) => {
    let isFirst = keycap.isFirst;
    for (let row_index = 0; row_index < matrix.length; row_index++) {
        let row = matrix[row_index];
        for (let cell_index = 0; cell_index < row.length; cell_index++) {
            let cell = row[cell_index];
            let value = isChar(keycap.key) ? keycap.key.toUpperCase() : keycap.key;
            if (cell.includes(value)) {
                if (isFirst) return [row_index, cell_index];
                else isFirst = true;
            }
        }
    }
};
let getKeycapRef: getKeycapRefType = (
    keyboard, matrix_keycaps, keycap
) => {
    if (!keyboard) return;

    let position_keycap = getPositionKeycap(matrix_keycaps, keycap);
    if (!position_keycap) return;

    return (
        keyboard.
            children[position_keycap[0]].
            children[position_keycap[1]] as HTMLElement
    );
};
let getClassNameKeycap: getClassNameKeycapType = (
    type, symbol, keycap
) => {
    if (type === "up") return "no_active_keycap";
    return keycap === symbol ? "valid_keycap" : "invalid_keycap";
};
let getCurrentKeycaps: getCurrentKeycapsType = (
    keyboardRef, matrix_keycaps, char
) => {
    if (char === "") return [];

    let keycap = { key: char.toUpperCase(), isFirst: true };
    let keycap_element = getKeycapRef(keyboardRef, matrix_keycaps, keycap);

    let additional_keycap_element;
    console.log();
    if (isUpperCase(char) || isSpecSymbol(matrix_keycaps, char)) {
        let [x_pos_keycap, y_pos_keycap] = getPositionKeycap(matrix_keycaps, keycap)!;
        additional_keycap_element = getKeycapRef(
            keyboardRef,
            matrix_keycaps,
            { key: "shift", isFirst: y_pos_keycap > 5 }
        );
    }

    return [
        keycap_element,
        additional_keycap_element
    ];

};
let actionOnKeycaps: actionOnKeycapsType = (
    type, keyboardRef, matrix_keycaps, char,
) => {
    let current_keycaps = getCurrentKeycaps(
        keyboardRef,
        matrix_keycaps,
        char
    );
    current_keycaps.forEach(keycapRef => {
        if (keycapRef) {
            keycapRef.style.cssText =
                type === "show" ?
                    `border-color: var(--secondary-color);
                     color: var(--secondary-color);` : ``;
        }
    });
};

// export ==================================================== //
export {
    getKeycapRef,
    actionOnKeycaps,
    getCurrentKeycaps,
    getPositionKeycap,
    getClassNameKeycap,
};