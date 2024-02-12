// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState } from "react";
// internal -------------------------------------------------- //
import { SwitchVisibilitySettingsType } from "./types";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import Button from "@shared/components/button";
import { set as setSettings } from "@app/redux/reducers/settings";
import { useAppSelector } from "@shared/hooks/useAppSelector";

// main ====================================================== //
let SwitchVisibilitySettings: SwitchVisibilitySettingsType = () => {

    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.settings.isOpen);
    let [hasClick, setHasClick] = useState(false);

    function handleClick() {
        if (!hasClick) {
            setHasClick(true);
            dispatch(
                setSettings({ isOpen: !isOpen })
            );
        }
    }

    return (
        <Button onClick={handleClick}>
            {isOpen ? "✕" : "Настройки"}
        </Button>
    );

};

// export ==================================================== //
export default SwitchVisibilitySettings;