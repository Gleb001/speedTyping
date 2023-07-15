// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import TypingSpeedometer from "@entities/typingSpeedometer";
import ErrorSpeedometer from "@entities/errorSpeedometer";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ContainerSpeedometersType } from "./types";

// main ====================================================== //
let ContainerSpeedometers: ContainerSpeedometersType = ({ }) => (
    <div id="container_speedometers">
        <ErrorSpeedometer />
        <TypingSpeedometer  /> 
    </div>
);

// export ==================================================== //
export default ContainerSpeedometers;