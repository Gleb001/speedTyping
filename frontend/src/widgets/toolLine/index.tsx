// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import ButtonShowKeyboard from "@entities/buttonShowKeyboard";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ToolLineType } from "./types";

// main ====================================================== //
let ToolLine: ToolLineType = ({ }) => (
    <div id="tool_line">
        <ButtonShowKeyboard type="remove"/>
    </div>
);

// export ==================================================== //
export default ToolLine;