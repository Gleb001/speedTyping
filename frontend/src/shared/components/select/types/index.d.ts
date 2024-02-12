// imports =================================================== //
import type { FC, HTMLAttributes } from "react";

// main ====================================================== //
type Data = string[]
interface Props {
    data: Data,
    value: string
}
type Select = FC<
    Props &
    HTMLAttributes<HTMLSelectElement>
>

// export ==================================================== //
export type { Select, Props };