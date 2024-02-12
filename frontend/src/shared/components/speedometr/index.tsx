// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useState } from "react";
// internal -------------------------------------------------- //
import classNameIndicator from "./constants/classNameIndicators";
import "./ui/index.css";
import type { Speedometer as SpeedometerType } from "./types";

// main ====================================================== //
let Speedometer: SpeedometerType = ({ value, measurement, status, onIndicate }) => {

    let [previousValue, setPreviousValue] = useState(value);
    let [fixValue, setFixValue] = useState(0);
    let [indicator, setIndicator] = useState<keyof typeof classNameIndicator>("");

    const showingValue = (status === "fix" ? fixValue : value);

    // change previous value by value
    useEffect(() => {
        if (status === "translation") {
            setPreviousValue(value);
        } else {
            setFixValue(previousValue);
        }
    }, [value]);

    // change indicator by status
    useEffect(() => {
        if (status === "fix" && previousValue !== value) {
            const isBest = onIndicate(fixValue, previousValue);
            setIndicator(isBest ? "best" : "worse");
        } else {
            setIndicator("");
        }
    }, [status]);

    return (
        <span className={`${classNameIndicator[indicator]} speedometer`} >
            {showingValue + " " + measurement}
        </span>
    );

};

// export ==================================================== //
export default Speedometer;