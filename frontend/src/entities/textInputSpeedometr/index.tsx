// imports =================================================== //
// external
import React, { useEffect, useState } from "react";
import convertToMinutes from "@shared/helpers/convertToMinutes";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// internal
import { TextSpeedometrInputType } from "./types";

// main ====================================================== //
let TextInputSpeedometr: TextSpeedometrInputType = ({ all }) => {

    let check_point = useAppSelector(state => state.check_point);

    let [start, setStart] = useState(0);
    let [speed, setSpeed] = useState(0);
    let [total_time, setTotalTime] = useState(0);

    useEffect(() => {
        if (check_point !== 0) {
            let difference_time = convertToMinutes(Date.now() - start);
            if (difference_time >= 1) {
                setSpeed(0);
                setTotalTime(0);
            } else {
                setSpeed(Math.floor(1 / difference_time));
                setTotalTime(total_time + difference_time);
            }
            setStart(Date.now());
        } else {
            setStart(0);
            setSpeed(0);
        }
    }, [check_point]);

    let total_speed = !total_time ? 0 : Math.floor(check_point / total_time);
    return (
        <>
            <div>Total Speed: {total_speed} сим./мин.</div>
            {all ? <div>Current Speed: {speed} сим./мин.</div> : ""}
        </>
    );

};

// export ==================================================== //
export default TextInputSpeedometr;