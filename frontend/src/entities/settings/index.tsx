// imports =================================================== //
// moveton --------------------------------------------------- ///
import { AnimationJS } from "moveton";
// react ----------------------------------------------------- //
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// components ------------------------------------------------ //
import SwitchVisibilitySettings from "@entities/buttons/switchSettings";
import Select from "@shared/components/select";
// internal -------------------------------------------------- //
import "./ui/index.css";
import DATA from "./constants/data";

// main ====================================================== //
const Settings = () => {

    const SettingsRef = useRef<HTMLDivElement | null>(null);
    let [selected, setSelected] = useState<string>(DATA[0].text);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    useEffect(() => {
        let widthWindow = window.innerWidth;
        let centerWidth = (widthWindow - SettingsRef.current!.offsetWidth) / 2;
        SettingsRef.current!.style.left = `${centerWidth}px`;
    }, []);

    return (
        <div className="settings" ref={SettingsRef}>
            <div className="header_settings">
                <div>
                    <span>Настройки</span>
                    <Select
                        data={DATA.map((item) => item.text)}
                        onChange={handleChange}
                        value={selected}
                    />
                </div>
                <SwitchVisibilitySettings />
            </div>
            <div className="list_settings">
                {DATA.filter((item) => item.text === selected)[0].value}
            </div>
        </div>
    );
};

// export ==================================================== //
export default Settings;