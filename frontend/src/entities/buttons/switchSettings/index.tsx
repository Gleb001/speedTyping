// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import { SwitchVisibilitySettingsType } from "./types";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import Button from "@shared/components/button";
import { set as setSettings } from "@app/redux/reducers/settings";
import { useAppSelector } from "@shared/hooks/useAppSelector";

// main ====================================================== //
let SwitchVisibilitySettings: SwitchVisibilitySettingsType = () => {

    let dispatch = useAppDispatch();
    let isOpen = useAppSelector((state) => state.settings.isOpen);

    function handleClick() {
        dispatch(
            setSettings({ isOpen: !isOpen })
        );
    }

    return (
        <Button
            // className="icon_settings"
            onClick={handleClick}
            name={isOpen ? "X" : "Настройки"}
        />
    );

};

// export ==================================================== //
export default SwitchVisibilitySettings;