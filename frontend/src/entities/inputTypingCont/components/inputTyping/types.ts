// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type InputTypingType = FC<{
    updateTextTyping: (hasError: boolean) => void
    current_symbol: string | null
    isResetValue: boolean
    // value: string
}>

// export ==================================================== //
export { InputTypingType };