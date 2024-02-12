// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import type { ModalWindow as ModalWindowType } from "./types";
import "./ui/index.css";

// main ====================================================== //
let ModalWindow: ModalWindowType = ({ has }) => {

    return (
        <div
            style={{display: has ? "block" : "none"}}
            className="no_click_back_modal_window"
        ></div>
    );
};

// export ==================================================== //
export default ModalWindow;