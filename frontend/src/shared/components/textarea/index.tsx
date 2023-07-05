// imports =================================================== //
// libs
import React, { useState } from "react";
// components
import "./ui/index.css";
import { TextareaType } from "./types";

// main ====================================================== //
let Textarea: TextareaType = (props) => {
    let [value, setValue] = useState("");
    return (
        <textarea
            onChange={(event) => setValue(event.target.value)}
            value={value}
            {...props}
        />
    );
};

// export ==================================================== //
export default Textarea;