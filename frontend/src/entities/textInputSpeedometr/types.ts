// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type TypingSpeedometrType = FC<{ }>
type TotalSpeedType = (length_char: number, time: number) => number

// export ==================================================== //
export {
    TypingSpeedometrType,
    TotalSpeedType
};