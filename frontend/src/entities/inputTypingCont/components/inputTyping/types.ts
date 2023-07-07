// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type InputTypingType = FC<{
    current_symbol: string | null
    updateValue: () => void
    value: string
}>

// export ==================================================== //
export { InputTypingType };