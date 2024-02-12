// imports =================================================== //
import type { FC } from "react";

// main ====================================================== //
type Keycap = [string, string] | [string]
type LanguagesKeyboard = ("english" | "russia")
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

type Keyboard = FC

// export ==================================================== //
export type {
    Keyboard,
    MatrixKeycapsWithoutSystem,
    MatrixKeycapsWithSystem,
    Keycap,
    TypesKeyboards,
    LanguagesKeyboard
};