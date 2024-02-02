// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import type { ButtonType } from "./types";

// main ====================================================== //
const Button: ButtonType = ({ name, icon_className, ...props }) => (
    <button className="special_button" {...props} >
        <div className={icon_className + " icon_button"}></div>
        <div>{name}</div>
    </button>
);

// export ==================================================== //
export default Button;