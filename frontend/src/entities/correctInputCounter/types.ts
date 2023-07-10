// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
// functions
type ErrorSpeedometrType = FC<{ }>
type getPercentErrorsType = (
    errors: number, inputs: number, accuracy: number
) => number

// export ==================================================== //
export {
    ErrorSpeedometrType,
    getPercentErrorsType
};