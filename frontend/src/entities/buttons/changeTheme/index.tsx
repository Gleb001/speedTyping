// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useState } from "react";
// components ------------------------------------------------ //
import Button from "@shared/components/button";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ButtonChangeThemeType } from "./types/index";

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
            onClick={handleClick}
            name={isLightTheme ? "Тёмная" : "Светлая"}
        />
    );

};

// export ==================================================== //
export default ButtonChangeTheme;