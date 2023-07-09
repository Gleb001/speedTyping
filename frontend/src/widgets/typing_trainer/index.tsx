// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import TextInputSpeedometr from "@entities/textInputSpeedometr";
import ErrorCounter from "@entities/correctInputCounter";
import TextTyping from "@entities/inputTypingCont";
// internal
import "./ui/index.css";
import { TypingTrainerType } from "./types";

// main ====================================================== //
let TypingTrainer: TypingTrainerType = ({ }) => (
    <div id="typing_trainer">
        <TextTyping />
        <div id="tool_line">
            <div id="container_texts_speedometers">
                <ErrorCounter />
                <TextInputSpeedometr />
            </div>
        </div>
    </div>
);

// export ==================================================== //
export default TypingTrainer;