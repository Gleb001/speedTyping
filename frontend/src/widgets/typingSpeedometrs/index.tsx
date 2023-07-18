// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import TypingSpeedometer from "@entities/typingSpeedometer";
import ErrorSpeedometer from "@entities/errorSpeedometer";
import HintContainer from "@shared/components/hint";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ContainerSpeedometersType } from "./types";

// main ====================================================== //
let ContainerSpeedometers: ContainerSpeedometersType = ({ }) => (
    <div id="container_speedometers">
        { /* @ts-ignore */ }
        <HintContainer description="percent errors">
            <ErrorSpeedometer />
        </HintContainer>
        { /* @ts-ignore */ }
        <HintContainer description="char per minutes">
            <TypingSpeedometer />
        </HintContainer>
    </div>
);

// export ==================================================== //
export default ContainerSpeedometers;