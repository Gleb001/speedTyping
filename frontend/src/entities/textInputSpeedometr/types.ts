// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type TextSpeedometrInputType = FC<{ all?: boolean }>
type CheckPointKey =  "current" | "previous"
type TotalSpeedType = (length_char: number, time: number) => number

// export ==================================================== //
export {
    TextSpeedometrInputType,
    CheckPointKey,
    TotalSpeedType
};