// imports =================================================== //
import type { FC } from "react";

// main ====================================================== //
type TypeChar = "active" | "wrong" | "disable"
interface TypingChar {
    text: string,
    type: TypeChar
}
type TypingTrainer = FC

// export ==================================================== //
export type {
    TypeChar,
    TypingChar,
    TypingTrainer
};