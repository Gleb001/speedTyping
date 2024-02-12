// imports =================================================== //
// react ----------------------------------------------------- //
import React, { KeyboardEvent, useState, useEffect } from "react";
// redux ----------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// redusers -------------------------------------------------- //
import { set as setKeycaps } from "@app/redux/reducers/keycap";
// internal -------------------------------------------------- //
import "./ui/index.css"
import type { InputTyping as InputTypingType } from "./types";
import isLeftChar from "./helpers/isLeftChar";
import { Keycap } from "@entities/keyboard/types";

// main ====================================================== //
const InputTyping: InputTypingType = ({ isClear, currentChar, getNextChar }) => {

    const dispatch = useAppDispatch();
    const matrix_keycaps = useAppSelector(state => state.keyboard.matrix_keycaps);

    let [hasError, setHasError] = useState(false);
    let [falseInput, setFalseInput] = useState("");
    let [value, setValue] = useState("");
    let [isFocus, setIsFocus] = useState(false);
    let [isRequired, setIsRequired] = useState(false);

    // set waiting char
    useEffect(() => {
        if (isFocus) {
            let activeKeycaps: Keycap = [currentChar];
            const isUpperActiveChar = (
                currentChar === currentChar.toUpperCase() &&
                currentChar !== currentChar.toLowerCase()
            );
            if (matrix_keycaps.length !== 0 && isUpperActiveChar) {
                const isLeftActiveChar = isLeftChar(currentChar, matrix_keycaps);
                const shiftChar = isLeftActiveChar ? "ShiftRight" : "ShiftLeft";
                activeKeycaps.push(shiftChar);
            }
            dispatch(
                setKeycaps({ active: activeKeycaps })
            );
        } else {
            dispatch(
                setKeycaps({ active: [] })
            );
        }
    }, [isFocus, currentChar]);

    // clear value
    useEffect(() => {
        if (isClear) setValue("");
    }, [isClear]);

    // clear false input
    useEffect(() => {
        if (falseInput === "") {
            setIsRequired(false);
        } else {
            setIsRequired(true);
            setTimeout(() => {
                setFalseInput("");
            }, 200);
        }
    }, [falseInput]);

    function handleKeyUp(event: KeyboardEvent<HTMLInputElement>) {

        const { key, code } = event;

        if (key.length === 1) {
            if (currentChar === key && !isRequired) {
                getNextChar(hasError);
                setHasError(false);
                setValue(value + currentChar);
            } else {
                setHasError(true);
                setFalseInput(falseInput + key);
            }
        }

        dispatch(
            setKeycaps({
                up: key.length > 1 ? code : key,
                down: ""
            })
        );

    }
    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        const { key, code } = event;
        dispatch(
            setKeycaps({
                down: key.length > 1 ? code : key,
                up: ""
            })
        );
    }
    function handleFocus() {
        setIsFocus(true);
    }
    function handleBlur() {
        setIsFocus(false);
    }

    return (
        <input

            className={`${isRequired ? "input_typing_invalid" : ""} input_typing`}
            value={value + falseInput}

            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}

            onChange={(e) => { }}

        />
    );

};

// export ==================================================== //
export default InputTyping;