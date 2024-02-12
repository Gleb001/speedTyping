// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect } from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import TypingTrainer from "@features/TypingTrainer";
import Animate from "@shared/components/animate";
import ToolLine from "@features/ToolLine";
import Keyboard from "@entities/keyboard";
// animations ------------------------------------------------ //
import { animations as animationsKeyboard } from "@entities/keyboard/constants/animations";
// internal -------------------------------------------------- //
import "./ui/index.css";

// main ====================================================== //
const KeyboardSimulator = () => {

    const hasKeyboard = useAppSelector(state => state.keyboard.has!);

    return (
        <div className="keyboardSimulator">
            <TypingTrainer />
            <ToolLine />
            <Animate
                has={hasKeyboard}
                onShow={animationsKeyboard.show}
                onHide={animationsKeyboard.hide}
            >
                <Keyboard />
            </Animate>
        </div>
    );

};

// export ==================================================== //
export default KeyboardSimulator;