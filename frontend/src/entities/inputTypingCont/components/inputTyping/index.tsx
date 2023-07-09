// imports =================================================== //
// external
import React, { useState } from "react";
// internal
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
    updateTextTyping,
    current_symbol,
    isResetValue,
}) => {

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
            onKeyUp={handleKeyUp}
            required={isRequired()}

            onChange={(event) => { }}
        />
    );

};

// export ==================================================== //
export default InputTyping;