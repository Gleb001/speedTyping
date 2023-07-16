// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useState } from "react";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { SpeedometerType, ColorListType } from "./types";

// constants ================================================= //
const COLORS: ColorListType = {
    "green": "--best-result-color",
    "white": "--secondary-additional-color",
    "red": "--mistake-color",
};

// inner logic main function component ======================= //
let getStyleOn = (var_property: string) => `var(${var_property})`;

// main ====================================================== //
let Speedometer: SpeedometerType = ({
    current, type, measurement
}) => {

    let [previous, setPrevious] = useState(0);
    let [color, setColor] = useState<string>(COLORS.white);

    useEffect(() => {

        let isDisabled = type === "none" || (current === 0 && previous === 0);
        if (isDisabled) return;

        let comparison_operator = type === "decrease" ? "<" : ">";
        let isBest = eval(`${current} ${comparison_operator} ${previous}`);
        
        setColor(isBest ? COLORS.green : COLORS.red);
        setPrevious(current);

    }, [type]);

    let isResetColor = type === "none" && color !== COLORS.white;
    if (isResetColor) setColor(COLORS.white);
    return (
        <span
            className="speedometer main_component"
            style={{borderColor: getStyleOn(color)}}
        >{current + " " + measurement}</span>
    );

};

// export ==================================================== //
export default Speedometer;