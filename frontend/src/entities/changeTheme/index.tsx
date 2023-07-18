// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState } from "react";
// redux ----------------------------------------------------- //
import { set as set_keyboard_data } from "@app/redux/reducers/keyboardData";
// components ------------------------------------------------ //
import Button from "@shared/components/button";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonChangeThemeType } from "./types";

// main ====================================================== //
let ButtonChangeTheme: ButtonChangeThemeType = ({ }) => {

    let [isLightTheme, setIsLightTheme] = useState(false);

    function handleClick() {
        let root = document.documentElement;
        root.style.cssText = `
            --primary-color:  ${!isLightTheme ? "white" : "#2C2C2C"};
            --primary-additional-color:  ${!isLightTheme ? "#d4d4d4" : "#353535"};
            --secondary-additional-color:  ${!isLightTheme ? "#999999" : "#505050"};
            --secondary-color: ${!isLightTheme ? "#2C2C2C" : "white"}; 
        `;
        setIsLightTheme(!isLightTheme);
    }

    return (
        <Button
            icon_className={
                isLightTheme ?
                    "light_theme_icon" :
                    "dark_theme_icon"
            }
            actions={{ "onClick": handleClick }}
            name={
                isLightTheme ?
                    "dark theme" :
                    "light theme"
            }
        />
    );

};

// export ==================================================== //
export default ButtonChangeTheme;