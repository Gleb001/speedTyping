// imports =================================================== //
import { FC } from "react";
import type { keycapType } from "@app/redux/reducers/keycap";

// main ====================================================== //

// simple ---------------------------------------------------- //
type KeycapValueType = string | number

// composite ------------------------------------------------- //

// objects
type KeycapType = (KeycapValueType)[]
type matrixKeycapType = ((KeycapType)[])[]

// functions
type KeyboardType = FC<{ matrix_keycaps: matrixKeycapType }>

type getPositionKeycapType = (
    matrix: matrixKeycapType,
    value: keycapType,
) => [number, number] | undefined

type getKeyboardType = (
    matrix_keycaps: matrixKeycapType
) => JSX.Element[]

type getKeycapRefType = (
    keyboard: HTMLDivElement | null,
    matrix_keycaps: matrixKeycapType,
    keycap: keycapType
) => Element | undefined

// export ==================================================== //
export {
    // objects
    KeycapType,
    matrixKeycapType,
    // functions
    KeyboardType,
    getPositionKeycapType,
    getKeyboardType,
    getKeycapRefType
};