// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import TextInputSpeedometr from "@entities/textInputSpeedometr";
import CorrectInputCounter from "@entities/correctInputCounter";
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
                <TextInputSpeedometr all/>
                <CorrectInputCounter />
            </div>
        </div>
    </div>
);

// export ==================================================== //
export default TypingTrainer;