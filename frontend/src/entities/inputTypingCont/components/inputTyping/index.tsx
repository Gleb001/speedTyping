// imports =================================================== //
// external
import React, { useState } from "react";
import {
    useAppDispatch
} from "@shared/hooks/useAppDispatch";
import {
    increment as increment_mistakes
} from "@app/redux/reducers/mistakesCounter";
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
    current_symbol,
    updateValue,
    value
}) => {

    let dispatch = useAppDispatch();

    let [required, setRequired] = useState(true);
    let [false_input, setFalseInput] = useState("");
    let [hasMistake, setHasMistake] = useState(false);

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
            setHasMistake(false);
        } else {
            setRequired(false);
            setFalseInput(false_input + inputKey);
            if (!hasMistake) {
                setHasMistake(true);
                dispatch(increment_mistakes());
            }
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