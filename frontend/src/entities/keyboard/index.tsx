// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// special --------------------------------------------------- //
import "./ui/index.css";
import RowKeycaps from "./components/RowKeycaps";
import { Keyboard as KeyboardType } from "./types";

// main ====================================================== //
const Keyboard: KeyboardType = ({ matrix_keycaps }) => {

    return (
        <div id="keyboard">
            {
                matrix_keycaps.length !== 0 && matrix_keycaps.map(
                    (keycaps, index) => {
                        const key = "row_keycaps " + index;
                        return <RowKeycaps key={key} data={keycaps} />;
                    }
                )
            }
        </div>
    );

}

// export ==================================================== //
export default Keyboard;