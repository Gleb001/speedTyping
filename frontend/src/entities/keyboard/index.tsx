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
    actionOnKeycaps
} from "./helpers";
// special --------------------------------------------------- //
import "./ui/index.css";
import { KeyboardType } from "./types/index";

// main ====================================================== //
let Keyboard: KeyboardType = ({ matrix_keycaps }) => {

    let dispatch = useAppDispatch();

    let keycap = useAppSelector(state => state.keycap);
    let current_char = useAppSelector(state => state.current_char);
    let height_keyboard = useAppSelector(state => state.keyboard_data.height);

    let keyboardRef = useRef<HTMLDivElement>(null);
    let [previous_char, setPrevChar] = useState("");

    useEffect(() => actionOnKeycap("down"), [keycap.down]);
    useEffect(useKeyboardAssistent, [current_char]);
    useEffect(() => {
        actionOnKeycap("up");
        dispatch(set_keycap(["down", { key: "", isFirst: false }]));
    }, [keycap.up])

    function actionOnKeycap(type: "up" | "down") {
        let keycap_element = getKeycapRef(
            keyboardRef.current,
            matrix_keycaps,
            keycap[type]
        );
        if (!keycap_element) return;

        keycap_element.className = getClassNameKeycap(
            type, current_char, keycap[type].key
        );
    }
    function useKeyboardAssistent(){
        actionOnKeycaps(
            "hide",
            keyboardRef.current,
            matrix_keycaps,
            previous_char,
        );
        actionOnKeycaps(
            "show",
            keyboardRef.current,
            matrix_keycaps,
            current_char,
        );
        setPrevChar(current_char);
    }

    return (
        <div id="keyboard" ref={keyboardRef} style={{
            height: height_keyboard + "px",
            opacity: String(height_keyboard)
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