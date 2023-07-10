// imports =================================================== //
// external
import React from "react";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// slices (FSD)
import Speedometr from "@shared/components/speedometr";
// internal
import "./ui/index.css";
import { ErrorSpeedometrType, getPercentErrorsType } from "./types";

// inner logic main function component ======================= //
const getPercentErrors: getPercentErrorsType = (
    inputs, errors, accuracy
) => {
    let accuracy_coef = 10 * accuracy;
    let percent_errors = (errors / inputs) * 10000;
    return Math.trunc(percent_errors / accuracy_coef) / accuracy_coef;
}

// main ====================================================== //
let ErrorSpeedometr: ErrorSpeedometrType = ({ }) => {

    let check_point = useAppSelector(state => state.check_point);
    let mistakes_counter = useAppSelector(state => state.mistakes_counter);

    function getValue(type: "current" | "previous") {
        return getPercentErrors(
            check_point[type] === 0 ? 1 : check_point[type],
            mistakes_counter[type],
            1
        );
    }

    return (
        <Speedometr
            current={
                check_point.current === 0 ?
                    getValue("previous") :
                    getValue("current")
            }
            type={
                check_point.current === 0  ?
                    "decrease" :
                    "none"
            }
        />
    );

};

// export ==================================================== //
export default ErrorSpeedometr;