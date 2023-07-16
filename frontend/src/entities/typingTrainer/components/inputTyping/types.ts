// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type InputTypingType = FC<{
    updateTextTyping: (hasError: boolean) => void,
    isResetValue: boolean,
    active_char: string,
}>

// export ==================================================== //
export { InputTypingType };