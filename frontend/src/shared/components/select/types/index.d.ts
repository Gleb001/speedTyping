// imports =================================================== //
import { FC, HTMLAttributes } from "react";

// helpers =================================================== //
type Data = string[]

// main ====================================================== //
interface Props {
    data: Data,
    value: string
}
type SelectType = FC<
    Props &
    HTMLAttributes<HTMLSelectElement>
>

// export ==================================================== //
export type { SelectType, Data };