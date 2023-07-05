// imports =================================================== //
// libs
import React, { useEffect, useRef, useState } from "react";
// components
import "./ui/index.css"
import { InputTypingType } from "./types";

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

// main ====================================================== //
let InputTyping: InputTypingType = ({
    current_symbol,
    updateValue,
    value
}) => {

    let [required, setRequired] = useState(true);
    let [false_input, setFalseInput] = useState("");

    function clearInputValueOn(time: number) {
        setTimeout(() => {
            setRequired(true);
            setFalseInput("");
        }, time);
    }
    function handleKeyUp(event: React.KeyboardEvent) {
        let inputKey = event.key === "Enter" ? "¶" : event.key;
        if (specialKeys.includes(inputKey)) return;

        if (current_symbol === inputKey && required) {
            updateValue();
        } else {
            setRequired(false);
            setFalseInput(false_input + inputKey);
        }
    }

    if (!required) clearInputValueOn(200);
    return (
        <input
            id="input_typing"
            className={required?"input_valid":"input_invalid"}

            value={value + false_input}
            onKeyUp={handleKeyUp}
            required={required}

            onChange={(event) => {}}
        />
    );

};


// export ==================================================== //
export default InputTyping;