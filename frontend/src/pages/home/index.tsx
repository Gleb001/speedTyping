// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import TypingSpeedometrs from "@widgets/typingSpeedometrs";
import TypingTrainer from "@entities/typingTrainer";
import Keyboard from "@entities/keyboard";
import ToolLine from "@widgets/toolLine";
// constants ------------------------------------------------- //
import getKeyboard from "@shared/constants/keyboards";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { HomePageType } from "./types";

// main ====================================================== //
let HomePage: HomePageType = ({ }) => {

    let hasKeyboard = useAppSelector(state => state.keyboard_data.has)

    return (
        <div id="home_page">
            <TypingTrainer />
            <ToolLine />
            {
                hasKeyboard ? 
                    <Keyboard
                        matrix_keycaps={getKeyboard("ansi", "english")}
                    /> : ""
            }
        </div>
    );
    
};

// export ==================================================== //
export default HomePage;