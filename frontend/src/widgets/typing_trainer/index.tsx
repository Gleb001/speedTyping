// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import TextSpeedometr from "@entities/textSpeedometr";
import TextTyping from "@entities/inputTypingCont";
// internal
import "./ui/index.css";
import { TypingTrainerType } from "./types";

// main ====================================================== //
let TypingTrainer: TypingTrainerType = ({ }) => (
    <div id="typing_trainer">
        <TextTyping />
        <div id="tool_line">
            <TextSpeedometr />
        </div>
    </div>
);

// export ==================================================== //
export default TypingTrainer;