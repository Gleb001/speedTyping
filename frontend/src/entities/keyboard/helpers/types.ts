// imports =================================================== //
import type { keycapType } from "@app/redux/reducers/keycap";

// main ====================================================== //

// simple ---------------------------------------------------- //
type KeycapValueType = string
type ClassNamesKeycap = "valid_keycap" | "no_active_keycap" | "invalid_keycap"

// composite ------------------------------------------------- //

// objects
type KeycapType = (KeycapValueType)[]
type matrixKeycapType = ((KeycapType)[])[]

// functions
type getPositionKeycapType = (
    matrix: matrixKeycapType,
    value: keycapType,
) => [number, number] | undefined

type getKeycapRefType = (
    keyboard: HTMLDivElement | null,
    matrix_keycaps: matrixKeycapType,
    keycap: keycapType,
) => HTMLElement | undefined

type getClassNameKeycapType = (
    type: "up" | "down",
    keycap: KeycapValueType,
    symbol: string,
) => ClassNamesKeycap

type getCurrentKeycapsType = (
    keyboardRef: HTMLDivElement | null,
    matrix_keycaps: matrixKeycapType,
    keycap: string
) => [HTMLElement | undefined, HTMLElement | undefined] | []

type actionOnKeycapsType = (
    type: "show" | "hide",
    keyboardRef: HTMLDivElement | null,
    matrix_keycaps: matrixKeycapType,
    char: string,
) => void

// export ==================================================== //
export {
    getPositionKeycapType,
    getKeycapRefType,
    getClassNameKeycapType,
    getCurrentKeycapsType,
    actionOnKeycapsType,
};