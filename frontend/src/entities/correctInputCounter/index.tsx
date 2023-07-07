// imports =================================================== //
// external
import React from "react";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// internal
import { CorrectInputCounterType } from "./types";

// main ====================================================== //
let CorrectInputCounter: CorrectInputCounterType = ({ }) => {

    let check_point = useAppSelector(state => state.check_point)
    let mistakes_counter = useAppSelector(state => state.mistakes_counter);

    function getCorrectInput(type: "current" | "previous") {
        let percent_mistakes = !check_point[type] ? 100 : Math.floor(
            mistakes_counter[type] * 100 / (check_point[type] + 1)
        );
        return (100 - percent_mistakes);
    }

    return (
        <div>
            Correct Input:
                {getCorrectInput("current")}/
                {getCorrectInput("previous")}
            %
        </div>
    );

};

// export ==================================================== //
export default CorrectInputCounter;