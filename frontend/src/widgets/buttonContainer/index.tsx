// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import ButtonChangeTheme from "@entities/changeTheme";
import ButtonShowKeyboard from "@entities/buttonShowKeyboard";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonContainerType } from "./types";

// main ====================================================== //
let ButtonContainer: ButtonContainerType = ({ }) => (
    <div className="button_container">
        <ButtonShowKeyboard />
        <ButtonChangeTheme />
    </div>
);

// export ==================================================== //
export default ButtonContainer;