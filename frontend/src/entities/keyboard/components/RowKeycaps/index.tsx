// imports =================================================== //
// react ----------------------------------------------------- //
import React from "react";
// components ------------------------------------------------ //
import Keycap from '../Keycap';
// internal -------------------------------------------------- //
import './ui/index.css';
import type { RowKeycaps as RowKeycapsType } from './types/index.d.ts';
import getPropsForKeycapByIndex from "./helpers/getPropsForKeycapByIndex";

// main ====================================================== //
const RowKeycaps: RowKeycapsType = ({ data }) => {

    return (
        <div className="row_keycaps" >
            {
                data.map(
                    (value, index) => {
                        const key = value[0] + " " + index;
                        const [fingerStatus, isLeft] = getPropsForKeycapByIndex(index);
                        return (
                            <Keycap
                                key={key}
                                value={value}
                                fingerStatus={fingerStatus}
                            />
                        );
                    }
                )
            }
        </div>
    );

}

// exports ================================================== //
export default RowKeycaps;