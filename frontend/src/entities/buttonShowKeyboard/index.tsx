// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState } from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as set_keyboard_data } from "@app/redux/reducers/keyboardData";
// helpers --------------------------------------------------- //
import { actionOnKeyboard } from "./helpers";
// libs ------------------------------------------------------ //
import { playAnimationCSS } from "@shared/libs";
// components ------------------------------------------------ //
import Button from "@shared/components/button";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonShowKeyboardType } from "./types";

// main ====================================================== //
let ButtonShowKeyboard: ButtonShowKeyboardType = ({ }) => {

    let dispatch = useAppDispatch();
    let hasKeyboard = useAppSelector(state => state.keyboard_data.has);

    let [hasProcess, setHasProcess] = useState(false);
    function handleClick(type: "show" | "hide") {
        if (hasProcess) return;
        setHasProcess(true);

        if (type === "show") dispatch(set_keyboard_data({ key: "has", value: true }));
        setTimeout(() => {
            actionOnKeyboard(type).then((height) => {
                if (type === "hide") dispatch(set_keyboard_data({ key: "has", value: false }));
                dispatch(set_keyboard_data({ key: "height", value: height }));
                setHasProcess(false);
            });
        });
    }

    return (
        <Button
            description="remove keyboard"
            icon_className={
                hasKeyboard ?
                    "keyboard_closure_icon" :
                    "keyboard_opening_icon"
            }
            actions={{
                "onClick": () => handleClick(hasKeyboard ? "hide" : "show")
            }}
        />
    );

};

// export ==================================================== //
export default ButtonShowKeyboard;