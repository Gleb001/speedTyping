// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useMemo, useState } from "react";
// helpers --------------------------------------------------- //
import { getPercent } from "@shared/helpers/maths";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import Speedometer from "@shared/components/speedometr";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ErrorSpeedometerType } from "./types/index";

// main ====================================================== //
let ErrorSpeedometer: ErrorSpeedometerType = ({ }) => {

    const charsCounter = useAppSelector(state => state.counters.chars);
    const mistakesCounter = useAppSelector(state => state.counters.mistakes);

    const total = (charsCounter === 0 ? 1 : charsCounter);
    const value = getPercent(mistakesCounter, total, 1);
    const status = (charsCounter === 0 ? "fix" : "translation");

    return (
        <Speedometer
            value={value}
            status={status}
            onIndicate={(previous, current) => previous > current}
            measurement="%"
        />
    );

};

// export ==================================================== //
export default ErrorSpeedometer;