// imports ================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import getOptions from "./helpers/getOptions";
import type { Select as SelectType } from "./types/index";
import "./ui/index.css";

// main ===================================================== //
const Select: SelectType = ({ data, ...props }) => (

    <select className="select" {...props}>
        {getOptions(data)}
    </select>

);


// exports ================================================== //
export default Select;