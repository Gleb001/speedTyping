// imports ================================================== //
import React from "react";
import getOptions from "./helpers/getOptions";
import type { SelectType } from "./types/index";
import "./ui/index.css";

// main ===================================================== //
const Select: SelectType = ({ data, ...props }) => {

    return (
        <select className="select" {...props}>
            {getOptions(data)}
        </select>
    );

};

// exports ================================================== //
export default Select;