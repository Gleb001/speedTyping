// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// hooks ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import ButtonShowKeyboard from "@entities/buttons/switchKeyboard";
import ButtonOpenSettings from "@entities/buttons/switchSettings";
import TypingSpeedometer from "@entities/indicators/typingSpeedometer";
import ErrorSpeedometer from "@entities/indicators/errorSpeedometer";
import Hint from "@shared/components/hint";
// internal -------------------------------------------------- //
import "./ui/index.css";

// main ====================================================== //
const ToolLine = () => {

    const hasKeyboard = useAppSelector(state => state.keyboard.has);

    return (
        <div className="tool_line">
            <div className="item_container">
                <Hint description={hasKeyboard ? "Убрать клавиатуру" : "Показать клавиатуру"}>
                    <ButtonShowKeyboard />
                </Hint>
                <Hint description="Открыть настройки">
                    <ButtonOpenSettings />
                </Hint>
            </div>
            <div className="item_container">
                <Hint description="Процент ошибок при наборе текста">
                    <ErrorSpeedometer />
                </Hint>
                <Hint description="Показатель скорости набора текста (символы в минуту)">
                    <TypingSpeedometer />
                </Hint>
            </div>
        </div>
    );

};

// export ==================================================== //
export default ToolLine;