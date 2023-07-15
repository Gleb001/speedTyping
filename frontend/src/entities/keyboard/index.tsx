// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useState, useRef } from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as set_keycap } from "@app/redux/reducers/keycap";
// helpers --------------------------------------------------- //
import {
    getKeycapRef,
    getClassNameKeycap,
    showKeycapsTo
} from "./helpers";
// special --------------------------------------------------- //
import "./ui/index.css";
import { KeyboardType } from "./types";

// main ====================================================== //
let Keyboard: KeyboardType = ({ matrix_keycaps }) => {

    let dispatch = useAppDispatch();

    let keycap = useAppSelector(state => state.keycap);
    let current_char = useAppSelector(state => state.current_char);
    let keyboard_data = useAppSelector(state => state.keyboard_data);

    let keyboardRef = useRef<HTMLDivElement>(null);
    let [previous_char, setPrevChar] = useState("");

    useEffect(() => actionOnKeycap("down"), [keycap.down]);
    useEffect(() => {
        actionOnKeycap("up");
        dispatch(set_keycap(["down", { key: "", isFirst: false }]));
    }, [keycap.up])
    useEffect(() => {
        if (current_char.isFocused) {
            showKeycapsTo(
                keyboardRef.current,
                matrix_keycaps,
                current_char.value,
                true
            );
        }
        if (!current_char.isFocused || previous_char !== current_char.value) {
            showKeycapsTo(
                keyboardRef.current,
                matrix_keycaps,
                previous_char,
                false
            );
            setPrevChar(current_char.value);
        }
    }, [current_char]);

    function actionOnKeycap(type: "up" | "down") {
        let keycap_element = getKeycapRef(
            keyboardRef.current,
            matrix_keycaps,
            keycap[type]
        );
        if (!keycap_element) return;

        keycap_element.className = getClassNameKeycap(
            type, current_char.value, keycap[type].key
        );
    }

    console.log(keyboard_data.height);
    return (
        <div id="keyboard" ref={keyboardRef} style={{
            height: keyboard_data.height + "px",
            opacity: String(keyboard_data.height)
        }}>{
            matrix_keycaps.map((row, index) => (
                <div className="row_keycaps" key={`row_${index}`}>{
                    row.map((keycaps, index) => (
                        <div key={`cell_${index}`} className="no_active_keycap">{
                            keycaps.join(" ")
                        }</div>
                    ))
                }</div>
            ))
        }</div>
    );

};

// export ==================================================== //
export default Keyboard;