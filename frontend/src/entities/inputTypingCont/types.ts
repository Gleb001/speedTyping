// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type TextTypingRefType = HTMLParagraphElement | null
type ErrorType = FC<{value: string}>
type TextTypingType = FC<{}>

// export ==================================================== //
export { TextTypingRefType, ErrorType, TextTypingType };