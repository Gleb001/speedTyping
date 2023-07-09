// imports =================================================== //
// external
import React from "react";
// internal
import "./ui/index.css";
import { IndicationType } from "./types";

// main ====================================================== //
let Indication: IndicationType = ({
    value,
    icon_class_name = "",
    icon_content = ""
}) => {
    return (
        <span className="indication">
            <span>{value}</span>
            <span className={icon_class_name}>{icon_content}</span>
        </span>
    );
};

// export ==================================================== //
export default Indication;