// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import ButtonShowKeyboard from "@entities/buttonShowKeyboard";
import ContainerSpeedometers from "@widgets/typingSpeedometrs";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ToolLineType } from "./types";

// main ====================================================== //
let ToolLine: ToolLineType = ({ }) => (
    <div id="tool_line">
        <ButtonShowKeyboard />
        <ContainerSpeedometers />
    </div>
);

// export ==================================================== //
export default ToolLine;