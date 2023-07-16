// imports =================================================== //
import React from "react";
import { ErrorCharType } from "./types";

// main ====================================================== //
const ErrorChar: ErrorCharType = ({ value }) => (
    <span className="error_text before_disabled_text">{
        value
    }</span>
);

// export ==================================================== //
export default ErrorChar;