// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// hooks ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import ButtonChangeTheme from "@entities/buttons/changeTheme";
import ButtonShowKeyboard from "@entities/buttons/showKeyboard";
import HintContainer from "@shared/components/hint";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonContainerType } from "./types/index";
import ButtonOpenSettings from "@entities/buttons/switchSettings";

// main ====================================================== //
let ButtonContainer: ButtonContainerType = ({ }) => {

    let hasKeyboard = useAppSelector(state => state.keyboard_data.has);
    let description_button_keyboard = hasKeyboard ? "hide keyboard" : "show keyboard";
    
    return (
        <div className="button_container">
            <HintContainer description={description_button_keyboard}>
                <ButtonShowKeyboard />
            </HintContainer>
            <HintContainer description="Настройки">
                <ButtonOpenSettings />
            </HintContainer>
            {/* <HintContainer description="change theme">
                <ButtonChangeTheme />
            </HintContainer> */}
        </div>
    );

};

// export ==================================================== //
export default ButtonContainer;