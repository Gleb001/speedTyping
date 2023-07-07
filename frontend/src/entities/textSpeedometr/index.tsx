// imports =================================================== //
// external
import React, { useEffect, useState } from "react";
import convertToMinutes from "@shared/helpers/convertToMinutes";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// internal
import "./ui/index.css";
import { totalSpeedType } from "./types";

// main ====================================================== //
let TextSpeedometr: totalSpeedType = ({ }) => {

    let check_point = useAppSelector(state => state.check_point);

    let [start, setStart] = useState(0);
    let [speed, setSpeed] = useState(0);
    let [total_time, setTotalTime] = useState(0);
    let [input_symbols, setInputSymbols] = useState(0);

    useEffect(() => {
        if (check_point !== 0) {
            let difference_time = convertToMinutes(Date.now() - start);
            if (difference_time >= 1) {
                setSpeed(0);
                setTotalTime(0);
                setInputSymbols(0);
            } else {
                setSpeed(Math.floor(1 / difference_time));
                setTotalTime(total_time + difference_time);
                setInputSymbols(++input_symbols);
            }
            setStart(Date.now());
        } else {
            setStart(0);
        }
    }, [check_point]);

    let total_speed = !total_time ? 0 : Math.floor(input_symbols / total_time);
    return (
        <div id="totalSpeed">
            <div>Total Speed: {total_speed} сим./мин.</div>
            <div>Current Speed: {speed} сим./мин.</div>
        </div>
    );

};

// export ==================================================== //
export default TextSpeedometr;