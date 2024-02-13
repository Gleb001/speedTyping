// imports =================================================== //
import type { FC } from "react";

// main ====================================================== //
type Keycap = [string, string] | [string]
type LanguagesKeyboard = ("english" | "russia" | "franch" | "deutsche")
type TypesKeyboards = ("ansi")
type MatrixKeycapsWithoutSystem = [
    Keycap[],
    Keycap[],
    Keycap[],
    Keycap[]
]
type MatrixKeycapsWithSystem = [
    Keycap[],
    Keycap[],
    Keycap[],
    Keycap[],
    Keycap[]
]

interface Props {
    matrix_keycaps: MatrixKeycapsWithSystem | []
}
type Keyboard = FC<Props>

// export ==================================================== //
export type {
    Keyboard,
    MatrixKeycapsWithoutSystem,
    MatrixKeycapsWithSystem,
    Keycap,
    TypesKeyboards,
    LanguagesKeyboard
};