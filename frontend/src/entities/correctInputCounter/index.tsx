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

    let percent_mistakes = 0;
    if (check_point !== 0) {
        percent_mistakes = Math.floor(
            mistakes_counter * 100 / check_point
        );
    }

    return (
        <div>
            Correct Input: {100 - percent_mistakes}%
        </div>
    );

};

// export ==================================================== //
export default CorrectInputCounter;