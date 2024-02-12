// imports ================================================== //
// react ----------------------------------------------------- //
import React from "react";
// internal -------------------------------------------------- //
import type { Props as SelectProps } from "../types";

// main ===================================================== //
function getOptions(data: SelectProps["data"]) {
    return (
        <>{
            data.map((text, index) => {
                return (
                    <option key={index} value={text} >
                        {text}
                    </option>
                )
            })
        }</>
    );
}

// exports ================================================== //
export default getOptions;