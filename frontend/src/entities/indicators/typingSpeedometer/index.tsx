// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useState } from "react";
// helpers --------------------------------------------------- //
import convertToMinutes from "@shared/helpers/convertToMinutes";
import { getSpeed } from "@shared/helpers/maths";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import Speedometr from "@shared/components/speedometr";
// internal -------------------------------------------------- //
import "./ui/index.css";
import type { TypingSpeedometerType } from "./types/index";

// main ====================================================== //
let TypingSpeedometer: TypingSpeedometerType = ({ }) => {

    let [start, setStart] = useState(0);
    let [total_time, setTotalTime] = useState(0);

    const charsCounter = useAppSelector(state => state.counters.chars);
    const value = Math.floor(getSpeed(charsCounter, total_time));
    const status = (charsCounter === 0 ? "fix" : "translation");

    useEffect(() => {
        if (charsCounter === 0) {
            setStart(0);
        } else {
            let difference_time = convertToMinutes(Date.now() - start);
            setTotalTime(difference_time < 1 ? (total_time + difference_time) : 0);
            setStart(Date.now());
        }
    }, [charsCounter]);

    return (
        <Speedometr
            value={value}
            status={status}
            onIndicate={(previous, current) => previous < current}
            measurement="cpm"
        />
    );

};

// export ==================================================== //
export default TypingSpeedometer;