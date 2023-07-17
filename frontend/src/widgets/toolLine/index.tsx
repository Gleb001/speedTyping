// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// widgets --------------------------------------------------- //
import ButtonContainer from "@widgets/buttonContainer";
import ContainerSpeedometers from "@widgets/typingSpeedometrs";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ToolLineType } from "./types";

// main ====================================================== //
let ToolLine: ToolLineType = ({ }) => (
    <div id="tool_line">
        <ButtonContainer />
        <ContainerSpeedometers />
    </div>
);

// export ==================================================== //
export default ToolLine;