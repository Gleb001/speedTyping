// imports ================================================== //
import React from "react";
import Setting from "../components/Setting";
import ButtonChangeTheme from "@entities/selects/changeColorTheme";
import ChangeLanguageKeyboard from "@entities/selects/changeLanguageKeyboard";
import ChangeLayoutKeyboard from "@entities/selects/changeLanguageKeyboard copy";

// main ===================================================== //
interface DataType {
    text: string,
    value: JSX.Element
}
const DATA: DataType[] = [
    {
        text: "Персонализация",
        value: (
            <div>
                <Setting title="Цветовая тема">
                    <ButtonChangeTheme />
                </Setting>
            </div>
        ),
    },
    {
        text: "Клавиатура",
        value: (
            <div>
                <Setting title="Язык клавиатуры">
                    <ChangeLanguageKeyboard />
                </Setting>
                <Setting title="Раскладка клавиатуры">
                    <ChangeLayoutKeyboard />
                </Setting>
            </div>
        ),
    },
];

// exports ================================================= //
export default DATA;