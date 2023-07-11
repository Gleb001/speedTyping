// imports =================================================== //
import { FC } from "react";

// main ====================================================== //

// simple ---------------------------------------------------- //
type DisabledTextType = JSX.Element | string
type TextTypingRefType = HTMLParagraphElement | null

// composite ------------------------------------------------- //
type ErrorCharType = FC<{value: string}>
type TypingTrainerType = FC<{}>

// export ==================================================== //
export {
    // simple
    TextTypingRefType,
    DisabledTextType,
    // composite
    ErrorCharType,
    TypingTrainerType,
};