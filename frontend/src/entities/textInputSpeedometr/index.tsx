// imports =================================================== //
// external
import React, { useEffect, useState } from "react";
import convertToMinutes from "@shared/helpers/convertToMinutes";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// slices (FSD)
import Indication from "@shared/components/indication";
// internal
import "./ui/index.css";
import { TextSpeedometrInputType, TotalSpeedType } from "./types";

// inner logic main function component ======================= //
const total_speed: TotalSpeedType = (length_char, time) => (
    time !== 0 ? Math.floor(length_char / time) : 0
);

// main ====================================================== //
let TextInputSpeedometr: TextSpeedometrInputType = ({ all = false }) => {

    let check_point = useAppSelector(state => state.check_point);

    let [start, setStart] = useState(0);
    let [total_time, setTotalTime] = useState(0);

    let [speed, setSpeed] = useState(0);
    let [prev_speed, setPrevSpeed] = useState(0);
    let current_speed = total_speed(check_point["current"], total_time);

    useEffect(() => {

        if (check_point.current === 0) {
            setStart(0);
            setSpeed(0);
            setPrevSpeed(total_speed(check_point["previous"], total_time));
            return;
        }

        let difference_time = convertToMinutes(Date.now() - start);
        let speed_value = 0;
        let total_time_value = 0;
        if (difference_time < 1) {
            speed_value = Math.floor(1 / difference_time);
            total_time_value = total_time + difference_time;
        }

        setStart(Date.now());
        setSpeed(speed_value);
        setTotalTime(total_time_value);

    }, [check_point]);

    return (
        <>
            <Indication
                value={`${current_speed} / ${prev_speed}`}
                icon_class_name="speed_typing"
            />
            {all ? <Indication value={speed} /> : ""}
        </>
    );

};

// export ==================================================== //
export default TextInputSpeedometr;