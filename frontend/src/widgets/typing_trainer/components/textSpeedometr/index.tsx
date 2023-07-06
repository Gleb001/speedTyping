// imports =================================================== //
// libs
import React, {useState} from "react";
// components
import "./ui/index.css";
import { TextSpeedometrType } from "./types";

// main ====================================================== //
let TextSpeedometr: TextSpeedometrType = ({
    value
}) => {

    return (
        <div id="text_speedometr">{value} сим./мин.</div>
    );

};

// export ==================================================== //
export default TextSpeedometr;