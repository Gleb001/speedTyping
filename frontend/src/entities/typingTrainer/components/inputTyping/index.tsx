// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState } from "react";
// redux ----------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { set as set_keycap } from "@app/redux/reducers/keycap";
import { set as set_current_char } from "@app/redux/reducers/currentChar";
// helpers --------------------------------------------------- //
import getKeycapOnKeyEvent from "./helpers";
import { isEqual } from "@shared/helpers";
// internal -------------------------------------------------- //
import "./ui/index.css"
import { InputTypingType } from "./types";

// main ====================================================== //
let InputTyping: InputTypingType = ({
    updateTextTyping,
    isResetValue,
    active_char,
}) => {

    let dispatch = useAppDispatch();
    let keycap = useAppSelector(state => state.keycap);

    let [hasError, setHasError] = useState(false);
    let [false_input, setFalseInput] = useState("");

    let [value, setValue] = useState("");
    if (isResetValue && value !== "") setValue("");

    let isRequired = () => false_input === "";
    if (!isRequired()) setTimeout(() => setFalseInput(""), 200);

    function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        let inputKey = event.key === "Enter" ? "¶" : event.key;
        if (inputKey.length > 1) return;

        if (active_char === inputKey && isRequired()) {
            setHasError(false);
            updateTextTyping(hasError);
            setValue(value + active_char);
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

            onFocus={() => dispatch(set_current_char(active_char))}
            onBlur={() => dispatch(set_current_char(""))}

            onKeyUp={(event) => {
                handleKeyUp(event);
                dispatch(set_keycap(["up", getKeycapOnKeyEvent(event)]));
            }}
            onKeyDown={(event) => {
                if (isEqual(getKeycapOnKeyEvent(event), keycap.down)) return;
                dispatch(set_keycap(["down", getKeycapOnKeyEvent(event)]));
            }}

            onChange={(event) => { }}
        />
    );

};

// export ==================================================== //
export default InputTyping;