// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import { ChangeLayoutKeyboardType } from "./types";
import Select from "@shared/components/select";
import { TypesKeyboards } from "@widgets/KeyboardSimulator/constants/keyboards";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { set as setSettings } from "@app/redux/reducers/settings";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import DATA from "./constants/data";

// main ====================================================== //
let ChangeLayoutKeyboard: ChangeLayoutKeyboardType = () => {

    const keyboard_layout = useAppSelector(state => state.settings.keyboard_layout!);
    const dispatch = useAppDispatch();

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if (keyboard_layout !== event.target.value) {
            dispatch(
                setSettings({
                    keyboard_layout: event.target.value as TypesKeyboards
                })
            );
        }
    }

    return (
        <Select
            onChange={handleChange}
            value={keyboard_layout}
            data={DATA}
        />
    );

};

// export ==================================================== //
export default ChangeLayoutKeyboard;