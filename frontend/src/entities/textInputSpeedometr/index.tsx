// imports =================================================== //
// external
import React, { useEffect, useState } from "react";
import convertToMinutes from "@shared/helpers/convertToMinutes";
import { useAppSelector } from "@shared/hooks/useAppSelector";
// slices (FSD)
import Indication from "@shared/components/indication";
// internal
import "./ui/index.css";
import { TextSpeedometrInputType } from "./types";

// main ====================================================== //
let TextInputSpeedometr: TextSpeedometrInputType = ({all = false}) => {

    let check_point = useAppSelector(state => state.check_point);

    let [start, setStart] = useState(0);
    let [speed, setSpeed] = useState(0);
    let [prev_speed, setPrevSpeed] = useState(0);
    let [total_time, setTotalTime] = useState(0);
    let [prev_check_point, setPrevCheckPoint] = useState(0);

    useEffect(() => {
        if (check_point.current !== 0) {
            let difference_time = convertToMinutes(Date.now() - start);
            if (difference_time >= 1) {
                setSpeed(0);
                setTotalTime(0);
            } else {
                setSpeed(Math.floor(1 / difference_time));
                setTotalTime(total_time + difference_time);
                setPrevCheckPoint(prev_check_point + 1);
            }
            setStart(Date.now());
        } else {
            setStart(0);
            setSpeed(0);
            setPrevSpeed(getTotalSpeed("previous"));
        }
    }, [check_point]);

    function getTotalSpeed(type: "current" | "previous") {
        return (
            !total_time ? 0 : Math.floor(check_point[type] / total_time)
        )
    }

    return (
        <>
            <Indication
                value={getTotalSpeed("current") + " / " + prev_speed}
                icon_class_name="speed_typing"
            />
            {all ? <Indication value={speed}/> : ""}
        </>
    );

};

// export ==================================================== //
export default TextInputSpeedometr;