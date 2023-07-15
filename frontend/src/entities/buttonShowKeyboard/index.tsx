// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState } from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as set_keyboard_data } from "@app/redux/reducers/keyboardData";
// helpers --------------------------------------------------- //
import getHeightKeyboard from "./helpers";
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
    let keyboard_data = useAppSelector(state => state.keyboard_data);

    let [hasProcess, setHasProcess] = useState(false);

    function showKeyboard() {
        if (hasProcess) return;
        setHasProcess(true);

        dispatch(set_keyboard_data({ key: "has", value: true }));
        setTimeout(() => {
            let keyboardRef = document.getElementById("keyboard");
            if (!keyboardRef) return;

            keyboardRef.style.setProperty("--start-height", "0px");
            keyboardRef.style.setProperty("--end-height", getHeightKeyboard(keyboardRef) + "px");

            playAnimationCSS(
                keyboardRef,
                `
                    appear linear 400ms forwards,
                    changed linear 400ms forwards
                `,
                600
            ).then(() => {
                dispatch(set_keyboard_data({
                    key: "height",
                    value: getHeightKeyboard(keyboardRef!),
                }));
                setHasProcess(false);
            })
        });
    }
    function hideKeyboard() {
        if (hasProcess) return;
        setHasProcess(true);

        setTimeout(() => {
            let keyboardRef = document.getElementById("keyboard");
            if (!keyboardRef) return;

            keyboardRef.style.setProperty("--start-height", getHeightKeyboard(keyboardRef) + "px");
            keyboardRef.style.setProperty("--end-height", "0px");

            console.log(keyboardRef);
            playAnimationCSS(
                keyboardRef,
                `
                    disappear linear 400ms forwards,
                    changed linear 400ms forwards
                `,
                600
            ).then(() => {
                dispatch(set_keyboard_data({
                    key: "has", value: false,
                }));
                dispatch(set_keyboard_data({
                    key: "height", value: 0,
                }));
                setHasProcess(false);
            });
        })
    }

    return (
        <Button
            description="remove keyboard"
            icon_className={
                keyboard_data.has ?
                    "remove_keyboard_icon" :
                    "add_keyboard_icon"
            }
            actions={{
                "onClick": keyboard_data.has ?
                    hideKeyboard :
                    showKeyboard
            }}
        />
    );

};

// export ==================================================== //
export default ButtonShowKeyboard;