// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// helpers --------------------------------------------------- //
import {getPercent} from "@shared/helpers/maths";
// redux ----------------------------------------------------- //
import { useAppSelector } from "@shared/hooks/useAppSelector";
// components ------------------------------------------------ //
import Speedometer from "@shared/components/speedometr";
// internal -------------------------------------------------- //
import "./ui/index.css";
import { ErrorSpeedometerType } from "./types";

// main ====================================================== //
let ErrorSpeedometer: ErrorSpeedometerType = ({ }) => {

    let check_point = useAppSelector(state => state.check_point);
    let mistakes_counter = useAppSelector(state => state.mistakes_counter);

    function getValue(type: "current" | "previous") {
        return getPercent(
            mistakes_counter[type],
            check_point[type] === 0 ? 1 : check_point[type],
            1
        );
    }

    return (
        <Speedometer
            measurement="%"
            current={
                check_point.current === 0 ?
                    getValue("previous") :
                    getValue("current")
            }
            type={
                check_point.current === 0 ?
                    "decrease" :
                    "none"
            }
        />
    );

};

// export ==================================================== //
export default ErrorSpeedometer;