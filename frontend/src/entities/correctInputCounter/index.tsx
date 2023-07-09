// imports =================================================== //
// external
import React from "react";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// slices (FSD)
import Indication from "@shared/components/indication";
// internal
import "./ui/index.css";
import { ErrorCounterType } from "./types";

// main ====================================================== //
let ErrorCounter: ErrorCounterType = ({ }) => {

    let check_point = useAppSelector(state => state.check_point);
    let mistakes_counter = useAppSelector(state => state.mistakes_counter);

    function getPercentError(type: "current" | "previous") {
        return (mistakes_counter[type].length / (check_point[type] + 1)) * 100;
    }

    return (
        <Indication
            value={
                getPercentError("current").toFixed(1) +
                " / " +
                getPercentError("previous").toFixed(1) +
                "%"
            }
            icon_class_name="exclamation_mark"
            icon_content="!"
        />
    );

};

// export ==================================================== //
export default ErrorCounter;