// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import TypingSpeedometrs from "@widgets/typingSpeedometrs";
import TypingTrainer from "@entities/typingTrainer";
import InputKeyboard from "@entities/keyboard";
import ToolLine from "@widgets/toolLine";
// constants ------------------------------------------------- //
import getKeyboard from "@shared/constants/keyboards";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { HomePageType } from "./types";

// main ====================================================== //
let HomePage: HomePageType = ({ }) => {
    return (
        <div id="home_page">
            <TypingSpeedometrs />
            <TypingTrainer />
            <ToolLine />
            <InputKeyboard
                matrix_keycaps={getKeyboard("ansi", "english")}
            />
        </div>
    );
};

// export ==================================================== //
export default HomePage;