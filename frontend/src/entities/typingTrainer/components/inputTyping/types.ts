// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type InputTypingType = FC<{
    updateTextTyping: (hasError: boolean) => void,
    isResetValue: boolean,
}>

// export ==================================================== //
export { InputTypingType };