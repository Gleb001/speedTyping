// imports =================================================== //
import { FC } from "react";

// main ====================================================== //
type InputTypingType = FC<{
    updateValue: () => void
    // setError: () => void
    current_symbol: string | null
    value: string
}>

// export ==================================================== //
export { InputTypingType };