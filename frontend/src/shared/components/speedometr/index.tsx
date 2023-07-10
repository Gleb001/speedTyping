// imports =================================================== //
// external
import React, { useEffect, useState } from "react";
// internal
import "./ui/index.css";
import { SpeedometrType, ColorListType, ColorType } from "./types";

// constants ================================================= //
const COLORS: ColorListType = {
    "green": "--best-result-color",
    "white": "--secondary-color",
    "red": "--mistake-color",
}

// main ====================================================== //
let Speedometr: SpeedometrType = ({ current, type }) => {

    let [previous, setPrevious] = useState(0);
    let [color, setColor] = useState<ColorType>(COLORS.white);

    useEffect(() => {
        if (type === "none" || (current === 0 && previous === 0)) return;

        let comparison_operator = type === "decrease" ? "<" : ">";
        let isBest = eval(`${current} ${comparison_operator} ${previous}`);
        
        setColor(isBest ? COLORS.green : COLORS.red);
        setPrevious(current);
    }, [type]);

    let isReset = ( type === "none" && color !== COLORS.white);
    if (isReset) setTimeout(() => setColor(COLORS.white), 200);
    return (
        <span className="speedometr" style={{ color: `var(${color})` }}>{
            current
        }</span>
    );

};

// export ==================================================== //
export default Speedometr;