// imports =================================================== //
// react ----------------------------------------------------- //
import React, { ChangeEvent, useState } from "react";
// hooks ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
// components ------------------------------------------------ //
import Select from "@shared/components/select";
// internal -------------------------------------------------- //
import type { ButtonChangeTheme as ButtonChangeThemeType } from "./types";
import { ColorTheme, set as setSettings } from "@app/redux/reducers/settings";
import { ColorsThemes, DATA } from "./constants/data";
import setRootColors from "./helpers/setRootColors";

// main ====================================================== //
let ButtonChangeTheme: ButtonChangeThemeType = () => {

    const dispatch = useAppDispatch();
    const currentTheme = useAppSelector(state => state.settings.color_theme!);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const targetTheme = event.target.value as ColorTheme;
        if (currentTheme !== targetTheme) {
            setRootColors(ColorsThemes[targetTheme]);
            dispatch(
                setSettings({ color_theme: targetTheme })
            );
        }
    }

    return (
        <Select
            value={currentTheme}
            onChange={handleChange}
            data={DATA}
        />
    );

};

// export ==================================================== //
export default ButtonChangeTheme;