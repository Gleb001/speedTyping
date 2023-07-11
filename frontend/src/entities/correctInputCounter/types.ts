// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type ErrorSpeedometerType = FC<{ }>
type getPercentErrorsType = (
    errors: number, inputs: number, accuracy: number
) => number

// export ==================================================== //
export {
    ErrorSpeedometerType,
    getPercentErrorsType
};