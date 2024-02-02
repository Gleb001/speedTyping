// imports =================================================== //
// moveton --------------------------------------------------- ///
import { AnimationJS } from "moveton";
// react ----------------------------------------------------- //
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// components ------------------------------------------------ //
import SwitchVisibilitySettings from "@entities/buttons/switchSettings"
// internal -------------------------------------------------- //
import { SettingsType } from "./types";
import "./ui/index.css";
import Select from "@shared/components/select";
import DATA from "./constants/data";

// main ====================================================== //
let Settings: SettingsType = () => {

    const SettingsRef = useRef<HTMLDivElement | null>(null);
    let [selected, setSelected] = useState<string>(DATA[0].text);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    useEffect(() => {

        // animation show
        let heightWindow = window.innerHeight;
        let widthWindow = window.innerWidth;
        let centerHeight = Math.floor((heightWindow - SettingsRef.current!.offsetHeight) / 2);
        let centerWidth = Math.floor((widthWindow - SettingsRef.current!.offsetWidth) / 2);

        SettingsRef.current!.style.left = `${centerWidth}px`;
        let show_animation = new AnimationJS(
            [SettingsRef.current!],
            {
                top: `${heightWindow} -> ${centerHeight}px`
            }
        );

        show_animation.start("linear", 1000);

    }, []);
    useLayoutEffect(() => {
        return () => {
            
            let heightWindow = window.innerHeight;
            let centerHeight = Math.floor((heightWindow - SettingsRef.current!.offsetHeight) / 2);

            let hide_animation = new AnimationJS(
                [SettingsRef.current!],
                {
                    top: `${centerHeight} -> ${heightWindow}px`
                }
            );
            hide_animation.start("linear", 1000);

        };
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