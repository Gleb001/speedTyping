// imports =================================================== //
import { FC } from "react";

// main ====================================================== //

// simple ---------------------------------------------------- //
type TypeSpeedometrType = "increase" | "decrease" | "none"

// compose --------------------------------------------------- //
interface ColorListType {
    "white": "--secondary-additional-color",
    "green": "--best-result-color",
    "red": "--mistake-color",
}
type SpeedometerType = FC<{
    current: number,
    type: TypeSpeedometrType,
    measurement: string,
}>

// export ==================================================== //
export {
    // compose
    SpeedometerType,
    ColorListType,
};