// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type TypingSpeedometerType = FC<{ }>
type TotalSpeedType = (length_char: number, time: number) => number

// export ==================================================== //
export {
    TypingSpeedometerType,
    TotalSpeedType
};