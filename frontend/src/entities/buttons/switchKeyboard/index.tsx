// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as setKeyboard } from "@app/redux/reducers/keyboard";
// components ------------------------------------------------ //
import Button from "@shared/components/button";
// internal -------------------------------------------------- //
import "./ui/index.css";
import type { SwitchKeyboard as SwitchKeyboardType } from "./types/index";

// main ====================================================== //
const SwitchKeyboard: SwitchKeyboardType = () => {

    const dispatch = useAppDispatch();
    const hasKeyboard = useAppSelector(state => state.keyboard.has);

    function handleClick() {
        dispatch(
            setKeyboard({ has: !hasKeyboard })
        );
    }

    return (
        <Button onClick={handleClick}>
            <span className={!hasKeyboard ? "open_keyboard_icon" : ""}>
                {hasKeyboard && "✕"}
            </span>
        </Button>
    );

};

// export ==================================================== //
export default SwitchKeyboard;