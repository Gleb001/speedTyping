// imports =================================================== //
// external
import React, { useState } from "react";
// internal
import { InputType } from "./types";

// main ====================================================== //
let Input: InputType = (props) => {
    let [value, setValue] = useState("");
    return (
        <input
            onChange={(event) => setValue(event.target.value)}
            value={value}
            {...props}
        />
    );
};

// export ==================================================== //
export default Input;