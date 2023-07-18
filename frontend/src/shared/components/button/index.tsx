// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState, useRef, useEffect } from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonType } from "./types";

// main ====================================================== //
let Button: ButtonType = ({
    name, icon_className, actions = []
}) => (
    <button className="special_button" {...actions} >
        <div className={icon_className + " icon_button"}></div>
        <div>{name}</div>
    </button>
);

// export ==================================================== //
export default Button;