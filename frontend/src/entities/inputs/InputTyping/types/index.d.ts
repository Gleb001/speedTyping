// imports =================================================== //
import type { FC } from "react";

// main ====================================================== //
interface Props {
    isClear: boolean,
    currentChar: string,
    getNextChar: (hasWrong: boolean) => void,
}
type InputTyping = FC<Props>

// export ==================================================== //
export type { InputTyping };