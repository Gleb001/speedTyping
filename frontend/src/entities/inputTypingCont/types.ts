// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type DisabledTextType = JSX.Element | string
type TextTypingRefType = HTMLParagraphElement | null

type ErrorCharType = FC<{value: string}>
type TextTypingType = FC<{}>

// export ==================================================== //
export {
    TextTypingRefType,
    ErrorCharType,
    TextTypingType,
    DisabledTextType
};