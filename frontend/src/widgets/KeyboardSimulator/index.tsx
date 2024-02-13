// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect } from "react";
// redux ----------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import TypingTrainer from "@features/TypingTrainer";
import Animate from "@shared/components/animate";
import ToolLine from "@features/ToolLine";
import Keyboard from "@entities/keyboard";
// redux ----------------------------------------------------- //
import { set as setKeyboardData } from "@app/redux/reducers/keyboard";
// helpers --------------------------------------------------- //
import { isEqual } from "@shared/helpers";
// animations ------------------------------------------------ //
import { animations as animationsKeyboard } from "@entities/keyboard/constants/animations";
// internal -------------------------------------------------- //
import "./ui/index.css";
import getKeyboard from "./api/getKeyboard";

// main ====================================================== //
const KeyboardSimulator = () => {

    const dispatch = useAppDispatch();

    const hasKeyboard = useAppSelector(state => state.keyboard.has!);
    const keyboard_layout = useAppSelector(state => state.settings.keyboard_layout!);
    const language = useAppSelector(state => state.settings.language);
    const matrix_keycaps = useAppSelector(state => state.keyboard.matrix_keycaps);

    async function setNewKeyboard() {
        const new_keyboard = await getKeyboard(keyboard_layout, language);
        const isNewKeyboard = !isEqual(new_keyboard, matrix_keycaps);
        if (isNewKeyboard) {
            dispatch(
                setKeyboardData({
                    matrix_keycaps: new_keyboard
                })
            );
        }
    }

    useEffect(() => {
        setNewKeyboard();
    }, [language, keyboard_layout]);

    return (
        <div className="keyboardSimulator">
            <TypingTrainer />
            <ToolLine />
            <Animate
                has={hasKeyboard}
                onShow={animationsKeyboard.show}
                onHide={animationsKeyboard.hide}
            >
                <Keyboard matrix_keycaps={matrix_keycaps} />
            </Animate>
        </div>
    );

};

// export ==================================================== //
export default KeyboardSimulator;