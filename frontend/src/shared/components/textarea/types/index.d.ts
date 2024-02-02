// imports =================================================== //
import { FC, HTMLInputTypeAttribute } from "react";

// main ====================================================== //
type TextareaType = FC<{
    className?: string,
    id?: string,
    disabled?: boolean,
    rows?: number,
    value?: any
}>

// export ==================================================== //
export { TextareaType };