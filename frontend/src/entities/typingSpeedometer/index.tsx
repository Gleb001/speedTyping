// imports =================================================== //
// react ----------------------------------------------------- //
import React, { useEffect, useState } from "react";
// helpers --------------------------------------------------- //
import convertToMinutes from "@shared/helpers/convertToMinutes";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import Speedometr from "@shared/components/speedometr";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { TypingSpeedometerType, TotalSpeedType } from "./types";

// inner logic main function component ======================= //
const getSpeed: TotalSpeedType = (length_char, time) => (
    time !== 0 ? Math.floor(length_char / time) : 0
);

// main ====================================================== //
let TypingSpeedometer: TypingSpeedometerType = ({ }) => {

    let check_point = useAppSelector(state => state.check_point);

    let [start, setStart] = useState(0);
    let [total_time, setTotalTime] = useState(0);

    useEffect(() => {
        if (check_point.current !== 0) {
            let difference_time = convertToMinutes(Date.now() - start);
            setTotalTime(difference_time < 1 ? (total_time + difference_time) : 0);
            setStart(Date.now());
        } else {
            setStart(0);
        }
    }, [check_point]);

    function getValue(type: "current" | "previous") {
        return getSpeed(check_point[type], total_time);
    }

    return (
        <Speedometr
            current={
                check_point.current === 0 ?
                    getValue("previous") :
                    getValue("current")
            }
            type={
                check_point.current == 0 ?
                    "increase" :
                    "none"
            }
        />
    );

};

// export ==================================================== //
export default TypingSpeedometer;