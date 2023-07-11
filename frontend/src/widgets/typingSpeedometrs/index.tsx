// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import TypingSpeedometer from "@entities/textInputSpeedometr";
import ErrorSpeedometer from "@entities/correctInputCounter";
// internal
import "./ui/index.css";
import { TypingSpeedometersType } from "./types";

// main ====================================================== //
let TypingSpeedometers: TypingSpeedometersType = ({ }) => (
    <div id="container_speedometers">
        <ErrorSpeedometer /> % / <TypingSpeedometer /> cpm
    </div>
);

// export ==================================================== //
export default TypingSpeedometers;