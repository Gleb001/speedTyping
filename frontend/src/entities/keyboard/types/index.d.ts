// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type KeycapValueType = string
type KeycapType = (KeycapValueType)[]
type matrixKeycapType = ((KeycapType)[])[]

type KeyboardType = FC<{
    matrix_keycaps: matrixKeycapType,
}>

// export ==================================================== //
export {
    KeyboardType,
    KeycapType,
    matrixKeycapType,
};