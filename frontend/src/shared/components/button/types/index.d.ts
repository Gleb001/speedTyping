// imports =================================================== //
import { FC, HTMLAttributes } from "react";

// main ====================================================== //
interface Props {
    name?: string | number,
    icon_className?: string,
}
type ButtonType = FC<
    Props &
    HTMLAttributes<HTMLButtonElement>
>

// export ==================================================== //
export type { ButtonType };