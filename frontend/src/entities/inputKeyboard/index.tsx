// imports =================================================== //
// external
import React, { useRef, useEffect, useState } from "react";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// internal
import "./ui/index.css";
import {
    KeyboardType,
    getPositionKeycapType,
    getKeyboardType,
    getKeycapRefType
} from "./types";

// inner logic main function component ======================= //
let getKeyboard: getKeyboardType = (matrix_keycaps) => {
    return (
        matrix_keycaps.map((row, index) => (

            <div className="row_keycaps" key={`row_${index}`}>{

                row.map((keycaps, index) => (
                    <div key={`cell_${index}`}>{
                        keycaps.join(" ")
                    }</div>
                ))

            }</div>

        ))
    );
};
let getPositionKeycap: getPositionKeycapType = (
    matrix, keycap
) => {
    let isFirst = keycap.isFirst;
    for (let row_index = 0; row_index < matrix.length; row_index++) {
        let row = matrix[row_index];
        for (let cell_index = 0; cell_index < row.length; cell_index++) {
            let cell = row[cell_index];
            if (cell.includes(keycap.key)) {
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
            children[position_keycap[1]]
    );
};

// main ====================================================== //
let Keyboard: KeyboardType = ({ matrix_keycaps }) => {

    let keyboardRef = useRef<HTMLDivElement>(null);
    let keycap = useAppSelector(state => state.keycap);

    useEffect(() => actionOnKeycap("up"), [keycap.up])
    useEffect(() => actionOnKeycap("down"), [keycap.down]);

    function actionOnKeycap(type: "up" | "down") {

        let keycap_element = getKeycapRef(
            keyboardRef.current,
            matrix_keycaps,
            keycap[type]
        );

        if (!keycap_element) return;
        keycap_element.classList[type === "up" ? "remove" : "add"]("active_keycap");

    }

    return (
        <div id="keyboard" ref={keyboardRef}>{
            getKeyboard(matrix_keycaps)
        }</div>
    );

};

// export ==================================================== //
export default Keyboard;