// imports =================================================== //
// external
import React, { useState } from "react";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set } from "@app/redux/reducers/keycap";
// internal
import "./ui/index.css"
import { InputTypingType } from "./types";
import { useAppSelector } from "@shared/hooks/useAppSelector";

// constants ================================================= //
const specialKeys = [
    "Backspace",
    "Shift",
    "Alt",
    "Control",
    "CapsLock",
    "Delete",
    "Escape",
    "Home",
    "End",
    "Meta",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
];
const convertKeys = {
    "Enter":     "◄════╝",
    "Backspace": "◄════",
    "CapsLock":  "caps",
    "Shift":     "shift",
    "ShiftLeft":     "shift",
    "ShiftRight":     "shift",
    "Space":     "―",
    "Control":   "control",
    "ControlLeft":   "control",
    "ControlRight":   "control",
    "Meta": "cmd",
    "Alt": "alt",
    "AltLeft": "alt",
    "AltRight": "alt",
};

// inner logic main function component ======================= //
function getKeycapOnKeyEvent(event: React.KeyboardEvent) {
    let isChar = event.key.length === 1 && event.key !== " ";
    let inputKey = isChar ? event.key.toUpperCase() : event.code;
    return {
        key: convertKeys[inputKey as "Enter"] ?? inputKey, 
        isFirst: inputKey.indexOf("Right") < 0
    };
}

// main ====================================================== //
let InputTyping: InputTypingType = ({
    updateTextTyping,
    current_symbol,
    isResetValue,
}) => {

    let dispatch = useAppDispatch();

    let [value, setValue] = useState("");
    if (isResetValue && value !== "") setValue("");

    let [hasError, setHasError] = useState(false);
    let [false_input, setFalseInput] = useState("");

    let isRequired = () => false_input === "";
    if (!isRequired()) setTimeout(() => setFalseInput(""), 200);

    function handleKeyUp(event: React.KeyboardEvent) {
        let inputKey = event.key === "Enter" ? "¶" : event.key;
        if (specialKeys.includes(inputKey)) return;

        if (current_symbol === inputKey && isRequired()) {
            setHasError(false);
            updateTextTyping(hasError);
            setValue(value + current_symbol);
        } else {
            setHasError(true);
            setFalseInput(false_input + inputKey);
        }
    }

    return (
        <input
            id="input_typing"
            className={isRequired() ? "input_valid" : "input_invalid"}
            value={value + false_input}
            required={isRequired()}

            onKeyUp={(event) =>{
                handleKeyUp(event);
                dispatch(set([ "up", getKeycapOnKeyEvent(event) ]));
            }}
            onKeyDown={(event) => {
                dispatch(set([ "down", getKeycapOnKeyEvent(event) ]));
            }}
            onChange={(event) => { }}

        />
    );

};

// export ==================================================== //
export default InputTyping;