// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import Button from "@shared/components/button";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonShowKeyboardType } from "./types";

// main ====================================================== //
let ButtonShowKeyboard: ButtonShowKeyboardType = ({
    type,
}) => {

    function addKeyboard(event: React.MouseEvent) {
        let keyboardRef = document.getElementById("keyboard");
        keyboardRef!.style.animation = "linear .5s "
    }
    function removeKeyboard(event: React.MouseEvent) {
        let keyboardRef = document.getElementById("keyboard");
        keyboardRef!.style.opacity = "0";
    }

    return (
        <Button
            description="remove keyboard" 
            icon_className={
                type === "remove" ?
                    "remove_keyboard_icon" :
                    "add_keyboard_icon"
            }
            actions={
                type === "remove" ?
                    { "onClick": (event) => removeKeyboard(event) } :
                    { "onClick": (event) => addKeyboard(event) }
            }
        />
    );

};

// export ==================================================== //
export default ButtonShowKeyboard;