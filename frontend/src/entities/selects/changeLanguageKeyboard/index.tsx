// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import { ChangeLanguageKeyboardType } from "./types";
import Select from "@shared/components/select";
import { Languages } from "@widgets/KeyboardSimulator/constants/keyboards";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { set as setSettings } from "@app/redux/reducers/settings";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import DATA from "./constants/data";

// main ====================================================== //
let ChangeLanguageKeyboard: ChangeLanguageKeyboardType = () => {

    const language = useAppSelector(state => state.settings.language!);
    const dispatch = useAppDispatch();

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if (language !== event.target.value) {
            dispatch(
                setSettings({
                    language: event.target.value as Languages
                })
            );
        }
    }

    return (
        <Select
            onChange={handleChange}
            value={language}
            data={DATA}
        />
    );

};

// export ==================================================== //
export default ChangeLanguageKeyboard;