// imports =================================================== //
// external
import React from "react";
// slices (FSD) - components
import TypingSpeedometr from "@entities/textInputSpeedometr";
import ErrorSpeedometr from "@entities/correctInputCounter";
// internal
import "./ui/index.css";
import { TypingSpeedometrsType } from "./types";

// main ====================================================== //
let TypingSpeedometrs: TypingSpeedometrsType = ({ }) => (
    <div id="container_speedometers">
        <ErrorSpeedometr /> % / <TypingSpeedometr /> cpm
    </div>
);

// export ==================================================== //
export default TypingSpeedometrs;