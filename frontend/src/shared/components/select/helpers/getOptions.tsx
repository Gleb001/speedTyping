// imports ================================================== //
import type { Data } from "../types";
import React from "react";

// main ===================================================== //
function getOptions(data: Data) {
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