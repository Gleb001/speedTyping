// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
// functions 
type SpeedometrType = FC<{
    current: number,
    type: TypeSpeedometrType,
}>

// objects
interface ColorListType {
    "white": "--secondary-color",
    "green": "--best-result-color",
    "red": "--mistake-color",
}

// simple
type ColorType = ColorListType[keyof ColorListType]
type TypeSpeedometrType = (
    "increase" |
    "decrease" |
    "none"
)

// export ==================================================== //
export {
    SpeedometrType,
    ColorListType,
    ColorType
};