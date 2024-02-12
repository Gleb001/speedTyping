// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import type { ButtonType } from "./types";

// main ====================================================== //
const Button: ButtonType = ({ children, ...props }) => (

    <button className="special_button" {...props} >
        {children}
    </button>
    
);

// export ==================================================== //
export default Button;