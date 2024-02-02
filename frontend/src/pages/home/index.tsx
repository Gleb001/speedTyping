// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import TypingTrainer from "@entities/typingTrainer";
import Keyboard from "@entities/keyboard";
import ToolLine from "@widgets/toolLine";
// constants ------------------------------------------------- //
import getKeyboard from "@shared/constants/keyboards";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { HomePageType } from "./types/index";
import Settings from "@entities/settings";

// main ====================================================== //
let HomePage: HomePageType = ({ }) => {

    const hasKeyboard = useAppSelector(state => state.keyboard_data.has);
    const isOpen = useAppSelector(state => state.settings.isOpen);
    const keyboard_layout = useAppSelector(state => state.settings.keyboard_layout!);
    const language = useAppSelector(state => state.settings.language!);

    const matrix_keycaps = getKeyboard(keyboard_layout, language);

    return (
        <>
            <div id="home_page">
                <TypingTrainer />
                <ToolLine />
                {
                    hasKeyboard && <Keyboard matrix_keycaps={matrix_keycaps} />
                }
            </div>
            { isOpen && <Settings /> }
        </>
    );

};

// export ==================================================== //
export default HomePage;